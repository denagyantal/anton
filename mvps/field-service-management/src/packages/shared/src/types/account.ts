export interface Account {
  id: string;
  businessName: string;
  businessLogoUrl: string | null;
  licenseNumber: string | null;
  contactEmail: string;
  contactPhone: string;
  tradeType: string;
  quickbooksConnected: boolean;
  quickbooksRealmId: string | null;
  stripeAccountId: string | null;
  createdAt: string;
  updatedAt: string;
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
}
