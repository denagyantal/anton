import request from 'supertest';

jest.mock('../../src/middleware/auth.js', () => ({
  authMiddleware: jest.fn((req: any, _res: any, next: any) => {
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  }),
}));

jest.mock('../../src/services/sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../../src/services/payment-service.js', () => ({
  createCheckoutSession: jest.fn(),
  handleCheckoutCompleted: jest.fn(),
}));

jest.mock('../../src/config/prisma.js', () => ({
  prisma: {
    invoice: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock('../../src/utils/signed-url.js', () => ({
  generateToken: jest.fn().mockReturnValue('test-token-hex'),
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

jest.mock('../../src/services/notification-service.js', () => ({
  sendPushNotification: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../../src/jobs/reminder-sender.js', () => ({
  startReminderJob: jest.fn(),
}));

jest.mock('../../src/config/stripe.js', () => ({
  stripe: {
    checkout: { sessions: { create: jest.fn(), retrieve: jest.fn() } },
    webhooks: { constructEvent: jest.fn() },
  },
}));

import { app } from '../../src/index.js';

function getPrisma() {
  return (require('../../src/config/prisma.js') as { prisma: any }).prisma;
}
function getSms() {
  return (require('../../src/services/sms-service.js') as { sendSms: jest.Mock }).sendSms;
}
function getPaymentService() {
  return require('../../src/services/payment-service.js') as {
    createCheckoutSession: jest.Mock;
    handleCheckoutCompleted: jest.Mock;
  };
}

const thirtyOneDaysAgo = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000);

const mockInvoiceWithPdf = {
  id: 'invoice-1',
  accountId: 'account-1',
  customerId: 'customer-1',
  jobId: 'job-1',
  invoiceNumber: 'INV-001',
  status: 'DRAFT',
  subtotal: 10000,
  taxAmount: 800,
  total: 10800,
  amountPaid: 0,
  pdfUrl: 'https://storage.example.com/inv.pdf',
  paymentToken: null,
  sentAt: null,
  paidAt: null,
  dueAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  customer: { name: 'John Smith', phone: '+15551234567' },
  account: { businessName: 'ACME Plumbing' },
};

beforeEach(() => {
  jest.clearAllMocks();
});

// ─── POST /api/v1/invoices/:id/send ───────────────────────────────────────────

describe('POST /api/v1/invoices/:id/send', () => {
  it('returns 401 when auth is rejected', async () => {
    const { authMiddleware } = require('../../src/middleware/auth.js');
    (authMiddleware as jest.Mock).mockImplementationOnce((_req: any, res: any) => {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Unauthorized', status: 401 } });
    });

    const res = await request(app).post('/api/v1/invoices/invoice-1/send');
    expect(res.status).toBe(401);
  });

  it('returns 404 when invoice not found', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue(null);

    const res = await request(app).post('/api/v1/invoices/nonexistent/send');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('INVOICE_NOT_FOUND');
  });

  it('returns 422 when pdfUrl is null', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue({ ...mockInvoiceWithPdf, pdfUrl: null });

    const res = await request(app).post('/api/v1/invoices/invoice-1/send');
    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe('PDF_NOT_GENERATED');
  });

  it('returns 200, sends SMS with formatted total and token url, updates invoice', async () => {
    const prisma = getPrisma();
    const sendSms = getSms();

    prisma.invoice.findFirst.mockResolvedValue(mockInvoiceWithPdf);
    prisma.invoice.update.mockResolvedValue({ ...mockInvoiceWithPdf, status: 'SENT', paymentToken: 'test-token-hex' });

    const res = await request(app)
      .post('/api/v1/invoices/invoice-1/send')
      .set('Authorization', 'Bearer valid-token');

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({
      status: 'SENT',
      paymentToken: 'test-token-hex',
    });
    expect(res.body.data.sentAt).toBeDefined();

    expect(sendSms).toHaveBeenCalledTimes(1);
    const [toPhone, smsBody] = sendSms.mock.calls[0] as [string, string];
    expect(toPhone).toBe('+15551234567');
    expect(smsBody).toContain('$108.00');
    expect(smsBody).toContain('test-token-hex');

    expect(prisma.invoice.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 'invoice-1' },
        data: expect.objectContaining({ status: 'SENT', paymentToken: 'test-token-hex' }),
      }),
    );
  });
});

// ─── GET /api/v1/invoices/view/:token ─────────────────────────────────────────

describe('GET /api/v1/invoices/view/:token', () => {
  const mockPublicInvoice = {
    id: 'invoice-1',
    invoiceNumber: 'INV-001',
    status: 'SENT',
    subtotal: 10000,
    taxAmount: 800,
    total: 10800,
    amountPaid: 0,
    pdfUrl: 'https://storage.example.com/inv.pdf',
    paymentToken: 'valid-token',
    sentAt: new Date(),
    dueAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    customer: { name: 'John Smith' },
    account: { businessName: 'ACME Plumbing', businessLogoUrl: null, licenseNumber: null },
    job: {
      quote: {
        line_items: [
          { description: 'Labor', quantity: 2, unit_price: 5000, total: 10000, sort_order: 0 },
        ],
      },
    },
  };

  it('returns 404 when token not found', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue(null);

    const res = await request(app).get('/api/v1/invoices/view/unknown-token');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('INVOICE_NOT_FOUND');
  });

  it('returns 410 when sentAt is more than 30 days ago', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue({
      ...mockPublicInvoice,
      sentAt: thirtyOneDaysAgo,
    });

    const res = await request(app).get('/api/v1/invoices/view/valid-token');
    expect(res.status).toBe(410);
    expect(res.body.error.code).toBe('PAYMENT_LINK_EXPIRED');
  });

  it('returns 200 with full invoice data including lineItems, total, dueAt', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue(mockPublicInvoice);

    const res = await request(app).get('/api/v1/invoices/view/valid-token');
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({
      invoiceId: 'invoice-1',
      invoiceNumber: 'INV-001',
      businessName: 'ACME Plumbing',
      customerName: 'John Smith',
      total: 10800,
    });
    expect(res.body.data.lineItems).toHaveLength(1);
    expect(res.body.data.lineItems[0]).toMatchObject({ description: 'Labor', quantity: 2 });
    expect(res.body.data.dueAt).toBeDefined();
  });
});

// ─── POST /api/v1/invoices/pay/:token ─────────────────────────────────────────

describe('POST /api/v1/invoices/pay/:token', () => {
  const mockPayableInvoice = {
    id: 'invoice-1',
    accountId: 'account-1',
    status: 'SENT',
    total: 10800,
    paymentToken: 'valid-token',
    sentAt: new Date(),
    paidAt: null,
  };

  it('returns 404 when token not found', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue(null);

    const res = await request(app).post('/api/v1/invoices/pay/unknown-token');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('INVOICE_NOT_FOUND');
  });

  it('returns 410 when payment link has expired', async () => {
    const prisma = getPrisma();
    prisma.invoice.findFirst.mockResolvedValue({
      ...mockPayableInvoice,
      sentAt: thirtyOneDaysAgo,
    });

    const res = await request(app).post('/api/v1/invoices/pay/valid-token');
    expect(res.status).toBe(410);
    expect(res.body.error.code).toBe('PAYMENT_LINK_EXPIRED');
  });

  it('returns 200 with checkoutUrl on success', async () => {
    const prisma = getPrisma();
    const { createCheckoutSession } = getPaymentService();

    prisma.invoice.findFirst.mockResolvedValue(mockPayableInvoice);
    createCheckoutSession.mockResolvedValue('https://checkout.stripe.com/pay/test');

    const res = await request(app).post('/api/v1/invoices/pay/valid-token');
    expect(res.status).toBe(200);
    expect(res.body.data.checkoutUrl).toBe('https://checkout.stripe.com/pay/test');
  });
});
