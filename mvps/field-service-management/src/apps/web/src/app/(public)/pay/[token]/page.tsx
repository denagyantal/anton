import PayButton from './pay-button';

const API_URL = process.env['API_URL'] ?? 'http://localhost:3001';

type LineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

type InvoiceData = {
  invoiceId: string;
  invoiceNumber: string | null;
  status: string;
  businessName: string;
  businessLogoUrl: string | null;
  customerName: string;
  lineItems: LineItem[];
  subtotal: number;
  taxAmount: number;
  total: number;
  amountPaid: number;
  pdfUrl: string | null;
  dueAt: string | null;
};

export default async function PayPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { token } = await params;
  const { success } = await searchParams;

  const res = await fetch(`${API_URL}/api/v1/invoices/view/${token}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const isExpired = res.status === 410;
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isExpired ? 'Payment Link Expired' : 'Invoice Not Found'}
          </h1>
          <p className="text-gray-500">
            {isExpired
              ? 'This payment link has expired. Please contact your service provider.'
              : 'This invoice is no longer available.'}
          </p>
        </div>
      </div>
    );
  }

  const { data: invoice } = (await res.json()) as { data: InvoiceData };
  const formatMoney = (cents: number) => `$${(cents / 100).toFixed(2)}`;

  const isPaid = invoice.status === 'PAID';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          {invoice.businessLogoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={invoice.businessLogoUrl}
              alt="Business logo"
              className="h-12 mb-3 object-contain"
            />
          )}
          <h1 className="text-xl font-bold text-gray-900">{invoice.businessName}</h1>
          <p className="text-gray-600 mt-1">
            Invoice {invoice.invoiceNumber ? `#${invoice.invoiceNumber}` : ''} for {invoice.customerName}
          </p>
          {invoice.dueAt && (
            <p className="text-sm text-gray-400 mt-1">
              Due {new Date(invoice.dueAt).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Line Items */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h2 className="font-semibold text-gray-700 mb-3">Invoice Details</h2>
          {invoice.lineItems.map((item, i) => (
            <div
              key={i}
              className="flex justify-between py-2 border-b border-gray-100 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{item.description}</p>
                <p className="text-xs text-gray-500">
                  {item.quantity} × {formatMoney(item.unitPrice)}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-800">{formatMoney(item.total)}</p>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Subtotal</span>
              <span>{formatMoney(invoice.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tax</span>
              <span>{formatMoney(invoice.taxAmount)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>{formatMoney(invoice.total)}</span>
            </div>
          </div>
        </div>

        {/* PDF Link */}
        {invoice.pdfUrl && (
          <div className="mb-4">
            <a
              href={invoice.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gray-100 text-blue-600 font-medium py-3 rounded-lg"
            >
              View PDF Invoice
            </a>
          </div>
        )}

        {/* Payment Status / Pay Button */}
        {success === 'true' || isPaid ? (
          <div className="text-center bg-green-50 rounded-lg p-6">
            <p className="text-green-700 font-semibold text-lg">Payment Received</p>
            <p className="text-green-600 text-sm mt-1">
              Thank you! Your payment of {formatMoney(invoice.total)} has been processed.
            </p>
          </div>
        ) : (
          <PayButton token={token} apiUrl={process.env['NEXT_PUBLIC_API_URL'] ?? API_URL} />
        )}
      </div>
    </div>
  );
}
