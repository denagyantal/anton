import { useState, useEffect } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import Customer from '../db/models/customer';

interface UseCustomersResult {
  customers: Customer[];
  isLoading: boolean;
}

export function useCustomers(): UseCustomersResult {
  const database = useDatabase();
  const { user } = useAuth();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) {
      setCustomers([]);
      setIsLoading(false);
      return;
    }

    const collection = database.get<Customer>('customers');
    const query = collection.query(
      Q.where('account_id', user.accountId),
      Q.sortBy('name', Q.asc),
    );

    const subscription = query.observe().subscribe((records) => {
      setCustomers(records);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId]);

  return { customers, isLoading };
}

export function useCustomer(id: string): { customer: Customer | null; isLoading: boolean } {
  const database = useDatabase();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setCustomer(null);
      setIsLoading(false);
      return;
    }

    const subscription = database
      .get<Customer>('customers')
      .findAndObserve(id)
      .subscribe({
        next: (record) => {
          setCustomer(record);
          setIsLoading(false);
        },
        error: () => {
          setCustomer(null);
          setIsLoading(false);
        },
      });

    return () => subscription.unsubscribe();
  }, [database, id]);

  return { customer, isLoading };
}

interface UseCustomerSearchResult {
  customers: Customer[];
  isLoading: boolean;
}

export function useCustomerSearch(query: string): UseCustomerSearchResult {
  const database = useDatabase();
  const { user } = useAuth();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) {
      setCustomers([]);
      setIsLoading(false);
      return;
    }

    const collection = database.get<Customer>('customers');
    const sanitized = Q.sanitizeLikeString(query);

    const conditions = [Q.where('account_id', user.accountId)];

    if (sanitized.length > 0) {
      conditions.push(
        Q.or(
          Q.where('name', Q.like(`%${sanitized}%`)),
          Q.where('phone', Q.like(`%${sanitized}%`)),
        ),
      );
    }

    const dbQuery = collection.query(
      Q.and(...conditions),
      Q.sortBy('name', Q.asc),
    );

    const subscription = dbQuery.observe().subscribe((records) => {
      setCustomers(records);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId, query]);

  return { customers, isLoading };
}
