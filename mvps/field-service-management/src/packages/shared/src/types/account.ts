export interface Account {
  id: string;
  businessName: string | null;
  businessLogoUrl: string | null;
  licenseNumber: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  tradeType: 'HVAC' | 'PLUMBING' | 'ELECTRICAL' | null;
  quickbooksConnected: boolean;
  quickbooksRealmId: string | null;
  stripeAccountId: string | null;
  createdAt: string;
  updatedAt: string;
  syncedAt: string | null;
}

export interface TeamMember {
  id: string;
  accountId: string;
  email: string;
  phone: string | null;
  name: string;
  role: 'OWNER' | 'MEMBER';
  authUserId: string;
  createdAt: string;
  updatedAt: string;
  syncedAt: string | null;
}

export interface BusinessProfile {
  businessName: string | null;
  businessLogoUrl: string | null;
  licenseNumber: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  tradeType: 'HVAC' | 'PLUMBING' | 'ELECTRICAL' | null;
}

export interface AccountUpdateRequest {
  businessName: string;
  licenseNumber?: string;
  contactEmail?: string;
  contactPhone?: string;
  tradeType: 'HVAC' | 'PLUMBING' | 'ELECTRICAL';
}

export interface AccountResponse {
  id: string;
  businessName: string | null;
  businessLogoUrl: string | null;
  licenseNumber: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  tradeType: 'HVAC' | 'PLUMBING' | 'ELECTRICAL' | null;
  createdAt: string;
  updatedAt: string;
}
