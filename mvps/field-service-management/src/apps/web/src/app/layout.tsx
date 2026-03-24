import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Field Service Management Dashboard',
  description: 'Web dashboard for field service management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
