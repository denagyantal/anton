import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class PricebookItem extends Model {
  static table = 'pricebook_items';

  @text('account_id') accountId!: string;
  @text('category') category!: string;
  @text('name') name!: string;
  @text('description') description!: string;
  @field('unit_price') unitPrice!: number;
  @text('unit_type') unitType!: string;
  @field('is_active') isActive!: boolean;
  @field('sort_order') sortOrder!: number;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
