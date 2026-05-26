# Story 7.3: Sync Status Dashboard and Manual Re-Sync

Status: done

## Story

As a bookkeeper managing QuickBooks sync for the business,
I want to view a dashboard of all recent QuickBooks sync activity and retry any failures with one tap,
so that I can verify data accuracy and fix sync issues without contacting support.

## Acceptance Criteria

1. **[Sync dashboard shows recent events]** Given the user navigates to the QuickBooks settings screen, when the status loads, then they see a list of up to 50 recent sync events showing entity type (Customer, Invoice, Payment), entity display name, sync direction, status (Success, Failed, Duplicate Prevented), and timestamp. (FR29)

2. **[Failed events show error details and Retry button]** Given a sync event has status "Failed", when the user views the sync activity list, then they see the error message beneath the entry and a "Retry Sync" button. (FR30)

3. **[Retry re-syncs the specific entity to QuickBooks]** Given the user taps "Retry Sync" on a failed event, when the re-sync completes, then the system retries syncing that specific entity to QuickBooks and the sync activity list refreshes to show the updated result. (FR30)

4. **[Account ownership validated on retry]** Given a user taps "Retry Sync", when the API processes the request, then the entity is verified to belong to the requesting user's account — the re-sync is rejected with 404 if the entity ID does not belong to the account.

5. **[Failure rate monitoring triggers push notification]** Given QB sync failure rates for an account exceed 0.1% of operations in the last 24 hours (minimum 10 total operations), when the threshold is detected after a failed sync, then a push notification is sent to all connected team members — at most once per hour per account to prevent spam. (NFR17)

6. **[GET /api/v1/quickbooks/status includes sync log]** Given an authenticated request to `GET /api/v1/quickbooks/status`, when the response is returned, then it includes the existing connection fields (`connected`, `companyName`, `realmId`) plus a `syncLog` array of up to 50 recent sync events with entity display names resolved.

7. **[POST /api/v1/quickbooks/sync handles re-sync requests]** Given an authenticated `POST /api/v1/quickbooks/sync` with `{ entityType, entityId }`, when processed, then the specified entity is re-synced to QuickBooks and the response indicates the resulting status.

## Tasks / Subtasks

### Task 1: Add getQbSyncLog to quickbooks-service.ts (AC: #1, #6)

- [x] 1.1: Add the `QbSyncEntry` interface in `apps/api/src/services/quickbooks-service.ts` (near the top, after imports):

  ```typescript
  export interface QbSyncEntry {
    id: string;
    entityType: 'CUSTOMER' | 'INVOICE' | 'PAYMENT';
    entityId: string;
    entityDisplayName: string;
    direction: string;
    status: 'SUCCESS' | 'FAILED' | 'DUPLICATE_PREVENTED';
    errorMessage: string | null;
    quickbooksId: string | null;
    syncedAt: string; // ISO 8601 UTC
  }
  ```

- [x] 1.2: Add `getQbSyncLog(accountId: string, limit = 50): Promise<QbSyncEntry[]>` to `quickbooks-service.ts`:

  ```typescript
  export async function getQbSyncLog(
    accountId: string,
    limit = 50,
  ): Promise<QbSyncEntry[]> {
    const entries = await prisma.quickbooksSyncLog.findMany({
      where: { accountId },
      orderBy: { syncedAt: 'desc' },
      take: limit,
    });

    const enriched = await Promise.all(
      entries.map(async (entry) => {
        let entityDisplayName = entry.entityId; // fallback to UUID
        try {
          if (entry.entityType === 'CUSTOMER') {
            const customer = await prisma.customer.findUnique({
              where: { id: entry.entityId },
              select: { name: true },
            });
            if (customer) entityDisplayName = customer.name;
          } else if (entry.entityType === 'INVOICE') {
            const invoice = await prisma.invoice.findUnique({
              where: { id: entry.entityId },
              include: { customer: { select: { name: true } } },
            });
            if (invoice) entityDisplayName = `Invoice — ${invoice.customer.name}`;
          } else if (entry.entityType === 'PAYMENT') {
            const payment = await prisma.payment.findUnique({
              where: { id: entry.entityId },
              select: { amount: true },
            });
            if (payment)
              entityDisplayName = `Payment ($${(payment.amount / 100).toFixed(2)})`;
          }
        } catch {
          // Fallback to UUID if entity was deleted — log entry is still valid
        }
        return {
          id: entry.id,
          entityType: entry.entityType as QbSyncEntry['entityType'],
          entityId: entry.entityId,
          entityDisplayName,
          direction: entry.direction,
          status: entry.status as QbSyncEntry['status'],
          errorMessage: entry.errorMessage,
          quickbooksId: entry.quickbooksId,
          syncedAt: entry.syncedAt.toISOString(),
        };
      }),
    );

    return enriched;
  }
  ```

  N+1 queries for entity display names are acceptable for a 50-entry dashboard — this is not a hot path.

### Task 2: Add retryEntitySync to quickbooks-service.ts (AC: #3, #4, #7)

- [x] 2.1: Add a private `verifyEntityOwnership` helper below the new `getQbSyncLog` function:

  ```typescript
  async function verifyEntityOwnership(
    accountId: string,
    entityType: string,
    entityId: string,
  ): Promise<boolean> {
    switch (entityType) {
      case 'CUSTOMER': {
        const c = await prisma.customer.findUnique({
          where: { id: entityId },
          select: { accountId: true },
        });
        return c?.accountId === accountId;
      }
      case 'INVOICE': {
        const inv = await prisma.invoice.findUnique({
          where: { id: entityId },
          select: { accountId: true },
        });
        return inv?.accountId === accountId;
      }
      case 'PAYMENT': {
        const pay = await prisma.payment.findUnique({
          where: { id: entityId },
          select: { accountId: true },
        });
        return pay?.accountId === accountId;
      }
      default:
        return false;
    }
  }
  ```

- [x] 2.2: Add `retryEntitySync` below `verifyEntityOwnership`:

  ```typescript
  export async function retryEntitySync(
    accountId: string,
    entityType: string,
    entityId: string,
  ): Promise<{ attempted: boolean; status: string; message?: string }> {
    const validTypes = ['CUSTOMER', 'INVOICE', 'PAYMENT'];
    if (!validTypes.includes(entityType)) {
      return {
        attempted: false,
        status: 'INVALID_ENTITY_TYPE',
        message: `entityType must be one of: ${validTypes.join(', ')}`,
      };
    }

    const owned = await verifyEntityOwnership(accountId, entityType, entityId);
    if (!owned) {
      return { attempted: false, status: 'NOT_FOUND', message: 'Entity not found in this account' };
    }

    const account = await prisma.account.findUnique({
      where: { id: accountId },
      select: { quickbooksConnected: true },
    });
    if (!account?.quickbooksConnected) {
      return { attempted: false, status: 'QB_NOT_CONNECTED', message: 'QuickBooks is not connected' };
    }

    switch (entityType) {
      case 'CUSTOMER':
        await syncCustomerToQuickBooks(accountId, entityId);
        break;
      case 'INVOICE':
        await syncInvoiceToQuickBooks(accountId, entityId);
        break;
      case 'PAYMENT':
        await syncPaymentToQuickBooks(accountId, entityId);
        break;
    }

    // Report the result from the latest sync log entry for this entity
    const latestLog = await prisma.quickbooksSyncLog.findFirst({
      where: { accountId, entityId },
      orderBy: { syncedAt: 'desc' },
    });

    return {
      attempted: true,
      status: latestLog?.status ?? 'UNKNOWN',
      message: latestLog?.errorMessage ?? undefined,
    };
  }
  ```

  **Duplicate prevention interaction**: The sync functions check `if (entity.quickbooks*Id)` before calling QB. For a FAILED entry, `quickbooks*Id` is null → retry calls QB. For a DUPLICATE_PREVENTED entry, `quickbooks*Id` is already set → retry immediately logs another DUPLICATE_PREVENTED (no QB call). Both are correct behaviors.

### Task 3: Add failure rate monitoring (AC: #5)

- [x] 3.1: Add the throttle map at the top of `quickbooks-service.ts`, near the existing `oauthStateStore`:

  ```typescript
  // Throttle QB failure notifications — at most once per hour per account
  const qbAlertThrottle = new Map<string, number>(); // accountId → last alert timestamp ms
  ```

- [x] 3.2: Add `checkFailureRateAndNotify` as a private function (not exported):

  ```typescript
  async function checkFailureRateAndNotify(accountId: string): Promise<void> {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const [failedCount, totalCount] = await Promise.all([
      prisma.quickbooksSyncLog.count({
        where: { accountId, status: 'FAILED', syncedAt: { gte: since } },
      }),
      prisma.quickbooksSyncLog.count({
        where: { accountId, syncedAt: { gte: since } },
      }),
    ]);

    if (totalCount < 10) return; // Insufficient data
    if (failedCount / totalCount <= 0.001) return; // Below 0.1% threshold

    // Throttle: at most once per hour per account
    const lastAlert = qbAlertThrottle.get(accountId) ?? 0;
    if (Date.now() - lastAlert < 60 * 60 * 1000) return;
    qbAlertThrottle.set(accountId, Date.now());

    const pct = ((failedCount / totalCount) * 100).toFixed(1);
    await sendPushToAccount(accountId, {
      title: 'QuickBooks Sync Issue',
      body: `${failedCount} of ${totalCount} syncs failed (${pct}%) in the last 24 hours. Open the app to retry.`,
      data: { type: 'QB_SYNC_FAILURE', accountId },
    });
  }
  ```

- [x] 3.3: Add import for the push notification function at the top of `quickbooks-service.ts`:

  ```typescript
  import { sendPushToAccount } from './notification-service.js';
  ```

  Look at how `notification-service.ts` exposes its account-wide push function. The function name may differ (e.g., `sendPushNotificationToAccount`, `notifyAccount`). Match the actual exported name. If it does not have an account-wide variant, follow the same pattern used in Story 6.3 for sync error notifications.

- [x] 3.4: Hook into `logQbSync` — modify the existing private `logQbSync` function to call `checkFailureRateAndNotify` after logging a FAILED status. Add after the `prisma.quickbooksSyncLog.create(...)` call:

  ```typescript
  async function logQbSync(data: {
    accountId: string;
    entityType: 'CUSTOMER' | 'INVOICE' | 'PAYMENT';
    entityId: string;
    status: 'SUCCESS' | 'FAILED' | 'DUPLICATE_PREVENTED';
    quickbooksId?: string;
    errorMessage?: string;
  }): Promise<void> {
    await prisma.quickbooksSyncLog.create({
      data: {
        accountId: data.accountId,
        entityType: data.entityType,
        entityId: data.entityId,
        direction: 'PUSH',
        status: data.status,
        quickbooksId: data.quickbooksId ?? null,
        errorMessage: data.errorMessage ?? null,
      },
    });

    // Fire-and-forget failure rate check — never block sync response
    if (data.status === 'FAILED') {
      checkFailureRateAndNotify(data.accountId).catch(err => {
        console.error('[QB] checkFailureRateAndNotify error:', err);
      });
    }
  }
  ```

### Task 4: Update GET /api/v1/quickbooks/status to include sync log (AC: #1, #6)

- [x] 4.1: In `apps/api/src/routes/quickbooks.ts`, add `getQbSyncLog` to the import from `quickbooks-service.js`:

  ```typescript
  import {
    generateAuthorizationUrl,
    consumeOAuthState,
    exchangeCodeForTokens,
    getConnectionStatus,
    disconnectQuickBooks,
    getQbSyncLog,       // NEW
    retryEntitySync,    // NEW (used in Task 5)
  } from '../services/quickbooks-service.js';
  ```

- [x] 4.2: Update the existing `GET /status` route handler (replace the current single-function call):

  ```typescript
  router.get('/status', authMiddleware, async (req: Request, res: Response) => {
    const accountId = req.user!.accountId;

    const [connectionStatus, syncLog] = await Promise.all([
      getConnectionStatus(accountId),
      getQbSyncLog(accountId, 50),
    ]);

    res.json({ data: { ...connectionStatus, syncLog } });
  });
  ```

### Task 5: Add POST /api/v1/quickbooks/sync route (AC: #3, #4, #7)

- [x] 5.1: Add the route in `apps/api/src/routes/quickbooks.ts` after the existing `/disconnect` route:

  ```typescript
  // POST /api/v1/quickbooks/sync
  // Manually re-sync a specific entity to QuickBooks
  router.post('/sync', authMiddleware, async (req: Request, res: Response) => {
    const accountId = req.user!.accountId;
    const { entityType, entityId } = req.body as { entityType?: string; entityId?: string };

    if (!entityType || !entityId) {
      throw new AppError('VALIDATION_ERROR', 'entityType and entityId are required', 422);
    }

    const validTypes = ['CUSTOMER', 'INVOICE', 'PAYMENT'];
    if (!validTypes.includes(entityType)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `entityType must be one of: ${validTypes.join(', ')}`,
        422,
      );
    }

    const result = await retryEntitySync(accountId, entityType, entityId);

    if (result.status === 'NOT_FOUND') {
      throw new AppError('NOT_FOUND', result.message ?? 'Entity not found', 404);
    }

    res.json({ data: result });
  });
  ```

### Task 6: Update mobile QuickBooks screen (AC: #1, #2, #3)

- [x] 6.1: Update `apps/mobile/src/services/api-client.ts` — update `getQuickBooksStatus` return type and add `retryQbSync`:

  ```typescript
  export interface QbSyncEntry {
    id: string;
    entityType: 'CUSTOMER' | 'INVOICE' | 'PAYMENT';
    entityId: string;
    entityDisplayName: string;
    direction: string;
    status: 'SUCCESS' | 'FAILED' | 'DUPLICATE_PREVENTED';
    errorMessage: string | null;
    quickbooksId: string | null;
    syncedAt: string;
  }

  // Update the existing function's return type (additive — backward compatible)
  export async function getQuickBooksStatus(): Promise<{
    connected: boolean;
    companyName: string | null;
    realmId: string | null;
    syncLog: QbSyncEntry[];
  }> {
    return apiClient.get('/api/v1/quickbooks/status');
  }

  export async function retryQbSync(
    entityType: string,
    entityId: string,
  ): Promise<{ attempted: boolean; status: string; message?: string }> {
    return apiClient.post('/api/v1/quickbooks/sync', { entityType, entityId });
  }
  ```

- [x] 6.2: Update `apps/mobile/app/(tabs)/more/quickbooks.tsx` — add sync activity state and UI. The existing file has the connected/disconnected card structure from Story 7.1. Add to the existing component:

  **State additions** (add alongside existing `status`, `isLoading`, etc. state):
  ```typescript
  const [syncLog, setSyncLog] = useState<QbSyncEntry[]>([]);
  const [retryingId, setRetryingId] = useState<string | null>(null);
  ```

  **Import additions**:
  ```typescript
  import type { QbSyncEntry } from '../../../src/services/api-client';
  import { retryQbSync } from '../../../src/services/api-client';
  ```

  **Update `loadStatus`** to extract the sync log from the extended API response:
  ```typescript
  const loadStatus = useCallback(async () => {
    try {
      const data = await getQuickBooksStatus();
      setStatus({ connected: data.connected, companyName: data.companyName, realmId: data.realmId });
      setSyncLog(data.syncLog ?? []);
    } catch {
      setStatus({ connected: false, companyName: null, realmId: null });
      setSyncLog([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  ```

  **Add `handleRetry`** function to the component:
  ```typescript
  const handleRetry = async (entry: QbSyncEntry) => {
    setRetryingId(entry.id);
    try {
      await retryQbSync(entry.entityType, entry.entityId);
      await loadStatus();
    } catch {
      Alert.alert('Retry Failed', 'Could not retry sync. Please check your connection and try again.');
    } finally {
      setRetryingId(null);
    }
  };
  ```

  **Add sync activity section** inside the connected state view, after the disconnect button JSX:
  ```tsx
  {syncLog.length > 0 && (
    <View style={styles.syncSection}>
      <Text style={styles.syncSectionTitle}>Recent Sync Activity</Text>
      {syncLog.slice(0, 20).map((entry) => (
        <SyncEntryRow
          key={entry.id}
          entry={entry}
          isRetrying={retryingId === entry.id}
          onRetry={handleRetry}
        />
      ))}
    </View>
  )}
  ```

- [x] 6.3: Add `SyncEntryRow` as an inline component at the bottom of `quickbooks.tsx` (before the `StyleSheet.create` call):

  ```typescript
  function SyncEntryRow({
    entry,
    isRetrying,
    onRetry,
  }: {
    entry: QbSyncEntry;
    isRetrying: boolean;
    onRetry: (entry: QbSyncEntry) => void;
  }) {
    const statusColor =
      entry.status === 'SUCCESS' ? '#16a34a' : entry.status === 'FAILED' ? '#dc2626' : '#d97706';
    const statusLabel =
      entry.status === 'SUCCESS' ? 'Synced' : entry.status === 'FAILED' ? 'Failed' : 'Duplicate';
    const dateStr = new Date(entry.syncedAt).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <View style={styles.syncEntry}>
        <View style={styles.syncEntryMain}>
          <View style={[styles.syncStatusDot, { backgroundColor: statusColor }]} />
          <View style={styles.syncEntryInfo}>
            <Text style={styles.syncEntityName} numberOfLines={1}>
              {entry.entityDisplayName}
            </Text>
            <Text style={styles.syncEntityType}>
              {entry.entityType} · {dateStr}
            </Text>
            {entry.status === 'FAILED' && entry.errorMessage && (
              <Text style={styles.syncErrorMsg} numberOfLines={2}>
                {entry.errorMessage}
              </Text>
            )}
          </View>
          <Text style={[styles.syncStatusLabel, { color: statusColor }]}>{statusLabel}</Text>
        </View>
        {entry.status === 'FAILED' && (
          <TouchableOpacity
            style={[styles.retryButton, isRetrying && styles.buttonDisabled]}
            onPress={() => onRetry(entry)}
            disabled={isRetrying}
          >
            {isRetrying ? (
              <ActivityIndicator size="small" color="#2563eb" />
            ) : (
              <Text style={styles.retryButtonText}>Retry Sync</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  }
  ```

- [x] 6.4: Add the following to the existing `StyleSheet.create` call in `quickbooks.tsx`:

  ```typescript
  syncSection: { marginTop: 8 },
  syncSectionTitle: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8, paddingHorizontal: 4 },
  syncEntry: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  syncEntryMain: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  syncStatusDot: { width: 8, height: 8, borderRadius: 4, flexShrink: 0 },
  syncEntryInfo: { flex: 1 },
  syncEntityName: { fontSize: 14, fontWeight: '500', color: '#111827' },
  syncEntityType: { fontSize: 12, color: '#9ca3af', marginTop: 2 },
  syncErrorMsg: { fontSize: 12, color: '#dc2626', marginTop: 4 },
  syncStatusLabel: { fontSize: 12, fontWeight: '600', flexShrink: 0 },
  retryButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2563eb',
    alignSelf: 'flex-start',
  },
  retryButtonText: { fontSize: 13, color: '#2563eb', fontWeight: '600' },
  ```

### Task 7: Tests (AC: #1, #3, #4, #5, #6, #7)

- [x] 7.1: Add tests for `getQbSyncLog` in `apps/api/src/services/quickbooks-service.test.ts`:

  ```typescript
  describe('getQbSyncLog', () => {
    it('returns enriched entries with customer display name', async () => {
      mockPrisma.quickbooksSyncLog.findMany.mockResolvedValue([
        {
          id: 'log-1',
          accountId: 'acct-1',
          entityType: 'CUSTOMER',
          entityId: 'cust-abc',
          direction: 'PUSH',
          status: 'SUCCESS',
          errorMessage: null,
          quickbooksId: 'QB-123',
          syncedAt: new Date('2026-03-23T10:00:00Z'),
        },
      ]);
      mockPrisma.customer.findUnique.mockResolvedValue({ name: 'John Smith' });

      const result = await getQbSyncLog('acct-1', 50);

      expect(result).toHaveLength(1);
      expect(result[0].entityDisplayName).toBe('John Smith');
      expect(result[0].status).toBe('SUCCESS');
      expect(result[0].syncedAt).toBe('2026-03-23T10:00:00.000Z');
    });

    it('falls back to entityId as display name when entity lookup returns null', async () => {
      mockPrisma.quickbooksSyncLog.findMany.mockResolvedValue([
        {
          id: 'log-2', entityType: 'CUSTOMER', entityId: 'cust-gone',
          direction: 'PUSH', status: 'FAILED', errorMessage: 'QB error',
          quickbooksId: null, syncedAt: new Date(),
        },
      ]);
      mockPrisma.customer.findUnique.mockResolvedValue(null);

      const result = await getQbSyncLog('acct-1', 50);

      expect(result[0].entityDisplayName).toBe('cust-gone');
    });

    it('formats invoice display name as "Invoice — <customer name>"', async () => {
      mockPrisma.quickbooksSyncLog.findMany.mockResolvedValue([
        {
          id: 'log-3', entityType: 'INVOICE', entityId: 'inv-1',
          direction: 'PUSH', status: 'SUCCESS', errorMessage: null,
          quickbooksId: 'QB-INV-1', syncedAt: new Date(),
        },
      ]);
      mockPrisma.invoice.findUnique.mockResolvedValue({ customer: { name: 'Jane Doe' } });

      const result = await getQbSyncLog('acct-1', 50);

      expect(result[0].entityDisplayName).toBe('Invoice — Jane Doe');
    });
  });
  ```

- [x] 7.2: Add tests for `retryEntitySync` in `apps/api/src/services/quickbooks-service.test.ts`:

  ```typescript
  describe('retryEntitySync', () => {
    it('returns INVALID_ENTITY_TYPE for unknown type', async () => {
      const result = await retryEntitySync('acct-1', 'WIDGET', 'id-1');
      expect(result.attempted).toBe(false);
      expect(result.status).toBe('INVALID_ENTITY_TYPE');
    });

    it('returns NOT_FOUND when entity belongs to a different account', async () => {
      mockPrisma.customer.findUnique.mockResolvedValue({ accountId: 'other-acct' });
      const result = await retryEntitySync('acct-1', 'CUSTOMER', 'cust-xyz');
      expect(result.status).toBe('NOT_FOUND');
      expect(result.attempted).toBe(false);
    });

    it('returns NOT_FOUND when entity does not exist', async () => {
      mockPrisma.customer.findUnique.mockResolvedValue(null);
      const result = await retryEntitySync('acct-1', 'CUSTOMER', 'cust-missing');
      expect(result.status).toBe('NOT_FOUND');
    });

    it('returns QB_NOT_CONNECTED when account has QB disconnected', async () => {
      mockPrisma.customer.findUnique.mockResolvedValue({ accountId: 'acct-1' });
      mockPrisma.account.findUnique.mockResolvedValueOnce({ quickbooksConnected: false });
      const result = await retryEntitySync('acct-1', 'CUSTOMER', 'cust-1');
      expect(result.status).toBe('QB_NOT_CONNECTED');
    });
  });
  ```

- [x] 7.3: Add integration tests in `apps/api/tests/integration/quickbooks.test.ts`:

  ```typescript
  describe('GET /api/v1/quickbooks/status (extended with syncLog)', () => {
    it('includes syncLog array in response', async () => {
      (prisma.account.findUnique as jest.Mock).mockResolvedValue({
        quickbooksConnected: true,
        quickbooksCompanyName: 'Acme HVAC',
        quickbooksRealmId: 'realm-1',
      });
      (prisma.quickbooksSyncLog.findMany as jest.Mock).mockResolvedValue([]);

      const res = await request(app)
        .get('/api/v1/quickbooks/status')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data.syncLog)).toBe(true);
    });
  });

  describe('POST /api/v1/quickbooks/sync', () => {
    it('returns 422 when entityId is missing', async () => {
      const res = await request(app)
        .post('/api/v1/quickbooks/sync')
        .set('Authorization', 'Bearer test-token')
        .send({ entityType: 'CUSTOMER' });
      expect(res.status).toBe(422);
    });

    it('returns 422 when entityType is invalid', async () => {
      const res = await request(app)
        .post('/api/v1/quickbooks/sync')
        .set('Authorization', 'Bearer test-token')
        .send({ entityType: 'WIDGET', entityId: 'some-id' });
      expect(res.status).toBe(422);
    });

    it('returns 404 when entity does not belong to account', async () => {
      (prisma.customer.findUnique as jest.Mock).mockResolvedValue({ accountId: 'other-account' });

      const res = await request(app)
        .post('/api/v1/quickbooks/sync')
        .set('Authorization', 'Bearer test-token')
        .send({ entityType: 'CUSTOMER', entityId: 'cust-other' });
      expect(res.status).toBe(404);
    });
  });
  ```

  Extend the existing `prisma` mock in `quickbooks.test.ts` to include `quickbooksSyncLog.findMany` and `customer.findUnique` mocks as needed.

## Dev Notes

### Foundation from Stories 7.1 and 7.2

**Story 7.1 built:**
- `apps/api/src/config/quickbooks.ts` — lazy getter config (not module-level `z.parse`)
- `apps/api/src/services/quickbooks-service.ts` — `getValidAccessToken`, OAuth functions, `getConnectionStatus`
- `apps/api/src/routes/quickbooks.ts` — `POST /connect`, `GET /callback`, `GET /status`, `POST /disconnect`
- `apps/api/prisma/migrations/20260525000000_add_quickbooks_oauth_fields/` — `QuickbooksSyncLog` table already exists

**Story 7.2 built:**
- `logQbSync` private function — **this story modifies it** to add failure rate check
- `syncCustomerToQuickBooks`, `syncInvoiceToQuickBooks`, `syncPaymentToQuickBooks` — used by `retryEntitySync`
- `prisma.quickbooksSyncLog.create` — the accessor pattern used throughout

### Critical: Prisma Naming

Prisma accessor is **camelCase singular**:

| Prisma model | DB table | TypeScript accessor |
|---|---|---|
| `Account` | `accounts` | `prisma.account` |
| `Customer` | `customers` | `prisma.customer` |
| `Invoice` | `invoices` | `prisma.invoice` |
| `Payment` | `payments` | `prisma.payment` |
| `QuickbooksSyncLog` | `quickbooks_sync_log` | `prisma.quickbooksSyncLog` |

Fields are camelCase in TypeScript via `@map` decorators: `accountId`, `entityType`, `entityId`, `direction`, `status`, `errorMessage`, `quickbooksId`, `syncedAt`.

**Exception**: `Quote` and `LineItem` models use snake_case fields directly (`quote_id`, `unit_price`, `sort_order`) — no `@map` decorators. This story does not touch those models.

### Import Paths — Use .js Extensions

All API imports use `.js` even for `.ts` source files (Node ESM):
```typescript
import { getQbSyncLog, retryEntitySync } from './quickbooks-service.js';
import { sendPushToAccount } from './notification-service.js';
```

### notification-service.ts Push Pattern

`apps/api/src/services/notification-service.ts` was established by Story 6.3. Look for a function that sends to all team members on an account (used for sync error notifications). The exact name may be `sendPushToAccount`, `sendAccountPushNotification`, or similar. Match the actual exported name — check the file before writing the import.

If the function signature uses a different notification payload shape, adapt `sendQbSyncAlertNotification` accordingly. The Expo Push API endpoint is `https://exp.host/--/api/v2/push/send`.

### retryEntitySync — No Separate QB Duplicate Issue

The retry logic intentionally reuses the existing sync functions. Those functions:
- Check `quickbooks*Id` field for duplicate prevention — if it's null (FAILED case), they attempt the sync
- Never throw — they catch internally and log to `quickbooks_sync_log`

So `retryEntitySync` can `await` them directly. The final `prisma.quickbooksSyncLog.findFirst` after the sync call gives the caller the new result.

### qbAlertThrottle — In-Memory, Single Instance

Same pattern as `oauthStateStore` from Story 7.1 (module-scope Map). Sufficient for Railway single-instance MVP. Post-MVP: migrate to Redis if horizontal scaling is added.

### GET /api/v1/quickbooks/status — Extended Response Shape

**Before (Story 7.1):**
```json
{ "data": { "connected": true, "companyName": "Acme HVAC LLC", "realmId": "123" } }
```

**After (Story 7.3):**
```json
{
  "data": {
    "connected": true,
    "companyName": "Acme HVAC LLC",
    "realmId": "123",
    "syncLog": [
      {
        "id": "uuid-1",
        "entityType": "CUSTOMER",
        "entityId": "cust-uuid",
        "entityDisplayName": "John Smith",
        "direction": "PUSH",
        "status": "SUCCESS",
        "errorMessage": null,
        "quickbooksId": "QB-CUST-789",
        "syncedAt": "2026-03-23T14:30:00.000Z"
      },
      {
        "id": "uuid-2",
        "entityType": "INVOICE",
        "entityId": "inv-uuid",
        "entityDisplayName": "Invoice — Jane Doe",
        "direction": "PUSH",
        "status": "FAILED",
        "errorMessage": "QB invoice create failed: 400 ...",
        "quickbooksId": null,
        "syncedAt": "2026-03-23T15:00:00.000Z"
      }
    ]
  }
}
```

This is purely additive — mobile clients from Story 7.1 that ignore `syncLog` are unaffected.

### POST /api/v1/quickbooks/sync Response Shapes

```json
// Retry succeeded:
{ "data": { "attempted": true, "status": "SUCCESS" } }

// Retry failed again:
{ "data": { "attempted": true, "status": "FAILED", "message": "QB error details..." } }

// Was already synced (duplicate prevention):
{ "data": { "attempted": true, "status": "DUPLICATE_PREVENTED" } }

// Entity not in account (→ HTTP 404):
{ "error": { "code": "NOT_FOUND", "message": "Entity not found in this account", "status": 404 } }
```

### Mobile Screen: Shows Max 20 Entries

The API returns 50 entries, but the mobile screen renders `syncLog.slice(0, 20)` to avoid excessive scroll on a settings screen. The full 50-entry dataset is fetched once and available in state — no pagination needed for MVP.

The `SyncEntryRow` helper component is defined inline at the bottom of `quickbooks.tsx`. Architecture says "one component per file" for UI components — but `SyncEntryRow` is a purely local helper (no business logic, no hooks, not reused elsewhere) so inline placement is the right call for MVP.

### Web Dashboard Sync View Not in This Story

`GET /api/v1/dashboard/sync-status` (listed in the architecture) is for the web dashboard read-only view. That endpoint and the web `apps/web/src/app/dashboard/sync/page.tsx` are implemented in **Story 8.3** (Web Dashboard for Office Partners). The API data provided by `GET /api/v1/quickbooks/status` is reusable by Story 8.3.

### Do NOT Modify

- WatermelonDB schema or any mobile offline data layer — QB sync is server-side only
- `quickbooks_sync_log` DB table structure — already correct from Story 7.1
- `syncCustomerToQuickBooks`, `syncInvoiceToQuickBooks`, `syncPaymentToQuickBooks` internal logic
- Sync push/pull endpoints (`POST /api/v1/sync/push`, `/pull`)
- `apps/mobile/app/(tabs)/more/index.tsx` navigation — QuickBooks row already added in Story 7.1

### Project Structure Notes

| Action | File |
|--------|------|
| Modify | `apps/api/src/services/quickbooks-service.ts` — add `QbSyncEntry`, `getQbSyncLog`, `retryEntitySync`, `verifyEntityOwnership`, `checkFailureRateAndNotify`; hook into `logQbSync` |
| Modify | `apps/api/src/routes/quickbooks.ts` — update `GET /status`; add `POST /sync` |
| Modify | `apps/mobile/src/services/api-client.ts` — add `QbSyncEntry` type, update `getQuickBooksStatus` return type, add `retryQbSync` |
| Modify | `apps/mobile/app/(tabs)/more/quickbooks.tsx` — add sync activity section, `SyncEntryRow`, retry logic |
| Modify | `apps/api/src/services/quickbooks-service.test.ts` — add tests for `getQbSyncLog`, `retryEntitySync` |
| Modify | `apps/api/tests/integration/quickbooks.test.ts` — add tests for updated `GET /status` and new `POST /sync` |

No new files, no web dashboard changes, no Prisma migrations, no WatermelonDB changes.

### References

- [Source: epics.md#Story 7.3] — User story statement, acceptance criteria, FR29, FR30
- [Source: architecture.md#API Design: REST with JSON] — `POST /api/v1/quickbooks/sync`, `GET /api/v1/quickbooks/status` (sync status dashboard data)
- [Source: architecture.md#Service Boundaries] — "quickbooks-service owns all Intuit API interaction"
- [Source: architecture.md#Architectural Boundaries] — "QuickBooks sync is server-side only"
- [Source: architecture.md#NFR17] — "Automated monitoring alerts for sync failure rates exceeding 0.1%"
- [Source: architecture.md#NFR18] — "QuickBooks Online API version changes < 48h remediation via isolated module"
- [Source: architecture.md#Data Architecture] — `quickbooks_sync_log` table fields
- [Source: stories/7-1-quickbooks-oauth-connection.md#Completion Notes] — `prisma.account` accessor; lazy getter config pattern; `oauthStateStore` module-scope Map pattern
- [Source: stories/7-2-automatic-customer-invoice-and-payment-sync.md#Dev Notes] — `logQbSync` function structure; `prisma.quickbooksSyncLog.create` pattern; camelCase field names; sync function signatures

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- Added `sendPushToAccount` to `notification-service.ts` (imports prisma to query team members' push tokens; wraps multi-send with error catch so push failures never throw).
- `notification-service.ts` now requires prisma import — integration test mock updated to include `sendPushToAccount`.
- `qbAlertThrottle` is module-scope Map (same pattern as `oauthStateStore`) — in-memory throttle suitable for Railway single-instance MVP.
- `logQbSync` calls `checkFailureRateAndNotify` fire-and-forget on FAILED status only; errors are caught and logged without blocking the sync response.
- Integration test prisma mock extended with `findMany`, `findFirst`, `count` on `quickbooksSyncLog`, plus `invoice`, `payment`, and `teamMember` models for new code paths.
- Unit test mock extended with `findMany`, `findFirst`, `count` on `quickbooksSyncLog`; notification-service mocked to prevent real fetch calls.
- TypeScript strict-mode array index access in unit tests fixed with non-null assertion (`result[0]!`).
- All 188 API tests pass; no new TypeScript errors in source files.

### File List

- `apps/api/src/services/notification-service.ts` — added `sendPushToAccount`, added prisma import
- `apps/api/src/services/quickbooks-service.ts` — added `QbSyncEntry` interface, `qbAlertThrottle`, `getQbSyncLog`, `verifyEntityOwnership`, `retryEntitySync`, `checkFailureRateAndNotify`; modified `logQbSync` to fire failure rate check; added notification-service import
- `apps/api/src/routes/quickbooks.ts` — added `AppError` import, `getQbSyncLog`/`retryEntitySync` imports; updated `GET /status` to include syncLog; added `POST /sync` route
- `apps/mobile/src/services/api-client.ts` — added `QbSyncEntry` interface; updated `getQuickBooksStatus` return type; added `retryQbSync`
- `apps/mobile/app/(tabs)/more/quickbooks.tsx` — added syncLog state, retryingId state, updated loadStatus, added handleRetry, added sync activity section JSX, added `SyncEntryRow` component, added new styles
- `apps/api/src/services/quickbooks-service.test.ts` — updated prisma mock, added notification-service mock, added `getQbSyncLog` and `retryEntitySync` test suites
- `apps/api/tests/integration/quickbooks.test.ts` — updated prisma and notification-service mocks, added GET /status syncLog test, added POST /sync tests
