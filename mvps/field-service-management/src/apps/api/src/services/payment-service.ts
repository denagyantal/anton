import { stripe } from '../config/stripe.js';
import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/error.js';

export async function createPaymentIntent(
  invoiceId: string,
  accountId: string,
): Promise<{
  clientSecret: string;
  paymentIntentId: string;
  amount: number;
  merchantDisplayName: string;
}> {
  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId, accountId },
    include: {
      account: { select: { businessName: true } },
    },
  });
  if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);
  if (invoice.status === 'PAID') {
    throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
  }
  if (invoice.total <= 0) {
    throw new AppError('INVOICE_ZERO_AMOUNT', 'Invoice total must be greater than zero', 422);
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: invoice.total,
    currency: 'usd',
    payment_method_types: ['card'],
    metadata: {
      invoiceId: invoice.id,
      accountId,
    },
  });

  if (!paymentIntent.client_secret) {
    throw new AppError('STRIPE_PI_ERROR', 'Failed to create payment intent', 502);
  }

  return {
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount,
    merchantDisplayName: invoice.account.businessName ?? 'Your service provider',
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

  const paidAt = new Date();
  const [payment] = await prisma.$transaction([
    prisma.payment.create({
      data: {
        accountId,
        invoiceId,
        amount: invoice.total,
        stripePaymentId: paymentIntentId,
        paymentMethod: 'CARD_ON_SITE',
        status: 'SUCCEEDED',
      },
    }),
    prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        status: 'PAID',
        amountPaid: invoice.total,
        paidAt,
      },
    }),
  ]);

  return {
    alreadyProcessed: false,
    payment: { id: payment.id, amount: payment.amount },
    invoice: {
      status: 'PAID',
      amountPaid: invoice.total,
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
          unit_amount: invoice.total,
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

export async function handleCheckoutCompleted(sessionId: string): Promise<{
  alreadyProcessed: boolean;
  invoice?: { total: number; invoiceNumber: string | null; accountId: string };
  customer?: { phone: string; name: string };
}> {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const stripePaymentId =
    typeof session.payment_intent === 'string' ? session.payment_intent : session.id;

  const { invoiceId, accountId } = session.metadata ?? {};
  if (!invoiceId || !accountId) return { alreadyProcessed: true };

  const existing = await prisma.payment.findFirst({ where: { stripePaymentId } });
  if (existing) return { alreadyProcessed: true };

  const invoice = await prisma.invoice.findFirst({
    where: { id: invoiceId, accountId },
    include: { customer: { select: { name: true, phone: true } } },
  });
  if (!invoice) return { alreadyProcessed: true };

  await prisma.$transaction([
    prisma.payment.create({
      data: {
        accountId,
        invoiceId,
        amount: invoice.total,
        stripePaymentId,
        paymentMethod: 'CARD_VIA_LINK',
        status: 'SUCCEEDED',
      },
    }),
    prisma.invoice.update({
      where: { id: invoiceId },
      data: { status: 'PAID', amountPaid: invoice.total, paidAt: new Date() },
    }),
  ]);

  return {
    alreadyProcessed: false,
    invoice: { total: invoice.total, invoiceNumber: invoice.invoiceNumber, accountId },
    customer: { phone: invoice.customer.phone, name: invoice.customer.name },
  };
}
