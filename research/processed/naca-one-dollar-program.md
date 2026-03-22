# NACA One-Dollar Homeownership Program — Analysis

> Deconstruction Lab | ML Systems | Lucent Lens
> Source: https://www.naca.com/city-one-dollar-homeownership-program/
> Processed: 2026-03-16

---

## Program Summary

| Detail | Value |
|---|---|
| Program | NACA City One-Dollar Homeownership Program |
| Operator | NACA (Neighborhood Assistance Corporation of America) — largest HUD-approved counseling org |
| Purchase price | **$1** for city-owned vacant homes and lots |
| Down payment | $0 |
| Closing costs | $0 |
| Fees | $0 |
| Mortgage insurance | None |
| Interest rate | Below-market fixed rate |
| Committed funding | **$20 billion** ($15B from Bank of America) |
| Locations | All 50 states — city-by-city partnerships |
| Mortgage product | "Best in America Mortgage" |

---

## Why This Matters for ML Systems

### 1. The Properties Are Our Feedstock

Cities own vacant, distressed houses and lots. These are exactly the properties ML Systems deconstructs. The program literally hands us the input material for $1.

```
CITY-OWNED VACANT HOUSE ($1)
     │
     ▼
ML SYSTEMS DECON (recover 80–90% of materials)
     │
     ├──→ Materials reuse in new build on SAME LOT
     ├──→ Surplus sold through BOH
     └──→ Ontology data captured
     │
     ▼
NEW AFFORDABLE HOME (financed by NACA at below-market rate)
     │
     └──→ Buyer pays $1 for property + NACA mortgage for construction/rehab
```

**Land acquisition cost: $1.** That's the single biggest variable in our TDC — and this program eliminates it.

### 2. Modular Homes Are Explicitly Eligible

The program lists eligible transaction types:
- Pre-existing homes
- **New construction**
- **Manufactured/mobile homes**
- **Modular homes**

This is the same factory-built strategy from EOH 2030. Coastal Modular ($93K–$205K) or Mod-Tech ($81K–$168K) modules on a $1 lot with decon-sourced site work.

### 3. Multi-Family and Mixed-Use Eligible

Eligible property types include:
- Single-family
- **Multi-family**
- **Mixed-use**
- Condominiums
- Co-ops

Multi-family on a $1 lot with decon materials = multiple revenue units from one acquisition.

### 4. The Rehab Path — Decon Materials Reduce Rehab Cost

For existing structures that need renovation (not full decon):
- 6-month rehab timeline from closing
- NACA's H.A.N.D. department coordinates scope
- Buyer solicits bids from licensed contractors
- Mortgage forbearance during uninhabitable rehab period (up to 6 months)

**ML Systems as the contractor:** We decon the parts that need to go, recover materials, and use them in the rehab. The homebuyer's rehab budget is smaller because our materials cost less.

### 5. $20 Billion in Committed Funding

This isn't a $20M state bond. This is **$20 billion** with $15B from Bank of America. The scale is orders of magnitude larger than EOH 2030. Even capturing a fraction of this pipeline would be transformational.

---

## Income Targeting — Lottery Priority System

| Priority | Income Band | Keys in Drawing |
|---|---|---|
| Highest | 25–50% of city median income | 3 keys |
| Medium | 51–80% of median income | 1 key |
| Standard | 81–100% of median income | — |

**Bonus keys:**
- Living in community where property is located: +3 keys
- Section 8 / Housing Choice Voucher holder: +3 keys
- 1st choice property: 3 keys, 2nd: 2 keys, 3rd: 1 key

**Section 8 holders get a special 20-year fixed rate** (HOT-PHA program).

---

## Eligibility Requirements

| Requirement | Detail |
|---|---|
| Residency | City resident OR lived in city 5 consecutive years within last 10 years |
| Homeownership | Cannot currently own a home |
| First-time buyer | NOT required |
| Verification | Driver's license/state ID/city ID + lease, utility bill, bank statements, W-2, tax returns |
| Counseling | Must complete NACA comprehensive counseling + become "NACA Qualified" |

---

## Process (10 Steps)

1. Complete NACA counseling
2. Become NACA Qualified
3. Receive list of available city-owned properties
4. Visit properties, arrange access
5. Select up to 3 property choices within affordability range
6. In-person lottery (weighted key system)
7. Purchase & sales contract with city; backup lottery
8. Meet NACA counselor for bank application
9. Rehab coordination (if applicable)
10. Move in

---

## Integration with EOH 2030 Grant

These programs are **complementary, not competing:**

| Dimension | EOH 2030 (RI Housing) | NACA One-Dollar |
|---|---|---|
| Funding source | $20M state bond | $20B (Bank of America + others) |
| Land cost | Market rate (developer acquires) | $1 (city-owned) |
| Subsidy type | Per-unit grant ($100K max) | Below-market mortgage (no down/closing/fees) |
| Construction | Developer builds, sells to buyer | Buyer owns lot, finances construction/rehab |
| ML Systems role | Developer (build + sell) | Contractor (decon + build for buyer) |
| Scale | 5+ units per project | One property at a time (lottery-based) |
| Geography | Rhode Island only | All 50 states |

### The Combined Play

**EOH 2030:** ML Systems is the developer. We acquire sites, decon, build, sell. Grant covers the gap. We control the full loop.

**NACA:** ML Systems is the contractor/partner. The buyer acquires a $1 lot through NACA. We decon the existing structure (if present), build the new home using recovered materials + factory module. NACA finances the buyer's mortgage. Our cost advantage makes the buyer's mortgage smaller.

**Both programs benefit from the same operations.** The decon crew, the Track Breaker, the Brokk, the crane, the BOH materials channel, the ontology — all shared assets across both pipelines.

### TDC Impact with $1 Land

| Line Item | EOH 2030 (market land) | NACA ($1 lot) |
|---|---|---|
| Land | $40K–$80K | $1 |
| Decon (self-performed) | $0 | $0 |
| New construction (factory module) | $100K–$200K | $100K–$200K |
| Site work (decon materials) | $21K–$46K | $21K–$46K |
| Soft costs | $25K–$40K | $25K–$40K |
| **TDC** | **$186K–$366K** | **$146K–$286K** |

**$1 land drops TDC by $40K–$80K.** A $146K home financed at below-market rate with no down payment = genuinely affordable homeownership for 25–50% AMI buyers.

---

## Action Items

| # | Action | Priority |
|---|---|---|
| 1 | **Research which RI cities have NACA partnerships** — Providence, Pawtucket, Woonsocket, Central Falls are most likely (highest vacancy rates) | High |
| 2 | **Contact NACA New England office** — understand current city partnerships in RI/MA | High |
| 3 | **Explore dual-track pipeline:** EOH 2030 for developer-led projects + NACA for buyer-led projects with ML Systems as contractor | Medium |
| 4 | **Map city-owned vacant properties in target RI municipalities** — these are the feedstock for both programs | Medium |
| 5 | **Model the NACA path in Financial Architect** — $1 lot + decon materials + factory module + below-market mortgage = monthly payment for 25–50% AMI buyer | Medium |
| 6 | **Explore Boston/MA expansion angle** — NACA operates in all 50 states, MA has higher vacancy in Gateway Cities (Springfield, Worcester, Holyoke, New Bedford) | Future |

---

## Sources

- NACA — naca.com/city-one-dollar-homeownership-program/
- NACA "Best in America Mortgage" — naca.com
- Bank of America $15B commitment — referenced on NACA program page
- EOH 2030 cross-reference — `research/housing-2030-grant.md`
