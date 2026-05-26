import { prisma } from '../config/prisma.js';
import { syncCustomerToQuickBooks } from './quickbooks-service.js';

// Tables included in sync, in dependency order
// (parents before children to satisfy FK constraints on push)
const SYNC_TABLES = [
  'team_members',
  'customers',
  'quotes',
  'line_items',
  'jobs',
  'schedule_events',
  'invoices',
  'payments',
] as const;

type SyncTable = (typeof SYNC_TABLES)[number];

// Map table names to Prisma delegate accessor keys
const TABLE_TO_MODEL: Record<SyncTable, string> = {
  team_members: 'teamMember',
  customers: 'customer',
  quotes: 'quote',
  line_items: 'lineItem',
  jobs: 'job',
  schedule_events: 'scheduleEvent',
  invoices: 'invoice',
  payments: 'payment',
};

// Convert Prisma record to WatermelonDB raw format:
// camelCase → snake_case, Date → Unix ms integer
function toWatermelonRaw(record: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => {
      const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      const convertedValue = value instanceof Date ? value.getTime() : value;
      return [snakeKey, convertedValue];
    }),
  );
}

interface PullInput {
  lastPulledAt: number | null;
  accountId: string;
}

interface PullResult {
  changes: Record<string, { created: object[]; updated: object[]; deleted: string[] }>;
  timestamp: number;
}

export async function pullChanges({ lastPulledAt, accountId }: PullInput): Promise<PullResult> {
  const since = lastPulledAt ? new Date(lastPulledAt) : new Date(0);
  const timestamp = Date.now();

  const changes: PullResult['changes'] = {};

  for (const table of SYNC_TABLES) {
    const modelKey = TABLE_TO_MODEL[table];
    const delegate = (prisma as any)[modelKey];

    let records: Record<string, unknown>[] = [];

    if (table === 'team_members') {
      // TeamMember uses camelCase fields
      records = await delegate.findMany({
        where: { accountId, updatedAt: { gt: since } },
      });
    } else if (table === 'customers') {
      // Customer uses camelCase field names
      records = await delegate.findMany({
        where: { accountId, updatedAt: { gt: since } },
      });
    } else if (table === 'quotes') {
      // Quote uses snake_case field names directly
      records = await delegate.findMany({
        where: { account_id: accountId, updated_at: { gt: since } },
      });
    } else if (table === 'line_items') {
      // LineItem has no direct accountId — scoped through quote
      records = await prisma.lineItem.findMany({
        where: {
          quote: { account_id: accountId },
          updated_at: { gt: since },
        },
      });
    } else if (table === 'jobs') {
      // Job uses camelCase
      records = await delegate.findMany({
        where: { accountId, updatedAt: { gt: since } },
      });
    } else if (table === 'schedule_events') {
      // ScheduleEvent uses camelCase
      records = await delegate.findMany({
        where: { accountId, updatedAt: { gt: since } },
      });
    } else if (table === 'invoices') {
      // Invoice uses camelCase
      records = await delegate.findMany({
        where: { accountId, updatedAt: { gt: since } },
      });
    } else if (table === 'payments') {
      // Payment uses camelCase
      records = await delegate.findMany({
        where: { accountId, updatedAt: { gt: since } },
      });
    }

    changes[table] = {
      created: [],
      updated: records.map(r => toWatermelonRaw(r as Record<string, unknown>)),
      deleted: [],
    };
  }

  return { changes, timestamp };
}

interface PushRecord {
  id: string;
  updated_at?: number;
  [key: string]: unknown;
}

interface PushTableChanges {
  created: PushRecord[];
  updated: PushRecord[];
  deleted: string[];
}

interface PushInput {
  changes: Partial<Record<SyncTable, PushTableChanges>>;
  accountId: string;
}

export async function pushChanges({ changes, accountId }: PushInput): Promise<void> {
  // Process in dependency order to avoid FK violations
  for (const table of SYNC_TABLES) {
    // team_members is pull-only — mobile cannot push membership changes
    if (table === 'team_members') continue;

    const tableChanges = changes[table];
    if (!tableChanges) continue;

    // sendCreatedAsUpdated=true means no separate 'created' array
    const records = [...(tableChanges.updated ?? []), ...(tableChanges.created ?? [])];

    for (const record of records) {
      await upsertRecord(table, record, accountId);
    }
    // Deletes: not implemented in MVP — skip deleted arrays
  }
}

async function upsertRecord(
  table: SyncTable,
  record: PushRecord,
  accountId: string,
): Promise<void> {
  const modelKey = TABLE_TO_MODEL[table];
  const delegate = (prisma as any)[modelKey];

  // Convert snake_case record fields to camelCase for Prisma
  const prismaData = snakeToCamel(record);

  // Security: enforce account ownership — never allow cross-account writes
  if (table === 'line_items') {
    const quote = await prisma.quote.findFirst({
      where: { id: record.quote_id as string, account_id: accountId },
    });
    if (!quote) return; // Silently skip — client trying to write to another account's quote
  } else if (table === 'payments') {
    // payments: verify parent invoice belongs to account
    const invoice = await prisma.invoice.findFirst({
      where: { id: record.invoice_id as string, accountId: accountId },
    });
    if (!invoice) return;
    prismaData.accountId = accountId;
  } else {
    // Inject accountId for all top-level tables (prevents client spoofing)
    prismaData.accountId = accountId;
  }

  // Special handling: Quote model uses snake_case fields directly in Prisma
  // We need to handle both camelCase models and snake_case models
  if (table === 'quotes') {
    // Re-map back to snake_case for Quote model which uses snake_case in Prisma
    const quoteData = camelToSnake(prismaData);
    quoteData.account_id = accountId;
    await upsertWithTimestamps(delegate, record, quoteData, 'updated_at');
    return;
  }

  if (table === 'line_items') {
    // LineItem uses snake_case in Prisma
    const lineItemData = camelToSnake(prismaData);
    // Special handling: Decimal quantity
    if (typeof lineItemData.quantity === 'number') {
      lineItemData.quantity = lineItemData.quantity.toString();
    }
    await upsertWithTimestamps(delegate, record, lineItemData, 'updated_at');
    return;
  }

  // Convert timestamp fields from ms to Date for Prisma (camelCase models)
  for (const field of [
    'createdAt', 'updatedAt', 'syncedAt', 'sentAt', 'approvedAt',
    'expiresAt', 'completedAt', 'scheduledStart', 'scheduledEnd',
    'paidAt', 'dueAt', 'startTime', 'endTime', 'takenAt',
  ]) {
    if (typeof prismaData[field] === 'number') {
      prismaData[field] = new Date(prismaData[field] as number);
    }
  }

  // Last-write-wins: only update if client's updated_at is newer than server's
  const existing = await delegate.findUnique({ where: { id: record.id } });
  if (existing) {
    const serverUpdatedAt =
      existing.updatedAt instanceof Date
        ? existing.updatedAt.getTime()
        : Number(existing.updatedAt ?? 0);
    const clientUpdatedAt = record.updated_at ?? 0;

    if (clientUpdatedAt <= serverUpdatedAt) {
      return; // Server has newer data — skip (last-write-wins, server wins)
    }
  }

  // Upsert: create if not exists, update if client is newer
  const { id, ...dataWithoutId } = prismaData;
  delete dataWithoutId.updatedAt; // Prisma manages this via @updatedAt

  await delegate.upsert({
    where: { id },
    create: { id, ...dataWithoutId },
    update: dataWithoutId,
  });

  if (table === 'customers') {
    syncCustomerToQuickBooks(accountId, record.id).catch(err => {
      console.error('[QB] fire-and-forget customer sync error:', err);
    });
  }
}

async function upsertWithTimestamps(
  delegate: any,
  record: PushRecord,
  data: Record<string, unknown>,
  updatedAtField: string,
): Promise<void> {
  // Convert timestamp fields from ms to Date
  const dateFields = [
    'created_at', 'updated_at', 'synced_at', 'sent_at', 'approved_at',
    'expires_at', 'completed_at', 'scheduled_start', 'scheduled_end',
    'paid_at', 'due_at', 'start_time', 'end_time', 'taken_at',
  ];
  for (const field of dateFields) {
    if (typeof data[field] === 'number') {
      data[field] = new Date(data[field] as number);
    }
  }

  // Last-write-wins
  const existing = await delegate.findUnique({ where: { id: record.id } });
  if (existing) {
    const serverUpdatedAt =
      existing[updatedAtField] instanceof Date
        ? existing[updatedAtField].getTime()
        : Number(existing[updatedAtField] ?? 0);
    const clientUpdatedAt = record.updated_at ?? 0;

    if (clientUpdatedAt <= serverUpdatedAt) {
      return;
    }
  }

  const { id, ...dataWithoutId } = data;
  delete dataWithoutId.updated_at; // Prisma manages via @updatedAt

  await delegate.upsert({
    where: { id },
    create: { id, ...dataWithoutId },
    update: dataWithoutId,
  });
}

function snakeToCamel(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase()),
      value,
    ]),
  );
}

function camelToSnake(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/([A-Z])/g, '_$1').toLowerCase(),
      value,
    ]),
  );
}
