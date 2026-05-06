"use client";

import { formatCurrency } from "@/lib/utils";

const COMMON_UNITS = [
  "each",
  "per linear foot",
  "per square foot",
  "per hour",
  "flat rate",
];

type LineItem = {
  id?: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  isCustom: boolean;
};

type LineItemRowProps = {
  item: LineItem;
  onChange: (item: LineItem) => void;
  onRemove: () => void;
};

export function LineItemRow({ item, onChange, onRemove }: LineItemRowProps) {
  function update(field: keyof LineItem, value: string | number | boolean) {
    onChange({ ...item, [field]: value });
  }

  const lineTotal = item.quantity * item.unitPrice;

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3">
      <div className="flex items-start gap-2">
        <input
          type="text"
          value={item.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="Item description"
          className="flex-1 h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Item description"
        />
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove line item"
          className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1 w-24">
          <label className="text-xs text-gray-500">Qty</label>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => update("quantity", parseFloat(e.target.value) || 0)}
            min={0.01}
            step={0.01}
            className="h-10 w-full rounded-md border border-gray-300 px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Quantity"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-xs text-gray-500">Unit</label>
          <select
            value={item.unit}
            onChange={(e) => update("unit", e.target.value)}
            className="h-10 w-full rounded-md border border-gray-300 px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Unit"
          >
            {COMMON_UNITS.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-28">
          <label className="text-xs text-gray-500">Unit Price</label>
          <input
            type="number"
            value={item.unitPrice}
            onChange={(e) => update("unitPrice", parseFloat(e.target.value) || 0)}
            min={0}
            step={0.01}
            className="h-10 w-full rounded-md border border-gray-300 px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Unit price"
          />
        </div>
        <div className="flex flex-col gap-1 w-24 text-right">
          <span className="text-xs text-gray-500">Total</span>
          <span className="h-10 flex items-center justify-end text-sm font-medium text-gray-900">
            {formatCurrency(lineTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
