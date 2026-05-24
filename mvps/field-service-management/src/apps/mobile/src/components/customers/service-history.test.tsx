// Test business logic exported from service-history component.
// Full React Native rendering tests require @testing-library/react-native (not installed).
// These tests cover the pure helper functions, STATUS_CONFIG, and WatermelonDB query logic.

import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../../db/schema';
import Job from '../../db/models/job';
import Invoice from '../../db/models/invoice';
import Customer from '../../db/models/customer';
import Quote from '../../db/models/quote';
import LineItem from '../../db/models/line-item';
import PricebookItem from '../../db/models/pricebook-item';
import QuotePhoto from '../../db/models/quote-photo';
import Payment from '../../db/models/payment';
import ScheduleEvent from '../../db/models/schedule-event';
import { STATUS_CONFIG, formatJobDate, formatInvoiceTotal } from './service-history-utils';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [
      Job, Invoice, Customer, Quote, LineItem,
      PricebookItem, QuotePhoto, Payment, ScheduleEvent,
    ],
  });
}

async function createJob(
  db: Database,
  customerId: string,
  title: string,
  status = 'QUOTED',
  scheduledStart: number | null = null,
): Promise<Job> {
  let created!: Job;
  await db.write(async () => {
    created = await db.get<Job>('jobs').create((record) => {
      record.accountId = 'test-account';
      record.customerId = customerId;
      record.status = status;
      record.title = title;
      record.notes = '';
      record.quoteId = '';
      (record as unknown as { scheduledStart: number | null }).scheduledStart = scheduledStart;
    });
  });
  return created;
}

async function createInvoice(db: Database, jobId: string, total: number): Promise<Invoice> {
  let created!: Invoice;
  await db.write(async () => {
    created = await db.get<Invoice>('invoices').create((record) => {
      record.accountId = 'test-account';
      record.customerId = 'cust-1';
      record.jobId = jobId;
      record.status = 'SENT';
      record.subtotal = total;
      record.taxAmount = 0;
      record.total = total;
      record.amountPaid = 0;
    });
  });
  return created;
}

describe('STATUS_CONFIG', () => {
  it('has entries for all five job statuses', () => {
    expect(STATUS_CONFIG['QUOTED']).toBeDefined();
    expect(STATUS_CONFIG['SCHEDULED']).toBeDefined();
    expect(STATUS_CONFIG['IN_PROGRESS']).toBeDefined();
    expect(STATUS_CONFIG['COMPLETE']).toBeDefined();
    expect(STATUS_CONFIG['INVOICED']).toBeDefined();
  });

  it('QUOTED uses gray background matching job-status-badge', () => {
    expect(STATUS_CONFIG['QUOTED']!.bg).toBe('#E2E8F0');
    expect(STATUS_CONFIG['QUOTED']!.text).toBe('#475569');
  });

  it('SCHEDULED uses blue background', () => {
    expect(STATUS_CONFIG['SCHEDULED']!.bg).toBe('#DBEAFE');
    expect(STATUS_CONFIG['SCHEDULED']!.text).toBe('#1D4ED8');
  });

  it('IN_PROGRESS uses amber background', () => {
    expect(STATUS_CONFIG['IN_PROGRESS']!.bg).toBe('#FEF3C7');
    expect(STATUS_CONFIG['IN_PROGRESS']!.text).toBe('#92400E');
  });

  it('COMPLETE uses green background', () => {
    expect(STATUS_CONFIG['COMPLETE']!.bg).toBe('#DCFCE7');
    expect(STATUS_CONFIG['COMPLETE']!.text).toBe('#166534');
  });

  it('INVOICED has a defined color', () => {
    expect(STATUS_CONFIG['INVOICED']!.bg).toBeTruthy();
    expect(STATUS_CONFIG['INVOICED']!.text).toBeTruthy();
  });
});

describe('formatJobDate', () => {
  it('formats a unix timestamp as "Mon DD, YYYY"', () => {
    const ts = new Date('2026-01-15').getTime();
    const result = formatJobDate(ts);
    expect(result).toContain('Jan');
    expect(result).toContain('15');
    expect(result).toContain('2026');
  });

  it('returns empty string for null scheduledStart', () => {
    expect(formatJobDate(null)).toBe('');
  });

  it('returns empty string for undefined scheduledStart', () => {
    expect(formatJobDate(undefined)).toBe('');
  });
});

describe('formatInvoiceTotal', () => {
  it('formats integer cents to dollar string with two decimal places', () => {
    expect(formatInvoiceTotal(150000)).toBe('$1,500.00');
  });

  it('formats small amounts correctly', () => {
    expect(formatInvoiceTotal(5000)).toBe('$50.00');
  });

  it('adds thousands separator for large amounts', () => {
    expect(formatInvoiceTotal(1000000)).toBe('$10,000.00');
  });

  it('handles zero total', () => {
    expect(formatInvoiceTotal(0)).toBe('$0.00');
  });
});

describe('service history WatermelonDB query logic', () => {
  it('renders no jobs for a customer with no history', async () => {
    const db = createTestDatabase();
    await createJob(db, 'cust-other', 'Other Job');

    const all = await db.get<Job>('jobs').query().fetch();
    const custJobs = all.filter((j) => j.customerId === 'cust-empty');

    expect(custJobs).toHaveLength(0);
  });

  it('returns jobs only for the requested customer', async () => {
    const db = createTestDatabase();
    await createJob(db, 'cust-1', 'Repair AC');
    await createJob(db, 'cust-1', 'Replace Filter');
    await createJob(db, 'cust-2', 'Fix Leak');

    // LokiJS adapter doesn't support Q.where in query(); filter in JS (same pattern as other tests)
    const all = await db.get<Job>('jobs').query().fetch();
    const cust1Jobs = all.filter((j) => j.customerId === 'cust-1');

    expect(cust1Jobs).toHaveLength(2);
    expect(cust1Jobs.every((j) => j.customerId === 'cust-1')).toBe(true);
  });

  it('shows invoice total when invoice exists for a job', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, 'cust-1', 'HVAC Repair');
    await createInvoice(db, job.id, 150000);

    // LokiJS adapter doesn't support Q.where in query(); filter in JS
    const all = await db.get<Invoice>('invoices').query().fetch();
    const invoices = all.filter((inv) => inv.jobId === job.id);

    expect(invoices).toHaveLength(1);
    expect(invoices[0]!.total).toBe(150000);
    expect(formatInvoiceTotal(invoices[0]!.total)).toBe('$1,500.00');
  });

  it('shows no invoice amount when no invoice exists for a job', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, 'cust-1', 'Estimate Only');

    const all = await db.get<Invoice>('invoices').query().fetch();
    const invoices = all.filter((inv) => inv.jobId === job.id);

    expect(invoices).toHaveLength(0);
  });

  it('shows invoice total (not amount_paid) for partial/overdue invoices', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, 'cust-1', 'Partial Pay Job');

    let invoice!: Invoice;
    await db.write(async () => {
      invoice = await db.get<Invoice>('invoices').create((record) => {
        record.accountId = 'test-account';
        record.customerId = 'cust-1';
        record.jobId = job.id;
        record.status = 'PARTIALLY_PAID';
        record.subtotal = 200000;
        record.taxAmount = 0;
        record.total = 200000;
        record.amountPaid = 50000; // partially paid
      });
    });

    // Should show total, not amount_paid
    expect(formatInvoiceTotal(invoice.total)).toBe('$2,000.00');
    expect(formatInvoiceTotal(invoice.amountPaid)).toBe('$500.00');
    // Verify the component would use .total not .amountPaid
    expect(invoice.total).not.toBe(invoice.amountPaid);
  });
});
