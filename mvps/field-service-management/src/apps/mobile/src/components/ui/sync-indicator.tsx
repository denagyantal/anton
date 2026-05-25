import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RecordSyncStatus } from '../../hooks/use-sync-status';

interface Props {
  status: RecordSyncStatus;
}

export function SyncIndicator({ status }: Props) {
  if (status === 'synced') return null;

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>↻</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#fbbf24',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  text: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
