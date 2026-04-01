import { NextResponse, type NextRequest } from "next/server";

/**
 * Deconstruction Lab — Security + TTP Middleware
 * Demo mode: rate limiting, AI crawler blocking, TTP headers
 * Production mode: Clerk auth context + all of the above
 */

const windows = new Map<string, number[]>();
const RATE_LIMIT = 30;
const AI_RATE_LIMIT = 10;
const WINDOW_MS = 60_000;

function checkRate(id: string, limit: number): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = (windows.get(id) || []).filter(t => t > now - WINDOW_MS);
  if (timestamps.length >= limit) return { allowed: false, remaining: 0 };
  timestamps.push(now);
  windows.set(id, timestamps);
  return { allowed: true, remaining: limit - timestamps.length };
}

const AI_CRAWLERS = /gptbot|chatgpt|openai|claudebot|anthropic|google-extended|cohere|perplexity|amazonbot|meta-externalagent|bytespider|ccbot/i;

function applySecurityHeaders(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  const isApiRoute = pathname.startsWith("/api/");
  if (!isApiRoute) return null;

  const ua = request.headers.get("user-agent") || "";
  if (AI_CRAWLERS.test(ua)) {
    const hasAuth = request.headers.get("authorization")?.startsWith("Bearer ");
    if (!hasAuth) {
      return NextResponse.json(
        { error: "AI crawler detected. API key required.", docs: "https://mlsystemsri.info/api-docs" },
        { status: 402, headers: { "X-TT-Protocol": "Transparency Trust Protocol v2", "X-TT-Score": "0", "X-TT-Band": "public_record" } }
      );
    }
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const isAiRoute = pathname.startsWith("/api/analysis");
  const result = checkRate(`ip:${ip}`, isAiRoute ? AI_RATE_LIMIT : RATE_LIMIT);

  if (!result.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "60", "X-RateLimit-Remaining": "0" } }
    );
  }

  return null;
}

function addTTPHeaders(response: NextResponse): void {
  response.headers.set("X-TT-Protocol", "Transparency Trust Protocol v2");
  response.headers.set("X-TT-Agent", "DRA");
  const authMode = process.env.AUTH_MODE;
  response.headers.set("X-TT-Score", authMode === "production" ? "15" : "5");
  response.headers.set("X-TT-Band", authMode === "production" ? "ml_verified" : "public_record");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _middleware: ((req: NextRequest, ...args: any[]) => any) | null = null;

async function getMiddleware() {
  if (_middleware) return _middleware;

  if (process.env.AUTH_MODE === "production") {
    const { clerkMiddleware } = await import("@clerk/nextjs/server");
    _middleware = clerkMiddleware((_auth, req) => {
      const blocked = applySecurityHeaders(req);
      if (blocked) return blocked;
      const response = NextResponse.next();
      addTTPHeaders(response);
      return response;
    });
  } else {
    _middleware = (req: NextRequest) => {
      const blocked = applySecurityHeaders(req);
      if (blocked) return blocked;
      const response = NextResponse.next();
      addTTPHeaders(response);
      return response;
    };
  }
  return _middleware;
}

export async function middleware(request: NextRequest, ...args: unknown[]) {
  const handler = await getMiddleware();
  return handler(request, ...args);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
