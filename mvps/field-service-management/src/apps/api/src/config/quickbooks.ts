export const quickbooksConfig = {
  get clientId() {
    return process.env['QUICKBOOKS_CLIENT_ID'] ?? '';
  },
  get clientSecret() {
    return process.env['QUICKBOOKS_CLIENT_SECRET'] ?? '';
  },
  get redirectUri() {
    return process.env['QUICKBOOKS_REDIRECT_URI'] ?? '';
  },
  get environment() {
    return (process.env['QUICKBOOKS_ENVIRONMENT'] ?? 'sandbox') as 'sandbox' | 'production';
  },
  authorizationBaseUrl: 'https://appcenter.intuit.com/connect/oauth2',
  tokenUrl: 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
  revokeUrl: 'https://developer.api.intuit.com/v2/oauth2/tokens/revoke',
  scopes: ['com.intuit.quickbooks.accounting'],
  get apiBaseUrl() {
    return (process.env['QUICKBOOKS_ENVIRONMENT'] ?? 'sandbox') === 'production'
      ? 'https://quickbooks.api.intuit.com'
      : 'https://sandbox-quickbooks.api.intuit.com';
  },
} as const;

export function validateQuickBooksConfig(): void {
  if (!quickbooksConfig.clientId) throw new Error('Missing QUICKBOOKS_CLIENT_ID');
  if (!quickbooksConfig.clientSecret) throw new Error('Missing QUICKBOOKS_CLIENT_SECRET');
  if (!quickbooksConfig.redirectUri) throw new Error('Missing QUICKBOOKS_REDIRECT_URI');
}
