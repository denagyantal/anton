import { renderToBuffer, Document } from "@react-pdf/renderer";
import React from "react";
import { QuotePdf } from "@/components/pdf/quote-pdf";
import type { QuotePdfData, ProfilePdfData } from "@/types";

export async function generateQuotePdf(
  quote: QuotePdfData,
  profile: ProfilePdfData | null
): Promise<Buffer> {
  const element = React.createElement(QuotePdf, { quote, profile }) as React.ReactElement<
    React.ComponentProps<typeof Document>
  >;
  const buffer = await renderToBuffer(element);
  return Buffer.from(buffer);
}
