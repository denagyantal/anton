import { useState, useEffect } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import Quote from '../db/models/quote';
import LineItem from '../db/models/line-item';

interface UseQuotesResult {
  quotes: Quote[];
  isLoading: boolean;
}

export function useQuotes(statusFilter?: string): UseQuotesResult {
  const database = useDatabase();
  const { user } = useAuth();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) {
      setQuotes([]);
      setIsLoading(false);
      return;
    }

    const conditions = [Q.where('account_id', user.accountId)];
    if (statusFilter) {
      conditions.push(Q.where('status', statusFilter));
    }

    const query = database.get<Quote>('quotes').query(
      ...conditions,
      Q.sortBy('updated_at', Q.desc),
    );

    const subscription = query.observe().subscribe((records) => {
      setQuotes(records);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId, statusFilter]);

  return { quotes, isLoading };
}

export function useQuote(id: string): { quote: Quote | null; isLoading: boolean } {
  const database = useDatabase();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setQuote(null);
      setIsLoading(false);
      return;
    }

    const subscription = database
      .get<Quote>('quotes')
      .findAndObserve(id)
      .subscribe({
        next: (record) => {
          setQuote(record);
          setIsLoading(false);
        },
        error: () => {
          setQuote(null);
          setIsLoading(false);
        },
      });

    return () => subscription.unsubscribe();
  }, [database, id]);

  return { quote, isLoading };
}

interface UseQuoteLineItemsResult {
  lineItems: LineItem[];
  isLoading: boolean;
}

export function useQuoteLineItems(quoteId: string): UseQuoteLineItemsResult {
  const database = useDatabase();
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!quoteId) {
      setLineItems([]);
      setIsLoading(false);
      return;
    }

    const query = database.get<LineItem>('line_items').query(
      Q.where('quote_id', quoteId),
      Q.sortBy('sort_order', Q.asc),
    );

    const subscription = query.observe().subscribe((records) => {
      setLineItems(records);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [database, quoteId]);

  return { lineItems, isLoading };
}
