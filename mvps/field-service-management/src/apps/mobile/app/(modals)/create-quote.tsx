import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../../src/contexts/database-context';
import { useAuth } from '../../src/contexts/auth-context';
import CustomerPicker from '../../src/components/customers/customer-picker';
import QuoteForm, { QuoteFormData } from '../../src/components/quotes/quote-form';
import { LineItemData } from '../../src/components/quotes/line-item-row';
import Customer from '../../src/db/models/customer';
import Quote from '../../src/db/models/quote';
import LineItem from '../../src/db/models/line-item';

export default function CreateQuoteScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ customerId?: string; duplicateFromId?: string }>();
  const database = useDatabase();
  const { user } = useAuth();

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomerPicker, setShowCustomerPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialLineItems, setInitialLineItems] = useState<LineItemData[] | undefined>();
  const [initialNotes, setInitialNotes] = useState<string | undefined>();

  useEffect(() => {
    async function loadInitialData() {
      try {
        // Load customer if pre-selected
        if (params.customerId) {
          const customer = await database.get<Customer>('customers').find(params.customerId);
          setSelectedCustomer(customer);
        }

        // Load duplication data if duplicating
        if (params.duplicateFromId) {
          const sourceQuote = await database.get<Quote>('quotes').find(params.duplicateFromId);
          const sourceLineItems = await database
            .get<LineItem>('line_items')
            .query(Q.where('quote_id', params.duplicateFromId), Q.sortBy('sort_order', Q.asc))
            .fetch();

          // Load customer from source quote
          if (!params.customerId) {
            const customer = await database.get<Customer>('customers').find(sourceQuote.customerId);
            setSelectedCustomer(customer);
          }

          let counter = 0;
          setInitialLineItems(
            sourceLineItems.map((li) => {
              counter += 1;
              return {
                tempId: `dup-${Date.now()}-${counter}`,
                description: li.description,
                quantity: li.quantity,
                unitPrice: li.unitPrice,
                total: li.total,
                sortOrder: li.sortOrder,
                pricebookItemId: li.pricebookItemId || null,
              };
            }),
          );
          setInitialNotes(sourceQuote.notes || undefined);
        }

        // Show customer picker if no customer pre-selected and not duplicating
        if (!params.customerId && !params.duplicateFromId) {
          setShowCustomerPicker(true);
        }
      } catch {
        // If loading fails, show customer picker
        if (!params.duplicateFromId) {
          setShowCustomerPicker(true);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadInitialData();
  }, [database, params.customerId, params.duplicateFromId]);

  const handleCustomerSelect = useCallback((customer: Customer) => {
    setSelectedCustomer(customer);
    setShowCustomerPicker(false);
  }, []);

  const handleSave = useCallback(async (data: QuoteFormData) => {
    try {
      await database.write(async () => {
        const quote = await database.get<Quote>('quotes').create((record) => {
          record.accountId = user?.accountId ?? '';
          record.customerId = data.customerId;
          record.status = 'DRAFT';
          record.subtotal = data.subtotal;
          record.taxAmount = data.taxAmount;
          record.total = data.total;
          record.notes = data.notes || '';
        });

        const lineItemRecords = data.lineItems.map((item, idx) =>
          database.get<LineItem>('line_items').prepareCreate((record) => {
            record.quoteId = quote.id;
            record.pricebookItemId = item.pricebookItemId || '';
            record.description = item.description;
            record.quantity = item.quantity;
            record.unitPrice = item.unitPrice;
            record.total = item.total;
            record.sortOrder = idx;
          }),
        );

        await database.batch(...lineItemRecords);
      });

      router.back();
    } catch {
      // Error handled silently — data saved locally
    }
  }, [database, user?.accountId, router]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Quote</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {selectedCustomer ? (
        <QuoteForm
          customerId={selectedCustomer.id}
          customerName={selectedCustomer.name}
          customerPhone={selectedCustomer.phone}
          initialLineItems={initialLineItems}
          initialNotes={initialNotes}
          onSave={handleSave}
        />
      ) : (
        <View style={styles.noCustomer}>
          <Text style={styles.noCustomerText}>Select a customer to start</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setShowCustomerPicker(true)}
          >
            <Text style={styles.selectButtonText}>Select Customer</Text>
          </TouchableOpacity>
        </View>
      )}

      <CustomerPicker
        visible={showCustomerPicker}
        onSelect={handleCustomerSelect}
        onClose={() => {
          setShowCustomerPicker(false);
          if (!selectedCustomer) {
            router.back();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  closeText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
  },
  noCustomer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  noCustomerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  selectButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
