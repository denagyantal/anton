'use client';

import { useState } from 'react';

export default function PayButton({
  token,
  apiUrl,
}: {
  token: string;
  apiUrl: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePay = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/api/v1/invoices/pay/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: { message?: string } })?.error?.message ?? 'Payment initiation failed');
      }
      const { data } = await res.json() as { data: { checkoutUrl: string } };
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <p className="text-red-600 text-sm text-center mb-3">{error}</p>}
      <button
        onClick={handlePay}
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg"
      >
        {isLoading ? 'Redirecting to payment...' : 'Pay Now'}
      </button>
      <p className="text-xs text-gray-400 text-center mt-3">
        Secured by Stripe. We never store your card details.
      </p>
    </div>
  );
}
