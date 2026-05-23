jest.mock('../config/stripe.js', () => ({
  stripe: {
    checkout: {
      sessions: {
        create: jest.fn(),
        retrieve: jest.fn(),
      },
    },
    webhooks: {
      constructEvent: jest.fn(),
    },
  },
}));

jest.mock('../config/prisma.js', () => ({
  prisma: {
    invoice: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    payment: {
      findFirst: jest.fn(),
      create: jest.fn(),
    },
    $transaction: jest.fn(),
  },
}));

import { createCheckoutSession, handleCheckoutCompleted } from './payment-service.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getStripe(): any {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return (require('../config/stripe.js') as { stripe: any }).stripe;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPrisma(): any {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return (require('../config/prisma.js') as { prisma: any }).prisma;
}

const mockInvoice = {
  id: 'inv-uuid',
  accountId: 'acc-uuid',
  invoiceNumber: 'INV-001',
  total: 15000,
  customer: { name: 'John Smith', phone: '+15551234567' },
  account: { businessName: 'ACME Plumbing' },
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('createCheckoutSession', () => {
  it('creates a Stripe checkout session and returns the url', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue(mockInvoice);
    stripe.checkout.sessions.create.mockResolvedValue({
      url: 'https://checkout.stripe.com/test',
      id: 'cs_test_123',
    });

    const url = await createCheckoutSession('inv-uuid', 'test-token', 'https://app.example.com');

    expect(url).toBe('https://checkout.stripe.com/test');
    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: 'payment',
        line_items: [
          expect.objectContaining({
            price_data: expect.objectContaining({
              unit_amount: 15000,
            }),
            quantity: 1,
          }),
        ],
        metadata: expect.objectContaining({
          invoiceId: 'inv-uuid',
          token: 'test-token',
        }),
      }),
    );
  });

  it('throws INVOICE_NOT_FOUND when invoice does not exist', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue(null);

    await expect(
      createCheckoutSession('nonexistent', 'token', 'https://app.example.com'),
    ).rejects.toMatchObject({ code: 'INVOICE_NOT_FOUND', status: 404 });
  });

  it('throws STRIPE_SESSION_ERROR when session has no url', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue(mockInvoice);
    stripe.checkout.sessions.create.mockResolvedValue({ url: null, id: 'cs_test_nourl' });

    await expect(
      createCheckoutSession('inv-uuid', 'token', 'https://app.example.com'),
    ).rejects.toMatchObject({ code: 'STRIPE_SESSION_ERROR', status: 502 });
  });
});

describe('handleCheckoutCompleted', () => {
  it('creates payment and updates invoice, returns data when new payment', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    stripe.checkout.sessions.retrieve.mockResolvedValue({
      id: 'cs_test_123',
      payment_intent: 'pi_test_456',
      metadata: { invoiceId: 'inv-uuid', accountId: 'acc-uuid', token: 'test-token' },
    });
    prisma.payment.findFirst.mockResolvedValue(null);
    prisma.invoice.findFirst.mockResolvedValue(mockInvoice);
    prisma.$transaction.mockResolvedValue([]);

    const result = await handleCheckoutCompleted('cs_test_123');

    expect(result.alreadyProcessed).toBe(false);
    expect(result.invoice).toEqual({
      total: 15000,
      invoiceNumber: 'INV-001',
      accountId: 'acc-uuid',
    });
    expect(result.customer).toEqual({ name: 'John Smith', phone: '+15551234567' });

    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    const txArgs = prisma.$transaction.mock.calls[0][0];
    expect(txArgs).toHaveLength(2);
  });

  it('returns alreadyProcessed: true when payment with stripePaymentId already exists', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    stripe.checkout.sessions.retrieve.mockResolvedValue({
      id: 'cs_test_123',
      payment_intent: 'pi_test_456',
      metadata: { invoiceId: 'inv-uuid', accountId: 'acc-uuid', token: 'test-token' },
    });
    prisma.payment.findFirst.mockResolvedValue({ id: 'existing-payment-id' });

    const result = await handleCheckoutCompleted('cs_test_123');

    expect(result).toEqual({ alreadyProcessed: true });
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('returns alreadyProcessed: true when metadata is missing invoiceId', async () => {
    const stripe = getStripe();

    stripe.checkout.sessions.retrieve.mockResolvedValue({
      id: 'cs_test_123',
      payment_intent: 'pi_test_456',
      metadata: { accountId: 'acc-uuid' },
    });

    const result = await handleCheckoutCompleted('cs_test_123');

    expect(result).toEqual({ alreadyProcessed: true });
  });

  it('returns alreadyProcessed: true when metadata is missing accountId', async () => {
    const stripe = getStripe();

    stripe.checkout.sessions.retrieve.mockResolvedValue({
      id: 'cs_test_123',
      payment_intent: 'pi_test_456',
      metadata: { invoiceId: 'inv-uuid' },
    });

    const result = await handleCheckoutCompleted('cs_test_123');

    expect(result).toEqual({ alreadyProcessed: true });
  });
});
