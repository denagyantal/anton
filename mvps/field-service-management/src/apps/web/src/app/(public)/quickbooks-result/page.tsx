'use client';

import { useSearchParams } from 'next/navigation';

export default function QuickBooksResultPage() {
  const params = useSearchParams();
  const status = params.get('status');
  const reason = params.get('reason');

  const messages: Record<string, { title: string; body: string; color: string }> = {
    connected: {
      title: 'QuickBooks Connected!',
      body: 'Your QuickBooks account is now connected. Return to the app to start syncing.',
      color: '#16a34a',
    },
    denied: {
      title: 'Connection Cancelled',
      body: 'QuickBooks access was not granted. Return to the app and try again if needed.',
      color: '#d97706',
    },
    error: {
      title: 'Connection Failed',
      body: `Something went wrong (${reason ?? 'unknown error'}). Return to the app and try again.`,
      color: '#dc2626',
    },
  };

  const msg = messages[status ?? ''] ?? messages['error'];

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 480,
        margin: '80px auto',
        textAlign: 'center',
        padding: 24,
      }}
    >
      <h1 style={{ color: msg.color, fontSize: 24, marginBottom: 12 }}>{msg.title}</h1>
      <p style={{ color: '#374151', fontSize: 16 }}>{msg.body}</p>
      <p style={{ color: '#6b7280', fontSize: 14, marginTop: 24 }}>You can close this window.</p>
    </div>
  );
}
