import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../../../src/contexts/database-context';
import { useAuth } from '../../../src/contexts/auth-context';
import Customer from '../../../src/db/models/customer';
import type { ColumnMapping } from './import-customers-helpers';
import { detectColumns, classifyRows } from './import-customers-helpers';

// Re-export for testability
export type { ColumnMapping } from './import-customers-helpers';
export { detectColumns, classifyRows } from './import-customers-helpers';

type Phase = 'idle' | 'mapping' | 'importing' | 'done';

interface ImportSummary {
  imported: number;
  skipped: number;
  updated: number;
}

export default function ImportCustomersScreen() {
  const router = useRouter();
  const database = useDatabase();
  const { user } = useAuth();

  const [phase, setPhase] = useState<Phase>('idle');
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<Record<string, string>[]>([]);
  const [mapping, setMapping] = useState<ColumnMapping>({
    name: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [summary, setSummary] = useState<ImportSummary>({ imported: 0, skipped: 0, updated: 0 });

  const handleSelectFile = useCallback(async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['text/csv', 'text/plain', 'application/csv', '*/*'],
        copyToCacheDirectory: true,
      });

      if (result.canceled) return;

      const fileUri = result.assets[0]?.uri;
      if (!fileUri) return;

      const contents = await FileSystem.readAsStringAsync(fileUri);
      const parsed = Papa.parse<Record<string, string>>(contents, {
        header: true,
        skipEmptyLines: true,
      });

      if (parsed.errors.length > 0 && parsed.data.length === 0) {
        Alert.alert(
          'Invalid File',
          'The selected file could not be parsed as CSV. Please check the file format.',
        );
        return;
      }

      setHeaders(parsed.meta.fields ?? []);
      setRows(parsed.data);
      setMapping(detectColumns(parsed.meta.fields ?? []));
      setPhase('mapping');
    } catch {
      Alert.alert('Error', 'Failed to read the selected file. Please try again.');
    }
  }, []);

  const handleFieldMap = useCallback(
    (field: keyof ColumnMapping) => {
      const options = ['(none)', ...headers];
      Alert.alert(
        `Map "${field}" column`,
        'Select the CSV column to use:',
        options.map((opt) => ({
          text: opt,
          onPress: () =>
            setMapping((prev) => ({ ...prev, [field]: opt === '(none)' ? '' : opt })),
        })),
        { cancelable: true },
      );
    },
    [headers],
  );

  const handleImport = useCallback(async () => {
    setPhase('importing');
    const db = database;
    const accountId = user?.accountId ?? '';
    let importedCount = 0;
    let skippedCount = 0;
    let updatedCount = 0;

    try {
      const existingCustomers = await db
        .get<Customer>('customers')
        .query(Q.where('account_id', accountId))
        .fetch();

      const phoneMap = new Map<string, Customer>();
      for (const c of existingCustomers) {
        if (c.phone) phoneMap.set(c.phone.trim(), c);
      }

      const { toCreate, toDuplicate, toSkip } = classifyRows(rows, mapping, phoneMap);
      skippedCount = toSkip.length;

      const confirmedUpdates: Array<{ existing: Customer; row: Record<string, string> }> = [];

      for (const dup of toDuplicate) {
        const choice = await new Promise<'skip' | 'update'>((resolve) => {
          Alert.alert(
            'Duplicate Customer',
            `A customer with phone "${dup.existing.phone}" already exists (${dup.existing.name}). What would you like to do?`,
            [
              { text: 'Skip', onPress: () => resolve('skip') },
              { text: 'Update', onPress: () => resolve('update') },
            ],
            { cancelable: false },
          );
        });

        if (choice === 'update') {
          confirmedUpdates.push(dup);
        } else {
          skippedCount++;
        }
      }

      if (toCreate.length > 0) {
        await db.write(async () => {
          for (const row of toCreate) {
            await db.get<Customer>('customers').create((record) => {
              record.accountId = accountId;
              record.name = (row[mapping.name] ?? '').trim();
              record.phone = mapping.phone ? (row[mapping.phone] ?? '').trim() : '';
              record.email = mapping.email ? (row[mapping.email] ?? '').trim() : '';
              record.addressLine1 = mapping.addressLine1
                ? (row[mapping.addressLine1] ?? '').trim()
                : '';
              record.addressLine2 = mapping.addressLine2
                ? (row[mapping.addressLine2] ?? '').trim()
                : '';
              record.city = mapping.city ? (row[mapping.city] ?? '').trim() : '';
              record.state = mapping.state ? (row[mapping.state] ?? '').trim() : '';
              record.zip = mapping.zip ? (row[mapping.zip] ?? '').trim() : '';
              record.notes = '';
              record.quickbooksCustomerId = '';
            });
            importedCount++;
          }
        });
      }

      if (confirmedUpdates.length > 0) {
        await db.write(async () => {
          for (const { existing, row } of confirmedUpdates) {
            await existing.update((record) => {
              record.name = (row[mapping.name] ?? '').trim();
              record.email = mapping.email
                ? (row[mapping.email] ?? '').trim()
                : record.email;
              record.addressLine1 = mapping.addressLine1
                ? (row[mapping.addressLine1] ?? '').trim()
                : record.addressLine1;
              record.addressLine2 = mapping.addressLine2
                ? (row[mapping.addressLine2] ?? '').trim()
                : record.addressLine2;
              record.city = mapping.city ? (row[mapping.city] ?? '').trim() : record.city;
              record.state = mapping.state
                ? (row[mapping.state] ?? '').trim()
                : record.state;
              record.zip = mapping.zip ? (row[mapping.zip] ?? '').trim() : record.zip;
            });
            updatedCount++;
          }
        });
      }

      setSummary({ imported: importedCount, skipped: skippedCount, updated: updatedCount });
      setPhase('done');
    } catch {
      Alert.alert('Import Failed', 'An error occurred during import. Please try again.');
      setPhase('mapping');
    }
  }, [database, user, rows, mapping]);

  const handleReset = useCallback(() => {
    setPhase('idle');
    setHeaders([]);
    setRows([]);
    setMapping({ name: '', phone: '', email: '', addressLine1: '', addressLine2: '', city: '', state: '', zip: '' });
    setSummary({ imported: 0, skipped: 0, updated: 0 });
  }, []);

  if (phase === 'idle') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Import Customers</Text>
        <Text style={styles.description}>
          Select a CSV file from your device to import your customer list.
        </Text>
        <TouchableOpacity style={styles.primaryButton} onPress={handleSelectFile}>
          <Text style={styles.primaryButtonText}>Select CSV File</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (phase === 'importing') {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.importingText}>Importing customers...</Text>
      </View>
    );
  }

  if (phase === 'done') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Import Complete!</Text>
        <Text style={styles.summaryText}>
          Imported {summary.imported} customer(s).
        </Text>
        {summary.updated > 0 && (
          <Text style={styles.summaryText}>{summary.updated} updated.</Text>
        )}
        {summary.skipped > 0 && (
          <Text style={styles.summaryText}>
            {summary.skipped} skipped (missing name or duplicate).
          </Text>
        )}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.back()}
        >
          <Text style={styles.primaryButtonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleReset}>
          <Text style={styles.secondaryButtonText}>Import Another File</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // mapping phase
  const fieldLabels: Record<keyof ColumnMapping, string> = {
    name: 'Name *',
    phone: 'Phone',
    email: 'Email',
    addressLine1: 'Address Line 1',
    addressLine2: 'Address Line 2',
    city: 'City',
    state: 'State',
    zip: 'ZIP Code',
  };

  const canImport = mapping.name !== '';

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Map Columns</Text>
        <Text style={styles.subtitle}>
          {rows.length} rows detected (excluding header)
        </Text>

        {rows.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Preview (first 5 rows)</Text>
            <ScrollView horizontal>
              <View>
                <View style={styles.tableRow}>
                  {headers.map((h) => (
                    <Text key={h} style={[styles.tableCell, styles.tableHeaderCell]}>
                      {h}
                    </Text>
                  ))}
                </View>
                {rows.slice(0, 5).map((row, i) => (
                  <View key={i} style={styles.tableRow}>
                    {headers.map((h) => (
                      <Text key={h} style={styles.tableCell}>
                        {row[h] ?? ''}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Column Mapping</Text>
          {(Object.keys(fieldLabels) as Array<keyof ColumnMapping>).map((field) => (
            <TouchableOpacity
              key={field}
              style={styles.mappingRow}
              onPress={() => handleFieldMap(field)}
            >
              <Text style={styles.fieldLabel}>{fieldLabels[field]}</Text>
              <Text style={styles.fieldValue}>
                {mapping[field] || '(none)'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {!canImport && (
          <Text style={styles.warningText}>
            Please map a column to 'Name' to continue.
          </Text>
        )}

        <TouchableOpacity
          style={[styles.primaryButton, !canImport && styles.disabledButton]}
          onPress={handleImport}
          disabled={!canImport}
        >
          <Text style={styles.primaryButtonText}>
            Import {rows.length} Customers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleReset}>
          <Text style={styles.secondaryButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 22,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tableCell: {
    width: 120,
    padding: 8,
    fontSize: 13,
    color: '#333',
  },
  tableHeaderCell: {
    fontWeight: '600',
    color: '#1a1a1a',
    backgroundColor: '#f5f5f5',
  },
  mappingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  fieldLabel: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  fieldValue: {
    fontSize: 15,
    color: '#007AFF',
    flex: 1,
    textAlign: 'right',
  },
  warningText: {
    color: '#FF3B30',
    fontSize: 14,
    marginBottom: 12,
  },
  importingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  secondaryButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
