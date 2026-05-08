"use client";

import { useState } from "react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import type { CustomerQuoteViewData } from "@/types";
import { SignaturePad } from "@/components/customer-view/signature-pad";

const TRADE_LABELS: Record<string, string> = {
  PLUMBING: "Plumbing",
  ELECTRICAL: "Electrical",
  HVAC: "HVAC",
  PAINTING: "Painting",
};

interface Props {
  data: CustomerQuoteViewData;
  token: string;
}

export function QuoteDisplay({ data, token }: Props) {
  const { quote, contractor } = data;

  const [showSignPad, setShowSignPad] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [localStatus, setLocalStatus] = useState(data.quote.status);
  const [localSignedAt, setLocalSignedAt] = useState<string | null>(null);

  const subtotal = quote.lineItems.reduce(
    (sum, li) => sum + li.quantity * li.unitPrice,
    0
  );
  const taxAmount = subtotal * (quote.taxRate / 100);
  const total = subtotal + taxAmount;

  const depositDisplay = (() => {
    if (!quote.depositType || quote.depositValue == null) return null;
    if (quote.depositType === "FIXED") {
      return `Deposit Due: ${formatCurrency(quote.depositValue)}`;
    }
    const depositAmount = total * (quote.depositValue / 100);
    return `Deposit Due: ${quote.depositValue}% — ${formatCurrency(depositAmount)}`;
  })();

  const createdDate = new Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
  }).format(new Date(quote.createdAt));

  const handleSignatureSubmit = async (signatureData: string) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(`/api/quotes/view/${token}/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ signatureData }),
      });
      if (!res.ok) {
        const body = await res.json();
        setSubmitError(body.error?.message ?? "Failed to submit signature. Please try again.");
        return;
      }
      const body = await res.json();
      setLocalStatus("SIGNED");
      setLocalSignedAt(body.data?.signedAt ?? new Date().toISOString());
      setShowSignPad(false);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto pb-8">
      {/* Contractor header */}
      <header
        style={{ backgroundColor: contractor.brandColor }}
        className="p-6"
      >
        <div className="flex items-center gap-4">
          {contractor.logoUrl && (
            <Image
              src={contractor.logoUrl}
              alt={contractor.businessName}
              width={80}
              height={80}
              className="rounded object-contain bg-white"
              unoptimized
            />
          )}
          <div>
            <h1 className="text-white font-bold text-xl">
              {contractor.businessName}
            </h1>
            {contractor.licenseNumber && (
              <p className="text-white/80 text-sm">
                License: {contractor.licenseNumber}
              </p>
            )}
            <div className="flex flex-wrap gap-3 mt-1">
              {contractor.phone && (
                <a
                  href={`tel:${contractor.phone}`}
                  className="text-white/90 text-sm"
                >
                  {contractor.phone}
                </a>
              )}
              {contractor.email && (
                <a
                  href={`mailto:${contractor.email}`}
                  className="text-white/90 text-sm"
                >
                  {contractor.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 space-y-6 mt-6">
        {/* Quote metadata */}
        <section className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-700">
            <span>
              <span className="font-medium">Quote #</span> {quote.quoteNumber}
            </span>
            <span>
              <span className="font-medium">Trade:</span>{" "}
              {TRADE_LABELS[quote.trade] ?? quote.trade}
            </span>
            <span>
              <span className="font-medium">Date:</span> {createdDate}
            </span>
          </div>
        </section>

        {/* Customer info */}
        <section className="bg-white rounded-lg border border-gray-200 p-4">
          <h2 className="font-semibold text-gray-900 mb-2">Customer</h2>
          <p className="text-gray-800 font-medium">{quote.customerName}</p>
          {quote.customerAddress && (
            <p className="text-gray-600 text-sm">{quote.customerAddress}</p>
          )}
          {quote.customerPhone && (
            <a
              href={`tel:${quote.customerPhone}`}
              className="text-gray-600 text-sm block"
            >
              {quote.customerPhone}
            </a>
          )}
          {quote.customerEmail && (
            <a
              href={`mailto:${quote.customerEmail}`}
              className="text-gray-600 text-sm block"
            >
              {quote.customerEmail}
            </a>
          )}
        </section>

        {/* Line items */}
        <section className="bg-white rounded-lg border border-gray-200 p-4">
          <h2 className="font-semibold text-gray-900 mb-3">Line Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-2 font-medium pr-4">Description</th>
                  <th className="pb-2 font-medium pr-4 whitespace-nowrap">
                    Qty / Unit
                  </th>
                  <th className="pb-2 font-medium pr-4 text-right whitespace-nowrap">
                    Unit Price
                  </th>
                  <th className="pb-2 font-medium text-right whitespace-nowrap">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {quote.lineItems.map((li) => (
                  <tr
                    key={li.id}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-2 pr-4 text-gray-800">
                      {li.description}
                    </td>
                    <td className="py-2 pr-4 text-gray-600 whitespace-nowrap">
                      {li.quantity} {li.unit}
                    </td>
                    <td className="py-2 pr-4 text-right text-gray-700 whitespace-nowrap">
                      {formatCurrency(li.unitPrice)}
                    </td>
                    <td className="py-2 text-right font-medium text-gray-900 whitespace-nowrap">
                      {formatCurrency(li.quantity * li.unitPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Totals */}
        <section className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="space-y-1 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax ({quote.taxRate}%)</span>
              <span>{formatCurrency(taxAmount)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-200 pt-2 mt-2">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
            {depositDisplay && (
              <div className="flex justify-between text-blue-700 font-medium pt-1">
                <span>{depositDisplay}</span>
              </div>
            )}
          </div>
        </section>

        {/* Notes */}
        {quote.notes && (
          <section className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-gray-900 mb-2">Project Notes</h2>
            <p className="text-gray-700 text-sm whitespace-pre-wrap">
              {quote.notes}
            </p>
          </section>
        )}

        {/* Photos */}
        {quote.photos.length > 0 && (
          <section className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-gray-900 mb-3">
              Jobsite Photos
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {quote.photos.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.id}
                  src={p.url}
                  alt={p.caption ?? "Jobsite photo"}
                  loading="lazy"
                  className="w-full rounded object-cover aspect-square"
                />
              ))}
            </div>
          </section>
        )}

        {/* Terms */}
        {quote.termsText && (
          <section className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-gray-900 mb-2">
              Terms &amp; Conditions
            </h2>
            <p className="text-gray-700 text-sm whitespace-pre-wrap">
              {quote.termsText}
            </p>
          </section>
        )}

        {/* Bottom CTA — conditional on status */}
        <div className="p-4">
          {localStatus === "SIGNED" || localStatus === "PAID" ? (
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <p className="text-green-700 font-semibold text-lg">Quote Signed</p>
              {localSignedAt && (
                <p className="text-green-600 text-sm mt-1">
                  Signed on {new Intl.DateTimeFormat(undefined, { dateStyle: "long", timeStyle: "short" }).format(new Date(localSignedAt))}
                </p>
              )}
              {(data.quote.status === "SIGNED" || data.quote.status === "PAID") && data.quote.signedAt && !localSignedAt && (
                <p className="text-green-600 text-sm mt-1">
                  Signed on {new Intl.DateTimeFormat(undefined, { dateStyle: "long", timeStyle: "short" }).format(new Date(data.quote.signedAt))}
                </p>
              )}
            </div>
          ) : showSignPad ? (
            <div>
              {submitError && (
                <p className="text-red-600 text-sm mb-3" role="alert">{submitError}</p>
              )}
              <SignaturePad
                signerName={data.quote.customerName}
                onSubmit={handleSignatureSubmit}
                onCancel={() => { setShowSignPad(false); setSubmitError(null); }}
                isSubmitting={isSubmitting}
              />
            </div>
          ) : (
            <button
              type="button"
              data-testid="accept-sign-btn"
              onClick={() => setShowSignPad(true)}
              className="w-full min-h-[44px] bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold text-base hover:bg-blue-700 active:bg-blue-800"
            >
              Accept &amp; Sign
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
