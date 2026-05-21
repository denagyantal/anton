export enum QuoteStatus {
  DRAFT = 'DRAFT',
  SENT = 'SENT',
  VIEWED = 'VIEWED',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
  EXPIRED = 'EXPIRED',
}

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
  pdfUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuotePhoto {
  id: string;
  quoteId: string;
  remoteUrl: string;
  localUri: string;
  caption: string;
  takenAt?: string;
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
