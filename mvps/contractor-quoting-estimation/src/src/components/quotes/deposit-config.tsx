"use client";

import { formatCurrency } from "@/lib/utils";

type DepositType = "FIXED" | "PERCENTAGE" | null;

type DepositConfigProps = {
  depositType: DepositType;
  depositValue: number | null;
  total: number;
  onChange: (depositType: DepositType, depositValue: number | null) => void;
};

export function DepositConfig({
  depositType,
  depositValue,
  total,
  onChange,
}: DepositConfigProps) {
  const depositDollarAmount =
    depositType === "PERCENTAGE" && depositValue != null
      ? total * (depositValue / 100)
      : depositType === "FIXED"
      ? (depositValue ?? 0)
      : null;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        Deposit
      </h3>
      <div className="flex gap-2">
        {(
          [
            { label: "None", value: null },
            { label: "Fixed ($)", value: "FIXED" },
            { label: "Percentage (%)", value: "PERCENTAGE" },
          ] as const
        ).map((option) => (
          <button
            key={String(option.value)}
            type="button"
            onClick={() => onChange(option.value, option.value ? depositValue : null)}
            className={`flex-1 min-h-[44px] rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
              depositType === option.value
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {depositType === "FIXED" && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Deposit Amount ($)
          </label>
          <input
            type="number"
            value={depositValue ?? ""}
            onChange={(e) => onChange("FIXED", parseFloat(e.target.value) || 0)}
            min={0}
            step={0.01}
            placeholder="0.00"
            className="h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {depositType === "PERCENTAGE" && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Deposit Percentage (%)
            </label>
            <input
              type="number"
              value={depositValue ?? ""}
              onChange={(e) =>
                onChange("PERCENTAGE", parseFloat(e.target.value) || 0)
              }
              min={0}
              max={100}
              step={0.01}
              placeholder="0"
              className="h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {depositDollarAmount != null && (
            <p className="text-sm text-gray-600">
              Deposit amount:{" "}
              <span className="font-medium">
                {formatCurrency(depositDollarAmount)}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
