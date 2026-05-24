import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../../../src/db/schema';
import Customer from '../../../src/db/models/customer';
import PricebookItem from '../../../src/db/models/pricebook-item';
import { detectColumns, classifyRows, ColumnMapping } from './import-customers-helpers';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({ adapter, modelClasses: [Customer, PricebookItem] });
}

describe('detectColumns', () => {
  it('maps common headers to customer fields', () => {
    const mapping = detectColumns(['Name', 'Phone', 'Email', 'Address', 'City', 'State', 'Zip']);
    expect(mapping.name).toBe('Name');
    expect(mapping.phone).toBe('Phone');
    expect(mapping.email).toBe('Email');
    expect(mapping.addressLine1).toBe('Address');
    expect(mapping.city).toBe('City');
    expect(mapping.state).toBe('State');
    expect(mapping.zip).toBe('Zip');
  });

  it('handles synonym headers case-insensitively', () => {
    const mapping = detectColumns(['Mobile', 'POSTAL CODE', 'full name']);
    expect(mapping.phone).toBe('Mobile');
    expect(mapping.zip).toBe('POSTAL CODE');
    expect(mapping.name).toBe('full name');
  });

  it('returns empty string for unmapped fields', () => {
    const mapping = detectColumns(['Name']);
    expect(mapping.phone).toBe('');
    expect(mapping.email).toBe('');
    expect(mapping.addressLine1).toBe('');
  });

  it('returns empty string for all fields when headers are unrecognized', () => {
    const mapping = detectColumns(['column_a', 'column_b', 'column_c']);
    expect(mapping.name).toBe('');
    expect(mapping.phone).toBe('');
  });
});

describe('classifyRows', () => {
  const mapping: ColumnMapping = {
    name: 'Name',
    phone: 'Phone',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
  };

  it('includes rows with non-empty name', () => {
    const rows = [{ Name: 'Alice', Phone: '555-0001' }];
    const { toCreate, toSkip } = classifyRows(rows, mapping, new Map());
    expect(toCreate).toHaveLength(1);
    expect(toSkip).toHaveLength(0);
  });

  it('skips rows where name is empty', () => {
    const rows = [
      { Name: '', Phone: '555-0001' },
      { Name: '   ', Phone: '555-0002' },
    ];
    const { toCreate, toSkip } = classifyRows(rows, mapping, new Map());
    expect(toCreate).toHaveLength(0);
    expect(toSkip).toHaveLength(2);
  });

  it('identifies duplicates by phone number', () => {
    const existingCustomer = { phone: '555-1234' } as Customer;
    const phoneMap = new Map([['555-1234', existingCustomer]]);
    const rows = [
      { Name: 'Bob', Phone: '555-1234' },
      { Name: 'Carol', Phone: '555-9999' },
    ];
    const { toCreate, toDuplicate, toSkip } = classifyRows(rows, mapping, phoneMap);
    expect(toDuplicate).toHaveLength(1);
    expect(toCreate).toHaveLength(1);
    expect(toSkip).toHaveLength(0);
  });

  it('treats rows with no phone as non-duplicate even if phoneMap has entries', () => {
    const phoneMap = new Map([['555-1234', {} as Customer]]);
    const noPhoneMapping: ColumnMapping = { ...mapping, phone: '' };
    const rows = [{ Name: 'Dave' }];
    const { toCreate } = classifyRows(rows, noPhoneMapping, phoneMap);
    expect(toCreate).toHaveLength(1);
  });
});

describe('CSV import WatermelonDB writes', () => {
  it('creates multiple customer records in a single batch write', async () => {
    const db = createTestDatabase();
    const rows = [
      { Name: 'Alice', Phone: '555-0001' },
      { Name: 'Bob', Phone: '555-0002' },
      { Name: 'Carol', Phone: '555-0003' },
    ];

    await db.write(async () => {
      for (const row of rows) {
        await db.get<Customer>('customers').create((record) => {
          record.accountId = 'test-account';
          record.name = row.Name;
          record.phone = row.Phone;
          record.email = '';
          record.addressLine1 = '';
          record.addressLine2 = '';
          record.city = '';
          record.state = '';
          record.zip = '';
          record.notes = '';
          record.quickbooksCustomerId = '';
        });
      }
    });

    const all = await db.get<Customer>('customers').query().fetch();
    expect(all).toHaveLength(3);
    expect(all.map((c) => c.name).sort()).toEqual(['Alice', 'Bob', 'Carol']);
  });

  it('updates an existing customer record on confirmed duplicate', async () => {
    const db = createTestDatabase();
    let existing!: Customer;

    await db.write(async () => {
      existing = await db.get<Customer>('customers').create((record) => {
        record.accountId = 'test-account';
        record.name = 'Old Name';
        record.phone = '555-0001';
        record.email = '';
        record.addressLine1 = '';
        record.addressLine2 = '';
        record.city = '';
        record.state = '';
        record.zip = '';
        record.notes = '';
        record.quickbooksCustomerId = '';
      });
    });

    await db.write(async () => {
      await existing.update((record) => {
        record.name = 'New Name';
        record.email = 'new@example.com';
        // phone intentionally not changed
      });
    });

    const updated = await db.get<Customer>('customers').find(existing.id);
    expect(updated.name).toBe('New Name');
    expect(updated.email).toBe('new@example.com');
    expect(updated.phone).toBe('555-0001'); // phone preserved
  });
});
