import { useState, useEffect, useCallback, useContext } from 'react';
import { Q } from '@nozbe/watermelondb';
import { database } from '../db';
import Invoice from '../db/models/invoice';
import type { Invoice as InvoiceType } from '@field-service/shared';
import { apiClient } from '../services/api-client';
import { NetworkContext } from '../contexts/network-context';
import Job from '../db/models/job';

export function useJobInvoice(jobId: string) {
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
