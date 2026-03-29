import { useState, useEffect } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import PricebookItem from '../db/models/pricebook-item';

interface UsePricebookResult {
  items: PricebookItem[];
  categories: string[];
  isLoading: boolean;
}

export function usePricebook(): UsePricebookResult {
  const database = useDatabase();
  const [items, setItems] = useState<PricebookItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collection = database.get<PricebookItem>('pricebook_items');
    const query = collection.query(
      Q.where('is_active', true),
      Q.sortBy('category', Q.asc),
      Q.sortBy('sort_order', Q.asc),
    );

    const subscription = query.observe().subscribe((records) => {
      setItems(records);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [database]);

  const categories = [...new Set(items.map((item) => item.category))];

  return { items, categories, isLoading };
}
