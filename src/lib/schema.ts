import { pgTable, text, integer, timestamp, jsonb, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  fullName: text("full_name"),
  role: text("role").notNull().default("client"),
  tokenBalance: integer("token_balance").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tokenTransactions = pgTable("token_transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id),
  amount: integer("amount").notNull(),
  type: text("type").notNull(), // "deduction" | "purchase" | "grant"
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const deconSessions = pgTable("decon_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id),
  buildingType: text("building_type"),
  yearBuilt: integer("year_built"),
  materials: jsonb("materials"), // detected material layers
  separationPlan: jsonb("separation_plan"), // AI-generated sequence
  recoveryScore: integer("recovery_score"), // 0-100 material recovery viability
  status: text("status").notNull().default("draft"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
