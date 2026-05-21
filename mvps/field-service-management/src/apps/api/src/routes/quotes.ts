import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { prisma } from '../config/prisma.js';
import { authMiddleware } from '../middleware/auth.js';
import { AppError } from '../utils/error.js';
import { uploadFile } from '../services/storage-service.js';
import { generateQuotePdf } from '../services/pdf-service.js';
import { sendSms } from '../services/sms-service.js';
import { sendPushNotification } from '../services/notification-service.js';
import { generateToken } from '../utils/signed-url.js';

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

// POST /api/v1/quotes/:id/send
router.post(
  '/:id/send',
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
        include: { customer: true },
      });

      if (!quote) {
        next(new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404));
        return;
      }

      if (!quote.pdf_url) {
        next(new AppError('VALIDATION_ERROR', 'Quote must have a PDF before sending', 422));
        return;
      }

      if (quote.status === 'APPROVED' || quote.status === 'DECLINED') {
        next(new AppError('VALIDATION_ERROR', 'Cannot send a quote in a terminal state', 422));
        return;
      }

      const approvalToken = generateToken();
      const sentAt = new Date();
      const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

      const account = await prisma.account.findUnique({
        where: { id: accountId },
        select: { businessName: true },
      });

      await prisma.quote.update({
        where: { id: quoteId },
        data: {
          status: 'SENT',
          approval_token: approvalToken,
          sent_at: sentAt,
          expires_at: expiresAt,
        },
      });

      const businessName = account?.businessName ?? 'Your contractor';
      const webAppUrl = process.env['WEB_APP_URL'] ?? 'http://localhost:3000';
      const smsBody = `${businessName} sent you an estimate for $${(quote.total / 100).toFixed(2)}. View and approve: ${webAppUrl}/quote/${approvalToken}`;

      await sendSms(quote.customer.phone, smsBody);

      res.status(200).json({
        data: {
          status: 'SENT',
          sentAt: sentAt.toISOString(),
          expiresAt: expiresAt.toISOString(),
          approvalToken,
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

// GET /api/v1/quotes/view/:token — public, no auth required
router.get(
  '/view/:token',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = String(req.params['token']);

      const quote = await prisma.quote.findFirst({
        where: { approval_token: token },
        include: {
          customer: { select: { name: true, phone: true } },
          line_items: { orderBy: { sort_order: 'asc' } },
          account: {
            select: { id: true, businessName: true, businessLogoUrl: true, licenseNumber: true },
          },
        },
      });

      if (!quote) {
        res
          .status(404)
          .json({ error: { code: 'QUOTE_NOT_FOUND', message: 'Quote not found', status: 404 } });
        return;
      }

      if (quote.expires_at && quote.expires_at < new Date()) {
        res
          .status(410)
          .json({ error: { code: 'QUOTE_EXPIRED', message: 'This quote has expired', status: 410 } });
        return;
      }

      if (quote.status === 'SENT') {
        await prisma.quote.update({
          where: { id: quote.id },
          data: { status: 'VIEWED' },
        });
      }

      res.status(200).json({
        data: {
          quoteId: quote.id,
          status: quote.status === 'SENT' ? 'VIEWED' : quote.status,
          businessName: quote.account.businessName ?? '',
          businessLogoUrl: quote.account.businessLogoUrl ?? null,
          licenseNumber: quote.account.licenseNumber ?? null,
          customerName: quote.customer.name,
          lineItems: quote.line_items.map((li) => ({
            description: li.description,
            quantity: Number(li.quantity),
            unitPrice: li.unit_price,
            total: li.total,
          })),
          subtotal: quote.subtotal,
          taxAmount: quote.tax_amount,
          total: quote.total,
          pdfUrl: quote.pdf_url ?? null,
          expiresAt: quote.expires_at?.toISOString() ?? null,
        },
      });
    } catch (err) {
      next(err);
    }
  },
);

// POST /api/v1/quotes/approve/:token — public, no auth required
router.post(
  '/approve/:token',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = String(req.params['token']);

      const quote = await prisma.quote.findFirst({
        where: { approval_token: token },
      });

      if (!quote) {
        res
          .status(404)
          .json({ error: { code: 'QUOTE_NOT_FOUND', message: 'Quote not found', status: 404 } });
        return;
      }

      if (quote.expires_at && quote.expires_at < new Date()) {
        res
          .status(410)
          .json({ error: { code: 'QUOTE_EXPIRED', message: 'This quote has expired', status: 410 } });
        return;
      }

      if (quote.status === 'APPROVED') {
        res.status(200).json({ data: { status: 'APPROVED' } });
        return;
      }

      if (quote.status === 'DECLINED') {
        res.status(422).json({
          error: { code: 'VALIDATION_ERROR', message: 'Cannot approve a declined quote', status: 422 },
        });
        return;
      }

      await prisma.quote.update({
        where: { id: quote.id },
        data: { status: 'APPROVED', approved_at: new Date() },
      });

      const owner = await prisma.teamMember.findFirst({
        where: { accountId: quote.account_id, role: 'OWNER' },
        select: { pushToken: true },
      });

      await sendPushNotification(
        owner?.pushToken,
        'Quote Approved!',
        'A customer approved your estimate.',
      );

      res.status(200).json({ data: { status: 'APPROVED' } });
    } catch (err) {
      next(err);
    }
  },
);

// POST /api/v1/quotes/decline/:token — public, no auth required
router.post(
  '/decline/:token',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = String(req.params['token']);

      const quote = await prisma.quote.findFirst({
        where: { approval_token: token },
      });

      if (!quote) {
        res
          .status(404)
          .json({ error: { code: 'QUOTE_NOT_FOUND', message: 'Quote not found', status: 404 } });
        return;
      }

      if (quote.expires_at && quote.expires_at < new Date()) {
        res
          .status(410)
          .json({ error: { code: 'QUOTE_EXPIRED', message: 'This quote has expired', status: 410 } });
        return;
      }

      if (quote.status === 'DECLINED') {
        res.status(200).json({ data: { status: 'DECLINED' } });
        return;
      }

      if (quote.status === 'APPROVED') {
        res.status(422).json({
          error: { code: 'VALIDATION_ERROR', message: 'Cannot decline an approved quote', status: 422 },
        });
        return;
      }

      await prisma.quote.update({
        where: { id: quote.id },
        data: { status: 'DECLINED' },
      });

      const owner = await prisma.teamMember.findFirst({
        where: { accountId: quote.account_id, role: 'OWNER' },
        select: { pushToken: true },
      });

      await sendPushNotification(
        owner?.pushToken,
        'Quote Declined',
        'A customer declined your estimate.',
      );

      res.status(200).json({ data: { status: 'DECLINED' } });
    } catch (err) {
      next(err);
    }
  },
);

export const quotesRouter = router;
