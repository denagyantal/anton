import { stripe } from '../config/stripe.js';
import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/error.js';
import { sendPushNotification } from './notification-service.js';
import { sendSms } from './sms-service.js';

export async function createPaymentIntent(
  invoiceId: string,
  accountId: string,
  customAmount?: number,
): Promise<{
  clientSecret: string;
  paymentIntentId: string;
  amount: number;
  merchantDisplayName: string;
  remainingBalance: number;
}> {
  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId, accountId },
    include: { account: { select: { businessName: true } } },
  });
  if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);
  if (invoice.status === 'PAID') {
    throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
  }
  if (invoice.total <= 0) {
    throw new AppError('INVOICE_ZERO_AMOUNT', 'Invoice total must be greater than zero', 422);
  }

  const remainingBalance = invoice.total - invoice.amountPaid;
  if (remainingBalance <= 0) {
    throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
  }

  const chargeAmount = customAmount ?? remainingBalance;
  if (chargeAmount <= 0) {
    throw new AppError('INVALID_AMOUNT', 'Payment amount must be greater than zero', 422);
  }
  if (chargeAmount > remainingBalance) {
    throw new AppError(
      'AMOUNT_EXCEEDS_BALANCE',
      `Payment amount ${chargeAmount} exceeds remaining balance of ${remainingBalance} cents`,
      422,
    );
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: chargeAmount,
    currency: 'usd',
    payment_method_types: ['card'],
    metadata: { invoiceId: invoice.id, accountId },
  });

  if (!paymentIntent.client_secret) {
    throw new AppError('STRIPE_PI_ERROR', 'Failed to create payment intent', 502);
  }

  return {
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount,
    merchantDisplayName: invoice.account.businessName ?? 'Your service provider',
    remainingBalance,
  };
}

export async function recordOnsitePayment(
  invoiceId: string,
  accountId: string,
  paymentIntentId: string,
): Promise<{
  alreadyProcessed: boolean;
  payment?: { id: string; amount: number };
  invoice?: {
    status: string;
    amountPaid: number;
    paidAt: Date | null;
    invoiceNumber: string | null;
    accountId: string;
  };
  customer?: { phone: string; name: string };
}> {
  const existing = await prisma.payment.findFirst({
    where: { stripePaymentId: paymentIntentId },
  });
  if (existing) return { alreadyProcessed: true };

  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  if (paymentIntent.status !== 'succeeded') {
    throw new AppError(
      'PAYMENT_NOT_SUCCEEDED',
      `Payment intent status is '${paymentIntent.status}', not 'succeeded'`,
      422,
    );
  }

  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId, accountId },
    include: { customer: { select: { name: true, phone: true } } },
  });
  if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);

  // Use actual PI amount — supports partial payments
  const paymentAmount = paymentIntent.amount;
  const newAmountPaid = invoice.amountPaid + paymentAmount;
  const isFullyPaid = newAmountPaid >= invoice.total;
  const newStatus = isFullyPaid ? 'PAID' : 'PARTIALLY_PAID';
  const paidAt = isFullyPaid ? new Date() : null;

  const [payment] = await prisma.$transaction([
    prisma.payment.create({
      data: {
        accountId,
        invoiceId,
        amount: paymentAmount,
        stripePaymentId: paymentIntentId,
        paymentMethod: 'CARD_ON_SITE',
        status: 'SUCCEEDED',
      },
    }),
    prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        amountPaid: newAmountPaid,
        status: newStatus,
        ...(isFullyPaid && { paidAt }),
      },
    }),
  ]);

  return {
    alreadyProcessed: false,
    payment: { id: payment.id, amount: payment.amount },
    invoice: {
      status: newStatus,
      amountPaid: newAmountPaid,
      paidAt,
      invoiceNumber: invoice.invoiceNumber,
      accountId,
    },
    customer: { phone: invoice.customer.phone, name: invoice.customer.name },
  };
}

export async function createCheckoutSession(
  invoiceId: string,
  token: string,
  webAppUrl: string,
): Promise<string> {
  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId },
    include: {
      account: { select: { businessName: true } },
    },
  });
  if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);

  const remainingBalance = invoice.total - invoice.amountPaid;
  if (remainingBalance <= 0) {
    throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Invoice ${invoice.invoiceNumber ?? invoice.id}`,
            description: `From ${invoice.account.businessName ?? 'Your service provider'}`,
          },
          unit_amount: remainingBalance,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${webAppUrl}/pay/${token}?success=true`,
    cancel_url: `${webAppUrl}/pay/${token}`,
    metadata: {
      invoiceId: invoice.id,
      accountId: invoice.accountId,
      token,
    },
  });

  if (!session.url) {
    throw new AppError('STRIPE_SESSION_ERROR', 'Failed to create checkout session', 502);
  }
  return session.url;
}

interface CheckoutSessionLike {
  id: string;
  payment_intent?: unknown;
  amount_total?: number | null;
  metadata?: Record<string, string> | null;
}

export async function handleCheckoutCompleted(session: CheckoutSessionLike): Promise<void> {
  const { invoiceId, accountId, token } = session.metadata ?? {};
  if (!invoiceId || !accountId || !token) {
    console.error('[webhook] Missing metadata on session:', session.id);
    return;
  }

  // Idempotency — already processed this session
  const existingPayment = await prisma.payment.findFirst({
    where: { stripePaymentId: session.payment_intent as string },
  });
  if (existingPayment) return;

  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId, accountId, paymentToken: token },
    include: { customer: { select: { phone: true, name: true } } },
  });
  if (!invoice) {
    console.error('[webhook] Invoice not found for session:', session.id, 'invoiceId:', invoiceId);
    return;
  }

  // Use actual session amount — supports partial payments
  const paymentAmount = session.amount_total ?? invoice.total;
  const newAmountPaid = invoice.amountPaid + paymentAmount;
  const isFullyPaid = newAmountPaid >= invoice.total;
  const newStatus = isFullyPaid ? 'PAID' : 'PARTIALLY_PAID';
  const paidAt = isFullyPaid ? new Date() : null;

  await prisma.$transaction([
    prisma.payment.create({
      data: {
        accountId,
        invoiceId,
        amount: paymentAmount,
        stripePaymentId: session.payment_intent as string,
        paymentMethod: 'CARD_VIA_LINK',
        status: 'SUCCEEDED',
      },
    }),
    prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        amountPaid: newAmountPaid,
        status: newStatus,
        ...(isFullyPaid && { paidAt }),
      },
    }),
  ]);

  // Push notification — fires for both PAID and PARTIALLY_PAID (fire and forget)
  const formattedAmount = `$${(paymentAmount / 100).toFixed(2)}`;
  const invoiceLabel = invoice.invoiceNumber ?? 'invoice';
  try {
    const owner = await prisma.teamMember.findFirst({
      where: { accountId, role: 'OWNER' },
      select: { pushToken: true },
    });
    await sendPushNotification(
      owner?.pushToken,
      'Payment Received',
      `${formattedAmount} received for ${invoiceLabel}`,
    );
  } catch (err) {
    console.error('[webhook] push notification error:', err);
  }

  // SMS confirmation (fire and forget)
  try {
    const account = await prisma.account.findUnique({
      where: { id: accountId },
      select: { businessName: true },
    });
    const businessName = account?.businessName ?? 'Your service provider';
    await sendSms(
      invoice.customer.phone,
      `${businessName} received your payment of ${formattedAmount} for ${invoiceLabel}. Thank you!`,
    );
  } catch (err) {
    console.error('[webhook] SMS error:', err);
  }
}
