import { notFound } from "next/navigation";
import { QuoteDisplay } from "@/components/customer-view/quote-display";
import type { CustomerQuoteViewData } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  await params;
  return {
    title: "Your Quote",
    description: "Review and accept your contractor quote",
  };
}

export default async function CustomerQuotePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/quotes/view/${token}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const { data }: { data: CustomerQuoteViewData } = await res.json();

  return (
    <main className="min-h-screen bg-gray-50">
      <QuoteDisplay data={data} />
    </main>
  );
}
