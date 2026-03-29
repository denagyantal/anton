import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export interface CustomerFormData {
  name: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  notes: string;
}

interface CustomerFormProps {
  initialValues?: Partial<CustomerFormData>;
  onSave: (data: CustomerFormData) => void;
  onCancel?: () => void;
}

const EMPTY_FORM: CustomerFormData = {
  name: '',
  phone: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zip: '',
  notes: '',
};

export default function CustomerForm({ initialValues, onSave, onCancel }: CustomerFormProps) {
  const [form, setForm] = useState<CustomerFormData>({
    ...EMPTY_FORM,
    ...initialValues,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerFormData, string>>>({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof CustomerFormData, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSave() {
    if (validate()) {
      onSave({
        ...form,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        addressLine1: form.addressLine1.trim(),
        addressLine2: form.addressLine2.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        zip: form.zip.trim(),
        notes: form.notes.trim(),
      });
    }
  }

  function updateField(field: keyof CustomerFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
        <View style={styles.field}>
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={[styles.input, errors.name ? styles.inputError : null]}
            value={form.name}
            onChangeText={(v) => updateField('name', v)}
            placeholder="Customer name"
            autoCapitalize="words"
            testID="customer-form-name"
          />
          {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone *</Text>
          <TextInput
            style={[styles.input, errors.phone ? styles.inputError : null]}
            value={form.phone}
            onChangeText={(v) => updateField('phone', v)}
            placeholder="Phone number"
            keyboardType="phone-pad"
            testID="customer-form-phone"
          />
          {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={(v) => updateField('email', v)}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            testID="customer-form-email"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Address Line 1</Text>
          <TextInput
            style={styles.input}
            value={form.addressLine1}
            onChangeText={(v) => updateField('addressLine1', v)}
            placeholder="Street address"
            testID="customer-form-address1"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Address Line 2</Text>
          <TextInput
            style={styles.input}
            value={form.addressLine2}
            onChangeText={(v) => updateField('addressLine2', v)}
            placeholder="Apt, suite, unit, etc."
            testID="customer-form-address2"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.field, styles.flex2]}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              value={form.city}
              onChangeText={(v) => updateField('city', v)}
              placeholder="City"
              testID="customer-form-city"
            />
          </View>

          <View style={[styles.field, styles.flex1]}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              value={form.state}
              onChangeText={(v) => updateField('state', v)}
              placeholder="ST"
              maxLength={2}
              autoCapitalize="characters"
              testID="customer-form-state"
            />
          </View>

          <View style={[styles.field, styles.flex1]}>
            <Text style={styles.label}>ZIP</Text>
            <TextInput
              style={styles.input}
              value={form.zip}
              onChangeText={(v) => updateField('zip', v)}
              placeholder="ZIP"
              keyboardType="number-pad"
              maxLength={5}
              testID="customer-form-zip"
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            value={form.notes}
            onChangeText={(v) => updateField('notes', v)}
            placeholder="Additional notes"
            multiline
            numberOfLines={3}
            testID="customer-form-notes"
          />
        </View>

        <View style={styles.buttonRow}>
          {onCancel ? (
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel} testID="customer-form-cancel">
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={[styles.saveButton, onCancel ? styles.flex1 : styles.fullWidth]}
            onPress={handleSave}
            testID="customer-form-save"
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#e53e3e',
  },
  errorText: {
    color: '#e53e3e',
    fontSize: 12,
    marginTop: 4,
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  fullWidth: {
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
    marginBottom: 32,
  },
  saveButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
});
