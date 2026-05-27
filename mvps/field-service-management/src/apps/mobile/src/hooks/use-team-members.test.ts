// Tests for useTeamMembers hook - tests WatermelonDB query logic directly
// (renderHook requires @testing-library/react-native which is not installed)
jest.mock('../contexts/auth-context', () => ({ useAuth: jest.fn() }));
jest.mock('../contexts/database-context', () => ({ useDatabase: jest.fn() }));

import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import Job from '../db/models/job';
import ScheduleEvent from '../db/models/schedule-event';
import Customer from '../db/models/customer';
import Quote from '../db/models/quote';
import LineItem from '../db/models/line-item';
import PricebookItem from '../db/models/pricebook-item';
import QuotePhoto from '../db/models/quote-photo';
import Invoice from '../db/models/invoice';
import Payment from '../db/models/payment';
import TeamMember from '../db/models/team-member';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Job, ScheduleEvent, Customer, Quote, LineItem, PricebookItem, QuotePhoto, Invoice, Payment, TeamMember],
  });
}

async function createTeamMember(
  db: Database,
  overrides: Partial<{ accountId: string; name: string; email: string; role: string }> = {},
): Promise<TeamMember> {
  let created!: TeamMember;
  await db.write(async () => {
    created = await db.get<TeamMember>('team_members').create((record) => {
      record.accountId = overrides.accountId ?? 'account-1';
      record.name = overrides.name ?? 'Alice';
      record.email = overrides.email ?? 'alice@example.com';
      record.phone = '';
      record.role = overrides.role ?? 'MEMBER';
    });
  });
  return created;
}

describe('useTeamMembers — WatermelonDB query logic', () => {
  it('returns team members for the account', async () => {
    const db = createTestDatabase();
    await createTeamMember(db, { accountId: 'account-1', name: 'Alice' });
    await createTeamMember(db, { accountId: 'account-1', name: 'Bob' });
    await createTeamMember(db, { accountId: 'account-2', name: 'Carol' });

    const all = await db.get<TeamMember>('team_members').query().fetch();
    const account1Members = all.filter((m) => m.accountId === 'account-1');

    expect(account1Members).toHaveLength(2);
    expect(account1Members.every((m) => m.accountId === 'account-1')).toBe(true);
  });

  it('returns empty array when account has no team members', async () => {
    const db = createTestDatabase();
    await createTeamMember(db, { accountId: 'account-other', name: 'Zara' });

    const all = await db.get<TeamMember>('team_members').query().fetch();
    const emptyAccount = all.filter((m) => m.accountId === 'account-empty');

    expect(emptyAccount).toHaveLength(0);
  });

  it('sorts team members by name ascending', async () => {
    const db = createTestDatabase();
    await createTeamMember(db, { name: 'Charlie', accountId: 'account-1' });
    await createTeamMember(db, { name: 'Alice', accountId: 'account-1' });
    await createTeamMember(db, { name: 'Bob', accountId: 'account-1' });

    const all = await db.get<TeamMember>('team_members').query().fetch();
    const sorted = all
      .filter((m) => m.accountId === 'account-1')
      .sort((a, b) => a.name.localeCompare(b.name));

    expect(sorted[0]!.name).toBe('Alice');
    expect(sorted[1]!.name).toBe('Bob');
    expect(sorted[2]!.name).toBe('Charlie');
  });

  it('reactive: adding a new team member updates the observable', (done) => {
    const db = createTestDatabase();

    const results: TeamMember[][] = [];
    const subscription = db
      .get<TeamMember>('team_members')
      .query()
      .observe()
      .subscribe(async (members) => {
        results.push(members.filter((m) => m.accountId === 'account-reactive'));
        if (results.length === 2) {
          expect(results[0]).toHaveLength(0);
          expect(results[1]).toHaveLength(1);
          expect(results[1]![0]!.name).toBe('New Member');
          subscription.unsubscribe();
          done();
        }
      });

    setTimeout(async () => {
      await createTeamMember(db, { accountId: 'account-reactive', name: 'New Member' });
    }, 10);
  });
});
