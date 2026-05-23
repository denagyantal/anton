import express from 'express';
import { stripe } from '../config/stripe.js';
import { handleCheckoutCompleted } from '../services/payment-service.js';

export const paymentsRouter = express.Router();

// NOTE: This route receives raw body (Buffer), NOT parsed JSON.
// express.raw() is applied in index.ts BEFORE express.json().
paymentsRouter.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'] as string;
  const webhookSecret = process.env['STRIPE_WEBHOOK_SECRET'] ?? '';

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body as Buffer, sig, webhookSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook signature verification failed';
    res.status(400).json({ error: { code: 'WEBHOOK_INVALID', message, status: 400 } });
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    try {
      await handleCheckoutCompleted(session);
    } catch (err) {
      console.error('[payments/webhook] processing error:', err);
    }
  }

  res.status(200).json({ received: true });
});
