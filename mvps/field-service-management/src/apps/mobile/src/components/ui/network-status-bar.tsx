import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '../../hooks/use-network';
import { useSync } from '../../contexts/sync-context';

export function NetworkStatusBar() {
  const { isConnected } = useNetwork();
  const { pendingCount } = useSync();

  // AC #3: online with nothing pending → no indicator
  if (isConnected && pendingCount === 0) return null;

  // AC #4: online but pending items → yellow dot with count
  // AC #2: offline → yellow dot with pending count
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
