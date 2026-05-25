import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Payment extends Model {
  static table = 'payments';

  @text('account_id') accountId!: string;
  @text('invoice_id') invoiceId!: string;
  @field('amount') amount!: number;
  @text('stripe_payment_id') stripePaymentId!: string | null;
  @text('payment_method') paymentMethod!: string;
  @text('status') status!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
  @field('synced_at') syncedAt!: number | null;
}
