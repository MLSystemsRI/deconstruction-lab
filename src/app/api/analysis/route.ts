import { NextRequest, NextResponse } from "next/server";
import { getUser, isDemoMode } from "@/lib/auth";
import Anthropic from "@anthropic-ai/sdk";

// ── ML Material ID generation (inline for standalone) ──────────────
const ZONE_MAP: Record<string, string> = {
  roof: "R", shingle: "R", siding: "R", gutter: "R", fascia: "R", soffit: "R",
  stud: "W", joist: "W", beam: "W", lumber: "W", rafter: "W", truss: "W", framing: "W",
  floor: "F", hardwood: "F", tile: "F", carpet: "F", vinyl: "F", laminate: "F",
  concrete: "N", foundation: "N", block: "N", footing: "N",
  kitchen: "K", cabinet: "K", counter: "K", appliance: "K",
  hardware: "H", bolt: "H", nail: "H", hinge: "H", screw: "H", simpson: "H",
  door: "D", window: "D", trim: "D", casing: "D", baseboard: "D",
  plywood: "S", osb: "S", drywall: "S", sheathing: "S",
  wire: "E", outlet: "E", panel: "E", breaker: "E", electrical: "E",
  pipe: "P", faucet: "P", valve: "P", tub: "P", plumbing: "P", toilet: "P",
};

function inferZone(name: string): string {
  const n = name.toLowerCase();
  for (const [keyword, zone] of Object.entries(ZONE_MAP)) {
    if (n.includes(keyword)) return zone;
  }
  return "X";
}

function generateMaterialIds(
  materials: string[],
  year: number,
  projectNumber: number,
): Array<{ name: string; mlMaterialId: string; zone: string }> {
  const zoneCounts: Record<string, number> = {};
  return materials.map((name) => {
    const zone = inferZone(name);
    zoneCounts[zone] = (zoneCounts[zone] || 0) + 1;
    const seq = String(zoneCounts[zone]).padStart(3, "0");
    const proj = String(projectNumber).padStart(3, "0");
    return {
      name,
      mlMaterialId: `ML-${year}-${proj}-${zone}${seq}`,
      zone,
    };
  });
}

// ── Demo project counter (in-memory for demo mode) ──────────────────
let demoProjectCounter = 0;

export async function POST(req: NextRequest) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Input validation ──────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { buildingType, yearBuilt, description, tier } = body as Record<string, unknown>;

  // Tier validation: scout (free), analysis ($25), full ($200), dem ($350)
  const validTiers = ["scout", "analysis", "full", "dem"];
  const requestTier = typeof tier === "string" && validTiers.includes(tier) ? tier : "scout";

  if (typeof buildingType !== "string" || buildingType.length === 0 || buildingType.length > 200) {
    return NextResponse.json({ error: "buildingType must be a non-empty string (max 200 chars)" }, { status: 400 });
  }

  if (typeof yearBuilt !== "number" || !Number.isInteger(yearBuilt) || yearBuilt < 1600 || yearBuilt > new Date().getFullYear()) {
    return NextResponse.json({ error: `yearBuilt must be an integer between 1600 and ${new Date().getFullYear()}` }, { status: 400 });
  }

  if (description !== undefined && (typeof description !== "string" || description.length > 2000)) {
    return NextResponse.json({ error: "description must be a string (max 2000 chars)" }, { status: 400 });
  }

  const anthropic = new Anthropic();

  // ── Tier-based prompt + model selection (MVE: minimize tokens per scan) ──
  // Scout: Haiku + tight token cap. One extraction, two outputs (decon + construction + quote).
  // Paid tiers: Sonnet + more tokens for depth.

  const buildingContext = `Building: ${buildingType}, Year: ${yearBuilt}. ${description || "No additional details."}`;

  let prompt: string;
  let model: string;
  let maxTokens: number;

  if (requestTier === "scout") {
    // Scout (free): bidirectional analysis + free quote. Haiku for cost. ~$0.01-0.03/scan.
    // The decon extraction IS the construction data — materials identified during teardown
    // are the same materials needed for rebuild. One extraction, flipped.
    model = "claude-haiku-4-5-20251001";
    maxTokens = 1024;
    prompt = `You are a building science expert. Analyze this building and provide BOTH deconstruction and construction data from a single material extraction.

${buildingContext}

Extract the materials present, then flip that same data to show what's needed to build the same assembly. One extraction, two perspectives.

Respond ONLY with valid JSON:
{
  "materials": ["material name", ...],
  "recoveryScore": 0-100,
  "recoveryEstimate": "low" | "medium" | "high",
  "separationNotes": "brief paragraph on separation challenges",
  "sequence": ["decon step 1", "decon step 2", ...],
  "construction": {
    "materials": ["same materials needed to rebuild"],
    "tools": ["tool 1", "tool 2", ...],
    "sequence": ["build step 1", "build step 2", ...],
    "laborEstimate": "brief labor description (crew size, days)",
    "difficultyScore": 0-100
  },
  "quote": {
    "deconEstimateLow": number,
    "deconEstimateHigh": number,
    "constructionEstimateLow": number,
    "constructionEstimateHigh": number,
    "currency": "USD",
    "notes": "brief assumptions"
  }
}`;
  } else {
    // Paid tiers (analysis/full/dem): Sonnet for depth + materialDetails for ML IDs
    model = "claude-sonnet-4-20250514";
    maxTokens = requestTier === "analysis" ? 1536 : 2048;
    prompt = `You are an expert in building science and deconstruction engineering.
You reverse engineer residential building assemblies to determine optimal deconstruction sequences.

Analyze this building:
${buildingContext}

Based on typical construction practices for this building type and era, provide:

1. **materials**: An array of the likely materials present (e.g., "SPF spray foam", "construction adhesive (dried polyurethane)", "oriented strand board", "fiberglass batt insulation", "vinyl siding", "asphalt shingles", "pressure-treated lumber", etc.)

2. **separationNotes**: A detailed paragraph about the challenges of separating these materials — focus on adhesive bonds, chemical curing, composite connections, and which separations are feasible vs destructive.

3. **recoveryScore**: An integer 0-100 estimating what percentage of materials can be recovered intact for reuse (not just recycling). Consider era-specific fasteners, adhesive types, and assembly methods.

4. **sequence**: An ordered array of deconstruction steps, from first removal to last. Each step should be a concise instruction.

5. **materialDetails**: For each material in the materials array, provide an object with:
   - "name": the material name (must match materials array)
   - "category": one of "structural", "electrical", "plumbing", "finish", "roofing", "other"
   - "suggestedGrade": one of "A", "B", "C", "D", "salvage"
   - "dimensions": typical dimensions if applicable (e.g., "2x4x92-5/8\\"")
   - "species": wood species if applicable (e.g., "Douglas Fir", "SPF")

6. **construction**: Using the SAME materials extracted above, provide what's needed to build this assembly:
   - "materials": same materials list (for rebuild)
   - "tools": array of tools required
   - "sequence": ordered build steps
   - "laborEstimate": crew size and estimated days
   - "difficultyScore": 0-100

7. **quote**: Rough cost estimates in USD:
   - "deconEstimateLow" / "deconEstimateHigh": deconstruction cost range
   - "constructionEstimateLow" / "constructionEstimateHigh": construction cost range
   - "notes": brief assumptions

Respond ONLY with valid JSON matching this schema:
{
  "materials": string[],
  "separationNotes": string,
  "recoveryScore": number,
  "sequence": string[],
  "materialDetails": { "name": string, "category": string, "suggestedGrade": string, "dimensions": string, "species": string }[],
  "construction": { "materials": string[], "tools": string[], "sequence": string[], "laborEstimate": string, "difficultyScore": number },
  "quote": { "deconEstimateLow": number, "deconEstimateHigh": number, "constructionEstimateLow": number, "constructionEstimateHigh": number, "currency": string, "notes": string }
}`;
  }

  const message = await anthropic.messages.create({
    model,
    max_tokens: maxTokens,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  // Extract JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return NextResponse.json(
      { error: "Failed to parse analysis" },
      { status: 500 }
    );
  }

  const analysis = JSON.parse(jsonMatch[0]);

  // ── Scout tier: return directly, no ML IDs, no DB, no token charge ──
  if (requestTier === "scout") {
    return NextResponse.json({
      ...analysis,
      tier: "scout",
    });
  }

  // ── Paid tiers: generate ML Material IDs + persist ──
  const currentYear = new Date().getFullYear();
  demoProjectCounter++;
  const projectNumber = demoProjectCounter;

  const materialIds = generateMaterialIds(
    analysis.materials,
    currentYear,
    projectNumber,
  );

  // Merge ML IDs with material details
  const materialsWithProvenance = materialIds.map((m) => {
    const detail = analysis.materialDetails?.find(
      (d: { name: string }) => d.name === m.name
    );
    return {
      ...m,
      category: detail?.category || "other",
      suggestedGrade: detail?.suggestedGrade || "B",
      dimensions: detail?.dimensions || "",
      species: detail?.species || "",
      contaminationStatus: "untested" as const,
      provenanceEvents: [
        {
          eventType: "identified" as const,
          timestamp: new Date().toISOString(),
          notes: `Identified during AI analysis of ${buildingType} (${yearBuilt})`,
        },
      ],
    };
  });

  // Token costs by tier
  const tokenCost = requestTier === "analysis" ? 5 : 10;

  // Persist in production mode
  if (!isDemoMode()) {
    const { db } = await import("@/lib/db");
    const { users, tokenTransactions, deconSessions, materials: materialsTable, materialProvenance } = await import(
      "@/lib/schema"
    );
    const { eq } = await import("drizzle-orm");

    const [session] = await db.insert(deconSessions).values({
      userId: user.id,
      buildingType,
      yearBuilt,
      materials: analysis.materials,
      separationPlan: analysis.sequence,
      recoveryScore: analysis.recoveryScore,
      status: "complete",
    }).returning();

    // Insert individual materials with ML IDs + provenance events
    for (const mat of materialsWithProvenance) {
      const [inserted] = await db.insert(materialsTable).values({
        projectId: null,
        name: mat.name,
        category: mat.category,
        mlMaterialId: mat.mlMaterialId,
        grade: mat.suggestedGrade,
        contaminationStatus: mat.contaminationStatus,
        dimensions: mat.dimensions,
        species: mat.species,
        deconSessionId: session.id,
        status: "identified",
        disposition: "resale",
      }).returning();

      await db.insert(materialProvenance).values({
        materialId: inserted.id,
        eventType: "identified",
        eventData: {
          buildingType,
          yearBuilt,
          analysisSessionId: session.id,
          mlMaterialId: mat.mlMaterialId,
        },
        performedBy: user.id,
        notes: `Identified during AI analysis of ${buildingType} (${yearBuilt})`,
      });
    }

    await db
      .update(users)
      .set({ tokenBalance: user.tokenBalance - tokenCost })
      .where(eq(users.id, user.id));

    await db.insert(tokenTransactions).values({
      userId: user.id,
      amount: -tokenCost,
      type: "deduction",
      description: `Decon ${requestTier} analysis: ${buildingType} (${yearBuilt})`,
    });
  }

  return NextResponse.json({
    ...analysis,
    tier: requestTier,
    materialsWithProvenance,
  });
}
