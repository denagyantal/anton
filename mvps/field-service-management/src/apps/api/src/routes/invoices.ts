import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { generateInvoiceFromJob } from '../services/invoice-service.js';
import { generateInvoicePdf } from '../services/pdf-service.js';
import { uploadFile } from '../services/storage-service.js';
import { prisma } from '../config/prisma.js';

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
