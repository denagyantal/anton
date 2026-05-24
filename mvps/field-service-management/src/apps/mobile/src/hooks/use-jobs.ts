import { useState, useEffect, useCallback } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import Job from '../db/models/job';

export const VALID_TRANSITIONS: Record<string, string[]> = {
  QUOTED: ['SCHEDULED', 'IN_PROGRESS'],
  SCHEDULED: ['IN_PROGRESS'],
  IN_PROGRESS: ['COMPLETE'],
  COMPLETE: ['INVOICED'],
  INVOICED: [],
};

export function useJobs(statusFilter?: string): { jobs: Job[]; isLoading: boolean } {
  const database = useDatabase();
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) {
      setJobs([]);
      setIsLoading(false);
      return;
    }

    const clauses = [
      Q.where('account_id', user.accountId),
      ...(statusFilter ? [Q.where('status', statusFilter)] : []),
      Q.sortBy('created_at', Q.desc),
    ];

    const subscription = database
      .get<Job>('jobs')
      .query(...clauses)
      .observe()
      .subscribe((records) => {
        setJobs(records);
        setIsLoading(false);
      });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId, statusFilter]);

  return { jobs, isLoading };
}

export function useJob(id: string): { job: Job | null; isLoading: boolean } {
  const database = useDatabase();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setJob(null);
      setIsLoading(false);
      return;
    }

    const subscription = database
      .get<Job>('jobs')
      .findAndObserve(id)
      .subscribe({
        next: (record) => {
          setJob(record);
          setIsLoading(false);
        },
        error: () => {
          setJob(null);
          setIsLoading(false);
        },
      });

    return () => subscription.unsubscribe();
  }, [database, id]);

  return { job, isLoading };
}

export function useTransitionJobStatus(): {
  transitionStatus: (jobId: string, newStatus: string) => Promise<void>;
} {
  const database = useDatabase();

  const transitionStatus = useCallback(
    async (jobId: string, newStatus: string): Promise<void> => {
      await database.write(async () => {
        const job = await database.get<Job>('jobs').find(jobId);
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
    },
    [database],
  );

  return { transitionStatus };
}

export function useCustomerJobs(customerId: string): { jobs: Job[]; isLoading: boolean } {
  const database = useDatabase();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!customerId) {
      setJobs([]);
      setIsLoading(false);
      return;
    }

    const subscription = database
      .get<Job>('jobs')
      .query(Q.where('customer_id', customerId))
      .observe()
      .subscribe((results) => {
        // Sort in JS since WatermelonDB observe() ORDER BY is adapter-dependent
        const sorted = [...results].sort((a, b) => {
          const aTime = a.scheduledStart ? new Date(a.scheduledStart).getTime() : 0;
          const bTime = b.scheduledStart ? new Date(b.scheduledStart).getTime() : 0;
          return bTime - aTime;
        });
        setJobs(sorted);
        setIsLoading(false);
      });

    return () => subscription.unsubscribe();
  }, [database, customerId]);

  return { jobs, isLoading };
}

export function useUpdateJobNotes(): {
  updateNotes: (jobId: string, notes: string) => Promise<void>;
} {
  const database = useDatabase();

  const updateNotes = useCallback(
    async (jobId: string, notes: string): Promise<void> => {
      await database.write(async () => {
        const job = await database.get<Job>('jobs').find(jobId);
        await job.update((record) => {
          record.notes = notes;
        });
      });
    },
    [database],
  );

  return { updateNotes };
}
