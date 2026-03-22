# Site Aggregator Model — Shingle Processing at Build Site

> Phase 1: Roof | Deconstruction Lab | ML Systems
> Question: Buy equipment, put it at active site, route roofers to us. Does the math work?

---

## The Gap That Makes This Work

**Rhode Island has ZERO shingle recyclers.**

| Fact | Number |
|---|---|
| RI shingle tear-off waste per year | ~45,000–50,000 tons |
| Within 25 miles of Providence | ~32,000–40,000 tons |
| Shingle recyclers in Rhode Island | **0** |
| Nearest recycler | Boxborough, MA — 60 miles away |
| RI landfill (RIRRC, Johnston) | Only landfill in the state, capacity through 2046 |
| RIRRC tipping fee | ~$39.50/ton (2025); transfer stations up to $145/ton |
| Active roofing companies in RI | 150–250 |
| Avg roofs per company per year | ~80 |
| Avg tons per tear-off | ~4 tons |

**Every roofer in Rhode Island is currently paying $39.50–$145/ton to landfill shingles that contain $87–$150 of asphalt cement per ton.**

---

## The Setup

| Item | Spec | Cost |
|---|---|---|
| Used tub grinder | $10K–$15K (MachineryTrader) | One-time |
| Magnetic separator plate | For nail removal | ~$500–$1,000 |
| Staging area at build site | Existing — use crane pad area | $0 |
| Site duration | 7 months (ML Systems build cycle) | Included |
| Operating cost (fuel, wear) | ~$16/ton (industry benchmark) | Per ton |
| Crew time | Batch processing, 1–2 people | Already on clock |

**Total equipment investment: ~$12K–$17K**

---

## Three Pricing Models

### Model A: Charge Tipping Fee (undercut landfill)

Roofers currently pay $39.50–$145/ton. We charge less.

| Our Tipping Fee | Roofer Savings vs RIRRC | Roofer Savings vs Transfer Station |
|---|---|---|
| $30/ton | $9.50/ton | $115/ton |
| $25/ton | $14.50/ton | $120/ton |
| $20/ton | $19.50/ton | $125/ton |
| $15/ton | $24.50/ton | $130/ton |

**Revenue per ton (tipping + RAS sales):**

| Tipping Fee | + RAS Sale | − Processing | = Net Margin/ton |
|---|---|---|---|
| $25 | $35 | $16 | **$44/ton** |
| $20 | $35 | $16 | **$39/ton** |
| $15 | $35 | $16 | **$34/ton** |

### Model B: Accept for Free (roofers save 100% of disposal)

| Revenue | Per Ton |
|---|---|
| RAS sales | $35 |
| Processing cost | −$16 |
| **Net margin** | **$19/ton** |

Roofer swing: saves $39.50–$145/ton. Strong pull.

### Model C: PAY Roofers (maximum pull — they earn instead of spending)

| We Pay | RAS Revenue | Processing | Net Margin | Roofer Swing vs Landfill |
|---|---|---|---|---|
| $5/ton | $35 | −$16 | **$14/ton** | +$44.50/ton (was −$39.50, now +$5) |
| $10/ton | $35 | −$16 | **$9/ton** | +$49.50/ton |
| $15/ton | $35 | −$16 | **$4/ton** | +$54.50/ton |

At $10/ton payment to roofer:
- Roofer brings 4-ton tear-off → **gets paid $40** instead of paying $158+ at landfill
- **$198 swing per roof for the roofer**
- We net $9/ton × 4 tons = $36 per roof processed

---

## Volume Projections (7-Month Build Season)

**RI roofing season: ~April–October (7 months)**
- ~12,000 roofs/year → ~8,400 in season
- Within 25 miles: ~5,900–6,700 roofs = ~23,600–26,800 tons available

### How much do we need to capture?

**Equipment break-even:**

| Model | Margin/ton | Tons to Pay Off $15K Equipment | Roofs Equivalent |
|---|---|---|---|
| A: Charge $25 tipping | $44/ton | **341 tons** | **85 roofs** |
| A: Charge $20 tipping | $39/ton | **385 tons** | **96 roofs** |
| B: Free acceptance | $19/ton | **790 tons** | **198 roofs** |
| C: Pay $10/ton | $9/ton | **1,667 tons** | **417 roofs** |

### Market capture needed (within 25-mi radius, 7-month season):

| Model | Tons Needed | % of Available Volume | Feasibility |
|---|---|---|---|
| A: Charge $25 | 341 tons | **1.3–1.4%** | Very easy |
| A: Charge $20 | 385 tons | **1.5–1.6%** | Very easy |
| B: Free | 790 tons | **3.0–3.4%** | Easy |
| C: Pay $10 | 1,667 tons | **6.2–7.1%** | Moderate — but strongest pull |

**Even the most aggressive model (paying roofers $10/ton) only needs ~7% market capture to break even on equipment in ONE season.**

---

## Profit Scenarios (After Equipment Is Paid Off)

### Conservative: 5 roofers routing to us (~400 roofs/season, ~1,600 tons)

| Model | Revenue/Season | Cost/Season | Profit/Season |
|---|---|---|---|
| A: $20 tipping | $32K tipping + $56K RAS = $88K | $25.6K processing | **$62,400** |
| B: Free | $56K RAS | $25.6K processing | **$30,400** |
| C: Pay $10 | $56K RAS − $16K payments | $25.6K processing | **$14,400** |

### Moderate: 10 roofers (~800 roofs/season, ~3,200 tons)

| Model | Revenue/Season | Cost/Season | Profit/Season |
|---|---|---|---|
| A: $20 tipping | $64K + $112K = $176K | $51.2K | **$124,800** |
| B: Free | $112K | $51.2K | **$60,800** |
| C: Pay $10 | $112K − $32K | $51.2K | **$28,800** |

### Aggressive: 20 roofers (~1,600 roofs/season, ~6,400 tons)

| Model | Revenue/Season | Cost/Season | Profit/Season |
|---|---|---|---|
| A: $20 tipping | $128K + $224K = $352K | $102.4K | **$249,600** |

---

## How Much Can We Pay Roofers?

**The ceiling — what's the maximum we can pay and still break even?**

| RAS Sale Price | Processing Cost | Max Payment to Roofer | Break-Even |
|---|---|---|---|
| $25/ton | $16 | **$9/ton** | $0 margin |
| $35/ton | $16 | **$19/ton** | $0 margin |
| $50/ton | $16 | **$34/ton** | $0 margin |

**Recommended payment if using Model C:**

| Payment | Margin | Why |
|---|---|---|
| **$5/ton** | $14/ton | Conservative — still enormous roofer swing ($44.50/ton better than landfill) |
| **$10/ton** | $9/ton | Sweet spot — roofer gets $40 per roof, we clear $36 per roof |
| **$15/ton** | $4/ton | Aggressive pull — only if chasing volume for market dominance |

**The roofer pitch at $10/ton:**
> "Bring your tear-offs to our site on [Street]. Instead of paying $39.50/ton at RIRRC, we pay YOU $10/ton. Average roof = $40 in your pocket instead of $158 out of it. That's a $198 swing per job."

---

## Why This Works at a Build Site

1. **You already have the site** — 7-month active construction, staging area, crane pad
2. **You already have crew on site** — batch-process shingles during downtime or end of day
3. **You already have the crane** — can lift/move stockpiles
4. **You're already managing material flow** — shingles are just another stream
5. **Your material recovery from YOUR deconstruction feeds the grinder too** — your own tear-offs are free feedstock
6. **Winter grinding advantage** — if site extends into Nov/Dec, process the late-season stockpile in cold weather
7. **Processed RAS stays on site** — use for temp roads, crane pads, driveway base on YOUR build
8. **Sell excess RAS** — to HMA plants, road contractors, or landscape suppliers

---

## Regulatory Path

| Requirement | Status | Action |
|---|---|---|
| On-site use of own shingles | No permit needed | ✅ Ready now |
| Accepting others' shingles | Likely needs RIDEM Beneficial Use Determination | File BUD application |
| Storage limit | Typically capped at 500–1,000 tons on site | Check RIDEM regs |
| Asbestos screening | Post-1981 homes exempt; pre-1981 needs lab test | Screen by year built |
| Fire code | Stockpile distance from structures | Check local fire marshal |
| Zoning | Construction site already permitted for C&D activity | Verify with municipality |

**Key regulatory note:** RIDEM evaluates Beneficial Use Determinations case-by-case. Being the **first** to apply positions ML Systems as the standard-setter for RI shingle recycling regulation.

---

## The Awareness Multiplier

Every roofer who brings shingles to your site becomes an **awareness vector:**
- They see the process
- They learn the value locked in shingles ($87–$150/ton of AC)
- They tell other roofers
- They tell homeowners: "We recycle your roof — the shingles go to road paving, not landfill"
- **Word of mouth IS the marketing for the secondary market**

---

## MVE Summary

| Question | Answer |
|---|---|
| Can you generate enough volume? | Yes — need only 1.3–7% of local market to break even |
| Equipment cost | $12K–$17K one-time |
| Pays for itself in | 85–417 roofs (1 season at any model) |
| Best pricing model | Model A ($20 tipping) for max revenue; Model C ($10 payment) for max pull |
| How much can you pay roofers? | Up to $19/ton and still break even. $10/ton recommended. |
| Profit potential (moderate) | $30K–$125K/season depending on model |
| First mover advantage | **Only shingle recycler in Rhode Island** |

---

## Sources

- RIRRC tipping fees (rirrc.org)
- RI housing stock: US Census ACS 2019-2023
- NAHB Eye on Housing — age of housing stock by state
- RI 2024 Integrated Housing Report (housing.ri.gov)
- ARMA — asphalt shingle market share
- CT DEEP — shingle recycling facilities
- Roof Top Recycling (Boxborough, MA)
- Klaus Larsen LLC (CT/RI roofing + recycling)
- RIDEM — Beneficial Use Determination regulations
- Industry benchmarks — processing costs, RAS pricing
