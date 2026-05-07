import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import type { QuotePdfData, ProfilePdfData } from "@/types";

const fmt = (n: number) => "$" + n.toFixed(2);

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 10, padding: 40, color: "#111" },
  header: { flexDirection: "row", padding: 16, marginBottom: 20, alignItems: "center" },
  logo: { width: 60, height: 60, marginRight: 16, objectFit: "contain" },
  headerText: { color: "#ffffff", fontSize: 14, fontFamily: "Helvetica-Bold" },
  headerSubText: { color: "#ffffff", fontSize: 9, marginTop: 2 },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#555",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  section: { marginBottom: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 2,
  },
  cell: { flex: 1 },
  cellRight: { flex: 1, textAlign: "right" },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 2 },
  bold: { fontFamily: "Helvetica-Bold" },
  photo: { width: "45%", marginBottom: 8 },
  photoGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  quoteInfoRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  infoText: { fontSize: 9, color: "#555" },
});

interface QuotePdfProps {
  quote: QuotePdfData;
  profile: ProfilePdfData | null;
}

function calcTotals(quote: QuotePdfData) {
  const subtotal = quote.lineItems.reduce((sum, li) => sum + li.quantity * li.unitPrice, 0);
  const tax = subtotal * (quote.taxRate / 100);
  return { subtotal, tax, total: subtotal + tax };
}

function calcDeposit(
  depositType: "FIXED" | "PERCENTAGE" | null | undefined,
  depositValue: number | null | undefined,
  total: number
): number | null {
  if (!depositType || depositValue == null) return null;
  if (depositType === "FIXED") return depositValue;
  if (depositType === "PERCENTAGE") return (depositValue / 100) * total;
  return null;
}

function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function QuotePdf({ quote, profile }: QuotePdfProps) {
  const brandColor = profile?.brandColor ?? "#2563EB";
  const { subtotal, tax, total } = calcTotals(quote);
  const depositAmount = calcDeposit(quote.depositType, quote.depositValue, total);
  const termsText =
    quote.termsText ??
    profile?.paymentTerms ??
    "Payment is due upon completion unless a deposit has been collected.";

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: brandColor }]}>
          {profile?.logoUrl && <Image src={profile.logoUrl} style={styles.logo} />}
          <View>
            <Text style={styles.headerText}>{profile?.businessName ?? "QuoteCraft"}</Text>
            {profile?.licenseNumber && (
              <Text style={styles.headerSubText}>License #{profile.licenseNumber}</Text>
            )}
            {profile?.phone && <Text style={styles.headerSubText}>{profile.phone}</Text>}
            {profile?.email && <Text style={styles.headerSubText}>{profile.email}</Text>}
          </View>
        </View>

        {/* Quote Info */}
        <View style={styles.quoteInfoRow}>
          <View>
            <Text style={[styles.infoText, styles.bold]}>Quote #{quote.quoteNumber}</Text>
            <Text style={styles.infoText}>Trade: {quote.trade}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>Date: {formatDate(quote.createdAt)}</Text>
          </View>
        </View>

        {/* Customer Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer</Text>
          <Text>{quote.customerName}</Text>
          {quote.customerAddress && <Text style={styles.infoText}>{quote.customerAddress}</Text>}
          {quote.customerPhone && <Text style={styles.infoText}>{quote.customerPhone}</Text>}
          {quote.customerEmail && <Text style={styles.infoText}>{quote.customerEmail}</Text>}
        </View>

        {/* Line Items Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Line Items</Text>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.bold]}>Description</Text>
            <Text style={[styles.cellRight, styles.bold]}>Qty</Text>
            <Text style={[styles.cellRight, styles.bold]}>Unit</Text>
            <Text style={[styles.cellRight, styles.bold]}>Unit Price</Text>
            <Text style={[styles.cellRight, styles.bold]}>Total</Text>
          </View>
          {quote.lineItems.map((item, i) => (
            <View key={i} style={styles.row}>
              <Text style={styles.cell}>{item.description}</Text>
              <Text style={styles.cellRight}>{item.quantity}</Text>
              <Text style={styles.cellRight}>{item.unit}</Text>
              <Text style={styles.cellRight}>{fmt(item.unitPrice)}</Text>
              <Text style={styles.cellRight}>{fmt(item.quantity * item.unitPrice)}</Text>
            </View>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <View style={styles.summaryRow}>
            <Text>Subtotal</Text>
            <Text>{fmt(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Tax ({quote.taxRate}%)</Text>
            <Text>{fmt(tax)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.bold]}>
            <Text style={styles.bold}>Total</Text>
            <Text style={styles.bold}>{fmt(total)}</Text>
          </View>
          {depositAmount !== null && (
            <View style={styles.summaryRow}>
              <Text>
                Deposit Required
                {quote.depositType === "PERCENTAGE" ? ` (${quote.depositValue}%)` : ""}
              </Text>
              <Text>{fmt(depositAmount)}</Text>
            </View>
          )}
        </View>

        {/* Notes */}
        {quote.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Job Notes / Scope</Text>
            <Text>{quote.notes}</Text>
          </View>
        )}

        {/* Photos */}
        {quote.photos.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Jobsite Photos</Text>
            <View style={styles.photoGrid}>
              {quote.photos.map((photo, i) => (
                <Image key={i} src={photo.url} style={styles.photo} />
              ))}
            </View>
          </View>
        )}

        {/* Terms */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms {"&"} Conditions</Text>
          <Text>{termsText}</Text>
        </View>
      </Page>
    </Document>
  );
}
