import { stripe } from '../config/stripe.js';
import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/error.js';

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
