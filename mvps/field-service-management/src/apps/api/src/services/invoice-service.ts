import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/error.js';
import { syncInvoiceToQuickBooks } from './quickbooks-service.js';

export async function generateInvoiceFromJob(jobId: string, accountId: string) {
  const job = await prisma.job.findFirst({
    where: { id: jobId, accountId },
    include: {
      quote: true,
      invoice: true,
    },
  });

  if (!job) {
    throw new AppError('JOB_NOT_FOUND', 'Job not found', 404);
  }
  if (job.status !== 'COMPLETE') {
    throw new AppError('JOB_NOT_COMPLETE', 'Job must be COMPLETE to generate invoice', 422);
  }
  if (job.invoice) {
    throw new AppError('INVOICE_ALREADY_EXISTS', 'Invoice already exists for this job', 409);
  }

  const count = await prisma.invoice.count({ where: { accountId } });
  const year = new Date().getFullYear();
  const invoiceNumber = `INV-${year}-${String(count + 1).padStart(4, '0')}`;

  const subtotal = job.quote?.subtotal ?? 0;
  const taxAmount = job.quote?.tax_amount ?? 0;
  const total = job.quote?.total ?? 0;
  const dueAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const [invoice] = await prisma.$transaction([
    prisma.invoice.create({
      data: {
        accountId,
        customerId: job.customerId,
        jobId: job.id,
        quoteId: job.quoteId ?? undefined,
        invoiceNumber,
        status: 'DRAFT',
        subtotal,
        taxAmount,
        total,
        amountPaid: 0,
        dueAt,
      },
    }),
    prisma.job.update({
      where: { id: jobId },
      data: { status: 'INVOICED' },
    }),
  ]);

  syncInvoiceToQuickBooks(accountId, invoice.id).catch(err => {
    console.error('[QB] fire-and-forget invoice sync error:', err);
  });

  return invoice;
}
