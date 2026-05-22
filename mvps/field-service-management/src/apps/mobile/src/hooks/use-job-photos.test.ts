import { Database, Q } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import Job from '../db/models/job';
import JobPhoto from '../db/models/job-photo';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({ adapter, modelClasses: [Job, JobPhoto] });
}

async function createJob(db: Database, accountId = 'acc-1'): Promise<Job> {
  let created!: Job;
  await db.write(async () => {
    created = await db.get<Job>('jobs').create((record) => {
      record.accountId = accountId;
      record.customerId = 'cust-1';
      record.status = 'SCHEDULED';
      record.title = 'Test Job';
      record.notes = '';
      record.quoteId = '';
      record.signatureUrl = '';
    });
  });
  return created;
}

describe('job_photos WatermelonDB operations', () => {
  describe('adding a job_photo record', () => {
    it('persists correctly and is queryable by job_id', async () => {
      const db = createTestDatabase();
      const job = await createJob(db);

      const localUri = 'file:///photos/test.jpg';
      let photo!: JobPhoto;

      await db.write(async () => {
        photo = await db.get<JobPhoto>('job_photos').create((record) => {
          record.jobId = job.id;
          record.localUri = localUri;
          record.remoteUrl = '';
          record.caption = 'Before photo';
          record.takenAt = Date.now();
        });
      });

      const photos = await db
        .get<JobPhoto>('job_photos')
        .query()
        .fetch();

      expect(photos).toHaveLength(1);
      expect(photos[0]!.jobId).toBe(job.id);
      expect(photos[0]!.localUri).toBe(localUri);
      expect(photos[0]!.remoteUrl).toBe('');
      expect(photos[0]!.caption).toBe('Before photo');
      expect(photos[0]!.id).toBeTruthy();
    });
  });

  describe('updateSignature', () => {
    it('writes the local URI to job.signatureUrl without modifying other job fields', async () => {
      const db = createTestDatabase();
      const job = await createJob(db);
      const originalStatus = job.status;

      const signaturePath = 'file:///signatures/job-1.png';

      await db.write(async () => {
        const foundJob = await db.get<Job>('jobs').find(job.id);
        await foundJob.update((record) => {
          record.signatureUrl = signaturePath;
        });
      });

      const updatedJob = await db.get<Job>('jobs').find(job.id);
      expect(updatedJob.signatureUrl).toBe(signaturePath);
      expect(updatedJob.status).toBe(originalStatus);
      expect(updatedJob.title).toBe(job.title);
    });
  });

  describe('querying job_photos by job_id', () => {
    it('returns only photos for the specified job, not photos belonging to a different job', async () => {
      const db = createTestDatabase();
      const job1 = await createJob(db, 'acc-1');
      const job2 = await createJob(db, 'acc-1');

      await db.write(async () => {
        await db.get<JobPhoto>('job_photos').create((record) => {
          record.jobId = job1.id;
          record.localUri = 'file:///photos/job1.jpg';
          record.remoteUrl = '';
          record.caption = 'Job 1 photo';
          record.takenAt = Date.now();
        });
        await db.get<JobPhoto>('job_photos').create((record) => {
          record.jobId = job2.id;
          record.localUri = 'file:///photos/job2.jpg';
          record.remoteUrl = '';
          record.caption = 'Job 2 photo';
          record.takenAt = Date.now();
        });
      });

      const allPhotos = await db.get<JobPhoto>('job_photos').query().fetch();
      const job1Photos = allPhotos.filter((p) => p.jobId === job1.id);

      expect(job1Photos).toHaveLength(1);
      expect(job1Photos[0]!.jobId).toBe(job1.id);
      expect(job1Photos[0]!.caption).toBe('Job 1 photo');
    });
  });
});
