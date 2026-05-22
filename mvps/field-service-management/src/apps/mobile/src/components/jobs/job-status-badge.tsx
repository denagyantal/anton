import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  QUOTED:      { label: 'Quoted',      bg: '#E2E8F0', text: '#475569' },
  SCHEDULED:   { label: 'Scheduled',   bg: '#DBEAFE', text: '#1D4ED8' },
  IN_PROGRESS: { label: 'In Progress', bg: '#FEF3C7', text: '#92400E' },
  COMPLETE:    { label: 'Complete',    bg: '#DCFCE7', text: '#166534' },
  INVOICED:    { label: 'Invoiced',    bg: '#EDE9FE', text: '#5B21B6' },
};

interface JobStatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
}

export default function JobStatusBadge({ status, size = 'md' }: JobStatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const bg = config?.bg ?? '#E5E7EB';
  const textColor = config?.text ?? '#6B7280';
  const label = config?.label ?? status;

  return (
    <View style={[styles.badge, { backgroundColor: bg }, size === 'sm' && styles.badgeSm]}>
      <Text style={[styles.label, { color: textColor }, size === 'sm' && styles.labelSm]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
  labelSm: {
    fontSize: 11,
  },
});
