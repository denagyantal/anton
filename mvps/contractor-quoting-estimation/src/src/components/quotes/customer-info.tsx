"use client";

import { Input } from "@/components/ui/input";

type CustomerInfoValue = {
  customerName: string;
  customerAddress?: string;
  customerPhone?: string;
  customerEmail?: string;
};

type CustomerInfoProps = {
  value: CustomerInfoValue;
  onChange: (value: CustomerInfoValue) => void;
};

export function CustomerInfo({ value, onChange }: CustomerInfoProps) {
  function update(field: keyof CustomerInfoValue, newValue: string) {
    onChange({ ...value, [field]: newValue });
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        Customer Information
      </h3>
      <Input
        label="Customer Name"
        required
        value={value.customerName}
        onChange={(e) => update("customerName", e.target.value)}
        placeholder="Jane Smith"
      />
      <Input
        label="Address"
        value={value.customerAddress ?? ""}
        onChange={(e) => update("customerAddress", e.target.value)}
        placeholder="123 Main St, City, State"
      />
      <Input
        label="Phone"
        type="tel"
        value={value.customerPhone ?? ""}
        onChange={(e) => update("customerPhone", e.target.value)}
        placeholder="(555) 000-0000"
      />
      <Input
        label="Email"
        type="email"
        value={value.customerEmail ?? ""}
        onChange={(e) => update("customerEmail", e.target.value)}
        placeholder="jane@example.com"
      />
    </div>
  );
}
