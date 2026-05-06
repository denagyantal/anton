"use client";

const TRADES = [
  { value: "PLUMBING", label: "Plumbing", icon: "🔧" },
  { value: "ELECTRICAL", label: "Electrical", icon: "⚡" },
  { value: "HVAC", label: "HVAC", icon: "❄️" },
  { value: "PAINTING", label: "Painting", icon: "🎨" },
] as const;

type TradeValue = (typeof TRADES)[number]["value"];

type TradeSelectorProps = {
  onSelect: (trade: TradeValue) => void;
  isLoading?: boolean;
};

export function TradeSelector({ onSelect, isLoading = false }: TradeSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-gray-900">Select Trade</h2>
      <div className="grid grid-cols-2 gap-3">
        {TRADES.map((trade) => (
          <button
            key={trade.value}
            type="button"
            disabled={isLoading}
            onClick={() => onSelect(trade.value)}
            className="flex flex-col items-center justify-center gap-2 min-h-[44px] h-28 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-3xl" aria-hidden="true">
              {trade.icon}
            </span>
            <span className="text-sm font-medium text-gray-800">{trade.label}</span>
          </button>
        ))}
      </div>
      {isLoading && (
        <div className="flex items-center justify-center py-2">
          <svg
            className="h-5 w-5 animate-spin text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Loading"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
