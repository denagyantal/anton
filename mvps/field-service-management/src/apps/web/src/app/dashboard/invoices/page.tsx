'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiGet, ApiError } from '../../../lib/api-client';
import { clearToken } from '../../../lib/auth';
import { useRouter } from 'next/navigation';
import InvoiceTable from '../../../components/invoice-table';

type Invoice = {
  id: string;
  invoiceNumber: string;
  customerName: string;
  status: string;
  total: number;
  amountPaid: number;
  sentAt: string | null;
  paidAt: string | null;
  dueAt: string | null;
};

type InvoicesResponse = {
  data: { invoices: Invoice[] };
};

const STATUS_FILTERS = ['All', 'DRAFT', 'SENT', 'VIEWED', 'PAID', 'PARTIALLY_PAID', 'OVERDUE'];

export default function InvoicesPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadInvoices = useCallback(
    async (status: string) => {
      setLoading(true);
      setError('');
      try {
        const qs = status === 'All' ? '' : `?status=${status}`;
        const result = await apiGet<InvoicesResponse>(`/api/v1/dashboard/invoices${qs}`);
        setInvoices(result.data.invoices);
      } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
          clearToken();
          router.replace('/');
        } else {
          setError('Failed to load invoices.');
        }
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  useEffect(() => {
    loadInvoices(activeFilter);
  }, [activeFilter, loadInvoices]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
        <p className="text-sm text-gray-500 mt-1">
          {loading ? 'Loading…' : `${invoices.length} invoice${invoices.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* Status filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === status
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {status === 'All' ? 'All' : status.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {loading && (
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-red-600 bg-red-50 rounded-lg px-4 py-3 text-sm">{error}</p>
      )}

      {!loading && !error && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <InvoiceTable invoices={invoices} />
        </div>
      )}
    </div>
  );
}
