import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class LineItem extends Model {
  static table = 'line_items';

  @text('quote_id') quoteId!: string;
  @text('pricebook_item_id') pricebookItemId!: string;
  @text('description') description!: string;
  @field('quantity') quantity!: number;
  @field('unit_price') unitPrice!: number;
  @field('total') total!: number;
  @field('sort_order') sortOrder!: number;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
