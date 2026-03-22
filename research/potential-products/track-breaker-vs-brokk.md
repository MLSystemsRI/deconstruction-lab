# Track Breaker vs Brokk — Side-by-Side Comparison

> ML Systems LLC | Deconstruction Lab | Lucent Lens
> Two tools, two jobs. Here's where each one wins and where they overlap.

---

## The Core Difference

The Track Breaker and the Brokk solve different problems that happen to live on the same job site.

| | **Track Breaker** | **Brokk 170** |
|---|---|---|
| **What it is** | Wall-mounted, track-guided hydraulic breaker | Remote-controlled demolition robot |
| **What it does** | Precision vertical fracture lines in standing walls | General-purpose breaking, crushing, cutting, grading |
| **Analogy** | A CNC plasma cutter (guided, single-axis, repeatable) | A mini excavator (versatile, multi-axis, operator-driven) |

---

## Spec Comparison

| Spec | Track Breaker (V1) | Brokk 170 |
|---|---|---|
| **Weight (system)** | ~362–402 lbs (portable in 2 sections) | 3,527 lbs (trailered) |
| **Breaker** | HYCON HH27 | OEM hydraulic breaker (multiple sizes) |
| **Impact energy** | 75 J / strike | ~405 J (299 ft-lbs) / strike |
| **Blows per minute** | 1,400 BPM | 600–1,200 BPM (attachment dependent) |
| **Power delivered** | 105 kJ/min | ~240–486 kJ/min |
| **Power source** | HYCON HPP09 gas or HPP09E electric (154–194 lbs) | 24 kW electric (32A circuit or generator) |
| **Mobility** | Crew-portable (2 workers carry) | Tracked, self-propelled, fits through 31" openings |
| **Precision** | +/- 1/8" (track-guided) | +/- 2"–4" (operator skill dependent) |
| **Axes of motion** | 1 (vertical on rail) | 6+ (boom, arm, rotation, tracks) |
| **Setup time** | ~10 min (drill, anchor, bolt, connect hoses) | ~30–60 min (unload from trailer, power up, attach tool) |
| **Repositioning** | ~10 min (unbolt, walk 4', re-anchor) | Continuous (drives on tracks) |
| **Operator** | 2 crew (setup), 1 to run (V1+: camera-guided) | 1 trained operator (remote control) |
| **Fatigue** | Zero (machine does the work) | Zero (remote operated) |
| **Autonomy path** | V0 manual -> V1 camera -> V2 semi-auto -> V3 autonomous | None (always operator-controlled) |

---

## Cost Comparison

| Cost | Track Breaker | Brokk 170 |
|---|---|---|
| **Purchase (new)** | $11K–$17K (complete V1 package) | $180K–$220K+ |
| **Purchase (used)** | N/A (custom built) | ~$80K–$120K |
| **Rental/day** | N/A (owned asset) | $1,200–$1,800/day |
| **Cost per project (owned)** | $0 marginal (consumables only: anchors, chisel tips) | $0 marginal (electricity, attachment wear) |
| **Cost per project (rented)** | N/A | $2,400–$3,600 (2-day foundation job) |
| **Consumables/project** | ~$50–$100 (anchors, chisel tip) | ~$200–$500 (breaker points, hydraulic fluid, wear parts) |
| **Payback** | Immediate (replaces $2K–$4K handheld labor per job) | ~3–4 years at 1 home/month (vs renting + subbing) |
| **Attachments** | Chisel tips only (swap moil point, flat chisel, narrow chisel) | Breaker, crusher, grapple, shears, bucket ($5K–$15K each) |

---

## Job Capability Matrix

| Task | Track Breaker | Brokk 170 | Winner |
|---|---|---|---|
| **Vertical fracture lines in standing walls** | Purpose-built. Clean, repeatable, +/- 1/8" | Can do it, but imprecise — bashes rather than scores | **Track Breaker** |
| **Section walls into liftable panels** | Core use case — 4' spacing, crane-ready panels | Not designed for this — breaks, doesn't section | **Track Breaker** |
| **Free panels at footing joint** | No (can't reach base of wall) | Yes — breaker tip gets into the joint | **Brokk** |
| **Break footings below grade** | No (must be wall-mounted, needs a standing wall) | Yes — climbs into the hole, remote operated | **Brokk** |
| **Break floor slab** | No (horizontal surface, not wall-mounted) | Yes — downward breaking | **Brokk** |
| **Cut rebar** | No | Yes (metal shear attachment) | **Brokk** |
| **Move debris / loose sections** | No | Yes (grapple attachment) | **Brokk** |
| **Grade / clean foundation hole** | No | Yes (bucket attachment) | **Brokk** |
| **Work near utilities** | Limited (fixed position) | Excellent (precise remote arm, camera) | **Brokk** |
| **Confined space / inside basement** | Yes (crew carries in) | Yes (self-propelled, fits 31" doors) | **Tie** |
| **Concrete strength testing** | Yes (V2: tap-and-rebound via accelerometer) | No | **Track Breaker** |
| **Data collection for ontology** | Yes (camera + fracture data every pass) | No (operator-only, no instrumentation) | **Track Breaker** |

---

## The Real Question: Replace or Complement?

**They don't compete. They're sequential.**

```
TRACK BREAKER                          BROKK 170
scores the walls                       does everything else
────────────────                       ──────────────────────

  Standing wall                        After walls are paneled:
  ┌──────────────────┐                 ┌ ─ ─ ─ ─ ─ ─ ─ ─ ┐
  │ │    │    │    │  │                   FREE PANELS AT BASE
  │ │    │    │    │  │  ──────►       │ BREAK FOOTINGS      │
  │ │    │    │    │  │                  BREAK SLAB
  │ │    │    │    │  │                │ CUT REBAR            │
  └──────────────────┘                  GRADE HOLE
  precision lines                      └ ─ ─ ─ ─ ─ ─ ─ ─ ┘
  every 4 feet                         versatility
```

### Foundation Day Workflow (Track Breaker + Brokk)

| Phase | Tool | Task | Time |
|---|---|---|---|
| 1 | **Track Breaker** | Score vertical lines every 4' around 200 LF perimeter (50 lines) | ~6 hrs (2 systems) |
| 2 | **Track Breaker** | Horizontal score at footing line | ~2 hrs |
| 3 | **Brokk** | Free panels at base — breaker tip along footing joint | ~2 hrs |
| 4 | **Crane** | Lift 50 wall panels out (~15 min each) | ~4–6 hrs |
| 5 | **Brokk** | Break floor slab into 4' x 6' sections | ~2–3 hrs |
| 6 | **Crane** | Lift slab sections out | ~3–4 hrs |
| 7 | **Brokk** | Break footings, cut rebar, clean hole | ~3 hrs |
| 8 | **Crane** | Lift footing debris + Brokk out (last lift) | ~1 hr |

**Total: ~2 days with both tools. Track Breaker handles Day 1 morning, Brokk takes over from there.**

---

## When You'd Use Only One

### Track Breaker Only (no Brokk)
- **Scenario:** Small job, 1–2 walls, no full foundation removal
- **Example:** Cut an egress window opening, remove a single wall section
- **Limitation:** Can't free panels at base or break footings — need handheld breaker for that

### Brokk Only (no Track Breaker)
- **Scenario:** Full demolition where panel recovery doesn't matter
- **Example:** Commercial teardown, no material reuse goal
- **Limitation:** Walls get bashed into rubble instead of clean panels — loses reuse value, more haul-off

---

## Strategic Value Comparison

| Dimension | Track Breaker | Brokk 170 |
|---|---|---|
| **Material recovery** | Enables panel reuse (retaining walls, landscape, resale) | Enables footing/slab RCA + rebar recovery |
| **Ontology data** | High — every line produces fracture pattern data by concrete age/mix/rebar | Low — general demolition, no structured data capture |
| **Robot training signal** | High — camera frames + measurements = V3 training data | None — operator-controlled, no autonomy path |
| **Market intelligence** | First-mover in empty product category — patent, licensing, product sales | Commodity equipment — no IP, no moat |
| **Capex** | ~$15K (built once, used forever) | ~$100K used / ~$200K new |
| **Revenue potential** | Product sales + software licensing + data subscription | None (cost center only) |

---

## Bottom Line

| | Track Breaker | Brokk 170 |
|---|---|---|
| **Build or buy?** | Build (custom, no commercial equivalent) | Buy used (~$100K) or rent ($1,200–$1,800/day) |
| **When to acquire?** | Now — V0 proves physics for ~$10K | After 3–4 projects justify ownership vs rental |
| **Role on site** | Precision scoring tool (the scalpel) | General demolition workhorse (the hammer) |
| **IP value** | Patent-worthy, licensable, data-generating | Zero — commodity |
| **Lucent Lens** | Crew-portable, 2 humans carry it, humans control it | Remote-operated, 1 human, replaces 22 laborers |

**The Track Breaker is the product. The Brokk is the tool.**

The Track Breaker creates the conditions (scored, panel-ready walls) that make the Brokk's job faster and the crane's job possible. Without the Track Breaker, the Brokk just bashes walls into rubble — recoverable as RCA but not as panels. With the Track Breaker, every wall becomes inventory.

---

## Sources

- HYCON — hycontools.com (HH27, HPP09 specs)
- Brokk Inc — brokk.com (Brokk 70/170/200 specs, attachment catalog)
- Brock Rentals — 1-866-276-5548 (Brokk rental rates, Northeast)
- ML Systems — track-breaker-pitch.md, phase-4-foundation/analysis.md
