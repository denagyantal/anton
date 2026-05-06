import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { QuoteBuilder } from "@/components/quotes/quote-builder";
import type { QuoteStatus } from "@/types";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function QuotePage({ params }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const { id } = await params;

  const quote = await prisma.quote.findFirst({
    where: { id, userId: session.user.id },
    include: { lineItems: { orderBy: { sortOrder: "asc" } } },
  });

  if (!quote) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 max-w-lg mx-auto">
      <QuoteBuilder quoteId={id} initialQuote={quote} quoteStatus={quote.status as QuoteStatus} />
    </main>
  );
}
