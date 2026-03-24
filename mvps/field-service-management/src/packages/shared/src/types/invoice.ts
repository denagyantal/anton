export type InvoiceStatus = 'DRAFT' | 'SENT' | 'VIEWED' | 'PAID' | 'PARTIALLY_PAID' | 'OVERDUE';

export interface Invoice {
  id: string;
  accountId: string;
  customerId: string;
  jobId: string | null;
  quoteId: string | null;
  status: InvoiceStatus;
  subtotal: number;
  taxAmount: number;
  total: number;
  amountPaid: number;
  pdfUrl: string | null;
  paymentToken: string | null;
  sentAt: string | null;
  paidAt: string | null;
  dueAt: string | null;
  quickbooksInvoiceId: string | null;
  createdAt: string;
  updatedAt: string;
}

export type PaymentMethod = 'CARD_ON_SITE' | 'CARD_VIA_LINK';
export type PaymentStatus = 'PENDING' | 'SUCCEEDED' | 'FAILED' | 'REFUNDED';

export interface Payment {
  id: string;
  accountId: string;
  invoiceId: string;
  amount: number;
  stripePaymentId: string | null;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  quickbooksPaymentId: string | null;
  createdAt: string;
  updatedAt: string;
}
