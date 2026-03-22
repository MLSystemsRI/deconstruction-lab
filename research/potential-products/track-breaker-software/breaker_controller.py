"""
ML Systems — Track Breaker Controller V1
Deconstruction Lab | Lucent Lens

Controls the wall-mounted automated breaking system:
1. SCAN   — Camera baseline, map the wall surface
2. TEST   — Strength test via tap-and-measure (accelerometer rebound)
3. BREAK  — Automated line breaking with camera-guided feed rate
4. DETECT — Rebar detection, through-break detection, stall detection

Hardware:
- Camera: USB (OpenCV)
- Breaker on/off: Relay via serial (Arduino) or GPIO (RPi)
- Carriage motor: PWM speed control via serial/GPIO
- Accelerometer: MPU6050 on frame (I2C via Arduino)

Run: python breaker_controller.py
"""

import cv2
import numpy as np
import time
import json
import os
from datetime import datetime
from dataclasses import dataclass, field, asdict
from enum import Enum
from pathlib import Path

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

@dataclass
class BreakerConfig:
    # Breaker specs (HYCON HH27)
    impact_energy_j: float = 75.0
    max_bpm: int = 1400
    flow_lpm: float = 20.0
    pressure_bar: float = 130.0

    # Carriage
    max_feed_rate_ft_per_min: float = 2.0
    min_feed_rate_ft_per_min: float = 0.1
    track_length_ft: float = 8.0

    # Strength test
    test_tap_count: int = 5
    test_tap_spacing_in: float = 6.0
    tap_duration_sec: float = 0.3

    # Camera
    camera_index: int = 0
    frame_width: int = 1280
    frame_height: int = 720
    fracture_detection_threshold: int = 40  # edge detection sensitivity

    # Safety
    max_vibration_g: float = 15.0  # shutdown if frame vibration exceeds this
    max_run_time_min: float = 30.0  # max continuous run per line
    stall_timeout_sec: float = 10.0  # no fracture progress = stall

    # Data logging
    log_dir: str = "break_data"


class BreakerState(Enum):
    IDLE = "idle"
    SCANNING = "scanning"
    STRENGTH_TEST = "strength_test"
    BREAKING = "breaking"
    PAUSED = "paused"
    REBAR_DETECTED = "rebar_detected"
    THROUGH_BREAK = "through_break"
    STALLED = "stalled"
    COMPLETE = "complete"
    ERROR = "error"


# ---------------------------------------------------------------------------
# Hardware Interface (abstract — implement for your board)
# ---------------------------------------------------------------------------

class HardwareInterface:
    """
    Abstract hardware interface. Subclass for Arduino/RPi/simulated.
    """

    def breaker_on(self):
        raise NotImplementedError

    def breaker_off(self):
        raise NotImplementedError

    def set_carriage_speed(self, speed_pct: float):
        """Set carriage speed as percentage of max (0-100). Negative = reverse."""
        raise NotImplementedError

    def get_carriage_position_ft(self) -> float:
        """Current carriage position in feet from top of track."""
        raise NotImplementedError

    def get_vibration_g(self) -> float:
        """Current frame vibration in g-force (from accelerometer)."""
        raise NotImplementedError

    def get_rebound_value(self) -> float:
        """Rebound intensity from last tap (accelerometer peak, 0-100 scale)."""
        raise NotImplementedError

    def emergency_stop(self):
        raise NotImplementedError


class SimulatedHardware(HardwareInterface):
    """Simulated hardware for testing without physical equipment."""

    def __init__(self):
        self._breaker_on = False
        self._position = 0.0
        self._speed = 0.0
        self._start_time = time.time()

    def breaker_on(self):
        self._breaker_on = True

    def breaker_off(self):
        self._breaker_on = False

    def set_carriage_speed(self, speed_pct: float):
        self._speed = speed_pct

    def get_carriage_position_ft(self) -> float:
        if self._breaker_on and self._speed > 0:
            self._position += (self._speed / 100.0) * 0.01
        return min(self._position, 8.0)

    def get_vibration_g(self) -> float:
        if self._breaker_on:
            return 5.0 + np.random.normal(0, 1.5)
        return 0.1

    def get_rebound_value(self) -> float:
        # Simulate varying concrete hardness (0-100)
        return 45.0 + np.random.normal(0, 8)

    def emergency_stop(self):
        self._breaker_on = False
        self._speed = 0.0


# ---------------------------------------------------------------------------
# Camera / Vision System
# ---------------------------------------------------------------------------

class VisionSystem:
    """Camera-based fracture detection and wall scanning."""

    def __init__(self, config: BreakerConfig):
        self.config = config
        self.cap = None
        self.baseline_frame = None
        self.prev_frame = None
        self.fracture_map = None
        self.frame_count = 0

    def start(self):
        self.cap = cv2.VideoCapture(self.config.camera_index)
        if self.cap and self.cap.isOpened():
            self.cap.set(cv2.CAP_PROP_FRAME_WIDTH, self.config.frame_width)
            self.cap.set(cv2.CAP_PROP_FRAME_HEIGHT, self.config.frame_height)
            return True
        return False

    def stop(self):
        if self.cap:
            self.cap.release()

    def capture_frame(self) -> np.ndarray | None:
        if not self.cap or not self.cap.isOpened():
            return None
        ret, frame = self.cap.read()
        if ret:
            self.frame_count += 1
            return frame
        return None

    def capture_baseline(self) -> np.ndarray | None:
        """Capture baseline image of the wall before breaking."""
        frame = self.capture_frame()
        if frame is not None:
            self.baseline_frame = frame.copy()
            self.prev_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            h, w = frame.shape[:2]
            self.fracture_map = np.zeros((h, w), dtype=np.uint8)
        return frame

    def scan_wall_surface(self) -> dict:
        """
        Analyze the wall surface from baseline image.
        Returns density estimate and surface condition.
        """
        if self.baseline_frame is None:
            return {"error": "no baseline captured"}

        gray = cv2.cvtColor(self.baseline_frame, cv2.COLOR_BGR2GRAY)

        # Surface texture analysis
        # Smoother = denser = higher mean, lower std deviation
        mean_intensity = float(np.mean(gray))
        std_intensity = float(np.std(gray))

        # Edge detection for existing cracks/features
        edges = cv2.Canny(gray, 50, 150)
        existing_crack_pixels = int(np.sum(edges > 0))
        total_pixels = gray.shape[0] * gray.shape[1]
        crack_ratio = existing_crack_pixels / total_pixels

        # Color analysis — dark spots may indicate water damage or voids
        hsv = cv2.cvtColor(self.baseline_frame, cv2.COLOR_BGR2HSV)
        dark_mask = hsv[:, :, 2] < 60
        dark_ratio = float(np.sum(dark_mask)) / total_pixels

        # Estimate surface condition
        if crack_ratio > 0.05:
            condition = "heavily_cracked"
        elif crack_ratio > 0.02:
            condition = "moderately_cracked"
        elif crack_ratio > 0.005:
            condition = "minor_cracks"
        else:
            condition = "intact"

        # Density estimate (relative — calibrate with strength test)
        # Higher mean intensity + lower std = smoother = likely denser
        density_score = (mean_intensity / 255.0) * (1.0 - min(std_intensity / 80.0, 1.0))
        density_score = round(density_score * 100, 1)

        return {
            "mean_intensity": round(mean_intensity, 1),
            "std_intensity": round(std_intensity, 1),
            "existing_crack_ratio": round(crack_ratio, 4),
            "dark_spot_ratio": round(dark_ratio, 4),
            "surface_condition": condition,
            "density_score": density_score,  # 0-100, higher = denser
            "resolution": f"{gray.shape[1]}x{gray.shape[0]}",
        }

    def detect_fracture_progress(self) -> dict:
        """
        Compare current frame to previous frame to detect new fractures.
        Returns fracture metrics for feed rate control.
        """
        frame = self.capture_frame()
        if frame is None or self.prev_frame is None:
            return {"fracture_detected": False, "progress": 0.0}

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Frame difference — new cracks show as changed pixels
        diff = cv2.absdiff(gray, self.prev_frame)
        _, thresh = cv2.threshold(
            diff, self.config.fracture_detection_threshold, 255, cv2.THRESH_BINARY
        )

        # Morphological cleanup — remove noise, connect fracture lines
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 7))  # vertical bias
        cleaned = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)

        # Fracture pixel count
        fracture_pixels = int(np.sum(cleaned > 0))
        total_pixels = gray.shape[0] * gray.shape[1]
        fracture_ratio = fracture_pixels / total_pixels

        # Update cumulative fracture map
        if self.fracture_map is not None:
            self.fracture_map = cv2.bitwise_or(self.fracture_map, cleaned)

        # Detect if fracture is propagating vertically (good) or laterally (problem)
        if fracture_pixels > 100:
            coords = np.where(cleaned > 0)
            y_spread = int(np.max(coords[0]) - np.min(coords[0])) if len(coords[0]) > 0 else 0
            x_spread = int(np.max(coords[1]) - np.min(coords[1])) if len(coords[1]) > 0 else 0
            vertical_ratio = y_spread / max(x_spread, 1)
        else:
            y_spread = 0
            x_spread = 0
            vertical_ratio = 0.0

        self.prev_frame = gray.copy()

        return {
            "fracture_detected": fracture_pixels > 50,
            "fracture_pixels": fracture_pixels,
            "fracture_ratio": round(fracture_ratio, 6),
            "y_spread": y_spread,
            "x_spread": x_spread,
            "vertical_ratio": round(vertical_ratio, 2),
            "propagating_well": vertical_ratio > 1.5,  # fracture running vertically = good
        }

    def detect_rebar(self) -> dict:
        """
        Detect exposed rebar in the fracture zone.
        Rebar appears as dark linear features with distinct color (rust/gray metallic).
        """
        frame = self.capture_frame()
        if frame is None:
            return {"rebar_detected": False}

        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        # Rust-colored rebar: orange-brown hue, moderate saturation
        lower_rust = np.array([5, 50, 50])
        upper_rust = np.array([25, 255, 200])
        rust_mask = cv2.inRange(hsv, lower_rust, upper_rust)

        # Gray metallic rebar: low saturation, medium value
        lower_metal = np.array([0, 0, 80])
        upper_metal = np.array([180, 40, 180])
        metal_mask = cv2.inRange(hsv, lower_metal, upper_metal)

        # Combine and look for linear features (rebar is straight)
        combined = cv2.bitwise_or(rust_mask, metal_mask)
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1, 15))  # horizontal lines
        rebar_candidates = cv2.morphologyEx(combined, cv2.MORPH_OPEN, kernel)

        rebar_pixels = int(np.sum(rebar_candidates > 0))
        rebar_detected = rebar_pixels > 500  # threshold — tune with real data

        result = {
            "rebar_detected": rebar_detected,
            "rebar_pixels": rebar_pixels,
        }

        if rebar_detected:
            coords = np.where(rebar_candidates > 0)
            if len(coords[0]) > 0:
                result["rebar_y_center"] = int(np.mean(coords[0]))
                result["rebar_x_center"] = int(np.mean(coords[1]))

        return result

    def detect_through_break(self) -> dict:
        """
        Detect if the fracture has gone all the way through the wall.
        Through-break shows as: darkness/void behind the wall, or light from the other side.
        """
        frame = self.capture_frame()
        if frame is None:
            return {"through_break": False}

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Look for very dark regions (void behind wall) in the fracture zone
        # Use the cumulative fracture map as a mask
        if self.fracture_map is not None and np.sum(self.fracture_map) > 0:
            fracture_zone = cv2.bitwise_and(gray, gray, mask=self.fracture_map)
            dark_in_fracture = np.sum(fracture_zone < 30)
            total_fracture = np.sum(self.fracture_map > 0)
            if total_fracture > 0:
                void_ratio = dark_in_fracture / total_fracture
            else:
                void_ratio = 0.0
        else:
            void_ratio = 0.0

        return {
            "through_break": void_ratio > 0.3,
            "void_ratio": round(void_ratio, 3),
        }

    def save_frame(self, path: str, label: str = ""):
        """Save current frame with optional label overlay."""
        frame = self.capture_frame()
        if frame is not None:
            if label:
                cv2.putText(
                    frame, label, (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2,
                )
            cv2.imwrite(path, frame)

    def save_fracture_map(self, path: str):
        """Save cumulative fracture map."""
        if self.fracture_map is not None:
            cv2.imwrite(path, self.fracture_map)


# ---------------------------------------------------------------------------
# Strength Tester
# ---------------------------------------------------------------------------

class StrengthTester:
    """
    Estimates concrete compressive strength via tap-and-rebound method.
    Similar principle to a Schmidt hammer — harder concrete = higher rebound.

    The breaker does short taps at fixed positions along the track.
    Accelerometer on the frame measures rebound intensity.
    """

    # Calibration curve: rebound value (0-100) → estimated PSI
    # Based on Schmidt hammer correlation, adapted for hydraulic breaker rebound.
    # THIS MUST BE CALIBRATED WITH KNOWN SAMPLES.
    REBOUND_TO_PSI = [
        (10, 1000),   # very weak
        (20, 1500),
        (30, 2000),
        (40, 2500),
        (50, 3000),   # typical residential
        (60, 3500),
        (70, 4000),
        (80, 5000),
        (90, 6000),   # high strength
    ]

    def __init__(self, config: BreakerConfig, hw: HardwareInterface):
        self.config = config
        self.hw = hw
        self.results = []

    def run_test(self) -> dict:
        """
        Run strength test: multiple taps along the track, measure rebound.
        Returns estimated strength profile.
        """
        self.results = []

        for i in range(self.config.test_tap_count):
            # Move carriage to test position
            target_ft = (i * self.config.test_tap_spacing_in) / 12.0
            self._move_to_position(target_ft)
            time.sleep(0.5)  # settle

            # Single tap
            self.hw.breaker_on()
            time.sleep(self.config.tap_duration_sec)
            self.hw.breaker_off()
            time.sleep(0.3)  # wait for rebound reading

            rebound = self.hw.get_rebound_value()
            vibration = self.hw.get_vibration_g()
            estimated_psi = self._rebound_to_psi(rebound)

            self.results.append({
                "position_ft": round(target_ft, 2),
                "rebound": round(rebound, 1),
                "vibration_g": round(vibration, 1),
                "estimated_psi": estimated_psi,
                "tap_index": i,
            })

        # Aggregate
        rebounds = [r["rebound"] for r in self.results]
        psi_values = [r["estimated_psi"] for r in self.results]

        avg_rebound = sum(rebounds) / len(rebounds)
        avg_psi = sum(psi_values) / len(psi_values)
        min_psi = min(psi_values)
        max_psi = max(psi_values)
        std_psi = float(np.std(psi_values))

        # Recommend feed rate based on strength
        recommended_feed = self._psi_to_feed_rate(avg_psi)

        # Uniformity check — high variance = inconsistent concrete = slow down
        uniformity = "uniform" if std_psi < 300 else "variable" if std_psi < 600 else "highly_variable"

        return {
            "tap_count": len(self.results),
            "avg_rebound": round(avg_rebound, 1),
            "avg_estimated_psi": round(avg_psi, 0),
            "min_psi": round(min_psi, 0),
            "max_psi": round(max_psi, 0),
            "std_psi": round(std_psi, 0),
            "uniformity": uniformity,
            "recommended_feed_ft_per_min": round(recommended_feed, 2),
            "taps": self.results,
        }

    def _rebound_to_psi(self, rebound: float) -> float:
        """Interpolate rebound value to estimated PSI."""
        for i in range(len(self.REBOUND_TO_PSI) - 1):
            r1, p1 = self.REBOUND_TO_PSI[i]
            r2, p2 = self.REBOUND_TO_PSI[i + 1]
            if r1 <= rebound <= r2:
                ratio = (rebound - r1) / (r2 - r1)
                return p1 + ratio * (p2 - p1)
        if rebound < self.REBOUND_TO_PSI[0][0]:
            return self.REBOUND_TO_PSI[0][1]
        return self.REBOUND_TO_PSI[-1][1]

    def _psi_to_feed_rate(self, psi: float) -> float:
        """Map concrete strength to recommended feed rate."""
        # Weaker concrete = faster feed, stronger = slower
        max_feed = self.config.max_feed_rate_ft_per_min
        min_feed = self.config.min_feed_rate_ft_per_min
        # Linear scale: 1500 PSI = max feed, 6000 PSI = min feed
        ratio = 1.0 - min(max((psi - 1500) / 4500, 0), 1.0)
        return min_feed + ratio * (max_feed - min_feed)

    def _move_to_position(self, target_ft: float):
        """Move carriage to target position (blocking)."""
        timeout = time.time() + 30
        while time.time() < timeout:
            current = self.hw.get_carriage_position_ft()
            if abs(current - target_ft) < 0.05:
                self.hw.set_carriage_speed(0)
                return
            if current < target_ft:
                self.hw.set_carriage_speed(50)
            else:
                self.hw.set_carriage_speed(-50)
            time.sleep(0.05)
        self.hw.set_carriage_speed(0)


# ---------------------------------------------------------------------------
# Break Controller (main state machine)
# ---------------------------------------------------------------------------

class BreakController:
    """
    Main controller. Runs the full sequence:
    SCAN → STRENGTH TEST → BREAK → monitor until complete.
    """

    def __init__(self, config: BreakerConfig, hw: HardwareInterface):
        self.config = config
        self.hw = hw
        self.vision = VisionSystem(config)
        self.tester = StrengthTester(config, hw)
        self.state = BreakerState.IDLE
        self.session_data = {
            "session_id": datetime.now().strftime("%Y%m%d_%H%M%S"),
            "config": asdict(config),
            "events": [],
        }
        self.feed_rate = config.max_feed_rate_ft_per_min * 0.5  # start at 50%
        self.break_start_time = None
        self.last_fracture_time = None
        self.line_number = 0

    def log_event(self, event_type: str, data: dict):
        entry = {
            "timestamp": datetime.now().isoformat(),
            "state": self.state.value,
            "event": event_type,
            "position_ft": round(self.hw.get_carriage_position_ft(), 3),
            **data,
        }
        self.session_data["events"].append(entry)

    # --- Phase 1: SCAN ---

    def scan(self) -> dict:
        """Capture baseline and analyze wall surface."""
        self.state = BreakerState.SCANNING
        print("[SCAN] Starting wall surface scan...")

        if not self.vision.start():
            print("[SCAN] ERROR: Camera not available. Running without vision.")
            self.log_event("scan_failed", {"reason": "camera_unavailable"})
            return {"error": "camera_unavailable"}

        baseline = self.vision.capture_baseline()
        if baseline is None:
            return {"error": "failed_to_capture_baseline"}

        surface = self.vision.scan_wall_surface()

        # Save baseline image
        log_dir = Path(self.config.log_dir) / self.session_data["session_id"]
        log_dir.mkdir(parents=True, exist_ok=True)
        self.vision.save_frame(
            str(log_dir / "baseline.jpg"),
            label=f"Baseline | Density: {surface.get('density_score', '?')}"
        )

        self.log_event("scan_complete", surface)
        self.session_data["scan"] = surface

        print(f"[SCAN] Surface condition: {surface['surface_condition']}")
        print(f"[SCAN] Density score: {surface['density_score']}/100")
        print(f"[SCAN] Existing cracks: {surface['existing_crack_ratio']:.4f}")

        return surface

    # --- Phase 2: STRENGTH TEST ---

    def strength_test(self) -> dict:
        """Run tap-and-rebound strength test."""
        self.state = BreakerState.STRENGTH_TEST
        print(f"[TEST] Running {self.config.test_tap_count}-point strength test...")

        results = self.tester.run_test()

        self.feed_rate = results["recommended_feed_ft_per_min"]
        self.log_event("strength_test_complete", results)
        self.session_data["strength_test"] = results

        print(f"[TEST] Avg estimated strength: {results['avg_estimated_psi']:.0f} PSI")
        print(f"[TEST] Uniformity: {results['uniformity']}")
        print(f"[TEST] Recommended feed rate: {results['recommended_feed_ft_per_min']:.2f} ft/min")

        return results

    # --- Phase 3: BREAK ---

    def break_line(self) -> dict:
        """
        Execute one vertical breaking line.
        Automated feed with camera-guided speed adjustment.
        """
        self.state = BreakerState.BREAKING
        self.line_number += 1
        self.break_start_time = time.time()
        self.last_fracture_time = time.time()

        print(f"[BREAK] Starting line {self.line_number}")
        print(f"[BREAK] Feed rate: {self.feed_rate:.2f} ft/min")
        print(f"[BREAK] Track length: {self.config.track_length_ft} ft")

        # Move carriage to top
        self.hw.set_carriage_speed(-100)
        time.sleep(2)
        self.hw.set_carriage_speed(0)

        # Start breaking
        self.hw.breaker_on()
        speed_pct = (self.feed_rate / self.config.max_feed_rate_ft_per_min) * 100
        self.hw.set_carriage_speed(speed_pct)

        line_result = {
            "line_number": self.line_number,
            "start_feed_rate": self.feed_rate,
            "adjustments": [],
            "rebar_positions": [],
            "final_position_ft": 0.0,
            "duration_sec": 0.0,
            "outcome": "unknown",
        }

        try:
            while self.state == BreakerState.BREAKING:
                position = self.hw.get_carriage_position_ft()
                elapsed = time.time() - self.break_start_time

                # --- Safety checks ---
                vibration = self.hw.get_vibration_g()
                if vibration > self.config.max_vibration_g:
                    print(f"[BREAK] SAFETY: Vibration {vibration:.1f}g exceeds limit")
                    self._pause("vibration_exceeded")
                    break

                if elapsed > self.config.max_run_time_min * 60:
                    print("[BREAK] Max run time reached")
                    self._pause("max_time")
                    break

                # --- Position check: end of track ---
                if position >= self.config.track_length_ft - 0.1:
                    print(f"[BREAK] Reached end of track at {position:.2f} ft")
                    self.state = BreakerState.COMPLETE
                    line_result["outcome"] = "complete"
                    break

                # --- Camera checks (every 0.5 sec) ---
                fracture = self.vision.detect_fracture_progress()
                rebar = self.vision.detect_rebar()
                through = self.vision.detect_through_break()

                # Fracture-guided speed adjustment
                if fracture["fracture_detected"]:
                    self.last_fracture_time = time.time()
                    if fracture["propagating_well"]:
                        # Fracture running well — speed up slightly
                        self.feed_rate = min(
                            self.feed_rate * 1.05,
                            self.config.max_feed_rate_ft_per_min,
                        )
                    else:
                        # Fracture spreading laterally — slow down
                        self.feed_rate = max(
                            self.feed_rate * 0.8,
                            self.config.min_feed_rate_ft_per_min,
                        )
                    speed_pct = (self.feed_rate / self.config.max_feed_rate_ft_per_min) * 100
                    self.hw.set_carriage_speed(speed_pct)

                    line_result["adjustments"].append({
                        "time": round(elapsed, 1),
                        "position_ft": round(position, 2),
                        "new_feed_rate": round(self.feed_rate, 3),
                        "reason": "propagating_well" if fracture["propagating_well"] else "lateral_spread",
                    })

                # Stall detection — no fracture progress
                if time.time() - self.last_fracture_time > self.config.stall_timeout_sec:
                    print(f"[BREAK] Stall detected at {position:.2f} ft — no fracture for {self.config.stall_timeout_sec}s")
                    self.state = BreakerState.STALLED
                    line_result["outcome"] = "stalled"
                    break

                # Rebar detection
                if rebar["rebar_detected"]:
                    print(f"[BREAK] Rebar detected at {position:.2f} ft")
                    self.log_event("rebar_detected", {
                        "position_ft": position, **rebar
                    })
                    line_result["rebar_positions"].append(round(position, 2))
                    # Don't stop — break through concrete around rebar
                    # Slow down through rebar zone
                    self.feed_rate = max(
                        self.feed_rate * 0.5,
                        self.config.min_feed_rate_ft_per_min,
                    )
                    speed_pct = (self.feed_rate / self.config.max_feed_rate_ft_per_min) * 100
                    self.hw.set_carriage_speed(speed_pct)

                # Through-break detection
                if through["through_break"]:
                    print(f"[BREAK] Through-break detected at {position:.2f} ft!")
                    self.state = BreakerState.THROUGH_BREAK
                    line_result["outcome"] = "through_break"
                    break

                time.sleep(0.5)

        except KeyboardInterrupt:
            print("[BREAK] Interrupted by operator")
            line_result["outcome"] = "operator_stop"
        finally:
            self.hw.breaker_off()
            self.hw.set_carriage_speed(0)

        line_result["final_position_ft"] = round(self.hw.get_carriage_position_ft(), 2)
        line_result["duration_sec"] = round(time.time() - self.break_start_time, 1)
        line_result["final_feed_rate"] = round(self.feed_rate, 3)

        self.log_event("line_complete", line_result)
        self.session_data.setdefault("lines", []).append(line_result)

        print(f"[BREAK] Line {self.line_number} complete: {line_result['outcome']}")
        print(f"[BREAK] Distance: {line_result['final_position_ft']} ft in {line_result['duration_sec']}s")
        print(f"[BREAK] Rebar hits: {len(line_result['rebar_positions'])}")

        return line_result

    def _pause(self, reason: str):
        self.state = BreakerState.PAUSED
        self.hw.breaker_off()
        self.hw.set_carriage_speed(0)
        self.log_event("paused", {"reason": reason})

    # --- Full Sequence ---

    def run_full_sequence(self) -> dict:
        """Run complete sequence: scan → test → break."""
        print("=" * 60)
        print("ML SYSTEMS — TRACK BREAKER V1")
        print(f"Session: {self.session_data['session_id']}")
        print("=" * 60)

        # Phase 1: Scan
        scan_result = self.scan()
        if "error" not in scan_result:
            print()

        # Phase 2: Strength Test
        strength_result = self.strength_test()
        print()

        # Phase 3: Break
        line_result = self.break_line()

        # Save session data
        self._save_session()

        return {
            "scan": scan_result,
            "strength": strength_result,
            "break": line_result,
        }

    def _save_session(self):
        """Save all session data to disk (ontology feed)."""
        log_dir = Path(self.config.log_dir) / self.session_data["session_id"]
        log_dir.mkdir(parents=True, exist_ok=True)

        # Save session JSON
        session_path = log_dir / "session.json"
        with open(session_path, "w") as f:
            json.dump(self.session_data, f, indent=2, default=str)

        # Save fracture map
        self.vision.save_fracture_map(str(log_dir / "fracture_map.png"))

        # Save final frame
        self.vision.save_frame(
            str(log_dir / "final_frame.jpg"),
            label=f"Line {self.line_number} | {self.state.value}"
        )

        print(f"\n[DATA] Session saved to {log_dir}")
        print(f"[DATA] → session.json (ontology feed)")
        print(f"[DATA] → baseline.jpg, final_frame.jpg, fracture_map.png")


# ---------------------------------------------------------------------------
# Entry Point
# ---------------------------------------------------------------------------

def main():
    import argparse

    parser = argparse.ArgumentParser(description="ML Systems — Track Breaker V1")
    parser.add_argument(
        "--hardware", choices=["sim", "rpi"], default="sim",
        help="Hardware backend: 'sim' for simulated (default), 'rpi' for Raspberry Pi",
    )
    parser.add_argument(
        "--test-hardware", action="store_true",
        help="Run hardware wiring test (RPi only) then exit",
    )
    args = parser.parse_args()

    config = BreakerConfig()

    if args.hardware == "rpi":
        from rpi_hardware import RaspberryPiHardware, test_hardware
        if args.test_hardware:
            test_hardware()
            return
        hw = RaspberryPiHardware()
    else:
        if args.test_hardware:
            print("Hardware test requires --hardware rpi")
            return
        hw = SimulatedHardware()

    try:
        controller = BreakController(config, hw)
        result = controller.run_full_sequence()

        print("\n" + "=" * 60)
        print("SESSION SUMMARY")
        print("=" * 60)
        print(json.dumps(result, indent=2, default=str))
    finally:
        if hasattr(hw, "close"):
            hw.close()


if __name__ == "__main__":
    main()
