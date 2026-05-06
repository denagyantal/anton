"use client";

import { calculateTotal, formatCurrency } from "@/lib/utils";

type DepositType = "FIXED" | "PERCENTAGE" | null;

type QuoteSummaryProps = {
  lineItems: Array<{ quantity: number; unitPrice: number }>;
  taxRate: number;
  depositType: DepositType;
  depositValue: number | null;
};

export function QuoteSummary({
  lineItems,
  taxRate,
  depositType,
  depositValue,
}: QuoteSummaryProps) {
  const { subtotal, tax, total } = calculateTotal(lineItems, taxRate);

  const depositAmount =
    depositType === "FIXED"
      ? (depositValue ?? 0)
      : depositType === "PERCENTAGE" && depositValue != null
      ? total * (depositValue / 100)
      : null;

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Tax ({taxRate}%)</span>
        <span>{formatCurrency(tax)}</span>
      </div>
      <div className="flex justify-between text-base font-semibold text-gray-900 border-t border-gray-200 pt-2 mt-1">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
      {depositAmount != null && (
        <div className="flex justify-between text-sm text-blue-600 font-medium">
          <span>Deposit Due</span>
          <span>{formatCurrency(depositAmount)}</span>
        </div>
      )}
    </div>
  );
}
