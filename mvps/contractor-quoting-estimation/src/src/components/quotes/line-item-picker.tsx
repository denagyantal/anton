"use client";

import { useState } from "react";
import { useTemplates, useTemplateItems } from "@/hooks/use-templates";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export type TemplateItemData = {
  id: string;
  description: string;
  suggestedPrice: number | null;
  unit: string;
  category: string | null;
};

type LineItemPickerProps = {
  trade: string;
  onAddItem: (item: TemplateItemData) => void;
  className?: string;
};

export function LineItemPicker({ trade, onAddItem, className }: LineItemPickerProps) {
  const [search, setSearch] = useState("");
  const { data: templatesData } = useTemplates(trade);
  const firstTemplateId = (templatesData as { data?: Array<{ id: string }> } | undefined)?.data?.[0]?.id ?? null;
  const { data: itemsData, isLoading } = useTemplateItems(firstTemplateId);

  const allItems: TemplateItemData[] = (itemsData as { data?: TemplateItemData[] } | undefined)?.data ?? [];
  const q = search.toLowerCase();
  const filtered = q
    ? allItems.filter(
        (item) =>
          item.description.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q)
      )
    : allItems;

  const grouped = filtered.reduce<Record<string, TemplateItemData[]>>(
    (acc, item) => {
      const cat = item.category ?? "Other";
      (acc[cat] ??= []).push(item);
      return acc;
    },
    {}
  );

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <input
        type="search"
        placeholder="Search items…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm min-h-[44px]"
      />
      {isLoading && <p className="text-sm text-gray-500">Loading items…</p>}
      {!isLoading && filtered.length === 0 && (
        <p className="text-sm text-gray-500">No items match your search.</p>
      )}
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h4 className="text-xs font-semibold uppercase text-gray-500 py-1">{category}</h4>
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-2 gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.description}</p>
                  <p className="text-xs text-gray-500">
                    {item.suggestedPrice != null ? formatCurrency(item.suggestedPrice) : "—"} · {item.unit}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label={`Add ${item.description}`}
                  onClick={() => onAddItem(item)}
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 text-xl font-bold"
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
