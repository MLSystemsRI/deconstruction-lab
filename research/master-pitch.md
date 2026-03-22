# ML Systems — Deconstruction Operations Master Pitch

> ML Systems LLC | Deconstruction Lab | Lucent Lens
> "The old house funds the new one."
>
> This is the single document that tells the full story. Every grant app,
> investor deck, partnership pitch, and municipal presentation pulls from here.

---

## The One-Liner

ML Systems deconstructs existing homes, recovers 80–90% of building materials, and reuses them to build new affordable housing — cutting per-unit development costs by $38K–$62K and stretching every state housing dollar further.

---

## The Problem (Three Layers)

### 1. The State's Problem
Rhode Island needs **15,000 new homes by 2030**. Many target sites have existing structures. Conventional demolition:
- Costs **$15K–$30K per house** (demo + disposal)
- Sends **160–190 tons** to landfill per house
- Recovers **$0** in material value
- Developers ask for **more subsidy** to cover demo costs

### 2. The Industry's Problem
Concrete demolition has two options: a laborer with a 60-lb jackhammer, or a $200K+ robot. Nothing in between. Residential deconstruction is manual, slow, and unprofitable — so nobody does it.

### 3. The Homeowner's Problem
Building equity is slow. Construction costs are high. The existing house is treated as waste. There's no system that turns the old house into value for the new one.

---

## The Solution — Closed-Loop Deconstruction

ML Systems operates a **closed-loop system** that finances, deconstructs, designs, and builds — resulting in faster equity growth and lower costs with near-zero waste.

### The Internal Loop

```
EXISTING STRUCTURE (on site)
     │
     ▼
ML SYSTEMS DECON (self-performed, crane + Track Breaker + Brokk + crew)
     │
     ├──→ MATERIALS REUSED IN NEW BUILD (internal captured revenue)
     │         └──→ Reduces hard cost by $8K–$22K/unit
     │         └──→ Lower TDC = lower subsidy ask = higher grant scoring
     │
     ├──→ SURPLUS MATERIALS SOLD (Builder's Open House / channels)
     │         └──→ Revenue offsets decon labor cost
     │         └──→ Builds the secondary materials market
     │
     └──→ DATA CAPTURED (ontology)
               └──→ Every material gets ML Material ID, grade, provenance
               └──→ Pricing model improves per project
               └──→ Robot training signal for equipment autonomy
```

---

## How We Deconstruct — The Four Phases

### Phase 1: Roof
- Crane lifts roof sections as intact assemblies
- Shingles separated → grinder stockpile (winter revenue arm)
- Sheathing, rafters, fascia recovered for reuse
- **Key finding:** RI has ZERO shingle recyclers, ~45K–50K tons/year going to landfill

### Phase 2: Walls
- Crane lifts wall sections as panels
- Framing lumber, sheathing, windows, doors, hardware recovered
- Insulation separated by type (fiberglass batts reusable, blown cellulose compost)
- Gypsum → recycler or agricultural amendment

### Phase 3: Floor System
- Floor decking (3/4" T&G plywood) recovered as sheets
- Floor joists (2x10, 2x12) — highest-value recovered lumber
- Subfloor assemblies crane-lifted where possible

### Phase 4: Foundation — The Biggest Swing
- **160–190 tons of concrete** per 2,500 SF home with full basement
- Two-tool system: **Track Breaker** scores walls into panels, **Brokk 170** does everything else
- Wall panels crane-lifted as 4'x8' sections (~3,200 lbs each) → reuse as retaining/landscape walls
- Slab sectioned and lifted → RCA base course for new foundation
- Footings broken by Brokk → crushed for aggregate
- Rebar recovered (2–4 tons/home, $200–$250/ton scrap)
- **45–80% of foundation reused on the same project**

---

## The Equipment Stack

### Track Breaker (Custom — The Product)
| Spec | Value |
|---|---|
| What | Wall-mounted, track-guided hydraulic breaker |
| Weight | ~362–402 lbs (crew-portable, 2 sections) |
| Breaker | HYCON HH27, 75J, 1,400 BPM |
| Precision | +/- 1/8" (track-guided) |
| Cost | ~$11K–$17K complete |
| Role | Precision scoring — creates crane-liftable wall panels |
| IP | Patent-worthy, no prior art, licensable as product |
| Autonomy path | V0 manual → V1 camera → V2 semi-auto → V3 autonomous |
| Software | `breaker_controller.py` + `rpi_hardware.py` — written, ready for V2 |

### Brokk 170 (Commercial — The Tool)
| Spec | Value |
|---|---|
| What | Remote-controlled demolition robot |
| Weight | 3,527 lbs (trailered) |
| Impact | ~405 J / strike |
| Cost | ~$100K used, $1,200–$1,800/day rental |
| Role | General demo — frees panels, breaks footings/slab, cuts rebar, grades hole |
| Attachments | Breaker, crusher, grapple, shears, bucket |
| Rental | Brock Rentals (1-866-276-5548), Finke Equipment (Selkirk, NY) |

### Crane (Shared Asset)
- On-site for full decon sequence (roof → walls → floor → foundation)
- Lifts panels, sections, assemblies, and the Brokk itself
- The Track Breaker + Brokk combination creates crane-ready pieces at every phase

### Combined Workflow (Foundation Day)
| Phase | Tool | Task | Time |
|---|---|---|---|
| 1 | Track Breaker | Score vertical lines every 4' (50 lines, 200 LF) | ~6 hrs |
| 2 | Track Breaker | Horizontal score at footing line | ~2 hrs |
| 3 | Brokk | Free panels at base | ~2 hrs |
| 4 | Crane | Lift 50 wall panels out | ~4–6 hrs |
| 5 | Brokk | Break floor slab into sections | ~2–3 hrs |
| 6 | Crane | Lift slab sections out | ~3–4 hrs |
| 7 | Brokk | Break footings, cut rebar, clean hole | ~3 hrs |
| 8 | Crane | Lift debris + Brokk out (last lift) | ~1 hr |
| | | **Total** | **~2 days** |

---

## The Numbers — Per Home (2,500 SF, Full Basement)

### Material Recovery
| Category | Recovered | Value |
|---|---|---|
| Structural lumber (joists, studs, rafters) | 8,000–12,000 BF | $4,000–$9,000 |
| Sheathing (plywood/OSB) | 80–120 sheets | $1,600–$3,600 |
| Foundation panels (4'x8' concrete) | ~50 panels | $2,000–$6,000 (reuse value) |
| RCA aggregate (crushed concrete) | 85–150 tons | $1,570–$4,400 (avoided cost) |
| Rebar (clean #1 HMS) | 2–4 tons | $400–$1,000 |
| Doors, windows, hardware, trim | Varies | $500–$2,000 |
| Shingles (to grinder) | 1.5–2.25 tons | Tipping fee revenue |
| **Total recoverable value** | | **$10,070–$26,000** |

### Cost Comparison vs Conventional
| Line Item | Conventional Developer | ML Systems |
|---|---|---|
| Demo/disposal | −$15K to −$30K | $0 (self-performed) |
| Material recovery revenue | $0 | +$10K–$26K |
| Material reuse in new build | $0 | +$5K–$15K (avoided cost) |
| **Net cost swing per unit** | | **$30K–$71K** |

### Grant Impact (EOH 2030 — $20M Program)
| Metric | Conventional Developer | ML Systems |
|---|---|---|
| TDC per unit | $375K–$500K | $186K–$366K |
| Grant ask per unit | $85K–$100K (0 pts) | $25K–$70K (5–12 pts) |
| Scoring advantage (Cat 3+4) | 3–11 pts | 19–24 pts |
| State funds X homes with $10M | ~100 homes | ~143–200 homes |

---

## Revenue Arms

### 1. Deconstruction Services (Core)
- Self-performed on ML Systems projects (internal captured revenue)
- Available as service to other developers (future)
- Per-home economics: $0 cost to ML Systems vs $15K–$30K sub cost to others

### 2. Builder's Open House (BOH — Teal)
- Secondary building materials marketplace at mlsystemsri.store
- Materials from decon displayed and sold to public
- 10 zone-based categories, cart-based shopping
- Community engagement vehicle — every decon = an open house event
- Hidden route: `/program/housing-2030` for state program negotiations

### 3. Shingle Grinding (Winter Revenue)
- RI: ~45K–50K tons/year of tear-offs, ZERO recyclers in state
- Roofers pay $50–$70/ton to us (vs $100/ton landfill tipping)
- We grind to RAS, sell to HMA plants at $35–$50/ton
- Same crew, same site, off-season when decon/construction slows
- Every roofer who diverts to us becomes a referral source for whole-house decon

### 4. Track Breaker Product Sales (Future)
- System sale: $3K–$5K (BYOB — bring your own breaker + power pack)
- Complete package: $11K–$17K
- Software license: $1,200/year (V2 camera-guided automation)
- Data subscription: concrete fracture data from field deployments
- Zero direct competitors in crew-portable wall-mounted breaking

### 5. Data / Ontology (Future)
- ML Material IDs on every recovered item
- Fracture pattern data by concrete age/mix/rebar
- Pricing intelligence from BOH market transactions
- Training data for V3 autonomous equipment

---

## The RI Pipeline — Where the Properties Come From

### Property Acquisition Channels

| Channel | Operator | Cost | Status |
|---|---|---|---|
| **Providence Land Bank** | PRA ($8.5M ARPA) | Near-$0 (tax-reverted lots) | Active — pre-approved home plans + permitted lots |
| **RI Statewide Housing Land Bank** | RIHousing (2025) | Varies (up to 97% LTV loans) | Active — rolling applications |
| **NACA One-Dollar Program** | NACA ($20B, $15B BofA) | $1 (city-owned) | No RI office — covers Providence MSA via Boston HQ |
| **CHLT of RI** | Community Housing Land Trust | Ground lease (99-year) | Active — 100+ homes statewide, Pawtucket HQ |
| **Tax Sales** | Municipal tax collectors | Below market | Ongoing — each municipality runs own process |
| **Governor's Blight Program** | Governor's office ($5M) | Varies | Active statewide |

### Target Municipalities

| City | Vacancy Rate | Vacant Units | Pre-1939 Housing | Priority |
|---|---|---|---|---|
| **Providence** | 11.31% | ~7,950 | 55.61% (high salvage value) | #1 |
| **Central Falls** | 10.24% | ~767 | High (densest city in RI) | #2 |
| **Woonsocket** | 10.14% | ~1,771 | High (mill city) | #3 |
| **Pawtucket** | 6.9% | ~2,141 | High (mill city, CHLT HQ) | #4 |

### TDC with Near-$0 Land (PRA or NACA)

| Line Item | Market Land | PRA / NACA Lot |
|---|---|---|
| Land | $40K–$80K | $0–$5K |
| Decon (self-performed) | $0 | $0 |
| Factory module | $100K–$200K | $100K–$200K |
| Site work (decon materials via BOH) | $21K–$46K | $21K–$46K |
| Soft costs | $25K–$40K | $25K–$40K |
| **TDC** | **$186K–$366K** | **$146K–$291K** |

### Dual-Track Pipeline

**EOH 2030:** ML Systems = developer. Grant-funded, 5+ units, RI only, April 10 deadline.
**NACA / Land Bank:** ML Systems = contractor/partner. $1 lots, NACA mortgage ($0 down, 5.375%), all 50 states.
**Both pipelines share:** same crew, same equipment, same BOH materials channel, same ontology.

### BOH as Integration Layer

The Builder's Open House sits between decon (supply) and housing programs (demand). Every material gets an ML Material ID and provenance record. Government programs get traceable materials. BOH gets institutional volume from Day 1. The housing programs bootstrap the marketplace — the marketplace then grows beyond the programs.

### Competitive Landscape: Zero

- No dedicated commercial deconstruction operators in RI
- No Habitat ReStore in Providence metro
- No deconstruction ordinance anywhere in RI
- Casa Buena Builders (Providence) does it occasionally, not at scale
- ML Systems would be the first and only

---

## Why Nobody Else Can Do This

1. **Self-performing decon** — every other developer subs demo out or skips it
2. **Material reuse on the same site** — conventional demo = dumpster
3. **Custom equipment (Track Breaker)** — fills a gap nobody else has identified
4. **Data capture at every phase** — ontology feedback loop improves the next project
5. **Community engagement through decon** — Builder's Open House is unique
6. **Year-round revenue** — shingle arm covers winter, decon covers spring–fall
7. **Grant scoring advantage** — 10–16 point gap on Categories 3+4 vs conventional
8. **Zero competitors in RI** — first mover in every sense
9. **$20B+ in accessible program funding** — EOH ($20M) + NACA ($20B) + land banks + blight programs

---

## The Lucent Lens — Full Circle

1. **Old house** → deconstructed by ML Systems crew (local jobs, skill-building)
2. **Materials** → displayed at Builder's Open House (community engagement, awareness)
3. **Surplus sold** → affordable materials for local contractors and DIYers
4. **Reusable materials** → go into the new affordable home (cost reduction)
5. **Grant funding** → covers the gap (state subsidy, minimized because of reuse)
6. **New homeowner** → buys at <$400K, earns equity in a home built from the old one
7. **Data** → feeds the ontology, trains the pricing model, improves the next project

The old house glows through the new one.

---

## Critical Path — Operational Launch

```
CAPITAL RAISE (investor page)
     │
     ▼
LIABILITY INSURANCE (significant startup cost — the single purchase that tethers all operations)
     │
     ▼
GC REGISTRATION (RI — "registration" not "license", exam/requirements done)
     │
     ▼
GRANT APPLICATION (EOH 2030 Round 1: April 10, 2026 — Round 2: late spring 2026)
     │
     ▼
AWARD (June 2026)
     │
     ▼
CONSTRUCTION START (by March 2027)
```

### Parallel Work (no dependency on capital raise)
- Contact PRA Land Bank (Darcy Charleson, 401.680.8501) — request available lots
- Contact CHLT of RI (Melina Lodge, 401.721.5680 x104) — developer partnership
- Submit inquiry to RIHousing Land Bank (rihousing.com/rfps-rfqs)
- Contact NACA Boston — explore Providence-Warwick MSA coverage
- Identify 5+ scattered sites via PRA, tax sales, CHLT parcels
- Build per-unit pro forma with BOH materials pricing as documented cost basis
- Draft grant application narrative (dual-track: EOH + land bank/NACA)
- Activate `/program/housing-2030` on BOH as institutional procurement portal
- Select factory-built partner (Coastal Modular or Mod-Tech)
- Register on eCivis/EUNA portal + apply for Work Immersion Program
- Collect municipal letters of support
- Continue equipment R&D (Track Breaker V0 proof of concept)

### BOH as Integration Layer
The Builder's Open House is the documented procurement channel between decon (supply) and housing programs (demand). Every material gets ML Material ID + provenance. Government programs get traceable materials. BOH gets institutional volume. See `research/processed/ri-optimized-plan.md` for the full dual-track operations plan.

---

## Expansion Potential

*This section grows as new research is integrated. Each entry links to its detailed analysis.*

| Opportunity | Source | Status | Impact |
|---|---|---|---|
| **EOH 2030 — Entry-Level Homeownership** | RI Housing / housing.ri.gov | Analyzed → `housing-2030-grant.md` | $20M program, $100K/unit max, 70-pt scoring — ML Systems scores 44–52 pts |
| **NACA One-Dollar Homeownership** | naca.com | Analyzed → `processed/naca-one-dollar-program.md` | $20B committed ($15B BofA), $1 city-owned lots, modular eligible, all 50 states. Land cost drops to $1 → TDC $146K–$286K. ML Systems = contractor/partner. Dual-track with EOH. |
| **Acquisition & Revitalization** | Housing 2030 bond programs | Identified, not analyzed | $10M+ — buy distressed → decon → rebuild |
| **Small Scale Housing** | Housing 2030 bond programs | Identified, not analyzed | Up to $500K/unit — smaller projects, same decon advantage |
| **Affordable Rental New Development** | Housing 2030 bond programs | Identified, not analyzed | $27M — rental units, same cost story |
| **Shingle Recycling (RI monopoly)** | Internal research | Analyzed → `phase-1-roof/shingle-recycling/` | ZERO competitors in RI, 45K–50K tons/year, RIRRC contact exists |
| **Work Immersion Program (GWB/DLT)** | RI state program | Analyzed → `financial-architect/research/work-immersion-program.md` | 75% wage reimbursement, $5/hr effective labor cost, max 4 interns/year |
| **Providence Land Bank (PRA)** | PRA / ARPA | Analyzed → `processed/ri-optimized-plan.md` | $8.5M ARPA funded, pre-approved home plans, fully permitted lots. Contact: Darcy Charleson, 401.680.8501 |
| **RI Statewide Housing Land Bank** | RIHousing (2025 legislation) | Analyzed → `processed/ri-optimized-plan.md` | Rolling applications, 90-day review, up to 97% LTV. Acquires/transfers vacant properties for affordable housing |
| **CHLT of RI** | Community Housing Land Trust | Analyzed → `processed/ri-optimized-plan.md` | Statewide scope, 100+ homes, 99-year ground leases. Dir: Melina Lodge, 401.721.5680 x104 |
| **Governor's Blight Program** | Governor's office | Identified | $5M statewide to revitalize blighted/vacant properties |
| **MA Gateway Cities (Future)** | MassHousing / NACA Boston | Identified | Fall River, New Bedford vacancy programs. NACA Boston HQ = strongest partnership. Post-RI-proof expansion |

---

## Sources

### Internal Research
- `research/housing-2030-grant.md` — Full EOH 2030 grant strategy (70-pt rubric, Q&A, pro forma, factory-built pricing)
- `research/phase-1-roof/` through `research/phase-4-foundation/` — Phase-by-phase decon protocols
- `research/potential-products/track-breaker-pitch.md` — Track Breaker product pitch
- `research/potential-products/track-breaker-vs-brokk.md` — Equipment comparison
- `research/phase-1-roof/shingle-recycling/` — RI shingle recycling market analysis

### State / External
- RI Housing 2030 Plan (Dec 2025) — statewide housing strategy
- EOH Entry-Level Homeownership RFP + Q&A (Feb 2026) — grant program rules
- EOH Factory-Built Housing Pricing Sheet — manufacturer comparison
- housing.ri.gov — application portal
- osp.ri.gov — Ocean State Procures (procurement source of truth)
