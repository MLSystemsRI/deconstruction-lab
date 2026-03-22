# Track Breaker — Product Pitch

> ML Systems LLC | Deconstruction Lab | Lucent Lens
> "Tougher problems inspire creative solutions"

---

## The Problem

Concrete demolition has two options: a guy with a 60-lb jackhammer, or a $200K+ robot (Brokk). Nothing in between.

| Option | Weight | Cost | Operator | Precision |
|---|---|---|---|---|
| Handheld breaker | 22–90 lbs | $1,500–$6,000 | 1 laborer, fatigued in 20 min | ±2" (human arm) |
| Brokk 60 | 1,235 lbs | $200K+ | Trained operator + trailer + rigging | Good, but overkill |
| **Track Breaker** | **~200 lbs portable** | **~$11K–$17K** | **2 crew, setup in 10 min** | **±1/8" (track-guided)** |

The gap between handheld and robotic is where every residential foundation, every basement wall, every concrete removal job lives. Nobody has built a product for this space.

---

## The Solution

A wall-mounted, track-guided hydraulic breaker. Two workers carry it to the wall. Bolt it on. It breaks a vertical line. Unbolt. Move 4 feet over. Repeat.

**Three things make it work:**

1. **The wall IS the reaction force.** The breaker pushes into the wall, the frame pushes back through the anchors into the wall. The system pushes against itself. No heavy base. No counterweight.

2. **Gravity clears the debris.** Vertical operation means broken concrete falls away from the fracture line. No scooping, no clearing, no cleanup between passes.

3. **Self-locking Acme lead screw.** The carriage cannot fall. Even with power off, the screw holds position. The motor (10 lbs) sits at the top of the track, away from impacts.

```
    FOUNDATION WALL (8" poured concrete)
    ┌─────────────────────────────────────────┐
    │                                         │
    │   ANCHOR ──── TRACK RAIL ──── ANCHOR    │  Bolted to wall face
    │       ║           ║              ║      │
    │       ║     ┌─────╨─────┐       ║      │
    │       ║     │  CARRIAGE  │       ║      │
    │       ║     │ ┌────────┐ │       ║      │
    │       ║     │ │ HH27   │→│→ HITS WALL   │
    │       ║     │ │ 75J    │ │       ║      │
    │       ║     │ └────────┘ │       ║      │
    │       ║     └─────╥─────┘       ║      │
    │       ║           ▼              ║      │  Carriage feeds DOWN
    │       ║                          ║      │
    │   ANCHOR ─────────────────── ANCHOR     │
    │                                         │
    └─────────────────────────────────────────┘
                        │
                 pieces fall ↓↓↓
                   gravity clears
```

---

## Prototype Roadmap

### V0 — Proof of Concept (No Software)

**The simplest version that proves the physics.**

| Component | Spec | Weight | Cost |
|---|---|---|---|
| Steel frame + rail (8' vertical) | Welded tube, 2 sections, bolted flange | ~82 lbs | $1,500–$2,500 (fab) |
| Carriage + breaker mount | Linear bearings, pin-lock, slides on rail | ~15 lbs | $500–$1,000 |
| HYCON HH27 breaker | 75 J, 1,400 BPM | ~60 lbs | $4,000–$5,500 |
| Anchoring kit | Hilti HIT-HY 200 (top) + wedge anchors (bottom) | ~8 lbs | $300–$500 |
| Power pack | HYCON HPP09 (gas) or HPP09E (electric) | 154–194 lbs | $3,500–$5,000 |
| Hoses | 20 LPM rated, quick-connect, 30' reach | ~5 lbs | $200–$400 |
| **Total** | | **~324–364 lbs** | **~$10,000–$14,900** |

**What V0 proves:**
- Can we anchor a track to a wall and break a clean vertical line?
- Does gravity clear the debris?
- Do the anchors hold under sustained 1,400 BPM vibration?
- What does the fracture pattern look like through 8" with rebar?
- How long per line? Per full wall?

**What V0 does NOT have:**
- No motor — operator controls carriage descent manually (gravity + friction brake or hand crank)
- No camera — operator watches the fracture visually
- No software — pure mechanical operation
- No automation — manual repositioning, manual speed

**V0 is a weekend test.** Fab the frame, buy the breaker, bolt to a wall, break a line. If the physics works, everything else is engineering.

### V0 Diagram

**Front View — Frame Bolted to Wall**

```
         ┌─── BOLTED FLANGE (frame splits here for carrying) ───┐
         │                                                       │
         │   ADHESIVE ANCHOR              ADHESIVE ANCHOR        │
         │   (Hilti HIT-HY 200)          (Hilti HIT-HY 200)     │
         │        ●━━━━━━━━━━━━━━━━━━━━━━━━━━●                   │
         │        ║    TOP CROSS BRACE        ║                   │
         │        ║                           ║                   │
         │        ║         ┌─RAIL─┐          ║                   │
         │        ║         │      │          ║                   │
         │        ║         │      │          ║                   │
         │        ║    ┌────┤      ├────┐     ║  ← FRICTION      │
         │        ║    │    │      │    │     ║    CLAMP          │
         │        ║    │  ╔═╧══════╧═╗  │     ║    (operator      │
         │        ║    │  ║ ┌──────┐ ║  │     ║     controls      │
         │        ║    │  ║ │ HH27 │→║→→→→→ CHISEL TIP           │
    8'   ║        ║    │  ║ │ 75J  │ ║  │     ║     descent)      │
         │        ║    │  ║ │1400  │ ║  │     ║                   │
         │        ║    │  ║ │ BPM  │ ║  │     ║                   │
         │        ║    │  ╚═╤══════╤═╝  │     ║                   │
         │        ║    └────┤      ├────┘     ║                   │
         │        ║         │      │          ║                   │
         │        ║         │      │          ║                   │
         │        ║         │  ▼   │          ║  ← GRAVITY       │
         │        ║         │      │          ║    FEEDS DOWN     │
         │        ║         │      │          ║                   │
         │        ║         └──────┘          ║                   │
         │        ║   BOTTOM CROSS BRACE      ║                   │
         │        ●━━━━━━━━━━━━━━━━━━━━━━━━━━●                   │
         │   WEDGE ANCHOR                WEDGE ANCHOR             │
         │                                                       │
         └───────────────────────────────────────────────────────┘
                              │
                       pieces fall ↓↓↓

    ════════════════════════════════════════════  GROUND
                              │
                    HYDRAULIC HOSES (30 ft)
                              │
                     ┌────────┴────────┐
                     │   HYCON HPP09   │
                     │   POWER PACK    │
                     │   (gas/elec)    │
                     │   154–194 lbs   │
                     └─────────────────┘
                       stays on ground
```

**Side View — Cross Section (Looking Down the Track)**

```
                    WALL (8" thick, poured concrete)
                    ┃                              ┃
                    ┃◄──────── 8" ────────────────►┃
                    ┃                              ┃
    ANCHOR BOLT ━━━━╋━━┓                           ┃
                    ┃  ┃                           ┃
                    ┃  ┃ 3–4" STANDOFF             ┃
                    ┃  ┃                           ┃
                    ┃  ┣━━━━━ CROSS BRACE          ┃
                    ┃  ┃                           ┃
                    ┃  ┃   ┌──────────┐            ┃
                    ┃  ┃   │  RAIL    │            ┃
                    ┃  ┃   │          │            ┃
   CHISEL TIP ◄━━━━╋━━╋━━━┤ CARRIAGE │            ┃
     contacts wall  ┃  ┃   │ + HH27   │            ┃
                    ┃  ┃   └──────────┘            ┃
                    ┃  ┃                           ┃
                    ┃  ┃  REACTION FORCE ──►       ┃
                    ┃  ┃  pushes back into         ┃
                    ┃  ┃  wall via anchors          ┃
                    ┃                              ┃
                    ┃         ◄── IMPACT FORCE     ┃
                    ┃         chisel strikes wall   ┃
                    ┃                              ┃

    OPERATOR SIDE                          DIRT/BACKFILL SIDE
    (you stand here)                       (below grade)
```

**3D View — Track Breaker on Foundation Wall**

```
                                      ╱ ANCHOR (adhesive)
                                     ╱
              ●━━━━━━━━━━━━━━━━━━━━●
             ╱║                   ╱║
            ╱ ║   TOP BRACE     ╱  ║
           ╱  ║               ╱    ║
          ╱   ║    ┌─RAIL─┐ ╱     ║
         ╱    ║    │      │╱      ║
              ║    │      │       ║
              ║  ╔═╧══════╧═╗     ║
              ║  ║  ┌────┐  ║     ║          CONCRETE WALL (8" thick)
              ║  ║  │HH27│  ║     ║     ╭──────────────────────────────────╮
              ║  ║  │    │══╬═════╬════►│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
              ║  ║  │75J │  ║     ║     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
              ║  ╚═╤══════╤═╝     ║     │░░░░░░░CHISEL░░░░░░░░░░░░░░░░░░░│
              ║    │  ▼   │       ║     │░░░░░░░ENTERS░░░░░░░░░░░░░░░░░░░│
              ║    │      │       ║     │░░░░░░░HERE░→░░░░░░░░░░░░░░░░░░░│
              ║    │      │       ║     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
              ║    │      │       ║     │░░░░░░░░░░#4 REBAR░░░░░░░░░░░░░░│
              ║    │      │       ║     │░░░░░░░░░░@ 16" OC░░░░░░░░░░░░░░│
              ║    │      │       ║     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
              ║    └──────┘       ║     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
              ║   BOTTOM BRACE    ║     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
              ●━━━━━━━━━━━━━━━━━━━●     │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
             ╱ ANCHOR (wedge)    ╱      │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            ╱                   ╱       ╰──────────────────────────────────╯
                 ↓ ↓ ↓                          ╱                    ╱
              broken pieces                    ╱                    ╱
              fall by gravity                 ╱     8" THICK       ╱
                                             ╱                    ╱
         ═══════════════════════════════════════════════════════════ GROUND
```

**Cross-Section Cut (slice through wall + frame at breaker height)**

```
         OPERATOR SIDE                              DIRT / BACKFILL SIDE
        (exterior)                                  (interior/earth)
            │                                             │
            │         3–4"                                │
            │       standoff                              │
            │        ◄──►                                 │
            │                                             │
            │  ┌───────────┐    ┌─────────────────────────────┐
            │  │           │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  │  CARRIAGE │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  │  + MOUNT  │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
    RAIL ━━━┿━━┤           │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  │ ┌───────┐ │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  │ │       │ │    │░░░░░░░░░░░░ CONCRETE ░░░░░░░│
            │  │ │ HH27  ├━╋━━━━╋━━━CHISEL━━━━►               │
            │  │ │ 75J   │ │    │░░░░░░░░ FRACTURE ░░░░░░░░░░░│
            │  │ │       │ │    │░░░░░░░░ ZONE ░░░░░░░░░░░░░░░│
            │  │ └───────┘ │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  │           │    │░░ ── ── REBAR ── ── ░░░░░░░░│
            │  │           │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
   BRACE ━━━┿━━┤           │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  │           │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │  └───────────┘    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
            │       │           └─────────────────────────────────┘
            │       │                    ◄──── 8" ────►
            │   ANCHOR BOLT              WALL THICKNESS
            │   embeds into
            │   concrete
            │
            │  ◄━ IMPACT FORCE (75J) ━━━━━━━━━━━━━━━►
            │
            │  ►━ REACTION FORCE ━━━━━━━━━━━━━━━━━━━◄
            │     (back through anchor into wall)
            │
            │  THE WALL FIGHTS ITSELF.
            │  Impact goes in. Reaction comes back.
            │  No counterweight needed.
```

**3D View — After Breaking (Wall Sectioned)**

```
           TRACK REPOSITIONS 4' OVER
           ─────────────────────►

    ┌─────────┬─────────┬─────────┬─────────┬──────
    │░░░░░░░░░│         │░░░░░░░░░│         │░░░░░
    │░░░░░░░░░│  PANEL  │░░░░░░░░░│  PANEL  │░░░░░
    │░░ PANEL │  FREE   │░░ NEXT  │  STILL  │░░░░░
    │░░ DONE  │ (tips   │░░ LINE  │  INTACT │░░░░░
    │░░░░░░░░░│  out)   │░░░░░░░░░│         │░░░░░
    │░░░░░░░░░│    ╲    │░░░░░░░░░│         │░░░░░
    │░░░░░░░░░│     ╲   │░░░░░░░░░│         │░░░░░
    │░░░░░░░░░│      ╲  │░░░░░░░░░│         │░░░░░
    └─────────┘       ╲ └─────────┴─────────┴──────
                       ╲
         fracture       ╲  4' wide panels
         lines           ╲ sized for crane lift
         every 4'         ╲
                           ╲
                         panel tips/falls
                         or crane lifts out
```

**Operating Sequence — V0**

```
    STEP 1: CARRY               STEP 2: ANCHOR              STEP 3: MOUNT
    ┌──────┐  ┌──────┐          ┌──────────────┐             ┌──────────────┐
    │FRAME │  │FRAME │          │  ●        ●  │             │  ●     ●  ●  │
    │SEC 1 │  │SEC 2 │          │  drill 4     │             │  ║  ┌──╨──┐ │
    │41 lbs│  │41 lbs│   ──►    │  holes       │    ──►      │  ║  │HH27 │ │
    │      │  │      │          │  set anchors │             │  ║  │     │ │
    │      │  │      │          │  bolt frame  │             │  ║  └──╥──┘ │
    └──────┘  └──────┘          │  ●        ●  │             │  ●     ●  ● │
    2 workers carry              │  ~8 min     │             └──────────────┘
                                └──────────────┘              connect hoses
                                                              start power pack

    STEP 4: BREAK               STEP 5: REPOSITION
    ┌──────────────┐             unbolt (4 bolts)
    │  ●        ●  │             walk frame 4' over
    │  ║ ┌─────┐║  │             re-anchor
    │  ║ │→→→→→│║  │             repeat
    │  ║ │ HH27│║  │    ──►
    │  ║ │     │▼  │             ~10 min between lines
    │  ║ └─────┘║  │
    │  ●     ↓↓↓●  │
    └────────↓↓↓───┘
         pieces fall
         gravity clears
```

### V1 — Motorized + Camera

Add controlled feed and visual monitoring.

| Addition | Spec | Weight | Cost |
|---|---|---|---|
| NEMA 34 stepper motor (12 Nm, brake, encoder) | StepperOnline 34E1KBK50-120 | 10 lbs | $162 |
| Closed-loop driver (CL86T V4.1) | Step/Dir/Enable, 24–110V | 1 lb | $60 |
| 1"-5 Acme lead screw (8 ft) | Roton 59286, self-locking | 17 lbs | $123 |
| Bronze nut (5,000 lb rated) | Roton 90138 | 0.5 lb | $51 |
| Power supply (48V 10A) | Mean Well or equivalent | 3 lbs | $40 |
| Coupling + bearings + isolation mounts | Jaw coupling, thrust bearings, elastomeric mounts | 4 lbs | $100 |
| Industrial camera | USB, 1280×720 | 2 lbs | $200–$500 |
| Raspberry Pi 4/5 (4GB) | Controller + camera processing | 0.5 lb | $55 |
| Tablet (operator display) | Any Android/iPad | — | Already owned |
| **V1 addition** | | **~38 lbs** | **~$791–$1,091** |
| **V1 total (V0 + additions)** | | **~362–402 lbs** | **~$10,800–$16,000** |

**V1 capabilities:**
- Motor-controlled feed rate (0.1–2.0 ft/min)
- Camera feed to operator tablet
- Operator adjusts speed dial based on what they see
- Position tracking (encoder feedback)
- E-stop button
- Data logging (session JSON + images for every line)

**Operating mode options:**
- **Continuous feed:** Motor runs during breaking, camera-guided speed
- **Step-and-break:** Motor advances between impact cycles, stops during breaking. Zero vibration to motor. Simpler.

### V2 — Semi-Automated (The Product)

Software layer on V1 hardware.

- Camera-based fracture detection (OpenCV edge detection, frame differencing)
- Automatic feed rate adjustment — speeds up when fracture propagates well, slows on lateral spread
- Rebar detection — HSV color masking for rust/metallic, flags position
- Through-break detection — void ratio analysis
- Stall detection — no fracture progress triggers pause
- Strength test before breaking — tap-and-rebound via accelerometer
- All data feeds the ontology

**Software already written:** `breaker_controller.py` + `rpi_hardware.py` — ready for V2 deployment on RPi.

### V3 — Autonomous (Ontology Payoff)

AI model trained on V1/V2 fracture data. Fully autonomous line breaking. Self-optimizing. This is where every wall broken in V1 and V2 becomes training data.

---

## Performance

### Speed Estimate (8" Wall, 3,000 PSI, #4 Rebar @ 16" OC)

| Metric | Value |
|---|---|
| Impact energy | 75 J @ 1,400 BPM = 105 kJ/min |
| Vertical line speed | 0.5–2.0 ft/min (concrete dependent) |
| One 8' vertical line | 4–16 min |
| 200 LF perimeter ÷ 4' spacing | 50 vertical lines |
| 50 lines × 10 min avg + repositioning | ~10 hours (1 system) |
| **2 systems in parallel** | **~6 hours** |

### vs Alternatives

| Method | Time (200 LF) | Cost/Project | Equipment Needed |
|---|---|---|---|
| Handheld breaker (1 operator) | 3–5 days | $2,000–$4,000 labor | Breaker rental |
| Diamond wall saw (subcontractor) | 2–4 hours cutting + setup | $3,000–$6,000 sub cost | Sub's equipment |
| Brokk 60 | 1–2 days | $2,400–$3,600 rental | Trailer, rigging |
| **Track Breaker (2 systems)** | **~6 hours** | **$0 (owned)** | **Crew carries it** |

### Why Bolted = More Power

| Factor | Handheld | Wall-Mounted |
|---|---|---|
| Reaction force absorbed by | Operator's arms/body | Wall (through anchors) |
| Energy lost to bounce/recoil | 30–50% | <10% (stiff frame) |
| Effective energy into concrete | ~40–50 J | **~65–70 J** |
| Sustained operation | 15–20 min bursts | **Continuous** |

A 75 J breaker bolted to the wall performs like a 100+ J handheld. The stiff frame and rigid anchoring transfer more energy into fracture instead of wasting it on operator fatigue and tool bounce.

---

## Market

### Target Customers

| Segment | Use Case | Why They'd Buy |
|---|---|---|
| **Residential demo contractors** | Foundation removal, basement walls | Replaces handheld labor, no heavy equipment needed |
| **Concrete cutting contractors** | Selective demo, wall openings | No diamond blades, no water, no sub needed |
| **Deconstruction companies** | Panel-based foundation recovery | Precision fracture lines for crane-liftable sections |
| **Infrastructure / DOT** | Bridge pier removal, retaining walls | Confined space capable, crew-portable |
| **Renovation contractors** | Basement egress windows, wall removal | Precise, clean cuts without full demo |

### Market Size

- ~200,000 residential demolitions/year in the US
- ~$1.2B concrete cutting/demolition market
- Zero direct competitors in the crew-portable, wall-mounted breaking space
- Hilti Cut Assist (wall saw on track) is the closest analog — but it's a saw, not a breaker

### Pricing Model

| Tier | What | Price |
|---|---|---|
| System sale | Track + carriage + anchoring kit (BYOB — bring your own breaker + power pack) | $3,000–$5,000 |
| Complete package | System + HH27 + HPP09 + camera + RPi | $11,000–$17,000 |
| Software license | V2 camera-guided automation (annual) | $1,200/year |
| Data subscription | Concrete fracture data from field deployments (anonymized) | Future revenue |

---

## Patent Scope

**No prior art found.** No commercial product exists that combines:

1. Crew-portable, wall-anchored track system
2. Hydraulic breaker mounted on linear carriage
3. One-sided concrete anchoring (no back-side access)
4. Gravity-assisted debris clearing (vertical operation)
5. Self-locking drive mechanism (Acme lead screw)
6. Camera-based fracture monitoring and feed control
7. Modular breaker head (swappable energy levels)

**Provisional patent filing after V0 test validates the physics.**

---

## The 4 Returns (MVE)

Every dollar spent on the Track Breaker produces four returns:

| Return | Value |
|---|---|
| **1. Material value** | Foundation panels, RCA aggregate, rebar — same recovery as any method |
| **2. Ontology data** | Fracture patterns by concrete age/mix/reinforcement — builds the knowledge base |
| **3. Robot training signal** | Every camera frame + fracture measurement = training data for V3 autonomous mode |
| **4. Market intelligence** | First-mover in an empty product category. Patent. Licensing. Product sales. |

---

## Shopping Lists

### V0 — Without Software (Prove the Physics)

| # | Item | Example Product | Est. Cost |
|---|---|---|---|
| 1 | Hydraulic breaker | HYCON HH27 (75J, 1,400 BPM) | $4,000–$5,500 |
| 2 | Hydraulic power pack | HYCON HPP09 (gas) or HPP09E (electric) | $3,500–$5,000 |
| 3 | Hydraulic hoses (30 ft, quick-connect) | 3/8" 4,000 PSI hose set | $200–$400 |
| 4 | Steel frame fabrication | Local steel shop — 8' vertical rail, 2 sections, bolted flange | $1,500–$2,500 |
| 5 | Linear bearings + carriage plate | igus drylin or THK rails + breaker mount | $500–$1,000 |
| 6 | Adhesive anchors (top) | Hilti HIT-HY 200 + 5/8" threaded rod | $150–$250 |
| 7 | Wedge anchors (bottom) | Hilti Kwik Bolt TZ 5/8" | $50–$80 |
| 8 | Hammer drill + SDS-plus bits | Hilti TE 7-C or equivalent | $300–$500 (or owned) |
| 9 | Safety gear | N95 masks, face shields, hearing protection, gloves | $100–$150 |
| | **V0 Total** | | **$10,300–$15,380** |

**V0 gets you:** A frame bolted to a wall, breaker on a carriage, operator controls descent by hand (gravity + friction clamp or hand crank). No electronics. No software. Pure mechanical.

---

### V1 — With Software (Camera-Guided Automation)

Everything in V0, plus:

| # | Item | Example Product | Est. Cost |
|---|---|---|---|
| 10 | Stepper motor (12 Nm, brake, encoder) | StepperOnline 34E1KBK50-120 | $162 |
| 11 | Stepper driver | StepperOnline CL86T V4.1 | $60 |
| 12 | Acme lead screw (1"-5 TPI, 8 ft) | Roton 59286 | $123 |
| 13 | Bronze nut (5,000 lb rated) | Roton 90138 | $51 |
| 14 | Jaw coupling (14mm to 1") | Ruland or Lovejoy | $20 |
| 15 | Thrust bearings (pair) | Angular contact for screw ends | $30 |
| 16 | Vibration isolation mounts (4x) | Elastomeric rubber-in-shear | $50 |
| 17 | Power supply (48V 10A) | Mean Well or equivalent | $40 |
| 18 | Raspberry Pi 4/5 (4GB) | RPi 4 Model B | $55 |
| 19 | Industrial USB camera | 1280×720, global shutter | $200–$500 |
| 20 | Accelerometer | MPU6050 breakout board | $8 |
| 21 | Relay module (breaker on/off) | 5V single-channel relay | $5 |
| 22 | Motor driver board | L298N or BTS7960 (if not using stepper for carriage lock) | $15 |
| 23 | Logic level shifter (3.3V→5V) | 4-channel bidirectional | $5 |
| 24 | Limit switches (2x) | Mechanical end-of-travel | $10 |
| 25 | E-stop button (mushroom, NC) | Panel-mount, twist-release | $15 |
| 26 | Wiring + connectors | 10 AWG motor, JST signal cables, DIN rail | $30 |
| 27 | Weatherproof enclosure | IP65 box for RPi + driver + relay | $25 |
| 28 | microSD card (64GB) | For RPi OS + data logging | $12 |
| | **V1 additions** | | **$916–$1,216** |
| | **V1 Total (V0 + additions)** | | **$11,216–$16,596** |

**V1 gets you:** Everything in V0, plus motor-controlled feed rate, camera on a tablet, fracture detection, rebar detection, strength testing, e-stop, and full data logging. Software already written (`breaker_controller.py` + `rpi_hardware.py`).

---

## What's Built So Far

| Deliverable | Status | Location |
|---|---|---|
| Concept + engineering analysis | Done | `track-breaker-prototype.md` |
| Motor/drive system sizing | Done | Research notes (NEMA 34 + Acme screw) |
| Control software (V2-ready) | Done | `track-breaker-software/breaker_controller.py` |
| RPi hardware interface | Done | `track-breaker-software/rpi_hardware.py` |
| V0 prototype (mechanical only) | **Next** | Fab frame, buy breaker, test on wall |

---

## Next Step: V0

**Cost to prove the physics: ~$10K–$15K.** Fab the frame. Buy the HH27. Bolt to a foundation wall. Break one line. If it works, the motor, camera, and software are already designed and coded.

One weekend. One wall. One answer.

---

## Sources

- HYCON — hycontools.com (HH27, HPP09 specs)
- Hilti — HIT-HY 200 adhesive anchor system (seismic/vibration-rated)
- Hilti — DST 10-CA Cut Assist wall saw (track system precedent)
- StepperOnline — NEMA 34 closed-loop stepper motors, CL86T driver
- Roton — Acme lead screws and bronze nuts (load ratings, self-locking data)
- Helix Linear — lead screw vs ball screw self-locking analysis
- NAHB — residential foundation specifications
- RS Means — concrete demolition labor factors
