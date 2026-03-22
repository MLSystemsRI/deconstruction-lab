# Shingle Recycling — MVE Analysis

> Phase 1: Roof | Deconstruction Lab | ML Systems
> Question: What state of shingles provides most value to others vs. on-site reuse?

---

## The Two Paths

### Path A: Sell to HMA Plants (value to others)
### Path B: Reuse on site (value to us)

---

## What's Inside Shingles (why anyone cares)

| Component | % by Weight | Why It Matters |
|---|---|---|
| Asphalt cement (AC) | 25–30% | Virgin AC costs $350–500/ton — this is the gold |
| Hard aggregate | 40–60% | Granules = crushed rock, usable in mixes |
| Fiber (fiberglass/organic) | 3–12% | Structural filler |

It takes ~4 tons of shingles to yield 1 ton of AC equivalent.

---

## Path A: Maximum Value to Others (HMA Plants)

### What they need

| Spec | Requirement |
|---|---|
| Particle size | **3/8" to 1/2" minus** (ground, not shredded) |
| Contamination | <1.5% wood/paper/plastic by weight |
| Nails | Removed (magnetic separation) |
| Asbestos | <1% (NESHAP). Post-1981 homes generally exempt |
| Max RAS in HMA mix | 3–5% by weight (tear-off is capped lower than mfg scrap) |

### What they pay (or charge)

| Scenario | $/ton | Notes |
|---|---|---|
| Tipping fee (they charge you) | $20–100/ton | Northeast trends $75–125/ton |
| Processed RAS (they pay you) | $25–50/ton | Must be ground to spec, clean |
| Future fair market (maturing) | $100–125/ton | Based on virgin AC replacement value |
| HMA plant savings from RAS | ~$5/ton of mix | Their incentive to accept |

### Processing required

| Step | Equipment | Cost |
|---|---|---|
| Primary grind (2–3" minus) | Rotary shredder (~50 RPM) | Part of system |
| Secondary grind (1/2" minus) | Hammermill (~800–900 RPM) | Part of system |
| Nail removal | Magnetic separator | Built into grinders |
| Contamination removal | Blowers, manual picking | Labor |
| Equipment cost | Rotochopper RG-1 or CBI 406 | $200K–500K+ |
| Contract grinding | ~$16/ton | **Minimum 5,000 tons** |

### Volume reality check (ML Systems at 1–2 homes/year)

A 2500 SF home roof produces ~3,000–4,500 lbs (1.5–2.25 tons) of shingles.

| Scale | Tons/year | Viable for contract grinding? |
|---|---|---|
| 1 home/year | ~2 tons | No — need 5,000 ton minimum |
| 20 homes/year (2030 target) | ~40 tons | No — still far below threshold |
| Aggregator play (collect from roofers) | 500+ tons | Getting closer — see strategy below |

**Verdict:** Selling processed RAS is NOT viable at ML Systems' current or near-term scale. The volume isn't there.

---

## Path B: On-Site Reuse (value to us)

### What works right now, no permits, no grinding equipment

| Use | Shingle State | How | Value |
|---|---|---|---|
| **Temporary access roads** | Rough-ground 1–2" minus OR stacked whole | Blend: 60% gravel + 30% RAP + 10% ground shingles. AC binder helps it compact and resist rutting | Saves $500–1,500 in temp road material per site |
| **Equipment pads** | Rough-ground or layered whole | Lay under crane/equipment staging areas | Saves gravel cost + provides stable surface |
| **Dust control** | Ground 1–2" minus | Spread on unpaved areas — AC binder suppresses dust naturally | Replaces chemical dust control ($200–400/application) |
| **Driveway sub-base** | Ground, blended with aggregate | Layer under gravel or paving — not a standalone surface | Material cost offset |
| **Site fill (non-structural)** | Rough-ground | Grade adjustments, behind retaining walls | Disposal cost avoided |

### Critical storage note
- Ground shingles **agglomerate (clump) in warm weather** during storage
- **Best practice:** Store whole/rough-shredded, grind just before use
- Adding 20% sand during processing prevents clumping in stockpile

---

## The RI Advantage: Landfill Math

Rhode Island landfill tipping = **$100.20/ton** (among highest in nation).

| Disposal path | Cost per ton | Net to ML Systems |
|---|---|---|
| Landfill (conventional) | -$100/ton | Expense |
| On-site reuse (temp roads/pads) | $0 | **+$100/ton saved** + free material |
| Aggregate & sell to recycler | -$20 to +$50/ton | Break-even to small profit |
| Own grinding + sell RAS | +$25–50/ton | Requires $200K+ equipment + 5K ton volume |

**MVE winner at current scale: On-site reuse.** Every ton reused on site is $100 NOT spent on landfill, PLUS free road/pad material that would otherwise cost $30–50/ton in gravel.

---

## MVE Strategy: Phased Approach

### Phase 1 — NOW (1–2 homes/year)
**On-site reuse.** No permits. No equipment. No volume problem.
- Strip shingles during ground disassembly (after crane flip)
- Rough-shred with reciprocating saw or manual tear into sections
- Use as: temp crane pad, site access road base, dust control
- **Value: ~$200–400 per home** (disposal avoided + material replacement)

### Phase 2 — NEAR-TERM (5–10 homes/year)
**Aggregate and stockpile.** Build relationships with roofers.
- Accept tear-off shingles FROM LOCAL ROOFERS (charge them less than landfill)
- Charge $50–75/ton tipping fee (vs $100 landfill — they save, you earn)
- Stockpile on a permitted site
- Continue using on-site for your own jobs
- **New revenue line: $50–75/ton × volume from roofers**

### Phase 3 — SCALE (20+ homes/year + roofer aggregation)
**Hit grinding threshold.**
- At ~500+ tons/year from roofer aggregation, contract grinding becomes viable
- Sell processed RAS to HMA plants at $25–50/ton
- OR negotiate with CT facilities (4 permitted, established market)
- **Total value: tipping fee income + RAS sales + on-site reuse + data**

---

## Northeast State Landscape

| State | RAS in HMA? | Shingle Permit? | Landfill $/ton | Notes |
|---|---|---|---|---|
| **Rhode Island** | Limited (no RAP in surface course) | No specific permit — C&D general | $100.20 | RIDEM Beneficial Use Determination (case-by-case) |
| **Connecticut** | Yes, established since 2013 | Yes — ARSW General Permit | ~$85 | 4 permitted facilities, most mature market |
| **Massachusetts** | Recently adopted | No specific | $122.63 | Highest tipping = strongest incentive, but MassDOT historically reluctant |

**Regulatory path for RI:** Apply for RIDEM Beneficial Use Determination (BUD) when ready to stockpile at scale. On-site reuse on your own construction sites has no permitting barrier.

---

## Key Numbers for Decon Lab Agent

| Input | Value | Source |
|---|---|---|
| Shingle weight per 2500 SF home roof | 1.5–2.25 tons | Industry standard, 3-tab/architectural |
| RI landfill tipping fee | $100.20/ton | EREF 2024 |
| On-site reuse value (disposal + material offset) | ~$200–400/home | Calculated |
| AC content in shingles | 25–30% | NAPA |
| Virgin AC cost | $350–500/ton | Market |
| Contract grinding minimum | 5,000 tons | Industry standard |
| Contract grinding cost | ~$16/ton | Industry quote |
| Processed RAS market price | $25–50/ton | Current market |
| HMA plant savings from RAS | ~$5/ton of mix | FHWA |
| Post-1981 asbestos exemption | Yes (no testing needed) | NESHAP / CT DEEP |

---

## Awareness Play (secondary market creation)

This research is itself a market-making data point:
- **Most roofers don't know** shingles contain $87–150 worth of asphalt cement per ton
- **Most homeowners don't know** their roof tearoff costs $100/ton to landfill when it could be $0
- **No RI roofer is offering** "we recycle your shingles" as a differentiator
- First company to aggregate shingle volume in RI controls the feedstock for the eventual grinding/RAS market

**The awareness message:** "Your old roof has $87–150 of asphalt cement per ton locked inside it. We recover it instead of landfilling it. That saves you money and builds roads."

---

## Sources

- FHWA — Recycled Asphalt Shingles (fhwa.dot.gov/pavement/recycling/ras.cfm)
- ShingleRecycling.org — End Markets
- NCAT Report 13-07 — RAS Characterization Best Practices
- Connecticut DEEP — ARSW General Permit
- RIDOT Standard Specifications (Blue Book)
- RI DEM Solid Waste Regulation 250-RICR-140-05-7
- EREF 2024 Landfill Tipping Fee Analysis
- NAPA — National Asphalt Pavement Association
- CDRA — Shingle Recycling Committee
- Rotochopper / CBI manufacturer specs
