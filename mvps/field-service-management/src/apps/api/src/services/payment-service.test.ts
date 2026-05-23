jest.mock('../config/stripe.js', () => ({
  stripe: {
    checkout: {
      sessions: {
        create: jest.fn(),
        retrieve: jest.fn(),
      },
    },
    paymentIntents: {
      create: jest.fn().mockResolvedValue({
        id: 'pi_test_onsite_123',
        client_secret: 'pi_test_onsite_123_secret_abc',
        amount: 150000,
        status: 'requires_payment_method',
      }),
      retrieve: jest.fn().mockResolvedValue({
        id: 'pi_test_onsite_123',
        status: 'succeeded',
        amount: 150000,
      }),
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

import { createCheckoutSession, handleCheckoutCompleted, createPaymentIntent, recordOnsitePayment } from './payment-service.js';

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

const mockInvoiceWithAccount = {
  id: 'inv-uuid',
  accountId: 'acc-uuid',
  invoiceNumber: 'INV-001',
  total: 150000,
  status: 'SENT',
  customer: { name: 'John Smith', phone: '+15551234567' },
  account: { businessName: 'ACME Plumbing' },
};

describe('createPaymentIntent', () => {
  it('creates a Stripe PaymentIntent and returns clientSecret, paymentIntentId, amount, merchantDisplayName', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue(mockInvoiceWithAccount);
    stripe.paymentIntents.create.mockResolvedValue({
      id: 'pi_test_onsite_123',
      client_secret: 'pi_test_onsite_123_secret_abc',
      amount: 150000,
      status: 'requires_payment_method',
    });

    const result = await createPaymentIntent('inv-uuid', 'acc-uuid');

    expect(result).toEqual({
      clientSecret: 'pi_test_onsite_123_secret_abc',
      paymentIntentId: 'pi_test_onsite_123',
      amount: 150000,
      merchantDisplayName: 'ACME Plumbing',
    });
    expect(stripe.paymentIntents.create).toHaveBeenCalledWith(
      expect.objectContaining({
        amount: 150000,
        currency: 'usd',
        metadata: expect.objectContaining({ invoiceId: 'inv-uuid' }),
      }),
    );
  });

  it('throws INVOICE_NOT_FOUND when invoice does not exist', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue(null);

    await expect(createPaymentIntent('nonexistent', 'acc-uuid')).rejects.toMatchObject({
      code: 'INVOICE_NOT_FOUND',
      status: 404,
    });
  });

  it('throws INVOICE_ALREADY_PAID when invoice status is PAID', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, status: 'PAID' });

    await expect(createPaymentIntent('inv-uuid', 'acc-uuid')).rejects.toMatchObject({
      code: 'INVOICE_ALREADY_PAID',
      status: 422,
    });
  });

  it('throws INVOICE_ZERO_AMOUNT when invoice total is 0', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, total: 0 });

    await expect(createPaymentIntent('inv-uuid', 'acc-uuid')).rejects.toMatchObject({
      code: 'INVOICE_ZERO_AMOUNT',
      status: 422,
    });
  });
});

describe('recordOnsitePayment', () => {
  it('creates payment, updates invoice, returns payment and invoice data when not already processed', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.payment.findFirst.mockResolvedValue(null);
    stripe.paymentIntents.retrieve.mockResolvedValue({
      id: 'pi_test_onsite_123',
      status: 'succeeded',
      amount: 150000,
    });
    prisma.invoice.findFirst.mockResolvedValue(mockInvoiceWithAccount);
    const createdPayment = { id: 'payment-uuid', amount: 150000 };
    prisma.$transaction.mockResolvedValue([createdPayment, {}]);

    const result = await recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_test_onsite_123');

    expect(result.alreadyProcessed).toBe(false);
    expect(result.payment).toEqual({ id: 'payment-uuid', amount: 150000 });
    expect(result.invoice).toMatchObject({
      status: 'PAID',
      amountPaid: 150000,
      invoiceNumber: 'INV-001',
      accountId: 'acc-uuid',
    });
    expect(result.customer).toEqual({ name: 'John Smith', phone: '+15551234567' });
    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
  });

  it('returns alreadyProcessed: true when payment with stripePaymentId already exists', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue({ id: 'existing-payment' });

    const result = await recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_test_onsite_123');

    expect(result).toEqual({ alreadyProcessed: true });
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('throws PAYMENT_NOT_SUCCEEDED when PaymentIntent status is not succeeded', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.payment.findFirst.mockResolvedValue(null);
    stripe.paymentIntents.retrieve.mockResolvedValue({
      id: 'pi_test_onsite_123',
      status: 'requires_payment_method',
    });

    await expect(
      recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_test_onsite_123'),
    ).rejects.toMatchObject({
      code: 'PAYMENT_NOT_SUCCEEDED',
      status: 422,
    });
  });
});
