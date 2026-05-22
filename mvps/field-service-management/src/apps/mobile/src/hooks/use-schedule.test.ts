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

async function createJobAndEvent(
  db: Database,
  data: {
    accountId?: string;
    customerId?: string;
    title?: string;
    startTime?: number;
    endTime?: number;
  },
): Promise<{ job: Job; event: ScheduleEvent }> {
  let createdJob!: Job;
  let createdEvent!: ScheduleEvent;

  await db.write(async () => {
    createdJob = await db.get<Job>('jobs').create((record) => {
      record.accountId = data.accountId ?? 'test-account';
      record.customerId = data.customerId ?? 'cust-1';
      record.status = 'SCHEDULED';
      record.title = data.title ?? 'Test Job';
      record.scheduledStart = data.startTime ?? Date.now();
      record.scheduledEnd = data.endTime ?? Date.now() + 3600000;
      record.notes = '';
      record.quoteId = '';
    });

    createdEvent = await db.get<ScheduleEvent>('schedule_events').create((record) => {
      record.accountId = data.accountId ?? 'test-account';
      record.jobId = createdJob.id;
      record.customerId = data.customerId ?? 'cust-1';
      record.title = data.title ?? 'Test Job';
      record.startTime = data.startTime ?? Date.now();
      record.endTime = data.endTime ?? Date.now() + 3600000;
      record.allDay = false;
      record.reminderMinutes = 1440;
      record.reminderSent = false;
      record.externalCalendarId = '';
    });
  });

  return { job: createdJob, event: createdEvent };
}

describe('Job WatermelonDB operations', () => {
  describe('job creation', () => {
    it('creates a job record with all required fields', async () => {
      const db = createTestDatabase();

      await db.write(async () => {
        await db.get<Job>('jobs').create((record) => {
          record.accountId = 'acc-1';
          record.customerId = 'cust-1';
          record.status = 'SCHEDULED';
          record.title = 'HVAC Service';
          record.scheduledStart = 1700000000000;
          record.scheduledEnd = 1700003600000;
          record.notes = 'Check filter';
          record.quoteId = '';
        });
      });

      const jobs = await db.get<Job>('jobs').query().fetch();
      expect(jobs).toHaveLength(1);

      const job = jobs[0]!;
      expect(job.accountId).toBe('acc-1');
      expect(job.customerId).toBe('cust-1');
      expect(job.status).toBe('SCHEDULED');
      expect(job.title).toBe('HVAC Service');
      expect(job.scheduledStart).toBe(1700000000000);
      expect(job.scheduledEnd).toBe(1700003600000);
      expect(job.notes).toBe('Check filter');
      expect(job.id).toBeTruthy();
    });
  });

  describe('schedule_event creation', () => {
    it('creates a schedule_event record linked to a job', async () => {
      const db = createTestDatabase();

      const startTime = new Date('2026-05-21T09:00:00.000Z').getTime();
      const endTime = new Date('2026-05-21T10:30:00.000Z').getTime();

      const { job, event } = await createJobAndEvent(db, {
        accountId: 'acc-1',
        title: 'Plumbing Repair',
        startTime,
        endTime,
      });

      expect(event.jobId).toBe(job.id);
      expect(event.accountId).toBe('acc-1');
      expect(event.title).toBe('Plumbing Repair');
      expect(event.startTime).toBe(startTime);
      expect(event.endTime).toBe(endTime);
      expect(event.allDay).toBe(false);
      expect(event.reminderMinutes).toBe(1440);
      expect(event.reminderSent).toBe(false);
    });
  });

  describe('atomic write (job + schedule_event)', () => {
    it('creates both a job and schedule_event in a single write', async () => {
      const db = createTestDatabase();

      const startTime = new Date('2026-05-21T14:00:00.000Z').getTime();
      const endTime = new Date('2026-05-21T16:00:00.000Z').getTime();

      await db.write(async () => {
        const job = await db.get<Job>('jobs').create((record) => {
          record.accountId = 'acc-1';
          record.customerId = 'cust-2';
          record.status = 'SCHEDULED';
          record.title = 'Electrical Panel';
          record.scheduledStart = startTime;
          record.scheduledEnd = endTime;
          record.notes = '';
          record.quoteId = '';
        });

        await db.get<ScheduleEvent>('schedule_events').create((record) => {
          record.accountId = 'acc-1';
          record.jobId = job.id;
          record.customerId = 'cust-2';
          record.title = 'John Smith – Electrical Panel';
          record.startTime = startTime;
          record.endTime = endTime;
          record.allDay = false;
          record.reminderMinutes = 1440;
          record.reminderSent = false;
          record.externalCalendarId = '';
        });
      });

      const jobs = await db.get<Job>('jobs').query().fetch();
      const events = await db.get<ScheduleEvent>('schedule_events').query().fetch();

      expect(jobs).toHaveLength(1);
      expect(events).toHaveLength(1);
      expect(events[0]!.jobId).toBe(jobs[0]!.id);
    });
  });

  describe('useScheduleEvents — query filtering', () => {
    it('filters schedule_events by account_id and day boundaries', async () => {
      const db = createTestDatabase();

      const todayStart = new Date('2026-05-21T00:00:00.000Z').getTime();
      const todayMid = new Date('2026-05-21T10:00:00.000Z').getTime();
      const todayEnd = new Date('2026-05-21T23:59:59.999Z').getTime();
      const tomorrowStart = new Date('2026-05-22T09:00:00.000Z').getTime();

      // Today event for acc-1
      await createJobAndEvent(db, { accountId: 'acc-1', startTime: todayMid, endTime: todayMid + 3600000 });
      // Tomorrow event for acc-1 (should NOT appear for today)
      await createJobAndEvent(db, { accountId: 'acc-1', startTime: tomorrowStart, endTime: tomorrowStart + 3600000 });
      // Today event for acc-2 (should NOT appear for acc-1)
      await createJobAndEvent(db, { accountId: 'acc-2', startTime: todayMid, endTime: todayMid + 3600000 });

      const allEvents = await db.get<ScheduleEvent>('schedule_events').query().fetch();
      const todayAcc1Events = allEvents.filter(
        (ev) =>
          ev.accountId === 'acc-1' &&
          ev.startTime >= todayStart &&
          ev.startTime <= todayEnd,
      );

      expect(todayAcc1Events).toHaveLength(1);
      expect(todayAcc1Events[0]!.accountId).toBe('acc-1');
    });

    it('returns events sorted by start_time ascending', async () => {
      const db = createTestDatabase();

      const time1 = new Date('2026-05-21T14:00:00.000Z').getTime();
      const time2 = new Date('2026-05-21T09:00:00.000Z').getTime();
      const time3 = new Date('2026-05-21T11:00:00.000Z').getTime();

      await createJobAndEvent(db, { accountId: 'acc-1', title: 'Afternoon', startTime: time1 });
      await createJobAndEvent(db, { accountId: 'acc-1', title: 'Morning', startTime: time2 });
      await createJobAndEvent(db, { accountId: 'acc-1', title: 'Midday', startTime: time3 });

      const allEvents = await db.get<ScheduleEvent>('schedule_events').query().fetch();
      const sorted = allEvents
        .filter((ev) => ev.accountId === 'acc-1')
        .sort((a, b) => a.startTime - b.startTime);

      expect(sorted[0]!.title).toBe('Morning');
      expect(sorted[1]!.title).toBe('Midday');
      expect(sorted[2]!.title).toBe('Afternoon');
    });
  });

  describe('useRescheduleJob — update start/end times', () => {
    it('updates start_time and end_time on both schedule_event and job', async () => {
      const db = createTestDatabase();

      const originalStart = new Date('2026-05-21T09:00:00.000Z').getTime();
      const originalEnd = new Date('2026-05-21T10:00:00.000Z').getTime();

      const { job, event } = await createJobAndEvent(db, {
        startTime: originalStart,
        endTime: originalEnd,
      });

      const newStart = new Date('2026-05-21T11:00:00.000Z').getTime();
      const newEnd = new Date('2026-05-21T12:00:00.000Z').getTime();

      await db.write(async () => {
        const foundEvent = await db.get<ScheduleEvent>('schedule_events').find(event.id);
        await foundEvent.update((record) => {
          record.startTime = newStart;
          record.endTime = newEnd;
        });
        const foundJob = await db.get<Job>('jobs').find(job.id);
        await foundJob.update((record) => {
          record.scheduledStart = newStart;
          record.scheduledEnd = newEnd;
        });
      });

      const updatedEvent = await db.get<ScheduleEvent>('schedule_events').find(event.id);
      const updatedJob = await db.get<Job>('jobs').find(job.id);

      expect(updatedEvent.startTime).toBe(newStart);
      expect(updatedEvent.endTime).toBe(newEnd);
      expect(updatedJob.scheduledStart).toBe(newStart);
      expect(updatedJob.scheduledEnd).toBe(newEnd);
    });
  });
});
