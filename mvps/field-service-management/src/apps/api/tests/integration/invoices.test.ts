import request from 'supertest';

// Mock auth middleware as jest.fn() so tests can override behaviour
jest.mock('../../src/middleware/auth.js', () => ({
  authMiddleware: jest.fn((req: any, _res: any, next: any) => {
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  }),
}));

// Mock invoice service
jest.mock('../../src/services/invoice-service.js', () => ({
  generateInvoiceFromJob: jest.fn(),
}));

// Mock PDF service
jest.mock('../../src/services/pdf-service.js', () => ({
  generateInvoicePdf: jest.fn(),
  generateQuotePdf: jest.fn(),
  buildQuotePdf: jest.fn(),
  buildInvoicePdf: jest.fn(),
}));

// Mock storage service
jest.mock('../../src/services/storage-service.js', () => ({
  uploadFile: jest.fn(),
}));

// Mock Prisma
jest.mock('../../src/config/prisma.js', () => ({
  prisma: {
    invoice: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    teamMember: {
      findUnique: jest.fn(),
    },
  },
}));

// Mock other services used by other routes
jest.mock('../../src/services/sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
}));
jest.mock('../../src/services/notification-service.js', () => ({
  sendPushNotification: jest.fn().mockResolvedValue(undefined),
}));
jest.mock('../../src/utils/signed-url.js', () => ({
  generateToken: jest.fn().mockReturnValue('fake-token'),
}));
jest.mock('../../src/jobs/reminder-sender.js', () => ({
  startReminderJob: jest.fn(),
}));

import { app } from '../../src/index.js';

const mockInvoice = {
  id: 'invoice-1',
  accountId: 'account-1',
  customerId: 'customer-1',
  jobId: 'job-1',
  quoteId: 'quote-1',
  invoiceNumber: 'INV-2026-0001',
  status: 'DRAFT',
  subtotal: 30000,
  taxAmount: 2400,
  total: 32400,
  amountPaid: 0,
  pdfUrl: null,
  dueAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
};

const mockInvoiceWithPdf = {
  ...mockInvoice,
  pdfUrl: 'https://storage.example.com/invoices/account-1/invoice-1.pdf',
};

describe('POST /api/v1/invoices/generate-from-job/:jobId', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../../src/config/prisma.js');
    (prisma.invoice.findFirst as jest.Mock).mockResolvedValue(null);
    (prisma.invoice.update as jest.Mock).mockResolvedValue(mockInvoiceWithPdf);

    const { generateInvoiceFromJob } = require('../../src/services/invoice-service.js');
    (generateInvoiceFromJob as jest.Mock).mockResolvedValue(mockInvoice);

    const { generateInvoicePdf } = require('../../src/services/pdf-service.js');
    (generateInvoicePdf as jest.Mock).mockResolvedValue(Buffer.from('fake-pdf'));

    const { uploadFile } = require('../../src/services/storage-service.js');
    (uploadFile as jest.Mock).mockResolvedValue(
      'https://storage.example.com/invoices/account-1/invoice-1.pdf',
    );
  });

  it('returns 401 when auth middleware blocks the request', async () => {
    const { authMiddleware } = require('../../src/middleware/auth.js');
    (authMiddleware as jest.Mock).mockImplementationOnce((_req: any, res: any) => {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Unauthorized', status: 401 } });
    });

    const res = await request(app).post('/api/v1/invoices/generate-from-job/job-1');

    expect(res.status).toBe(401);
  });

  it('creates invoice (201) on success path with no existing invoice', async () => {
    const res = await request(app)
      .post('/api/v1/invoices/generate-from-job/job-1')
      .set('Authorization', 'Bearer valid-token');

    expect(res.status).toBe(201);
    expect(res.body.data).toMatchObject({
      pdfUrl: 'https://storage.example.com/invoices/account-1/invoice-1.pdf',
    });

    const { generateInvoiceFromJob } = require('../../src/services/invoice-service.js');
    expect(generateInvoiceFromJob).toHaveBeenCalledTimes(1);
    expect(generateInvoiceFromJob).toHaveBeenCalledWith('job-1', 'account-1');

    const { generateInvoicePdf } = require('../../src/services/pdf-service.js');
    expect(generateInvoicePdf).toHaveBeenCalledTimes(1);

    const { uploadFile } = require('../../src/services/storage-service.js');
    expect(uploadFile).toHaveBeenCalledWith(
      'invoices',
      expect.any(String),
      expect.any(Buffer),
      'application/pdf',
    );

    const { prisma } = require('../../src/config/prisma.js');
    expect(prisma.invoice.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ pdfUrl: expect.any(String) }),
      }),
    );
  });

  it('returns 200 with existing invoice without calling generateInvoiceFromJob', async () => {
    const { prisma } = require('../../src/config/prisma.js');
    (prisma.invoice.findFirst as jest.Mock).mockResolvedValue(mockInvoice);

    const res = await request(app)
      .post('/api/v1/invoices/generate-from-job/job-1')
      .set('Authorization', 'Bearer valid-token');

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ id: 'invoice-1' });

    const { generateInvoiceFromJob } = require('../../src/services/invoice-service.js');
    expect(generateInvoiceFromJob).not.toHaveBeenCalled();

    const { generateInvoicePdf } = require('../../src/services/pdf-service.js');
    expect(generateInvoicePdf).not.toHaveBeenCalled();
  });
});
