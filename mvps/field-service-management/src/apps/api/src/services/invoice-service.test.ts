// Mock Prisma with factory to avoid hoisting issues
jest.mock('../config/prisma.js', () => ({
  prisma: {
    job: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    invoice: {
      count: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    $transaction: jest.fn(),
  },
}));

import { generateInvoiceFromJob } from './invoice-service.js';
import { AppError } from '../utils/error.js';

type PrismaMock = {
  job: {
    findFirst: jest.Mock;
    update: jest.Mock;
  };
  invoice: {
    count: jest.Mock;
    create: jest.Mock;
    update: jest.Mock;
  };
  $transaction: jest.Mock;
};

const year = new Date().getFullYear();

const mockJob = {
  id: 'job-1',
  accountId: 'account-1',
  customerId: 'customer-1',
  quoteId: 'quote-1',
  status: 'COMPLETE',
  quote: {
    subtotal: 30000,
    tax_amount: 2400,
    total: 32400,
  },
  invoice: null,
};

const mockInvoice = {
  id: 'invoice-1',
  accountId: 'account-1',
  customerId: 'customer-1',
  jobId: 'job-1',
  quoteId: 'quote-1',
  invoiceNumber: `INV-${year}-0001`,
  status: 'DRAFT',
  subtotal: 30000,
  taxAmount: 2400,
  total: 32400,
  amountPaid: 0,
  dueAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
};

describe('generateInvoiceFromJob', () => {
  let prisma: PrismaMock;

  beforeEach(() => {
    jest.clearAllMocks();
    prisma = require('../config/prisma.js').prisma as PrismaMock;

    prisma.job.findFirst.mockResolvedValue(mockJob);
    prisma.invoice.count.mockResolvedValue(0);
    prisma.$transaction.mockImplementation(async (ops: unknown[]) => {
      const results = await Promise.all(ops.map((op) => op));
      return results;
    });
    prisma.invoice.create.mockResolvedValue(mockInvoice);
    prisma.job.update.mockResolvedValue({ ...mockJob, status: 'INVOICED' });
  });

  it('creates invoice with correct totals from quote and transitions job to INVOICED', async () => {
    const result = await generateInvoiceFromJob('job-1', 'account-1');

    expect(prisma.invoice.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          subtotal: 30000,
          taxAmount: 2400,
          total: 32400,
          status: 'DRAFT',
          amountPaid: 0,
          accountId: 'account-1',
          customerId: 'customer-1',
          jobId: 'job-1',
          quoteId: 'quote-1',
        }),
      }),
    );
    expect(prisma.job.update).toHaveBeenCalledWith({
      where: { id: 'job-1' },
      data: { status: 'INVOICED' },
    });
    expect(result).toEqual(mockInvoice);
  });

  it('formats invoice number as INV-{year}-{NNNN} based on count', async () => {
    prisma.invoice.count.mockResolvedValue(0);
    await generateInvoiceFromJob('job-1', 'account-1');
    expect(prisma.invoice.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          invoiceNumber: `INV-${year}-0001`,
        }),
      }),
    );
  });

  it('pads invoice number to 4 digits (count=9 → 0010)', async () => {
    prisma.invoice.count.mockResolvedValue(9);
    await generateInvoiceFromJob('job-1', 'account-1');
    expect(prisma.invoice.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          invoiceNumber: `INV-${year}-0010`,
        }),
      }),
    );
  });

  it('throws JOB_NOT_FOUND (404) when job does not exist', async () => {
    prisma.job.findFirst.mockResolvedValue(null);

    await expect(generateInvoiceFromJob('nonexistent', 'account-1')).rejects.toMatchObject({
      code: 'JOB_NOT_FOUND',
      status: 404,
    });
  });

  it('throws JOB_NOT_COMPLETE (422) when job status is IN_PROGRESS', async () => {
    prisma.job.findFirst.mockResolvedValue({ ...mockJob, status: 'IN_PROGRESS' });

    await expect(generateInvoiceFromJob('job-1', 'account-1')).rejects.toMatchObject({
      code: 'JOB_NOT_COMPLETE',
      status: 422,
    });
  });

  it('throws INVOICE_ALREADY_EXISTS (409) when job already has an invoice', async () => {
    prisma.job.findFirst.mockResolvedValue({
      ...mockJob,
      invoice: { id: 'existing-invoice' },
    });

    await expect(generateInvoiceFromJob('job-1', 'account-1')).rejects.toMatchObject({
      code: 'INVOICE_ALREADY_EXISTS',
      status: 409,
    });
  });

  it('defaults totals to 0 when job has no linked quote', async () => {
    prisma.job.findFirst.mockResolvedValue({ ...mockJob, quoteId: null, quote: null });

    await generateInvoiceFromJob('job-1', 'account-1');

    expect(prisma.invoice.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          subtotal: 0,
          taxAmount: 0,
          total: 0,
          quoteId: undefined,
        }),
      }),
    );
  });

  it('uses $transaction for atomicity', async () => {
    await generateInvoiceFromJob('job-1', 'account-1');
    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    expect(prisma.$transaction).toHaveBeenCalledWith(
      expect.arrayContaining([expect.anything(), expect.anything()]),
    );
  });
});
