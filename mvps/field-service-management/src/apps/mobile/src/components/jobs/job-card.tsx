import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Job from '../../db/models/job';
import JobStatusBadge from './job-status-badge';
import { getSyncStatus } from '../../hooks/use-sync-status';
import { SyncIndicator } from '../ui/sync-indicator';

function formatTimeRange(start: number | null, end: number | null): string {
  if (!start) return '';
  const s = new Date(start);
  const e = end ? new Date(end) : null;
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return e ? `${fmt(s)} – ${fmt(e)}` : fmt(s);
}

interface JobCardProps {
  job: Job;
  customerName: string;
  onPress: () => void;
  onTransition: (newStatus: string) => void;
}

export default function JobCard({ job, customerName, onPress, onTransition }: JobCardProps) {
  const timeRange = formatTimeRange(job.scheduledStart, job.scheduledEnd);

  function renderActionButton() {
    if (job.status === 'QUOTED' || job.status === 'SCHEDULED') {
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.startButton]}
          onPress={() => onTransition('IN_PROGRESS')}
        >
          <Text style={styles.startButtonText}>Start Job</Text>
        </TouchableOpacity>
      );
    }
    if (job.status === 'IN_PROGRESS') {
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.completeButton]}
          onPress={() => onTransition('COMPLETE')}
        >
          <Text style={styles.completeButtonText}>Complete Job</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1}>
            {job.title}
          </Text>
          <SyncIndicator status={getSyncStatus(job)} />
        </View>
        <JobStatusBadge status={job.status} size="sm" />
      </View>
      <Text style={styles.customerName}>{customerName}</Text>
      {timeRange ? <Text style={styles.timeRange}>{timeRange}</Text> : null}
      {renderActionButton()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    flex: 1,
  },
  customerName: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  timeRange: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  actionButton: {
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#2563EB',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  completeButton: {
    backgroundColor: '#16A34A',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
