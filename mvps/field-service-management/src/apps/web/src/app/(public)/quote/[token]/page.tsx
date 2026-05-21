import ApproveButtons from './approve-buttons';

const API_URL = process.env['API_URL'] ?? 'http://localhost:3001';

type QuoteData = {
  quoteId: string;
  status: string;
  businessName: string;
  businessLogoUrl: string | null;
  customerName: string;
  lineItems: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
  subtotal: number;
  taxAmount: number;
  total: number;
  pdfUrl: string | null;
  expiresAt: string | null;
};

export default async function QuotePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const res = await fetch(`${API_URL}/api/v1/quotes/view/${token}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const isExpired = res.status === 410;
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isExpired ? 'Quote Expired' : 'Quote Not Found'}
          </h1>
          <p className="text-gray-500">
            {isExpired
              ? 'This quote link has expired. Please contact your service provider.'
              : 'This quote is no longer available.'}
          </p>
        </div>
      </div>
    );
  }

  const { data: quote } = (await res.json()) as { data: QuoteData };

  const formatMoney = (cents: number) => `$${(cents / 100).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          {quote.businessLogoUrl && (
            <img
              src={quote.businessLogoUrl}
              alt="Business logo"
              className="h-12 mb-3 object-contain"
            />
          )}
          <h1 className="text-xl font-bold text-gray-900">{quote.businessName}</h1>
          <p className="text-gray-600 mt-1">Estimate for {quote.customerName}</p>
        </div>

        {/* Line Items */}
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h2 className="font-semibold text-gray-700 mb-3">Estimate Details</h2>
          {quote.lineItems.map((item, i) => (
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
              <span>{formatMoney(quote.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tax</span>
              <span>{formatMoney(quote.taxAmount)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>{formatMoney(quote.total)}</span>
            </div>
          </div>
        </div>

        {/* PDF Link */}
        {quote.pdfUrl && (
          <div className="mb-4">
            <a
              href={quote.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gray-100 text-blue-600 font-medium py-3 rounded-lg"
            >
              View PDF Quote
            </a>
          </div>
        )}

        {/* Approve/Decline Buttons */}
        {(quote.status === 'SENT' || quote.status === 'VIEWED') && (
          <ApproveButtons
            token={token}
            apiUrl={process.env['NEXT_PUBLIC_API_URL'] ?? API_URL}
          />
        )}

        {quote.status === 'APPROVED' && (
          <div className="text-center bg-green-50 rounded-lg p-6">
            <p className="text-green-700 font-semibold text-lg">Quote Approved</p>
            <p className="text-green-600 text-sm mt-1">
              Thank you! We&#39;ll be in touch to schedule your service.
            </p>
          </div>
        )}

        {quote.status === 'DECLINED' && (
          <div className="text-center bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 font-semibold">Quote Declined</p>
          </div>
        )}
      </div>
    </div>
  );
}
