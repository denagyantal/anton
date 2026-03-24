import { Request, Response, NextFunction } from 'express';
import { authMiddleware } from './auth.js';

// Mock the supabase admin client
jest.mock('../config/supabase.js', () => ({
  supabaseAdmin: {
    auth: {
      getUser: jest.fn(),
    },
  },
}));

import { supabaseAdmin } from '../config/supabase.js';

const mockGetUser = supabaseAdmin.auth.getUser as jest.Mock;

function createMockReqResNext() {
  const req = {
    headers: {},
  } as Partial<Request> as Request;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as Partial<Response> as Response;

  const next = jest.fn() as NextFunction;

  return { req, res, next };
}

describe('authMiddleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 401 when Authorization header is missing', async () => {
    const { req, res, next } = createMockReqResNext();

    await authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNAUTHORIZED',
        status: 401,
      }),
    );
  });

  it('returns 401 when Authorization header does not start with Bearer', async () => {
    const { req, res, next } = createMockReqResNext();
    req.headers.authorization = 'Basic abc123';

    await authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNAUTHORIZED',
        status: 401,
      }),
    );
  });

  it('returns 401 when token is empty after Bearer', async () => {
    const { req, res, next } = createMockReqResNext();
    req.headers.authorization = 'Bearer ';

    await authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNAUTHORIZED',
        status: 401,
      }),
    );
  });

  it('returns 401 when Supabase returns an error', async () => {
    const { req, res, next } = createMockReqResNext();
    req.headers.authorization = 'Bearer invalid-token';

    mockGetUser.mockResolvedValue({
      data: { user: null },
      error: { message: 'Invalid token' },
    });

    await authMiddleware(req, res, next);

    expect(mockGetUser).toHaveBeenCalledWith('invalid-token');
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNAUTHORIZED',
        status: 401,
      }),
    );
  });

  it('returns 401 when Supabase returns no user', async () => {
    const { req, res, next } = createMockReqResNext();
    req.headers.authorization = 'Bearer some-token';

    mockGetUser.mockResolvedValue({
      data: { user: null },
      error: null,
    });

    await authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNAUTHORIZED',
        status: 401,
      }),
    );
  });

  it('sets req.user and calls next() on valid token', async () => {
    const { req, res, next } = createMockReqResNext();
    req.headers.authorization = 'Bearer valid-token';

    mockGetUser.mockResolvedValue({
      data: {
        user: {
          id: 'user-123',
          email: 'test@example.com',
          user_metadata: { account_id: 'account-456' },
        },
      },
      error: null,
    });

    await authMiddleware(req, res, next);

    expect(mockGetUser).toHaveBeenCalledWith('valid-token');
    expect(req.user).toEqual({
      id: 'user-123',
      email: 'test@example.com',
      accountId: 'account-456',
    });
    expect(next).toHaveBeenCalledWith();
  });

  it('handles Supabase throwing an exception', async () => {
    const { req, res, next } = createMockReqResNext();
    req.headers.authorization = 'Bearer crash-token';

    mockGetUser.mockRejectedValue(new Error('Network error'));

    await authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        code: 'UNAUTHORIZED',
        status: 401,
      }),
    );
  });
});
