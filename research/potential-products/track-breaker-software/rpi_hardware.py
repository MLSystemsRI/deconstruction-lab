"""
ML Systems — Raspberry Pi Hardware Interface
Deconstruction Lab | Track Breaker V1

Real hardware implementation for RPi 4/5.
Replaces SimulatedHardware in breaker_controller.py.

Wiring:
    BREAKER RELAY     → GPIO 17 (BCM) — HIGH = on, relay module controls solenoid valve
    MOTOR PWM         → GPIO 18 (BCM) — hardware PWM pin
    MOTOR DIR         → GPIO 27 (BCM) — HIGH = forward (down track), LOW = reverse (up)
    MOTOR ENABLE      → GPIO 22 (BCM) — HIGH = enabled
    E-STOP (NC)       → GPIO 23 (BCM) — pulled HIGH, goes LOW when pressed
    ENCODER A         → GPIO 24 (BCM) — quadrature encoder channel A
    ENCODER B         → GPIO 25 (BCM) — quadrature encoder channel B
    MPU6050 SDA       → GPIO 2 (I2C1 SDA)
    MPU6050 SCL       → GPIO 3 (I2C1 SCL)

Setup:
    sudo apt install python3-gpiozero python3-smbus2 python3-lgpio
    pip install smbus2
    sudo raspi-config → Interface Options → Enable I2C

Run:
    python breaker_controller.py --hardware rpi
"""

import time
import struct
import threading
from breaker_controller import HardwareInterface

try:
    from gpiozero import OutputDevice, PWMOutputDevice, Button
    GPIO_AVAILABLE = True
except ImportError:
    GPIO_AVAILABLE = False

try:
    import smbus2
    I2C_AVAILABLE = True
except ImportError:
    I2C_AVAILABLE = False


# ---------------------------------------------------------------------------
# MPU6050 Accelerometer (I2C)
# ---------------------------------------------------------------------------

class MPU6050:
    """
    MPU6050 accelerometer interface over I2C.
    Returns acceleration in g-force for vibration + rebound measurement.
    """

    ADDR = 0x68
    PWR_MGMT_1 = 0x6B
    ACCEL_XOUT_H = 0x3B
    ACCEL_CONFIG = 0x1C

    # Scale: ±16g (most range for impact measurement)
    ACCEL_SCALE = 16.0
    ACCEL_LSB = 2048.0  # LSB/g at ±16g

    def __init__(self, bus_num: int = 1):
        if not I2C_AVAILABLE:
            raise RuntimeError("smbus2 not installed: pip install smbus2")
        self.bus = smbus2.SMBus(bus_num)
        self._init_sensor()
        self._peak_accel = 0.0
        self._peak_lock = threading.Lock()

    def _init_sensor(self):
        # Wake up (clear sleep bit)
        self.bus.write_byte_data(self.ADDR, self.PWR_MGMT_1, 0x00)
        time.sleep(0.1)
        # Set ±16g range
        self.bus.write_byte_data(self.ADDR, self.ACCEL_CONFIG, 0x18)
        time.sleep(0.01)

    def read_accel(self) -> tuple[float, float, float]:
        """Read X, Y, Z acceleration in g-force."""
        data = self.bus.read_i2c_block_data(self.ADDR, self.ACCEL_XOUT_H, 6)
        ax = struct.unpack(">h", bytes(data[0:2]))[0] / self.ACCEL_LSB
        ay = struct.unpack(">h", bytes(data[2:4]))[0] / self.ACCEL_LSB
        az = struct.unpack(">h", bytes(data[4:6]))[0] / self.ACCEL_LSB
        return ax, ay, az

    def get_magnitude(self) -> float:
        """Total acceleration magnitude (minus gravity baseline of ~1g)."""
        ax, ay, az = self.read_accel()
        mag = (ax**2 + ay**2 + az**2) ** 0.5
        return abs(mag - 1.0)  # subtract gravity

    def read_peak_and_reset(self) -> float:
        """Read peak acceleration since last reset, then reset."""
        with self._peak_lock:
            peak = self._peak_accel
            self._peak_accel = 0.0
        return peak

    def update_peak(self):
        """Call frequently to track peak acceleration (for rebound measurement)."""
        mag = self.get_magnitude()
        with self._peak_lock:
            if mag > self._peak_accel:
                self._peak_accel = mag

    def close(self):
        self.bus.close()


# ---------------------------------------------------------------------------
# Quadrature Encoder (for carriage position)
# ---------------------------------------------------------------------------

class QuadratureEncoder:
    """
    Reads a rotary encoder on two GPIO pins.
    Converts pulse count to linear position via pulses_per_ft.
    """

    def __init__(self, pin_a: int, pin_b: int, pulses_per_ft: float = 600.0):
        """
        pulses_per_ft: encoder resolution × gear/pulley ratio.
        Example: 200 PPR encoder, 3:1 gear, 1-ft travel per revolution = 600.
        CALIBRATE THIS for your leadscrew/belt pitch.
        """
        if not GPIO_AVAILABLE:
            raise RuntimeError("gpiozero not installed: sudo apt install python3-gpiozero")
        self.pulses_per_ft = pulses_per_ft
        self._count = 0
        self._lock = threading.Lock()

        # Use gpiozero Button for edge detection
        self._pin_a = Button(pin_a, pull_up=True)
        self._pin_b = Button(pin_b, pull_up=True)
        self._pin_a.when_pressed = self._on_a_rise
        self._pin_a.when_released = self._on_a_fall

    def _on_a_rise(self):
        with self._lock:
            if self._pin_b.is_pressed:
                self._count -= 1  # reverse
            else:
                self._count += 1  # forward

    def _on_a_fall(self):
        with self._lock:
            if self._pin_b.is_pressed:
                self._count += 1
            else:
                self._count -= 1

    def get_position_ft(self) -> float:
        with self._lock:
            return self._count / self.pulses_per_ft

    def reset(self):
        with self._lock:
            self._count = 0

    def close(self):
        self._pin_a.close()
        self._pin_b.close()


# ---------------------------------------------------------------------------
# Raspberry Pi Hardware Interface
# ---------------------------------------------------------------------------

# Pin assignments (BCM numbering)
PIN_BREAKER_RELAY = 17
PIN_MOTOR_PWM = 18
PIN_MOTOR_DIR = 27
PIN_MOTOR_ENABLE = 22
PIN_ESTOP = 23
PIN_ENCODER_A = 24
PIN_ENCODER_B = 25

# Tuning constants — CALIBRATE THESE
ENCODER_PULSES_PER_FT = 600.0   # depends on leadscrew pitch + encoder PPR
REBOUND_SCALE = 6.5              # maps peak g-force to 0-100 rebound scale
ACCEL_SAMPLE_HZ = 200            # how fast to poll accelerometer


class RaspberryPiHardware(HardwareInterface):
    """
    Real hardware interface for RPi 4/5.

    Drop-in replacement for SimulatedHardware:
        # In breaker_controller.py main():
        hw = RaspberryPiHardware()
        controller = BreakController(config, hw)
        result = controller.run_full_sequence()
    """

    def __init__(self):
        if not GPIO_AVAILABLE:
            raise RuntimeError(
                "gpiozero not available. Install: sudo apt install python3-gpiozero python3-lgpio"
            )
        if not I2C_AVAILABLE:
            raise RuntimeError(
                "smbus2 not available. Install: pip install smbus2"
            )

        # GPIO outputs
        self._breaker_relay = OutputDevice(PIN_BREAKER_RELAY, active_high=True, initial_value=False)
        self._motor_pwm = PWMOutputDevice(PIN_MOTOR_PWM, frequency=1000, initial_value=0)
        self._motor_dir = OutputDevice(PIN_MOTOR_DIR, active_high=True, initial_value=True)
        self._motor_enable = OutputDevice(PIN_MOTOR_ENABLE, active_high=True, initial_value=False)

        # E-stop — normally closed, pulled high. Goes LOW when pressed.
        self._estop = Button(PIN_ESTOP, pull_up=True)
        self._estop.when_pressed = self._on_estop

        # Encoder
        self._encoder = QuadratureEncoder(
            PIN_ENCODER_A, PIN_ENCODER_B,
            pulses_per_ft=ENCODER_PULSES_PER_FT,
        )

        # Accelerometer
        self._accel = MPU6050(bus_num=1)

        # Background thread for high-frequency accelerometer sampling
        self._accel_running = True
        self._accel_thread = threading.Thread(target=self._accel_loop, daemon=True)
        self._accel_thread.start()

        # State
        self._is_breaking = False
        self._estopped = False

        print("[HW] Raspberry Pi hardware initialized")
        print(f"[HW] Breaker relay: GPIO {PIN_BREAKER_RELAY}")
        print(f"[HW] Motor PWM: GPIO {PIN_MOTOR_PWM}")
        print(f"[HW] Motor DIR: GPIO {PIN_MOTOR_DIR}")
        print(f"[HW] E-Stop: GPIO {PIN_ESTOP}")
        print(f"[HW] Encoder: GPIO {PIN_ENCODER_A}/{PIN_ENCODER_B}")
        print(f"[HW] MPU6050: I2C bus 1, addr 0x{MPU6050.ADDR:02X}")

    # --- Accelerometer background sampling ---

    def _accel_loop(self):
        """High-frequency accelerometer polling to catch peak rebound."""
        interval = 1.0 / ACCEL_SAMPLE_HZ
        while self._accel_running:
            try:
                self._accel.update_peak()
            except Exception:
                pass  # I2C glitch — skip sample
            time.sleep(interval)

    # --- E-Stop ---

    def _on_estop(self):
        """Hardware e-stop interrupt. Kills everything immediately."""
        print("[HW] *** E-STOP ACTIVATED ***")
        self._estopped = True
        self._breaker_relay.off()
        self._motor_pwm.value = 0
        self._motor_enable.off()
        self._is_breaking = False

    def _check_estop(self):
        if self._estopped:
            raise RuntimeError("E-STOP active. Reset hardware and restart.")

    # --- HardwareInterface implementation ---

    def breaker_on(self):
        self._check_estop()
        self._breaker_relay.on()
        self._is_breaking = True
        # Reset peak for fresh rebound readings
        self._accel.read_peak_and_reset()

    def breaker_off(self):
        self._breaker_relay.off()
        self._is_breaking = False

    def set_carriage_speed(self, speed_pct: float):
        """
        Set carriage speed: -100 to +100.
        Positive = down track (forward). Negative = up track (reverse).
        """
        self._check_estop()

        if abs(speed_pct) < 1.0:
            # Dead zone — stop motor
            self._motor_pwm.value = 0
            self._motor_enable.off()
            return

        # Direction
        if speed_pct > 0:
            self._motor_dir.on()   # forward (down)
        else:
            self._motor_dir.off()  # reverse (up)

        # Speed (0.0 to 1.0)
        self._motor_enable.on()
        self._motor_pwm.value = min(abs(speed_pct) / 100.0, 1.0)

    def get_carriage_position_ft(self) -> float:
        return self._encoder.get_position_ft()

    def get_vibration_g(self) -> float:
        """Current vibration magnitude in g-force."""
        try:
            return self._accel.get_magnitude()
        except Exception:
            return 0.0

    def get_rebound_value(self) -> float:
        """
        Peak acceleration captured during last breaker tap, scaled to 0-100.
        Higher rebound = harder concrete.
        """
        peak_g = self._accel.read_peak_and_reset()
        # Scale: ~15g peak on hard concrete ≈ rebound 100
        scaled = min(peak_g * REBOUND_SCALE, 100.0)
        return scaled

    def emergency_stop(self):
        self._on_estop()

    # --- Cleanup ---

    def close(self):
        """Release all hardware resources. Call on shutdown."""
        print("[HW] Shutting down hardware...")
        self._accel_running = False
        self._accel_thread.join(timeout=1.0)

        self._breaker_relay.off()
        self._motor_pwm.value = 0
        self._motor_enable.off()

        self._breaker_relay.close()
        self._motor_pwm.close()
        self._motor_dir.close()
        self._motor_enable.close()
        self._estop.close()
        self._encoder.close()
        self._accel.close()

        print("[HW] Hardware released.")

    def __enter__(self):
        return self

    def __exit__(self, *args):
        self.close()


# ---------------------------------------------------------------------------
# Quick test — run standalone to verify wiring
# ---------------------------------------------------------------------------

def test_hardware():
    """
    Run this first to verify all hardware connections.
    Tests each component individually before running the full breaker sequence.
    """
    print("=" * 60)
    print("TRACK BREAKER — HARDWARE TEST")
    print("=" * 60)

    with RaspberryPiHardware() as hw:

        # 1. Accelerometer
        print("\n[TEST] Accelerometer...")
        for i in range(5):
            vib = hw.get_vibration_g()
            print(f"  Reading {i+1}: {vib:.2f} g")
            time.sleep(0.2)
        print("  ✓ Accelerometer OK")

        # 2. Encoder
        print("\n[TEST] Encoder — move carriage by hand...")
        start_pos = hw.get_carriage_position_ft()
        print(f"  Start position: {start_pos:.3f} ft")
        print("  Move carriage now (3 seconds)...")
        time.sleep(3)
        end_pos = hw.get_carriage_position_ft()
        print(f"  End position: {end_pos:.3f} ft")
        print(f"  Moved: {end_pos - start_pos:.3f} ft")
        if abs(end_pos - start_pos) > 0.001:
            print("  ✓ Encoder OK")
        else:
            print("  ⚠ No movement detected — check wiring or move carriage further")

        # 3. Motor (short pulse)
        print("\n[TEST] Motor — short forward pulse...")
        input("  Press ENTER to run motor for 0.5s (or Ctrl+C to skip): ")
        hw.set_carriage_speed(30)
        time.sleep(0.5)
        hw.set_carriage_speed(0)
        print(f"  Position after pulse: {hw.get_carriage_position_ft():.3f} ft")
        print("  ✓ Motor test done")

        # 4. Motor reverse
        print("\n[TEST] Motor — short reverse pulse...")
        input("  Press ENTER to reverse for 0.5s: ")
        hw.set_carriage_speed(-30)
        time.sleep(0.5)
        hw.set_carriage_speed(0)
        print(f"  Position after reverse: {hw.get_carriage_position_ft():.3f} ft")
        print("  ✓ Reverse test done")

        # 5. Breaker relay (click test — no hydraulics needed)
        print("\n[TEST] Breaker relay — listen for click...")
        input("  Press ENTER to toggle relay (or Ctrl+C to skip): ")
        hw.breaker_on()
        print("  Relay ON — you should hear a click")
        time.sleep(1)
        hw.breaker_off()
        print("  Relay OFF")
        print("  ✓ Relay test done")

        # 6. E-Stop
        print("\n[TEST] E-Stop — press the button now...")
        print("  Waiting 5 seconds for e-stop press...")
        time.sleep(5)
        if hw._estopped:
            print("  ✓ E-Stop triggered correctly")
        else:
            print("  ⚠ E-Stop not triggered — check wiring (should be NC, pulled HIGH)")

    print("\n" + "=" * 60)
    print("HARDWARE TEST COMPLETE")
    print("=" * 60)


if __name__ == "__main__":
    test_hardware()
