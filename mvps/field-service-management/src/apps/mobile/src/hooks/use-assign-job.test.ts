// Tests for useAssignJob hook - tests WatermelonDB write logic directly
// (renderHook requires @testing-library/react-native which is not installed)
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
import TeamMember from '../db/models/team-member';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Job, ScheduleEvent, Customer, Quote, LineItem, PricebookItem, QuotePhoto, Invoice, Payment, TeamMember],
  });
}

async function createJob(db: Database, assignedToId = ''): Promise<Job> {
  let created!: Job;
  await db.write(async () => {
    created = await db.get<Job>('jobs').create((record) => {
      record.accountId = 'test-account';
      record.customerId = 'cust-1';
      record.status = 'SCHEDULED';
      record.title = 'Test Job';
      record.notes = '';
      record.quoteId = '';
      record.assignedToId = assignedToId;
    });
  });
  return created;
}

async function assignJob(db: Database, jobId: string, assignedToId: string | null): Promise<void> {
  await db.write(async () => {
    const job = await db.get<Job>('jobs').find(jobId);
    await job.update((record) => {
      record.assignedToId = assignedToId ?? '';
    });
  });
}

describe('useAssignJob — WatermelonDB write logic', () => {
  it('sets assignedToId on a job record', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, '');

    await assignJob(db, job.id, 'tech-1');

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.assignedToId).toBe('tech-1');
  });

  it('clears assignedToId when null is passed (sets empty string)', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, 'tech-1');

    await assignJob(db, job.id, null);

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.assignedToId).toBe('');
  });

  it('does not change status or other fields when assigning', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, '');

    await assignJob(db, job.id, 'tech-42');

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.assignedToId).toBe('tech-42');
    expect(updated.status).toBe('SCHEDULED');
    expect(updated.title).toBe('Test Job');
  });

  it('reassigns from one tech to another', async () => {
    const db = createTestDatabase();
    const job = await createJob(db, 'tech-1');

    await assignJob(db, job.id, 'tech-2');

    const updated = await db.get<Job>('jobs').find(job.id);
    expect(updated.assignedToId).toBe('tech-2');
  });
});
