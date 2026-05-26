// Set QuickBooks env vars before any imports
process.env['QUICKBOOKS_CLIENT_ID'] = 'test-client-id';
process.env['QUICKBOOKS_CLIENT_SECRET'] = 'test-client-secret';
process.env['QUICKBOOKS_REDIRECT_URI'] = 'https://example.com/api/v1/quickbooks/callback';
process.env['QUICKBOOKS_ENVIRONMENT'] = 'sandbox';

// Mock Stripe (required when index.ts is imported)
jest.mock('../../src/config/stripe.js', () => ({
  stripe: {
    checkout: { sessions: { create: jest.fn(), retrieve: jest.fn() } },
    webhooks: { constructEvent: jest.fn() },
  },
}));

// Mock auth middleware
jest.mock('../../src/middleware/auth.js', () => ({
  authMiddleware: jest.fn((req: any, _res: any, next: any) => {
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  }),
}));

// Mock Prisma
jest.mock('../../src/config/prisma.js', () => ({
  prisma: {
    account: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    customer: {
      findUnique: jest.fn(),
      upsert: jest.fn(),
      update: jest.fn(),
    },
    quickbooksSyncLog: {
      create: jest.fn(),
    },
  },
}));

// Mock other services that the app routes depend on
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
jest.mock('../../src/services/payment-service.js', () => ({
  createCheckoutSession: jest.fn(),
  handleCheckoutCompleted: jest.fn(),
}));

// Mock QB sync functions to isolate integration tests from real QB API calls
jest.mock('../../src/services/quickbooks-service.js', () => ({
  ...jest.requireActual('../../src/services/quickbooks-service.js'),
  syncCustomerToQuickBooks: jest.fn().mockResolvedValue(undefined),
  syncInvoiceToQuickBooks: jest.fn().mockResolvedValue(undefined),
  syncPaymentToQuickBooks: jest.fn().mockResolvedValue(undefined),
}));

import request from 'supertest';
import { app } from '../../src/index.js';

describe('GET /api/v1/quickbooks/status', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns connected: false when QB not connected', async () => {
    const { prisma } = require('../../src/config/prisma.js');
    (prisma.account.findUnique as jest.Mock).mockResolvedValue({
      quickbooksConnected: false,
      quickbooksCompanyName: null,
      quickbooksRealmId: null,
    });

    const res = await request(app)
      .get('/api/v1/quickbooks/status')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(200);
    expect(res.body.data.connected).toBe(false);
    expect(res.body.data.companyName).toBeNull();
  });

  it('returns connected: true with company name when QB connected', async () => {
    const { prisma } = require('../../src/config/prisma.js');
    (prisma.account.findUnique as jest.Mock).mockResolvedValue({
      quickbooksConnected: true,
      quickbooksCompanyName: 'Acme HVAC LLC',
      quickbooksRealmId: 'realm-123',
    });

    const res = await request(app)
      .get('/api/v1/quickbooks/status')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(200);
    expect(res.body.data.connected).toBe(true);
    expect(res.body.data.companyName).toBe('Acme HVAC LLC');
    expect(res.body.data.realmId).toBe('realm-123');
  });

  it('returns 401 when auth middleware blocks the request', async () => {
    const { authMiddleware } = require('../../src/middleware/auth.js');
    (authMiddleware as jest.Mock).mockImplementationOnce((_req: any, res: any) => {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Unauthorized', status: 401 } });
    });

    const res = await request(app).get('/api/v1/quickbooks/status');

    expect(res.status).toBe(401);
  });
});

describe('POST /api/v1/quickbooks/connect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns an authorizationUrl pointing to Intuit', async () => {
    const res = await request(app)
      .post('/api/v1/quickbooks/connect')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(200);
    expect(res.body.data.authorizationUrl).toMatch(/appcenter\.intuit\.com/);
  });

  it('returns 401 when not authenticated', async () => {
    const { authMiddleware } = require('../../src/middleware/auth.js');
    (authMiddleware as jest.Mock).mockImplementationOnce((_req: any, res: any) => {
      res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Unauthorized', status: 401 } });
    });

    const res = await request(app).post('/api/v1/quickbooks/connect');

    expect(res.status).toBe(401);
  });
});

describe('POST /api/v1/quickbooks/disconnect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('disconnects QB and returns disconnected: true', async () => {
    const { prisma } = require('../../src/config/prisma.js');
    (prisma.account.findUnique as jest.Mock).mockResolvedValue({
      quickbooksAccessToken: null,
    });
    (prisma.account.update as jest.Mock).mockResolvedValue({});

    const res = await request(app)
      .post('/api/v1/quickbooks/disconnect')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(200);
    expect(res.body.data.disconnected).toBe(true);
    expect(prisma.account.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          quickbooksConnected: false,
          quickbooksAccessToken: null,
          quickbooksRefreshToken: null,
        }),
      }),
    );
  });
});

describe('GET /api/v1/quickbooks/callback', () => {
  it('redirects to error page when state is invalid', async () => {
    const res = await request(app)
      .get('/api/v1/quickbooks/callback')
      .query({ code: 'auth-code', state: 'invalid-state', realmId: 'realm-123' });

    expect(res.status).toBe(302);
    expect(res.headers['location']).toContain('status=error');
    expect(res.headers['location']).toContain('reason=invalid_state');
  });

  it('redirects to denied page when error param present', async () => {
    const res = await request(app)
      .get('/api/v1/quickbooks/callback')
      .query({ error: 'access_denied' });

    expect(res.status).toBe(302);
    expect(res.headers['location']).toContain('status=denied');
  });

  it('redirects to error page when params are missing', async () => {
    const res = await request(app)
      .get('/api/v1/quickbooks/callback')
      .query({ code: 'auth-code' }); // missing state and realmId

    expect(res.status).toBe(302);
    expect(res.headers['location']).toContain('status=error');
    expect(res.headers['location']).toContain('reason=missing_params');
  });
});

describe('QB sync triggered on sync push', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fires syncCustomerToQuickBooks after customer upsert', async () => {
    const { prisma } = require('../../src/config/prisma.js');
    const quickbooksService = require('../../src/services/quickbooks-service.js');

    (prisma.customer.findUnique as jest.Mock).mockResolvedValue(null);
    (prisma.customer.upsert as jest.Mock).mockResolvedValue({ id: 'cust-abc' });

    await request(app)
      .post('/api/v1/sync/push')
      .set('Authorization', 'Bearer test-token')
      .send({
        changes: {
          customers: {
            created: [{ id: 'cust-abc', name: 'Alice', phone: '555-0001', updated_at: Date.now() }],
            updated: [],
            deleted: [],
          },
        },
      });

    // Fire-and-forget: give the microtask queue a tick to process
    await new Promise(resolve => setImmediate(resolve));

    expect(quickbooksService.syncCustomerToQuickBooks).toHaveBeenCalledWith(
      expect.any(String),
      'cust-abc',
    );
  });
});
