import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL_POOLED;

function createDb() {
  if (!DATABASE_URL) {
    // Return a lazy proxy that throws on access — safe for demo mode
    return new Proxy({} as ReturnType<typeof drizzle>, {
      get(_, prop) {
        if (prop === "then") return undefined;
        return () => {
          throw new Error(
            "DATABASE_URL_POOLED not set. Set AUTH_MODE=production and provide a database URL."
          );
        };
      },
    });
  }

  const client = postgres(DATABASE_URL, { prepare: false });
  return drizzle(client);
}

export const db = createDb();
