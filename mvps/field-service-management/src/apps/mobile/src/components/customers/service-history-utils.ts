// Pure utility functions and constants for service-history — no react-native imports.
// Extracted here so tests can import without triggering the react-native module.

export const STATUS_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
  QUOTED:      { bg: '#E2E8F0', text: '#475569', label: 'Quoted' },
  SCHEDULED:   { bg: '#DBEAFE', text: '#1D4ED8', label: 'Scheduled' },
  IN_PROGRESS: { bg: '#FEF3C7', text: '#92400E', label: 'In Progress' },
  COMPLETE:    { bg: '#DCFCE7', text: '#166534', label: 'Complete' },
  INVOICED:    { bg: '#EDE9FE', text: '#5B21B6', label: 'Invoiced' },
};

export function formatJobDate(scheduledStart: number | null | undefined): string {
  if (!scheduledStart) return '';
  const date = new Date(scheduledStart);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatInvoiceTotal(totalCents: number): string {
  return '$' + (totalCents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
