// Tests for DispatchBoard filtering logic.
// Full React Native rendering tests require @testing-library/react-native (not installed).
// These tests cover job-to-tech-lane assignment logic used by the DispatchBoard component.

import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../../db/schema';
import Job from '../../db/models/job';
import ScheduleEvent from '../../db/models/schedule-event';
import Customer from '../../db/models/customer';
import Quote from '../../db/models/quote';
import LineItem from '../../db/models/line-item';
import PricebookItem from '../../db/models/pricebook-item';
import QuotePhoto from '../../db/models/quote-photo';
import Invoice from '../../db/models/invoice';
import Payment from '../../db/models/payment';
import TeamMember from '../../db/models/team-member';

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

async function createJob(
  db: Database,
  overrides: Partial<{
    title: string;
    assignedToId: string;
    status: string;
    scheduledStart: number | null;
    customerId: string;
  }> = {},
): Promise<Job> {
  let created!: Job;
  await db.write(async () => {
    created = await db.get<Job>('jobs').create((record) => {
      record.accountId = 'account-1';
      record.customerId = overrides.customerId ?? 'cust-1';
      record.status = overrides.status ?? 'SCHEDULED';
      record.title = overrides.title ?? 'Test Job';
      record.notes = '';
      record.quoteId = '';
      record.assignedToId = overrides.assignedToId ?? '';
      (record as unknown as { scheduledStart: number | null }).scheduledStart =
        overrides.scheduledStart !== undefined ? overrides.scheduledStart : Date.now();
    });
  });
  return created;
}

async function createTeamMember(db: Database, name: string): Promise<TeamMember> {
  let created!: TeamMember;
  await db.write(async () => {
    created = await db.get<TeamMember>('team_members').create((record) => {
      record.accountId = 'account-1';
      record.name = name;
      record.email = `${name.toLowerCase()}@example.com`;
      record.phone = '';
      record.role = 'MEMBER';
    });
  });
  return created;
}

describe('DispatchBoard — job lane assignment logic', () => {
  it('filters unassigned jobs (empty string assignedToId)', async () => {
    const db = createTestDatabase();
    await createJob(db, { title: 'Unassigned Job', assignedToId: '' });
    await createJob(db, { title: 'Assigned Job', assignedToId: 'tech-1' });

    const all = await db.get<Job>('jobs').query().fetch();
    const unassigned = all.filter((j) => !j.assignedToId);

    expect(unassigned).toHaveLength(1);
    expect(unassigned[0]!.title).toBe('Unassigned Job');
  });

  it('filters jobs by technician ID for each lane', async () => {
    const db = createTestDatabase();
    const alice = await createTeamMember(db, 'Alice');
    const bob = await createTeamMember(db, 'Bob');

    await createJob(db, { title: 'HVAC Repair', assignedToId: alice.id });
    await createJob(db, { title: 'Pipe Fix', assignedToId: alice.id });
    await createJob(db, { title: 'Panel Upgrade', assignedToId: bob.id });

    const all = await db.get<Job>('jobs').query().fetch();
    const aliceJobs = all.filter((j) => j.assignedToId === alice.id);
    const bobJobs = all.filter((j) => j.assignedToId === bob.id);

    expect(aliceJobs).toHaveLength(2);
    expect(bobJobs).toHaveLength(1);
    expect(bobJobs[0]!.title).toBe('Panel Upgrade');
  });

  it('shows no Unassigned lane when all jobs are assigned', async () => {
    const db = createTestDatabase();
    const alice = await createTeamMember(db, 'Alice');

    await createJob(db, { assignedToId: alice.id });
    await createJob(db, { assignedToId: alice.id });

    const all = await db.get<Job>('jobs').query().fetch();
    const unassigned = all.filter((j) => !j.assignedToId);

    expect(unassigned).toHaveLength(0);
  });

  it('filters today jobs by scheduledStart within today boundaries', async () => {
    const db = createTestDatabase();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const todayTs = new Date().setHours(10, 0, 0, 0);
    const tomorrowTs = todayEnd.getTime() + 3600000;

    await createJob(db, { title: 'Today Job', scheduledStart: todayTs });
    await createJob(db, { title: 'Tomorrow Job', scheduledStart: tomorrowTs });
    await createJob(db, { title: 'No Time Job', scheduledStart: null });

    const all = await db.get<Job>('jobs').query().fetch();
    const todayJobs = all.filter(
      (j) =>
        j.scheduledStart !== null &&
        j.scheduledStart >= todayStart.getTime() &&
        j.scheduledStart <= todayEnd.getTime(),
    );

    expect(todayJobs).toHaveLength(1);
    expect(todayJobs[0]!.title).toBe('Today Job');
  });

  it('excludes INVOICED jobs from dispatch board', async () => {
    const db = createTestDatabase();
    await createJob(db, { title: 'Active Job', status: 'SCHEDULED' });
    await createJob(db, { title: 'Invoiced Job', status: 'INVOICED' });

    const all = await db.get<Job>('jobs').query().fetch();
    const boardJobs = all.filter((j) => j.status !== 'INVOICED');

    expect(boardJobs).toHaveLength(1);
    expect(boardJobs[0]!.title).toBe('Active Job');
  });

  it('reactive: adding a job with assignedToId updates the observable', (done) => {
    const db = createTestDatabase();

    const results: Job[][] = [];
    const subscription = db
      .get<Job>('jobs')
      .query()
      .observe()
      .subscribe(async (jobs) => {
        results.push(jobs.filter((j) => j.assignedToId === 'tech-reactive'));
        if (results.length === 2) {
          expect(results[0]).toHaveLength(0);
          expect(results[1]).toHaveLength(1);
          expect(results[1]![0]!.title).toBe('Reactive Dispatch Job');
          subscription.unsubscribe();
          done();
        }
      });

    setTimeout(async () => {
      await createJob(db, { title: 'Reactive Dispatch Job', assignedToId: 'tech-reactive' });
    }, 10);
  });
});
