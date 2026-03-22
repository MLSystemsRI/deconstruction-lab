# RI Optimized Operations Plan — Dual-Track Housing Pipeline

> Deconstruction Lab | ML Systems | Lucent Lens
> "The old house funds the new one — and the Builder's Open House is how it flows."
>
> Processed: 2026-03-16

---

## The Optimization: BOH as the Integration Layer

The Builder's Open House isn't just a marketplace — it's the **documented procurement channel** that sits between decon (supply) and housing programs (demand). Every material gets an ML Material ID, grade, and provenance record. Government programs get traceable materials. BOH gets institutional volume that proves the model.

```
                    ┌─────────────────────────┐
                    │    DECON OPERATIONS      │
                    │    (supply side)         │
                    │                         │
                    │  Phase 1: Roof          │
                    │  Phase 2: Walls         │
                    │  Phase 3: Floor         │
                    │  Phase 4: Foundation    │
                    └────────┬────────────────┘
                             │
                    ML Material IDs assigned
                    Grade + provenance logged
                             │
                             ▼
              ┌──────────────────────────────┐
              │                              │
              │   BUILDER'S OPEN HOUSE       │
              │   mlsystemsri.store          │
              │                              │
              │   10 zone-based categories   │
              │   Provenance tracking        │
              │   /program/housing-2030      │
              │   (institutional portal)     │
              │                              │
              └──────┬──────────┬────────────┘
                     │          │
          ┌──────────┘          └──────────┐
          │                               │
          ▼                               ▼
┌─────────────────────┐       ┌────────────────────────┐
│  EOH 2030 PROJECTS  │       │  NACA / LAND BANK      │
│  (ML Systems =      │       │  PROJECTS              │
│   developer)        │       │  (ML Systems =         │
│                     │       │   contractor)           │
│  Grant-funded       │       │                        │
│  5+ unit minimum    │       │  $1 lots (PRA)         │
│  RI only            │       │  Land bank parcels     │
│  April 10 deadline  │       │  CLT ground leases     │
│                     │       │  NACA mortgage          │
└─────────────────────┘       └────────────────────────┘
```

**Why BOH is the integration point, not just a sales channel:**

1. **Provenance documentation.** Government programs want accountability. Every board, panel, and sheet that goes into a grant-funded or NACA-financed home has an ML Material ID traceable to the source property.

2. **The hidden route already exists.** `/program/housing-2030` is built for exactly this — an institutional materials portal for state program negotiations.

3. **Dual demand signal.** Internal projects (EOH) pull materials FROM BOH. External buyers (contractors, DIYers, Habitat) also buy from BOH. Both streams build volume and prove the model.

4. **Pricing transparency.** BOH establishes market-rate pricing for recovered materials. When the grant pro forma shows "recovered lumber: $X," that price is documented in a live marketplace — not a guess.

5. **Attention engine.** Every EOH/NACA project IS a Builder's Open House event. The decon produces materials. The materials go through BOH. The community sees it happen. The next buyer comes from the crowd.

---

## The RI Landscape — What Actually Exists

### Property Acquisition Channels (How We Get $1-ish Lots)

| Channel | Operator | Mechanism | Status | ML Systems Path |
|---|---|---|---|---|
| **Providence Land Bank** | PRA (Providence Redevelopment Agency) | ARPA-funded ($8.5M), acquires tax-reverted/vacant properties, transfers to developers via RFP | **Active** — pre-approved home plans + permitted lots available | Apply as qualified developer via PRA RFP. Contact: Darcy Charleson, 401.680.8501 |
| **RI Statewide Housing Land Bank** | RIHousing | New 2025 legislation. Acquires, holds, transfers properties for affordable housing | **Active** — rolling applications at rihousing.com/rfps-rfqs | Apply as developer or partner with non-profit. 90-day review. Up to 97% LTV loans |
| **NACA One-Dollar Program** | NACA (Boston HQ) | City-owned vacant properties sold for $1, NACA finances buyer | **No RI office** — but covers Providence-Warwick MSA. Nearest: Boston, Worcester, Lawrence | Contact NACA Boston to explore RI city partnership. May need to bring the city to NACA |
| **Community Housing Land Trust** | CHLT of RI (Pawtucket) | Statewide CLT, 100+ homes, ground leases, deed restrictions | **Active** — partners with developers and municipalities | Partner as developer/contractor. CHLT provides land trust structure, ML Systems builds |
| **Tax Sale / Lien** | Municipal tax collectors | RI Title 44 Ch. 9 — cities sell tax-delinquent properties | **Ongoing** — each municipality runs its own process | Monitor tax sales in target municipalities |
| **Governor's Blight Program** | Governor's office | $5M to revitalize blighted/vacant properties statewide | **Active** | Align with municipalities receiving blight funding |
| **Non-Utilization Tax** | Providence | Tax on vacant/abandoned property citywide (2018) | **Active** — creates pressure on vacant property owners | Owners under tax pressure may donate/sell cheap to avoid penalties |

### Target Municipalities — Ranked by Opportunity

| Municipality | Vacancy Rate | Below 10% Affordable? | Pre-1939 Housing | Land Bank Access | Programs Active | Priority |
|---|---|---|---|---|---|---|
| **Providence** | 11.31% (~7,950 vacant) | Below threshold | 55.61% | PRA Land Bank ($8.5M) + Non-Utilization Tax | EOH, Land Bank, Blight, NACA (MSA) | **#1** |
| **Central Falls** | 10.24% (~767 vacant) | Below threshold | High (densest city in RI) | Receivership program for nuisance properties | EOH, Receivership, Heavy dev activity | **#2** |
| **Woonsocket** | 10.14% (~1,771 vacant) | Below threshold | High (mill city) | State Land Bank | EOH, State programs | **#3** |
| **Pawtucket** | 6.9% (~2,141 vacant) | Below threshold | High (mill city) | CHLT of RI headquartered here | EOH, CHLT, State Land Bank | **#4** |
| **West Warwick** | 5.0% | Below threshold | Moderate | State Land Bank | EOH | **#5** |

### Financing Stack (What the Buyer Gets)

| Program | Rate | Down Payment | Closing Costs | PMI | Terms |
|---|---|---|---|---|---|
| **NACA Priority** | 5.000% (15yr) / 5.375% (30yr) | $0 | $0 | $0 | Below MSA median income |
| **NACA Non-Priority** | 6.000% (15yr) / 6.375% (30yr) | $0 | $0 | $0 | Above MSA median, buying in low-income area |
| **EOH 2030 Grant** | N/A (grant, not loan) | N/A | N/A | N/A | Up to $100K/unit subsidy to developer |
| **RIHousing Land Bank Loan** | LIBOR+3% (floor 4%, ceiling 7%) | Varies | Varies | Varies | 12-month acquisition/pre-dev loans |
| **CHLT Ground Lease** | N/A (99-year lease, land stays in trust) | Varies | Varies | Varies | Buyer owns improvements, CHLT owns land |

### Competitor Landscape (Effectively Zero)

| Entity | What They Do | Scale | Threat Level |
|---|---|---|---|
| Casa Buena Builders (Providence) | Opportunistic deconstruction | Occasional, not systematic | None — potential subcontractor |
| Providence Revolving Fund | Small salvage room, by appointment | Tiny — preservation focus | None — potential partner |
| No Habitat ReStore in Providence metro | — | — | **Gap = opportunity** |
| No deconstruction ordinance anywhere in RI | — | — | **Policy shaping opportunity** |

---

## The Optimized Sequence

### Phase A: Pre-Revenue (NOW → Insurance Activation)

**Goal:** Position for both pipelines while waiting for capital raise / insurance.

| # | Action | Dependency | BOH Integration |
|---|---|---|---|
| 1 | **Register on eCivis/EUNA portal** (housing.ri.gov) | None | — |
| 2 | **Contact PRA** (Darcy Charleson, 401.680.8501) — request available lots list, understand RFP process | None | PRA lots = decon feedstock → BOH inventory |
| 3 | **Contact CHLT of RI** (Melina Lodge, 401.721.5680 x104) — explore developer partnership | None | CHLT homes pull materials from BOH |
| 4 | **Submit inquiry to RIHousing Land Bank** (rihousing.com/rfps-rfqs) | None | Land bank parcels = decon sites |
| 5 | **Contact NACA Boston office** — explore Providence-Warwick MSA coverage, discuss city partnership model | None | NACA buyers = construction demand for BOH materials |
| 6 | **Map vacant properties** across Providence, Central Falls, Woonsocket, Pawtucket using PRA database + tax records | None | Each vacant property = potential decon + BOH event |
| 7 | **Build EOH 2030 pro forma** with BOH materials pricing as the documented cost basis | None | BOH pricing = pro forma line item evidence |
| 8 | **Draft EOH application narrative** incorporating dual-track (EOH + land bank/NACA) | None | — |
| 9 | **Activate `/program/housing-2030` portal on BOH** with institutional pricing tiers for program-qualified buyers | None | BOH becomes the procurement interface |

### Phase B: Activation (Insurance → GC Registration → First Decon)

**Goal:** First decon produces materials that flow through BOH into the first program-funded build.

| # | Action | Trigger | BOH Integration |
|---|---|---|---|
| 10 | **Purchase liability insurance** | Capital raise closes | — |
| 11 | **Activate GC registration** | Insurance in hand | — |
| 12 | **Submit EOH 2030 Round 1** (April 10, 2026) or **Round 2** (late spring 2026) | GC registration active | Application references BOH as materials channel |
| 13 | **Acquire first PRA lot** (via RFP) or **first land bank parcel** | GC registration active | Existing structure on lot = decon feedstock |
| 14 | **First decon** — full 4-phase (roof, walls, floor, foundation) | Lot acquired, crew ready | **Every material → BOH with ML Material ID** |
| 15 | **First Builder's Open House event** at the decon site | During/after decon | Community sees materials, buys surplus, learns about program |
| 16 | **Internal material pull** — BOH inventory goes into new build on same lot | EOH or NACA project starts | **BOH documents the transfer with provenance** |

### Phase C: Dual-Track Operations (Ongoing)

**Goal:** Both pipelines running, BOH as the hub, materials flowing in both directions.

```
MONTH 1–2: Decon House A (PRA lot, Providence)
  → Materials → BOH inventory (ML Material IDs, graded, photographed)
  → BOH event at site (community engagement, surplus sales)
  → Structural lumber, sheathing, hardware reserved for House A rebuild

MONTH 2–4: Build House A (factory module + decon site work)
  → Factory module arrives
  → Foundation: RCA base + hybrid panel reuse (from House A decon)
  → Framing supplements: recovered joists, studs from BOH
  → BOH documents every material transfer (provenance → pro forma)

MONTH 3–4: Decon House B (CHLT parcel, Pawtucket)
  → Materials → BOH inventory
  → BOH event at site
  → Surplus from House A + new materials from House B = growing inventory

MONTH 4–6: Build House B + Decon House C
  → Parallel operations: build crew on B, decon crew on C
  → BOH inventory accumulates — external buyers start purchasing
  → NACA buyer for House A closes (NACA mortgage, materials from BOH documented)

MONTH 6+: Pipeline steady state
  → 1 decon + 1 build per month
  → BOH inventory = 3–6 months of accumulated materials
  → External sales growing (contractors, DIYers, Habitat)
  → Winter: shingle grinding arm activates (same crew, same site)
```

---

## The BOH Demand Flywheel

This is the optimization Sal is asking about. The housing programs don't just use BOH — they **create the demand that makes BOH work.**

```
                    ┌──────────────────┐
                    │                  │
                    │  DECON produces  │
                    │  materials       │
                    │                  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │                  │
             ┌──── │  BOH INVENTORY   │ ────┐
             │     │  (growing)       │     │
             │     │                  │     │
             │     └──────────────────┘     │
             │                              │
             ▼                              ▼
    ┌────────────────┐            ┌──────────────────┐
    │  INTERNAL USE  │            │  EXTERNAL SALES  │
    │                │            │                  │
    │  EOH projects  │            │  Contractors     │
    │  NACA projects │            │  DIYers          │
    │  Land bank     │            │  Habitat RI      │
    │  builds        │            │  Other programs  │
    │                │            │                  │
    │  (guaranteed   │            │  (grows with     │
    │   demand)      │            │   awareness)     │
    └───────┬────────┘            └────────┬─────────┘
            │                              │
            │    BOTH generate:            │
            │    • Community visibility    │
            │    • Price data              │
            │    • Provenance records      │
            │    • Referrals               │
            │                              │
            └──────────┬───────────────────┘
                       │
                       ▼
              ┌────────────────────┐
              │  MORE DECON DEMAND │
              │  (flywheel spins)  │
              └────────────────────┘
```

**The key insight:** You don't need to wait for BOH to grow organically. The housing programs ARE the initial demand. Every EOH/NACA/land bank project pulls materials from BOH. That volume:

1. **Proves the pricing model** — real transactions at documented prices
2. **Builds the inventory** — surplus from each decon accumulates
3. **Creates community visibility** — each BOH event is marketing
4. **Generates referrals** — every buyer who saves money tells others
5. **Attracts external buyers** — contractors see the prices, come for more

The programs bootstrap the marketplace. The marketplace then grows beyond the programs.

---

## Providence Deep Dive — The #1 Target

### Why Providence First

| Factor | Data |
|---|---|
| Vacant units | ~7,950 (11.31% vacancy rate) |
| Pre-1939 housing | 55.61% — high salvage value lumber (old growth, larger dimensions) |
| PRA Land Bank | $8.5M ARPA funded, pre-approved home plans, fully permitted lots |
| Non-Utilization Tax | Financial pressure on vacant property owners since 2018 |
| Population | ~190,000 — largest RI city, most program-eligible buyers |
| Median household income | $68,119 — well below MSA median (~$110K) = NACA priority eligible |
| Decon competitors | Zero dedicated commercial operators |
| CLT access | ONE Neighborhood Builders, SWAP — both active in Providence |
| Developer ecosystem | Active but no one doing decon-to-build |

### Providence — First 5 Properties (EOH 2030 Scattered-Site Application)

**Target:** 5 PRA land bank lots with existing structures in neighborhoods below 10% affordable threshold.

| Property | Source | Decon | Build | BOH Flow |
|---|---|---|---|---|
| Lot 1 | PRA land bank (RFP) | Full 4-phase → BOH | Factory module on decon foundation | Materials documented, surplus sold at open house |
| Lot 2 | PRA land bank (RFP) | Full 4-phase → BOH | Factory module, pulls lumber from Lot 1 surplus | Cross-project material reuse via BOH |
| Lot 3 | Tax sale acquisition | Full 4-phase → BOH | Stick-built with recovered framing | External buyers start coming to BOH for Lot 1–2 surplus |
| Lot 4 | CHLT ground lease | Full 4-phase → BOH | Factory module | CHLT monitors deed restriction, ML Systems builds |
| Lot 5 | Non-utilization tax pressure (owner donation) | Full 4-phase → BOH | Factory module | BOH inventory now has 5 houses of materials in system |

**EOH Grant Application Math (5 units, Providence scattered-site):**

| Line Item | Per Unit | 5 Units |
|---|---|---|
| Land (PRA lots — minimal or $0) | $0–$5,000 | $0–$25,000 |
| Decon (self-performed) | $0 | $0 |
| Factory module | $100K–$150K | $500K–$750K |
| Site work (decon materials via BOH) | $21K–$35K | $105K–$175K |
| Soft costs | $25K–$35K | $125K–$175K |
| **TDC** | **$146K–$225K** | **$730K–$1,125K** |
| Grant ask ($25K–$40K/unit = 9–12 pts) | $25K–$40K | $125K–$200K |
| Sale price | $300K–$350K | $1,500K–$1,750K |
| **Developer profit/unit** | **$60K–$165K** | **$300K–$825K** |

**With PRA $0 lots + decon materials, TDC drops to $146K–$225K.** That's firmly in the <$350K tier = **12 points on Category 3.** Grant ask of $25K–$40K/unit = **9–12 points on Category 4.** Combined: **21–24 points** on the two biggest scoring categories.

---

## The NACA Bridge — Getting RI into the Program

NACA doesn't have an RI office, but the model is replicable. Two paths:

### Path 1: Bring NACA to RI
- Contact NACA Boston (headquarters)
- Propose Providence as a new city partnership
- Providence has the vacancy (~7,950 units), the land bank ($8.5M), and the political will (Non-Utilization Tax, Housing 2030)
- ML Systems offers to be the construction partner — we decon, we build, NACA finances the buyer
- **Pitch to NACA:** "We provide the properties (PRA land bank), the construction (decon + factory module at $146K–$225K TDC), and the community engagement (Builder's Open House). You provide the mortgage ($0 down, 5.375%). Together we produce homes that a 25–50% AMI family can actually afford."

### Path 2: Replicate the NACA Structure Without NACA
- Providence Land Bank already provides lots at minimal cost (not $1, but close)
- RIHousing provides below-market mortgages for eligible buyers
- CHLT provides 99-year ground leases (land stays in trust, buyer owns improvements)
- EOH grant covers the gap
- **The financing stack without NACA:** PRA lot ($0–$5K) + EOH grant ($25K–$40K) + RIHousing mortgage + decon materials via BOH = same outcome, different plumbing

### Path 3: Boston/MA Expansion (Future)
- NACA Boston is the headquarters — strongest city partnership
- MA Gateway Cities near RI: Fall River, New Bedford (both have vacancy programs)
- New Bedford's "Neighborhoods First Initiative" = lottery to first-time homebuyers at affordable prices
- Same decon operations, same BOH channel, different state
- **Trigger:** After 5 RI projects prove the model, pitch NACA Boston for Gateway City expansion

---

## `/program/housing-2030` Portal Enhancement

The hidden BOH route needs to become the institutional procurement interface.

### Current State
- Unlisted route, direct URL only
- Materials portal for state program negotiations

### Proposed Enhancement
- **Tiered pricing:** Program-qualified buyers get institutional rates (cost + 10%) vs retail (cost + 40–60%)
- **Provenance view:** Every material shows ML Material ID, source property, decon date, grade, photos
- **Program tagging:** Materials tagged to specific programs (EOH, NACA, land bank) for pro forma documentation
- **Bulk ordering:** Project-level material packages (e.g., "Foundation Package: 50 RCA tons + 8 concrete panels + rebar bundle")
- **Export:** CSV/PDF for grant application pro formas — documented material costs with provenance
- **Access:** Program administrators get login, can browse/reserve materials for their projects

---

## Work Immersion Program Integration

RI's Work Immersion Program (75% wage reimbursement, $5/hr effective cost) amplifies every phase:

| Role | Rate | Reimbursement | Net Cost | Where They Work |
|---|---|---|---|---|
| Decon laborer (intern) | $20/hr | 75% ($15/hr) | **$5/hr** | Decon sites, material sorting |
| BOH inventory clerk (intern) | $20/hr | 75% ($15/hr) | **$5/hr** | BOH — photographing, grading, listing materials |
| Construction helper (intern) | $20/hr | 75% ($15/hr) | **$5/hr** | Build sites, factory module set |
| Data entry / ontology (intern) | $20/hr | 75% ($15/hr) | **$5/hr** | ML Material ID assignment, provenance logging |

**4 interns × 400 hrs each = 1,600 hrs/year at $5/hr effective = $8,000 total labor cost.** These interns run the BOH inventory pipeline — they photograph materials, assign ML Material IDs, update listings, and learn the trade.

---

## Timeline — Optimized Sequence

| When | What | Pipeline | BOH Role |
|---|---|---|---|
| **NOW** | Contact PRA, CHLT, RIHousing Land Bank, NACA Boston | Setup | Activate `/program/housing-2030` portal |
| **NOW** | Build EOH pro forma with BOH pricing | EOH | BOH pricing = pro forma evidence |
| **NOW** | Map vacant properties across 5 target municipalities | Both | Each property = potential decon → BOH event |
| **NOW** | Register on eCivis, apply for Work Immersion Program | Both | Interns will staff BOH inventory |
| **On insurance** | Activate GC registration | Both | — |
| **April 10** | Submit EOH Round 1 (or Round 2 late spring) | EOH | Application references BOH as materials channel |
| **Post-registration** | Acquire first PRA lot | EOH/NACA | — |
| **Month 1** | First decon → materials → BOH | Both | **First BOH inventory from institutional project** |
| **Month 1** | First Builder's Open House event | Both | Community engagement, surplus sales |
| **Month 2–4** | First build (factory module on decon foundation) | EOH | BOH documents material transfers |
| **Month 3+** | Decon #2 → BOH → Build #2 | Both | Flywheel starts |
| **Month 6** | 3–5 projects in pipeline, BOH inventory growing | Both | External buyers arriving |
| **Winter** | Shingle grinding arm activates | Revenue | Same crew, same site |
| **Year 1 end** | 5–10 homes, BOH proven, model documented | Both | Ready for NACA pitch / MA expansion |

---

## Sources

### RI Programs (Verified Active)
- Providence Redevelopment Agency (PRA) Land Bank — $8.5M ARPA, Darcy Charleson, 401.680.8501
- RI Statewide Housing Land Bank — RIHousing, rihousing.com/rfps-rfqs, rolling applications
- Community Housing Land Trust of RI — Melina Lodge, 401.721.5680 x104, Pawtucket
- NACA — naca.com, Boston HQ, Providence-Warwick MSA eligible, 5.375% (30yr priority)
- EOH 2030 — housing.ri.gov, $20M ($10M Round 1), April 10, 2026
- Work Immersion Program — GWB/DLT, 75% wage reimbursement, §42-102-11
- Governor's Blight Program — $5M statewide
- Providence Non-Utilization Tax — active since 2018

### RI Market Data
- Providence vacancy: 11.31% (~7,950 units), 55.61% pre-1939
- Central Falls vacancy: 10.24% (~767 units)
- Woonsocket vacancy: 10.14% (~1,771 units)
- Pawtucket vacancy: 6.9% (~2,141 units)
- Decon competitors: effectively zero (Casa Buena occasional, PRF salvage room only)
- Providence median household income: $68,119

### Cross-References
- `research/housing-2030-grant.md` — EOH grant strategy (70-pt rubric, factory-built pricing)
- `research/processed/naca-one-dollar-program.md` — NACA program analysis
- `research/master-pitch.md` — Master pitch (updated with NACA)
