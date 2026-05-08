import { z } from "zod";

export const submitSignatureSchema = z.object({
  signatureData: z
    .string()
    .min(1, "Signature is required")
    .refine(
      (val) => val.startsWith("data:image/png;base64,"),
      "Invalid signature format — must be a PNG base64 data URL"
    ),
});

export type SubmitSignatureInput = z.infer<typeof submitSignatureSchema>;
