import crypto from 'crypto';
import { prisma } from '../config/prisma.js';
import { quickbooksConfig } from '../config/quickbooks.js';
import { sendPushToAccount } from './notification-service.js';

// In-memory state store (sufficient for MVP — Railway single instance)
const oauthStateStore = new Map<string, { accountId: string; expiresAt: number }>();

// Throttle QB failure notifications — at most once per hour per account
const qbAlertThrottle = new Map<string, number>(); // accountId → last alert timestamp ms

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

  if (totalCount < 10) return;
  if (failedCount / totalCount <= 0.001) return;

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

export async function syncCustomerToQuickBooks(
  accountId: string,
  customerId: string,
): Promise<void> {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: { quickbooksConnected: true, quickbooksRealmId: true },
  });

  if (!account?.quickbooksConnected || !account.quickbooksRealmId) return;
  const realmId = account.quickbooksRealmId;

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
  });
  if (!customer) return;

  if (customer.quickbooksCustomerId) {
    await logQbSync({
      accountId,
      entityType: 'CUSTOMER',
      entityId: customerId,
      status: 'DUPLICATE_PREVENTED',
      quickbooksId: customer.quickbooksCustomerId,
    });
    return;
  }

  try {
    const token = await getValidAccessToken(accountId);

    const body: Record<string, unknown> = {
      DisplayName: customer.name,
    };
    if (customer.email) {
      body.PrimaryEmailAddr = { Address: customer.email };
    }
    if (customer.phone) {
      body.PrimaryPhone = { FreeFormNumber: customer.phone };
    }
    if (customer.addressLine1) {
      body.BillAddr = {
        Line1: customer.addressLine1,
        ...(customer.addressLine2 ? { Line2: customer.addressLine2 } : {}),
        ...(customer.city ? { City: customer.city } : {}),
        ...(customer.state ? { CountrySubDivisionCode: customer.state } : {}),
        ...(customer.zip ? { PostalCode: customer.zip } : {}),
      };
    }

    const response = await fetch(
      `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/customer?minorversion=65`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`QB customer create failed: ${response.status} ${text}`);
    }

    const data = (await response.json()) as { Customer: { Id: string } };
    const qbCustomerId = data.Customer.Id;

    await prisma.customer.update({
      where: { id: customerId },
      data: { quickbooksCustomerId: qbCustomerId },
    });

    await logQbSync({
      accountId,
      entityType: 'CUSTOMER',
      entityId: customerId,
      status: 'SUCCESS',
      quickbooksId: qbCustomerId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[QB] Customer sync failed:', message);
    await logQbSync({
      accountId,
      entityType: 'CUSTOMER',
      entityId: customerId,
      status: 'FAILED',
      errorMessage: message,
    }).catch(() => {});
  }
}

export async function syncInvoiceToQuickBooks(
  accountId: string,
  invoiceId: string,
): Promise<void> {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: { quickbooksConnected: true, quickbooksRealmId: true },
  });

  if (!account?.quickbooksConnected || !account.quickbooksRealmId) return;
  const realmId = account.quickbooksRealmId;

  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { customer: true },
  });
  if (!invoice) return;

  if (invoice.quickbooksInvoiceId) {
    await logQbSync({
      accountId,
      entityType: 'INVOICE',
      entityId: invoiceId,
      status: 'DUPLICATE_PREVENTED',
      quickbooksId: invoice.quickbooksInvoiceId,
    });
    return;
  }

  try {
    if (!invoice.customer.quickbooksCustomerId) {
      await syncCustomerToQuickBooks(accountId, invoice.customerId);
      const updatedCustomer = await prisma.customer.findUnique({
        where: { id: invoice.customerId },
        select: { quickbooksCustomerId: true },
      });
      if (!updatedCustomer?.quickbooksCustomerId) {
        throw new Error('Failed to sync customer to QB before invoice');
      }
      invoice.customer.quickbooksCustomerId = updatedCustomer.quickbooksCustomerId;
    }

    const token = await getValidAccessToken(accountId);

    let lines: object[];
    if (invoice.quoteId) {
      const lineItems = await prisma.lineItem.findMany({
        where: { quote_id: invoice.quoteId },
        orderBy: { sort_order: 'asc' },
      });

      if (lineItems.length > 0) {
        lines = lineItems.map(li => ({
          DetailType: 'SalesItemLineDetail',
          Amount: li.total / 100,
          Description: li.description,
          SalesItemLineDetail: {
            ItemRef: { value: '1', name: 'Services' },
            Qty: parseFloat(li.quantity.toString()),
            UnitPrice: li.unit_price / 100,
          },
        }));
      } else {
        lines = buildFallbackLine(invoice.total);
      }
    } else {
      lines = buildFallbackLine(invoice.total);
    }

    const qbInvoiceBody: Record<string, unknown> = {
      CustomerRef: { value: invoice.customer.quickbooksCustomerId },
      Line: lines,
    };

    if (invoice.dueAt) {
      qbInvoiceBody.DueDate = invoice.dueAt.toISOString().split('T')[0];
    }

    const response = await fetch(
      `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/invoice?minorversion=65`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(qbInvoiceBody),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`QB invoice create failed: ${response.status} ${text}`);
    }

    const data = (await response.json()) as { Invoice: { Id: string } };
    const qbInvoiceId = data.Invoice.Id;

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { quickbooksInvoiceId: qbInvoiceId },
    });

    await logQbSync({
      accountId,
      entityType: 'INVOICE',
      entityId: invoiceId,
      status: 'SUCCESS',
      quickbooksId: qbInvoiceId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[QB] Invoice sync failed:', message);
    await logQbSync({
      accountId,
      entityType: 'INVOICE',
      entityId: invoiceId,
      status: 'FAILED',
      errorMessage: message,
    }).catch(() => {});
  }
}

function buildFallbackLine(totalCents: number): object[] {
  return [
    {
      DetailType: 'SalesItemLineDetail',
      Amount: totalCents / 100,
      Description: 'Field service work',
      SalesItemLineDetail: {
        ItemRef: { value: '1', name: 'Services' },
        Qty: 1,
        UnitPrice: totalCents / 100,
      },
    },
  ];
}

export async function syncPaymentToQuickBooks(
  accountId: string,
  paymentId: string,
): Promise<void> {
  const account = await prisma.account.findUnique({
    where: { id: accountId },
    select: { quickbooksConnected: true, quickbooksRealmId: true },
  });

  if (!account?.quickbooksConnected || !account.quickbooksRealmId) return;
  const realmId = account.quickbooksRealmId;

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: {
      invoice: {
        include: { customer: { select: { quickbooksCustomerId: true } } },
      },
    },
  });
  if (!payment) return;

  if (payment.quickbooksPaymentId) {
    await logQbSync({
      accountId,
      entityType: 'PAYMENT',
      entityId: paymentId,
      status: 'DUPLICATE_PREVENTED',
      quickbooksId: payment.quickbooksPaymentId,
    });
    return;
  }

  try {
    const { invoice } = payment;
    if (!invoice.quickbooksInvoiceId) {
      throw new Error(
        `Invoice ${invoice.id} has no quickbooksInvoiceId — invoice must sync before payment`,
      );
    }
    if (!invoice.customer.quickbooksCustomerId) {
      throw new Error(
        `Customer ${invoice.customerId} has no quickbooksCustomerId`,
      );
    }

    const token = await getValidAccessToken(accountId);
    const amountInDollars = payment.amount / 100;

    const response = await fetch(
      `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/payment?minorversion=65`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          CustomerRef: { value: invoice.customer.quickbooksCustomerId },
          TotalAmt: amountInDollars,
          Line: [
            {
              Amount: amountInDollars,
              LinkedTxn: [
                { TxnId: invoice.quickbooksInvoiceId, TxnType: 'Invoice' },
              ],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`QB payment create failed: ${response.status} ${text}`);
    }

    const data = (await response.json()) as { Payment: { Id: string } };
    const qbPaymentId = data.Payment.Id;

    await prisma.payment.update({
      where: { id: paymentId },
      data: { quickbooksPaymentId: qbPaymentId },
    });

    await logQbSync({
      accountId,
      entityType: 'PAYMENT',
      entityId: paymentId,
      status: 'SUCCESS',
      quickbooksId: qbPaymentId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[QB] Payment sync failed:', message);
    await logQbSync({
      accountId,
      entityType: 'PAYMENT',
      entityId: paymentId,
      status: 'FAILED',
      errorMessage: message,
    }).catch(() => {});
  }
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
