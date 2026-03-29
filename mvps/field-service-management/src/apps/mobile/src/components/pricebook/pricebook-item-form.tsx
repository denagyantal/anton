import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import { dollarsToCents, centsToDollars } from '@field-service/shared';

const UNIT_TYPES = [
  { value: 'EACH', label: 'Each' },
  { value: 'HOUR', label: 'Hourly' },
  { value: 'FLAT', label: 'Flat Rate' },
];

interface PricebookItemFormProps {
  visible: boolean;
  onClose: () => void;
  onSave: (data: {
    category: string;
    name: string;
    description: string;
    unitPrice: number;
    unitType: string;
  }) => void;
  initialValues?: {
    category: string;
    name: string;
    description: string;
    unitPrice: number;
    unitType: string;
  };
  existingCategories: string[];
}

export default function PricebookItemForm({
  visible,
  onClose,
  onSave,
  initialValues,
  existingCategories,
}: PricebookItemFormProps) {
  const [category, setCategory] = useState(initialValues?.category ?? '');
  const [name, setName] = useState(initialValues?.name ?? '');
  const [description, setDescription] = useState(initialValues?.description ?? '');
  const [priceText, setPriceText] = useState(
    initialValues ? centsToDollars(initialValues.unitPrice) : '',
  );
  const [unitType, setUnitType] = useState(initialValues?.unitType ?? 'EACH');
  const [errors, setErrors] = useState<{ name?: string; price?: string; category?: string }>({});
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);

  const filteredCategories = existingCategories.filter(
    (c) => c.toLowerCase().includes(category.toLowerCase()) && c !== category,
  );

  const handleSave = () => {
    const newErrors: { name?: string; price?: string; category?: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!category.trim()) newErrors.category = 'Category is required';
    const price = parseFloat(priceText);
    if (isNaN(price) || price <= 0) newErrors.price = 'Price must be greater than 0';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSave({
      category: category.trim(),
      name: name.trim(),
      description: description.trim(),
      unitPrice: dollarsToCents(price),
      unitType,
    });
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {initialValues ? 'Edit Item' : 'Add Item'}
          </Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.form} keyboardShouldPersistTaps="handled">
          <View style={styles.field}>
            <Text style={styles.label}>Category *</Text>
            <TextInput
              style={[styles.input, errors.category ? styles.inputError : null]}
              value={category}
              onChangeText={(text) => {
                setCategory(text);
                setShowCategorySuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
              placeholder="e.g. Diagnostics & Service Calls"
            />
            {errors.category ? <Text style={styles.errorText}>{errors.category}</Text> : null}
            {showCategorySuggestions && filteredCategories.length > 0 ? (
              <View style={styles.suggestions}>
                {filteredCategories.map((c) => (
                  <TouchableOpacity
                    key={c}
                    style={styles.suggestionItem}
                    onPress={() => {
                      setCategory(c);
                      setShowCategorySuggestions(false);
                    }}
                  >
                    <Text style={styles.suggestionText}>{c}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Name *</Text>
            <TextInput
              style={[styles.input, errors.name ? styles.inputError : null]}
              value={name}
              onChangeText={setName}
              placeholder="e.g. AC Diagnostic"
            />
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              value={description}
              onChangeText={setDescription}
              placeholder="Optional description"
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Unit Price ($) *</Text>
            <TextInput
              style={[styles.input, errors.price ? styles.inputError : null]}
              value={priceText}
              onChangeText={setPriceText}
              placeholder="0.00"
              keyboardType="decimal-pad"
            />
            {errors.price ? <Text style={styles.errorText}>{errors.price}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Unit Type</Text>
            <View style={styles.unitTypeRow}>
              {UNIT_TYPES.map((ut) => (
                <TouchableOpacity
                  key={ut.value}
                  style={[
                    styles.unitTypeButton,
                    unitType === ut.value && styles.unitTypeButtonActive,
                  ]}
                  onPress={() => setUnitType(ut.value)}
                >
                  <Text
                    style={[
                      styles.unitTypeText,
                      unitType === ut.value && styles.unitTypeTextActive,
                    ]}
                  >
                    {ut.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  cancelText: {
    fontSize: 16,
    color: '#666',
  },
  saveText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
  },
  form: {
    flex: 1,
    padding: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 4,
  },
  unitTypeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  unitTypeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  unitTypeButtonActive: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  unitTypeText: {
    fontSize: 14,
    color: '#666',
  },
  unitTypeTextActive: {
    color: '#2563eb',
    fontWeight: '600',
  },
  suggestions: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 4,
    backgroundColor: '#fff',
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
  },
});
