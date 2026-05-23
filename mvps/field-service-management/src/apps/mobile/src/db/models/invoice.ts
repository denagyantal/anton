import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Invoice extends Model {
  static table = 'invoices';

  @text('account_id') accountId!: string;
  @text('customer_id') customerId!: string;
  @text('job_id') jobId!: string | null;
  @text('quote_id') quoteId!: string | null;
  @text('invoice_number') invoiceNumber!: string | null;
  @text('status') status!: string;
  @field('subtotal') subtotal!: number;
  @field('tax_amount') taxAmount!: number;
  @field('total') total!: number;
  @field('amount_paid') amountPaid!: number;
  @text('pdf_url') pdfUrl!: string | null;
  @text('payment_token') paymentToken!: string | null;
  @field('sent_at') sentAt!: number | null;
  @field('paid_at') paidAt!: number | null;
  @field('due_at') dueAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
