import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, renderToBuffer } from '@react-pdf/renderer';
import { prisma } from '../config/prisma.js';
import { centsToDollars } from '@field-service/shared';

export interface QuotePdfData {
  quoteId: string;
  quoteDate: string;
  businessName: string;
  businessLogoUrl: string | null;
  licenseNumber: string | null;
  customerName: string;
  customerAddress: string;
  lineItems: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
  subtotal: number;
  taxAmount: number;
  grandTotal: number;
  notes: string | null;
  photos: string[];
}

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', marginBottom: 20 },
  logo: { width: 72, height: 72, objectFit: 'contain', marginRight: 16 },
  businessName: { fontSize: 16, fontWeight: 'bold' },
  businessInfo: { flexDirection: 'column', justifyContent: 'center' },
  section: { marginBottom: 12 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', marginBottom: 4, color: '#374151' },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingVertical: 4,
    backgroundColor: '#f9fafb',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
    paddingVertical: 4,
  },
  col_desc: { flex: 3 },
  col_num: { flex: 1, textAlign: 'right' },
  colHeader: { fontWeight: 'bold', color: '#6b7280', fontSize: 9 },
  totalSection: { marginTop: 8, alignItems: 'flex-end' },
  totalRow: { flexDirection: 'row', paddingVertical: 3, width: 220 },
  totalLabel: { flex: 2, textAlign: 'right', paddingRight: 8 },
  totalValue: { flex: 1, textAlign: 'right' },
  grandTotalRow: {
    flexDirection: 'row',
    paddingVertical: 4,
    width: 220,
    borderTopWidth: 1,
    borderTopColor: '#374151',
    marginTop: 4,
  },
  grandTotalLabel: { flex: 2, textAlign: 'right', paddingRight: 8, fontWeight: 'bold', fontSize: 12 },
  grandTotalValue: { flex: 1, textAlign: 'right', fontWeight: 'bold', fontSize: 12 },
  notesText: { color: '#555', lineHeight: 1.4 },
  photoGrid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  photo: { width: '48%', marginRight: '2%', marginBottom: 8, height: 140 },
  customerText: { color: '#374151', lineHeight: 1.5 },
  dateText: { color: '#6b7280' },
});

export function buildQuotePdf(data: QuotePdfData) {
  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: 'LETTER', style: styles.page },
      // Header
      React.createElement(
        View,
        { style: styles.header },
        data.businessLogoUrl
          ? React.createElement(Image, { src: data.businessLogoUrl, style: styles.logo })
          : null,
        React.createElement(
          View,
          { style: styles.businessInfo },
          React.createElement(Text, { style: styles.businessName }, data.businessName),
          data.licenseNumber
            ? React.createElement(Text, null, `Lic: ${data.licenseNumber}`)
            : null,
        ),
      ),
      // Customer Info
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Customer'),
        React.createElement(Text, { style: styles.customerText }, data.customerName),
        data.customerAddress
          ? React.createElement(Text, { style: styles.customerText }, data.customerAddress)
          : null,
      ),
      // Quote Date
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.dateText }, `Quote Date: ${data.quoteDate}`),
      ),
      // Line Items Table
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Line Items'),
        React.createElement(
          View,
          { style: styles.tableHeader },
          React.createElement(Text, { style: [styles.col_desc, styles.colHeader] }, 'Description'),
          React.createElement(Text, { style: [styles.col_num, styles.colHeader] }, 'Qty'),
          React.createElement(Text, { style: [styles.col_num, styles.colHeader] }, 'Unit Price'),
          React.createElement(Text, { style: [styles.col_num, styles.colHeader] }, 'Total'),
        ),
        ...data.lineItems.map((item, i) =>
          React.createElement(
            View,
            { style: styles.tableRow, key: String(i) },
            React.createElement(Text, { style: styles.col_desc }, item.description),
            React.createElement(Text, { style: styles.col_num }, String(item.quantity)),
            React.createElement(Text, { style: styles.col_num }, `$${centsToDollars(item.unitPrice)}`),
            React.createElement(Text, { style: styles.col_num }, `$${centsToDollars(item.total)}`),
          ),
        ),
      ),
      // Totals
      React.createElement(
        View,
        { style: styles.totalSection },
        React.createElement(
          View,
          { style: styles.totalRow },
          React.createElement(Text, { style: styles.totalLabel }, 'Subtotal'),
          React.createElement(Text, { style: styles.totalValue }, `$${centsToDollars(data.subtotal)}`),
        ),
        React.createElement(
          View,
          { style: styles.totalRow },
          React.createElement(Text, { style: styles.totalLabel }, 'Tax'),
          React.createElement(Text, { style: styles.totalValue }, `$${centsToDollars(data.taxAmount)}`),
        ),
        React.createElement(
          View,
          { style: styles.grandTotalRow },
          React.createElement(Text, { style: styles.grandTotalLabel }, 'Total'),
          React.createElement(Text, { style: styles.grandTotalValue }, `$${centsToDollars(data.grandTotal)}`),
        ),
      ),
      // Notes
      data.notes
        ? React.createElement(
            View,
            { style: styles.section },
            React.createElement(Text, { style: styles.sectionTitle }, 'Notes'),
            React.createElement(Text, { style: styles.notesText }, data.notes),
          )
        : null,
      // Photos (up to 4 in 2-column grid)
      data.photos.length > 0
        ? React.createElement(
            View,
            { style: styles.section },
            React.createElement(Text, { style: styles.sectionTitle }, 'Photos'),
            React.createElement(
              View,
              { style: styles.photoGrid },
              ...data.photos.slice(0, 4).map((url, i) =>
                React.createElement(Image, { src: url, style: styles.photo, key: String(i) }),
              ),
            ),
          )
        : null,
    ),
  );
}

export async function generateQuotePdf(quoteId: string, accountId: string): Promise<Buffer> {
  const quote = await prisma.quote.findFirst({
    where: { id: quoteId, account_id: accountId },
    include: {
      line_items: { orderBy: { sort_order: 'asc' } },
      customer: true,
      quote_photos: true,
    },
  });

  if (!quote) {
    throw new Error('Quote not found');
  }

  const account = await prisma.account.findUnique({
    where: { id: accountId },
  });

  if (!account) {
    throw new Error('Account not found');
  }

  const customerAddress = [
    quote.customer.addressLine1,
    quote.customer.addressLine2,
    quote.customer.city,
    quote.customer.state,
    quote.customer.zip,
  ]
    .filter(Boolean)
    .join(', ');

  const data: QuotePdfData = {
    quoteId: quote.id,
    quoteDate: quote.created_at.toISOString().split('T')[0] ?? '',
    businessName: account.businessName ?? '',
    businessLogoUrl: account.businessLogoUrl ?? null,
    licenseNumber: account.licenseNumber ?? null,
    customerName: quote.customer.name,
    customerAddress,
    lineItems: quote.line_items.map((item) => ({
      description: item.description,
      quantity: Number(item.quantity),
      unitPrice: item.unit_price,
      total: item.total,
    })),
    subtotal: quote.subtotal,
    taxAmount: quote.tax_amount,
    grandTotal: quote.total,
    notes: quote.notes ?? null,
    photos: quote.quote_photos.map((p) => p.photo_url),
  };

  const element = buildQuotePdf(data);
  const buffer = await renderToBuffer(element);
  return buffer as Buffer;
}
