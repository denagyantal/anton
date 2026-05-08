import Stripe from "stripe";

function getStripeClient(): Stripe {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error("STRIPE_SECRET_KEY environment variable is not set");
  }
  return new Stripe(apiKey);
}

export const stripe = {
  checkout: {
    sessions: {
      create: (params: Stripe.Checkout.SessionCreateParams) =>
        getStripeClient().checkout.sessions.create(params),
    },
  },
  webhooks: {
    constructEvent: (
      payload: string | Buffer,
      sig: string,
      secret: string
    ) => getStripeClient().webhooks.constructEvent(payload, sig, secret),
  },
};
