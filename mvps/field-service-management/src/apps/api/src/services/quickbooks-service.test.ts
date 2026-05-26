// Set env vars before any module imports to avoid config validation errors
process.env['QUICKBOOKS_CLIENT_ID'] = 'test-client-id';
process.env['QUICKBOOKS_CLIENT_SECRET'] = 'test-client-secret';
process.env['QUICKBOOKS_REDIRECT_URI'] = 'https://example.com/api/v1/quickbooks/callback';
process.env['QUICKBOOKS_ENVIRONMENT'] = 'sandbox';

jest.mock('../config/prisma.js', () => ({
  prisma: {
    account: { findUnique: jest.fn() },
    customer: { findUnique: jest.fn(), update: jest.fn() },
    invoice: { findUnique: jest.fn(), update: jest.fn() },
    payment: { findUnique: jest.fn(), update: jest.fn() },
    lineItem: { findMany: jest.fn() },
    quickbooksSyncLog: { create: jest.fn() },
  },
}));

import {
  generateAuthorizationUrl,
  consumeOAuthState,
  syncCustomerToQuickBooks,
  syncPaymentToQuickBooks,
} from './quickbooks-service.js';
import { quickbooksConfig } from '../config/quickbooks.js';
import { prisma as mockPrisma } from '../config/prisma.js';

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

  it('generates unique state per call', () => {
    const url1 = generateAuthorizationUrl('account-1');
    const url2 = generateAuthorizationUrl('account-2');
    const state1 = new URL(url1).searchParams.get('state');
    const state2 = new URL(url2).searchParams.get('state');
    expect(state1).not.toBe(state2);
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
    expect(consumeOAuthState(state)).toBeNull(); // second use — must return null
  });

  it('returns the accountId for a valid state', () => {
    const url = generateAuthorizationUrl('account-999');
    const state = new URL(url).searchParams.get('state')!;
    expect(consumeOAuthState(state)).toBe('account-999');
  });
});

const connectedAccount = {
  quickbooksConnected: true,
  quickbooksRealmId: 'realm-1',
  quickbooksAccessToken: 'test-access-token',
  quickbooksTokenExpiresAt: new Date(Date.now() + 3600000),
};

describe('syncCustomerToQuickBooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('skips sync when QB not connected', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue({
      quickbooksConnected: false,
      quickbooksRealmId: null,
    });
    global.fetch = jest.fn();

    await syncCustomerToQuickBooks('acct-1', 'cust-1');

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('logs DUPLICATE_PREVENTED when quickbooksCustomerId already set', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue(connectedAccount);
    (mockPrisma.customer.findUnique as jest.Mock).mockResolvedValue({
      id: 'cust-1',
      quickbooksCustomerId: 'QB-CUST-123',
      name: 'John',
    });
    (mockPrisma.quickbooksSyncLog.create as jest.Mock).mockResolvedValue({});

    await syncCustomerToQuickBooks('acct-1', 'cust-1');

    expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: 'DUPLICATE_PREVENTED' }),
      }),
    );
  });

  it('creates QB customer and stores ID on success', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue(connectedAccount);
    (mockPrisma.customer.findUnique as jest.Mock).mockResolvedValue({
      id: 'cust-1',
      quickbooksCustomerId: null,
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '555-1234',
      addressLine1: null,
    });
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ Customer: { Id: 'QB-999' } }) });
    (mockPrisma.customer.update as jest.Mock).mockResolvedValue({});
    (mockPrisma.quickbooksSyncLog.create as jest.Mock).mockResolvedValue({});

    await syncCustomerToQuickBooks('acct-1', 'cust-1');

    expect(mockPrisma.customer.update).toHaveBeenCalledWith(
      expect.objectContaining({ data: { quickbooksCustomerId: 'QB-999' } }),
    );
    expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: 'SUCCESS', quickbooksId: 'QB-999' }),
      }),
    );
  });

  it('logs FAILED and does not throw on QB API error', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue(connectedAccount);
    (mockPrisma.customer.findUnique as jest.Mock).mockResolvedValue({
      id: 'cust-1',
      quickbooksCustomerId: null,
      name: 'Jane',
    });
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 400, text: async () => 'Bad Request' });
    (mockPrisma.quickbooksSyncLog.create as jest.Mock).mockResolvedValue({});

    await expect(syncCustomerToQuickBooks('acct-1', 'cust-1')).resolves.toBeUndefined();

    expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: 'FAILED' }),
      }),
    );
  });
});

describe('syncPaymentToQuickBooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('logs DUPLICATE_PREVENTED when quickbooksPaymentId already set', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue(connectedAccount);
    (mockPrisma.payment.findUnique as jest.Mock).mockResolvedValue({
      id: 'pay-1',
      quickbooksPaymentId: 'QB-PAY-456',
      amount: 15000,
      invoice: {
        id: 'inv-1',
        quickbooksInvoiceId: 'QB-INV-789',
        customer: { quickbooksCustomerId: 'QB-CUST-123' },
      },
    });
    (mockPrisma.quickbooksSyncLog.create as jest.Mock).mockResolvedValue({});

    await syncPaymentToQuickBooks('acct-1', 'pay-1');

    expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: 'DUPLICATE_PREVENTED' }),
      }),
    );
  });

  it('logs FAILED when invoice lacks quickbooksInvoiceId', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue(connectedAccount);
    (mockPrisma.payment.findUnique as jest.Mock).mockResolvedValue({
      id: 'pay-2',
      quickbooksPaymentId: null,
      amount: 10000,
      invoice: {
        id: 'inv-2',
        quickbooksInvoiceId: null,
        customerId: 'cust-1',
        customer: { quickbooksCustomerId: 'QB-CUST-1' },
      },
    });
    (mockPrisma.quickbooksSyncLog.create as jest.Mock).mockResolvedValue({});

    await expect(syncPaymentToQuickBooks('acct-1', 'pay-2')).resolves.toBeUndefined();

    expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: 'FAILED' }),
      }),
    );
  });

  it('records QB payment and stores ID on success', async () => {
    (mockPrisma.account.findUnique as jest.Mock).mockResolvedValue(connectedAccount);
    (mockPrisma.payment.findUnique as jest.Mock).mockResolvedValue({
      id: 'pay-3',
      quickbooksPaymentId: null,
      amount: 20000,
      invoice: {
        id: 'inv-3',
        quickbooksInvoiceId: 'QB-INV-555',
        customerId: 'cust-1',
        customer: { quickbooksCustomerId: 'QB-CUST-555' },
      },
    });
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ Payment: { Id: 'QB-PAY-999' } }) });
    (mockPrisma.payment.update as jest.Mock).mockResolvedValue({});
    (mockPrisma.quickbooksSyncLog.create as jest.Mock).mockResolvedValue({});

    await syncPaymentToQuickBooks('acct-1', 'pay-3');

    expect(mockPrisma.payment.update).toHaveBeenCalledWith(
      expect.objectContaining({ data: { quickbooksPaymentId: 'QB-PAY-999' } }),
    );
    expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ status: 'SUCCESS', quickbooksId: 'QB-PAY-999' }),
      }),
    );
  });
});
