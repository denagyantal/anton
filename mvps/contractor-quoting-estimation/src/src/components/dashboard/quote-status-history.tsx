import { formatDate } from "@/lib/utils";

interface StatusStep {
  label: string;
  timestamp: Date | string | null | undefined;
  always?: boolean;
}

interface QuoteStatusHistoryProps {
  createdAt: Date | string;
  sentAt?: Date | string | null;
  viewedAt?: Date | string | null;
  signedAt?: Date | string | null;
  paidAt?: Date | string | null;
}

export function QuoteStatusHistory({
  createdAt,
  sentAt,
  viewedAt,
  signedAt,
  paidAt,
}: QuoteStatusHistoryProps) {
  const steps: StatusStep[] = [
    { label: "Created", timestamp: createdAt, always: true },
    { label: "Sent to customer", timestamp: sentAt },
    { label: "Viewed by customer", timestamp: viewedAt },
    { label: "Signed", timestamp: signedAt },
    { label: "Deposit paid", timestamp: paidAt },
  ];

  const visibleSteps = steps.filter((s) => s.always || s.timestamp);

  if (visibleSteps.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">
        Status History
      </h2>
      <ol className="relative border-l border-gray-200 ml-2 space-y-3">
        {visibleSteps.map((step) => (
          <li key={step.label} className="pl-4">
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-1 mt-1.5" />
            <p className="text-sm font-medium text-gray-900">{step.label}</p>
            {step.timestamp && (
              <p className="text-xs text-gray-500">
                {formatDate(step.timestamp)}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
