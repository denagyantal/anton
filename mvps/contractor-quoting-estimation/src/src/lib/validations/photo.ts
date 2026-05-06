import { z } from "zod";

export const attachPhotoSchema = z.object({
  url: z.string().url("Invalid URL"),
  sortOrder: z.number().int().min(0).optional(),
});

export type AttachPhotoInput = z.infer<typeof attachPhotoSchema>;
