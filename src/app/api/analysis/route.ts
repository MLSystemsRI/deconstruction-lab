import { NextRequest, NextResponse } from "next/server";
import { getUser, isDemoMode } from "@/lib/auth";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req: NextRequest) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { buildingType, yearBuilt, description } = await req.json();

  if (!buildingType || !yearBuilt) {
    return NextResponse.json(
      { error: "buildingType and yearBuilt are required" },
      { status: 400 }
    );
  }

  const anthropic = new Anthropic();

  const prompt = `You are an expert in building science and deconstruction engineering.
You reverse engineer residential building assemblies to determine optimal deconstruction sequences.

Analyze this building:
- Type: ${buildingType}
- Year Built: ${yearBuilt}
- Description: ${description || "No additional details provided"}

Based on typical construction practices for this building type and era, provide:

1. **materials**: An array of the likely materials present (e.g., "SPF spray foam", "construction adhesive (dried polyurethane)", "oriented strand board", "fiberglass batt insulation", "vinyl siding", "asphalt shingles", "pressure-treated lumber", etc.)

2. **separationNotes**: A detailed paragraph about the challenges of separating these materials — focus on adhesive bonds, chemical curing, composite connections, and which separations are feasible vs destructive.

3. **recoveryScore**: An integer 0-100 estimating what percentage of materials can be recovered intact for reuse (not just recycling). Consider era-specific fasteners, adhesive types, and assembly methods.

4. **sequence**: An ordered array of deconstruction steps, from first removal to last. Each step should be a concise instruction.

Respond ONLY with valid JSON matching this schema:
{
  "materials": string[],
  "separationNotes": string,
  "recoveryScore": number,
  "sequence": string[]
}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
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

  // Deduct tokens in production mode
  if (!isDemoMode()) {
    const { db } = await import("@/lib/db");
    const { users, tokenTransactions, deconSessions } = await import(
      "@/lib/schema"
    );
    const { eq } = await import("drizzle-orm");

    await db.insert(deconSessions).values({
      userId: user.id,
      buildingType,
      yearBuilt,
      materials: analysis.materials,
      separationPlan: analysis.sequence,
      recoveryScore: analysis.recoveryScore,
      status: "complete",
    });

    await db
      .update(users)
      .set({ tokenBalance: user.tokenBalance - 10 })
      .where(eq(users.id, user.id));

    await db.insert(tokenTransactions).values({
      userId: user.id,
      amount: -10,
      type: "deduction",
      description: `Decon analysis: ${buildingType} (${yearBuilt})`,
    });
  }

  return NextResponse.json(analysis);
}
