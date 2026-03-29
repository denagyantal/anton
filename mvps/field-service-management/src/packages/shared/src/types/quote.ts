export type QuoteStatus = 'DRAFT' | 'SENT' | 'VIEWED' | 'APPROVED' | 'DECLINED' | 'EXPIRED';

export interface Quote {
  id: string;
  accountId: string;
  customerId: string;
  createdById?: string;
  status: QuoteStatus;
  subtotal: number;
  taxAmount: number;
  total: number;
  notes?: string;
  approvalToken?: string;
  sentAt?: string;
  approvedAt?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LineItem {
  id: string;
  quoteId: string;
  pricebookItemId?: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}
