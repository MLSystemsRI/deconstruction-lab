export const tokenPacks = [
  {
    name: "Sample",
    tokens: 25,
    price: 25,
    priceId: process.env.STRIPE_DL_PRICE_SESSION,
    description: "Analyze a single assembly",
  },
  {
    name: "Research",
    tokens: 100,
    price: 100,
    priceId: process.env.STRIPE_DL_PRICE_EXPLORER,
    description: "Full building material audit",
  },
  {
    name: "Lab Access",
    tokens: 300,
    price: 300,
    priceId: process.env.STRIPE_DL_PRICE_BUILDER,
    description: "Unlimited R&D sessions",
  },
] as const;

let _stripe: any = null;

export async function getStripe() {
  if (process.env.AUTH_MODE !== "production") return null;
  if (!process.env.STRIPE_SECRET_KEY) return null;

  if (!_stripe) {
    const Stripe = (await import("stripe")).default;
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return _stripe;
}
