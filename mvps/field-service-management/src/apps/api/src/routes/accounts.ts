import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import multer from 'multer';
import path from 'path';
import { prisma } from '../config/prisma.js';
import { authMiddleware } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { AppError } from '../utils/error.js';
import { uploadFile } from '../services/storage-service.js';

const router = Router();

// Apply auth middleware to all account routes
router.use(authMiddleware);

const accountUpdateSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  licenseNumber: z.string().optional(),
  contactEmail: z.string().email('Invalid email address').optional(),
  contactPhone: z.string().optional(),
  tradeType: z.enum(['HVAC', 'PLUMBING', 'ELECTRICAL'], {
    error: 'Trade type must be one of: HVAC, PLUMBING, ELECTRICAL',
  }),
});

// GET /api/v1/accounts/me
router.get('/me', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const teamMember = await prisma.teamMember.findUnique({
      where: { authUserId: req.user!.id },
      include: { account: true },
    });

    if (!teamMember || !teamMember.account) {
      next(new AppError('ACCOUNT_NOT_FOUND', 'No account found for this user', 404));
      return;
    }

    const account = teamMember.account;

    res.status(200).json({
      data: {
        id: account.id,
        businessName: account.businessName,
        businessLogoUrl: account.businessLogoUrl,
        licenseNumber: account.licenseNumber,
        contactEmail: account.contactEmail,
        contactPhone: account.contactPhone,
        tradeType: account.tradeType,
        createdAt: account.createdAt.toISOString(),
        updatedAt: account.updatedAt.toISOString(),
      },
    });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/v1/accounts/me
router.patch(
  '/me',
  validate(accountUpdateSchema),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { businessName, licenseNumber, contactEmail, contactPhone, tradeType } = req.body;

      const teamMember = await prisma.teamMember.findUnique({
        where: { authUserId: req.user!.id },
      });

      if (!teamMember) {
        next(new AppError('ACCOUNT_NOT_FOUND', 'No account found for this user', 404));
        return;
      }

      const updatedAccount = await prisma.account.update({
        where: { id: teamMember.accountId },
        data: {
          businessName,
          licenseNumber: licenseNumber ?? null,
          contactEmail: contactEmail ?? null,
          contactPhone: contactPhone ?? null,
          tradeType,
        },
      });

      res.status(200).json({
        data: {
          id: updatedAccount.id,
          businessName: updatedAccount.businessName,
          businessLogoUrl: updatedAccount.businessLogoUrl,
          licenseNumber: updatedAccount.licenseNumber,
          contactEmail: updatedAccount.contactEmail,
          contactPhone: updatedAccount.contactPhone,
          tradeType: updatedAccount.tradeType,
          createdAt: updatedAccount.createdAt.toISOString(),
          updatedAt: updatedAccount.updatedAt.toISOString(),
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

// Multer config for logo upload — 5MB max, image/* only
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new AppError('VALIDATION_ERROR', 'Only image files are allowed', 422) as unknown as Error);
      return;
    }
    cb(null, true);
  },
});

// POST /api/v1/accounts/me/logo
router.post(
  '/me/logo',
  upload.single('logo'),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.file) {
        next(new AppError('VALIDATION_ERROR', 'No file uploaded', 422));
        return;
      }

      const teamMember = await prisma.teamMember.findUnique({
        where: { authUserId: req.user!.id },
      });

      if (!teamMember) {
        next(new AppError('ACCOUNT_NOT_FOUND', 'No account found for this user', 404));
        return;
      }

      const ext = path.extname(req.file.originalname || '.png').slice(1) || 'png';
      const storagePath = `${teamMember.accountId}/logo.${ext}`;

      const logoUrl = await uploadFile('logos', storagePath, req.file.buffer, req.file.mimetype);

      await prisma.account.update({
        where: { id: teamMember.accountId },
        data: { businessLogoUrl: logoUrl },
      });

      res.status(200).json({
        data: { logoUrl },
      });
    } catch (err) {
      next(err);
    }
  },
);

export { router as accountsRouter };
