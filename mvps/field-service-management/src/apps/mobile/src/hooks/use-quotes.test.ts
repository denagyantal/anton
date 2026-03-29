import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { Q } from '@nozbe/watermelondb';
import { schema } from '../db/schema';
import Quote from '../db/models/quote';
import LineItem from '../db/models/line-item';
import Customer from '../db/models/customer';
import PricebookItem from '../db/models/pricebook-item';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Quote, LineItem, Customer, PricebookItem],
  });
}

async function createQuote(
  db: Database,
  data: {
    accountId?: string;
    customerId?: string;
    status?: string;
    subtotal?: number;
    taxAmount?: number;
    total?: number;
    notes?: string;
  },
): Promise<Quote> {
  let quote: Quote | null = null;
  await db.write(async () => {
    quote = await db.get<Quote>('quotes').create((record) => {
      record.accountId = data.accountId ?? 'test-account';
      record.customerId = data.customerId ?? 'cust-1';
      record.status = data.status ?? 'DRAFT';
      record.subtotal = data.subtotal ?? 0;
      record.taxAmount = data.taxAmount ?? 0;
      record.total = data.total ?? 0;
      record.notes = data.notes ?? '';
    });
  });
  return quote!;
}

async function createLineItem(
  db: Database,
  data: {
    quoteId: string;
    description?: string;
    quantity?: number;
    unitPrice?: number;
    total?: number;
    sortOrder?: number;
    pricebookItemId?: string;
  },
): Promise<LineItem> {
  let lineItem: LineItem | null = null;
  await db.write(async () => {
    lineItem = await db.get<LineItem>('line_items').create((record) => {
      record.quoteId = data.quoteId;
      record.description = data.description ?? 'Test item';
      record.quantity = data.quantity ?? 1;
      record.unitPrice = data.unitPrice ?? 1000;
      record.total = data.total ?? 1000;
      record.sortOrder = data.sortOrder ?? 0;
      record.pricebookItemId = data.pricebookItemId ?? '';
    });
  });
  return lineItem!;
}

describe('Quote WatermelonDB operations', () => {
  describe('quote creation', () => {
    it('creates a quote record with all fields', async () => {
      const db = createTestDatabase();

      await db.write(async () => {
        await db.get<Quote>('quotes').create((record) => {
          record.accountId = 'acc-1';
          record.customerId = 'cust-1';
          record.status = 'DRAFT';
          record.subtotal = 10000;
          record.taxAmount = 850;
          record.total = 10850;
          record.notes = 'Test quote';
        });
      });

      const quotes = await db.get<Quote>('quotes').query().fetch();
      expect(quotes).toHaveLength(1);

      const quote = quotes[0]!;
      expect(quote.accountId).toBe('acc-1');
      expect(quote.customerId).toBe('cust-1');
      expect(quote.status).toBe('DRAFT');
      expect(quote.subtotal).toBe(10000);
      expect(quote.taxAmount).toBe(850);
      expect(quote.total).toBe(10850);
      expect(quote.notes).toBe('Test quote');
      expect(quote.id).toBeTruthy();
    });

    it('generates UUID id by default', async () => {
      const db = createTestDatabase();
      const quote = await createQuote(db, {});
      expect(quote.id).toBeTruthy();
      expect(typeof quote.id).toBe('string');
      expect(quote.id.length).toBeGreaterThan(0);
    });
  });

  describe('quote retrieval by account', () => {
    it('returns all quotes for an account', async () => {
      const db = createTestDatabase();
      await createQuote(db, { accountId: 'acc-1', status: 'DRAFT' });
      await createQuote(db, { accountId: 'acc-1', status: 'SENT' });
      await createQuote(db, { accountId: 'acc-2', status: 'DRAFT' });

      const acc1Quotes = await db
        .get<Quote>('quotes')
        .query(Q.where('account_id', 'acc-1'))
        .fetch();
      expect(acc1Quotes).toHaveLength(2);
    });

    it('filters quotes by status (DRAFT only)', async () => {
      const db = createTestDatabase();
      await createQuote(db, { accountId: 'acc-1', status: 'DRAFT' });
      await createQuote(db, { accountId: 'acc-1', status: 'SENT' });
      await createQuote(db, { accountId: 'acc-1', status: 'APPROVED' });

      const drafts = await db
        .get<Quote>('quotes')
        .query(Q.where('account_id', 'acc-1'), Q.where('status', 'DRAFT'))
        .fetch();
      expect(drafts).toHaveLength(1);
      expect(drafts[0]!.status).toBe('DRAFT');
    });
  });

  describe('line item operations', () => {
    it('creates line items associated with a quote', async () => {
      const db = createTestDatabase();
      const quote = await createQuote(db, {});

      await createLineItem(db, {
        quoteId: quote.id,
        description: 'HVAC Service Call',
        quantity: 1,
        unitPrice: 8900,
        total: 8900,
        sortOrder: 0,
      });
      await createLineItem(db, {
        quoteId: quote.id,
        description: 'Filter Replacement',
        quantity: 2,
        unitPrice: 4500,
        total: 9000,
        sortOrder: 1,
      });

      const lineItems = await db
        .get<LineItem>('line_items')
        .query(Q.where('quote_id', quote.id))
        .fetch();
      expect(lineItems).toHaveLength(2);
    });

    it('returns line items sorted by sort_order', async () => {
      const db = createTestDatabase();
      const quote = await createQuote(db, {});

      // Create in reverse order
      await createLineItem(db, { quoteId: quote.id, description: 'Third', sortOrder: 2 });
      await createLineItem(db, { quoteId: quote.id, description: 'First', sortOrder: 0 });
      await createLineItem(db, { quoteId: quote.id, description: 'Second', sortOrder: 1 });

      const lineItems = await db
        .get<LineItem>('line_items')
        .query(Q.where('quote_id', quote.id), Q.sortBy('sort_order', Q.asc))
        .fetch();

      expect(lineItems).toHaveLength(3);
      expect(lineItems[0]!.description).toBe('First');
      expect(lineItems[1]!.description).toBe('Second');
      expect(lineItems[2]!.description).toBe('Third');
    });
  });

  describe('batch write (quote + line items atomically)', () => {
    it('creates a quote with line items in a single write', async () => {
      const db = createTestDatabase();

      await db.write(async () => {
        const quote = await db.get<Quote>('quotes').create((record) => {
          record.accountId = 'acc-1';
          record.customerId = 'cust-1';
          record.status = 'DRAFT';
          record.subtotal = 17800;
          record.taxAmount = 1513;
          record.total = 19313;
          record.notes = '';
        });

        const lineItemRecords = [
          db.get<LineItem>('line_items').prepareCreate((record) => {
            record.quoteId = quote.id;
            record.description = 'Service Call';
            record.quantity = 1;
            record.unitPrice = 8900;
            record.total = 8900;
            record.sortOrder = 0;
            record.pricebookItemId = '';
          }),
          db.get<LineItem>('line_items').prepareCreate((record) => {
            record.quoteId = quote.id;
            record.description = 'Parts';
            record.quantity = 2;
            record.unitPrice = 4450;
            record.total = 8900;
            record.sortOrder = 1;
            record.pricebookItemId = '';
          }),
        ];

        await db.batch(...lineItemRecords);
      });

      const quotes = await db.get<Quote>('quotes').query().fetch();
      expect(quotes).toHaveLength(1);

      const lineItems = await db
        .get<LineItem>('line_items')
        .query(Q.where('quote_id', quotes[0]!.id))
        .fetch();
      expect(lineItems).toHaveLength(2);
    });
  });
});
