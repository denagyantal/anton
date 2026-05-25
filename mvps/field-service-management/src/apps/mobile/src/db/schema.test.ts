import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from './schema';
import Customer from './models/customer';
import PricebookItem from './models/pricebook-item';
import Quote from './models/quote';
import LineItem from './models/line-item';
import QuotePhoto from './models/quote-photo';
import Job from './models/job';
import JobPhoto from './models/job-photo';
import ScheduleEvent from './models/schedule-event';
import Invoice from './models/invoice';
import Payment from './models/payment';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Customer, PricebookItem, Quote, LineItem, QuotePhoto, Job, JobPhoto, ScheduleEvent, Invoice, Payment],
  });
}

describe('schema v10 — synced_at column', () => {
  it('customers have synced_at defaulting to null', async () => {
    const db = createTestDatabase();
    let customer!: Customer;
    await db.write(async () => {
      customer = await db.get<Customer>('customers').create((r) => {
        r.accountId = 'acc1';
        r.name = 'Alice';
        r.phone = '555-0001';
        r.email = '';
        r.addressLine1 = '';
        r.addressLine2 = '';
        r.city = '';
        r.state = '';
        r.zip = '';
        r.notes = '';
        r.quickbooksCustomerId = '';
      });
    });
    // LokiJS returns undefined for unset optional fields; SQLite returns null.
    // getSyncStatus uses == null to handle both.
    expect(customer.syncedAt == null).toBe(true);
  });

  it('synced_at can be set to a timestamp via update', async () => {
    const db = createTestDatabase();
    let customer!: Customer;
    await db.write(async () => {
      customer = await db.get<Customer>('customers').create((r) => {
        r.accountId = 'acc1';
        r.name = 'Bob';
        r.phone = '555-0002';
        r.email = '';
        r.addressLine1 = '';
        r.addressLine2 = '';
        r.city = '';
        r.state = '';
        r.zip = '';
        r.notes = '';
        r.quickbooksCustomerId = '';
      });
    });
    await db.write(async () => {
      await customer.update((r) => {
        r.syncedAt = 1700000000000;
      });
    });
    const refetched = await db.get<Customer>('customers').find(customer.id);
    expect(refetched.syncedAt).toBe(1700000000000);
  });

  it('jobs have synced_at defaulting to null', async () => {
    const db = createTestDatabase();
    let job!: Job;
    await db.write(async () => {
      job = await db.get<Job>('jobs').create((r) => {
        r.accountId = 'acc1';
        r.customerId = 'cust1';
        r.status = 'QUOTED';
        r.title = 'Fix HVAC';
        r.description = '';
        r.notes = '';
      });
    });
    expect(job.syncedAt == null).toBe(true);
  });

  it('invoices have synced_at defaulting to null', async () => {
    const db = createTestDatabase();
    let invoice!: Invoice;
    await db.write(async () => {
      invoice = await db.get<Invoice>('invoices').create((r) => {
        r.accountId = 'acc1';
        r.customerId = 'cust1';
        r.status = 'DRAFT';
        r.subtotal = 10000;
        r.taxAmount = 0;
        r.total = 10000;
        r.amountPaid = 0;
      });
    });
    expect(invoice.syncedAt == null).toBe(true);
  });

  it('payments have synced_at defaulting to null', async () => {
    const db = createTestDatabase();
    let payment!: Payment;
    await db.write(async () => {
      payment = await db.get<Payment>('payments').create((r) => {
        r.accountId = 'acc1';
        r.invoiceId = 'inv1';
        r.amount = 10000;
        r.paymentMethod = 'CARD_VIA_LINK';
        r.status = 'SUCCEEDED';
      });
    });
    expect(payment.syncedAt == null).toBe(true);
  });

  it('schema is at version 10', () => {
    expect(schema.version).toBe(10);
  });
});
