import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Customer from '../../db/models/customer';
import { SyncBadge } from '../ui/sync-badge';

interface CustomerCardProps {
  customer: Customer;
  onPress?: (customer: Customer) => void;
}

export default function CustomerCard({ customer, onPress }: CustomerCardProps) {
  const router = useRouter();

  function handlePress() {
    if (onPress) {
      onPress(customer);
    } else {
      router.push(`/customers/${customer.id}`);
    }
  }

  const locationParts: string[] = [];
  if (customer.city) locationParts.push(customer.city);
  if (customer.state) locationParts.push(customer.state);
  const location = locationParts.join(', ');

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} testID={`customer-card-${customer.id}`}>
      <View style={styles.content}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>{customer.name}</Text>
          <SyncBadge record={customer} />
        </View>
        <Text style={styles.phone}>{customer.phone}</Text>
        {location ? <Text style={styles.location}>{location}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  content: {
    gap: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    flex: 1,
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  location: {
    fontSize: 13,
    color: '#888',
  },
});
