import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class QuotePhoto extends Model {
  static table = 'quote_photos';

  @text('quote_id') quoteId!: string;
  @text('local_uri') localUri!: string;
  @text('remote_url') remoteUrl!: string;
  @text('caption') caption!: string;
  @field('taken_at') takenAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
  @field('synced_at') syncedAt!: number | null;
}
