import { generateQuotePdf } from './pdf-service.js';

// Mock @react-pdf/renderer
jest.mock('@react-pdf/renderer', () => ({
  Document: 'Document',
  Page: 'Page',
  View: 'View',
  Text: 'Text',
  Image: 'Image',
  StyleSheet: {
    create: (styles: Record<string, unknown>) => styles,
  },
  renderToBuffer: jest.fn().mockResolvedValue(Buffer.from('fake-pdf')),
}));

// Mock Prisma with factory functions to avoid hoisting issues
jest.mock('../config/prisma.js', () => ({
  prisma: {
    quote: {
      findFirst: jest.fn(),
    },
    account: {
      findUnique: jest.fn(),
    },
  },
}));

// Mock shared package
jest.mock('@field-service/shared', () => ({
  centsToDollars: (cents: number) => (cents / 100).toFixed(2),
}));

const mockQuote = {
  id: 'quote-1',
  account_id: 'account-1',
  customer_id: 'customer-1',
  status: 'DRAFT',
  subtotal: 10000,
  tax_amount: 800,
  total: 10800,
  notes: 'Test notes',
  created_at: new Date('2026-01-15'),
  updated_at: new Date('2026-01-15'),
  line_items: [
    {
      id: 'li-1',
      description: 'Labor',
      quantity: 2,
      unit_price: 5000,
      total: 10000,
      sort_order: 0,
    },
  ],
  customer: {
    id: 'customer-1',
    name: 'Jane Smith',
    addressLine1: '123 Main St',
    addressLine2: null,
    city: 'Springfield',
    state: 'IL',
    zip: '62701',
    phone: '555-1234',
  },
  quote_photos: [
    { id: 'photo-1', photo_url: 'https://example.com/photo.jpg' },
  ],
};

const mockAccount = {
  id: 'account-1',
  businessName: 'Test Plumbing Co',
  businessLogoUrl: null,
  licenseNumber: 'LIC-123',
};

describe('generateQuotePdf', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValue(mockQuote);
    (prisma.account.findUnique as jest.Mock).mockResolvedValue(mockAccount);
  });

  it('resolves to a Buffer for a valid mock quote', async () => {
    const result = await generateQuotePdf('quote-1', 'account-1');
    expect(Buffer.isBuffer(result)).toBe(true);
  });

  it('throws if quote is not found', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.quote.findFirst as jest.Mock).mockResolvedValueOnce(null);

    await expect(generateQuotePdf('missing-quote', 'account-1')).rejects.toThrow('Quote not found');
  });

  it('throws if account is not found', async () => {
    const { prisma } = require('../config/prisma.js');
    (prisma.account.findUnique as jest.Mock).mockResolvedValueOnce(null);

    await expect(generateQuotePdf('quote-1', 'missing-account')).rejects.toThrow('Account not found');
  });
});
