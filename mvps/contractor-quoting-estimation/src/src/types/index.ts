export type Trade = "PLUMBING" | "ELECTRICAL" | "HVAC" | "PAINTING";

export type QuoteStatus =
  | "DRAFT"
  | "SENT"
  | "VIEWED"
  | "SIGNED"
  | "PAID"
  | "EXPIRED";

export type DepositType = "FIXED" | "PERCENTAGE";

export interface UserProfile {
  id: string;
  userId: string;
  businessName: string;
  contactName?: string | null;
  phone?: string | null;
  email?: string | null;
  licenseNumber?: string | null;
  logoUrl?: string | null;
  defaultTaxRate: number;
  paymentTerms?: string | null;
  brandColor: string;
  trade: Trade;
}

export interface LineItemData {
  id?: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  sortOrder?: number;
  isCustom?: boolean;
}

export interface QuoteData {
  id: string;
  userId: string;
  status: QuoteStatus;
  quoteNumber: string;
  trade: Trade;
  customerName: string;
  customerAddress?: string | null;
  customerPhone?: string | null;
  customerEmail?: string | null;
  notes?: string | null;
  taxRate: number;
  depositType?: DepositType | null;
  depositValue?: number | null;
  termsText?: string | null;
  viewToken: string;
  viewedAt?: Date | null;
  signedAt?: Date | null;
  signatureData?: string | null;
  paidAt?: Date | null;
  expiresAt?: Date | null;
  pdfUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date | null;
  lineItems: LineItemData[];
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}
