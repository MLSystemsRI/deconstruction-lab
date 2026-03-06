export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
  tokenBalance: number;
}

const AUTH_MODE = process.env.AUTH_MODE ?? "demo";

const DEMO_USER: AuthUser = {
  id: "demo-user",
  email: "researcher@deconlab.dev",
  fullName: "Decon Lab Researcher",
  role: "admin",
  tokenBalance: 999999,
};

export function isDemoMode(): boolean {
  return AUTH_MODE === "demo";
}

export async function getUser(): Promise<AuthUser | null> {
  if (AUTH_MODE === "demo") return DEMO_USER;

  try {
    const { auth } = await import(
      /* webpackIgnore: true */ "@clerk/nextjs/server"
    );
    const { userId } = await auth();
    if (!userId) return null;

    const { db } = await import("@/lib/db");
    const { users } = await import("@/lib/schema");
    const { eq } = await import("drizzle-orm");
    const [user] = await db.select().from(users).where(eq(users.clerkId, userId));
    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName ?? "Researcher",
      role: user.role,
      tokenBalance: user.tokenBalance,
    };
  } catch {
    return null;
  }
}
