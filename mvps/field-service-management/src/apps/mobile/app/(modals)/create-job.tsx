import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomerPicker from '../../src/components/customers/customer-picker';
import { useCreateJob, useRescheduleJob } from '../../src/hooks/use-schedule';
import { createExternalCalendarEvent } from '../../src/services/calendar-service';
import Customer from '../../src/db/models/customer';
import ScheduleEvent from '../../src/db/models/schedule-event';

function addHour(date: Date): Date {
  return new Date(date.getTime() + 3600000);
}

export default function CreateJobModal() {
  const router = useRouter();
  const params = useLocalSearchParams<{ prefillStart?: string }>();

  const defaultStart = params.prefillStart ? new Date(params.prefillStart) : new Date();
  const defaultEnd = addHour(defaultStart);

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomerPicker, setShowCustomerPicker] = useState(false);
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(defaultStart);
  const [endTime, setEndTime] = useState(defaultEnd);
  const [quoteId, setQuoteId] = useState('');
  const [notes, setNotes] = useState('');
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const { createJob } = useCreateJob();
  const { rescheduleEvent } = useRescheduleJob();

  async function handleSave() {
    if (!selectedCustomer) {
      Alert.alert('Missing Field', 'Please select a customer.');
      return;
    }
    if (!title.trim()) {
      Alert.alert('Missing Field', 'Please enter a job title.');
      return;
    }
    if (endTime <= startTime) {
      Alert.alert('Invalid Times', 'End time must be after start time.');
      return;
    }

    setIsSaving(true);
    try {
      const { event } = await createJob({
        customerId: selectedCustomer.id,
        customerName: selectedCustomer.name,
        title: title.trim(),
        startTime,
        endTime,
        quoteId: quoteId.trim() || undefined,
        notes: notes.trim() || undefined,
      });

      await syncToExternalCalendar(event, title.trim());

      router.back();
    } catch {
      Alert.alert('Error', 'Failed to schedule job. Please try again.');
    } finally {
      setIsSaving(false);
    }
  }

  async function syncToExternalCalendar(event: ScheduleEvent, jobTitle: string) {
    try {
      const syncEnabled = await AsyncStorage.getItem('calendarSyncEnabled');
      const externalCalendarId = await AsyncStorage.getItem('externalCalendarId');

      if (syncEnabled === 'true' && externalCalendarId) {
        const externalId = await createExternalCalendarEvent({
          title: jobTitle,
          startTime,
          endTime,
          notes: notes.trim() || undefined,
          calendarId: externalCalendarId,
        });

        if (externalId) {
          await rescheduleEvent(event.id, event.jobId, startTime, endTime);
        }
      }
    } catch {
      // Calendar sync failure must not block job creation
    }
  }

  function formatDateTime(date: Date): string {
    return date.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule Job</Text>
        <TouchableOpacity onPress={handleSave} disabled={isSaving} style={styles.saveButton}>
          <Text style={[styles.saveText, isSaving && styles.saveTextDisabled]}>
            {isSaving ? 'Saving…' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Customer *</Text>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => setShowCustomerPicker(true)}
        >
          <Text style={selectedCustomer ? styles.pickerValue : styles.pickerPlaceholder}>
            {selectedCustomer ? selectedCustomer.name : 'Select a customer…'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Job Title *</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="e.g. HVAC Service Call"
          returnKeyType="done"
        />

        <Text style={styles.label}>Start Time *</Text>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => {
            setShowStartPicker(true);
            setShowEndPicker(false);
          }}
        >
          <Text style={styles.pickerValue}>{formatDateTime(startTime)}</Text>
        </TouchableOpacity>

        {showStartPicker && (
          <DateTimePicker
            value={startTime}
            mode="datetime"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(_event, date) => {
              if (Platform.OS === 'android') setShowStartPicker(false);
              if (date) {
                setStartTime(date);
                if (date >= endTime) setEndTime(addHour(date));
              }
            }}
          />
        )}

        <Text style={styles.label}>End Time *</Text>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => {
            setShowEndPicker(true);
            setShowStartPicker(false);
          }}
        >
          <Text style={styles.pickerValue}>{formatDateTime(endTime)}</Text>
        </TouchableOpacity>

        {showEndPicker && (
          <DateTimePicker
            value={endTime}
            mode="datetime"
            minimumDate={startTime}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(_event, date) => {
              if (Platform.OS === 'android') setShowEndPicker(false);
              if (date) setEndTime(date);
            }}
          />
        )}

        <Text style={styles.label}>Linked Quote ID (optional)</Text>
        <TextInput
          style={styles.input}
          value={quoteId}
          onChangeText={setQuoteId}
          placeholder="Quote ID (if applicable)"
          autoCapitalize="none"
          returnKeyType="done"
        />

        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Any notes for this job…"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </ScrollView>

      <CustomerPicker
        visible={showCustomerPicker}
        onSelect={(customer) => setSelectedCustomer(customer)}
        onClose={() => setShowCustomerPicker(false)}
      />
    </View>
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
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
  },
  cancelButton: {
    minWidth: 60,
  },
  cancelText: {
    fontSize: 16,
    color: '#6b7280',
  },
  saveButton: {
    minWidth: 60,
    alignItems: 'flex-end',
  },
  saveText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
  },
  saveTextDisabled: {
    color: '#93c5fd',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginTop: 16,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#111',
  },
  notesInput: {
    height: 100,
    marginBottom: 32,
  },
  pickerButton: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
  },
  pickerValue: {
    fontSize: 16,
    color: '#111',
  },
  pickerPlaceholder: {
    fontSize: 16,
    color: '#9ca3af',
  },
});
