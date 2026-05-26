import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { supabaseAdmin } from '../config/supabase.js';
import { authMiddleware } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../utils/error.js';

const router = Router();
router.use(authMiddleware);

const inviteSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
});

// GET /api/v1/team-members
router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;

    const [members, pendingInvites] = await Promise.all([
      prisma.teamMember.findMany({
        where: { accountId },
        select: { id: true, name: true, email: true, phone: true, role: true, createdAt: true },
        orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
      }),
      prisma.accountInvite.findMany({
        where: { accountId, acceptedAt: null, expiresAt: { gt: new Date() } },
        select: { id: true, name: true, email: true, phone: true, invitedAt: true, expiresAt: true },
        orderBy: { invitedAt: 'desc' },
      }),
    ]);

    res.json({
      data: {
        members: members.map((m) => ({ ...m, createdAt: m.createdAt.toISOString() })),
        pendingInvites: pendingInvites.map((i) => ({
          ...i,
          invitedAt: i.invitedAt.toISOString(),
          expiresAt: i.expiresAt.toISOString(),
        })),
      },
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/v1/team-members/invite (OWNER only)
router.post(
  '/invite',
  validate(inviteSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accountId = req.user!.accountId;
      const { name, email, phone } = req.body as { name: string; email: string; phone?: string };

      const requestingMember = await prisma.teamMember.findUnique({
        where: { authUserId: req.user!.id },
        select: { role: true },
      });
      if (!requestingMember || requestingMember.role !== 'OWNER') {
        next(new AppError('FORBIDDEN', 'Only account owners can invite team members', 403));
        return;
      }

      const existingMember = await prisma.teamMember.findFirst({ where: { accountId, email } });
      if (existingMember) {
        next(new AppError('VALIDATION_ERROR', 'This email is already a team member on this account', 422));
        return;
      }

      const existingInvite = await prisma.accountInvite.findFirst({
        where: { accountId, email, acceptedAt: null, expiresAt: { gt: new Date() } },
      });
      if (existingInvite) {
        next(new AppError('VALIDATION_ERROR', 'An invite has already been sent to this email', 422));
        return;
      }

      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30);

      await prisma.accountInvite.create({
        data: { accountId, email, name, phone: phone ?? null, expiresAt },
      });

      const appUrl = process.env['APP_URL'] ?? 'http://localhost:3000';
      const { error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        data: { account_id: accountId, name, phone: phone ?? null },
        redirectTo: `${appUrl}/accept-invite`,
      });

      if (error && !error.message.toLowerCase().includes('already')) {
        await prisma.accountInvite.deleteMany({
          where: { accountId, email, acceptedAt: null },
        });
        next(new AppError('INTERNAL_ERROR', 'Failed to send invite email', 500));
        return;
      }

      res.status(201).json({ data: { invited: true, email, name } });
    } catch (err) {
      next(err);
    }
  },
);

// DELETE /api/v1/team-members/:id (OWNER only, cannot remove self)
router.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;
    const id = req.params['id'] as string;

    const requestingMember = await prisma.teamMember.findUnique({
      where: { authUserId: req.user!.id },
      select: { id: true, role: true },
    });
    if (!requestingMember || requestingMember.role !== 'OWNER') {
      next(new AppError('FORBIDDEN', 'Only account owners can remove team members', 403));
      return;
    }

    if (requestingMember.id === id) {
      next(new AppError('VALIDATION_ERROR', 'Account owner cannot remove themselves', 422));
      return;
    }

    const memberToRemove = await prisma.teamMember.findFirst({
      where: { id, accountId },
      select: { id: true, authUserId: true },
    });
    if (!memberToRemove) {
      next(new AppError('NOT_FOUND', 'Team member not found', 404));
      return;
    }

    await prisma.teamMember.delete({ where: { id } });

    supabaseAdmin.auth.admin.deleteUser(memberToRemove.authUserId).catch(() => {});

    res.status(200).json({ data: { removed: true, id } });
  } catch (err) {
    next(err);
  }
});

export { router as teamMembersRouter };
