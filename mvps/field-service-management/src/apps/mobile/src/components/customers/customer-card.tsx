import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Customer from '../../db/models/customer';

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
        <Text style={styles.name} numberOfLines={1}>{customer.name}</Text>
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
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
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
