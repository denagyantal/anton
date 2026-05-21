'use client';

import { useState } from 'react';

export default function ApproveButtons({
  token,
  apiUrl,
}: {
  token: string;
  apiUrl: string;
}) {
  const [decision, setDecision] = useState<'approved' | 'declined' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAction = async (action: 'approve' | 'decline') => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/api/v1/quotes/${action}/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setDecision(action === 'approve' ? 'approved' : 'declined');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (decision === 'approved') {
    return (
      <div className="text-center bg-green-50 rounded-lg p-6">
        <p className="text-green-700 font-semibold text-lg">Quote Approved!</p>
        <p className="text-green-600 text-sm mt-1">
          Thank you! We&#39;ll be in touch to schedule your service.
        </p>
      </div>
    );
  }

  if (decision === 'declined') {
    return (
      <div className="text-center bg-gray-50 rounded-lg p-6">
        <p className="text-gray-700 font-semibold">Quote Declined</p>
        <p className="text-gray-500 text-sm mt-1">We&#39;ve received your decision.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button
        onClick={() => handleAction('approve')}
        disabled={isLoading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg"
      >
        {isLoading ? 'Processing...' : 'Approve Quote'}
      </button>
      <button
        onClick={() => handleAction('decline')}
        disabled={isLoading}
        className="w-full bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 text-gray-700 font-semibold py-4 rounded-lg text-lg"
      >
        Decline
      </button>
    </div>
  );
}
