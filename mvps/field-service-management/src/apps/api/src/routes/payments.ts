import express from 'express';
import { stripe } from '../config/stripe.js';
import { handleCheckoutCompleted } from '../services/payment-service.js';
import { sendPushNotification } from '../services/notification-service.js';
import { sendSms } from '../services/sms-service.js';
import { prisma } from '../config/prisma.js';

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
      const result = await handleCheckoutCompleted(session.id);

      if (!result.alreadyProcessed && result.invoice && result.customer) {
        const { invoice, customer } = result;
        const formattedAmount = `$${(invoice.total / 100).toFixed(2)}`;
        const invoiceLabel = invoice.invoiceNumber ?? 'invoice';

        const owner = await prisma.teamMember.findFirst({
          where: { accountId: invoice.accountId, role: 'OWNER' },
          select: { pushToken: true },
        });
        await sendPushNotification(
          owner?.pushToken,
          'Payment Received',
          `${formattedAmount} received for ${invoiceLabel}`,
        );

        const account = await prisma.account.findUnique({
          where: { id: invoice.accountId },
          select: { businessName: true },
        });
        const businessName = account?.businessName ?? 'Your service provider';
        await sendSms(
          customer.phone,
          `Payment confirmed! ${businessName} received your payment of ${formattedAmount} for ${invoiceLabel}. Thank you!`,
        );
      }
    } catch (err) {
      console.error('[payments/webhook] processing error:', err);
    }
  }

  res.status(200).json({ received: true });
});
