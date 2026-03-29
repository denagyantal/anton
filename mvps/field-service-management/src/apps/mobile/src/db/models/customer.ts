import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Customer extends Model {
  static table = 'customers';

  @text('account_id') accountId!: string;
  @text('name') name!: string;
  @text('email') email!: string;
  @text('phone') phone!: string;
  @text('address_line1') addressLine1!: string;
  @text('address_line2') addressLine2!: string;
  @text('city') city!: string;
  @text('state') state!: string;
  @text('zip') zip!: string;
  @text('notes') notes!: string;
  @text('quickbooks_customer_id') quickbooksCustomerId!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
