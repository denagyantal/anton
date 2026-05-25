import crypto from 'crypto';
import { prisma } from '../config/prisma.js';
import { quickbooksConfig } from '../config/quickbooks.js';

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
    expires_in: number;
    x_refresh_token_expires_in: number;
  };

  const expiresAt = new Date(Date.now() + data.expires_in * 1000);

  const companyName = await fetchCompanyName(realmId, data.access_token).catch(() => null);

  await prisma.account.update({
    where: { id: accountId },
    data: {
      quickbooksConnected: true,
      quickbooksRealmId: realmId,
      quickbooksAccessToken: data.access_token,
      quickbooksRefreshToken: data.refresh_token,
      quickbooksTokenExpiresAt: expiresAt,
      quickbooksCompanyName: companyName,
    },
  });
}

export async function refreshAccessToken(accountId: string): Promise<string> {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: { quickbooksRefreshToken: true },
  });

  if (!account?.quickbooksRefreshToken) {
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
      refresh_token: account.quickbooksRefreshToken,
    }),
  });

  if (!response.ok) {
    // Refresh token may have expired (100-day TTL). Force reconnect.
    await prisma.account.update({
      where: { id: accountId },
      data: { quickbooksConnected: false },
    });
    throw new Error('QuickBooks refresh token expired — user must reconnect');
  }

  const data = (await response.json()) as {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };

  const expiresAt = new Date(Date.now() + data.expires_in * 1000);

  await prisma.account.update({
    where: { id: accountId },
    data: {
      quickbooksAccessToken: data.access_token,
      quickbooksRefreshToken: data.refresh_token,
      quickbooksTokenExpiresAt: expiresAt,
    },
  });

  return data.access_token;
}

export async function getValidAccessToken(accountId: string): Promise<string> {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: {
      quickbooksAccessToken: true,
      quickbooksTokenExpiresAt: true,
      quickbooksConnected: true,
    },
  });

  if (!account?.quickbooksConnected || !account.quickbooksAccessToken) {
    throw new Error('QuickBooks not connected for this account');
  }

  // Refresh if within 5 minutes of expiry
  const bufferMs = 5 * 60 * 1000;
  const isExpiringSoon =
    !account.quickbooksTokenExpiresAt ||
    account.quickbooksTokenExpiresAt.getTime() - Date.now() < bufferMs;

  if (isExpiringSoon) {
    return refreshAccessToken(accountId);
  }

  return account.quickbooksAccessToken;
}

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
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: {
      quickbooksConnected: true,
      quickbooksCompanyName: true,
      quickbooksRealmId: true,
    },
  });

  return {
    connected: account?.quickbooksConnected ?? false,
    companyName: account?.quickbooksCompanyName ?? null,
    realmId: account?.quickbooksRealmId ?? null,
  };
}

export async function disconnectQuickBooks(accountId: string): Promise<void> {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: { quickbooksAccessToken: true },
  });

  // Attempt token revocation (best effort — clear locally even if revocation fails)
  if (account?.quickbooksAccessToken) {
    const credentials = Buffer.from(
      `${quickbooksConfig.clientId}:${quickbooksConfig.clientSecret}`,
    ).toString('base64');

    await fetch(quickbooksConfig.revokeUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: account.quickbooksAccessToken }),
    }).catch(() => {}); // Ignore revocation errors — local cleanup is critical
  }

  await prisma.account.update({
    where: { id: accountId },
    data: {
      quickbooksConnected: false,
      quickbooksRealmId: null,
      quickbooksAccessToken: null,
      quickbooksRefreshToken: null,
      quickbooksTokenExpiresAt: null,
      quickbooksCompanyName: null,
    },
  });
}
