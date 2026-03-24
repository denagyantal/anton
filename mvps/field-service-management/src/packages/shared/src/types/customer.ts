export interface Customer {
  id: string;
  accountId: string;
  name: string;
  email: string | null;
  phone: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  notes: string | null;
  quickbooksCustomerId: string | null;
  createdAt: string;
  updatedAt: string;
}
