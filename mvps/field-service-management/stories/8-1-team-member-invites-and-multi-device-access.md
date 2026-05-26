# Story 8.1: Team Member Invites and Multi-Device Access

Status: ready-for-dev

## Story

As a shop owner,
I want to invite my techs and office partner to the same account for free,
so that everyone on my team can access shared schedules, jobs, and customers from their own phones.

## Acceptance Criteria

1. **[Owner can invite team members]** Given the user is the account owner, when they navigate to Settings > Team and tap "Invite Member", then they can enter the team member's name, email, and phone number and send an invite. (FR42)

2. **[Invite email is sent to the invitee]** Given an invite is sent, when the API processes the request, then an invitation email is sent to the team member's email address via Supabase Auth, and a pending invite record is created in the database with a 30-day expiry.

3. **[Owner-only enforcement on invite]** Given a MEMBER (non-owner) user, when they call `POST /api/v1/team-members/invite`, then the request is rejected with 403 FORBIDDEN.

4. **[Duplicate invite prevention]** Given an active pending invite already exists for an email on this account, when a second invite is attempted for the same email, then the API returns 422 VALIDATION_ERROR with message "An invite has already been sent to this email".

5. **[Invited member completes registration]** Given an invited user receives and accepts their invitation email (setting their password via Supabase), when they open the app and sign in with their new credentials, then the app detects they need to complete registration and prompts them for their name and phone number; after they submit, `POST /api/v1/auth/register-member` creates a TeamMember record linked to the correct account.

6. **[Team member sees all account data]** Given a team member logs in on their own device, when the app loads and syncs, then they see all shared data — schedules, jobs, customers, quotes, and invoices — for the account via the WatermelonDB sync engine using their shared account_id. (FR43)

7. **[No extra charge for unlimited members]** Given the account has 5+ team members, when all members are active, then there is no billing logic, no member count enforcement — the `POST /api/v1/team-members/invite` endpoint applies no cap on invites or team members.

8. **[Owner can view all team members and pending invites]** Given the owner views the Team screen, when `GET /api/v1/team-members` loads, then they see all active team members (name, email, role) and all pending (not-yet-accepted, not-expired) invites.

9. **[Owner can remove a team member]** Given the account owner views the team list, when they tap "Remove" on a member and confirm, then `DELETE /api/v1/team-members/:id` removes the member from the account and revokes their Supabase auth (best-effort).

10. **[Owner cannot remove themselves]** Given the owner calls `DELETE /api/v1/team-members/:id` with their own member ID, then the API returns 422 VALIDATION_ERROR with message "Account owner cannot remove themselves".

11. **[team_members synced to mobile]** Given team members exist on the account, when a sync pull runs, then `team_members` records are included in the pull response and stored in WatermelonDB so their names are available offline (e.g., for job assignment dropdowns in Story 8.2).

## Tasks / Subtasks

### Task 1: Create Prisma AccountInvite model and migration (AC: #2, #4, #8)

- [ ] 1.1: Create migration file `apps/api/prisma/migrations/20260526000000_add_account_invites/migration.sql`:

  ```sql
  CREATE TABLE account_invites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    invited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    accepted_at TIMESTAMP WITH TIME ZONE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
  );

  CREATE INDEX idx_account_invites_account_id ON account_invites(account_id);
  CREATE INDEX idx_account_invites_email ON account_invites(email);
  ```

- [ ] 1.2: Add `AccountInvite` model to `apps/api/prisma/schema.prisma` (insert after the `TeamMember` model):

  ```prisma
  model AccountInvite {
    id          String    @id @default(uuid())
    accountId   String    @map("account_id")
    email       String
    name        String
    phone       String?
    invitedAt   DateTime  @default(now()) @map("invited_at")
    acceptedAt  DateTime? @map("accepted_at")
    expiresAt   DateTime  @map("expires_at")
    createdAt   DateTime  @default(now()) @map("created_at")
    updatedAt   DateTime  @updatedAt @map("updated_at")

    account Account @relation(fields: [accountId], references: [id])

    @@index([accountId], name: "idx_account_invites_account_id")
    @@index([email], name: "idx_account_invites_email")
    @@map("account_invites")
  }
  ```

- [ ] 1.3: Add `invites AccountInvite[]` to the `Account` model relation list in `schema.prisma` (after the `teamMembers` line).

- [ ] 1.4: Run `npx prisma generate` in `apps/api/` to regenerate the Prisma client with the new model.

### Task 2: Create team-members API routes (AC: #1, #2, #3, #4, #7, #8, #9, #10)

- [ ] 2.1: Create `apps/api/src/routes/team-members.ts`:

  ```typescript
  import { Router, Request, Response, NextFunction } from 'express';
  import { z } from 'zod';
  import { prisma } from '../config/prisma.js';
  import { supabaseAdmin } from '../config/supabase.js';
  import { authMiddleware } from '../middleware/auth.js';
  import { validate } from '../middleware/validate.js';
  import { AppError } from '../utils/error.js';

  const router = Router();
  router.use(authMiddleware);

  const inviteSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
  });

  // GET /api/v1/team-members
  // Returns all active members + pending invites for the account
  router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accountId = req.user!.accountId;

      const [members, pendingInvites] = await Promise.all([
        prisma.teamMember.findMany({
          where: { accountId },
          select: { id: true, name: true, email: true, phone: true, role: true, createdAt: true },
          orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
        }),
        prisma.accountInvite.findMany({
          where: { accountId, acceptedAt: null, expiresAt: { gt: new Date() } },
          select: { id: true, name: true, email: true, phone: true, invitedAt: true, expiresAt: true },
          orderBy: { invitedAt: 'desc' },
        }),
      ]);

      res.json({
        data: {
          members: members.map((m) => ({ ...m, createdAt: m.createdAt.toISOString() })),
          pendingInvites: pendingInvites.map((i) => ({
            ...i,
            invitedAt: i.invitedAt.toISOString(),
            expiresAt: i.expiresAt.toISOString(),
          })),
        },
      });
    } catch (err) {
      next(err);
    }
  });

  // POST /api/v1/team-members/invite
  // Send an invite to a new team member (OWNER only)
  router.post(
    '/invite',
    validate(inviteSchema),
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const accountId = req.user!.accountId;
        const { name, email, phone } = req.body as { name: string; email: string; phone?: string };

        const requestingMember = await prisma.teamMember.findUnique({
          where: { authUserId: req.user!.id },
          select: { role: true },
        });
        if (!requestingMember || requestingMember.role !== 'OWNER') {
          next(new AppError('FORBIDDEN', 'Only account owners can invite team members', 403));
          return;
        }

        const existingMember = await prisma.teamMember.findFirst({ where: { accountId, email } });
        if (existingMember) {
          next(new AppError('VALIDATION_ERROR', 'This email is already a team member on this account', 422));
          return;
        }

        const existingInvite = await prisma.accountInvite.findFirst({
          where: { accountId, email, acceptedAt: null, expiresAt: { gt: new Date() } },
        });
        if (existingInvite) {
          next(new AppError('VALIDATION_ERROR', 'An invite has already been sent to this email', 422));
          return;
        }

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);

        await prisma.accountInvite.create({
          data: { accountId, email, name, phone: phone ?? null, expiresAt },
        });

        const appUrl = process.env['APP_URL'] ?? 'http://localhost:3000';
        const { error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
          data: { account_id: accountId, name, phone: phone ?? null },
          redirectTo: `${appUrl}/accept-invite`,
        });

        if (error && !error.message.toLowerCase().includes('already')) {
          await prisma.accountInvite.deleteMany({
            where: { accountId, email, acceptedAt: null },
          });
          next(new AppError('INTERNAL_ERROR', 'Failed to send invite email', 500));
          return;
        }

        res.status(201).json({ data: { invited: true, email, name } });
      } catch (err) {
        next(err);
      }
    },
  );

  // DELETE /api/v1/team-members/:id
  // Remove a team member from the account (OWNER only, cannot remove self)
  router.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const accountId = req.user!.accountId;
      const { id } = req.params;

      const requestingMember = await prisma.teamMember.findUnique({
        where: { authUserId: req.user!.id },
        select: { id: true, role: true },
      });
      if (!requestingMember || requestingMember.role !== 'OWNER') {
        next(new AppError('FORBIDDEN', 'Only account owners can remove team members', 403));
        return;
      }

      if (requestingMember.id === id) {
        next(new AppError('VALIDATION_ERROR', 'Account owner cannot remove themselves', 422));
        return;
      }

      const memberToRemove = await prisma.teamMember.findFirst({
        where: { id, accountId },
        select: { id: true, authUserId: true },
      });
      if (!memberToRemove) {
        next(new AppError('NOT_FOUND', 'Team member not found', 404));
        return;
      }

      await prisma.teamMember.delete({ where: { id } });

      // Best-effort Supabase user deletion — don't fail the response if this errors
      supabaseAdmin.auth.admin.deleteUser(memberToRemove.authUserId).catch(() => {});

      res.status(200).json({ data: { removed: true, id } });
    } catch (err) {
      next(err);
    }
  });

  export { router as teamMembersRouter };
  ```

### Task 3: Add POST /api/v1/auth/register-member to auth.ts (AC: #5, #6)

- [ ] 3.1: Add the `registerMemberSchema` and `register-member` route to `apps/api/src/routes/auth.ts` (add after the existing `POST /refresh` route, before the `export`):

  ```typescript
  const registerMemberSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().optional(),
  });

  // POST /api/v1/auth/register-member
  // Creates a TeamMember record for an invited user who has accepted their invite.
  // Called by the app after the invited user sets their password and signs in.
  // The account_id is already embedded in the user's Supabase metadata from the invite.
  router.post(
    '/register-member',
    authMiddleware,
    validate(registerMemberSchema),
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { name, phone } = req.body as { name: string; phone?: string };
        const authUserId = req.user!.id;
        const accountId = req.user!.accountId;

        if (!accountId) {
          next(new AppError('VALIDATION_ERROR', 'No account associated with this user. Use /auth/signup instead.', 422));
          return;
        }

        const account = await prisma.account.findUnique({ where: { id: accountId } });
        if (!account) {
          next(new AppError('NOT_FOUND', 'Account not found', 404));
          return;
        }

        // Idempotent — if TeamMember already exists, return it
        const existing = await prisma.teamMember.findUnique({ where: { authUserId } });
        if (existing) {
          res.status(200).json({
            data: {
              id: existing.id,
              accountId: existing.accountId,
              name: existing.name,
              role: existing.role,
            },
          });
          return;
        }

        // Find the pending invite to inherit phone if not provided
        const invite = await prisma.accountInvite.findFirst({
          where: { accountId, email: req.user!.email, acceptedAt: null, expiresAt: { gt: new Date() } },
        });

        const teamMember = await prisma.teamMember.create({
          data: {
            accountId,
            email: req.user!.email,
            phone: phone ?? invite?.phone ?? null,
            name: name || invite?.name || req.user!.email.split('@')[0]!,
            role: 'MEMBER',
            authUserId,
          },
        });

        if (invite) {
          await prisma.accountInvite.update({
            where: { id: invite.id },
            data: { acceptedAt: new Date() },
          });
        }

        res.status(201).json({
          data: {
            id: teamMember.id,
            accountId: teamMember.accountId,
            name: teamMember.name,
            role: teamMember.role,
          },
        });
      } catch (err) {
        next(err);
      }
    },
  );
  ```

- [ ] 3.2: Add `authMiddleware` import to `auth.ts` — it is not currently imported. Add at the top:

  ```typescript
  import { authMiddleware } from '../middleware/auth.js';
  ```

### Task 4: Register team-members router in index.ts (AC: #1, #8, #9)

- [ ] 4.1: In `apps/api/src/index.ts`, add the import after the existing route imports:

  ```typescript
  import { teamMembersRouter } from './routes/team-members.js';
  ```

- [ ] 4.2: Register the router after the accounts router:

  ```typescript
  // Team member routes (protected)
  app.use('/api/v1/team-members', teamMembersRouter);
  ```

### Task 5: Add team_members to WatermelonDB schema (AC: #11)

- [ ] 5.1: In `apps/mobile/src/db/schema.ts`, update `version: 10` to `version: 11`.

- [ ] 5.2: Add the `team_members` table schema to the tables array (after the `payments` table):

  ```typescript
  tableSchema({
    name: 'team_members',
    columns: [
      { name: 'account_id', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'phone', type: 'string', isOptional: true },
      { name: 'name', type: 'string' },
      { name: 'role', type: 'string' },
      { name: 'created_at', type: 'number' },
      { name: 'updated_at', type: 'number' },
      { name: 'synced_at', type: 'number', isOptional: true },
    ],
  }),
  ```

- [ ] 5.3: In `apps/mobile/src/db/migrations.ts`, add the new migration at the **beginning** of the migrations array (before the `toVersion: 10` entry — WatermelonDB processes in ascending version order):

  ```typescript
  {
    toVersion: 11,
    steps: [
      createTable({
        name: 'team_members',
        columns: [
          { name: 'account_id', type: 'string' },
          { name: 'email', type: 'string' },
          { name: 'phone', type: 'string', isOptional: true },
          { name: 'name', type: 'string' },
          { name: 'role', type: 'string' },
          { name: 'created_at', type: 'number' },
          { name: 'updated_at', type: 'number' },
          { name: 'synced_at', type: 'number', isOptional: true },
        ],
      }),
    ],
  },
  ```

  **Migration ordering note**: WatermelonDB `schemaMigrations` array should be in DESCENDING version order (highest first). The existing array starts with `toVersion: 10` at the top. Insert `toVersion: 11` before it.

### Task 6: Create WatermelonDB TeamMember model (AC: #11)

- [ ] 6.1: Create `apps/mobile/src/db/models/team-member.ts`:

  ```typescript
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
  ```

- [ ] 6.2: Update `apps/mobile/src/db/index.ts` — add the `TeamMember` import and register it in `modelClasses`:

  ```typescript
  import TeamMember from './models/team-member';
  ```

  Update `modelClasses` to include `TeamMember`:

  ```typescript
  modelClasses: [PricebookItem, Customer, Quote, LineItem, QuotePhoto, Job, JobPhoto, ScheduleEvent, Invoice, Payment, TeamMember],
  ```

### Task 7: Add team_members to sync pull (AC: #6, #11)

- [ ] 7.1: In `apps/api/src/services/sync-service.ts`, add `'team_members'` to `SYNC_TABLES` (insert before `'customers'` since team_members has no FK dependencies on other sync tables):

  ```typescript
  const SYNC_TABLES = [
    'team_members',  // NEW — pulled read-only, not pushed from mobile
    'customers',
    'quotes',
    'line_items',
    'jobs',
    'schedule_events',
    'invoices',
    'payments',
  ] as const;
  ```

- [ ] 7.2: Add `team_members` to the `TABLE_TO_MODEL` map:

  ```typescript
  const TABLE_TO_MODEL: Record<SyncTable, string> = {
    team_members: 'teamMember',   // NEW
    customers: 'customer',
    quotes: 'quote',
    line_items: 'lineItem',
    jobs: 'job',
    schedule_events: 'scheduleEvent',
    invoices: 'invoice',
    payments: 'payment',
  };
  ```

- [ ] 7.3: Add the `team_members` pull handler inside the `pullChanges` loop, after the `customers` block:

  ```typescript
  if (table === 'team_members') {
    // TeamMember uses camelCase fields
    records = await delegate.findMany({
      where: { accountId, updatedAt: { gt: since } },
    });
  }
  ```

- [ ] 7.4: In `pushChanges`, team_members must never be pushed from mobile (mobile is read-only for team membership). Add a guard at the top of the `for (const table of SYNC_TABLES)` loop in `pushChanges`:

  ```typescript
  // team_members is pull-only — mobile cannot push membership changes
  if (table === 'team_members') continue;
  ```

### Task 8: Update mobile API client with team member functions (AC: #1, #8, #9)

- [ ] 8.1: In `apps/mobile/src/services/api-client.ts`, add the team member types and functions (add after the `retryQbSync` function at the end of the file):

  ```typescript
  export interface TeamMemberResponse {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: 'OWNER' | 'MEMBER';
    createdAt: string;
  }

  export interface PendingInvite {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    invitedAt: string;
    expiresAt: string;
  }

  export async function getTeamMembers(): Promise<{
    members: TeamMemberResponse[];
    pendingInvites: PendingInvite[];
  }> {
    return apiClient.get('/api/v1/team-members');
  }

  export async function inviteTeamMember(payload: {
    name: string;
    email: string;
    phone?: string;
  }): Promise<{ invited: boolean; email: string; name: string }> {
    return apiClient.post('/api/v1/team-members/invite', payload);
  }

  export async function removeTeamMember(id: string): Promise<{ removed: boolean; id: string }> {
    return apiClient.delete(`/api/v1/team-members/${id}`);
  }

  export async function registerMember(payload: {
    name: string;
    phone?: string;
  }): Promise<{ id: string; accountId: string; name: string; role: string }> {
    return apiClient.post('/api/v1/auth/register-member', payload);
  }
  ```

- [ ] 8.2: Check that `apiClient` exposes a `delete` method. Look at the existing `apiClient` object in `api-client.ts`. If there is no `delete` method, add one following the same pattern as `get` and `post`:

  ```typescript
  async delete<T>(path: string): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'DELETE',
      headers,
    });
    return handleResponse<T>(response);
  },
  ```

### Task 9: Create Team Management mobile screen (AC: #1, #8, #9)

- [ ] 9.1: Create `apps/mobile/app/(tabs)/more/team.tsx`:

  ```typescript
  import { useState, useCallback } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
    ActivityIndicator,
    RefreshControl,
  } from 'react-native';
  import { useFocusEffect } from 'expo-router';
  import {
    getTeamMembers,
    inviteTeamMember,
    removeTeamMember,
    type TeamMemberResponse,
    type PendingInvite,
  } from '../../../src/services/api-client';

  export default function TeamScreen() {
    const [members, setMembers] = useState<TeamMemberResponse[]>([]);
    const [pendingInvites, setPendingInvites] = useState<PendingInvite[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showInviteForm, setShowInviteForm] = useState(false);
    const [inviteName, setInviteName] = useState('');
    const [inviteEmail, setInviteEmail] = useState('');
    const [invitePhone, setInvitePhone] = useState('');
    const [isInviting, setIsInviting] = useState(false);

    const loadTeam = useCallback(async () => {
      try {
        const data = await getTeamMembers();
        setMembers(data.members);
        setPendingInvites(data.pendingInvites);
      } catch {
        Alert.alert('Error', 'Could not load team members. Please try again.');
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    }, []);

    useFocusEffect(
      useCallback(() => {
        setIsLoading(true);
        loadTeam();
      }, [loadTeam]),
    );

    async function handleInvite() {
      if (!inviteName.trim() || !inviteEmail.trim()) {
        Alert.alert('Missing Info', 'Name and email are required.');
        return;
      }
      setIsInviting(true);
      try {
        await inviteTeamMember({
          name: inviteName.trim(),
          email: inviteEmail.trim().toLowerCase(),
          phone: invitePhone.trim() || undefined,
        });
        Alert.alert('Invite Sent', `An invitation email has been sent to ${inviteEmail}.`);
        setShowInviteForm(false);
        setInviteName('');
        setInviteEmail('');
        setInvitePhone('');
        await loadTeam();
      } catch (error: any) {
        Alert.alert('Invite Failed', error?.message ?? 'Could not send invite. Please try again.');
      } finally {
        setIsInviting(false);
      }
    }

    async function handleRemove(member: TeamMemberResponse) {
      Alert.alert(
        'Remove Team Member',
        `Remove ${member.name} from the account? They will lose access immediately.`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Remove',
            style: 'destructive',
            onPress: async () => {
              try {
                await removeTeamMember(member.id);
                await loadTeam();
              } catch (error: any) {
                Alert.alert('Error', error?.message ?? 'Could not remove team member.');
              }
            },
          },
        ],
      );
    }

    if (isLoading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={() => { setIsRefreshing(true); loadTeam(); }} />
          }
          ListHeaderComponent={
            <View>
              <Text style={styles.title}>Team</Text>
              {!showInviteForm ? (
                <TouchableOpacity style={styles.inviteButton} onPress={() => setShowInviteForm(true)}>
                  <Text style={styles.inviteButtonText}>+ Invite Member</Text>
                </TouchableOpacity>
              ) : (
                <InviteForm
                  name={inviteName}
                  email={inviteEmail}
                  phone={invitePhone}
                  isSubmitting={isInviting}
                  onChangeName={setInviteName}
                  onChangeEmail={setInviteEmail}
                  onChangePhone={setInvitePhone}
                  onSubmit={handleInvite}
                  onCancel={() => setShowInviteForm(false)}
                />
              )}
              <Text style={styles.sectionHeader}>Members ({members.length})</Text>
            </View>
          }
          renderItem={({ item }) => (
            <MemberRow member={item} onRemove={handleRemove} />
          )}
          ListFooterComponent={
            pendingInvites.length > 0 ? (
              <View>
                <Text style={styles.sectionHeader}>Pending Invites ({pendingInvites.length})</Text>
                {pendingInvites.map((invite) => (
                  <PendingInviteRow key={invite.id} invite={invite} />
                ))}
              </View>
            ) : null
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>No team members yet. Invite your first tech!</Text>
          }
        />
      </View>
    );
  }

  function MemberRow({
    member,
    onRemove,
  }: {
    member: TeamMemberResponse;
    onRemove: (m: TeamMemberResponse) => void;
  }) {
    return (
      <View style={styles.memberRow}>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberEmail}>{member.email}</Text>
          <Text style={[styles.memberRole, member.role === 'OWNER' ? styles.ownerBadge : styles.memberBadge]}>
            {member.role}
          </Text>
        </View>
        {member.role === 'MEMBER' && (
          <TouchableOpacity onPress={() => onRemove(member)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  function PendingInviteRow({ invite }: { invite: PendingInvite }) {
    const expiresDate = new Date(invite.expiresAt).toLocaleDateString();
    return (
      <View style={styles.memberRow}>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{invite.name}</Text>
          <Text style={styles.memberEmail}>{invite.email}</Text>
          <Text style={styles.pendingLabel}>Invite pending · expires {expiresDate}</Text>
        </View>
      </View>
    );
  }

  function InviteForm({
    name, email, phone, isSubmitting,
    onChangeName, onChangeEmail, onChangePhone,
    onSubmit, onCancel,
  }: {
    name: string; email: string; phone: string; isSubmitting: boolean;
    onChangeName: (v: string) => void;
    onChangeEmail: (v: string) => void;
    onChangePhone: (v: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
  }) {
    const { TextInput } = require('react-native');
    return (
      <View style={styles.inviteForm}>
        <Text style={styles.inviteFormTitle}>Invite Team Member</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name *"
          value={name}
          onChangeText={onChangeName}
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address *"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone (optional)"
          value={phone}
          onChangeText={onChangePhone}
          keyboardType="phone-pad"
        />
        <View style={styles.inviteFormButtons}>
          <TouchableOpacity
            style={[styles.submitButton, isSubmitting && styles.buttonDisabled]}
            onPress={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.submitButtonText}>Send Invite</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel} disabled={isSubmitting}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16 },
    sectionHeader: {
      fontSize: 13, fontWeight: '600', color: '#6b7280',
      paddingHorizontal: 24, paddingTop: 20, paddingBottom: 8,
      textTransform: 'uppercase', letterSpacing: 0.5, backgroundColor: '#f9fafb',
    },
    inviteButton: {
      marginHorizontal: 24, marginBottom: 8, paddingVertical: 12,
      backgroundColor: '#2563eb', borderRadius: 10, alignItems: 'center',
    },
    inviteButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    inviteForm: { marginHorizontal: 24, marginBottom: 12, padding: 16, backgroundColor: '#f9fafb', borderRadius: 12 },
    inviteFormTitle: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 12 },
    input: {
      backgroundColor: '#fff', borderWidth: 1, borderColor: '#d1d5db',
      borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 8, fontSize: 16,
    },
    inviteFormButtons: { flexDirection: 'row', gap: 8, marginTop: 4 },
    submitButton: { flex: 1, paddingVertical: 10, backgroundColor: '#2563eb', borderRadius: 8, alignItems: 'center' },
    submitButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
    cancelButton: { flex: 1, paddingVertical: 10, borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, alignItems: 'center' },
    cancelButtonText: { color: '#374151', fontSize: 15 },
    buttonDisabled: { opacity: 0.6 },
    memberRow: {
      flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
      paddingHorizontal: 24, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f0f0f0',
    },
    memberInfo: { flex: 1 },
    memberName: { fontSize: 16, fontWeight: '500', color: '#111827' },
    memberEmail: { fontSize: 14, color: '#6b7280', marginTop: 2 },
    memberRole: { fontSize: 12, fontWeight: '600', marginTop: 4, alignSelf: 'flex-start', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
    ownerBadge: { backgroundColor: '#fef3c7', color: '#92400e' },
    memberBadge: { backgroundColor: '#dbeafe', color: '#1e40af' },
    pendingLabel: { fontSize: 12, color: '#9ca3af', marginTop: 2 },
    removeButton: { paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: '#fca5a5', borderRadius: 6 },
    removeButtonText: { color: '#dc2626', fontSize: 14, fontWeight: '500' },
    emptyText: { textAlign: 'center', color: '#9ca3af', paddingTop: 32, paddingHorizontal: 24 },
  });
  ```

  **Note on `TextInput` import**: The `InviteForm` helper imports `TextInput` inline via `require('react-native')` to avoid a React Native import at module scope. Alternatively, add `TextInput` to the top-level `react-native` import — either approach is fine as long as TypeScript is happy.

### Task 10: Add Team row to Settings screen (AC: #1)

- [ ] 10.1: In `apps/mobile/app/(tabs)/more/index.tsx`, add a `TeamSection` between the QuickBooks row and Pricebook row. Add a new section header and navigation row:

  ```tsx
  <Text style={styles.sectionHeader}>Team</Text>

  <TouchableOpacity
    style={styles.row}
    onPress={() => router.push('/(tabs)/more/team')}
    testID="team-row"
  >
    <Text style={styles.rowText}>Team Members</Text>
    <Text style={styles.rowArrow}>›</Text>
  </TouchableOpacity>
  ```

  Insert this block after the QuickBooks row (the `router.push('/(tabs)/more/quickbooks')` TouchableOpacity) and before the Pricebook row.

### Task 11: Handle invited member "complete registration" state in auth (AC: #5, #6)

- [ ] 11.1: Update `apps/mobile/src/contexts/auth-context.tsx` — add `isInvitedMember` state flag and `registerMember` function.

  Add to `AuthContextValue` interface:
  ```typescript
  isInvitedMember: boolean;
  registerMember: (name: string, phone?: string) => Promise<void>;
  ```

  Add to component state:
  ```typescript
  const [isInvitedMember, setIsInvitedMember] = useState(false);
  ```

  Update `fetchAccount` to detect the invited-but-not-registered state:
  ```typescript
  const fetchAccount = useCallback(async () => {
    try {
      const data = await apiClient.get<AccountResponse>('/api/v1/accounts/me');
      setAccount(data);
      setIsInvitedMember(false);
    } catch (error: any) {
      setAccount(null);
      // 404 with a non-empty accountId means invited user who needs to complete registration
      if (error?.status === 404 && mappedUser?.accountId) {
        setIsInvitedMember(true);
      } else {
        setIsInvitedMember(false);
      }
    }
  }, [mappedUser?.accountId]);
  ```

  **Important**: `mappedUser` is not directly accessible inside the callback — you need to use a ref or restructure. The simplest approach: accept `accountId` as a parameter:

  ```typescript
  const fetchAccount = useCallback(async (accountId?: string) => {
    try {
      const data = await apiClient.get<AccountResponse>('/api/v1/accounts/me');
      setAccount(data);
      setIsInvitedMember(false);
    } catch (error: any) {
      setAccount(null);
      if (error?.status === 404 && accountId) {
        setIsInvitedMember(true);
      } else {
        setIsInvitedMember(false);
      }
    }
  }, []);
  ```

  Update all `fetchAccount()` call sites to pass the `accountId`:
  ```typescript
  // In useEffect (initial session load):
  await fetchAccount(mappedUser.accountId);

  // In onAuthStateChange handler:
  await fetchAccount(mappedUser?.accountId);
  ```

  Add `registerMember` function to the component:
  ```typescript
  const registerMember = useCallback(async (name: string, phone?: string) => {
    const { registerMember: apiRegisterMember } = await import('../services/api-client');
    await apiRegisterMember({ name, phone });
    await fetchAccount(user?.accountId);
  }, [fetchAccount, user?.accountId]);
  ```

  Add `isInvitedMember` and `registerMember` to the context value.

- [ ] 11.2: Update `apps/mobile/app/_layout.tsx` to handle the `isInvitedMember` state — redirect to a completion screen instead of the main tabs or onboarding:

  Look for the existing routing logic (likely in the root `_layout.tsx` or a navigation guard). Find where `isOnboarded` is checked and add the `isInvitedMember` check before it:

  ```typescript
  const { isAuthenticated, isLoading, isOnboarded, isInvitedMember } = useAuth();

  // In the Slot/routing logic:
  if (isInvitedMember) {
    return <Redirect href="/(auth)/complete-registration" />;
  }
  ```

  The exact modification depends on how the current `_layout.tsx` handles routing. Read the file first before modifying.

### Task 12: Create Complete Registration screen for invited members (AC: #5)

- [ ] 12.1: Create `apps/mobile/app/(auth)/complete-registration.tsx`:

  ```typescript
  import { useState } from 'react';
  import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert,
  } from 'react-native';
  import { useAuth } from '../../src/contexts/auth-context';

  export default function CompleteRegistrationScreen() {
    const { registerMember } = useAuth();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleComplete() {
      if (!name.trim()) {
        Alert.alert('Name Required', 'Please enter your full name.');
        return;
      }
      setIsSubmitting(true);
      try {
        await registerMember(name.trim(), phone.trim() || undefined);
        // Auth context will re-fetch account and update isInvitedMember → false
        // _layout.tsx will redirect to onboarding or main app
      } catch (error: any) {
        Alert.alert('Setup Failed', error?.message ?? 'Could not complete setup. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Complete Your Setup</Text>
        <Text style={styles.subtitle}>
          You've been invited to join a team. Enter your details to get started.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Your Full Name *"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoFocus
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number (optional)"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          onPress={handleComplete}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Join Team</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 24, paddingTop: 80, backgroundColor: '#fff' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 12 },
    subtitle: { fontSize: 16, color: '#6b7280', marginBottom: 32, lineHeight: 24 },
    input: {
      borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10,
      paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, marginBottom: 14,
    },
    button: {
      backgroundColor: '#2563eb', paddingVertical: 16, borderRadius: 10, alignItems: 'center', marginTop: 8,
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    buttonDisabled: { opacity: 0.6 },
  });
  ```

  After `registerMember` completes, the auth context calls `fetchAccount`, which sets `isInvitedMember = false` and loads the account. The `_layout.tsx` routing then redirects the user to the onboarding screen (if `!isOnboarded`) or the main tabs. Invited team members don't need to configure a trade/pricebook — they simply land on the main tabs. The `isOnboarded` check uses `account?.tradeType != null`; the OWNER's account already has a `tradeType`, so `isOnboarded` will be true for invited members on an already-onboarded account.

### Task 13: Tests (AC: #1, #2, #3, #4, #5, #6, #8, #9, #10, #11)

- [ ] 13.1: Create `apps/api/src/routes/team-members.test.ts`:

  ```typescript
  import request from 'supertest';
  import { app } from '../index';

  jest.mock('../config/prisma.js', () => ({
    prisma: {
      teamMember: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        findFirst: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
      },
      accountInvite: {
        findFirst: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        deleteMany: jest.fn(),
        update: jest.fn(),
      },
      account: {
        findUnique: jest.fn(),
      },
    },
  }));

  jest.mock('../config/supabase.js', () => ({
    supabaseAdmin: {
      auth: {
        getUser: jest.fn().mockResolvedValue({
          data: {
            user: {
              id: 'auth-user-1',
              email: 'owner@test.com',
              user_metadata: { account_id: 'account-1' },
            },
          },
          error: null,
        }),
        admin: {
          inviteUserByEmail: jest.fn().mockResolvedValue({ error: null }),
          deleteUser: jest.fn().mockResolvedValue({ error: null }),
        },
      },
    },
  }));

  const { prisma } = require('../config/prisma.js');

  describe('GET /api/v1/team-members', () => {
    it('returns members and pending invites', async () => {
      prisma.teamMember.findMany.mockResolvedValue([
        { id: 'tm-1', name: 'Owner', email: 'owner@test.com', phone: null, role: 'OWNER', createdAt: new Date('2026-03-23') },
      ]);
      prisma.accountInvite.findMany.mockResolvedValue([
        { id: 'inv-1', name: 'New Tech', email: 'tech@test.com', phone: null, invitedAt: new Date(), expiresAt: new Date(Date.now() + 86400000) },
      ]);

      const res = await request(app)
        .get('/api/v1/team-members')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(200);
      expect(res.body.data.members).toHaveLength(1);
      expect(res.body.data.pendingInvites).toHaveLength(1);
    });
  });

  describe('POST /api/v1/team-members/invite', () => {
    beforeEach(() => {
      prisma.teamMember.findUnique.mockResolvedValue({ role: 'OWNER' });
      prisma.teamMember.findFirst.mockResolvedValue(null);
      prisma.accountInvite.findFirst.mockResolvedValue(null);
      prisma.accountInvite.create.mockResolvedValue({ id: 'inv-new' });
    });

    it('returns 201 when invite is sent successfully', async () => {
      const res = await request(app)
        .post('/api/v1/team-members/invite')
        .set('Authorization', 'Bearer test-token')
        .send({ name: 'Jane Tech', email: 'jane@test.com' });

      expect(res.status).toBe(201);
      expect(res.body.data.invited).toBe(true);
    });

    it('returns 403 when called by a MEMBER (non-owner)', async () => {
      prisma.teamMember.findUnique.mockResolvedValue({ role: 'MEMBER' });

      const res = await request(app)
        .post('/api/v1/team-members/invite')
        .set('Authorization', 'Bearer test-token')
        .send({ name: 'Jane Tech', email: 'jane@test.com' });

      expect(res.status).toBe(403);
    });

    it('returns 422 when email is already a team member', async () => {
      prisma.teamMember.findFirst.mockResolvedValue({ id: 'existing-member' });

      const res = await request(app)
        .post('/api/v1/team-members/invite')
        .set('Authorization', 'Bearer test-token')
        .send({ name: 'Owner Again', email: 'owner@test.com' });

      expect(res.status).toBe(422);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('returns 422 when pending invite already exists for email', async () => {
      prisma.accountInvite.findFirst.mockResolvedValue({ id: 'existing-invite' });

      const res = await request(app)
        .post('/api/v1/team-members/invite')
        .set('Authorization', 'Bearer test-token')
        .send({ name: 'Jane Again', email: 'jane@test.com' });

      expect(res.status).toBe(422);
      expect(res.body.error.message).toContain('already been sent');
    });
  });

  describe('DELETE /api/v1/team-members/:id', () => {
    beforeEach(() => {
      prisma.teamMember.findUnique.mockResolvedValue({ id: 'owner-member-id', role: 'OWNER' });
    });

    it('returns 200 when member is removed', async () => {
      prisma.teamMember.findFirst.mockResolvedValue({ id: 'tm-2', authUserId: 'auth-2' });
      prisma.teamMember.delete.mockResolvedValue({});

      const res = await request(app)
        .delete('/api/v1/team-members/tm-2')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(200);
      expect(res.body.data.removed).toBe(true);
    });

    it('returns 422 when owner tries to remove themselves', async () => {
      const res = await request(app)
        .delete('/api/v1/team-members/owner-member-id')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(422);
      expect(res.body.error.message).toContain('cannot remove themselves');
    });

    it('returns 403 when called by a MEMBER', async () => {
      prisma.teamMember.findUnique.mockResolvedValue({ id: 'member-id', role: 'MEMBER' });

      const res = await request(app)
        .delete('/api/v1/team-members/some-id')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(403);
    });

    it('returns 404 when member does not exist on this account', async () => {
      prisma.teamMember.findFirst.mockResolvedValue(null);

      const res = await request(app)
        .delete('/api/v1/team-members/nonexistent-id')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(404);
    });
  });

  describe('POST /api/v1/auth/register-member', () => {
    it('creates TeamMember for invited user and returns 201', async () => {
      prisma.account.findUnique.mockResolvedValue({ id: 'account-1' });
      prisma.teamMember.findUnique.mockResolvedValue(null);
      prisma.accountInvite.findFirst.mockResolvedValue({ id: 'inv-1', phone: '555-1234' });
      prisma.teamMember.create.mockResolvedValue({ id: 'new-tm', accountId: 'account-1', name: 'New Tech', role: 'MEMBER' });
      prisma.accountInvite.update.mockResolvedValue({});

      const res = await request(app)
        .post('/api/v1/auth/register-member')
        .set('Authorization', 'Bearer test-token')
        .send({ name: 'New Tech' });

      expect(res.status).toBe(201);
      expect(res.body.data.role).toBe('MEMBER');
    });

    it('is idempotent — returns 200 if TeamMember already exists', async () => {
      prisma.account.findUnique.mockResolvedValue({ id: 'account-1' });
      prisma.teamMember.findUnique.mockResolvedValue({ id: 'existing', accountId: 'account-1', name: 'Tech', role: 'MEMBER' });

      const res = await request(app)
        .post('/api/v1/auth/register-member')
        .set('Authorization', 'Bearer test-token')
        .send({ name: 'Tech' });

      expect(res.status).toBe(200);
    });
  });
  ```

- [ ] 13.2: Add sync service test for `team_members` pull in `apps/api/src/routes/sync.test.ts` (or in a separate service test if it exists):

  ```typescript
  it('includes team_members in pull response', async () => {
    // Mock prisma.teamMember.findMany to return one member
    (prisma.teamMember.findMany as jest.Mock).mockResolvedValue([
      { id: 'tm-1', accountId: 'account-1', email: 'tech@test.com', phone: null, name: 'Tech', role: 'MEMBER', createdAt: new Date(), updatedAt: new Date(), syncedAt: null, pushToken: null, authUserId: 'auth-1' },
    ]);

    const res = await request(app)
      .post('/api/v1/sync/pull')
      .set('Authorization', 'Bearer test-token')
      .send({ lastPulledAt: null });

    expect(res.status).toBe(200);
    expect(res.body.data.changes.team_members).toBeDefined();
    expect(res.body.data.changes.team_members.updated).toHaveLength(1);
  });
  ```

## Dev Notes

### Foundation from Previous Stories

**Story 1.2 built:**
- `apps/api/src/routes/auth.ts` — `POST /signup`, `POST /login`, `POST /refresh`; creates OWNER TeamMember on signup; sets `account_id` in Supabase user_metadata
- `apps/api/src/middleware/auth.ts` — extracts `accountId` from `user_metadata.account_id`

**Story 1.3 built:**
- `apps/api/src/routes/accounts.ts` — `GET /api/v1/accounts/me` looks up TeamMember by `authUserId`; returns 404 if no TeamMember found
- `apps/mobile/src/contexts/auth-context.tsx` — calls `GET /api/v1/accounts/me` after sign-in; `isOnboarded = account?.tradeType != null`

**Existing TeamMember schema:**
- The `team_members` table already exists in PostgreSQL (migration `20260324000000_add_accounts_and_team_members`)
- TeamMember Prisma model uses camelCase with `@map()` decorators: `accountId`, `authUserId`, `pushToken`, etc.
- `email` has a `@unique` constraint (one Supabase user per email globally)
- `authUserId` has a `@unique` constraint

### Critical: Supabase inviteUserByEmail Behavior

`supabaseAdmin.auth.admin.inviteUserByEmail(email, { data, redirectTo })`:
- Creates a Supabase auth user if it doesn't exist yet, or re-sends the invite if the user exists but hasn't confirmed (is in "invited" state)
- Sets `user_metadata` to the `data` object provided — this is how `account_id` gets embedded
- Sends an email with a one-time token link (handled by Supabase, no Twilio/SMTP needed)
- The invite link redirects to `redirectTo` after the user sets their password
- Returns `{ error }` — `error` may be non-null if user already exists as a confirmed user (in which case we should not fail — just skip the invite email resend)
- The `APP_URL` env var must be set in `apps/api/.env` to point to the deployed web/app URL

### Critical: AccountId Flow for Invited Members

When an invited user accepts their invite and logs in:
1. Supabase JWT contains `user_metadata.account_id` (set by `inviteUserByEmail`)
2. Auth middleware reads `account_id` → `req.user.accountId` is populated correctly
3. Sync engine uses `req.user.accountId` to scope data — so all account data is immediately accessible
4. The only missing piece is the `team_members` DB record for this user's `authUserId`
5. `POST /api/v1/auth/register-member` creates that record — the app calls this after detecting `isInvitedMember = true`

### Critical: isInvitedMember Detection Logic

The `isInvitedMember` flag in `auth-context.tsx` is triggered when:
- User is authenticated (valid JWT)
- `user.accountId` is non-empty (account_id in user_metadata)
- `GET /api/v1/accounts/me` returns 404 (no TeamMember for this authUserId yet)

This is distinct from a regular 404 (network error, etc.) because the user has a valid accountId. The `ApiError` class already exposes `status: number`, so `error?.status === 404 && accountId` is the correct detection pattern.

After `POST /api/v1/auth/register-member` succeeds:
- `fetchAccount()` is called again → succeeds this time (TeamMember now exists)
- `isInvitedMember` becomes `false`
- `account` is populated
- `_layout.tsx` routes to `isOnboarded ? '/(tabs)' : '/(auth)/onboarding'`
- Since OWNER has already set tradeType, `isOnboarded` is true → invited member lands on main tabs ✓

### Critical: WatermelonDB Migration Ordering

The `schemaMigrations` array in `migrations.ts` processes migrations in **ascending version order** (WatermelonDB applies them from the user's current version upward). However, by convention in this codebase, newer migrations are at the **top** of the array. The `toVersion: 11` entry must go **before** `toVersion: 10`.

The current version in `schema.ts` is `10`. Change it to `11`.

### team_members: Pull-Only in Sync

Team members are managed server-side via the invite + register-member flow. Mobile devices must never push team_members changes. The `pushChanges` function in sync-service.ts has a `continue` guard for `team_members`.

The sync pull returns team_members data formatted by `toWatermelonRaw` (camelCase → snake_case, Date → Unix ms). The `TeamMember` Prisma model uses camelCase fields, so `toWatermelonRaw` will convert `accountId` → `account_id`, etc. correctly.

### Prisma model naming: AccountInvite

Prisma accessor: `prisma.accountInvite` (camelCase singular)
DB table: `account_invites`

Fields (all camelCase in TypeScript via `@map()`):
- `id`, `accountId`, `email`, `name`, `phone`, `invitedAt`, `acceptedAt`, `expiresAt`, `createdAt`, `updatedAt`

### Import paths — .js extensions required in API

```typescript
import { supabaseAdmin } from '../config/supabase.js';
import { authMiddleware } from '../middleware/auth.js';
import { teamMembersRouter } from './routes/team-members.js';
```

### APP_URL Environment Variable

The `POST /api/v1/team-members/invite` handler uses `process.env['APP_URL']` for the `redirectTo` parameter in Supabase's invite email. This must be added to `apps/api/.env.example`:
```
APP_URL=http://localhost:3000
```

For production, set it to the deployed web dashboard URL or a deep link scheme (e.g., `fieldservice://accept-invite`). For MVP, the Supabase default redirect (which just shows a "password set" page) is acceptable — invited users then open the app separately and sign in.

### TextInput in InviteForm

The `InviteForm` component uses `TextInput` from `react-native`. Add `TextInput` to the top-level import at the start of `team.tsx` instead of the inline `require()` approach shown in the task. Using `require()` for `TextInput` is noted in the task but the cleaner pattern is the standard import:

```typescript
import { ..., TextInput } from 'react-native';
```

### Do NOT Modify

- `apps/api/prisma/migrations/20260324000000_add_accounts_and_team_members/migration.sql` — team_members table already exists, no changes needed
- WatermelonDB sync for `line_items`, `quote_photos`, `job_photos` — not affected by this story
- `apps/api/src/routes/accounts.ts` — existing `GET /me` returns 404 when TeamMember doesn't exist; this is the correct behavior that triggers `isInvitedMember` detection
- Existing Supabase auth flow for regular signup (`POST /api/v1/auth/signup`) — invited members use a different path
- Stripe, Twilio, QuickBooks services — not touched in this story

### Project Structure Notes

| Action | File |
|--------|------|
| Create | `apps/api/prisma/migrations/20260526000000_add_account_invites/migration.sql` |
| Modify | `apps/api/prisma/schema.prisma` — add `AccountInvite` model, add relation to `Account` |
| Create | `apps/api/src/routes/team-members.ts` — `GET /`, `POST /invite`, `DELETE /:id` |
| Modify | `apps/api/src/routes/auth.ts` — add `POST /register-member`, add `authMiddleware` import |
| Modify | `apps/api/src/index.ts` — register `teamMembersRouter` |
| Modify | `apps/mobile/src/db/schema.ts` — version 10→11, add `team_members` table |
| Modify | `apps/mobile/src/db/migrations.ts` — add `toVersion: 11` migration step |
| Create | `apps/mobile/src/db/models/team-member.ts` — WatermelonDB TeamMember model |
| Modify | `apps/mobile/src/db/index.ts` — add TeamMember to modelClasses |
| Modify | `apps/api/src/services/sync-service.ts` — add `team_members` to SYNC_TABLES, TABLE_TO_MODEL, pullChanges, pushChanges guard |
| Modify | `apps/mobile/src/services/api-client.ts` — add `getTeamMembers`, `inviteTeamMember`, `removeTeamMember`, `registerMember`, add `delete` method to `apiClient` if missing |
| Create | `apps/mobile/app/(tabs)/more/team.tsx` — Team management screen |
| Modify | `apps/mobile/app/(tabs)/more/index.tsx` — add Team Members row |
| Modify | `apps/mobile/src/contexts/auth-context.tsx` — add `isInvitedMember`, `registerMember` |
| Modify | `apps/mobile/app/_layout.tsx` — handle `isInvitedMember` routing |
| Create | `apps/mobile/app/(auth)/complete-registration.tsx` — invited member completion screen |
| Create | `apps/api/src/routes/team-members.test.ts` — route tests |

### References

- [Source: epics.md#Story 8.1] — User story statement, AC: FR42, FR43
- [Source: architecture.md#Authentication & Security] — "Account-level access control. All team members on an account see all data." "No role-based permissions in MVP — all team members are equal." (Note: OWNER-only enforcement on invite/remove is a practical safety guard added on top of this)
- [Source: architecture.md#API Design: REST with JSON] — `POST /api/v1/team-members/invite`, `DELETE /api/v1/team-members/:id`
- [Source: architecture.md#Data Architecture] — `team_members` table schema; `accounts` → `team_members` 1:many relation
- [Source: architecture.md#Service Boundaries] — "sync-service owns all data synchronization"
- [Source: architecture.md#Sync Engine] — "Event-sourced sync model using WatermelonDB sync protocol. Push/pull API endpoints."
- [Source: stories/1-2-user-registration-and-authentication.md] — signup flow creates OWNER TeamMember; `account_id` stored in user_metadata
- [Source: stories/1-3-business-profile-setup-and-onboarding.md] — `isOnboarded = account?.tradeType != null`; auth context pattern
- [Source: stories/6-2-automatic-background-sync-with-conflict-resolution.md#Dev Notes] — sync service SYNC_TABLES pattern
- [Source: stories/7-3-sync-status-dashboard-and-manual-re-sync.md#Dev Notes] — Prisma naming conventions, `.js` import extensions, test mock patterns

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
