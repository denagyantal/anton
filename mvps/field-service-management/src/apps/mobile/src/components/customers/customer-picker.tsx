import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import { useCustomerSearch } from '../../hooks/use-customers';
import { useAuth } from '../../contexts/auth-context';
import { useDatabase } from '../../contexts/database-context';
import CustomerCard from './customer-card';
import CustomerForm, { CustomerFormData } from './customer-form';
import Customer from '../../db/models/customer';

interface CustomerPickerProps {
  visible: boolean;
  onSelect: (customer: Customer) => void;
  onClose: () => void;
}

export default function CustomerPicker({ visible, onSelect, onClose }: CustomerPickerProps) {
  const database = useDatabase();
  const { user } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [showNewForm, setShowNewForm] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { customers } = useCustomerSearch(debouncedSearch);

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

  useEffect(() => {
    if (!visible) {
      setSearchText('');
      setDebouncedSearch('');
      setShowNewForm(false);
    }
  }, [visible]);

  const handleSelectCustomer = useCallback((customer: Customer) => {
    onSelect(customer);
    onClose();
  }, [onSelect, onClose]);

  const handleCreateCustomer = useCallback(async (data: CustomerFormData) => {
    try {
      let newCustomer: Customer | null = null;
      await database.write(async () => {
        newCustomer = await database.get<Customer>('customers').create((record) => {
          record.accountId = user?.accountId ?? '';
          record.name = data.name;
          record.phone = data.phone;
          record.email = data.email || '';
          record.addressLine1 = data.addressLine1 || '';
          record.addressLine2 = data.addressLine2 || '';
          record.city = data.city || '';
          record.state = data.state || '';
          record.zip = data.zip || '';
          record.notes = data.notes || '';
        });
      });
      if (newCustomer) {
        onSelect(newCustomer);
        onClose();
      }
    } catch {
      Alert.alert('Error', 'Failed to create customer. Please try again.');
    }
  }, [database, user?.accountId, onSelect, onClose]);

  const renderItem = useCallback(({ item }: { item: Customer }) => {
    return <CustomerCard customer={item} onPress={handleSelectCustomer} />;
  }, [handleSelectCustomer]);

  const keyExtractor = useCallback((item: Customer) => item.id, []);

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" testID="customer-picker-modal">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{showNewForm ? 'New Customer' : 'Select Customer'}</Text>
          <TouchableOpacity onPress={onClose} testID="customer-picker-close">
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>

        {showNewForm ? (
          <CustomerForm
            onSave={handleCreateCustomer}
            onCancel={() => setShowNewForm(false)}
          />
        ) : (
          <>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search by name or phone..."
                testID="customer-picker-search"
              />
            </View>

            <TouchableOpacity
              style={styles.createButton}
              onPress={() => setShowNewForm(true)}
              testID="customer-picker-create-new"
            >
              <Text style={styles.createButtonText}>+ Create New Customer</Text>
            </TouchableOpacity>

            <FlatList
              data={customers}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.list}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>No customers found</Text>
                </View>
              }
              testID="customer-picker-list"
            />
          </>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  closeText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
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
  createButton: {
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#2563eb',
    borderRadius: 8,
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '500',
  },
  list: {
    paddingVertical: 8,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#888',
  },
});
