import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '../../hooks/use-network';
import { useSync } from '../../contexts/sync-context';

export function NetworkStatusBar() {
  const { isConnected } = useNetwork();
  const { pendingCount, syncError } = useSync();

  // AC #2: online, nothing pending, no error → green "all synced"
  if (isConnected && pendingCount === 0 && !syncError) {
    return (
      <View style={[styles.bar, { backgroundColor: '#22c55e22' }]}>
        <View style={[styles.dot, { backgroundColor: '#22c55e' }]} />
        <Text style={[styles.text, { color: '#16a34a' }]}>All synced</Text>
      </View>
    );
  }

  // AC #4: sync error state
  if (syncError) {
    return (
      <View style={[styles.bar, { backgroundColor: '#ef444422' }]}>
        <View style={[styles.dot, { backgroundColor: '#ef4444' }]} />
        <Text style={[styles.text, { color: '#dc2626' }]}>Sync error — tap a record to retry</Text>
      </View>
    );
  }

  // AC #3: online with pending, or offline
  const label = pendingCount > 0 ? `${pendingCount} pending` : 'offline';
  const color = isConnected ? '#fbbf24' : '#f59e0b';

  return (
    <View style={[styles.bar, { backgroundColor: color + '22' }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
});
