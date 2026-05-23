import request from 'supertest';

jest.mock('../../src/config/stripe.js', () => ({
  stripe: {
    checkout: { sessions: { create: jest.fn(), retrieve: jest.fn() } },
    webhooks: { constructEvent: jest.fn() },
  },
}));

jest.mock('../../src/services/payment-service.js', () => ({
  handleCheckoutCompleted: jest.fn(),
  createCheckoutSession: jest.fn(),
}));

jest.mock('../../src/services/notification-service.js', () => ({
  sendPushNotification: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../../src/services/sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../../src/config/prisma.js', () => ({
  prisma: {
    invoice: { findFirst: jest.fn(), update: jest.fn() },
    teamMember: { findFirst: jest.fn() },
    account: { findUnique: jest.fn() },
  },
}));

jest.mock('../../src/middleware/auth.js', () => ({
  authMiddleware: jest.fn((req: any, _res: any, next: any) => {
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  }),
}));

jest.mock('../../src/services/invoice-service.js', () => ({
  generateInvoiceFromJob: jest.fn(),
}));

jest.mock('../../src/services/pdf-service.js', () => ({
  generateInvoicePdf: jest.fn(),
  generateQuotePdf: jest.fn(),
  buildQuotePdf: jest.fn(),
  buildInvoicePdf: jest.fn(),
}));

jest.mock('../../src/services/storage-service.js', () => ({
  uploadFile: jest.fn(),
}));

jest.mock('../../src/utils/signed-url.js', () => ({
  generateToken: jest.fn().mockReturnValue('fake-token'),
}));

jest.mock('../../src/jobs/reminder-sender.js', () => ({
  startReminderJob: jest.fn(),
}));

import { app } from '../../src/index.js';

function getStripe() {
  return (require('../../src/config/stripe.js') as { stripe: any }).stripe;
}
function getPaymentService() {
  return require('../../src/services/payment-service.js') as {
    handleCheckoutCompleted: jest.Mock;
    createCheckoutSession: jest.Mock;
  };
}
function getSms() {
  return (require('../../src/services/sms-service.js') as { sendSms: jest.Mock }).sendSms;
}
function getNotification() {
  return (require('../../src/services/notification-service.js') as { sendPushNotification: jest.Mock }).sendPushNotification;
}
function getPrisma() {
  return (require('../../src/config/prisma.js') as { prisma: any }).prisma;
}

const mockCheckoutSessionEvent = {
  type: 'checkout.session.completed',
  data: {
    object: {
      id: 'cs_test_123',
      payment_intent: 'pi_test_456',
      metadata: { invoiceId: 'inv-uuid', accountId: 'acc-uuid', token: 'test-token' },
    },
  },
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('POST /api/v1/payments/webhook', () => {
  it('returns 400 when Stripe signature is invalid', async () => {
    const stripe = getStripe();
    stripe.webhooks.constructEvent.mockImplementation(() => {
      throw new Error('No signatures found matching the expected signature for payload');
    });

    const res = await request(app)
      .post('/api/v1/payments/webhook')
      .set('stripe-signature', 'bad-sig')
      .set('Content-Type', 'application/json')
      .send(Buffer.from('{}'));

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('WEBHOOK_INVALID');
  });

  it('processes checkout.session.completed with alreadyProcessed: false and sends push + SMS', async () => {
    const stripe = getStripe();
    const { handleCheckoutCompleted } = getPaymentService();
    const sendSms = getSms();
    const sendPushNotification = getNotification();
    const prisma = getPrisma();

    stripe.webhooks.constructEvent.mockReturnValue(mockCheckoutSessionEvent);
    handleCheckoutCompleted.mockResolvedValue({
      alreadyProcessed: false,
      invoice: { total: 15000, invoiceNumber: 'INV-001', accountId: 'acc-uuid' },
      customer: { phone: '+15551234567', name: 'John Smith' },
    });
    prisma.teamMember.findFirst.mockResolvedValue({ pushToken: 'expo-push-token' });
    prisma.account.findUnique.mockResolvedValue({ businessName: 'ACME Plumbing' });

    const res = await request(app)
      .post('/api/v1/payments/webhook')
      .set('stripe-signature', 'valid-sig')
      .set('Content-Type', 'application/json')
      .send(Buffer.from(JSON.stringify(mockCheckoutSessionEvent)));

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ received: true });
    expect(handleCheckoutCompleted).toHaveBeenCalledWith('cs_test_123');
    expect(sendPushNotification).toHaveBeenCalledWith(
      'expo-push-token',
      'Payment Received',
      expect.stringContaining('$150.00'),
    );
    expect(sendSms).toHaveBeenCalledWith(
      '+15551234567',
      expect.stringContaining('$150.00'),
    );
  });

  it('skips push and SMS when alreadyProcessed is true', async () => {
    const stripe = getStripe();
    const { handleCheckoutCompleted } = getPaymentService();
    const sendSms = getSms();
    const sendPushNotification = getNotification();

    stripe.webhooks.constructEvent.mockReturnValue(mockCheckoutSessionEvent);
    handleCheckoutCompleted.mockResolvedValue({ alreadyProcessed: true });

    const res = await request(app)
      .post('/api/v1/payments/webhook')
      .set('stripe-signature', 'valid-sig')
      .set('Content-Type', 'application/json')
      .send(Buffer.from(JSON.stringify(mockCheckoutSessionEvent)));

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ received: true });
    expect(sendPushNotification).not.toHaveBeenCalled();
    expect(sendSms).not.toHaveBeenCalled();
  });

  it('returns 200 and does NOT call handleCheckoutCompleted for unhandled event types', async () => {
    const stripe = getStripe();
    const { handleCheckoutCompleted } = getPaymentService();

    stripe.webhooks.constructEvent.mockReturnValue({
      type: 'payment_intent.created',
      data: { object: { id: 'pi_test_123' } },
    });

    const res = await request(app)
      .post('/api/v1/payments/webhook')
      .set('stripe-signature', 'valid-sig')
      .set('Content-Type', 'application/json')
      .send(Buffer.from('{}'));

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ received: true });
    expect(handleCheckoutCompleted).not.toHaveBeenCalled();
  });
});
