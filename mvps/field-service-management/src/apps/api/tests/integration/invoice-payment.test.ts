import request from 'supertest';

jest.mock('../../src/middleware/auth.js', () => ({
  authMiddleware: jest.fn((req: any, _res: any, next: any) => {
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  }),
}));

jest.mock('../../src/services/payment-service.js', () => ({
  createPaymentIntent: jest.fn(),
  recordOnsitePayment: jest.fn(),
  createCheckoutSession: jest.fn(),
  handleCheckoutCompleted: jest.fn(),
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

jest.mock('../../src/config/stripe.js', () => ({
  stripe: {
    checkout: { sessions: { create: jest.fn(), retrieve: jest.fn() } },
    paymentIntents: { create: jest.fn(), retrieve: jest.fn() },
    webhooks: { constructEvent: jest.fn() },
  },
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
import { AppError } from '../../src/utils/error.js';

function getPaymentService() {
  return require('../../src/services/payment-service.js') as {
    createPaymentIntent: jest.Mock;
    recordOnsitePayment: jest.Mock;
  };
}
function getPrisma() {
  return (require('../../src/config/prisma.js') as { prisma: any }).prisma;
}
function getSms() {
  return (require('../../src/services/sms-service.js') as { sendSms: jest.Mock }).sendSms;
}
function getNotification() {
  return (require('../../src/services/notification-service.js') as { sendPushNotification: jest.Mock }).sendPushNotification;
}

beforeEach(() => {
  jest.clearAllMocks();
});

// ─── POST /api/v1/invoices/:id/payment-intent ─────────────────────────────────

describe('POST /api/v1/invoices/:id/payment-intent', () => {
  it('returns 401 when auth is rejected', async () => {
    const { authMiddleware } = require('../../src/middleware/auth.js');
    (authMiddleware as jest.Mock).mockImplementationOnce((_req: any, res: any) => {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Unauthorized', status: 401 } });
    });

    const res = await request(app).post('/api/v1/invoices/inv-1/payment-intent');
    expect(res.status).toBe(401);
  });

  it('returns 200 with clientSecret, paymentIntentId, amount, merchantDisplayName on success', async () => {
    const { createPaymentIntent } = getPaymentService();
    createPaymentIntent.mockResolvedValue({
      clientSecret: 'pi_test_secret_abc',
      paymentIntentId: 'pi_test_123',
      amount: 15000,
      merchantDisplayName: 'ACME Plumbing',
    });

    const res = await request(app)
      .post('/api/v1/invoices/inv-1/payment-intent')
      .set('Authorization', 'Bearer valid-token');

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({
      clientSecret: 'pi_test_secret_abc',
      paymentIntentId: 'pi_test_123',
      amount: 15000,
      merchantDisplayName: 'ACME Plumbing',
    });
  });

  it('returns 404 when createPaymentIntent throws INVOICE_NOT_FOUND', async () => {
    const { createPaymentIntent } = getPaymentService();
    createPaymentIntent.mockRejectedValue(new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404));

    const res = await request(app)
      .post('/api/v1/invoices/nonexistent/payment-intent')
      .set('Authorization', 'Bearer valid-token');

    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('INVOICE_NOT_FOUND');
  });

  it('returns 422 when createPaymentIntent throws INVOICE_ALREADY_PAID', async () => {
    const { createPaymentIntent } = getPaymentService();
    createPaymentIntent.mockRejectedValue(new AppError('INVOICE_ALREADY_PAID', 'Already paid', 422));

    const res = await request(app)
      .post('/api/v1/invoices/inv-1/payment-intent')
      .set('Authorization', 'Bearer valid-token');

    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe('INVOICE_ALREADY_PAID');
  });
});

// ─── POST /api/v1/invoices/:id/record-onsite-payment ─────────────────────────

describe('POST /api/v1/invoices/:id/record-onsite-payment', () => {
  const successResult = {
    alreadyProcessed: false,
    payment: { id: 'pay-uuid', amount: 15000 },
    invoice: {
      status: 'PAID',
      amountPaid: 15000,
      paidAt: new Date('2026-05-23T10:00:00Z'),
      invoiceNumber: 'INV-001',
      accountId: 'account-1',
    },
    customer: { phone: '+15551234567', name: 'John Smith' },
  };

  it('returns 401 when auth is rejected', async () => {
    const { authMiddleware } = require('../../src/middleware/auth.js');
    (authMiddleware as jest.Mock).mockImplementationOnce((_req: any, res: any) => {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Unauthorized', status: 401 } });
    });

    const res = await request(app)
      .post('/api/v1/invoices/inv-1/record-onsite-payment')
      .send({ paymentIntentId: 'pi_test_123' });
    expect(res.status).toBe(401);
  });

  it('returns 422 when paymentIntentId is missing from body', async () => {
    const res = await request(app)
      .post('/api/v1/invoices/inv-1/record-onsite-payment')
      .set('Authorization', 'Bearer valid-token')
      .send({});

    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe('MISSING_PAYMENT_INTENT_ID');
  });

  it('calls push notification and SMS, returns 200 with payment and invoice data when alreadyProcessed: false', async () => {
    const { recordOnsitePayment } = getPaymentService();
    const sendSms = getSms();
    const sendPushNotification = getNotification();
    const prisma = getPrisma();

    recordOnsitePayment.mockResolvedValue(successResult);
    prisma.teamMember.findFirst.mockResolvedValue({ pushToken: 'expo-push-token' });
    prisma.account.findUnique.mockResolvedValue({ businessName: 'ACME Plumbing' });

    const res = await request(app)
      .post('/api/v1/invoices/inv-1/record-onsite-payment')
      .set('Authorization', 'Bearer valid-token')
      .send({ paymentIntentId: 'pi_test_123' });

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({
      alreadyProcessed: false,
      paymentId: 'pay-uuid',
      amount: 15000,
      invoiceStatus: 'PAID',
      invoiceAmountPaid: 15000,
    });
    expect(res.body.data.invoicePaidAt).toBeDefined();

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

  it('does NOT call push or SMS when alreadyProcessed: true, returns 200', async () => {
    const { recordOnsitePayment } = getPaymentService();
    const sendSms = getSms();
    const sendPushNotification = getNotification();

    recordOnsitePayment.mockResolvedValue({ alreadyProcessed: true });

    const res = await request(app)
      .post('/api/v1/invoices/inv-1/record-onsite-payment')
      .set('Authorization', 'Bearer valid-token')
      .send({ paymentIntentId: 'pi_test_123' });

    expect(res.status).toBe(200);
    expect(res.body.data.alreadyProcessed).toBe(true);
    expect(sendPushNotification).not.toHaveBeenCalled();
    expect(sendSms).not.toHaveBeenCalled();
  });

  it('returns 422 when recordOnsitePayment throws PAYMENT_NOT_SUCCEEDED', async () => {
    const { recordOnsitePayment } = getPaymentService();
    recordOnsitePayment.mockRejectedValue(new AppError('PAYMENT_NOT_SUCCEEDED', 'Not succeeded', 422));

    const res = await request(app)
      .post('/api/v1/invoices/inv-1/record-onsite-payment')
      .set('Authorization', 'Bearer valid-token')
      .send({ paymentIntentId: 'pi_test_123' });

    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe('PAYMENT_NOT_SUCCEEDED');
  });
});
