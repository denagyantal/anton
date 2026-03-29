export function calculateLineTotal(quantity: number, unitPriceCents: number): number {
  return Math.round(quantity * unitPriceCents);
}

export function calculateSubtotal(lineItems: Array<{ total: number }>): number {
  return lineItems.reduce((sum, item) => sum + item.total, 0);
}

export function calculateTaxAmount(subtotalCents: number, taxRatePercent: number): number {
  return Math.round(subtotalCents * taxRatePercent / 100);
}

export function calculateQuoteTotal(subtotalCents: number, taxAmountCents: number): number {
  return subtotalCents + taxAmountCents;
}
