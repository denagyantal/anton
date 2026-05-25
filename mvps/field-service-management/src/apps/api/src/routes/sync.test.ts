import request from 'supertest';

// Mock stripe config (needed because index.ts imports payments router)
jest.mock('../config/stripe.js', () => ({
  stripe: {
    checkout: { sessions: { create: jest.fn(), retrieve: jest.fn() } },
    webhooks: { constructEvent: jest.fn() },
  },
}));

// Mock auth middleware — sets req.user for authenticated requests
// Uses a flag so individual tests can simulate 401
let mockAuthShouldFail = false;
jest.mock('../middleware/auth.js', () => ({
  authMiddleware: (
    req: import('express').Request,
    _res: import('express').Response,
    next: import('express').NextFunction,
  ) => {
    if (mockAuthShouldFail) {
      const { AppError } = require('../utils/error.js');
      next(new AppError('UNAUTHORIZED', 'Missing or invalid authorization header', 401));
      return;
    }
    req.user = { id: 'user-1', email: 'test@test.com', accountId: 'account-1' };
    next();
  },
}));

// Mock sync service
jest.mock('../services/sync-service.js', () => ({
  pullChanges: jest.fn(),
  pushChanges: jest.fn(),
}));

// Mock Prisma
jest.mock('../config/prisma.js', () => ({
  prisma: {
    teamMember: { findUnique: jest.fn(), findFirst: jest.fn(), update: jest.fn() },
    quote: { findFirst: jest.fn(), update: jest.fn() },
    quotePhoto: { create: jest.fn() },
    account: { findUnique: jest.fn() },
    customer: { findMany: jest.fn() },
    job: { findMany: jest.fn() },
    invoice: { findMany: jest.fn() },
    payment: { findMany: jest.fn() },
    lineItem: { findMany: jest.fn() },
    scheduleEvent: { findMany: jest.fn() },
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

// Mock signed-url utility
jest.mock('../utils/signed-url.js', () => ({
  generateToken: jest.fn().mockReturnValue('fixed-token-abc123'),
}));

import { app } from '../index.js';
import { pullChanges, pushChanges } from '../services/sync-service.js';

const mockPullResult = {
  changes: {
    customers: { created: [], updated: [], deleted: [] },
    quotes: { created: [], updated: [], deleted: [] },
    line_items: { created: [], updated: [], deleted: [] },
    jobs: { created: [], updated: [], deleted: [] },
    schedule_events: { created: [], updated: [], deleted: [] },
    invoices: { created: [], updated: [], deleted: [] },
    payments: { created: [], updated: [], deleted: [] },
  },
  timestamp: 1716912000000,
};

describe('POST /api/v1/sync/pull', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockAuthShouldFail = false;
    (pullChanges as jest.Mock).mockResolvedValue(mockPullResult);
  });

  it('returns 200 with changes and timestamp on success', async () => {
    const response = await request(app)
      .post('/api/v1/sync/pull')
      .set('Content-Type', 'application/json')
      .send({ lastPulledAt: null });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('changes');
    expect(response.body.data).toHaveProperty('timestamp');
    expect(response.body.data.timestamp).toBe(1716912000000);
  });

  it('calls pullChanges with correct accountId from JWT', async () => {
    await request(app)
      .post('/api/v1/sync/pull')
      .set('Content-Type', 'application/json')
      .send({ lastPulledAt: 1716900000000 });

    expect(pullChanges).toHaveBeenCalledWith({
      lastPulledAt: 1716900000000,
      accountId: 'account-1',
    });
  });

  it('accepts lastPulledAt as null for initial sync', async () => {
    const response = await request(app)
      .post('/api/v1/sync/pull')
      .set('Content-Type', 'application/json')
      .send({ lastPulledAt: null });

    expect(response.status).toBe(200);
    expect(pullChanges).toHaveBeenCalledWith({
      lastPulledAt: null,
      accountId: 'account-1',
    });
  });

  it('returns 422 when lastPulledAt is missing from body', async () => {
    const response = await request(app)
      .post('/api/v1/sync/pull')
      .set('Content-Type', 'application/json')
      .send({});

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 401 when auth fails', async () => {
    mockAuthShouldFail = true;

    const response = await request(app)
      .post('/api/v1/sync/pull')
      .set('Content-Type', 'application/json')
      .send({ lastPulledAt: null });

    expect(response.status).toBe(401);
  });
});

describe('POST /api/v1/sync/push', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockAuthShouldFail = false;
    (pushChanges as jest.Mock).mockResolvedValue(undefined);
  });

  it('returns 200 with empty data object on success', async () => {
    const response = await request(app)
      .post('/api/v1/sync/push')
      .set('Content-Type', 'application/json')
      .send({
        changes: {
          customers: {
            created: [],
            updated: [{ id: 'cust-1', name: 'Alice', updated_at: 1716900000000 }],
            deleted: [],
          },
        },
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: {} });
  });

  it('calls pushChanges with correct accountId from JWT', async () => {
    const changes = {
      customers: {
        created: [],
        updated: [{ id: 'cust-1', name: 'Alice', updated_at: 1716900000000 }],
        deleted: [],
      },
    };

    await request(app)
      .post('/api/v1/sync/push')
      .set('Content-Type', 'application/json')
      .send({ changes });

    expect(pushChanges).toHaveBeenCalledWith({
      changes: expect.objectContaining({
        customers: expect.objectContaining({ updated: expect.any(Array) }),
      }),
      accountId: 'account-1',
    });
  });

  it('accepts empty changes object', async () => {
    const response = await request(app)
      .post('/api/v1/sync/push')
      .set('Content-Type', 'application/json')
      .send({ changes: {} });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: {} });
  });

  it('accepts missing changes (defaults to empty object)', async () => {
    const response = await request(app)
      .post('/api/v1/sync/push')
      .set('Content-Type', 'application/json')
      .send({});

    expect(response.status).toBe(200);
  });

  it('returns 401 when auth fails', async () => {
    mockAuthShouldFail = true;

    const response = await request(app)
      .post('/api/v1/sync/push')
      .set('Content-Type', 'application/json')
      .send({ changes: {} });

    expect(response.status).toBe(401);
  });
});
