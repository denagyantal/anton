import request from 'supertest';
import express from 'express';
import { errorHandler } from '../middleware/error-handler.js';

// Mock supabase admin client
jest.mock('../config/supabase.js', () => ({
  supabaseAdmin: {
    auth: {
      admin: {
        createUser: jest.fn(),
        updateUserById: jest.fn(),
      },
      signInWithPassword: jest.fn(),
      refreshSession: jest.fn(),
    },
  },
}));

// Mock prisma client
jest.mock('../config/prisma.js', () => ({
  prisma: {
    account: {
      create: jest.fn(),
    },
  },
}));

import { supabaseAdmin } from '../config/supabase.js';
import { prisma } from '../config/prisma.js';
import { authRouter } from './auth.js';

const mockCreateUser = supabaseAdmin.auth.admin.createUser as jest.Mock;
const mockUpdateUserById = supabaseAdmin.auth.admin.updateUserById as jest.Mock;
const mockSignIn = supabaseAdmin.auth.signInWithPassword as jest.Mock;
const mockRefreshSession = supabaseAdmin.auth.refreshSession as jest.Mock;
const mockAccountCreate = prisma.account.create as jest.Mock;

function createTestApp() {
  const app = express();
  app.use(express.json());
  app.use('/api/v1/auth', authRouter);
  app.use(errorHandler);
  return app;
}

describe('POST /api/v1/auth/signup', () => {
  const app = createTestApp();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a user and returns 201 with session on valid signup', async () => {
    mockCreateUser.mockResolvedValue({
      data: { user: { id: 'user-1', email: 'test@example.com' } },
      error: null,
    });

    mockAccountCreate.mockResolvedValue({
      id: 'account-1',
      contactEmail: 'test@example.com',
      contactPhone: '1234567890',
      teamMembers: [{ id: 'tm-1', authUserId: 'user-1', role: 'OWNER' }],
    });

    mockUpdateUserById.mockResolvedValue({ data: {}, error: null });

    mockSignIn.mockResolvedValue({
      data: {
        user: { id: 'user-1', email: 'test@example.com' },
        session: {
          access_token: 'at-123',
          refresh_token: 'rt-456',
          expires_at: 1234567890,
        },
      },
      error: null,
    });

    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'test@example.com',
      phone: '1234567890',
      password: 'Secure1Pass',
    });

    expect(response.status).toBe(201);
    expect(response.body.data.user.id).toBe('user-1');
    expect(response.body.data.user.accountId).toBe('account-1');
    expect(response.body.data.session.accessToken).toBe('at-123');
    expect(response.body.data.session.refreshToken).toBe('rt-456');
  });

  it('returns 422 VALIDATION_ERROR for invalid email', async () => {
    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'not-an-email',
      phone: '1234567890',
      password: 'Secure1Pass',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('email');
  });

  it('returns 422 VALIDATION_ERROR for weak password (no uppercase)', async () => {
    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'test@example.com',
      phone: '1234567890',
      password: 'nouppercase1',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('uppercase');
  });

  it('returns 422 VALIDATION_ERROR for weak password (no number)', async () => {
    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'test@example.com',
      phone: '1234567890',
      password: 'NoNumberPass',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('number');
  });

  it('returns 422 VALIDATION_ERROR for short password', async () => {
    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'test@example.com',
      phone: '1234567890',
      password: 'Ab1',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('8 characters');
  });

  it('returns 422 VALIDATION_ERROR for short phone number', async () => {
    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'test@example.com',
      phone: '123',
      password: 'Secure1Pass',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('phone');
  });

  it('returns 422 when Supabase says email already exists', async () => {
    mockCreateUser.mockResolvedValue({
      data: { user: null },
      error: { message: 'A user with this email address has already been registered' },
    });

    const response = await request(app).post('/api/v1/auth/signup').send({
      email: 'existing@example.com',
      phone: '1234567890',
      password: 'Secure1Pass',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.message).toContain('already exists');
  });
});

describe('POST /api/v1/auth/login', () => {
  const app = createTestApp();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 200 with session for valid credentials', async () => {
    mockSignIn.mockResolvedValue({
      data: {
        user: {
          id: 'user-1',
          email: 'test@example.com',
          user_metadata: { account_id: 'account-1' },
        },
        session: {
          access_token: 'at-123',
          refresh_token: 'rt-456',
          expires_at: 1234567890,
        },
      },
      error: null,
    });

    const response = await request(app).post('/api/v1/auth/login').send({
      email: 'test@example.com',
      password: 'Secure1Pass',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.user.id).toBe('user-1');
    expect(response.body.data.session.accessToken).toBe('at-123');
  });

  it('returns 401 for wrong password', async () => {
    mockSignIn.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'Invalid login credentials' },
    });

    const response = await request(app).post('/api/v1/auth/login').send({
      email: 'test@example.com',
      password: 'WrongPass1',
    });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe('UNAUTHORIZED');
  });

  it('returns 422 for invalid email format', async () => {
    const response = await request(app).post('/api/v1/auth/login').send({
      email: 'not-an-email',
      password: 'Secure1Pass',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 422 for missing password', async () => {
    const response = await request(app).post('/api/v1/auth/login').send({
      email: 'test@example.com',
      password: '',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });
});

describe('POST /api/v1/auth/refresh', () => {
  const app = createTestApp();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 200 with new tokens for valid refresh token', async () => {
    mockRefreshSession.mockResolvedValue({
      data: {
        session: {
          access_token: 'new-at-123',
          refresh_token: 'new-rt-456',
          expires_at: 9999999999,
        },
        user: { id: 'user-1' },
      },
      error: null,
    });

    const response = await request(app).post('/api/v1/auth/refresh').send({
      refreshToken: 'valid-rt',
    });

    expect(response.status).toBe(200);
    expect(response.body.data.session.accessToken).toBe('new-at-123');
    expect(response.body.data.session.refreshToken).toBe('new-rt-456');
  });

  it('returns 401 for expired refresh token', async () => {
    mockRefreshSession.mockResolvedValue({
      data: { session: null, user: null },
      error: { message: 'Invalid Refresh Token: Already Used' },
    });

    const response = await request(app).post('/api/v1/auth/refresh').send({
      refreshToken: 'expired-rt',
    });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe('UNAUTHORIZED');
  });

  it('returns 422 for missing refresh token', async () => {
    const response = await request(app).post('/api/v1/auth/refresh').send({
      refreshToken: '',
    });

    expect(response.status).toBe(422);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });
});
