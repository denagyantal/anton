import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { prisma } from '../config/prisma.js';
import { authMiddleware } from '../middleware/auth.js';
import { AppError } from '../utils/error.js';
import { uploadFile } from '../services/storage-service.js';
import { generateQuotePdf } from '../services/pdf-service.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

async function getAccountId(userId: string): Promise<string | null> {
  const teamMember = await prisma.teamMember.findUnique({
    where: { authUserId: userId },
    select: { accountId: true },
  });
  return teamMember?.accountId ?? null;
}

// POST /api/v1/quotes/:id/photos
router.post(
  '/:id/photos',
  authMiddleware,
  upload.single('photo'),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accountId = await getAccountId(req.user!.id);
      if (!accountId) {
        next(new AppError('UNAUTHORIZED', 'No account found for user', 401));
        return;
      }

      const quoteId = String(req.params['id']);
      const quote = await prisma.quote.findFirst({
        where: { id: quoteId, account_id: accountId },
      });

      if (!quote) {
        next(new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404));
        return;
      }

      if (!req.file) {
        next(new AppError('VALIDATION_ERROR', 'No photo file provided', 422));
        return;
      }

      const storagePath = `quotes/${accountId}/${quoteId}/${Date.now()}.jpg`;
      const photoUrl = await uploadFile('photos', storagePath, req.file.buffer, 'image/jpeg');

      const caption = typeof req.body['caption'] === 'string' ? req.body['caption'] : '';
      const takenAt = req.body['takenAt'] ? new Date(req.body['takenAt'] as string) : null;

      const quotePhoto = await prisma.quotePhoto.create({
        data: {
          quote_id: quoteId,
          photo_url: photoUrl,
          caption: caption || null,
          taken_at: takenAt,
        },
      });

      res.status(201).json({
        data: {
          id: quotePhoto.id,
          photoUrl: quotePhoto.photo_url,
          caption: quotePhoto.caption,
          takenAt: quotePhoto.taken_at?.toISOString() ?? null,
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

// POST /api/v1/quotes/:id/generate-pdf
router.post(
  '/:id/generate-pdf',
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accountId = await getAccountId(req.user!.id);
      if (!accountId) {
        next(new AppError('UNAUTHORIZED', 'No account found for user', 401));
        return;
      }

      const quoteId = String(req.params['id']);
      const quote = await prisma.quote.findFirst({
        where: { id: quoteId, account_id: accountId },
      });

      if (!quote) {
        next(new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404));
        return;
      }

      const pdfBuffer = await generateQuotePdf(quoteId, accountId);

      const storagePath = `quotes/${accountId}/${quoteId}.pdf`;
      const publicUrl = await uploadFile('pdfs', storagePath, pdfBuffer, 'application/pdf');

      await prisma.quote.update({
        where: { id: quoteId },
        data: { pdf_url: publicUrl },
      });

      res.status(200).json({
        data: { pdfUrl: publicUrl },
      });
    } catch (err) {
      next(err);
    }
  },
);

export const quotesRouter = router;
