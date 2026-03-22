# Deconstruction Lab (Decon Lab)

AI-powered R&D platform for reverse engineering residential building assemblies.
Material separation science: dried adhesives, polyurethane, composite fasteners.

## First Principles (architect constraints)
1. **Awareness before infrastructure.** There is no secondary lumber market. People must know it should exist before we build it.
2. **80–90% material recovery** and **51% resale value** are the two core inputs driving every decision in this build.
3. **MVE (Minimum Viable Expense)** — every dollar spent produces: recovered material value, ontology data, robot training signal, and market-making intelligence. Four returns from one expense.
4. **In-out development** — start from physical reality (what's inside the walls), build outward to software, market, and scale.
5. **Lucent Lens (LL)** — *Glow within to help humans.* Every decision is filtered through: does this help a local human profit? Prioritize local community relationships over general market automation. Utilize the person, not the process. If all competitors become robots, tackle that change later — until then, the light stays on the humans. The lens is not opaque (blocking) or transparent (invisible) — it glows through every decision the agents and ontology make.

## Quick Start
```bash
pnpm install
cp .env.example .env.local   # set ANTHROPIC_API_KEY
pnpm dev                     # port 3003
```

## Structure
```
src/
  app/
    page.tsx                  → renders <DeconLab />
    api/analysis/route.ts     → Claude-powered assembly analysis
    api/user/balance/         → token balance
    billing/page.tsx
    research/page.tsx         → R&D analytics
  components/
    decon-lab.tsx             → main UI (building profile → analysis)
  lib/
    auth.ts                   → demo/production dual-mode
    db.ts                     → Drizzle + lazy proxy
    schema.ts                 → users, tokenTransactions, deconSessions
    stripe.ts                 → token packs
```

## Modes
- `AUTH_MODE=demo` (default) — no Clerk, no DB, infinite tokens
- `AUTH_MODE=production` — Clerk + Supabase + Stripe

## Sync to Monorepo
```bash
bash sync-to-monorepo.sh
# Copies to ml-systems/apps/app/api/decon/
# Translate: @/lib/auth → @clerk, @/lib/db → @ml-systems/db
```

## Color: Orange #F97316

## Research Drop Zone

### Source of Truth
- **Platform:** Ocean State Procures (OSP) — osp.ri.gov (Sal's login)
- **Rule:** Source PDFs stay on OSP. Never store locally long-term.

### Ingest
- **Path:** `research/Sals Research Pulls/`
- **Trigger:** "process new research" or "check research folder"
- **Do NOT auto-process** — only when Sal initiates

### Processing Rules
1. Read dropped files, extract intelligence
2. **Solicitations / Grant Programs:**
   - Create analysis `.md` + `.html` pair in `research/processed/`
   - HTML: dark theme, orange accent (#F97316), glassmorphism — shareable without markdown viewer
   - Integrate findings into `research/master-pitch.md` if they strengthen the decon expansion story
3. **Equipment / technical research:** → `research/potential-products/` or relevant phase folder
4. **Market / policy research:** → `research/` as standalone docs
5. Update `research/master-pitch.md` with new facts/numbers (compact — no full specs)
6. Cross-reference with EOH grant strategy (`research/housing-2030-grant.md`) for scoring implications

### Cleanup (after processing)
- **DELETE source PDFs** — they live on OSP or original source, not on disk
- Delete the `Sals Research Pulls/` contents after processing
- Only analysis md/html files stay on disk

### What stays on disk
- Analysis md/html pairs (~10-20 KB per item)
- Master pitch gets a one-liner update, not a full section per research pull

### Archived Research Pulls
| Date | Source | Topic | Processed To |
|---|---|---|---|
| 2026-03-07 | OSP / housing.ri.gov | Housing 2030 EOH — RFP, Q&A, Factory Built pricing, Housing 2030 Plan | `research/housing-2030-grant.md` |
| 2026-03-11 | OSP | Vendor OSP Training Presentation | Reviewed, no action needed |
| 2026-03-16 | naca.com | NACA One-Dollar Homeownership Program | `research/processed/naca-one-dollar-program.md` + `.html` → master pitch updated |
| 2026-03-16 | Web research | RI Optimized Plan — dual-track EOH+NACA, PRA Land Bank, CHLT, BOH integration | `research/processed/ri-optimized-plan.md` → master pitch + partnership-map.html updated |
