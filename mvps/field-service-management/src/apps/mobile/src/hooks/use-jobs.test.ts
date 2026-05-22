// Mock React Native contexts to avoid pulling in react-native in the test environment
jest.mock('../contexts/auth-context', () => ({ useAuth: jest.fn() }));
jest.mock('../contexts/database-context', () => ({ useDatabase: jest.fn() }));

import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import Job from '../db/models/job';
import ScheduleEvent from '../db/models/schedule-event';
import Customer from '../db/models/customer';
import Quote from '../db/models/quote';
import LineItem from '../db/models/line-item';
import PricebookItem from '../db/models/pricebook-item';
import QuotePhoto from '../db/models/quote-photo';
import { VALID_TRANSITIONS } from './use-jobs';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Job, ScheduleEvent, Customer, Quote, LineItem, PricebookItem, QuotePhoto],
  });
}

async function createJob(
  db: Database,
  overrides: Partial<{
    accountId: string;
    customerId: string;
    title: string;
    status: string;
    notes: string;
  }> = {},
): Promise<Job> {
  let created!: Job;
  await db.write(async () => {
    created = await db.get<Job>('jobs').create((record) => {
      record.accountId = overrides.accountId ?? 'test-account';
      record.customerId = overrides.customerId ?? 'cust-1';
      record.status = overrides.status ?? 'QUOTED';
      record.title = overrides.title ?? 'Test Job';
      record.notes = overrides.notes ?? '';
      record.quoteId = '';
    });
  });
  return created;
}

async function transitionStatus(db: Database, jobId: string, newStatus: string): Promise<void> {
  await db.write(async () => {
    const job = await db.get<Job>('jobs').find(jobId);
    const validNext = VALID_TRANSITIONS[job.status] ?? [];
    if (!validNext.includes(newStatus)) {
      throw new Error(`Invalid status transition: ${job.status} → ${newStatus}`);
    }
    await job.update((record) => {
      record.status = newStatus;
      if (newStatus === 'COMPLETE') {
        record.completedAt = Date.now();
      }
    });
  });
}

async function updateNotes(db: Database, jobId: string, notes: string): Promise<void> {
  await db.write(async () => {
    const job = await db.get<Job>('jobs').find(jobId);
    await job.update((record) => {
      record.notes = notes;
    });
  });
}

describe('Job status transitions', () => {
  it('transitions QUOTED → IN_PROGRESS and updates status', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, { status: 'QUOTED' });

    await transitionStatus(db, job.id, 'IN_PROGRESS');

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.status).toBe('IN_PROGRESS');
  });

  it('transitions IN_PROGRESS → COMPLETE and sets completedAt timestamp', async () => {
    const db = createTestDatabase();
    const before = Date.now();
    const job = await createJob(db, { status: 'IN_PROGRESS' });

    await transitionStatus(db, job.id, 'COMPLETE');

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.status).toBe('COMPLETE');
    expect(updated.completedAt).not.toBeNull();
    expect(updated.completedAt).toBeGreaterThanOrEqual(before);
  });

  it('throws for COMPLETE → QUOTED and does not modify the record', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, { status: 'COMPLETE' });

    await expect(transitionStatus(db, job.id, 'QUOTED')).rejects.toThrow(
      'Invalid status transition: COMPLETE → QUOTED',
    );

    const unchanged = await db.get<Job>('jobs').find(job.id);
    expect(unchanged.status).toBe('COMPLETE');
  });
});

describe('Job notes update', () => {
  it('updates notes field without changing status or other fields', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, { status: 'QUOTED', notes: 'original notes' });

    await updateNotes(db, job.id, 'updated notes');

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.notes).toBe('updated notes');
    expect(updated.status).toBe('QUOTED');
    expect(updated.title).toBe('Test Job');
  });
});

describe('Jobs status filter query', () => {
  it('filters jobs by status and returns only matching records', async () => {
    const db = createTestDatabase();

    await createJob(db, { status: 'QUOTED', title: 'Job A' });
    await createJob(db, { status: 'QUOTED', title: 'Job B' });
    await createJob(db, { status: 'IN_PROGRESS', title: 'Job C' });
    await createJob(db, { status: 'COMPLETE', title: 'Job D' });

    // Fetch all jobs then filter in JS (LokiJS adapter pattern — consistent with use-schedule.test.ts)
    const allJobs = await db.get<Job>('jobs').query().fetch();
    const quotedJobs = allJobs.filter((j) => j.status === 'QUOTED');

    expect(quotedJobs).toHaveLength(2);
    expect(quotedJobs.every((j) => j.status === 'QUOTED')).toBe(true);
    expect(allJobs).toHaveLength(4);
  });
});

describe('VALID_TRANSITIONS map', () => {
  it('exports the correct transition map', () => {
    expect(VALID_TRANSITIONS['QUOTED']).toEqual(['SCHEDULED', 'IN_PROGRESS']);
    expect(VALID_TRANSITIONS['SCHEDULED']).toEqual(['IN_PROGRESS']);
    expect(VALID_TRANSITIONS['IN_PROGRESS']).toEqual(['COMPLETE']);
    expect(VALID_TRANSITIONS['COMPLETE']).toEqual(['INVOICED']);
    expect(VALID_TRANSITIONS['INVOICED']).toEqual([]);
  });
});
