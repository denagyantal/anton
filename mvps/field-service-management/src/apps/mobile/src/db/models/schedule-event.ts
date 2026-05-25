import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class ScheduleEvent extends Model {
  static table = 'schedule_events';

  @text('account_id') accountId!: string;
  @text('job_id') jobId!: string;
  @text('assigned_to_id') assignedToId!: string;
  @text('customer_id') customerId!: string;
  @text('title') title!: string;
  @field('start_time') startTime!: number;
  @field('end_time') endTime!: number;
  @field('all_day') allDay!: boolean;
  @field('reminder_minutes') reminderMinutes!: number;
  @field('reminder_sent') reminderSent!: boolean;
  @text('external_calendar_id') externalCalendarId!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
  @field('synced_at') syncedAt!: number | null;
}
