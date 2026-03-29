import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { centsToDollars } from '@field-service/shared';
import { calculateLineTotal } from '../../utils/quote-calculations';

export interface LineItemData {
  tempId: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  sortOrder: number;
  pricebookItemId: string | null;
}

interface LineItemRowProps {
  lineItem: LineItemData;
  onUpdate: (updated: Partial<LineItemData>) => void;
  onRemove: () => void;
}

export default function LineItemRow({ lineItem, onUpdate, onRemove }: LineItemRowProps) {
  const [quantityText, setQuantityText] = useState(String(lineItem.quantity));
  const [priceText, setPriceText] = useState((lineItem.unitPrice / 100).toFixed(2));

  const handleQuantityChange = (text: string) => {
    setQuantityText(text);
    const qty = parseFloat(text);
    if (!isNaN(qty) && qty >= 0) {
      const total = calculateLineTotal(qty, lineItem.unitPrice);
      onUpdate({ quantity: qty, total });
    }
  };

  const handlePriceChange = (text: string) => {
    setPriceText(text);
    const dollars = parseFloat(text);
    if (!isNaN(dollars) && dollars >= 0) {
      const cents = Math.round(dollars * 100);
      const total = calculateLineTotal(lineItem.quantity, cents);
      onUpdate({ unitPrice: cents, total });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.description} numberOfLines={2}>{lineItem.description}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          <Text style={styles.removeText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fieldsRow}>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Qty</Text>
          <TextInput
            style={styles.fieldInput}
            value={quantityText}
            onChangeText={handleQuantityChange}
            keyboardType="decimal-pad"
            selectTextOnFocus
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Unit Price</Text>
          <View style={styles.priceInputWrapper}>
            <Text style={styles.dollarSign}>$</Text>
            <TextInput
              style={styles.priceInput}
              value={priceText}
              onChangeText={handlePriceChange}
              keyboardType="decimal-pad"
              selectTextOnFocus
            />
          </View>
        </View>
        <View style={styles.totalField}>
          <Text style={styles.fieldLabel}>Total</Text>
          <Text style={styles.totalText}>${centsToDollars(lineItem.total)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fee2e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    color: '#dc2626',
    fontSize: 14,
    fontWeight: '600',
  },
  fieldsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  field: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 11,
    color: '#999',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  fieldInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 8,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },
  priceInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fafafa',
  },
  dollarSign: {
    paddingLeft: 8,
    fontSize: 15,
    color: '#666',
  },
  priceInput: {
    flex: 1,
    padding: 8,
    fontSize: 15,
  },
  totalField: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    paddingVertical: 8,
  },
});
