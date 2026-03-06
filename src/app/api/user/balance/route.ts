import { NextResponse } from "next/server";
import { getUser, isDemoMode } from "@/lib/auth";

export async function GET() {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    balance: user.tokenBalance,
    demo: isDemoMode(),
  });
}
