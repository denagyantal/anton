import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { RecordSyncStatus } from '../../hooks/use-sync-status';

interface Props {
  status: RecordSyncStatus;
  onPress?: () => void;
}

export function SyncIndicator({ status, onPress }: Props) {
  if (status === 'synced') {
    return (
      <View style={[styles.badge, styles.synced]}>
        <Text style={styles.text}>✓</Text>
      </View>
    );
  }

  if (status === 'error') {
    const inner = (
      <View style={[styles.badge, styles.error]}>
        <Text style={styles.text}>!</Text>
      </View>
    );
    return onPress ? (
      <TouchableOpacity onPress={onPress} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
        {inner}
      </TouchableOpacity>
    ) : inner;
  }

  // pending
  return (
    <View style={[styles.badge, styles.pending]}>
      <Text style={styles.text}>↻</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  synced: { backgroundColor: '#22c55e' },
  pending: { backgroundColor: '#fbbf24' },
  error: { backgroundColor: '#ef4444' },
  text: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
