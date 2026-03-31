/**
 * AI Configuration — Deconstruction Lab
 *
 * Centralized model config. Tier-based model selection:
 *   scout → fast (Haiku)
 *   analysis/full → primary (Sonnet)
 *   dem/custodian → advanced (Opus → Mythos)
 *
 * Syncs to: ml-systems/packages/ai/src/models.ts
 */

export const AI_MODELS = {
  /** Scout tier: cheapest, fastest */
  fast: "claude-haiku-4-5-20251001",
  /** Analysis/Full tiers: balanced */
  primary: "claude-sonnet-4-6",
  /** DEM/Custodian tiers: deepest reasoning */
  advanced: "claude-opus-4-6",
  /** Mythos — flip when early access granted */
  mythos: "claude-mythos-capybara-20260401",
  mythosAvailable: false,
} as const;

/** Token pricing (millicents per token) */
export const TOKEN_PRICING = {
  input: 0.3,
  output: 1.5,
} as const;

/** Get model for a decon analysis tier */
export function getModelForTier(tier: string): string {
  switch (tier) {
    case "scout":
      return AI_MODELS.fast;
    case "dem":
    case "custodian":
      return AI_MODELS.mythosAvailable ? AI_MODELS.mythos : AI_MODELS.advanced;
    default:
      return AI_MODELS.primary;
  }
}
