import {
  calculateLineTotal,
  calculateSubtotal,
  calculateTaxAmount,
  calculateQuoteTotal,
} from './quote-calculations';

describe('quote-calculations', () => {
  describe('calculateLineTotal', () => {
    it('calculates line total for quantity=2, price=8900 → 17800', () => {
      expect(calculateLineTotal(2, 8900)).toBe(17800);
    });

    it('returns 0 when quantity is 0', () => {
      expect(calculateLineTotal(0, 8900)).toBe(0);
    });

    it('handles fractional quantity (1.5 * 10000 → 15000)', () => {
      expect(calculateLineTotal(1.5, 10000)).toBe(15000);
    });

    it('rounds result to integer cents', () => {
      // 3 * 3333 = 9999, no rounding needed
      expect(calculateLineTotal(3, 3333)).toBe(9999);
      // 1.5 * 3333 = 4999.5, rounds to 5000
      expect(calculateLineTotal(1.5, 3333)).toBe(5000);
    });

    it('handles quantity of 1 (default)', () => {
      expect(calculateLineTotal(1, 5000)).toBe(5000);
    });
  });

  describe('calculateSubtotal', () => {
    it('sums line item totals correctly', () => {
      const items = [{ total: 8900 }, { total: 15000 }, { total: 3200 }];
      expect(calculateSubtotal(items)).toBe(27100);
    });

    it('returns 0 for empty array', () => {
      expect(calculateSubtotal([])).toBe(0);
    });

    it('returns single item total for one item', () => {
      expect(calculateSubtotal([{ total: 12500 }])).toBe(12500);
    });
  });

  describe('calculateTaxAmount', () => {
    it('calculates tax at 8.5% of 10000 → 850', () => {
      expect(calculateTaxAmount(10000, 8.5)).toBe(850);
    });

    it('rounds to nearest cent', () => {
      // 8.25% of 999 = 82.4175 → rounds to 82
      expect(calculateTaxAmount(999, 8.25)).toBe(82);
    });

    it('returns 0 when tax rate is 0', () => {
      expect(calculateTaxAmount(10000, 0)).toBe(0);
    });

    it('returns 0 when subtotal is 0', () => {
      expect(calculateTaxAmount(0, 8.5)).toBe(0);
    });
  });

  describe('calculateQuoteTotal', () => {
    it('returns subtotal + tax', () => {
      expect(calculateQuoteTotal(10000, 850)).toBe(10850);
    });

    it('returns subtotal when tax is 0', () => {
      expect(calculateQuoteTotal(27100, 0)).toBe(27100);
    });
  });
});
