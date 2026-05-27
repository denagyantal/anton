'use client';

type Invoice = {
  id: string;
  invoiceNumber: string;
  customerName: string;
  status: string;
  total: number;
  amountPaid: number;
  sentAt: string | null;
  paidAt: string | null;
  dueAt: string | null;
};

const STATUS_COLORS: Record<string, string> = {
  DRAFT: 'bg-gray-100 text-gray-600',
  SENT: 'bg-blue-100 text-blue-700',
  VIEWED: 'bg-purple-100 text-purple-700',
  PAID: 'bg-green-100 text-green-700',
  PARTIALLY_PAID: 'bg-yellow-100 text-yellow-700',
  OVERDUE: 'bg-red-100 text-red-700',
};

function formatMoney(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatStatus(status: string): string {
  return status.replace(/_/g, ' ');
}

interface InvoiceTableProps {
  invoices: Invoice[];
}

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  if (invoices.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg font-medium">No invoices found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-500">Invoice #</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Customer</th>
            <th className="text-right py-3 px-4 font-medium text-gray-500">Total</th>
            <th className="text-right py-3 px-4 font-medium text-gray-500">Paid</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Sent</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Paid On</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Due</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 font-mono text-gray-700">{inv.invoiceNumber}</td>
              <td className="py-3 px-4 text-gray-900">{inv.customerName}</td>
              <td className="py-3 px-4 text-right font-medium text-gray-900">
                {formatMoney(inv.total)}
              </td>
              <td className="py-3 px-4 text-right text-gray-600">
                {formatMoney(inv.amountPaid)}
              </td>
              <td className="py-3 px-4">
                <span
                  className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    STATUS_COLORS[inv.status] ?? 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {formatStatus(inv.status)}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-500">{formatDate(inv.sentAt)}</td>
              <td className="py-3 px-4 text-gray-500">{formatDate(inv.paidAt)}</td>
              <td className="py-3 px-4 text-gray-500">{formatDate(inv.dueAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
