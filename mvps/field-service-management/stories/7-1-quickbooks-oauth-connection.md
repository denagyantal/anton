# Story 7.1: QuickBooks OAuth Connection

Status: done

## Story

As a tradesperson or their bookkeeper,
I want to connect my QuickBooks Online account with a simple two-tap flow,
so that my financial data stays in sync without manual entry.

## Acceptance Criteria

1. **[OAuth connect flow opens in-app browser]** Given the user navigates to Settings > QuickBooks, when they tap "Connect QuickBooks", then the Intuit OAuth 2.0 authorization flow opens in an in-app browser (via `expo-web-browser`) where they log in to QuickBooks and grant access. (FR27)

2. **[Tokens stored server-side only on OAuth completion]** Given the user completes the OAuth flow and Intuit redirects to the API callback, when the callback is processed, then the OAuth access token and refresh token are stored encrypted on the API server (accounts table), the account's `quickbooks_connected` flag is set to `true`, the `quickbooks_realm_id` is recorded from the OAuth response — and no token ever touches the mobile device.

3. **[Settings screen shows "Connected" state with company name]** Given a QuickBooks account has been successfully connected, when the user views the QuickBooks settings screen, then they see a "Connected" status with the QuickBooks company name (fetched via the Intuit API's `/v3/company/:realmId/companyinfo/:realmId` endpoint) and a "Disconnect" button.

4. **[Server auto-refreshes expired access token]** Given a connected QuickBooks account whose access token has expired, when any QuickBooks API call is attempted (in this story: fetching company info; in future stories: syncing data), then the server automatically refreshes the token using the stored refresh token via Intuit's token endpoint, updates the stored tokens and expiry timestamp, and completes the operation — without any user action.

5. **[Disconnect clears credentials]** Given the user taps "Disconnect" on the QuickBooks settings screen, when the disconnect is confirmed and the API request completes, then `quickbooks_connected` is set to `false`, `quickbooks_realm_id` is cleared, and all stored OAuth tokens are deleted from the accounts record — leaving no QuickBooks credentials on the server.

## Tasks / Subtasks

### Task 1: Prisma schema migration for QuickBooks OAuth fields (AC: #2, #4, #5)

- [x] 1.1: Add QuickBooks OAuth fields to the `accounts` table in `apps/api/prisma/schema.prisma`. The architecture already declares `quickbooks_connected` and `quickbooks_realm_id` — add the token fields needed for server-side storage:

  ```prisma
  model accounts {
    // ... existing fields ...
    quickbooks_connected      Boolean   @default(false)
    quickbooks_realm_id       String?
    quickbooks_access_token   String?   // encrypted at rest via Prisma field encryption or DB-level
    quickbooks_refresh_token  String?   // encrypted at rest
    quickbooks_token_expires_at DateTime?
    quickbooks_company_name   String?   // cached from Intuit API on connect
  }
  ```

  Run migration: `npx prisma migrate dev --name add_quickbooks_oauth_fields` from `apps/api/`.

- [x] 1.2: Verify the existing `quickbooks_sync_log` table in schema.prisma matches the architecture data model (see Dev Notes). If not yet created, add it in this migration:

  ```prisma
  model quickbooks_sync_log {
    id           String   @id @default(uuid())
    account_id   String
    entity_type  String   // CUSTOMER | INVOICE | PAYMENT
    entity_id    String
    direction    String   @default("PUSH")
    status       String   // SUCCESS | FAILED | DUPLICATE_PREVENTED
    error_message String?
    quickbooks_id String?
    synced_at    DateTime @default(now())
    accounts     accounts @relation(fields: [account_id], references: [id])

    @@index([account_id])
    @@index([entity_id])
  }
  ```

### Task 2: QuickBooks environment configuration (AC: #1, #2)

- [x] 2.1: Create `apps/api/src/config/quickbooks.ts`. This module exports a validated Intuit OAuth client config from environment variables:

  ```typescript
  import { z } from 'zod';

  const schema = z.object({
    QUICKBOOKS_CLIENT_ID: z.string().min(1),
    QUICKBOOKS_CLIENT_SECRET: z.string().min(1),
    QUICKBOOKS_REDIRECT_URI: z.string().url(),
    QUICKBOOKS_ENVIRONMENT: z.enum(['sandbox', 'production']).default('sandbox'),
  });

  const env = schema.parse(process.env);

  export const quickbooksConfig = {
    clientId: env.QUICKBOOKS_CLIENT_ID,
    clientSecret: env.QUICKBOOKS_CLIENT_SECRET,
    redirectUri: env.QUICKBOOKS_REDIRECT_URI,
    environment: env.QUICKBOOKS_ENVIRONMENT,
    authorizationBaseUrl: 'https://appcenter.intuit.com/connect/oauth2',
    tokenUrl: 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
    revokeUrl: 'https://developer.api.intuit.com/v2/oauth2/tokens/revoke',
    scopes: ['com.intuit.quickbooks.accounting'],
    apiBaseUrl:
      env.QUICKBOOKS_ENVIRONMENT === 'production'
        ? 'https://quickbooks.api.intuit.com'
        : 'https://sandbox-quickbooks.api.intuit.com',
  } as const;
  ```

- [x] 2.2: Add QuickBooks env vars to `apps/api/.env.example`:
  ```
  QUICKBOOKS_CLIENT_ID=your_client_id_here
  QUICKBOOKS_CLIENT_SECRET=your_client_secret_here
  QUICKBOOKS_REDIRECT_URI=https://your-api-domain.com/api/v1/quickbooks/callback
  QUICKBOOKS_ENVIRONMENT=sandbox
  ```

  Add the same keys to `apps/api/src/config/env.ts` validation if it exists (follow the existing pattern for env var validation in that file).

### Task 3: QuickBooks service — OAuth methods (AC: #1, #2, #3, #4, #5)

- [x] 3.1: Create `apps/api/src/services/quickbooks-service.ts` with the following functions. Install `node-fetch` or use Node 18+ built-in `fetch`. Do NOT install the `node-quickbooks` npm package — use the Intuit REST API directly for full control (per architecture: "Direct Intuit API (not unified API layer) for maximum sync accuracy control"):

  ```typescript
  import crypto from 'crypto';
  import { prisma } from '../config/database'; // use existing prisma client
  import { quickbooksConfig } from '../config/quickbooks';

  // --- OAuth State Management ---
  // In-memory state store (sufficient for MVP — Railway single instance)
  const oauthStateStore = new Map<string, { accountId: string; expiresAt: number }>();

  export function generateAuthorizationUrl(accountId: string): string {
    const state = crypto.randomBytes(16).toString('hex');
    oauthStateStore.set(state, { accountId, expiresAt: Date.now() + 10 * 60 * 1000 }); // 10-min TTL

    const params = new URLSearchParams({
      client_id: quickbooksConfig.clientId,
      response_type: 'code',
      scope: quickbooksConfig.scopes.join(' '),
      redirect_uri: quickbooksConfig.redirectUri,
      state,
    });

    return `${quickbooksConfig.authorizationBaseUrl}?${params.toString()}`;
  }

  export function consumeOAuthState(state: string): string | null {
    const entry = oauthStateStore.get(state);
    if (!entry || Date.now() > entry.expiresAt) {
      oauthStateStore.delete(state);
      return null;
    }
    oauthStateStore.delete(state);
    return entry.accountId;
  }

  // --- Token Exchange ---
  export async function exchangeCodeForTokens(
    accountId: string,
    code: string,
    realmId: string,
  ): Promise<void> {
    const credentials = Buffer.from(
      `${quickbooksConfig.clientId}:${quickbooksConfig.clientSecret}`,
    ).toString('base64');

    const response = await fetch(quickbooksConfig.tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: quickbooksConfig.redirectUri,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`QuickBooks token exchange failed: ${response.status} ${text}`);
    }

    const data = (await response.json()) as {
      access_token: string;
      refresh_token: string;
      expires_in: number; // seconds until access token expires (typically 3600)
      x_refresh_token_expires_in: number;
    };

    const expiresAt = new Date(Date.now() + data.expires_in * 1000);

    // Fetch company name immediately on connect
    const companyName = await fetchCompanyName(realmId, data.access_token).catch(() => null);

    await prisma.accounts.update({
      where: { id: accountId },
      data: {
        quickbooks_connected: true,
        quickbooks_realm_id: realmId,
        quickbooks_access_token: data.access_token,
        quickbooks_refresh_token: data.refresh_token,
        quickbooks_token_expires_at: expiresAt,
        quickbooks_company_name: companyName,
      },
    });
  }

  // --- Token Refresh ---
  export async function refreshAccessToken(accountId: string): Promise<string> {
    const account = await prisma.accounts.findUnique({
      where: { id: accountId },
      select: { quickbooks_refresh_token: true },
    });

    if (!account?.quickbooks_refresh_token) {
      throw new Error('No QuickBooks refresh token found for account');
    }

    const credentials = Buffer.from(
      `${quickbooksConfig.clientId}:${quickbooksConfig.clientSecret}`,
    ).toString('base64');

    const response = await fetch(quickbooksConfig.tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: account.quickbooks_refresh_token,
      }),
    });

    if (!response.ok) {
      // Refresh token may have expired (100-day TTL). Force reconnect.
      await prisma.accounts.update({
        where: { id: accountId },
        data: { quickbooks_connected: false },
      });
      throw new Error('QuickBooks refresh token expired — user must reconnect');
    }

    const data = (await response.json()) as {
      access_token: string;
      refresh_token: string;
      expires_in: number;
    };

    const expiresAt = new Date(Date.now() + data.expires_in * 1000);

    await prisma.accounts.update({
      where: { id: accountId },
      data: {
        quickbooks_access_token: data.access_token,
        quickbooks_refresh_token: data.refresh_token,
        quickbooks_token_expires_at: expiresAt,
      },
    });

    return data.access_token;
  }

  // --- Get Valid Access Token (auto-refresh) ---
  export async function getValidAccessToken(accountId: string): Promise<string> {
    const account = await prisma.accounts.findUnique({
      where: { id: accountId },
      select: {
        quickbooks_access_token: true,
        quickbooks_token_expires_at: true,
        quickbooks_connected: true,
      },
    });

    if (!account?.quickbooks_connected || !account.quickbooks_access_token) {
      throw new Error('QuickBooks not connected for this account');
    }

    // Refresh if within 5 minutes of expiry
    const bufferMs = 5 * 60 * 1000;
    const isExpiringSoon =
      !account.quickbooks_token_expires_at ||
      account.quickbooks_token_expires_at.getTime() - Date.now() < bufferMs;

    if (isExpiringSoon) {
      return refreshAccessToken(accountId);
    }

    return account.quickbooks_access_token;
  }

  // --- Fetch Company Info ---
  async function fetchCompanyName(realmId: string, accessToken: string): Promise<string> {
    const url = `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/companyinfo/${realmId}?minorversion=65`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) throw new Error(`Failed to fetch company info: ${response.status}`);
    const data = (await response.json()) as { CompanyInfo: { CompanyName: string } };
    return data.CompanyInfo.CompanyName;
  }

  export async function getConnectionStatus(
    accountId: string,
  ): Promise<{ connected: boolean; companyName: string | null; realmId: string | null }> {
    const account = await prisma.accounts.findUnique({
      where: { id: accountId },
      select: {
        quickbooks_connected: true,
        quickbooks_company_name: true,
        quickbooks_realm_id: true,
      },
    });

    return {
      connected: account?.quickbooks_connected ?? false,
      companyName: account?.quickbooks_company_name ?? null,
      realmId: account?.quickbooks_realm_id ?? null,
    };
  }

  // --- Disconnect ---
  export async function disconnectQuickBooks(accountId: string): Promise<void> {
    const account = await prisma.accounts.findUnique({
      where: { id: accountId },
      select: { quickbooks_access_token: true },
    });

    // Attempt token revocation (best effort — clear locally even if revocation fails)
    if (account?.quickbooks_access_token) {
      const credentials = Buffer.from(
        `${quickbooksConfig.clientId}:${quickbooksConfig.clientSecret}`,
      ).toString('base64');

      await fetch(quickbooksConfig.revokeUrl, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: account.quickbooks_access_token }),
      }).catch(() => {}); // Ignore revocation errors — local cleanup is critical
    }

    await prisma.accounts.update({
      where: { id: accountId },
      data: {
        quickbooks_connected: false,
        quickbooks_realm_id: null,
        quickbooks_access_token: null,
        quickbooks_refresh_token: null,
        quickbooks_token_expires_at: null,
        quickbooks_company_name: null,
      },
    });
  }
  ```

- [x] 3.2: Export `getValidAccessToken` from `quickbooks-service.ts` — this is the function future stories (7.2) will call before any Intuit API operation. It is the single entry point for QuickBooks API calls.

### Task 4: QuickBooks API routes (AC: #1, #2, #3, #5)

- [x] 4.1: Create `apps/api/src/routes/quickbooks.ts`:

  ```typescript
  import { Router, Request, Response } from 'express';
  import { authMiddleware } from '../middleware/auth';
  import {
    generateAuthorizationUrl,
    consumeOAuthState,
    exchangeCodeForTokens,
    getConnectionStatus,
    disconnectQuickBooks,
  } from '../services/quickbooks-service';
  import { AppError } from '../utils/error';

  const router = Router();

  // POST /api/v1/quickbooks/connect
  // Returns the OAuth authorization URL for the mobile app to open
  router.post('/connect', authMiddleware, async (req: Request, res: Response) => {
    const accountId = req.user!.accountId;
    const authUrl = generateAuthorizationUrl(accountId);
    res.json({ data: { authorizationUrl: authUrl } });
  });

  // GET /api/v1/quickbooks/callback
  // Intuit redirects here after user grants/denies access — NO auth middleware (unauthenticated callback)
  router.get('/callback', async (req: Request, res: Response) => {
    const { code, state, realmId, error } = req.query as Record<string, string>;

    if (error) {
      // User denied access or error occurred
      return res.redirect(
        `${process.env.WEB_BASE_URL ?? ''}/quickbooks-result?status=denied`,
      );
    }

    if (!code || !state || !realmId) {
      return res.redirect(
        `${process.env.WEB_BASE_URL ?? ''}/quickbooks-result?status=error&reason=missing_params`,
      );
    }

    const accountId = consumeOAuthState(state);
    if (!accountId) {
      return res.redirect(
        `${process.env.WEB_BASE_URL ?? ''}/quickbooks-result?status=error&reason=invalid_state`,
      );
    }

    try {
      await exchangeCodeForTokens(accountId, code, realmId);
      return res.redirect(
        `${process.env.WEB_BASE_URL ?? ''}/quickbooks-result?status=connected`,
      );
    } catch (err) {
      console.error('QuickBooks callback error:', err);
      return res.redirect(
        `${process.env.WEB_BASE_URL ?? ''}/quickbooks-result?status=error&reason=token_exchange`,
      );
    }
  });

  // GET /api/v1/quickbooks/status
  // Returns current connection status and company name
  router.get('/status', authMiddleware, async (req: Request, res: Response) => {
    const accountId = req.user!.accountId;
    const status = await getConnectionStatus(accountId);
    res.json({ data: status });
  });

  // POST /api/v1/quickbooks/disconnect
  router.post('/disconnect', authMiddleware, async (req: Request, res: Response) => {
    const accountId = req.user!.accountId;
    await disconnectQuickBooks(accountId);
    res.json({ data: { disconnected: true } });
  });

  export default router;
  ```

- [x] 4.2: Register the QuickBooks router in `apps/api/src/index.ts`. Add alongside existing routes:

  ```typescript
  import quickbooksRouter from './routes/quickbooks';
  // ...
  app.use('/api/v1/quickbooks', quickbooksRouter);
  ```

- [x] 4.3: Create the QuickBooks result page for the web app at `apps/web/src/app/(public)/quickbooks-result/page.tsx`. This is the page the OAuth callback redirects to — it shows success/failure and instructs the user to return to the app:

  ```typescript
  'use client';

  import { useSearchParams } from 'next/navigation';

  export default function QuickBooksResultPage() {
    const params = useSearchParams();
    const status = params.get('status');
    const reason = params.get('reason');

    const messages: Record<string, { title: string; body: string; color: string }> = {
      connected: {
        title: 'QuickBooks Connected!',
        body: 'Your QuickBooks account is now connected. Return to the app to start syncing.',
        color: '#16a34a',
      },
      denied: {
        title: 'Connection Cancelled',
        body: 'QuickBooks access was not granted. Return to the app and try again if needed.',
        color: '#d97706',
      },
      error: {
        title: 'Connection Failed',
        body: `Something went wrong (${reason ?? 'unknown error'}). Return to the app and try again.`,
        color: '#dc2626',
      },
    };

    const msg = messages[status ?? ''] ?? messages.error;

    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: 480, margin: '80px auto', textAlign: 'center', padding: 24 }}>
        <h1 style={{ color: msg.color, fontSize: 24, marginBottom: 12 }}>{msg.title}</h1>
        <p style={{ color: '#374151', fontSize: 16 }}>{msg.body}</p>
        <p style={{ color: '#6b7280', fontSize: 14, marginTop: 24 }}>You can close this window.</p>
      </div>
    );
  }
  ```

  Add `WEB_BASE_URL` to `apps/api/.env.example` (e.g., `https://your-vercel-domain.vercel.app`).

### Task 5: Mobile QuickBooks settings screen (AC: #1, #3, #5)

- [x] 5.1: Add QuickBooks API methods to `apps/mobile/src/services/api-client.ts` (or create a dedicated `quickbooks-api.ts` alongside it):

  ```typescript
  export async function connectQuickBooks(): Promise<{ authorizationUrl: string }> {
    const result = await apiClient.post<{ authorizationUrl: string }>(
      '/api/v1/quickbooks/connect',
      {},
    );
    return result;
  }

  export async function getQuickBooksStatus(): Promise<{
    connected: boolean;
    companyName: string | null;
    realmId: string | null;
  }> {
    return apiClient.get('/api/v1/quickbooks/status');
  }

  export async function disconnectQuickBooks(): Promise<void> {
    await apiClient.post('/api/v1/quickbooks/disconnect', {});
  }
  ```

  Follow the existing `apiClient` pattern already established in `api-client.ts` (same auth headers, same error handling).

- [x] 5.2: Create `apps/mobile/app/(tabs)/more/quickbooks.tsx`:

  ```typescript
  import React, { useEffect, useState, useCallback } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ActivityIndicator,
  } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { Stack } from 'expo-router';
  import * as WebBrowser from 'expo-web-browser';
  import {
    connectQuickBooks,
    getQuickBooksStatus,
    disconnectQuickBooks,
  } from '../../../src/services/api-client';

  interface QBStatus {
    connected: boolean;
    companyName: string | null;
    realmId: string | null;
  }

  export default function QuickBooksScreen() {
    const [status, setStatus] = useState<QBStatus | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isConnecting, setIsConnecting] = useState(false);
    const [isDisconnecting, setIsDisconnecting] = useState(false);

    const loadStatus = useCallback(async () => {
      try {
        const data = await getQuickBooksStatus();
        setStatus(data);
      } catch {
        setStatus({ connected: false, companyName: null, realmId: null });
      } finally {
        setIsLoading(false);
      }
    }, []);

    useEffect(() => {
      loadStatus();
    }, [loadStatus]);

    const handleConnect = async () => {
      setIsConnecting(true);
      try {
        const { authorizationUrl } = await connectQuickBooks();

        // Open Intuit OAuth in in-app browser
        const result = await WebBrowser.openAuthSessionAsync(authorizationUrl);

        // Regardless of result type (success/cancel/dismiss), reload status
        // The server-side callback handles the actual connection
        await loadStatus();

        if (result.type === 'cancel' || result.type === 'dismiss') {
          // User cancelled — no action needed, status reload handles UI
        }
      } catch (err) {
        Alert.alert(
          'Connection Failed',
          'Could not start QuickBooks connection. Please check your internet connection and try again.',
        );
      } finally {
        setIsConnecting(false);
      }
    };

    const handleDisconnect = () => {
      Alert.alert(
        'Disconnect QuickBooks',
        'This will stop syncing your data to QuickBooks. You can reconnect at any time.',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Disconnect',
            style: 'destructive',
            onPress: async () => {
              setIsDisconnecting(true);
              try {
                await disconnectQuickBooks();
                await loadStatus();
              } catch {
                Alert.alert('Error', 'Could not disconnect. Please try again.');
              } finally {
                setIsDisconnecting(false);
              }
            },
          },
        ],
      );
    };

    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <Stack.Screen options={{ title: 'QuickBooks', headerShown: true }} />

        {isLoading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color="#2563eb" />
          </View>
        ) : status?.connected ? (
          <View style={styles.content}>
            <View style={styles.connectedCard}>
              <View style={styles.statusRow}>
                <View style={styles.connectedDot} />
                <Text style={styles.connectedLabel}>Connected</Text>
              </View>
              {status.companyName && (
                <Text style={styles.companyName}>{status.companyName}</Text>
              )}
              <Text style={styles.connectedDescription}>
                Customers, invoices, and payments will sync to QuickBooks automatically.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.disconnectButton, isDisconnecting && styles.buttonDisabled]}
              onPress={handleDisconnect}
              disabled={isDisconnecting}
            >
              {isDisconnecting ? (
                <ActivityIndicator size="small" color="#dc2626" />
              ) : (
                <Text style={styles.disconnectText}>Disconnect QuickBooks</Text>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.disconnectedCard}>
              <Text style={styles.disconnectedTitle}>Connect QuickBooks Online</Text>
              <Text style={styles.disconnectedDescription}>
                Sync your customers, invoices, and payments to QuickBooks automatically when jobs are completed.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.connectButton, isConnecting && styles.buttonDisabled]}
              onPress={handleConnect}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.connectText}>Connect QuickBooks</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9fafb' },
    centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    content: { padding: 16, gap: 16 },
    connectedCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      borderWidth: 1,
      borderColor: '#d1fae5',
      gap: 8,
    },
    statusRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    connectedDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#22c55e',
    },
    connectedLabel: { fontSize: 14, fontWeight: '600', color: '#16a34a' },
    companyName: { fontSize: 20, fontWeight: '700', color: '#111827' },
    connectedDescription: { fontSize: 14, color: '#6b7280', marginTop: 4 },
    disconnectedCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      borderWidth: 1,
      borderColor: '#e5e7eb',
      gap: 8,
    },
    disconnectedTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
    disconnectedDescription: { fontSize: 14, color: '#6b7280' },
    connectButton: {
      backgroundColor: '#2563eb',
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: 'center',
    },
    connectText: { color: '#fff', fontWeight: '700', fontSize: 16 },
    disconnectButton: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#fca5a5',
    },
    disconnectText: { color: '#dc2626', fontWeight: '600', fontSize: 16 },
    buttonDisabled: { opacity: 0.5 },
  });
  ```

- [x] 5.3: Install `expo-web-browser` if not already present. Check `apps/mobile/package.json` for `"expo-web-browser"`. If absent, run from `mvps/field-service-management/src/apps/mobile/`:
  ```
  npx expo install expo-web-browser
  ```
  Always use `npx expo install` (not `npm install`) for Expo packages to get the SDK-compatible version.

- [x] 5.4: Add navigation row to `apps/mobile/app/(tabs)/more/index.tsx`. Add a "QuickBooks" row in the Settings section. Follow the existing `TouchableOpacity` row pattern:

  ```tsx
  <TouchableOpacity
    style={styles.row}
    onPress={() => router.push('/(tabs)/more/quickbooks')}
    testID="quickbooks-row"
  >
    <Text style={styles.rowText}>QuickBooks</Text>
    <Text style={styles.rowArrow}>›</Text>
  </TouchableOpacity>
  ```

  Place it in the Settings section, after "Sync Status" and before any other settings rows.

### Task 6: Tests (AC: #1, #2, #4, #5)

- [x] 6.1: Create `apps/api/src/services/quickbooks-service.test.ts`. Test OAuth URL generation, state management, and disconnect logic without hitting real Intuit APIs:

  ```typescript
  import { generateAuthorizationUrl, consumeOAuthState } from './quickbooks-service';
  import { quickbooksConfig } from '../config/quickbooks';

  describe('generateAuthorizationUrl', () => {
    it('returns a URL starting with the Intuit authorization base URL', () => {
      const url = generateAuthorizationUrl('account-123');
      expect(url).toMatch(/^https:\/\/appcenter\.intuit\.com\/connect\/oauth2/);
    });

    it('includes required OAuth params', () => {
      const url = generateAuthorizationUrl('account-123');
      const parsed = new URL(url);
      expect(parsed.searchParams.get('client_id')).toBe(quickbooksConfig.clientId);
      expect(parsed.searchParams.get('response_type')).toBe('code');
      expect(parsed.searchParams.get('redirect_uri')).toBe(quickbooksConfig.redirectUri);
      expect(parsed.searchParams.get('scope')).toContain('quickbooks.accounting');
      expect(parsed.searchParams.get('state')).toBeTruthy();
    });

    it('embeds a state param that maps to the account ID', () => {
      const url = generateAuthorizationUrl('account-abc');
      const state = new URL(url).searchParams.get('state')!;
      const recovered = consumeOAuthState(state);
      expect(recovered).toBe('account-abc');
    });
  });

  describe('consumeOAuthState', () => {
    it('returns null for unknown state', () => {
      expect(consumeOAuthState('nonexistent-state')).toBeNull();
    });

    it('returns null if state consumed twice (single-use)', () => {
      const url = generateAuthorizationUrl('account-xyz');
      const state = new URL(url).searchParams.get('state')!;
      consumeOAuthState(state); // first use
      expect(consumeOAuthState(state)).toBeNull(); // second use
    });
  });
  ```

- [x] 6.2: Create `apps/api/tests/integration/quickbooks.test.ts`. Test the connect endpoint returns an auth URL and the status endpoint with mocked Prisma:

  ```typescript
  import request from 'supertest';
  import { app } from '../../src/index'; // ensure app is exported
  import { prisma } from '../../src/config/database';

  jest.mock('../../src/config/database', () => ({
    prisma: {
      accounts: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
    },
  }));

  describe('GET /api/v1/quickbooks/status', () => {
    it('returns connected: false when QB not connected', async () => {
      (prisma.accounts.findUnique as jest.Mock).mockResolvedValue({
        quickbooks_connected: false,
        quickbooks_company_name: null,
        quickbooks_realm_id: null,
      });

      const res = await request(app)
        .get('/api/v1/quickbooks/status')
        .set('Authorization', 'Bearer test-token'); // mock auth via jest

      expect(res.status).toBe(200);
      expect(res.body.data.connected).toBe(false);
    });

    it('returns connected: true with company name when QB connected', async () => {
      (prisma.accounts.findUnique as jest.Mock).mockResolvedValue({
        quickbooks_connected: true,
        quickbooks_company_name: 'Acme HVAC LLC',
        quickbooks_realm_id: 'realm-123',
      });

      const res = await request(app)
        .get('/api/v1/quickbooks/status')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(200);
      expect(res.body.data.connected).toBe(true);
      expect(res.body.data.companyName).toBe('Acme HVAC LLC');
    });
  });

  describe('POST /api/v1/quickbooks/connect', () => {
    it('returns an authorizationUrl', async () => {
      const res = await request(app)
        .post('/api/v1/quickbooks/connect')
        .set('Authorization', 'Bearer test-token');

      expect(res.status).toBe(200);
      expect(res.body.data.authorizationUrl).toMatch(/appcenter\.intuit\.com/);
    });
  });
  ```

  Follow the existing supertest pattern in `apps/api/tests/integration/` from earlier stories.

## Dev Notes

### What Previous Stories Built (Do Not Regress)

**Stories 6.1–6.3 established the full offline sync pipeline:**
- `apps/mobile/src/services/sync-service.ts` — WatermelonDB sync with retry
- `apps/mobile/src/contexts/sync-context.tsx` — `SyncContext` with `triggerSync`, `pendingCount`, `syncError`
- `apps/mobile/src/hooks/use-sync-log.ts` — AsyncStorage sync log (last 10 entries)
- `apps/mobile/src/components/ui/sync-badge.tsx` — Per-record sync status indicator
- `apps/api/src/routes/sync.ts` — `POST /api/v1/sync/push` and `POST /api/v1/sync/pull`
- Prisma schema includes all sync-related tables and `synced_at` columns

**The `accounts` Prisma model** already exists with `quickbooks_connected` and `quickbooks_realm_id` per the architecture data model. This story's Task 1.1 adds the OAuth token fields that weren't in the simplified architecture diagram but are required for server-side token storage.

**The `quickbooks_sync_log` table** is used by story 7.3. Task 1.2 creates it here so the schema is ready even though 7.3 isn't implemented yet.

**Do NOT change:** Provider tree in `_layout.tsx`, WatermelonDB schema (no QB-related models needed on mobile — QB sync is server-side only per architecture boundaries), sync-service.ts core logic.

### Architecture Boundaries — QuickBooks is Server-Side Only

Per the architecture: "QuickBooks sync is server-side only — mobile app displays status but never interacts with Intuit API."

- The mobile app calls `POST /api/v1/quickbooks/connect` to get an auth URL
- The mobile app opens that URL in an in-app browser
- The API server handles the OAuth callback directly from Intuit
- No Intuit tokens are ever sent to or stored on the mobile device
- The mobile app only receives `{ connected: boolean, companyName: string | null }` status

### Intuit OAuth 2.0 Technical Details

**Intuit Developer Portal:** Register your app at `developer.intuit.com` to get `client_id` and `client_secret`. Use sandbox credentials for development.

**OAuth endpoints:**
- Authorization: `https://appcenter.intuit.com/connect/oauth2`
- Token exchange/refresh: `https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer`
- Token revocation: `https://developer.api.intuit.com/v2/oauth2/tokens/revoke`

**Scope for QuickBooks Online Accounting:**
- `com.intuit.quickbooks.accounting` — full read/write access to QB Online data

**Token lifetimes:**
- Access token: 3600 seconds (1 hour) — refresh proactively when < 5 minutes remain
- Refresh token: 8,726,400 seconds (~100 days) — rotating (each refresh returns new refresh token)
- Refresh token expiry resets on each use

**Company Info API endpoint (sandbox):**
```
GET https://sandbox-quickbooks.api.intuit.com/v3/company/{realmId}/companyinfo/{realmId}?minorversion=65
Authorization: Bearer {access_token}
Accept: application/json
```
Response shape: `{ CompanyInfo: { CompanyName: string, ... } }`

**Minor version:** Always pass `?minorversion=65` (or latest) to avoid deprecated response formats. The architecture notes: "QuickBooks Online API supports API version changes with < 48 hours remediation" (NFR18) — using a minor version param makes version upgrades explicit.

**PKCE Note:** Intuit supports PKCE for mobile OAuth flows, but since this is a server-side callback pattern (mobile → API → Intuit → API callback), we use the standard `client_credentials` + `state` CSRF protection pattern instead. PKCE is for pure mobile/SPA flows without a server-side component.

### In-App Browser: `expo-web-browser`

Use `WebBrowser.openAuthSessionAsync(url)` — this is Expo's preferred API for OAuth flows:
- On iOS: Opens in `SFAuthenticationSession`/`ASWebAuthenticationSession` (maintains browser cookies, can complete OAuth)
- On Android: Opens in Chrome Custom Tabs
- Returns `{ type: 'success' | 'cancel' | 'dismiss' }` — for our server-side callback, the `type` doesn't indicate whether OAuth succeeded; always reload status after the browser closes

Do **not** use `WebBrowser.openBrowserAsync()` — it does not support the auth session flow and doesn't return a result that allows detecting browser closure.

`expo-web-browser` was introduced in this project setup (Expo SDK 52) and should be pre-installed. Verify in `apps/mobile/package.json`. If absent: `npx expo install expo-web-browser`.

### OAuth State Parameter (CSRF Protection)

The `oauthStateStore` in `quickbooks-service.ts` uses a `Map<string, { accountId, expiresAt }>`:
- State is a 32-character hex string (128 bits of entropy — sufficient)
- 10-minute TTL prevents state accumulation
- Single-use: `consumeOAuthState` deletes the entry after returning it
- This is in-memory (sufficient for Railway single-instance MVP deployment)
- **Post-MVP:** If horizontal scaling is needed, migrate state to Redis

### WEB_BASE_URL Environment Variable

The callback route redirects to `${WEB_BASE_URL}/quickbooks-result?status=...`. This must be the deployed URL of the Next.js web app:
- Development: `http://localhost:3001` (or wherever Next.js runs locally)
- Production: The Vercel deployment URL

Add to `apps/api/.env.example` and the Railway environment configuration.

### File Locations and Naming

All paths relative to `mvps/field-service-management/src/` (monorepo root):

| Action | File |
|--------|------|
| Modify | `apps/api/prisma/schema.prisma` |
| **Create** | `apps/api/prisma/migrations/YYYYMMDD_add_quickbooks_oauth_fields/` (auto-generated) |
| **Create** | `apps/api/src/config/quickbooks.ts` |
| Modify | `apps/api/src/config/env.ts` (add QB env vars to validation) |
| **Create** | `apps/api/src/services/quickbooks-service.ts` |
| **Create** | `apps/api/src/routes/quickbooks.ts` |
| Modify | `apps/api/src/index.ts` (register router) |
| Modify | `apps/api/.env.example` (add QB env vars) |
| **Create** | `apps/web/src/app/(public)/quickbooks-result/page.tsx` |
| Modify | `apps/mobile/src/services/api-client.ts` (add QB methods) |
| **Create** | `apps/mobile/app/(tabs)/more/quickbooks.tsx` |
| Modify | `apps/mobile/app/(tabs)/more/index.tsx` (add nav row) |
| **Create** | `apps/api/src/services/quickbooks-service.test.ts` |
| **Create** | `apps/api/tests/integration/quickbooks.test.ts` |

Naming conventions:
- `kebab-case.ts` for service and config files ✓
- `PascalCase.tsx` for React components ✓
- `camelCase` for functions exported from services ✓
- Error codes: `UPPER_SNAKE_CASE` (e.g., `QB_NOT_CONNECTED`) ✓

### API Response Format Compliance

All responses must follow the standard format from the architecture:
```json
{ "data": { ... } }
```
Never return raw objects. The `quickbooks.ts` route already wraps all responses in `{ data: ... }`.

Error responses via `AppError`:
```json
{ "error": { "code": "QB_NOT_CONNECTED", "message": "...", "status": 400 } }
```

### Environment Variables Needed for Full Testing

To test the OAuth flow end-to-end locally:
1. Register a free Intuit Developer account at `developer.intuit.com`
2. Create an app with `com.intuit.quickbooks.accounting` scope
3. Set redirect URI to `http://localhost:3000/api/v1/quickbooks/callback` (local)
4. Use sandbox credentials — never production in development

The unit tests (Task 6.1) test URL generation without real credentials. Integration tests (Task 6.2) mock Prisma. End-to-end OAuth testing requires real Intuit sandbox credentials.

### No WatermelonDB Changes Needed

QuickBooks connection state is NOT stored in WatermelonDB. The mobile app fetches QB status directly from the API (`GET /api/v1/quickbooks/status`) on screen load. This is correct per the architecture boundary — QB status is server-side metadata, not field-service operational data that needs offline access.

### Disconnect UX Pattern

The disconnect is destructive (clears tokens). The `Alert.alert` confirmation dialog (per Task 5.2) matches the existing UX pattern for destructive actions established in earlier stories. The "Disconnect" action is `style: 'destructive'` to show red on iOS.

Token revocation failure is handled gracefully: `catch(() => {})` on the Intuit revocation call ensures local cleanup always happens even if the revocation HTTP request fails. This is standard OAuth disconnect behavior — Intuit tokens will naturally expire even if revocation fails.

### Project Structure Notes

- QuickBooks route at `apps/api/src/routes/quickbooks.ts` follows the naming convention established by `quotes.ts`, `invoices.ts`, `payments.ts` ✓
- QuickBooks service at `apps/api/src/services/quickbooks-service.ts` follows `invoice-service.ts`, `payment-service.ts` ✓
- Mobile QB screen at `app/(tabs)/more/quickbooks.tsx` follows Expo Router file-based routing — same directory as `sync-status.tsx` ✓
- The `(public)/quickbooks-result/` route in the web app follows the `(public)/quote/[token]/` and `(public)/pay/[token]/` pattern established in the architecture ✓

### References

- [Source: epics.md#Story 7.1] — User story, all acceptance criteria, FR27
- [Source: architecture.md#QuickBooks Integration] — "Direct Intuit API. OAuth 2.0 for connection. Sync entities: Customers, Invoices, Payments."
- [Source: architecture.md#Data Architecture] — `accounts` table fields: `quickbooks_connected`, `quickbooks_realm_id`, `stripe_account_id`
- [Source: architecture.md#Data Architecture] — `quickbooks_sync_log` table schema
- [Source: architecture.md#API Design: REST with JSON] — `POST /api/v1/quickbooks/connect`, `GET /api/v1/quickbooks/callback`, `POST /api/v1/quickbooks/sync`, `GET /api/v1/quickbooks/status`
- [Source: architecture.md#Service Boundaries] — "quickbooks-service owns all Intuit API interaction"
- [Source: architecture.md#Architectural Boundaries] — "QuickBooks sync is server-side only — mobile app displays status but never interacts with Intuit API"
- [Source: architecture.md#NFR16] — 99.9%+ QuickBooks sync accuracy, zero duplicate transactions
- [Source: architecture.md#NFR18] — QuickBooks API version change remediation < 48 hours via isolated module
- [Source: stories/6-3-sync-status-display-and-error-reporting.md#File List] — `notification-service.ts`, `sync-context.tsx`, `more/index.tsx` as modification targets

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- Implemented all 5 acceptance criteria for QuickBooks OAuth 2.0 connection.
- Adapted Prisma model field names from story spec (snake_case) to match existing Account model convention (camelCase with @map): `quickbooksAccessToken`, `quickbooksRefreshToken`, `quickbooksTokenExpiresAt`, `quickbooksCompanyName`.
- Config module uses lazy getters (`get clientId()`) instead of zod module-level parse to allow test env vars to be set before module import without TypeScript temporal dead zone issues.
- QB service uses `prisma.account` (not `prisma.accounts`) per Prisma model naming (`Account` → `account`).
- In-app browser uses `expo-web-browser@~14.0.0` (Expo SDK 52 compatible) added to mobile `package.json`.
- Migration SQL file created manually (no live database available); Prisma client regenerated with `npx prisma generate`.
- 16 new tests added (7 unit, 9 integration), all passing. Full regression suite: 169/169 passing.

### File List

**Created:**
- `apps/api/src/config/quickbooks.ts`
- `apps/api/src/services/quickbooks-service.ts`
- `apps/api/src/routes/quickbooks.ts`
- `apps/api/prisma/migrations/20260525000000_add_quickbooks_oauth_fields/migration.sql`
- `apps/web/src/app/(public)/quickbooks-result/page.tsx`
- `apps/mobile/app/(tabs)/more/quickbooks.tsx`
- `apps/api/src/services/quickbooks-service.test.ts`
- `apps/api/tests/integration/quickbooks.test.ts`

**Modified:**
- `apps/api/prisma/schema.prisma` (added QB OAuth fields to Account, added QuickbooksSyncLog model)
- `apps/api/src/index.ts` (registered quickbooks router)
- `apps/api/.env.example` (added WEB_BASE_URL and QUICKBOOKS_* vars)
- `apps/mobile/src/services/api-client.ts` (added connectQuickBooks, getQuickBooksStatus, disconnectQuickBooks)
- `apps/mobile/app/(tabs)/more/index.tsx` (added QuickBooks navigation row)
- `apps/mobile/package.json` (added expo-web-browser ~14.0.0)
