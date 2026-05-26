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
    teamMember: {
      findFirst: jest.fn(),
    },
    account: {
      findUnique: jest.fn(),
    },
    $transaction: jest.fn(),
  },
}));

jest.mock('./notification-service.js', () => ({
  sendPushNotification: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('./quickbooks-service.js', () => ({
  syncPaymentToQuickBooks: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('./sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNotification(): any {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return (require('./notification-service.js') as { sendPushNotification: any }).sendPushNotification;
}

const mockInvoice = {
  id: 'inv-uuid',
  accountId: 'acc-uuid',
  invoiceNumber: 'INV-001',
  total: 15000,
  amountPaid: 0,
  paymentToken: 'test-token',
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

// Updated to match new void-return API: handleCheckoutCompleted now takes session object and returns void
describe('handleCheckoutCompleted', () => {
  const mockSession = {
    id: 'cs_test_123',
    payment_intent: 'pi_test_456',
    amount_total: 15000,
    metadata: { invoiceId: 'inv-uuid', accountId: 'acc-uuid', token: 'test-token' },
  };

  it('creates payment and updates invoice when new payment', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue(null);
    prisma.invoice.findFirst.mockResolvedValue(mockInvoice);
    prisma.$transaction.mockResolvedValue([{ id: 'mock-payment-id', amount: 15000 }, {}]);
    prisma.teamMember.findFirst.mockResolvedValue(null);
    prisma.account.findUnique.mockResolvedValue({ businessName: 'ACME Plumbing' });

    await handleCheckoutCompleted(mockSession as never);

    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    const txArgs = prisma.$transaction.mock.calls[0][0];
    expect(txArgs).toHaveLength(2);
  });

  it('returns early when payment with stripePaymentId already exists (idempotency)', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue({ id: 'existing-payment-id' });

    await handleCheckoutCompleted(mockSession as never);

    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('returns early when metadata is missing invoiceId', async () => {
    const prisma = getPrisma();

    const sessionNoInvoice = { ...mockSession, metadata: { accountId: 'acc-uuid', token: 'test-token' } };
    await handleCheckoutCompleted(sessionNoInvoice as never);

    expect(prisma.payment.findFirst).not.toHaveBeenCalled();
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('returns early when metadata is missing accountId', async () => {
    const prisma = getPrisma();

    const sessionNoAccount = { ...mockSession, metadata: { invoiceId: 'inv-uuid', token: 'test-token' } };
    await handleCheckoutCompleted(sessionNoAccount as never);

    expect(prisma.payment.findFirst).not.toHaveBeenCalled();
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
});

const mockInvoiceWithAccount = {
  id: 'inv-uuid',
  accountId: 'acc-uuid',
  invoiceNumber: 'INV-001',
  total: 150000,
  amountPaid: 0,
  status: 'SENT',
  customer: { name: 'John Smith', phone: '+15551234567' },
  account: { businessName: 'ACME Plumbing' },
};

describe('createPaymentIntent', () => {
  it('creates a Stripe PaymentIntent for remaining balance and returns clientSecret, paymentIntentId, amount, merchantDisplayName, remainingBalance', async () => {
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
      remainingBalance: 150000,
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

// ─── New describe blocks for partial payment behavior (Story 4.4) ───────────

describe('handleCheckoutCompleted — partial payment', () => {
  const baseSession = {
    id: 'cs_test_partial',
    payment_intent: 'pi_partial_456',
    metadata: { invoiceId: 'inv-uuid', accountId: 'acc-uuid', token: 'test-token' },
  };

  const invoicePartial = {
    id: 'inv-uuid',
    accountId: 'acc-uuid',
    invoiceNumber: 'INV-001',
    total: 150000,
    amountPaid: 0,
    paymentToken: 'test-token',
    customer: { name: 'John Smith', phone: '+15551234567' },
  };

  it('creates PARTIALLY_PAID status when session amount < invoice total', async () => {
    const prisma = getPrisma();
    const sendPushNotification = getNotification();

    prisma.payment.findFirst.mockResolvedValue(null);
    prisma.invoice.findFirst.mockResolvedValue(invoicePartial);
    prisma.$transaction.mockResolvedValue([{ id: 'mock-payment-partial', amount: 50000 }, {}]);
    prisma.teamMember.findFirst.mockResolvedValue({ pushToken: 'expo-token' });
    prisma.account.findUnique.mockResolvedValue({ businessName: 'ACME Plumbing' });

    const session = { ...baseSession, amount_total: 50000 };
    await handleCheckoutCompleted(session as never);

    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    const txArgs = prisma.$transaction.mock.calls[0][0];
    // Invoice update should set PARTIALLY_PAID and amountPaid = 50000
    expect(txArgs[1]).toEqual(
      prisma.invoice.update({
        where: { id: 'inv-uuid' },
        data: { amountPaid: 50000, status: 'PARTIALLY_PAID' },
      }),
    );
    // Push notification fires for PARTIALLY_PAID too
    expect(sendPushNotification).toHaveBeenCalledWith(
      'expo-token',
      'Payment Received',
      expect.stringContaining('$500.00'),
    );
  });

  it('creates PAID status and sets paidAt when cumulative amountPaid >= total', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue(null);
    prisma.invoice.findFirst.mockResolvedValue({ ...invoicePartial, amountPaid: 50000 });
    prisma.$transaction.mockResolvedValue([{ id: 'mock-payment-full', amount: 100000 }, {}]);
    prisma.teamMember.findFirst.mockResolvedValue(null);
    prisma.account.findUnique.mockResolvedValue({ businessName: 'ACME Plumbing' });

    const session = { ...baseSession, amount_total: 100000 };
    await handleCheckoutCompleted(session as never);

    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    const txArgs = prisma.$transaction.mock.calls[0][0];
    // amountPaid = 50000 + 100000 = 150000 = total → PAID
    expect(txArgs[1]).toEqual(
      prisma.invoice.update({
        where: { id: 'inv-uuid' },
        data: expect.objectContaining({ amountPaid: 150000, status: 'PAID' }),
      }),
    );
  });

  it('returns early on duplicate stripePaymentId (idempotency)', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue({ id: 'already-exists' });

    await handleCheckoutCompleted({ ...baseSession, amount_total: 50000 } as never);

    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('returns early when invoice not found for session (bad token)', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue(null);
    prisma.invoice.findFirst.mockResolvedValue(null);

    await handleCheckoutCompleted({ ...baseSession, amount_total: 50000 } as never);

    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
});

describe('createCheckoutSession — remaining balance', () => {
  it('uses full invoice total when amountPaid is 0', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoice, total: 150000, amountPaid: 0 });
    stripe.checkout.sessions.create.mockResolvedValue({ url: 'https://checkout.stripe.com/test' });

    await createCheckoutSession('inv-uuid', 'test-token', 'https://app.example.com');

    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        line_items: [expect.objectContaining({
          price_data: expect.objectContaining({ unit_amount: 150000 }),
        })],
      }),
    );
  });

  it('uses remaining balance (total - amountPaid) when partially paid', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoice, total: 150000, amountPaid: 50000 });
    stripe.checkout.sessions.create.mockResolvedValue({ url: 'https://checkout.stripe.com/test' });

    await createCheckoutSession('inv-uuid', 'test-token', 'https://app.example.com');

    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        line_items: [expect.objectContaining({
          price_data: expect.objectContaining({ unit_amount: 100000 }),
        })],
      }),
    );
  });

  it('throws INVOICE_ALREADY_PAID when amountPaid >= total', async () => {
    const prisma = getPrisma();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoice, total: 150000, amountPaid: 150000 });

    await expect(
      createCheckoutSession('inv-uuid', 'test-token', 'https://app.example.com'),
    ).rejects.toMatchObject({ code: 'INVOICE_ALREADY_PAID', status: 422 });
  });
});

describe('createPaymentIntent — custom amount', () => {
  it('defaults to remaining balance when no customAmount provided', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 50000 });
    stripe.paymentIntents.create.mockResolvedValue({
      id: 'pi_test_123', client_secret: 'secret', amount: 100000,
    });

    const result = await createPaymentIntent('inv-uuid', 'acc-uuid');

    expect(stripe.paymentIntents.create).toHaveBeenCalledWith(
      expect.objectContaining({ amount: 100000 }),
    );
    expect(result.remainingBalance).toBe(100000);
  });

  it('uses customAmount when provided and within remaining balance', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 0 });
    stripe.paymentIntents.create.mockResolvedValue({
      id: 'pi_test_123', client_secret: 'secret', amount: 50000,
    });

    const result = await createPaymentIntent('inv-uuid', 'acc-uuid', 50000);

    expect(stripe.paymentIntents.create).toHaveBeenCalledWith(
      expect.objectContaining({ amount: 50000 }),
    );
    expect(result.amount).toBe(50000);
  });

  it('throws AMOUNT_EXCEEDS_BALANCE when customAmount > remaining balance', async () => {
    const prisma = getPrisma();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 100000, total: 150000 });

    await expect(createPaymentIntent('inv-uuid', 'acc-uuid', 100000)).rejects.toMatchObject({
      code: 'AMOUNT_EXCEEDS_BALANCE',
      status: 422,
    });
  });

  it('throws INVALID_AMOUNT when customAmount is 0', async () => {
    const prisma = getPrisma();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 0 });

    await expect(createPaymentIntent('inv-uuid', 'acc-uuid', 0)).rejects.toMatchObject({
      code: 'INVALID_AMOUNT',
      status: 422,
    });
  });

  it('throws INVOICE_ALREADY_PAID when amountPaid >= total', async () => {
    const prisma = getPrisma();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 150000 });

    await expect(createPaymentIntent('inv-uuid', 'acc-uuid')).rejects.toMatchObject({
      code: 'INVOICE_ALREADY_PAID',
      status: 422,
    });
  });

  it('response includes remainingBalance field', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 0 });
    stripe.paymentIntents.create.mockResolvedValue({
      id: 'pi_test_123', client_secret: 'secret', amount: 150000,
    });

    const result = await createPaymentIntent('inv-uuid', 'acc-uuid');

    expect(result).toHaveProperty('remainingBalance', 150000);
  });
});

describe('recordOnsitePayment — partial amount', () => {
  it('sets PARTIALLY_PAID when paymentIntent.amount < invoice.total - amountPaid', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.payment.findFirst.mockResolvedValue(null);
    stripe.paymentIntents.retrieve.mockResolvedValue({
      id: 'pi_test_123', status: 'succeeded', amount: 50000,
    });
    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 0 });
    prisma.$transaction.mockResolvedValue([{ id: 'pay-uuid', amount: 50000 }, {}]);

    const result = await recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_test_123');

    expect(result.invoice?.status).toBe('PARTIALLY_PAID');
    expect(result.invoice?.amountPaid).toBe(50000);
    expect(result.invoice?.paidAt).toBeNull();
    expect(result.payment?.amount).toBe(50000);
  });

  it('sets PAID and paidAt when cumulative amountPaid reaches total', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.payment.findFirst.mockResolvedValue(null);
    stripe.paymentIntents.retrieve.mockResolvedValue({
      id: 'pi_test_123', status: 'succeeded', amount: 100000,
    });
    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithAccount, amountPaid: 50000 });
    prisma.$transaction.mockResolvedValue([{ id: 'pay-uuid', amount: 100000 }, {}]);

    const result = await recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_test_123');

    expect(result.invoice?.status).toBe('PAID');
    expect(result.invoice?.amountPaid).toBe(150000);
    expect(result.invoice?.paidAt).toBeInstanceOf(Date);
  });

  it('returns alreadyProcessed: true on duplicate PI id', async () => {
    const prisma = getPrisma();

    prisma.payment.findFirst.mockResolvedValue({ id: 'existing-pay' });

    const result = await recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_dup');

    expect(result).toEqual({ alreadyProcessed: true });
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });

  it('throws PAYMENT_NOT_SUCCEEDED when PI status is requires_payment_method', async () => {
    const prisma = getPrisma();
    const stripe = getStripe();

    prisma.payment.findFirst.mockResolvedValue(null);
    stripe.paymentIntents.retrieve.mockResolvedValue({
      id: 'pi_test_123', status: 'requires_payment_method',
    });

    await expect(
      recordOnsitePayment('inv-uuid', 'acc-uuid', 'pi_test_123'),
    ).rejects.toMatchObject({ code: 'PAYMENT_NOT_SUCCEEDED', status: 422 });
  });
});
