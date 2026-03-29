import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { centsToDollars } from '@field-service/shared';
import PricebookPicker from '../pricebook/pricebook-picker';
import PricebookItem from '../../db/models/pricebook-item';
import LineItemRow, { LineItemData } from './line-item-row';
import {
  calculateLineTotal,
  calculateSubtotal,
  calculateTaxAmount,
  calculateQuoteTotal,
} from '../../utils/quote-calculations';

export interface QuoteFormData {
  customerId: string;
  lineItems: LineItemData[];
  notes: string;
  subtotal: number;
  taxAmount: number;
  total: number;
}

interface QuoteFormProps {
  customerId: string;
  customerName: string;
  customerPhone: string;
  initialLineItems?: LineItemData[];
  initialNotes?: string;
  onSave: (data: QuoteFormData) => void;
}

let tempIdCounter = 0;
function generateTempId(): string {
  tempIdCounter += 1;
  return `temp-${Date.now()}-${tempIdCounter}`;
}

export default function QuoteForm({
  customerId,
  customerName,
  customerPhone,
  initialLineItems,
  initialNotes,
  onSave,
}: QuoteFormProps) {
  const [lineItems, setLineItems] = useState<LineItemData[]>(initialLineItems ?? []);
  const [notes, setNotes] = useState(initialNotes ?? '');
  const [taxRate, setTaxRate] = useState('0');
  const [showPricebookPicker, setShowPricebookPicker] = useState(false);
  const [showCustomItemForm, setShowCustomItemForm] = useState(false);
  const [customDescription, setCustomDescription] = useState('');
  const [customPrice, setCustomPrice] = useState('');
  const [customQuantity, setCustomQuantity] = useState('1');

  const subtotal = useMemo(() => calculateSubtotal(lineItems), [lineItems]);
  const taxRateNum = parseFloat(taxRate) || 0;
  const taxAmount = useMemo(() => calculateTaxAmount(subtotal, taxRateNum), [subtotal, taxRateNum]);
  const total = useMemo(() => calculateQuoteTotal(subtotal, taxAmount), [subtotal, taxAmount]);

  const handleAddFromPricebook = useCallback((item: PricebookItem) => {
    const newItem: LineItemData = {
      tempId: generateTempId(),
      description: item.name,
      quantity: 1,
      unitPrice: item.unitPrice,
      total: calculateLineTotal(1, item.unitPrice),
      sortOrder: lineItems.length,
      pricebookItemId: item.id,
    };
    setLineItems((prev) => [...prev, newItem]);
    setShowPricebookPicker(false);
  }, [lineItems.length]);

  const handleAddCustomItem = useCallback(() => {
    if (!customDescription.trim()) {
      Alert.alert('Error', 'Description is required');
      return;
    }
    const dollars = parseFloat(customPrice);
    if (isNaN(dollars) || dollars < 0) {
      Alert.alert('Error', 'Please enter a valid price');
      return;
    }
    const qty = parseFloat(customQuantity) || 1;
    const cents = Math.round(dollars * 100);
    const newItem: LineItemData = {
      tempId: generateTempId(),
      description: customDescription.trim(),
      quantity: qty,
      unitPrice: cents,
      total: calculateLineTotal(qty, cents),
      sortOrder: lineItems.length,
      pricebookItemId: null,
    };
    setLineItems((prev) => [...prev, newItem]);
    setCustomDescription('');
    setCustomPrice('');
    setCustomQuantity('1');
    setShowCustomItemForm(false);
  }, [customDescription, customPrice, customQuantity, lineItems.length]);

  const handleUpdateLineItem = useCallback((tempId: string, updated: Partial<LineItemData>) => {
    setLineItems((prev) =>
      prev.map((item) => (item.tempId === tempId ? { ...item, ...updated } : item)),
    );
  }, []);

  const handleRemoveLineItem = useCallback((tempId: string) => {
    setLineItems((prev) => prev.filter((item) => item.tempId !== tempId));
  }, []);

  const handleSave = useCallback(() => {
    if (lineItems.length === 0) {
      Alert.alert('Error', 'Please add at least one line item');
      return;
    }
    onSave({
      customerId,
      lineItems,
      notes,
      subtotal,
      taxAmount,
      total,
    });
  }, [customerId, lineItems, notes, subtotal, taxAmount, total, onSave]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
        {/* Customer Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer</Text>
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>{customerName}</Text>
            <Text style={styles.customerPhone}>{customerPhone}</Text>
          </View>
        </View>

        {/* Line Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Line Items</Text>
          {lineItems.map((item) => (
            <LineItemRow
              key={item.tempId}
              lineItem={item}
              onUpdate={(updated) => handleUpdateLineItem(item.tempId, updated)}
              onRemove={() => handleRemoveLineItem(item.tempId)}
            />
          ))}

          <View style={styles.addButtons}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setShowPricebookPicker(true)}
            >
              <Text style={styles.addButtonText}>+ Add from Pricebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setShowCustomItemForm(true)}
            >
              <Text style={styles.addButtonText}>+ Add Custom Item</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Custom Item Inline Form */}
        {showCustomItemForm && (
          <View style={styles.customItemForm}>
            <Text style={styles.sectionTitle}>Custom Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Description *"
              value={customDescription}
              onChangeText={setCustomDescription}
            />
            <View style={styles.customItemRow}>
              <View style={styles.customItemField}>
                <Text style={styles.fieldLabel}>Price ($)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.00"
                  value={customPrice}
                  onChangeText={setCustomPrice}
                  keyboardType="decimal-pad"
                />
              </View>
              <View style={styles.customItemField}>
                <Text style={styles.fieldLabel}>Qty</Text>
                <TextInput
                  style={styles.input}
                  placeholder="1"
                  value={customQuantity}
                  onChangeText={setCustomQuantity}
                  keyboardType="decimal-pad"
                />
              </View>
            </View>
            <View style={styles.customItemActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowCustomItemForm(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={handleAddCustomItem}>
                <Text style={styles.confirmButtonText}>Add Item</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Tax Rate */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tax Rate (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={taxRate}
            onChangeText={setTaxRate}
            keyboardType="decimal-pad"
          />
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${centsToDollars(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax ({taxRate || '0'}%)</Text>
            <Text style={styles.summaryValue}>${centsToDollars(taxAmount)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${centsToDollars(total)}</Text>
          </View>
        </View>

        {/* Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder="Add notes..."
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Save Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Quote</Text>
        </TouchableOpacity>
      </View>

      <PricebookPicker
        visible={showPricebookPicker}
        onClose={() => setShowPricebookPicker(false)}
        onSelect={handleAddFromPricebook}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  customerInfo: {
    paddingVertical: 4,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  customerPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  addButtons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  addButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#2563eb',
    borderRadius: 8,
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '500',
  },
  customItemForm: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  customItemRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  customItemField: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 11,
    color: '#999',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  customItemActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 12,
  },
  cancelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 14,
  },
  confirmButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#2563eb',
    borderRadius: 6,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  notesInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  summary: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#666',
  },
  summaryValue: {
    fontSize: 15,
    color: '#333',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    marginTop: 4,
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },
  totalValue: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  saveButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 20,
  },
});
