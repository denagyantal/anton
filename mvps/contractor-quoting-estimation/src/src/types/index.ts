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

export interface QuotePdfData {
  quoteNumber: string;
  trade: Trade;
  createdAt: Date | string;
  customerName: string;
  customerAddress?: string | null;
  customerPhone?: string | null;
  customerEmail?: string | null;
  notes?: string | null;
  taxRate: number;
  depositType?: 'FIXED' | 'PERCENTAGE' | null;
  depositValue?: number | null;
  termsText?: string | null;
  lineItems: Array<{
    description: string;
    quantity: number;
    unit: string;
    unitPrice: number;
  }>;
  photos: Array<{ url: string; sortOrder: number }>;
}

export interface ProfilePdfData {
  businessName: string;
  logoUrl?: string | null;
  licenseNumber?: string | null;
  phone?: string | null;
  email?: string | null;
  brandColor: string;
  paymentTerms?: string | null;
}

export interface CustomerLineItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  sortOrder: number;
}

export interface CustomerPhoto {
  id: string;
  url: string;
  thumbnail?: string | null;
  sortOrder: number;
  caption?: string | null;
}

export interface ContractorPublicInfo {
  businessName: string;
  logoUrl?: string | null;
  licenseNumber?: string | null;
  phone?: string | null;
  email?: string | null;
  brandColor: string;
  paymentTerms?: string | null;
}

export interface CustomerQuoteViewData {
  quote: {
    id: string;
    quoteNumber: string;
    trade: Trade;
    status: QuoteStatus;
    customerName: string;
    customerAddress?: string | null;
    customerPhone?: string | null;
    customerEmail?: string | null;
    notes?: string | null;
    taxRate: number;
    depositType?: DepositType | null;
    depositValue?: number | null;
    termsText?: string | null;
    createdAt: Date | string;
    signedAt?: Date | string | null;
    lineItems: CustomerLineItem[];
    photos: CustomerPhoto[];
  };
  contractor: ContractorPublicInfo;
}
