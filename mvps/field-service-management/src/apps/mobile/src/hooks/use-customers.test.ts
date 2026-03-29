import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { Q } from '@nozbe/watermelondb';
import { schema } from '../db/schema';
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
    modelClasses: [Customer, PricebookItem],
  });
}

async function createCustomer(
  db: Database,
  data: { name: string; phone: string; accountId?: string; email?: string; city?: string; state?: string },
): Promise<Customer> {
  let customer: Customer | null = null;
  await db.write(async () => {
    customer = await db.get<Customer>('customers').create((record) => {
      record.accountId = data.accountId ?? 'test-account';
      record.name = data.name;
      record.phone = data.phone;
      record.email = data.email ?? '';
      record.addressLine1 = '';
      record.addressLine2 = '';
      record.city = data.city ?? '';
      record.state = data.state ?? '';
      record.zip = '';
      record.notes = '';
    });
  });
  return customer!;
}

describe('Customer WatermelonDB operations', () => {
  describe('customer creation', () => {
    it('creates a customer record with all fields', async () => {
      const db = createTestDatabase();

      await db.write(async () => {
        await db.get<Customer>('customers').create((record) => {
          record.accountId = 'acc-123';
          record.name = 'John Smith';
          record.phone = '555-0100';
          record.email = 'john@example.com';
          record.addressLine1 = '123 Main St';
          record.addressLine2 = 'Apt 4B';
          record.city = 'Austin';
          record.state = 'TX';
          record.zip = '78701';
          record.notes = 'Preferred morning appointments';
        });
      });

      const customers = await db.get<Customer>('customers').query().fetch();
      expect(customers).toHaveLength(1);

      const customer = customers[0]!;
      expect(customer.accountId).toBe('acc-123');
      expect(customer.name).toBe('John Smith');
      expect(customer.phone).toBe('555-0100');
      expect(customer.email).toBe('john@example.com');
      expect(customer.addressLine1).toBe('123 Main St');
      expect(customer.addressLine2).toBe('Apt 4B');
      expect(customer.city).toBe('Austin');
      expect(customer.state).toBe('TX');
      expect(customer.zip).toBe('78701');
      expect(customer.notes).toBe('Preferred morning appointments');
      expect(customer.id).toBeTruthy();
    });

    it('creates customer with UUID id by default', async () => {
      const db = createTestDatabase();
      const customer = await createCustomer(db, { name: 'Test', phone: '555-0000' });
      expect(customer.id).toBeTruthy();
      expect(typeof customer.id).toBe('string');
      expect(customer.id.length).toBeGreaterThan(0);
    });

    it('creates customer with optional fields as empty strings', async () => {
      const db = createTestDatabase();
      const customer = await createCustomer(db, { name: 'Jane Doe', phone: '555-0200' });
      expect(customer.email).toBe('');
      expect(customer.addressLine1).toBe('');
      expect(customer.city).toBe('');
      expect(customer.state).toBe('');
      expect(customer.zip).toBe('');
      expect(customer.notes).toBe('');
    });
  });

  describe('customer update', () => {
    it('updates customer fields', async () => {
      const db = createTestDatabase();
      const customer = await createCustomer(db, { name: 'Old Name', phone: '555-0001' });

      await db.write(async () => {
        await customer.update((record) => {
          record.name = 'New Name';
          record.phone = '555-9999';
          record.email = 'new@example.com';
        });
      });

      const updated = await db.get<Customer>('customers').find(customer.id);
      expect(updated.name).toBe('New Name');
      expect(updated.phone).toBe('555-9999');
      expect(updated.email).toBe('new@example.com');
    });
  });

  describe('customer retrieval', () => {
    it('fetches all customers from the collection', async () => {
      const db = createTestDatabase();
      await createCustomer(db, { name: 'Alice', phone: '555-1111', accountId: 'acc-1' });
      await createCustomer(db, { name: 'Bob', phone: '555-2222', accountId: 'acc-1' });
      await createCustomer(db, { name: 'Charlie', phone: '555-3333', accountId: 'acc-2' });

      const all = await db.get<Customer>('customers').query().fetch();
      expect(all).toHaveLength(3);
    });

    it('finds a customer by id', async () => {
      const db = createTestDatabase();
      const created = await createCustomer(db, { name: 'Alice', phone: '555-1111' });

      const found = await db.get<Customer>('customers').find(created.id);
      expect(found.name).toBe('Alice');
      expect(found.phone).toBe('555-1111');
    });

    it('stores account_id for filtering', async () => {
      const db = createTestDatabase();
      await createCustomer(db, { name: 'Alice', phone: '555-1111', accountId: 'acc-1' });
      await createCustomer(db, { name: 'Bob', phone: '555-2222', accountId: 'acc-2' });

      const all = await db.get<Customer>('customers').query().fetch();
      const acc1Customers = all.filter((c) => c.accountId === 'acc-1');
      const acc2Customers = all.filter((c) => c.accountId === 'acc-2');

      expect(acc1Customers).toHaveLength(1);
      expect(acc1Customers[0]!.name).toBe('Alice');
      expect(acc2Customers).toHaveLength(1);
      expect(acc2Customers[0]!.name).toBe('Bob');
    });

    it('stores searchable name and phone fields', async () => {
      const db = createTestDatabase();
      await createCustomer(db, { name: 'Alice Johnson', phone: '555-1111' });
      await createCustomer(db, { name: 'Bob Smith', phone: '555-2222' });

      const all = await db.get<Customer>('customers').query().fetch();

      // Verify name-based filtering works at the application level
      const nameMatch = all.filter((c) => c.name.toLowerCase().includes('alice'));
      expect(nameMatch).toHaveLength(1);
      expect(nameMatch[0]!.name).toBe('Alice Johnson');

      // Verify phone-based filtering works at the application level
      const phoneMatch = all.filter((c) => c.phone.includes('2222'));
      expect(phoneMatch).toHaveLength(1);
      expect(phoneMatch[0]!.name).toBe('Bob Smith');
    });
  });

  describe('search query sanitization', () => {
    it('Q.sanitizeLikeString escapes percent characters', () => {
      const sanitized = Q.sanitizeLikeString('100%');
      expect(sanitized).not.toContain('%');
    });

    it('Q.sanitizeLikeString returns a string for special input', () => {
      const sanitized = Q.sanitizeLikeString('test_name');
      // sanitizeLikeString processes input and returns a string
      expect(typeof sanitized).toBe('string');
      expect(sanitized.length).toBeGreaterThan(0);
    });

    it('Q.sanitizeLikeString handles normal search strings', () => {
      const sanitized = Q.sanitizeLikeString('John Smith');
      // Normal characters should pass through
      expect(sanitized).toContain('John');
      expect(sanitized).toContain('Smith');
    });

    it('Q.sanitizeLikeString handles empty strings', () => {
      const sanitized = Q.sanitizeLikeString('');
      expect(sanitized).toBe('');
    });
  });
});
