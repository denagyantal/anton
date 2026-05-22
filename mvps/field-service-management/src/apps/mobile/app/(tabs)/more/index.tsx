import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../src/contexts/auth-context';
import {
  requestCalendarPermission,
  getDefaultCalendarId,
} from '../../../src/services/calendar-service';

export default function MoreScreen() {
  const router = useRouter();
  const { signOut } = useAuth();
  const [calendarSyncEnabled, setCalendarSyncEnabled] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('calendarSyncEnabled').then((value) => {
      setCalendarSyncEnabled(value === 'true');
    });
  }, []);

  async function handleCalendarSyncToggle(enabled: boolean) {
    if (enabled) {
      const granted = await requestCalendarPermission();
      if (!granted) {
        Alert.alert(
          'Permission Required',
          'Calendar permission is required to sync jobs. Please enable it in Settings.',
        );
        return;
      }
      const calendarId = await getDefaultCalendarId();
      if (!calendarId) {
        Alert.alert('No Calendar Found', 'No writable calendar was found on this device.');
        return;
      }
      await AsyncStorage.setItem('calendarSyncEnabled', 'true');
      await AsyncStorage.setItem('externalCalendarId', calendarId);
      setCalendarSyncEnabled(true);
    } else {
      await AsyncStorage.setItem('calendarSyncEnabled', 'false');
      setCalendarSyncEnabled(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/(tabs)/more/quotes')}
      >
        <Text style={styles.rowText}>Quotes</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/(tabs)/more/profile')}
      >
        <Text style={styles.rowText}>Business Profile</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push('/(tabs)/more/pricebook')}
      >
        <Text style={styles.rowText}>Pricebook</Text>
        <Text style={styles.rowArrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Calendar</Text>

      <View style={styles.row}>
        <View style={styles.rowContent}>
          <Text style={styles.rowText}>Calendar Sync</Text>
          <Text style={styles.rowSubText}>Sync jobs to Google or Apple Calendar</Text>
        </View>
        <Switch
          value={calendarSyncEnabled}
          onValueChange={handleCalendarSyncToggle}
          trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
          thumbColor={calendarSyncEnabled ? '#2563eb' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.row} onPress={signOut}>
        <Text style={[styles.rowText, styles.signOutText]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    backgroundColor: '#f9fafb',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rowContent: {
    flex: 1,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  rowSubText: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 2,
  },
  rowArrow: {
    fontSize: 20,
    color: '#999',
  },
  signOutText: {
    color: '#e74c3c',
  },
});
