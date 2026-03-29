import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useCustomers, useCustomerSearch } from '../../../src/hooks/use-customers';
import CustomerCard from '../../../src/components/customers/customer-card';
import Customer from '../../../src/db/models/customer';

export default function CustomerListScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { customers: allCustomers, isLoading: isLoadingAll } = useCustomers();
  const { customers: searchResults, isLoading: isLoadingSearch } = useCustomerSearch(debouncedSearch);

  const isSearching = debouncedSearch.length > 0;
  const customers = isSearching ? searchResults : allCustomers;
  const isLoading = isSearching ? isLoadingSearch : isLoadingAll;

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchText]);

  const renderItem = useCallback(({ item }: { item: Customer }) => {
    return <CustomerCard customer={item} />;
  }, []);

  const keyExtractor = useCallback((item: Customer) => item.id, []);

  function renderEmpty() {
    if (isLoading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No customers yet</Text>
        <Text style={styles.emptySubtitle}>Tap "Add Customer" to create your first customer</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search by name or phone..."
          testID="customer-search-input"
        />
      </View>

      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={customers.length === 0 ? styles.emptyList : styles.list}
        testID="customer-list"
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/customers/new' as never)}
        testID="add-customer-button"
      >
        <Text style={styles.fabText}>+ Add Customer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  list: {
    paddingVertical: 8,
  },
  emptyList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    left: 16,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  fabText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
