import { useState, useEffect, useCallback } from 'react';
import { Q } from '@nozbe/watermelondb';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import ScheduleEvent from '../db/models/schedule-event';
import Job from '../db/models/job';

export function useScheduleEvents(date: Date): { events: ScheduleEvent[]; isLoading: boolean } {
  const database = useDatabase();
  const { user } = useAuth();
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) {
      setEvents([]);
      setIsLoading(false);
      return;
    }

    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(date);
    dayEnd.setHours(23, 59, 59, 999);

    const subscription = database
      .get<ScheduleEvent>('schedule_events')
      .query(
        Q.where('account_id', user.accountId),
        Q.where('start_time', Q.gte(dayStart.getTime())),
        Q.where('start_time', Q.lte(dayEnd.getTime())),
        Q.sortBy('start_time', Q.asc),
      )
      .observe()
      .subscribe((records) => {
        setEvents(records);
        setIsLoading(false);
      });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId, date.toDateString()]);

  return { events, isLoading };
}

export interface CreateJobParams {
  customerId: string;
  customerName: string;
  title: string;
  startTime: Date;
  endTime: Date;
  quoteId?: string;
  notes?: string;
  externalCalendarId?: string;
  initialStatus?: string;
}

export function useCreateJob(): { createJob: (params: CreateJobParams) => Promise<{ job: Job; event: ScheduleEvent }> } {
  const database = useDatabase();
  const { user } = useAuth();

  const createJob = useCallback(
    async (params: CreateJobParams): Promise<{ job: Job; event: ScheduleEvent }> => {
      if (!user?.accountId) throw new Error('Not authenticated');

      let createdJob!: Job;
      let createdEvent!: ScheduleEvent;

      const storedMinutes = await AsyncStorage.getItem('reminderMinutes');
      const reminderMins = storedMinutes ? parseInt(storedMinutes, 10) : 1440;

      await database.write(async () => {
        createdJob = await database.get<Job>('jobs').create((record) => {
          record.accountId = user.accountId;
          record.customerId = params.customerId;
          record.quoteId = params.quoteId ?? '';
          record.status = params.initialStatus ?? 'SCHEDULED';
          record.title = params.title;
          record.scheduledStart = params.startTime.getTime();
          record.scheduledEnd = params.endTime.getTime();
          record.notes = params.notes ?? '';
        });

        createdEvent = await database.get<ScheduleEvent>('schedule_events').create((record) => {
          record.accountId = user.accountId;
          record.jobId = createdJob.id;
          record.customerId = params.customerId;
          // Store customer name in title for MVP display (avoids join)
          record.title = `${params.customerName} – ${params.title}`;
          record.startTime = params.startTime.getTime();
          record.endTime = params.endTime.getTime();
          record.allDay = false;
          record.reminderMinutes = reminderMins;
          record.reminderSent = false;
          record.externalCalendarId = params.externalCalendarId ?? '';
        });
      });

      return { job: createdJob, event: createdEvent };
    },
    [database, user?.accountId],
  );

  return { createJob };
}

export function useRescheduleJob(): {
  rescheduleEvent: (eventId: string, jobId: string, newStart: Date, newEnd: Date) => Promise<void>;
} {
  const database = useDatabase();

  const rescheduleEvent = useCallback(
    async (eventId: string, jobId: string, newStart: Date, newEnd: Date): Promise<void> => {
      await database.write(async () => {
        const event = await database.get<ScheduleEvent>('schedule_events').find(eventId);
        await event.update((record) => {
          record.startTime = newStart.getTime();
          record.endTime = newEnd.getTime();
          record.reminderSent = false;
        });
        if (jobId) {
          const job = await database.get<Job>('jobs').find(jobId);
          await job.update((record) => {
            record.scheduledStart = newStart.getTime();
            record.scheduledEnd = newEnd.getTime();
          });
        }
      });
    },
    [database],
  );

  return { rescheduleEvent };
}
