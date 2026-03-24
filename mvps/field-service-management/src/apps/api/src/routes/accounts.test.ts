import request from 'supertest';
import express from 'express';
import { errorHandler } from '../middleware/error-handler.js';

// Mock supabase admin client
jest.mock('../config/supabase.js', () => ({
  supabaseAdmin: {
    auth: {
      getUser: jest.fn(),
    },
    storage: {
      from: jest.fn(),
    },
  },
}));

// Mock prisma client
jest.mock('../config/prisma.js', () => ({
  prisma: {
    teamMember: {
      findUnique: jest.fn(),
    },
    account: {
      update: jest.fn(),
    },
  },
}));

// Mock storage service
jest.mock('../services/storage-service.js', () => ({
  uploadFile: jest.fn(),
}));

import { supabaseAdmin } from '../config/supabase.js';
import { prisma } from '../config/prisma.js';
import { uploadFile } from '../services/storage-service.js';
import { accountsRouter } from './accounts.js';

const mockGetUser = supabaseAdmin.auth.getUser as jest.Mock;
const mockFindUnique = prisma.teamMember.findUnique as jest.Mock;
const mockAccountUpdate = prisma.account.update as jest.Mock;
const mockUploadFile = uploadFile as jest.Mock;

function createTestApp() {
  const app = express();
  app.use(express.json());
  app.use('/api/v1/accounts', accountsRouter);
  app.use(errorHandler);
  return app;
}

function mockAuthUser(userId = 'user-1', accountId = 'account-1') {
  mockGetUser.mockResolvedValue({
    data: {
      user: {
        id: userId,
        email: 'test@example.com',
        user_metadata: { account_id: accountId },
      },
    },
    error: null,
  });
}

const now = new Date('2026-03-24T10:00:00Z');

describe('GET /api/v1/accounts/me', () => {
  const app = createTestApp();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 200 with account data for authenticated user', async () => {
    mockAuthUser();
    mockFindUnique.mockResolvedValue({
      authUserId: 'user-1',
      accountId: 'account-1',
      account: {
        id: 'account-1',
        businessName: 'Test Plumbing',
        businessLogoUrl: null,
        licenseNumber: 'LIC-123',
        contactEmail: 'test@example.com',
        contactPhone: '1234567890',
        tradeType: 'PLUMBING',
        createdAt: now,
        updatedAt: now,
      },
    });

    const response = await request(app)
      .get('/api/v1/accounts/me')
      .set('Authorization', 'Bearer valid-token');

    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe('account-1');
    expect(response.body.data.businessName).toBe('Test Plumbing');
    expect(response.body.data.tradeType).toBe('PLUMBING');
    expect(response.body.data.licenseNumber).toBe('LIC-123');
  });

  it('returns 401 for unauthenticated request', async () => {
    const response = await request(app).get('/api/v1/accounts/me');

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe('UNAUTHORIZED');
  });

  it('returns 404 when no team member found', async () => {
    mockAuthUser();
    mockFindUnique.mockResolvedValue(null);

    const response = await request(app)
      .get('/api/v1/accounts/me')
      .set('Authorization', 'Bearer valid-token');

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('ACCOUNT_NOT_FOUND');
  });
});

describe('PATCH /api/v1/accounts/me', () => {
  const app = createTestApp();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('updates account and returns 200 with valid data', async () => {
    mockAuthUser();
    mockFindUnique.mockResolvedValue({
      authUserId: 'user-1',
      accountId: 'account-1',
    });
    mockAccountUpdate.mockResolvedValue({
      id: 'account-1',
      businessName: 'Updated Plumbing',
      businessLogoUrl: null,
      licenseNumber: 'LIC-456',
      contactEmail: 'new@example.com',
      contactPhone: '9876543210',
      tradeType: 'PLUMBING',
      createdAt: now,
      updatedAt: now,
    });

    const response = await request(app)
      .patch('/api/v1/accounts/me')
      .set('Authorization', 'Bearer valid-token')
      .send({
        businessName: 'Updated Plumbing',
        licenseNumber: 'LIC-456',
        contactEmail: 'new@example.com',
        contactPhone: '9876543210',
        tradeType: 'PLUMBING',
      });

    expect(response.status).toBe(200);
    expect(response.body.data.businessName).toBe('Updated Plumbing');
    expect(response.body.data.tradeType).toBe('PLUMBING');
    expect(mockAccountUpdate).toHaveBeenCalledWith({
      where: { id: 'account-1' },
      data: {
        businessName: 'Updated Plumbing',
        licenseNumber: 'LIC-456',
        contactEmail: 'new@example.com',
        contactPhone: '9876543210',
        tradeType: 'PLUMBING',
      },
    });
  });

  it('returns 422 when businessName is missing', async () => {
    mockAuthUser();

    const response = await request(app)
      .patch('/api/v1/accounts/me')
      .set('Authorization', 'Bearer valid-token')
      .send({
        tradeType: 'HVAC',
      });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 422 for invalid tradeType', async () => {
    mockAuthUser();

    const response = await request(app)
      .patch('/api/v1/accounts/me')
      .set('Authorization', 'Bearer valid-token')
      .send({
        businessName: 'Test Co',
        tradeType: 'CARPENTRY',
      });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('Trade type');
  });

  it('returns 401 for unauthenticated request', async () => {
    const response = await request(app)
      .patch('/api/v1/accounts/me')
      .send({
        businessName: 'Test Co',
        tradeType: 'HVAC',
      });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe('UNAUTHORIZED');
  });

  it('updates with optional fields omitted', async () => {
    mockAuthUser();
    mockFindUnique.mockResolvedValue({
      authUserId: 'user-1',
      accountId: 'account-1',
    });
    mockAccountUpdate.mockResolvedValue({
      id: 'account-1',
      businessName: 'Minimal Co',
      businessLogoUrl: null,
      licenseNumber: null,
      contactEmail: null,
      contactPhone: null,
      tradeType: 'ELECTRICAL',
      createdAt: now,
      updatedAt: now,
    });

    const response = await request(app)
      .patch('/api/v1/accounts/me')
      .set('Authorization', 'Bearer valid-token')
      .send({
        businessName: 'Minimal Co',
        tradeType: 'ELECTRICAL',
      });

    expect(response.status).toBe(200);
    expect(response.body.data.businessName).toBe('Minimal Co');
    expect(response.body.data.tradeType).toBe('ELECTRICAL');
  });
});

describe('POST /api/v1/accounts/me/logo', () => {
  const app = createTestApp();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('uploads logo and returns 200 with logoUrl', async () => {
    mockAuthUser();
    mockFindUnique.mockResolvedValue({
      authUserId: 'user-1',
      accountId: 'account-1',
    });
    mockUploadFile.mockResolvedValue('https://storage.example.com/logos/account-1/logo.png');
    mockAccountUpdate.mockResolvedValue({
      id: 'account-1',
      businessLogoUrl: 'https://storage.example.com/logos/account-1/logo.png',
    });

    const response = await request(app)
      .post('/api/v1/accounts/me/logo')
      .set('Authorization', 'Bearer valid-token')
      .attach('logo', Buffer.from('fake-image-data'), {
        filename: 'logo.png',
        contentType: 'image/png',
      });

    expect(response.status).toBe(200);
    expect(response.body.data.logoUrl).toBe(
      'https://storage.example.com/logos/account-1/logo.png',
    );
    expect(mockUploadFile).toHaveBeenCalledWith(
      'logos',
      'account-1/logo.png',
      expect.any(Buffer),
      'image/png',
    );
  });

  it('returns 401 for unauthenticated request', async () => {
    const response = await request(app)
      .post('/api/v1/accounts/me/logo')
      .attach('logo', Buffer.from('fake'), {
        filename: 'logo.png',
        contentType: 'image/png',
      });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe('UNAUTHORIZED');
  });

  it('returns 422 when no file is uploaded', async () => {
    mockAuthUser();

    const response = await request(app)
      .post('/api/v1/accounts/me/logo')
      .set('Authorization', 'Bearer valid-token');

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('No file');
  });
});
