"use client";

import { useState } from "react";
import type { Quote, LineItem } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomerInfo } from "@/components/quotes/customer-info";
import { LineItemRow } from "@/components/quotes/line-item-row";
import { LineItemPicker, type TemplateItemData } from "@/components/quotes/line-item-picker";
import { DepositConfig } from "@/components/quotes/deposit-config";
import { QuoteSummary } from "@/components/quotes/quote-summary";
import { useQuote } from "@/hooks/use-quotes";

type QuoteWithLineItems = Quote & { lineItems: LineItem[] };

type LocalLineItem = {
  id?: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  isCustom: boolean;
};

type DepositType = "FIXED" | "PERCENTAGE" | null;

type QuoteBuilderProps = {
  quoteId: string;
  initialQuote: QuoteWithLineItems;
};

export function QuoteBuilder({ quoteId, initialQuote }: QuoteBuilderProps) {
  const { mutate } = useQuote(quoteId);

  const [customerName, setCustomerName] = useState(initialQuote.customerName);
  const [customerAddress, setCustomerAddress] = useState(initialQuote.customerAddress ?? "");
  const [customerPhone, setCustomerPhone] = useState(initialQuote.customerPhone ?? "");
  const [customerEmail, setCustomerEmail] = useState(initialQuote.customerEmail ?? "");
  const [notes, setNotes] = useState(initialQuote.notes ?? "");
  const [taxRate, setTaxRate] = useState(initialQuote.taxRate);
  const [depositType, setDepositType] = useState<DepositType>(
    (initialQuote.depositType as DepositType) ?? null
  );
  const [depositValue, setDepositValue] = useState<number | null>(
    initialQuote.depositValue ?? null
  );
  const [lineItems, setLineItems] = useState<LocalLineItem[]>(
    initialQuote.lineItems.map((li) => ({
      id: li.id,
      description: li.description,
      quantity: li.quantity,
      unit: li.unit,
      unitPrice: li.unitPrice,
      isCustom: li.isCustom,
    }))
  );

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  function handleCustomerChange(value: {
    customerName: string;
    customerAddress?: string;
    customerPhone?: string;
    customerEmail?: string;
  }) {
    setCustomerName(value.customerName);
    setCustomerAddress(value.customerAddress ?? "");
    setCustomerPhone(value.customerPhone ?? "");
    setCustomerEmail(value.customerEmail ?? "");
  }

  function handleAddFromLibrary(templateItem: TemplateItemData) {
    setLineItems((prev) => [
      ...prev,
      {
        description: templateItem.description,
        quantity: 1,
        unit: templateItem.unit,
        unitPrice: templateItem.suggestedPrice ?? 0,
        isCustom: false,
      },
    ]);
  }

  function handleAddCustomItem() {
    setLineItems((prev) => [
      ...prev,
      {
        description: "",
        quantity: 1,
        unit: "each",
        unitPrice: 0,
        isCustom: true,
      },
    ]);
  }

  function handleLineItemChange(index: number, item: LocalLineItem) {
    setLineItems((prev) => prev.map((li, i) => (i === index ? item : li)));
  }

  function handleLineItemRemove(index: number) {
    setLineItems((prev) => prev.filter((_, i) => i !== index));
  }

  function handleDepositChange(type: DepositType, value: number | null) {
    setDepositType(type);
    setDepositValue(value);
  }

  async function handleSave() {
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const res = await fetch(`/api/quotes/${quoteId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerAddress: customerAddress || undefined,
          customerPhone: customerPhone || undefined,
          customerEmail: customerEmail || undefined,
          notes: notes || undefined,
          taxRate,
          depositType,
          depositValue,
          lineItems,
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        setSaveMessage({ type: "error", text: body.error ?? "Failed to save." });
        return;
      }

      await mutate();
      setSaveMessage({ type: "success", text: "Quote saved successfully." });
    } catch {
      setSaveMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSaving(false);
    }
  }

  const { total } = (() => {
    const subtotal = lineItems.reduce((s, li) => s + li.quantity * li.unitPrice, 0);
    const tax = subtotal * (taxRate / 100);
    return { total: subtotal + tax };
  })();

  return (
    <div className="flex flex-col gap-6 pb-24">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {initialQuote.trade}
          </p>
          <h1 className="text-xl font-bold text-gray-900">
            {initialQuote.quoteNumber}
          </h1>
        </div>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
          {initialQuote.status}
        </span>
      </div>

      {/* Customer Info */}
      <CustomerInfo
        value={{ customerName, customerAddress, customerPhone, customerEmail }}
        onChange={handleCustomerChange}
      />

      {/* Line Items */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Line Items
        </h3>

        {lineItems.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">
            No items yet. Add from the library or create a custom item.
          </p>
        )}

        {lineItems.map((item, index) => (
          <LineItemRow
            key={item.id ?? `new-${index}`}
            item={item}
            onChange={(updated) => handleLineItemChange(index, updated)}
            onRemove={() => handleLineItemRemove(index)}
          />
        ))}

        <button
          type="button"
          onClick={handleAddCustomItem}
          className="flex items-center justify-center gap-2 min-h-[44px] w-full rounded-lg border-2 border-dashed border-gray-300 text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          <span className="text-lg" aria-hidden="true">+</span>
          Custom Item
        </button>
      </div>

      {/* Line Item Library */}
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Add from Library
        </h3>
        <LineItemPicker
          trade={initialQuote.trade}
          onAddItem={handleAddFromLibrary}
        />
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="quote-notes"
          className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
        >
          Job Notes / Scope
        </label>
        <textarea
          id="quote-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Describe the scope of work, special conditions, or any notes for the customer..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Tax Rate */}
      <div className="flex flex-col gap-1">
        <Input
          label="Tax Rate (%)"
          type="number"
          min={0}
          max={100}
          step={0.01}
          value={taxRate}
          onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
        />
      </div>

      {/* Deposit Config */}
      <DepositConfig
        depositType={depositType}
        depositValue={depositValue}
        total={total}
        onChange={handleDepositChange}
      />

      {/* Quote Summary */}
      <QuoteSummary
        lineItems={lineItems}
        taxRate={taxRate}
        depositType={depositType}
        depositValue={depositValue}
      />

      {/* Save feedback */}
      {saveMessage && (
        <p
          className={`text-sm text-center ${
            saveMessage.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {saveMessage.text}
        </p>
      )}

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <Button
          onClick={handleSave}
          isLoading={isSaving}
          className="w-full"
          size="lg"
        >
          Save Quote
        </Button>
      </div>
    </div>
  );
}
