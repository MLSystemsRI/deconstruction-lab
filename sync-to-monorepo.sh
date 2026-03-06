#!/bin/bash
# ──────────────────────────────────────────────────────────────────────
# Sync Deconstruction Lab → ml-systems monorepo
# After syncing, manually translate imports:
#   @/lib/auth   → @clerk/nextjs/server
#   @/lib/db     → @ml-systems/db
#   @/lib/schema → @ml-systems/db/schema
#   Remove isDemoMode() guards
# ──────────────────────────────────────────────────────────────────────

MONOREPO="$HOME/ml-systems/apps/app"

echo "Syncing Deconstruction Lab → $MONOREPO"

# Components
cp src/components/decon-lab.tsx "$MONOREPO/src/components/"

# API routes
mkdir -p "$MONOREPO/src/app/api/decon"
cp src/app/api/analysis/route.ts "$MONOREPO/src/app/api/decon/"

echo ""
echo "✓ Files copied. Remember to translate imports!"
echo "  @/lib/auth   → @clerk/nextjs/server"
echo "  @/lib/db     → @ml-systems/db"
echo "  @/lib/schema → @ml-systems/db/schema"
