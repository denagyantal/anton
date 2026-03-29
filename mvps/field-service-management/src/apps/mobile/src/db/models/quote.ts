import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Quote extends Model {
  static table = 'quotes';

  @text('account_id') accountId!: string;
  @text('customer_id') customerId!: string;
  @text('created_by_id') createdById!: string;
  @text('status') status!: string;
  @field('subtotal') subtotal!: number;
  @field('tax_amount') taxAmount!: number;
  @field('total') total!: number;
  @text('notes') notes!: string;
  @text('approval_token') approvalToken!: string;
  @field('sent_at') sentAt!: number | null;
  @field('approved_at') approvedAt!: number | null;
  @field('expires_at') expiresAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
