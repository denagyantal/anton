export interface Customer {
  id: string;
  accountId: string;
  name: string;
  email?: string;
  phone: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zip?: string;
  notes?: string;
  quickbooksCustomerId?: string;
  createdAt: string;
  updatedAt: string;
}

export type CustomerAddress = {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zip?: string;
};
