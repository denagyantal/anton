import { z } from "zod";
import { phoneSchema, emailSchema, hexColorSchema } from "./common";

export const TradeEnum = z.enum(["PLUMBING", "ELECTRICAL", "HVAC", "PAINTING"]);

export const profileSchema = z.object({
  businessName: z
    .string()
    .min(1, "Business name is required")
    .max(100, "Business name must be less than 100 characters"),
  contactName: z
    .string()
    .max(100, "Contact name must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  phone: phoneSchema,
  email: emailSchema.optional().or(z.literal("")),
  licenseNumber: z
    .string()
    .max(50, "License number must be less than 50 characters")
    .optional()
    .or(z.literal("")),
  logoUrl: z
    .string()
    .url("Invalid logo URL")
    .optional()
    .or(z.literal(""))
    .or(z.null()),
  defaultTaxRate: z
    .number()
    .min(0, "Tax rate must be at least 0")
    .max(100, "Tax rate must be at most 100"),
  paymentTerms: z
    .string()
    .max(500, "Payment terms must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  brandColor: hexColorSchema,
  trade: TradeEnum,
});

export type ProfileInput = z.infer<typeof profileSchema>;
