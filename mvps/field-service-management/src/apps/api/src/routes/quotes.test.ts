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
    },
    quote: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    quotePhoto: {
      create: jest.fn(),
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

import { app } from '../index.js';

const mockTeamMember = { accountId: 'account-1' };
const mockQuote = { id: 'quote-1', account_id: 'account-1', pdf_url: null };
const mockQuotePhoto = {
  id: 'photo-1',
  photo_url: 'https://storage.example.com/photos/quote-1/photo.jpg',
  caption: null,
  taken_at: null,
};
const mockUpdatedQuote = { id: 'quote-1', pdf_url: 'https://storage.example.com/pdfs/quote-1.pdf' };

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
