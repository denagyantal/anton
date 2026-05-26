import request from 'supertest';
import express from 'express';
import { errorHandler } from '../middleware/error-handler.js';

jest.mock('../config/supabase.js', () => ({
  supabaseAdmin: {
    auth: {
      getUser: jest.fn(),
      admin: {
        inviteUserByEmail: jest.fn().mockResolvedValue({ error: null }),
        deleteUser: jest.fn().mockResolvedValue({ error: null }),
      },
    },
  },
}));

jest.mock('../config/prisma.js', () => ({
  prisma: {
    teamMember: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
    accountInvite: {
      findFirst: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      deleteMany: jest.fn(),
      update: jest.fn(),
    },
    account: {
      findUnique: jest.fn(),
    },
  },
}));

import { supabaseAdmin } from '../config/supabase.js';
import { prisma } from '../config/prisma.js';
import { teamMembersRouter } from './team-members.js';
import { authRouter } from './auth.js';

const mockGetUser = supabaseAdmin.auth.getUser as jest.Mock;

function createTestApp() {
  const app = express();
  app.use(express.json());
  app.use('/api/v1/team-members', teamMembersRouter);
  app.use(errorHandler);
  return app;
}

function createAuthTestApp() {
  const app = express();
  app.use(express.json());
  app.use('/api/v1/auth', authRouter);
  app.use(errorHandler);
  return app;
}

function mockAuthUser(
  userId = 'user-1',
  accountId = 'account-1',
  email = 'owner@test.com',
) {
  mockGetUser.mockResolvedValue({
    data: {
      user: {
        id: userId,
        email,
        user_metadata: { account_id: accountId },
      },
    },
    error: null,
  });
}

describe('GET /api/v1/team-members', () => {
  let app: ReturnType<typeof createTestApp>;

  beforeEach(() => {
    jest.clearAllMocks();
    app = createTestApp();
    mockAuthUser();
  });

  it('returns 200 with members and pending invites', async () => {
    (prisma.teamMember.findMany as jest.Mock).mockResolvedValue([
      {
        id: 'tm-1',
        name: 'Owner',
        email: 'owner@test.com',
        phone: null,
        role: 'OWNER',
        createdAt: new Date('2026-03-23'),
      },
    ]);
    (prisma.accountInvite.findMany as jest.Mock).mockResolvedValue([
      {
        id: 'inv-1',
        name: 'New Tech',
        email: 'tech@test.com',
        phone: null,
        invitedAt: new Date('2026-05-01'),
        expiresAt: new Date(Date.now() + 86400000),
      },
    ]);

    const res = await request(app)
      .get('/api/v1/team-members')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(200);
    expect(res.body.data.members).toHaveLength(1);
    expect(res.body.data.members[0].name).toBe('Owner');
    expect(res.body.data.pendingInvites).toHaveLength(1);
    expect(res.body.data.pendingInvites[0].email).toBe('tech@test.com');
  });

  it('returns 401 when no auth token provided', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null }, error: { message: 'No token' } });

    const res = await request(app).get('/api/v1/team-members');
    expect(res.status).toBe(401);
  });
});

describe('POST /api/v1/team-members/invite', () => {
  let app: ReturnType<typeof createTestApp>;

  beforeEach(() => {
    jest.clearAllMocks();
    app = createTestApp();
    mockAuthUser();
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue({ role: 'OWNER' });
    (prisma.teamMember.findFirst as jest.Mock).mockResolvedValue(null);
    (prisma.accountInvite.findFirst as jest.Mock).mockResolvedValue(null);
    (prisma.accountInvite.create as jest.Mock).mockResolvedValue({ id: 'inv-new' });
  });

  it('returns 201 when invite is sent successfully', async () => {
    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Jane Tech', email: 'jane@test.com' });

    expect(res.status).toBe(201);
    expect(res.body.data.invited).toBe(true);
    expect(res.body.data.email).toBe('jane@test.com');
  });

  it('returns 403 when called by a MEMBER (non-owner)', async () => {
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue({ role: 'MEMBER' });

    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Jane Tech', email: 'jane@test.com' });

    expect(res.status).toBe(403);
    expect(res.body.error.code).toBe('FORBIDDEN');
  });

  it('returns 403 when team member record does not exist', async () => {
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue(null);

    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Jane Tech', email: 'jane@test.com' });

    expect(res.status).toBe(403);
  });

  it('returns 422 when email is already a team member', async () => {
    (prisma.teamMember.findFirst as jest.Mock).mockResolvedValue({ id: 'existing-member' });

    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Owner Again', email: 'owner@test.com' });

    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('returns 422 when pending invite already exists for email', async () => {
    (prisma.accountInvite.findFirst as jest.Mock).mockResolvedValue({ id: 'existing-invite' });

    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Jane Again', email: 'jane@test.com' });

    expect(res.status).toBe(422);
    expect(res.body.error.message).toContain('already been sent');
  });

  it('returns 422 when name is missing', async () => {
    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ email: 'jane@test.com' });

    expect(res.status).toBe(422);
  });

  it('returns 422 when email is invalid', async () => {
    const res = await request(app)
      .post('/api/v1/team-members/invite')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Jane', email: 'not-an-email' });

    expect(res.status).toBe(422);
  });
});

describe('DELETE /api/v1/team-members/:id', () => {
  let app: ReturnType<typeof createTestApp>;

  beforeEach(() => {
    jest.clearAllMocks();
    app = createTestApp();
    mockAuthUser();
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue({ id: 'owner-member-id', role: 'OWNER' });
  });

  it('returns 200 when member is removed successfully', async () => {
    (prisma.teamMember.findFirst as jest.Mock).mockResolvedValue({ id: 'tm-2', authUserId: 'auth-2' });
    (prisma.teamMember.delete as jest.Mock).mockResolvedValue({});

    const res = await request(app)
      .delete('/api/v1/team-members/tm-2')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(200);
    expect(res.body.data.removed).toBe(true);
    expect(res.body.data.id).toBe('tm-2');
  });

  it('returns 422 when owner tries to remove themselves', async () => {
    const res = await request(app)
      .delete('/api/v1/team-members/owner-member-id')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(422);
    expect(res.body.error.message).toContain('cannot remove themselves');
  });

  it('returns 403 when called by a MEMBER', async () => {
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue({ id: 'member-id', role: 'MEMBER' });

    const res = await request(app)
      .delete('/api/v1/team-members/some-id')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(403);
    expect(res.body.error.code).toBe('FORBIDDEN');
  });

  it('returns 404 when member does not exist on this account', async () => {
    (prisma.teamMember.findFirst as jest.Mock).mockResolvedValue(null);

    const res = await request(app)
      .delete('/api/v1/team-members/nonexistent-id')
      .set('Authorization', 'Bearer test-token');

    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('NOT_FOUND');
  });
});

describe('POST /api/v1/auth/register-member', () => {
  let app: ReturnType<typeof createAuthTestApp>;

  beforeEach(() => {
    jest.clearAllMocks();
    app = createAuthTestApp();
    mockAuthUser();
  });

  it('creates TeamMember for invited user and returns 201', async () => {
    (prisma.account.findUnique as jest.Mock).mockResolvedValue({ id: 'account-1' });
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue(null);
    (prisma.accountInvite.findFirst as jest.Mock).mockResolvedValue({
      id: 'inv-1',
      phone: '555-1234',
    });
    (prisma.teamMember.create as jest.Mock).mockResolvedValue({
      id: 'new-tm',
      accountId: 'account-1',
      name: 'New Tech',
      role: 'MEMBER',
    });
    (prisma.accountInvite.update as jest.Mock).mockResolvedValue({});

    const res = await request(app)
      .post('/api/v1/auth/register-member')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'New Tech' });

    expect(res.status).toBe(201);
    expect(res.body.data.role).toBe('MEMBER');
    expect(res.body.data.name).toBe('New Tech');
  });

  it('is idempotent — returns 200 if TeamMember already exists', async () => {
    (prisma.account.findUnique as jest.Mock).mockResolvedValue({ id: 'account-1' });
    (prisma.teamMember.findUnique as jest.Mock).mockResolvedValue({
      id: 'existing',
      accountId: 'account-1',
      name: 'Tech',
      role: 'MEMBER',
    });

    const res = await request(app)
      .post('/api/v1/auth/register-member')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'Tech' });

    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe('existing');
  });

  it('returns 422 when accountId is missing from user metadata', async () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: {
          id: 'user-no-account',
          email: 'noact@test.com',
          user_metadata: {},
        },
      },
      error: null,
    });

    const res = await request(app)
      .post('/api/v1/auth/register-member')
      .set('Authorization', 'Bearer test-token')
      .send({ name: 'No Account' });

    expect(res.status).toBe(422);
    expect(res.body.error.message).toContain('No account');
  });

  it('returns 422 when name is missing', async () => {
    const res = await request(app)
      .post('/api/v1/auth/register-member')
      .set('Authorization', 'Bearer test-token')
      .send({});

    expect(res.status).toBe(422);
  });
});
