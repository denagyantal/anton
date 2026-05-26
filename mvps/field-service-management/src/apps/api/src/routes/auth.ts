import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { supabaseAdmin } from '../config/supabase.js';
import { prisma } from '../config/prisma.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../utils/error.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const refreshSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

// POST /api/v1/auth/signup
router.post(
  '/signup',
  validate(signupSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, phone, password } = req.body;

      // Create Supabase auth user
      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        phone,
        password,
        email_confirm: true,
      });

      if (authError) {
        if (authError.message.includes('already')) {
          next(new AppError('VALIDATION_ERROR', 'An account with this email already exists', 422));
          return;
        }
        next(new AppError('INTERNAL_ERROR', 'Failed to create user account', 500));
        return;
      }

      // Create account and team member in database
      const account = await prisma.account.create({
        data: {
          contactEmail: email,
          contactPhone: phone,
          teamMembers: {
            create: {
              email,
              phone,
              name: email.split('@')[0],
              role: 'OWNER',
              authUserId: authData.user.id,
            },
          },
        },
        include: {
          teamMembers: true,
        },
      });

      // Update user metadata with account_id
      await supabaseAdmin.auth.admin.updateUserById(authData.user.id, {
        user_metadata: { account_id: account.id },
      });

      // Sign in to get session tokens
      const { data: sessionData, error: sessionError } =
        await supabaseAdmin.auth.signInWithPassword({
          email,
          password,
        });

      if (sessionError || !sessionData.session) {
        // User was created but session failed — still return success with user info
        res.status(201).json({
          data: {
            user: {
              id: authData.user.id,
              email: authData.user.email,
              accountId: account.id,
            },
            session: null,
          },
        });
        return;
      }

      res.status(201).json({
        data: {
          user: {
            id: authData.user.id,
            email: authData.user.email,
            accountId: account.id,
          },
          session: {
            accessToken: sessionData.session.access_token,
            refreshToken: sessionData.session.refresh_token,
            expiresAt: sessionData.session.expires_at,
          },
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

// POST /api/v1/auth/login
router.post(
  '/login',
  validate(loginSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;

      const { data, error } = await supabaseAdmin.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        next(new AppError('UNAUTHORIZED', 'Invalid email or password', 401));
        return;
      }

      res.status(200).json({
        data: {
          user: {
            id: data.user.id,
            email: data.user.email,
            accountId: data.user.user_metadata?.account_id ?? '',
          },
          session: {
            accessToken: data.session.access_token,
            refreshToken: data.session.refresh_token,
            expiresAt: data.session.expires_at,
          },
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

// POST /api/v1/auth/refresh
router.post(
  '/refresh',
  validate(refreshSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { refreshToken } = req.body;

      const { data, error } = await supabaseAdmin.auth.refreshSession({
        refresh_token: refreshToken,
      });

      if (error || !data.session) {
        next(new AppError('UNAUTHORIZED', 'Invalid or expired refresh token', 401));
        return;
      }

      res.status(200).json({
        data: {
          session: {
            accessToken: data.session.access_token,
            refreshToken: data.session.refresh_token,
            expiresAt: data.session.expires_at,
          },
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

const registerMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().optional(),
});

// POST /api/v1/auth/register-member
router.post(
  '/register-member',
  authMiddleware,
  validate(registerMemberSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, phone } = req.body as { name: string; phone?: string };
      const authUserId = req.user!.id;
      const accountId = req.user!.accountId;

      if (!accountId) {
        next(new AppError('VALIDATION_ERROR', 'No account associated with this user. Use /auth/signup instead.', 422));
        return;
      }

      const account = await prisma.account.findUnique({ where: { id: accountId } });
      if (!account) {
        next(new AppError('NOT_FOUND', 'Account not found', 404));
        return;
      }

      const existing = await prisma.teamMember.findUnique({ where: { authUserId } });
      if (existing) {
        res.status(200).json({
          data: {
            id: existing.id,
            accountId: existing.accountId,
            name: existing.name,
            role: existing.role,
          },
        });
        return;
      }

      const invite = await prisma.accountInvite.findFirst({
        where: { accountId, email: req.user!.email, acceptedAt: null, expiresAt: { gt: new Date() } },
      });

      const teamMember = await prisma.teamMember.create({
        data: {
          accountId,
          email: req.user!.email,
          phone: phone ?? invite?.phone ?? null,
          name: name || invite?.name || req.user!.email.split('@')[0]!,
          role: 'MEMBER',
          authUserId,
        },
      });

      if (invite) {
        await prisma.accountInvite.update({
          where: { id: invite.id },
          data: { acceptedAt: new Date() },
        });
      }

      res.status(201).json({
        data: {
          id: teamMember.id,
          accountId: teamMember.accountId,
          name: teamMember.name,
          role: teamMember.role,
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

export { router as authRouter };
