import { Model } from '@nozbe/watermelondb';
import { text, readonly, date, field } from '@nozbe/watermelondb/decorators';

export default class TeamMember extends Model {
  static table = 'team_members';

  @text('account_id') accountId!: string;
  @text('email') email!: string;
  @text('phone') phone!: string;
  @text('name') name!: string;
  @text('role') role!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
  @field('synced_at') syncedAt!: number | null;
}
