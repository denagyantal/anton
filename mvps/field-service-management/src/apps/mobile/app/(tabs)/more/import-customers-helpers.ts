import Customer from '../../../src/db/models/customer';

export interface ColumnMapping {
  name: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
}

export function detectColumns(headers: string[]): ColumnMapping {
  const find = (patterns: string[]): string => {
    return (
      headers.find((h) => patterns.some((p) => h.toLowerCase().includes(p))) ?? ''
    );
  };

  return {
    name: find(['name', 'full name', 'customer']),
    phone: find(['phone', 'mobile', 'cell', 'tel']),
    email: find(['email', 'e-mail']),
    addressLine1: find(['address', 'street', 'addr']),
    addressLine2: find(['address 2', 'address2', 'unit', 'apt', 'suite']),
    city: find(['city', 'town']),
    state: find(['state', 'province', 'region']),
    zip: find(['zip', 'postal', 'postcode']),
  };
}

export function classifyRows(
  rows: Record<string, string>[],
  mapping: ColumnMapping,
  phoneMap: Map<string, Customer>,
): {
  toCreate: Record<string, string>[];
  toDuplicate: Array<{ existing: Customer; row: Record<string, string> }>;
  toSkip: Record<string, string>[];
} {
  const toCreate: Record<string, string>[] = [];
  const toDuplicate: Array<{ existing: Customer; row: Record<string, string> }> = [];
  const toSkip: Record<string, string>[] = [];

  for (const row of rows) {
    const nameVal = (row[mapping.name] ?? '').trim();
    if (!nameVal) {
      toSkip.push(row);
      continue;
    }
    const phoneVal = mapping.phone ? (row[mapping.phone] ?? '').trim() : '';
    const existing = phoneVal ? phoneMap.get(phoneVal) : undefined;
    if (existing) {
      toDuplicate.push({ existing, row });
    } else {
      toCreate.push(row);
    }
  }

  return { toCreate, toDuplicate, toSkip };
}
