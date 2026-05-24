import { useState, useEffect, useCallback, useContext } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useStripe } from '@stripe/stripe-react-native';
import { database } from '../db';
import Invoice from '../db/models/invoice';
import Payment from '../db/models/payment';
import type { Invoice as InvoiceType } from '@field-service/shared';
import { apiClient } from '../services/api-client';
import { NetworkContext } from '../contexts/network-context';
import Job from '../db/models/job';

export function useJobInvoice(jobId: string | null | undefined) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jobId) {
      setIsLoading(false);
      return;
    }
    const subscription = database
      .get<Invoice>('invoices')
      .query(Q.where('job_id', jobId))
      .observe()
      .subscribe((results) => {
        setInvoice(results[0] ?? null);
        setIsLoading(false);
      });
    return () => subscription.unsubscribe();
  }, [jobId]);

  return { invoice, isLoading };
}

export function useGenerateInvoice() {
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected } = useContext(NetworkContext);

  const generateInvoice = useCallback(
    async (jobId: string): Promise<void> => {
      if (!isConnected) {
        throw new Error('Invoice generation requires internet connection');
      }

      setIsLoading(true);
      try {
        const invoiceData = await apiClient.post<InvoiceType>(
          `/api/v1/invoices/generate-from-job/${jobId}`,
        );

        await database.write(async () => {
          const existingInvoices = await database
            .get<Invoice>('invoices')
            .query(Q.where('job_id', jobId))
            .fetch();

          if (existingInvoices.length === 0) {
            await database.get<Invoice>('invoices').create((record) => {
              record._raw.id = invoiceData.id;
              record.accountId = invoiceData.accountId;
              record.customerId = invoiceData.customerId;
              record.jobId = invoiceData.jobId;
              record.quoteId = invoiceData.quoteId;
              record.invoiceNumber = invoiceData.invoiceNumber ?? null;
              record.status = invoiceData.status;
              record.subtotal = invoiceData.subtotal;
              record.taxAmount = invoiceData.taxAmount;
              record.total = invoiceData.total;
              record.amountPaid = invoiceData.amountPaid;
              record.pdfUrl = invoiceData.pdfUrl;
              record.dueAt = invoiceData.dueAt ? new Date(invoiceData.dueAt).getTime() : null;
            });
          }

          const jobs = await database
            .get<Job>('jobs')
            .query(Q.where('id', jobId))
            .fetch();
          if (jobs[0]) {
            await jobs[0].update((record) => {
              record.status = 'INVOICED';
            });
          }
        });
      } finally {
        setIsLoading(false);
      }
    },
    [isConnected],
  );

  return { generateInvoice, isLoading };
}

interface SendInvoiceResult {
  status: string;
  sentAt: string;
  paymentToken: string;
}

export function useSendInvoice() {
  const [isSending, setIsSending] = useState(false);
  const { isConnected } = useContext(NetworkContext);

  const sendInvoice = useCallback(
    async (invoiceId: string): Promise<void> => {
      if (!isConnected) {
        throw new Error('Send requires an internet connection');
      }

      setIsSending(true);
      try {
        const result = await apiClient.post<SendInvoiceResult>(
          `/api/v1/invoices/${invoiceId}/send`,
        );

        await database.write(async () => {
          const invoices = await database
            .get<Invoice>('invoices')
            .query(Q.where('id', invoiceId))
            .fetch();

          if (invoices[0]) {
            await invoices[0].update((record) => {
              record.status = result.status;
              record.sentAt = Date.parse(result.sentAt);
              record.paymentToken = result.paymentToken;
            });
          }
        });
      } finally {
        setIsSending(false);
      }
    },
    [isConnected],
  );

  return { sendInvoice, isSending };
}

interface PaymentIntentResult {
  clientSecret: string;
  paymentIntentId: string;
  amount: number;
  merchantDisplayName: string;
  remainingBalance: number;
}

interface RecordOnsiteResult {
  alreadyProcessed: boolean;
  paymentId: string | null;
  amount: number | null;
  invoiceStatus: string | null;
  invoiceAmountPaid: number | null;
  invoicePaidAt: string | null;
}

export function useCollectPayment() {
  const [isLoading, setIsLoading] = useState(false);
  const { isConnected } = useContext(NetworkContext);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const collectPayment = useCallback(
    async (
      invoiceId: string,
      customAmountCents?: number,
    ): Promise<{ success: boolean; amount: number }> => {
      if (!isConnected) {
        throw new Error('An internet connection is required to process card payments.');
      }

      setIsLoading(true);
      try {
        // Pass custom amount to server; undefined → server defaults to remaining balance
        const piResult = await apiClient.post<PaymentIntentResult>(
          `/api/v1/invoices/${invoiceId}/payment-intent`,
          customAmountCents !== undefined ? { amount: customAmountCents } : undefined,
        );

        const { error: initError } = await initPaymentSheet({
          paymentIntentClientSecret: piResult.clientSecret,
          merchantDisplayName: piResult.merchantDisplayName,
          style: 'automatic',
        });
        if (initError) {
          throw new Error(initError.message);
        }

        const { error: presentError } = await presentPaymentSheet();
        if (presentError) {
          if (presentError.code === 'Canceled') {
            return { success: false, amount: 0 };
          }
          throw new Error(presentError.message);
        }

        const recordResult = await apiClient.post<RecordOnsiteResult>(
          `/api/v1/invoices/${invoiceId}/record-onsite-payment`,
          { paymentIntentId: piResult.paymentIntentId },
        );

        if (!recordResult.alreadyProcessed && recordResult.paymentId && recordResult.invoiceStatus) {
          await database.write(async () => {
            const invoices = await database
              .get<Invoice>('invoices')
              .query(Q.where('id', invoiceId))
              .fetch();
            if (invoices[0]) {
              await invoices[0].update((record) => {
                record.status = recordResult.invoiceStatus!;
                record.amountPaid = recordResult.invoiceAmountPaid ?? invoices[0].amountPaid;
                if (recordResult.invoicePaidAt) {
                  record.paidAt = Date.parse(recordResult.invoicePaidAt);
                }
              });
            }

            const accountId = invoices[0]?.accountId ?? '';
            await database.get<Payment>('payments').create((record) => {
              record._raw.id = recordResult.paymentId!;
              record.accountId = accountId;
              record.invoiceId = invoiceId;
              record.amount = recordResult.amount ?? piResult.amount;
              record.paymentMethod = 'CARD_ON_SITE';
              record.status = 'SUCCEEDED';
            });
          });
        }

        return { success: true, amount: recordResult.amount ?? piResult.amount };
      } finally {
        setIsLoading(false);
      }
    },
    [isConnected, initPaymentSheet, presentPaymentSheet],
  );

  return { collectPayment, isLoading };
}

export function useAllInvoices(statusFilter?: string) {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseQuery = statusFilter
      ? database.get<Invoice>('invoices').query(Q.where('status', statusFilter))
      : database.get<Invoice>('invoices').query();

    const subscription = baseQuery.observe().subscribe((results) => {
      // WatermelonDB does not support ORDER BY in observe() for all adapters — sort in JS
      const sorted = [...results].sort(
        (a, b) => (b.createdAt as unknown as number) - (a.createdAt as unknown as number),
      );
      setInvoices(sorted);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [statusFilter]);

  return { invoices, isLoading };
}

interface InvoiceSummary {
  outstanding: number;   // integer cents
  receivedToday: number; // integer cents
  overdueCount: number;
}

export function useInvoiceSummary() {
  const [summary, setSummary] = useState<InvoiceSummary>({
    outstanding: 0,
    receivedToday: 0,
    overdueCount: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const calculate = useCallback(async () => {
    try {
      const allInvoices = await database.get<Invoice>('invoices').query().fetch();

      const outstanding = allInvoices
        .filter((inv) => inv.status !== 'PAID' && inv.status !== 'DRAFT')
        .reduce((sum, inv) => sum + Math.max(0, inv.total - inv.amountPaid), 0);

      const overdueCount = allInvoices.filter((inv) => inv.status === 'OVERDUE').length;

      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      const todayPayments = await database
        .get<Payment>('payments')
        .query(
          Q.where('status', 'SUCCEEDED'),
          Q.where('created_at', Q.gte(startOfToday.getTime())),
        )
        .fetch();

      const receivedToday = todayPayments.reduce((sum, p) => sum + p.amount, 0);

      setSummary({ outstanding, receivedToday, overdueCount });
    } catch (err) {
      console.error('[useInvoiceSummary] calculation error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return { summary, isLoading, refresh: calculate };
}
