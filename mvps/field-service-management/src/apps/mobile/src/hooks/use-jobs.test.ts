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
import Invoice from '../db/models/invoice';
import Payment from '../db/models/payment';
import { VALID_TRANSITIONS } from './use-jobs';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Job, ScheduleEvent, Customer, Quote, LineItem, PricebookItem, QuotePhoto, Invoice, Payment],
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

describe('useCustomerJobs — WatermelonDB query logic', () => {
  async function createJobWithStart(
    db: Database,
    customerId: string,
    scheduledStart: number | null,
    title: string,
    status = 'QUOTED',
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

  it('returns all jobs matching customerId and none from other customers', async () => {
    const db = createTestDatabase();
    await createJobWithStart(db, 'cust-a', null, 'Job A1');
    await createJobWithStart(db, 'cust-a', null, 'Job A2');
    await createJobWithStart(db, 'cust-b', null, 'Job B1');

    const all = await db.get<Job>('jobs').query().fetch();
    const custAJobs = all.filter((j) => j.customerId === 'cust-a');
    expect(custAJobs).toHaveLength(2);
    expect(custAJobs.every((j) => j.customerId === 'cust-a')).toBe(true);
  });

  it('returns empty array when no jobs exist for customerId', async () => {
    const db = createTestDatabase();
    await createJobWithStart(db, 'cust-a', null, 'Job A');

    const all = await db.get<Job>('jobs').query().fetch();
    const custBJobs = all.filter((j) => j.customerId === 'cust-b');
    expect(custBJobs).toHaveLength(0);
  });

  it('sorts jobs by scheduledStart descending (most recent first)', async () => {
    const db = createTestDatabase();
    const jan = new Date('2026-01-15').getTime();
    const mar = new Date('2026-03-10').getTime();
    const dec = new Date('2026-12-01').getTime();

    await createJobWithStart(db, 'cust-a', jan, 'January Job');
    await createJobWithStart(db, 'cust-a', dec, 'December Job');
    await createJobWithStart(db, 'cust-a', mar, 'March Job');

    const jobs = await db.get<Job>('jobs').query().fetch();
    const custJobs = jobs.filter((j) => j.customerId === 'cust-a');

    const sorted = [...custJobs].sort((a, b) => {
      const aTime = a.scheduledStart ? new Date(a.scheduledStart).getTime() : 0;
      const bTime = b.scheduledStart ? new Date(b.scheduledStart).getTime() : 0;
      return bTime - aTime;
    });

    expect(sorted[0]!.title).toBe('December Job');
    expect(sorted[1]!.title).toBe('March Job');
    expect(sorted[2]!.title).toBe('January Job');
  });

  it('places jobs with null scheduledStart at the end when sorting', async () => {
    const db = createTestDatabase();
    const jan = new Date('2026-01-15').getTime();

    await createJobWithStart(db, 'cust-a', null, 'No Date Job');
    await createJobWithStart(db, 'cust-a', jan, 'January Job');

    const jobs = await db.get<Job>('jobs').query().fetch();
    const custJobs = jobs.filter((j) => j.customerId === 'cust-a');

    const sorted = [...custJobs].sort((a, b) => {
      const aTime = a.scheduledStart ? new Date(a.scheduledStart).getTime() : 0;
      const bTime = b.scheduledStart ? new Date(b.scheduledStart).getTime() : 0;
      return bTime - aTime;
    });

    expect(sorted[0]!.title).toBe('January Job');
    expect(sorted[1]!.title).toBe('No Date Job');
  });

  it('reactive: adding a new job for customerId updates the observable', (done) => {
    const db = createTestDatabase();

    const results: Job[][] = [];
    const subscription = db
      .get<Job>('jobs')
      .query()
      .observe()
      .subscribe(async (jobs) => {
        results.push(jobs.filter((j) => j.customerId === 'cust-reactive'));
        if (results.length === 2) {
          expect(results[0]).toHaveLength(0);
          expect(results[1]).toHaveLength(1);
          expect(results[1]![0]!.title).toBe('New Reactive Job');
          subscription.unsubscribe();
          done();
        }
      });

    // Add a job after the first emission
    setTimeout(async () => {
      await createJobWithStart(db, 'cust-reactive', null, 'New Reactive Job');
    }, 10);
  });
});
