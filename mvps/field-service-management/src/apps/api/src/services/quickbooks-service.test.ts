// Set env vars before any module imports to avoid config validation errors
process.env['QUICKBOOKS_CLIENT_ID'] = 'test-client-id';
process.env['QUICKBOOKS_CLIENT_SECRET'] = 'test-client-secret';
process.env['QUICKBOOKS_REDIRECT_URI'] = 'https://example.com/api/v1/quickbooks/callback';
process.env['QUICKBOOKS_ENVIRONMENT'] = 'sandbox';

import { generateAuthorizationUrl, consumeOAuthState } from './quickbooks-service.js';
import { quickbooksConfig } from '../config/quickbooks.js';

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
