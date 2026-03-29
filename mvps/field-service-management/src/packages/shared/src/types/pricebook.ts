export enum UnitType {
  EACH = 'EACH',
  HOUR = 'HOUR',
  FLAT = 'FLAT',
}

export interface PricebookItem {
  id: string;
  accountId: string;
  category: string;
  name: string;
  description?: string;
  unitPrice: number;
  unitType: UnitType;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export type PricebookCategory = string;
