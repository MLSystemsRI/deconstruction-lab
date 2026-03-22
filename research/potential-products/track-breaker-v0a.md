# Track Breaker V0a — Swing-Bar Concept

> **Status:** Engineering concept
> **Author:** ML Systems LLC — Deconstruction Lab
> **Date:** 2026-03-07
> **Predecessor:** V0 (rigid bolted frame)
> **Successor:** V1/V2 (motorized + camera-guided, ~1 year)

---

## 1. Concept Overview

V0a replaces the rigid, bolt-on frame of V0 with a **top-mounted horizontal swing bar** that pivots the entire vertical track assembly to the next fracture line position in seconds. Same breaker. Same power pack. Dramatically faster repositioning.

**Core insight:** The most expensive step in V0 is repositioning — unbolt 4 anchors, walk the frame, re-drill, re-anchor (~10 min per line). The swing bar eliminates this by letting the operator pivot the track assembly along an arc from a single top anchor point.

**Secondary insight:** The operator can lean body weight into the swing bar during breaking, adding reaction force. The bar becomes both a positioning tool and a force amplifier.

### What V0a Changes vs V0

| Aspect | V0 (Rigid Frame) | V0a (Swing Bar) |
|---|---|---|
| Frame | Bolt-on rectangular frame, 4 anchors | Pivot anchor + horizontal swing arm |
| Repositioning | Unbolt, walk, re-drill, re-anchor | Swing bar to next position (~seconds) |
| Reposition time | ~10 min per line | ~1 min per swing, ~10 min per pivot move |
| Anchors per line | 4 (2 adhesive + 2 wedge) | 0 (swing), 1 pivot per 3-4 lines |
| Operators needed | 2 (carry + setup) | 1 (swing + operate) |
| Fab complexity | Medium (2-section frame, flange) | Lower (arm + pivot + track hanger) |

### What V0a Keeps from V0

- HYCON HH27 hydraulic breaker (75J, 1,400 BPM)
- HYCON HPP09 hydraulic power pack
- 30 ft hydraulic hoses with quick-connect
- Vertical carriage riding a rail (gravity feed + friction brake)
- The wall as reaction force
- Vertical fracture line operation
- Gravity debris clearing

---

## 2. Diagrams

### Side View — Swing Bar Assembly

```
    WALL FACE (top view looking down)
    ════════════════════════════════════════════

    PIVOT ANCHOR (adhesive, seismic-rated)
         ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
         ┃         SWING BAR (8-10 ft)      ┃
         ┃     horizontal steel arm          ┃
         ┃                                   ┃
         ┃                              TRACK HANGS
         ┃                              FROM HERE
         ┃                                   ▼
```

### Front View — System on Wall

```
         ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ← Pivot anchor (top of wall)
         ┃          SWING BAR            ┃
    ═════╬═══════════════════════════════╬══════ ← Top of wall
         ┃                              ┃
         ┃                         ┌────┴────┐
         ┃                         │  TRACK  │
         ┃                         │  RAIL   │
         ┃                         │  (6-8') │
         ┃                         │         │
         ┃                       ┌─┤         ├─┐
         ┃                       │ ╔═════════╗ │
         ┃                       │ ║  HH27   ║═══► CHISEL → WALL
         ┃                       │ ║  75J    ║ │
         ┃                       │ ╚═════════╝ │
         ┃                       └─┤         ├─┘
         ┃                         │         │
         ┃                         │         │
         ┃                         └────┬────┘
         ┃                              ┃
         ┃                         ┌────┴────┐
         ┃                         │ T-HANDLE│ ← operator grips to swing
    ─────╬─────────────────────────┴─────────┴── ← Ground / base of wall
    ANCHOR ROD (8-10" into wall)
```

### Front View — Swing Arc Coverage

```
    ●━━━━━━━━━━━━━━━━━━━━━━━┓          Pivot anchor
    ┃                        ┃
    ┃        ╱               ┃          ╲
    ┃       ╱                ┃           ╲
    ┃      ╱                 ┃            ╲
    ┃     ╱                  ┃             ╲
    ┃    ╱ ←arc limit        ┃    arc limit→╲
    ┃   ╱   (-15°)          ┃      (+15°)   ╲
    ┃  ╱                    [TRACK]           ╲
    ┃ ╱                      ┃                 ╲
    ┃╱                       ┃                  ╲
    ┃                        ┃
    ├────────┤←  ~5.2 ft coverage at 30° total arc
    ┃                        ┃
    ╠════╤════╤════╤════╤════╣
    ┃ L1 ┃ L2 ┃ L3 ┃ L4 ┃ L5 ┃  ← Fracture lines at 4' spacing
                                    1-2 lines per arc position
```

### Operating Sequence — Top View

```
    Step 1: Swing to position          Step 2: Lock & break

    WALL ════════════════════          WALL ════════════════════
    ●━━━━━━━┓                          ●━━━━━━━┓
             ┃  ← bar swings                    ┃ ▶ LOCKED
             ┃     into place                   ┃   breaker fires
             ┃                                  ┃   carriage feeds ▼
            [T]  ← track                       [T]━━► impact
                                                ┃
    OPERATOR →  ○                      OPERATOR → ○ (leans in)


    Step 3: Release & swing            Step 4: Next position

    WALL ════════════════════          WALL ════════════════════
    ●━━━━━━━━━━━━┓                     ●━━━━━━━━━━━━┓
                  ┃  ← swings 4'                     ┃ ▶ LOCKED
                  ┃     to next                       ┃
                 [T]    line                          [T]━━► impact
                  ┃
    OPERATOR →     ○                   OPERATOR →      ○
```

---

## 3. Operating Sequence (Detailed)

| Step | Action | Time | Notes |
|---|---|---|---|
| 1 | Install pivot anchor at top of wall | ~15 min | One time per wall section (covers 3-4 lines) |
| 2 | Hang swing bar + track from pivot | ~5 min | Pin connection, gravity holds track vertical |
| 3 | Swing bar to first fracture line position | ~15 sec | Operator walks bar along wall face |
| 4 | Lock bar or operator holds position | ~15 sec | Friction lock, pin, or body weight |
| 5 | Start breaker — carriage feeds down track | 4-16 min | Operator controls descent (gravity + friction brake) |
| 6 | Line complete → release bar | ~5 sec | Release lock / lean back |
| 7 | Swing bar ~4 ft to next line position | ~15 sec | Pivot motion, no tools needed |
| 8 | Lock, break again | 4-16 min | Repeat step 5 |
| 9 | Exhaust swing arc (3-4 lines) | — | Arc covers ~5.2 ft at 30° |
| 10 | Move pivot to next wall section | ~10 min | Remove anchor, re-install 5 ft over |
| 11 | Continue until wall is fully scored | — | Panels tip out or crane-lift |

---

## 4. Swing Arc Math

- **Arm length:** 10 ft (120 in)
- **Arc angle:** 30° total (±15° from center)
- **Arc length at tip:** 2π × 10 × (30/360) = **5.24 ft**
- **At 4 ft fracture spacing:** 1-2 lines per arc position
- **Lines per pivot install:** 3-4 (with some overlap/repositioning within arc)
- **Wider arc tradeoff:** >30° reduces force transfer efficiency (chisel angle to wall surface increases)

**Force transfer at angle:**
- At 0° (perpendicular): 100% of impact force into wall
- At 15° (max swing): cos(15°) = 96.6% of impact force into wall
- Acceptable loss — the time savings far outweigh the ~3.4% force reduction at extremes

---

## 5. Time Savings Analysis

### Scenario: 200 LF perimeter, 8" wall, 4 ft fracture spacing = 50 lines

**V0 (Rigid Frame):**
| Activity | Per Line | × Lines | Total |
|---|---|---|---|
| Breaking | 10 min avg | × 50 | 500 min |
| Repositioning (unbolt, walk, re-drill, re-anchor) | 10 min | × 49 | 490 min |
| Initial setup | — | — | 15 min |
| **Total** | | | **~16.75 hrs** |

**V0a (Swing Bar):**
| Activity | Per Line | × Lines | Total |
|---|---|---|---|
| Breaking | 10 min avg | × 50 | 500 min |
| Swing repositioning | ~1 min | × 46 | 46 min |
| Pivot moves (every 3-4 lines) | ~10 min | × 13 | 130 min |
| Initial setup | — | — | 20 min |
| **Total** | | | **~11.6 hrs** |

**Net savings: ~5.15 hours per 200 LF job (~31% faster)**

### Labor Cost Impact

At $45/hr crew rate:
- V0: 16.75 hrs × $45 = $754 labor
- V0a: 11.6 hrs × $45 = $522 labor
- **Savings per job: ~$232**
- Over 20 jobs/year: **~$4,640 saved** (nearly covers the frame fab cost)

---

## 6. Bill of Materials

| # | Item | Example / Spec | Est. Cost |
|---|---|---|---|
| 1 | Hydraulic breaker | HYCON HH27 (75J, 1,400 BPM) | $4,000–$5,500 |
| 2 | Hydraulic power pack | HYCON HPP09 (gas) or HPP09E (electric) | $3,500–$5,000 |
| 3 | Hydraulic hoses (30 ft) | 3/8" 4,000 PSI, quick-connect | $200–$400 |
| 4 | Swing bar fabrication | Pivot hub + 8-10 ft steel arm (2" square tube or schedule 40 pipe) | $800–$1,500 |
| 5 | Vertical track + carriage | 6-8 ft rail, linear bearings, breaker mount, friction brake | $500–$1,000 |
| 6 | Pivot anchor hardware | Hilti HIT-HY 200, 8-10" anchor rod, pivot plate, bearing | $150–$300 |
| 7 | T-handle (bottom grip) | Steel crossbar welded to track base, operator swing grip | $50–$100 |
| 8 | Hammer drill + bits | Hilti TE 7-C or equiv. (for pivot anchor holes) | $300–$500 (or owned) |
| 9 | Safety gear | N95, face shield, hearing protection, gloves | $100–$150 |
| | **V0a Total** | | **$9,600–$14,450** |

### Cost Comparison

| Version | Total BOM | Frame/Fab Cost | Repositioning Time |
|---|---|---|---|
| V0 | $10,300–$15,380 | $1,500–$2,500 (rigid frame) | ~10 min/line |
| V0a | $9,600–$14,450 | $800–$1,500 (swing bar) | ~1 min/swing |
| V1 | $11,216–$16,596 | + motor, camera, software | Automated |

V0a saves $700–$1,000 on frame fabrication vs V0, and ~5 hrs per job on labor.

---

## 7. Structural Considerations

### Swing Arm Rigidity Under 1,400 BPM

**Problem:** The HH27 fires at 1,400 BPM (23.3 Hz). The swing arm must not resonate at this frequency or harmonics.

**Analysis:**
- Arm: 10 ft of 2" × 2" × 3/16" square steel tube (4.32 lb/ft, I = 0.766 in⁴)
- Fixed-free beam natural frequency: f₁ = (3.516 / 2π) × √(EI / ρAL⁴)
  - E = 29 × 10⁶ psi (steel)
  - I = 0.766 in⁴
  - ρA = 4.32 lb/ft / 32.2 / 12 = 0.0112 slug/ft
  - L = 10 ft = 120 in
  - f₁ ≈ 5-8 Hz (well below 23.3 Hz excitation)
- **However:** The arm is not free-free — it's loaded against the wall during operation. Wall contact at the track end converts it to a fixed-fixed condition, raising natural frequency significantly.
- **Mitigation:**
  1. Bottom guide pressed firmly against wall creates second support point
  2. Rubber damping pads at pivot and track connection
  3. Operator body weight on bar adds mass damping
  4. If resonance occurs: add mass at midspan (clamp-on weight) or stiffen with gusset

### Pivot Anchor Loading

**Load case:** 75J impact at tip of 10 ft arm
- Moment at pivot: F × 10 ft
- Impact force (peak, very short duration): ~2,000-3,000 N (estimated from 75J over ~25mm stroke)
- Moment: ~3,000 N × 3.05 m = ~9,150 N·m peak (but duty cycle is very short pulses)
- Anchor spec: Hilti HIT-HY 200 in 8" concrete, 5/8" rod
  - Tension capacity: ~18 kN per anchor
  - Shear capacity: ~15 kN per anchor
  - Using 2 anchor bolts in the pivot plate: adequate for pulsed loading
- **Safety factor:** >2× on static equivalent load

### Bottom Guide Contact Force

- The bottom guide presses against the wall face to prevent the track from swinging away
- Contact force = impact reaction (pushes track toward wall) — self-stabilizing
- Rubber pad on guide prevents wall surface damage
- Adjustable foot accommodates uneven surfaces / different wall heights

---

## 8. Go/No-Go Gate for V1 (Automated)

V0a serves as the intermediate proof point. Before committing to V1 (motor, camera, software), V0a must answer:

| Gate | Question | Pass Criteria |
|---|---|---|
| G1 | Does the swing bar hold position under 1,400 BPM? | No visible drift, no resonance, operator can hold comfortably |
| G2 | Does one pivot anchor hold for 3-4 lines? | No anchor pull-out, no cracking around anchor |
| G3 | Is swing repositioning actually faster? | <2 min per swing (vs 10 min for V0 reposition) |
| G4 | Can one person operate it? | Single operator can swing, lock, and control carriage |
| G5 | Does the fracture quality match V0? | Clean vertical lines, ±1/4" tolerance |
| G6 | Is the bottom guide stable? | Track doesn't walk or wobble during breaking |
| G7 | Does the arc coverage match the math? | 3-4 lines per pivot position confirmed |

### If V0a passes all gates:
- V1 adds: stepper motor on carriage, camera, RPi, software control
- V1 mounts on the same swing bar (motor replaces friction brake on carriage)
- Timeline: ~6 months from V0a validation to V1 prototype

### If V0a fails:
- Diagnose which gate failed
- If G1 (resonance): stiffen arm, add damping, reduce arm length
- If G2 (anchor): upgrade to larger anchors, add second anchor point
- If G4 (one-person): accept 2-person operation (still faster than V0)
- If G5 (fracture quality): swing arm angle may need constraining mechanism

---

## 9. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Arm resonance at breaker frequency | Medium | High | Damping pads, mass loading, wall contact stiffening |
| Pivot anchor fatigue over many lines | Low | High | Oversize anchor, inspect between pivot moves |
| Operator fatigue holding bar | Medium | Medium | Friction lock mechanism, lean-in posture |
| Insufficient arc for useful coverage | Low | Medium | Extend arm length or accept more pivot moves |
| Bottom guide slips on smooth concrete | Low | Medium | Rubber pad, mechanical clamp option |
| Hose management during swing | Medium | Low | Hose guide/clip along swing bar, slack loop |

---

## 10. Design Decisions Still Open

1. **Swing bar lock mechanism:** Friction clamp vs drop pin vs operator holds? (Test all three on V0a prototype)
2. **Arm length:** 8 ft vs 10 ft? (Shorter = stiffer but less coverage. Start with 10 ft, cut down if resonance.)
3. **Track attachment to bar:** Rigid weld vs quick-detach pin? (Pin allows transport in two pieces)
4. **Pivot bearing type:** Plain bushing vs needle bearing? (Bushing simpler, bearing smoother swing)
5. **Bottom guide attachment:** Spring-loaded vs gravity vs manual clamp? (Spring-loaded self-adjusts)

---

## 11. V0a → V1 Upgrade Path

V0a is designed so that V1 upgrades bolt onto the same swing bar:

| V0a Component | V1 Upgrade | Change Required |
|---|---|---|
| Manual carriage (friction brake) | Stepper motor + lead screw | Replace brake with motor mount |
| Operator eyes | USB camera + RPi | Mount camera on carriage, RPi on bar |
| Operator controls descent | Software-controlled feed | Add driver board, power supply |
| No data logging | Full fracture logging | SD card, accelerometer on carriage |
| Manual e-stop (release trigger) | Mushroom e-stop + relay | Add to control enclosure |

The swing bar itself does not change between V0a and V1. This is intentional — the V0a arm is the V1 arm.
