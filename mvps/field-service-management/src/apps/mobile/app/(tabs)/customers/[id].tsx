import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCustomer } from '../../../src/hooks/use-customers';
import { useAuth } from '../../../src/contexts/auth-context';
import { useDatabase } from '../../../src/contexts/database-context';
import CustomerForm, { CustomerFormData } from '../../../src/components/customers/customer-form';
import Customer from '../../../src/db/models/customer';

export default function CustomerDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const database = useDatabase();
  const { user } = useAuth();
  const isNew = id === 'new';
  const { customer, isLoading } = useCustomer(isNew ? '' : (id ?? ''));
  const [isEditing, setIsEditing] = useState(isNew);

  const handleSave = useCallback(async (data: CustomerFormData) => {
    try {
      if (isNew) {
        await database.write(async () => {
          await database.get<Customer>('customers').create((record) => {
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
        Alert.alert('Success', 'Customer created successfully');
        router.back();
      } else if (customer) {
        await database.write(async () => {
          await customer.update((record) => {
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
        Alert.alert('Success', 'Customer updated successfully');
        setIsEditing(false);
      }
    } catch {
      Alert.alert('Error', 'Failed to save customer. Please try again.');
    }
  }, [isNew, customer, database, user?.accountId, router]);

  if (isNew) {
    return (
      <View style={styles.container}>
        <CustomerForm onSave={handleSave} onCancel={() => router.back()} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (!customer) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Customer not found</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isEditing) {
    return (
      <View style={styles.container}>
        <CustomerForm
          initialValues={{
            name: customer.name,
            phone: customer.phone,
            email: customer.email || '',
            addressLine1: customer.addressLine1 || '',
            addressLine2: customer.addressLine2 || '',
            city: customer.city || '',
            state: customer.state || '',
            zip: customer.zip || '',
            notes: customer.notes || '',
          }}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      </View>
    );
  }

  const addressParts: string[] = [];
  if (customer.addressLine1) addressParts.push(customer.addressLine1);
  if (customer.addressLine2) addressParts.push(customer.addressLine2);
  const cityStateZip: string[] = [];
  if (customer.city) cityStateZip.push(customer.city);
  if (customer.state) cityStateZip.push(customer.state);
  if (customer.zip) cityStateZip.push(customer.zip);
  if (cityStateZip.length > 0) addressParts.push(cityStateZip.join(', '));

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name</Text>
            <Text style={styles.detailValue}>{customer.name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phone</Text>
            <Text style={styles.detailValue}>{customer.phone}</Text>
          </View>
          {customer.email ? (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Email</Text>
              <Text style={styles.detailValue}>{customer.email}</Text>
            </View>
          ) : null}
        </View>

        {addressParts.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Address</Text>
            <Text style={styles.addressText}>{addressParts.join('\n')}</Text>
          </View>
        ) : null}

        {customer.notes ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.notesText}>{customer.notes}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(true)}
          testID="customer-edit-button"
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    fontSize: 16,
    color: '#888',
  },
  errorText: {
    fontSize: 16,
    color: '#e53e3e',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
  },
  addressText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  notesText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#fff',
  },
  editButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
