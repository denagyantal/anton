import request from 'supertest';

// Mock stripe config (required because index.ts imports payments router which imports stripe)
jest.mock('../config/stripe.js', () => ({
  stripe: {
    checkout: { sessions: { create: jest.fn(), retrieve: jest.fn() } },
    webhooks: { constructEvent: jest.fn() },
  },
}));

// Mock auth middleware — inject test user
jest.mock('../middleware/auth.js', () => ({
  authMiddleware: (req: import('express').Request, _res: import('express').Response, next: import('express').NextFunction) => {
    req.user = { id: 'user-1', email: 'test@example.com', accountId: 'account-1' };
    next();
  },
}));

// Mock Prisma
jest.mock('../config/prisma.js', () => ({
  prisma: {
    scheduleEvent: {
      findMany: jest.fn().mockResolvedValue([]),
      deleteMany: jest.fn().mockResolvedValue({}),
    },
    invoice: {
      findMany: jest.fn().mockResolvedValue([]),
    },
    account: {
      findUnique: jest.fn().mockResolvedValue(null),
    },
    teamMember: {
      findUnique: jest.fn().mockResolvedValue(null),
    },
  },
}));

// Mock quickbooks-service
jest.mock('../services/quickbooks-service.js', () => ({
  getConnectionStatus: jest.fn().mockResolvedValue({ connected: false, companyName: null, realmId: null }),
  getQbSyncLog: jest.fn().mockResolvedValue([]),
  generateAuthorizationUrl: jest.fn(),
  consumeOAuthState: jest.fn(),
  exchangeCodeForTokens: jest.fn(),
  disconnectQuickBooks: jest.fn(),
  retryEntitySync: jest.fn(),
}));

// Mock SMS service (imported transitively)
jest.mock('../services/sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
}));

// Mock notification service (imported transitively)
jest.mock('../services/notification-service.js', () => ({
  sendPushNotification: jest.fn().mockResolvedValue(undefined),
  sendPushToAccount: jest.fn().mockResolvedValue(undefined),
}));

// Mock storage service (imported transitively)
jest.mock('../services/storage-service.js', () => ({
  uploadFile: jest.fn(),
}));

// Mock PDF service (imported transitively)
jest.mock('../services/pdf-service.js', () => ({
  generateQuotePdf: jest.fn(),
  generateInvoicePdf: jest.fn(),
}));

// Mock signed-url utility (imported transitively)
jest.mock('../utils/signed-url.js', () => ({
  generateToken: jest.fn().mockReturnValue('test-token'),
  verifyToken: jest.fn(),
}));

import { app } from '../index.js';
import { prisma } from '../config/prisma.js';

const mockScheduleEventFindMany = prisma.scheduleEvent.findMany as jest.Mock;
const mockInvoiceFindMany = prisma.invoice.findMany as jest.Mock;

describe('GET /api/v1/dashboard/schedule', () => {
  beforeEach(() => {
    mockScheduleEventFindMany.mockResolvedValue([]);
  });

  it('returns 200 with events array for today', async () => {
    const res = await request(app).get('/api/v1/dashboard/schedule');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('events');
    expect(Array.isArray(res.body.data.events)).toBe(true);
    expect(res.body.data).toHaveProperty('date');
  });

  it('accepts a date query parameter', async () => {
    const res = await request(app).get('/api/v1/dashboard/schedule?date=2026-03-23');
    expect(res.status).toBe(200);
    expect(res.body.data.date).toBe('2026-03-23');
  });
});

describe('GET /api/v1/dashboard/invoices', () => {
  beforeEach(() => {
    mockInvoiceFindMany.mockResolvedValue([]);
  });

  it('returns 200 with invoices array', async () => {
    const res = await request(app).get('/api/v1/dashboard/invoices');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('invoices');
    expect(Array.isArray(res.body.data.invoices)).toBe(true);
  });

  it('accepts a status query parameter', async () => {
    const res = await request(app).get('/api/v1/dashboard/invoices?status=PAID');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.invoices)).toBe(true);
  });

  it('ignores invalid status values', async () => {
    const res = await request(app).get('/api/v1/dashboard/invoices?status=INVALID');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.invoices)).toBe(true);
  });
});

describe('GET /api/v1/dashboard/sync-status', () => {
  it('returns 200 with connection status and syncLog', async () => {
    const res = await request(app).get('/api/v1/dashboard/sync-status');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('connected');
    expect(res.body.data).toHaveProperty('syncLog');
  });
});
