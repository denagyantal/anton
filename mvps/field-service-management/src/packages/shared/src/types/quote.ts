export type QuoteStatus = 'DRAFT' | 'SENT' | 'VIEWED' | 'APPROVED' | 'DECLINED' | 'EXPIRED';

export interface Quote {
  id: string;
  accountId: string;
  customerId: string;
  createdById: string;
  status: QuoteStatus;
  subtotal: number;
  taxAmount: number;
  total: number;
  notes: string | null;
  approvalToken: string | null;
  sentAt: string | null;
  approvedAt: string | null;
  expiresAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LineItem {
  id: string;
  quoteId: string;
  pricebookItemId: string | null;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  sortOrder: number;
}
