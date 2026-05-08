import type { QuoteStatus } from "@/types";

const STATUS_CONFIG: Record<QuoteStatus, { label: string; className: string }> =
  {
    DRAFT: {
      label: "Draft",
      className: "bg-gray-100 text-gray-700",
    },
    SENT: {
      label: "Sent",
      className: "bg-blue-100 text-blue-700",
    },
    VIEWED: {
      label: "Viewed",
      className: "bg-amber-100 text-amber-700",
    },
    SIGNED: {
      label: "Signed",
      className: "bg-green-100 text-green-700",
    },
    PAID: {
      label: "Paid",
      className: "bg-green-700 text-white font-semibold",
    },
    EXPIRED: {
      label: "Expired",
      className: "bg-red-100 text-red-700",
    },
  };

interface StatusBadgeProps {
  status: QuoteStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.DRAFT;
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs ${config.className}`}
    >
      {config.label}
    </span>
  );
}
