# Track-Mounted Automated Wall Breaker — Prototype Concept

> Deconstruction Lab | ML Systems | Lucent Lens
> "Tougher problems inspire creative solutions"
> Nothing like this exists commercially. That's the point.

---

## The Gap

Between a 60-lb handheld breaker and a 1,100-lb Brokk 60, nobody makes anything. No one has built a track-mounted automated breaking system for concrete. The closest analog is the Hilti Cut Assist wall saw — a diamond saw on a track with automated linear travel. Replace the saw with a breaker, and you have something new.

---

## What We Need to Break

| Element | Thickness | Reinforcement | Min Impact Energy | Practical Energy |
|---|---|---|---|---|
| 4" basement slab (unreinforced) | 100 mm | None/wire mesh | 20–35 J | 22 J @ 2,100 BPM works |
| 8" foundation wall (#4 rebar) | 200 mm | #4 @ 12–16" OC | 45–75 J | 65+ J for speed |
| 10" footing (#5 rebar) | 250 mm | #5 @ 12" OC | 65–150 J | 100+ J preferred |

---

## Breaker Selection — HYCON HH27

| Spec | Value |
|---|---|
| Weight | 27.4 kg (60 lbs) |
| Impact energy | 75 J |
| Blows per minute | 1,400 |
| Energy per minute | **105 kJ/min** |
| Required flow | 20 LPM |
| Required pressure | 130 bar |
| Power pack | HYCON HPP09 (20 LPM, 100 bar, 154 lbs) or HPP09E (electric, 194 lbs) |
| Breaks | 4" slab, 8" wall with rebar, light footings |

**Why HH27:** It covers slabs AND 8" reinforced walls in one unit. 75 J @ 1,400 BPM = 105 kJ/minute — more than double the HH10RV. Same 20 LPM hydraulic flow, no power pack upgrade needed. 60 lbs is still track-mountable.

---

## The Concept: Vertical Wall-Mounted Breaker

### Core Insight

**Bolt the track to the wall. The wall IS the reaction force.**

When the breaker fires horizontally into the wall, the reaction force pushes back through the carriage → into the track → into the anchor bolts → into the wall. The system pushes against itself. No heavy base platform needed. No counterweight. The stiffer the frame and the stronger the anchor, the more energy transfers into fracture instead of vibration.

**Gravity is free labor.** As the breaker fractures a vertical line, broken pieces fall away from the wall face. No scooping, no clearing. The fracture line opens under gravity. The wall self-clears.

### How It Works

```
    FOUNDATION WALL (8" poured, below grade)
    ┌─────────────────────────────────────────┐
    │                                         │
    │   ANCHOR ──── TRACK RAIL ──── ANCHOR    │  ← Track bolted to wall face
    │       ║           ║              ║      │
    │       ║     ┌─────╨─────┐       ║      │     CAMERA
    │       ║     │  CARRIAGE  │       ║      │     mounted on
    │       ║     │            │       ║      │     frame, looks
    │       ║     │ ┌────────┐ │       ║      │     at fracture
    │       ║     │ │HH27    │→│→ HITS WALL   │     pattern
    │       ║     │ │75J     │ │       ║      │
    │       ║     │ │1400BPM │ │       ║      │
    │       ║     │ └────────┘ │       ║      │
    │       ║     └─────╥─────┘       ║      │
    │       ║           ║              ║      │     Carriage travels
    │       ║           ▼              ║      │     DOWN the track
    │       ║                          ║      │
    │   ANCHOR ─────────────────── ANCHOR     │
    │                                         │
    └─────────────────────────────────────────┘
                        │
                 pieces fall ↓↓↓
                   gravity clears
```

### Operating Sequence — No Crane Required

The entire system is crew-portable. Two workers carry the frame to the wall. No crane, no excavator, no heavy equipment to position it. This is what makes it a product, not just a site tool.

1. **Two crew carry frame to wall** (~82 lbs frame, or break into 2 sections for one-person carry)
2. **Drill 4 anchor holes with hammer drill** (~2 min)
3. **Set anchors, bolt frame to wall** (~6 min)
4. **Mount breaker carriage on rail** (slides on, pin locks — 30 sec)
5. **Connect hydraulic hoses from power pack** (quick-connect fittings — 15 sec)
6. **Start power pack — breaker fires, carriage travels down**
7. **Camera feeds to tablet** — operator monitors from safe distance
8. **Broken concrete falls away** — gravity clears the line
9. **Carriage reaches bottom — one vertical line done**
10. **Unbolt frame (4 bolts), crew walks it 4' over, re-anchor, repeat**
11. **After all vertical lines: wall sections tip/fall or get pushed out (Brokk, pry bar, or crane)**

**Total repositioning time between lines: ~10 minutes.** Drill, anchor, bolt, connect, go.

### Why Crane-Free = Bigger Patent

| With crane | Without crane |
|---|---|
| Only ML Systems can use it (we have a crane) | **Any demo contractor can use it** |
| Requires crane positioning time | Crew-portable, setup in 10 min |
| Site needs crane access/clearance | Works in basements, crawlspaces, tight lots |
| Niche tool | **Standalone product** |

**The patent covers the system, not the crane.** A crew-portable, wall-mounted, automated breaking system with camera-guided fracture tracking. No existing product. No prior art found.

### Why Bolted = More Power

A handheld breaker wastes energy in operator body absorption and tool bounce. Bolting the track rigidly to the wall means:

| Factor | Handheld | Wall-Mounted |
|---|---|---|
| Reaction force absorbed by | Operator's arms/body | Wall itself (through anchors) |
| Energy lost to bounce/recoil | 30–50% | <10% (stiff frame) |
| Effective energy into concrete | ~40–50 J (of 75 J) | **~65–70 J (of 75 J)** |
| Operator fatigue | High — 60 lb tool overhead | Zero — automated |
| Positioning accuracy | ±2" (human) | ±1/8" (track) |
| Sustained operation | 15–20 min bursts, breaks needed | **Continuous until line is done** |

**The stiff frame multiplied by the anchored reaction force means this 75 J breaker performs like a 100+ J breaker in terms of actual energy delivered to fracture.**

---

## The Frame

### Requirements

| Requirement | Why |
|---|---|
| **Stiff** | Minimizes energy lost to flex — more energy into fracture |
| **Lightweight enough to crane-lift as one unit** | One pick, set against wall, bolt |
| **Adjustable length** | 4' walls, 8' walls, variable heights |
| **Rails for carriage travel** | Linear bearings or V-groove wheels on track |
| **Anchor points at corners + midpoints** | Transfers reaction force into wall |
| **Camera mount** | Fixed position, views the fracture line |

### Preliminary Spec

| Component | Material | Weight | Notes |
|---|---|---|---|
| Main rail (vertical) | Steel tube or channel, 8' long | ~30 lbs | Carriage rides this |
| Cross braces (2) | Steel angle, connect rail to anchor plates | ~15 lbs | Creates standoff from wall |
| Anchor plates (4–6) | Steel plate with bolt holes | ~10 lbs | Where expansion anchors go |
| Carriage with breaker mount | Welded steel plate + linear bearings | ~15 lbs | HH27 bolts to this |
| Drive mechanism | Chain drive or lead screw + hydraulic motor | ~10 lbs | Controlled descent speed |
| Camera + housing | Industrial USB/IP camera, weatherproof | ~2 lbs | Monitors fracture pattern |
| **Frame total (without breaker)** | | **~82 lbs** | |
| **Frame + HH27** | | **~142 lbs** | Crane-liftable as single unit |

### Standoff Distance

The breaker chisel needs to reach the wall face while the frame sits against it. The cross braces create a gap:

```
    WALL FACE
    ┃
    ┃◄── 3–4" standoff ──►┃
    ┃                      ┃  MAIN RAIL
    ┃    chisel tip        ┃
    ┃◄━━━━━━━━━━━━━━━━━━━━━┃  breaker pushes chisel through gap
    ┃                      ┃
    ┃   ANCHOR PLATE       ┃
    ┃━━━bolted to wall━━━━━┃
```

The chisel extends through the standoff gap to contact the wall. The frame floats 3–4" off the wall face, anchored at the plates. As concrete fractures and falls, the gap widens — the chisel extends further to maintain contact. The carriage drive controls feed pressure.

---

## Camera + Automation

### What the Camera Sees

| Data | Use |
|---|---|
| Fracture propagation direction | Adjust carriage speed — slow down if fracture isn't forming, speed up if it's running ahead |
| Depth of fracture | Has the chisel broken through? Or just surface spalling? |
| Rebar exposure | When rebar appears, mark location — Brokk cuts rebar later |
| Concrete condition | Voids, aggregate pockets, water damage — adjust BPM or skip |
| Piece size falling | Are chunks too large? Slow down for more passes. Too small? Speed up. |

### Control Loop (V1 — simple)

```
Camera feed → Operator watches on tablet → Operator adjusts speed dial
```

### Control Loop (V2 — semi-automated)

```
Camera feed → Edge detection (fracture line tracking)
           → Feed rate controller (speed up / slow down based on fracture depth)
           → Rebar detector (pause + flag for Brokk)
           → Log all data to ontology
```

### Control Loop (V3 — autonomous)

```
Camera + depth sensor → AI model trained on V1/V2 data
                      → Fully autonomous line breaking
                      → Self-optimizing speed, BPM, feed pressure
                      → Rebar avoidance / rebar flagging
                      → Completion detection (line is through)
```

**V1 is the prototype. V2 is the product. V3 is the ontology payoff.**

---

## Wall Anchoring — One Side Only

**All concrete anchoring is one-sided.** You never need access to the back of the wall. This is standard in the industry — every concrete anchor system is designed to install from the face you're standing on.

### Anchoring Options (fastest to strongest)

| Method | Install Time | Shear Capacity | Vibration Rated? | Tools Needed |
|---|---|---|---|---|
| **Powder-actuated pins (Hilti DX, Ramset)** | **~3 seconds/pin** | ~1,200 lbs/pin | Moderate | Powder tool ($300–$500) + .27 cal charges |
| **Concrete screws (Tapcon, Hilti HUS)** | ~30 sec/screw | ~2,000–3,500 lbs | Good | Hammer drill + bit |
| **Wedge anchors (expansion)** | ~45 sec/anchor | ~5,000 lbs | Good | Hammer drill + setting tool |
| **Adhesive anchors (Hilti HIT-HY 200)** | ~60 sec + 5–15 min cure | ~8,000 lbs | **Excellent — designed for vibration/seismic** | Hammer drill + dispenser |
| **Screw-bolt anchors (Hilti HUS3-H)** | ~30 sec | ~4,500 lbs | Excellent | Hammer drill |

### Reaction Force Math

- 75 J breaker, 4 anchor points per track position
- Each anchor sees ~945 lbs cyclic shear at 1,400 Hz
- **Wedge anchors (5,000 lbs static):** 5.3× safety factor on static. Vibration fatigue is the question — test needed.
- **Adhesive anchors (8,000 lbs static):** 8.5× safety factor. Hilti HIT-HY 200 is ICC-rated for seismic/vibration. **Best candidate for sustained breaking.**
- **Powder-actuated pins:** Fastest install by far, but lowest capacity. Use 6–8 pins instead of 4 anchors to distribute load.

### Recommended: Hybrid Approach

| Position | Anchor Type | Why |
|---|---|---|
| **Top 2 anchors** | Adhesive (Hilti HIT-HY 200) | Strongest hold, takes most of the reaction load |
| **Bottom 2 anchors** | Wedge anchors | Fast install, replaceable, takes less load (gravity helps) |
| **Mid-height (if needed)** | Powder-actuated pins | Quick reinforcement, add as needed |

**Install sequence:** Drill 4 holes (hammer drill, ~2 min total) → inject adhesive in top 2 (30 sec) → set wedge anchors in bottom 2 (30 sec) → wait 5 min for epoxy cure → bolt frame on → **total anchor time: ~8 minutes per track position.**

### Anchors Run BETWEEN Fracture Lines

```
    WALL FACE (8' tall)
    ┌──────────────────────────────────────┐
    │                                      │
    │  ●ANCHOR          ●ANCHOR            │  ← anchors at edges
    │  ║                 ║                 │
    │  ║  TRACK RAIL     ║                 │
    │  ║       ║         ║                 │
    │  ║  ┌────╨────┐    ║                 │
    │  ║  │ BREAKER  │→→→→ FRACTURE LINE   │  ← breaker hits BETWEEN anchors
    │  ║  └────╥────┘    ║                 │
    │  ║       ║         ║                 │
    │  ║       ▼         ║                 │
    │  ●ANCHOR          ●ANCHOR            │
    │                                      │
    └──────────────────────────────────────┘
```

The fracture line runs down the CENTER of the track. Anchors sit on the EDGES of the frame — offset from the fracture zone. As the wall between the anchors fractures and falls away, the anchors remain embedded in intact concrete on either side.

When the track repositions 4' over, the old anchor holes are in the section that's about to be crane-lifted out. New anchors go into fresh concrete.

---

## Bill of Materials — V1 Prototype (HH27, Vertical, Crew-Portable)

### On the Wall (crew carries this)

| Component | Spec | Weight | Est. Cost |
|---|---|---|---|
| **Frame + rail** | Welded steel tube, 8' vertical, cross braces, anchor plates. Splits into 2 sections for one-person carry. | ~82 lbs (41 lbs/section) | $1,500–$2,500 (fab) |
| **Carriage** | Linear bearings + breaker mount plate. Slides onto rail, pin-locks. | ~15 lbs | $500–$1,000 |
| **Breaker** | HYCON HH27 (stripped mechanism, bolted to carriage) | ~45 lbs | $4,000–$5,500 |
| **Drive** | Hydraulic motor (tapped off power pack) + chain drive | ~10 lbs | $400–$800 |
| **Camera** | Industrial IP camera + mount | ~2 lbs | $200–$500 |
| **Anchoring kit** | Hammer drill, bits, adhesive anchors, wedge anchors (consumable) | ~8 lbs | $300–$500 |
| **Total on wall** | | **~162 lbs** | |
| **Per carry (2 trips)** | | **~81 lbs/person** | |

### On the Ground (stays put)

| Component | Spec | Weight | Est. Cost |
|---|---|---|---|
| **Power pack** | HYCON HPP09 (gas, 20 LPM, 130 bar) or HPP09E (electric) | 154–194 lbs | $3,500–$5,000 |
| **Hoses** | 20 LPM rated, quick-connect, 30' reach | ~5 lbs | $200–$400 |
| **Control box** | PLC/Arduino + tablet mount + speed dial + E-stop | ~3 lbs | $300–$600 |

### Total System

| | Weight | Cost |
|---|---|---|
| **Wall unit (portable)** | **162 lbs** | **$6,900–$10,800** |
| **Ground unit (stationary)** | **162–202 lbs** | **$4,000–$6,000** |
| **Complete system** | **~324–364 lbs** | **$10,900–$16,800** |

**For comparison:** A Brokk 70 = 1,235 lbs, $200K+. This system = 324 lbs, ~$14K, crew-portable, no heavy equipment needed.

---

## Speed Estimate (HH27 on 8" Wall)

- 75 J @ 1,400 BPM = 105 kJ/minute
- 8" poured wall, 3,000 PSI, #4 rebar @ 16" OC
- Estimated travel speed: **0.5–2 feet/minute** (needs testing — rebar slows it, concrete between rebar goes faster)
- One 8' vertical line: **4–16 minutes**
- 200 LF of perimeter ÷ 4' spacing = 50 vertical lines
- 50 lines × 10 min avg = **~8.3 hours** (one track system)
- **Two systems in parallel: ~4.2 hours**
- Add setup/repositioning: **~6 hours total with 2 systems**

vs saw cutting the same 200 LF: 2–4 hrs cutting + core drilling + subcontractor coordination. **Comparable time, but no sub, no blades, no water, and the data feeds the ontology.**

---

## Why This Could Solve Phase 4

| Problem | Track Breaker Solution |
|---|---|
| 2-day crane target impossible with current approach | 2 track systems in parallel = walls fractured in ~6 hrs |
| Saw cutting needs a subcontractor | You own and operate this |
| Diamond blades cost $300–$600/project | Zero consumable cost (chisel tip lasts thousands of hours) |
| Saw cutting needs water management | Breaker is dry operation |
| No excavator on site | Track + crane + Brokk = no excavator needed |
| Pieces need to be crane-liftable | Fracture lines at 4' spacing = panels sized for crane |

---

## The 4 Returns

| Return | Value |
|---|---|
| 1. Material value | Same — panels, RCA, rebar |
| 2. Ontology data | Fracture patterns, speed vs concrete age/mix, rebar detection, camera data |
| 3. Robot training signal | **Camera data + fracture data = training set for V3 autonomous mode.** Every wall broken trains the AI. |
| 4. Market intelligence | **Patent potential.** No commercial product exists. First-mover in automated wall breaking. |

---

## Open Problems

1. ~~Wall anchoring method~~ — **Solved conceptually.** Adhesive anchors (top) + wedge anchors (bottom), one-side install, ~8 min per position. Needs physical vibration testing.
2. **Vibration fatigue on anchors** — will 1,400 BPM sustained break the adhesive bond? Hilti HIT-HY 200 is seismic-rated, but this is different loading. **Test needed.**
3. **Rebar handling** — breaker fractures concrete around rebar, but rebar stays. Cut after with Brokk shears, reciprocating saw, or rebar cutter? Or does the breaker eventually fatigue the rebar at 1,400 BPM?
4. **Chisel angle on vertical wall** — does the fracture propagate straight through 8", or curve? **Needs testing.**
5. **Dust management** — dry breaking = dust. Options: shroud around chisel with shop vac port, water mist ring, or accept it with N95s on crew.
6. **Corner transitions** — track can't wrap a 90° corner. Options: Brokk handles corners, second track at 90°, or pre-drill/weaken corners before running tracks.
7. **Frame splitting joint** — if frame splits into 2 sections for carrying, the joint must be rigid under 1,400 BPM vibration. Bolted flange? Pinned sleeve?

---

## Next Steps

1. **Buy HYCON HH27** (~$4,500) — test by hand on an 8" wall. Measure: fracture pattern, time per LF, rebar behavior, chisel angle through 8".
2. **Anchor vibration test** — bolt a steel bracket to a wall with Hilti HIT-HY 200 adhesive anchors. Run HH27 against the bracket for 30 min sustained. Do the anchors hold? Any creep?
3. **Fab frame V1** — local steel shop. Splitting joint design critical. Welded steel tube, 2-section, bolted flange at midpoint.
4. **Mount breaker to carriage, run first vertical line** — manual speed control (dial), one operator.
5. **Add camera** — record fracture data. Mount on frame looking at chisel contact point.
6. **Test full cycle** — anchor → break line → unbolt → reposition → re-anchor → break next line. Time the full cycle.
7. **If V1 works:** File provisional patent. Begin V2 (camera-guided speed control).

**V1 cost: ~$11K–$17K.** Crew-portable. No crane. No excavator. No prior art.

### Patent Scope (preliminary)

A crew-portable, wall-anchored, track-guided hydraulic breaking system with:
- One-sided concrete anchoring (no back-side access required)
- Automated linear travel with controlled feed rate
- Camera-based fracture monitoring
- Gravity-assisted debris clearing (vertical operation)
- Modular breaker head (swappable energy levels)

**Target market:** Any contractor doing concrete demolition — residential, commercial, infrastructure. Not limited to deconstruction. Foundation removal, wall opening cuts, selective demo, bridge pier removal, retrofit work.

---

## Sources

- HYCON — hycontools.com (HH27, HPP09 specs)
- Epiroc — SB 52 specifications
- Hilti — DST 10-CA Cut Assist wall saw (track system precedent)
- Hilti — HIT-HY 200 adhesive anchor system (vibration-rated anchoring)
- igus — drylin linear rail systems
- Powers Fasteners — wedge anchor shear capacity data
- LaBounty — US Patent 5,284,283 (rail-mounted breaking concept)
