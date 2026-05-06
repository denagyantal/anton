import { z } from "zod";

export const lineItemSchema = z.object({
  description: z.string().min(1, "Description is required"),
  quantity: z.number().positive("Quantity must be positive"),
  unit: z.string().min(1, "Unit is required").default("each"),
  unitPrice: z.number().min(0, "Unit price must be non-negative"),
  isCustom: z.boolean().default(false),
});

export type LineItemInput = z.infer<typeof lineItemSchema>;

export const createQuoteSchema = z.object({
  trade: z.enum(["PLUMBING", "ELECTRICAL", "HVAC", "PAINTING"]),
});

export type CreateQuoteInput = z.infer<typeof createQuoteSchema>;

export const updateQuoteSchema = z.object({
  customerName: z.string().min(1, "Customer name is required"),
  customerAddress: z.string().optional(),
  customerPhone: z.string().optional(),
  customerEmail: z.string().optional(),
  notes: z.string().optional(),
  taxRate: z
    .number()
    .min(0, "Tax rate must be at least 0")
    .max(100, "Tax rate must be at most 100"),
  depositType: z.enum(["FIXED", "PERCENTAGE"]).nullable().optional(),
  depositValue: z.number().min(0).nullable().optional(),
  termsText: z.string().optional(),
  lineItems: z.array(lineItemSchema),
});

export type UpdateQuoteInput = z.infer<typeof updateQuoteSchema>;
