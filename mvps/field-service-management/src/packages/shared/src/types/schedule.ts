export interface ScheduleEvent {
  id: string;
  accountId: string;
  jobId: string | null;
  assignedToId: string | null;
  title: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
  reminderMinutes: number | null;
  reminderSent: boolean;
  externalCalendarId: string | null;
  createdAt: string;
  updatedAt: string;
}
