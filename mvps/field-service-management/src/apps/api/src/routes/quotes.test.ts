import request from 'supertest';

// Mock auth middleware — sets req.user for all requests
jest.mock('../middleware/auth.js', () => ({
  authMiddleware: (req: import('express').Request, _res: import('express').Response, next: import('express').NextFunction) => {
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  },
}));

// Mock Prisma with factory to avoid hoisting issues
jest.mock('../config/prisma.js', () => ({
  prisma: {
    teamMember: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    quote: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    quotePhoto: {
      create: jest.fn(),
    },
    account: {
      findUnique: jest.fn(),
    },
  },
}));

// Mock storage service
jest.mock('../services/storage-service.js', () => ({
  uploadFile: jest.fn(),
}));

// Mock PDF service
jest.mock('../services/pdf-service.js', () => ({
  generateQuotePdf: jest.fn(),
}));

// Mock SMS service
jest.mock('../services/sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
}));

// Mock notification service
jest.mock('../services/notification-service.js', () => ({
  sendPushNotification: jest.fn().mockResolvedValue(undefined),
}));

// Mock signed-url utility — returns a fixed token for predictability
jest.mock('../utils/signed-url.js', () => ({
  generateToken: jest.fn().mockReturnValue('fixed-token-abc123'),
}));

import { app } from '../index.js';

const mockTeamMember = { accountId: 'account-1' };
const mockQuote = { id: 'quote-1', account_id: 'account-1', pdf_url: null, status: 'DRAFT', total: 15000, customer: { phone: '+15551234567', name: 'John Smith' } };
const mockQuoteWithPdf = { ...mockQuote, pdf_url: 'https://storage.example.com/pdfs/quote-1.pdf' };
const mockSentQuote = { ...mockQuoteWithPdf, status: 'SENT', approval_token: 'fixed-token-abc123', expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) };
const mockQuotePhoto = {
  id: 'photo-1',
  photo_url: 'https://storage.example.com/photos/quote-1/photo.jpg',
  caption: null,
  taken_at: null,
};
const mockUpdatedQuote = { id: 'quote-1', pdf_url: 'https://storage.example.com/pdfs/quote-1.pdf' };
const mockAccount = { businessName: 'Acme HVAC' };

describe('POST /api/v1/quotes/:id/photos', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue(mockTeamMember);
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockQuote);
    (prisma.quotePhoto.create as jest.Mock).mockResolvedValue(mockQuotePhoto);
    (prisma.quote.update as jest.Mock).mockResolvedValue(mockUpdatedQuote);

    const { uploadFile } = require('../services/storage-service.js');
    (uploadFile as jest.Mock).mockResolvedValue('https://storage.example.com/photos/quote-1/photo.jpg');

    const { generateQuotePdf } = require('../services/pdf-service.js');
    (generateQuotePdf as jest.Mock).mockResolvedValue(Buffer.from('fake-pdf'));
  });

  it('returns 201 with photo data on success', async () => {
    const response = await request(app)
      .post('/api/v1/quotes/quote-1/photos')
      .attach('photo', Buffer.from('fake-image'), { filename: 'test.jpg', contentType: 'image/jpeg' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data).toHaveProperty('photoUrl');
  });

  it('returns 422 when no file is provided', async () => {
    const response = await request(app)
      .post('/api/v1/quotes/quote-1/photos')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 404 when quote is not found', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/missing-quote/photos')
      .attach('photo', Buffer.from('fake-image'), { filename: 'test.jpg', contentType: 'image/jpeg' });

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('QUOTE_NOT_FOUND');
  });

  it('returns 401 when no account is found for user', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/quote-1/photos')
      .attach('photo', Buffer.from('fake-image'), { filename: 'test.jpg', contentType: 'image/jpeg' });

    expect(response.status).toBe(401);
  });
});

describe('POST /api/v1/quotes/:id/generate-pdf', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue(mockTeamMember);
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockQuote);
    (prisma.quote.update as jest.Mock).mockResolvedValue(mockUpdatedQuote);

    const { uploadFile } = require('../services/storage-service.js');
    (uploadFile as jest.Mock).mockResolvedValue('https://storage.example.com/pdfs/quote-1.pdf');

    const { generateQuotePdf } = require('../services/pdf-service.js');
    (generateQuotePdf as jest.Mock).mockResolvedValue(Buffer.from('fake-pdf'));
  });

  it('returns 200 with pdfUrl on success', async () => {
    const response = await request(app)
      .post('/api/v1/quotes/quote-1/generate-pdf')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('pdfUrl');
  });

  it('returns 404 when quote is not found', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/missing-quote/generate-pdf')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('QUOTE_NOT_FOUND');
  });

  it('returns 401 when no account is found for user', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/quote-1/generate-pdf')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(401);
  });
});

describe('POST /api/v1/quotes/:id/send', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue(mockTeamMember);
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockQuoteWithPdf);
    (prisma.quote.update as jest.Mock).mockResolvedValue({ ...mockQuoteWithPdf, status: 'SENT' });
    (prisma.account.findUnique as jest.Mock).mockResolvedValue(mockAccount);

    const { sendSms } = require('../services/sms-service.js');
    (sendSms as jest.Mock).mockResolvedValue(undefined);
  });

  it('returns 200 with status SENT and calls sendSms on success', async () => {
    const response = await request(app)
      .post('/api/v1/quotes/quote-1/send')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.status).toBe('SENT');
    expect(response.body.data).toHaveProperty('sentAt');
    expect(response.body.data).toHaveProperty('expiresAt');
    expect(response.body.data).toHaveProperty('approvalToken');

    const { sendSms } = require('../services/sms-service.js');
    expect(sendSms).toHaveBeenCalledTimes(1);
    expect(sendSms).toHaveBeenCalledWith('+15551234567', expect.stringContaining('fixed-token-abc123'));
  });

  it('returns 422 when quote has no PDF', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(mockQuote);

    const response = await request(app)
      .post('/api/v1/quotes/quote-1/send')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 422 when quote status is APPROVED (terminal state)', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({ ...mockQuoteWithPdf, status: 'APPROVED' });

    const response = await request(app)
      .post('/api/v1/quotes/quote-1/send')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(422);
  });

  it('returns 422 when quote status is DECLINED (terminal state)', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({ ...mockQuoteWithPdf, status: 'DECLINED' });

    const response = await request(app)
      .post('/api/v1/quotes/quote-1/send')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(422);
  });

  it('returns 404 when quote is not found', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/missing-quote/send')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('QUOTE_NOT_FOUND');
  });

  it('returns 401 when no account is found for user', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/quote-1/send')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(401);
  });
});

describe('GET /api/v1/quotes/view/:token', () => {
  const mockFullQuote = {
    id: 'quote-1',
    account_id: 'account-1',
    status: 'SENT',
    subtotal: 12000,
    tax_amount: 1080,
    total: 13080,
    pdf_url: 'https://storage.example.com/pdfs/quote-1.pdf',
    approval_token: 'valid-token',
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    customer: { name: 'John Smith', phone: '+15551234567' },
    line_items: [{ description: 'HVAC Service', quantity: '1', unit_price: 12000, total: 12000, sort_order: 0 }],
    account: { id: 'account-1', businessName: 'Acme HVAC', businessLogoUrl: null, licenseNumber: 'LIC-123' },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockFullQuote);
    (prisma.quote.update as jest.Mock).mockResolvedValue({ ...mockFullQuote, status: 'VIEWED' });
  });

  it('returns 200 with full quote data and transitions SENT → VIEWED', async () => {
    const response = await request(app)
      .get('/api/v1/quotes/view/valid-token');

    expect(response.status).toBe(200);
    expect(response.body.data.quoteId).toBe('quote-1');
    expect(response.body.data.status).toBe('VIEWED');
    expect(response.body.data.businessName).toBe('Acme HVAC');
    expect(response.body.data.customerName).toBe('John Smith');
    expect(response.body.data.lineItems).toHaveLength(1);
    expect(response.body.data.total).toBe(13080);

    const { prisma } = require('../config/prisma.js');
    expect(prisma.quote.update).toHaveBeenCalledWith({
      where: { id: 'quote-1' },
      data: { status: 'VIEWED' },
    });
  });

  it('returns 404 when token does not match any quote', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .get('/api/v1/quotes/view/bad-token');

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('QUOTE_NOT_FOUND');
  });

  it('returns 410 when quote is expired', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({
      ...mockFullQuote,
      expires_at: new Date(Date.now() - 1000),
    });

    const response = await request(app)
      .get('/api/v1/quotes/view/expired-token');

    expect(response.status).toBe(410);
    expect(response.body.error.code).toBe('QUOTE_EXPIRED');
  });

  it('does not transition status when quote is already VIEWED', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({ ...mockFullQuote, status: 'VIEWED' });

    const response = await request(app)
      .get('/api/v1/quotes/view/valid-token');

    expect(response.status).toBe(200);
    expect(response.body.data.status).toBe('VIEWED');
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });
});

describe('POST /api/v1/quotes/approve/:token', () => {
  const mockSentQuoteBase = {
    id: 'quote-1',
    account_id: 'account-1',
    status: 'SENT',
    approval_token: 'valid-token',
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockSentQuoteBase);
    (prisma.quote.update as jest.Mock).mockResolvedValue({ ...mockSentQuoteBase, status: 'APPROVED' });
    (prisma.teamMember.findFirst as jest.Mock).mockResolvedValue({ pushToken: 'ExponentPushToken[xxx]' });

    const { sendPushNotification } = require('../services/notification-service.js');
    (sendPushNotification as jest.Mock).mockResolvedValue(undefined);
  });

  it('returns 200 and sends push notification on success', async () => {
    const response = await request(app)
      .post('/api/v1/quotes/approve/valid-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.status).toBe('APPROVED');

    const { sendPushNotification } = require('../services/notification-service.js');
    expect(sendPushNotification).toHaveBeenCalledWith(
      'ExponentPushToken[xxx]',
      'Quote Approved!',
      expect.any(String),
    );
  });

  it('returns 200 idempotently when already APPROVED', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({ ...mockSentQuoteBase, status: 'APPROVED' });

    const response = await request(app)
      .post('/api/v1/quotes/approve/valid-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.status).toBe('APPROVED');
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it('returns 422 when trying to approve a DECLINED quote', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({ ...mockSentQuoteBase, status: 'DECLINED' });

    const response = await request(app)
      .post('/api/v1/quotes/approve/valid-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(422);
  });

  it('returns 410 when quote is expired', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({
      ...mockSentQuoteBase,
      expires_at: new Date(Date.now() - 1000),
    });

    const response = await request(app)
      .post('/api/v1/quotes/approve/expired-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(410);
    expect(response.body.error.code).toBe('QUOTE_EXPIRED');
  });

  it('returns 404 when token not found', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/v1/quotes/approve/bad-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(404);
  });
});

describe('POST /api/v1/quotes/decline/:token', () => {
  const mockSentQuoteBase = {
    id: 'quote-1',
    account_id: 'account-1',
    status: 'SENT',
    approval_token: 'valid-token',
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockSentQuoteBase);
    (prisma.quote.update as jest.Mock).mockResolvedValue({ ...mockSentQuoteBase, status: 'DECLINED' });
    (prisma.teamMember.findFirst as jest.Mock).mockResolvedValue({ pushToken: null });

    const { sendPushNotification } = require('../services/notification-service.js');
    (sendPushNotification as jest.Mock).mockResolvedValue(undefined);
  });

  it('returns 200 and sends push notification on success', async () => {
    const response = await request(app)
      .post('/api/v1/quotes/decline/valid-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.status).toBe('DECLINED');

    const { sendPushNotification } = require('../services/notification-service.js');
    expect(sendPushNotification).toHaveBeenCalledWith(null, 'Quote Declined', expect.any(String));
  });

  it('returns 200 idempotently when already DECLINED', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({ ...mockSentQuoteBase, status: 'DECLINED' });

    const response = await request(app)
      .post('/api/v1/quotes/decline/valid-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(prisma.quote.update).not.toHaveBeenCalled();
  });

  it('returns 410 when quote is expired', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce({
      ...mockSentQuoteBase,
      expires_at: new Date(Date.now() - 1000),
    });

    const response = await request(app)
      .post('/api/v1/quotes/decline/expired-token')
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(410);
    expect(response.body.error.code).toBe('QUOTE_EXPIRED');
  });
});
