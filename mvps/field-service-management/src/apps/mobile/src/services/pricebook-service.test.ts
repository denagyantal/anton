import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import PricebookItem from '../db/models/pricebook-item';
import { seedPricebook } from './pricebook-service';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [PricebookItem],
  });
}

describe('seedPricebook', () => {
  let db: Database;

  beforeEach(() => {
    db = createTestDatabase();
  });

  it('seeds HVAC pricebook items', async () => {
    await seedPricebook(db, 'HVAC', 'test-account-id');

    const items = await db.get<PricebookItem>('pricebook_items').query().fetch();
    expect(items.length).toBeGreaterThanOrEqual(30);
    expect(items.length).toBeLessThanOrEqual(40);
  });

  it('seeds plumbing pricebook items', async () => {
    await seedPricebook(db, 'PLUMBING', 'test-account-id');

    const items = await db.get<PricebookItem>('pricebook_items').query().fetch();
    expect(items.length).toBeGreaterThanOrEqual(30);
    expect(items.length).toBeLessThanOrEqual(40);
  });

  it('seeds electrical pricebook items', async () => {
    await seedPricebook(db, 'ELECTRICAL', 'test-account-id');

    const items = await db.get<PricebookItem>('pricebook_items').query().fetch();
    expect(items.length).toBeGreaterThanOrEqual(30);
    expect(items.length).toBeLessThanOrEqual(40);
  });

  it('creates items with correct fields', async () => {
    await seedPricebook(db, 'HVAC', 'test-account-id');

    const items = await db.get<PricebookItem>('pricebook_items').query().fetch();
    expect(items.length).toBeGreaterThan(0);
    const item = items[0]!;

    expect(item.accountId).toBe('test-account-id');
    expect(item.name).toBeTruthy();
    expect(item.category).toBeTruthy();
    expect(Number.isInteger(item.unitPrice)).toBe(true);
    expect(item.unitPrice).toBeGreaterThan(0);
    expect(['EACH', 'HOUR', 'FLAT']).toContain(item.unitType);
    expect(item.isActive).toBe(true);
    expect(typeof item.sortOrder).toBe('number');
  });

  it('is idempotent - calling twice does not create duplicates', async () => {
    await seedPricebook(db, 'HVAC', 'test-account-id');
    const firstCount = await db.get<PricebookItem>('pricebook_items').query().fetchCount();

    await seedPricebook(db, 'HVAC', 'test-account-id');
    const secondCount = await db.get<PricebookItem>('pricebook_items').query().fetchCount();

    expect(secondCount).toBe(firstCount);
  });

  it('sets account_id on all items', async () => {
    const accountId = 'my-unique-account-123';
    await seedPricebook(db, 'PLUMBING', accountId);

    const items = await db.get<PricebookItem>('pricebook_items').query().fetch();
    for (const item of items) {
      expect(item.accountId).toBe(accountId);
    }
  });

  it('has items with valid unit types', async () => {
    await seedPricebook(db, 'ELECTRICAL', 'test-account-id');

    const items = await db.get<PricebookItem>('pricebook_items').query().fetch();
    const validTypes = ['EACH', 'HOUR', 'FLAT'];
    for (const item of items) {
      expect(validTypes).toContain(item.unitType);
    }
  });
});
