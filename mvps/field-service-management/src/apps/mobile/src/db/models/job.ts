import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Job extends Model {
  static table = 'jobs';

  @text('account_id') accountId!: string;
  @text('customer_id') customerId!: string;
  @text('quote_id') quoteId!: string;
  @text('assigned_to_id') assignedToId!: string;
  @text('status') status!: string;
  @text('title') title!: string;
  @text('description') description!: string;
  @field('scheduled_start') scheduledStart!: number | null;
  @field('scheduled_end') scheduledEnd!: number | null;
  @field('completed_at') completedAt!: number | null;
  @text('signature_url') signatureUrl!: string;
  @text('notes') notes!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
