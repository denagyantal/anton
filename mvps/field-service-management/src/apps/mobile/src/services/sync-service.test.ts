import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import Customer from '../db/models/customer';
import PricebookItem from '../db/models/pricebook-item';
import Quote from '../db/models/quote';
import LineItem from '../db/models/line-item';
import QuotePhoto from '../db/models/quote-photo';
import Job from '../db/models/job';
import JobPhoto from '../db/models/job-photo';
import ScheduleEvent from '../db/models/schedule-event';
import Invoice from '../db/models/invoice';
import Payment from '../db/models/payment';

// Mock @nozbe/watermelondb/sync before importing sync-service
jest.mock('@nozbe/watermelondb/sync', () => ({
  synchronize: jest.fn(async ({ pullChanges, pushChanges }: any) => {
    await pullChanges({ lastPulledAt: null, schemaVersion: 10, migration: null });
    await pushChanges({ changes: {}, lastPulledAt: null });
  }),
}));

// Mock api-client
jest.mock('./api-client', () => ({
  apiClient: {
    post: jest.fn().mockResolvedValue({ changes: {}, timestamp: Date.now() }),
  },
}));

import { performSync, performSyncWithRetry, SYNCED_TABLES } from './sync-service';
import { synchronize } from '@nozbe/watermelondb/sync';
import { apiClient } from './api-client';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [
      Customer, PricebookItem, Quote, LineItem, QuotePhoto,
      Job, JobPhoto, ScheduleEvent, Invoice, Payment,
    ],
  });
}

describe('performSync', () => {
  let db: Database;

  beforeEach(() => {
    jest.clearAllMocks();
    db = createTestDatabase();
    (apiClient.post as jest.Mock).mockResolvedValue({ changes: {}, timestamp: Date.now() });
  });

  it('calls pullChanges and pushChanges via synchronize', async () => {
    await performSync(db);
    expect(synchronize).toHaveBeenCalledTimes(1);
    expect(apiClient.post).toHaveBeenCalledWith(
      '/api/v1/sync/pull',
      expect.objectContaining({ lastPulledAt: null }),
    );
    expect(apiClient.post).toHaveBeenCalledWith(
      '/api/v1/sync/push',
      expect.objectContaining({ changes: {} }),
    );
  });

  it('updates synced_at on pending records after successful sync', async () => {
    // Create a customer with no synced_at (pending)
    let customer!: Customer;
    await db.write(async () => {
      customer = await db.get<Customer>('customers').create((r) => {
        r.accountId = 'acc1';
        r.name = 'Test User';
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

    // Verify it starts as unsynced
    expect(customer.syncedAt == null).toBe(true);

    await performSync(db);

    // After sync, synced_at should be set
    const updated = await db.get<Customer>('customers').find(customer.id);
    expect(updated.syncedAt).not.toBeNull();
    expect(typeof updated.syncedAt).toBe('number');
  });

  it('does not throw when there are no pending records', async () => {
    await expect(performSync(db)).resolves.not.toThrow();
  });
});

describe('performSyncWithRetry', () => {
  let db: Database;

  beforeEach(() => {
    jest.clearAllMocks();
    db = createTestDatabase();
    // Replace sleep with a no-op to avoid real delays in tests
    jest.spyOn(global, 'setTimeout').mockImplementation((fn: any) => {
      fn();
      return 0 as any;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('succeeds on first try when sync works', async () => {
    (synchronize as jest.Mock).mockImplementationOnce(async ({ pullChanges, pushChanges }: any) => {
      await pullChanges({ lastPulledAt: null, schemaVersion: 10, migration: null });
      await pushChanges({ changes: {}, lastPulledAt: null });
    });

    await performSyncWithRetry(db);

    expect(synchronize).toHaveBeenCalledTimes(1);
  });

  it('retries on failure and succeeds on second attempt', async () => {
    (synchronize as jest.Mock)
      .mockRejectedValueOnce(new Error('Network error'))
      .mockImplementationOnce(async ({ pullChanges, pushChanges }: any) => {
        await pullChanges({ lastPulledAt: null, schemaVersion: 10, migration: null });
        await pushChanges({ changes: {}, lastPulledAt: null });
      });

    await performSyncWithRetry(db);

    expect(synchronize).toHaveBeenCalledTimes(2);
  });

  it('retries up to MAX_RETRIES (5) times on persistent failure', async () => {
    const error = new Error('Persistent network error');
    (synchronize as jest.Mock).mockRejectedValue(error);

    await expect(performSyncWithRetry(db)).rejects.toThrow('Persistent network error');
    expect(synchronize).toHaveBeenCalledTimes(5);
  });

  it('applies exponential backoff delays between retries', async () => {
    const error = new Error('Transient error');
    (synchronize as jest.Mock).mockRejectedValue(error);

    // Restore real setTimeout and use a spy to capture delay values
    jest.restoreAllMocks();
    const setTimeoutSpy = jest.spyOn(global, 'setTimeout').mockImplementation((fn: any, ms?: number) => {
      // Record the delay but execute immediately
      fn();
      return 0 as any;
    });

    await expect(performSyncWithRetry(db)).rejects.toThrow('Transient error');

    // Extract backoff delays (filter out non-backoff calls)
    const backoffDelays = setTimeoutSpy.mock.calls
      .map(call => call[1] as number)
      .filter(ms => ms !== undefined && ms >= 1000);

    // Should have 4 delays for attempts 0-3: 1000, 2000, 4000, 8000
    expect(backoffDelays).toHaveLength(4);
    expect(backoffDelays[0]).toBe(1000);
    expect(backoffDelays[1]).toBe(2000);
    expect(backoffDelays[2]).toBe(4000);
    expect(backoffDelays[3]).toBe(8000);
  });

  it('throws the last error after MAX_RETRIES failures', async () => {
    const error = new Error('Final error after retries');
    (synchronize as jest.Mock).mockRejectedValue(error);

    await expect(performSyncWithRetry(db)).rejects.toThrow('Final error after retries');
    expect(synchronize).toHaveBeenCalledTimes(5);
  });
});

describe('SYNCED_TABLES', () => {
  it('includes all expected tables', () => {
    expect(SYNCED_TABLES).toContain('customers');
    expect(SYNCED_TABLES).toContain('quotes');
    expect(SYNCED_TABLES).toContain('line_items');
    expect(SYNCED_TABLES).toContain('jobs');
    expect(SYNCED_TABLES).toContain('schedule_events');
    expect(SYNCED_TABLES).toContain('invoices');
    expect(SYNCED_TABLES).toContain('payments');
    expect(SYNCED_TABLES).toHaveLength(7);
  });
});
