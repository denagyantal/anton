import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { generateInvoiceFromJob } from '../services/invoice-service.js';
import { generateInvoicePdf } from '../services/pdf-service.js';
import { uploadFile } from '../services/storage-service.js';
import { prisma } from '../config/prisma.js';
import { sendSms } from '../services/sms-service.js';
import { generateToken } from '../utils/signed-url.js';
import { createPaymentIntent, recordOnsitePayment } from '../services/payment-service.js';
import { sendPushNotification } from '../services/notification-service.js';

export const invoicesRouter = express.Router();
invoicesRouter.use(authMiddleware);

invoicesRouter.post('/generate-from-job/:jobId', async (req, res, next) => {
  try {
    const { jobId } = req.params;
    const accountId = req.user!.accountId;

    // Idempotent: return existing invoice if already generated
    const existing = await prisma.invoice.findFirst({ where: { jobId, accountId } });
    if (existing) {
      res.status(200).json({ data: existing });
      return;
    }

    const invoice = await generateInvoiceFromJob(jobId, accountId);

    const pdfBuffer = await generateInvoicePdf(invoice.id, accountId);
    const pdfPath = `${accountId}/${invoice.id}.pdf`;
    const pdfUrl = await uploadFile('invoices', pdfPath, pdfBuffer, 'application/pdf');

    const updatedInvoice = await prisma.invoice.update({
      where: { id: invoice.id },
      data: { pdfUrl },
    });

    res.status(201).json({ data: updatedInvoice });
  } catch (err) {
    next(err);
  }
});

invoicesRouter.post('/:id/send', async (req, res, next) => {
  try {
    const { id } = req.params;
    const accountId = req.user!.accountId;

    const invoice = await prisma.invoice.findFirst({
      where: { id, accountId },
      include: {
        customer: { select: { name: true, phone: true } },
        account: { select: { businessName: true } },
      },
    });
    if (!invoice) {
      res.status(404).json({ error: { code: 'INVOICE_NOT_FOUND', message: 'Invoice not found', status: 404 } });
      return;
    }
    if (!invoice.pdfUrl) {
      res.status(422).json({ error: { code: 'PDF_NOT_GENERATED', message: 'PDF must be generated before sending', status: 422 } });
      return;
    }
    if (invoice.status === 'PAID' || invoice.status === 'PARTIALLY_PAID') {
      res.status(422).json({ error: { code: 'INVOICE_ALREADY_PAID', message: 'Invoice has already been paid', status: 422 } });
      return;
    }

    const paymentToken = generateToken();
    const sentAt = new Date();
    const webAppUrl = process.env['WEB_APP_URL'] ?? 'http://localhost:3000';
    const formattedTotal = `$${(invoice.total / 100).toFixed(2)}`;
    const businessName = invoice.account.businessName ?? 'Your service provider';

    await prisma.invoice.update({
      where: { id },
      data: { status: 'SENT', paymentToken, sentAt },
    });

    const smsBody = `${businessName} sent you an invoice for ${formattedTotal}. Pay here: ${webAppUrl}/pay/${paymentToken}`;
    await sendSms(invoice.customer.phone, smsBody);

    res.status(200).json({
      data: {
        status: 'SENT',
        sentAt: sentAt.toISOString(),
        paymentToken,
      },
    });
  } catch (err) {
    next(err);
  }
});

invoicesRouter.post('/:id/payment-intent', async (req, res, next) => {
  try {
    const { id } = req.params;
    const accountId = req.user!.accountId;

    const result = await createPaymentIntent(id, accountId);
    res.status(200).json({ data: result });
  } catch (err) {
    next(err);
  }
});

invoicesRouter.post('/:id/record-onsite-payment', async (req, res, next) => {
  try {
    const { id } = req.params;
    const accountId = req.user!.accountId;
    const { paymentIntentId } = req.body as { paymentIntentId: string };

    if (!paymentIntentId) {
      res.status(422).json({
        error: { code: 'MISSING_PAYMENT_INTENT_ID', message: 'paymentIntentId is required', status: 422 },
      });
      return;
    }

    const result = await recordOnsitePayment(id, accountId, paymentIntentId);

    if (!result.alreadyProcessed && result.payment && result.invoice && result.customer) {
      const { payment, invoice, customer } = result;
      const formattedAmount = `$${(payment.amount / 100).toFixed(2)}`;
      const invoiceLabel = invoice.invoiceNumber ?? 'invoice';

      try {
        const owner = await prisma.teamMember.findFirst({
          where: { accountId: invoice.accountId, role: 'OWNER' },
          select: { pushToken: true },
        });
        await sendPushNotification(
          owner?.pushToken,
          'Payment Received',
          `${formattedAmount} received for ${invoiceLabel}`,
        );
      } catch (notifErr) {
        console.error('[record-onsite-payment] push notification error:', notifErr);
      }

      try {
        const account = await prisma.account.findUnique({
          where: { id: invoice.accountId },
          select: { businessName: true },
        });
        const businessName = account?.businessName ?? 'Your service provider';
        await sendSms(
          customer.phone,
          `${businessName} received your payment of ${formattedAmount} for ${invoiceLabel}. Thank you!`,
        );
      } catch (smsErr) {
        console.error('[record-onsite-payment] SMS error:', smsErr);
      }
    }

    res.status(200).json({
      data: {
        alreadyProcessed: result.alreadyProcessed,
        paymentId: result.payment?.id ?? null,
        amount: result.payment?.amount ?? null,
        invoiceStatus: result.invoice?.status ?? null,
        invoiceAmountPaid: result.invoice?.amountPaid ?? null,
        invoicePaidAt: result.invoice?.paidAt?.toISOString() ?? null,
      },
    });
  } catch (err) {
    next(err);
  }
});

// Public (no auth) routes for customer-facing invoice views and payments
export const publicInvoicesRouter = express.Router();

publicInvoicesRouter.get('/view/:token', async (req, res, next) => {
  try {
    const { token } = req.params;

    const invoice = await prisma.invoice.findFirst({
      where: { paymentToken: token },
      include: {
        customer: { select: { name: true } },
        account: { select: { businessName: true, businessLogoUrl: true, licenseNumber: true } },
        job: {
          include: {
            quote: {
              include: { line_items: { orderBy: { sort_order: 'asc' } } },
            },
          },
        },
      },
    });

    if (!invoice) {
      res.status(404).json({ error: { code: 'INVOICE_NOT_FOUND', message: 'Invoice not found', status: 404 } });
      return;
    }

    if (invoice.sentAt) {
      const expiresAt = new Date(invoice.sentAt.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (new Date() > expiresAt) {
        res.status(410).json({ error: { code: 'PAYMENT_LINK_EXPIRED', message: 'This invoice payment link has expired', status: 410 } });
        return;
      }
    }

    const lineItems = invoice.job?.quote?.line_items ?? [];

    res.status(200).json({
      data: {
        invoiceId: invoice.id,
        invoiceNumber: invoice.invoiceNumber,
        status: invoice.status,
        businessName: invoice.account.businessName ?? '',
        businessLogoUrl: invoice.account.businessLogoUrl ?? null,
        customerName: invoice.customer.name,
        lineItems: lineItems.map((li) => ({
          description: li.description,
          quantity: Number(li.quantity),
          unitPrice: li.unit_price,
          total: li.total,
        })),
        subtotal: invoice.subtotal,
        taxAmount: invoice.taxAmount,
        total: invoice.total,
        amountPaid: invoice.amountPaid,
        pdfUrl: invoice.pdfUrl ?? null,
        dueAt: invoice.dueAt?.toISOString() ?? null,
      },
    });
  } catch (err) {
    next(err);
  }
});

publicInvoicesRouter.post('/pay/:token', async (req, res, next) => {
  try {
    const { token } = req.params;

    const invoice = await prisma.invoice.findFirst({
      where: { paymentToken: token },
    });

    if (!invoice) {
      res.status(404).json({ error: { code: 'INVOICE_NOT_FOUND', message: 'Invoice not found', status: 404 } });
      return;
    }

    if (invoice.sentAt) {
      const expiresAt = new Date(invoice.sentAt.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (new Date() > expiresAt) {
        res.status(410).json({ error: { code: 'PAYMENT_LINK_EXPIRED', message: 'Payment link has expired', status: 410 } });
        return;
      }
    }

    if (invoice.status === 'PAID') {
      res.status(422).json({ error: { code: 'INVOICE_ALREADY_PAID', message: 'Invoice has already been paid', status: 422 } });
      return;
    }

    const webAppUrl = process.env['WEB_APP_URL'] ?? 'http://localhost:3000';
    const { createCheckoutSession } = await import('../services/payment-service.js');
    const checkoutUrl = await createCheckoutSession(invoice.id, token, webAppUrl);

    res.status(200).json({ data: { checkoutUrl } });
  } catch (err) {
    next(err);
  }
});
