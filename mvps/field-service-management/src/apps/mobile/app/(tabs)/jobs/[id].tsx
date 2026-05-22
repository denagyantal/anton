import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useJob, useTransitionJobStatus, useUpdateJobNotes } from '../../../src/hooks/use-jobs';
import { useCustomers } from '../../../src/hooks/use-customers';
import JobStatusBadge from '../../../src/components/jobs/job-status-badge';

function formatDate(timestamp: number | null): string {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function formatTimeRange(start: number | null, end: number | null): string {
  if (!start) return '';
  const s = new Date(start);
  const e = end ? new Date(end) : null;
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return e ? `${fmt(s)} – ${fmt(e)}` : fmt(s);
}

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { job, isLoading } = useJob(id ?? '');
  const { customers } = useCustomers();
  const { transitionStatus } = useTransitionJobStatus();
  const { updateNotes } = useUpdateJobNotes();

  const [localNotes, setLocalNotes] = useState('');
  const savedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (job) {
      setLocalNotes(job.notes ?? '');
    }
  }, [job?.id]);

  const customerName =
    customers.find((c) => c.id === job?.customerId)?.name ?? 'Unknown Customer';

  const handleBlur = useCallback(async () => {
    if (!job) return;
    await updateNotes(job.id, localNotes);
    savedOpacity.setValue(1);
    Animated.timing(savedOpacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [job, localNotes, updateNotes, savedOpacity]);

  const handleTransition = useCallback(
    async (newStatus: string) => {
      if (!job) return;
      await transitionStatus(job.id, newStatus);
    },
    [job, transitionStatus],
  );

  function renderActionButton() {
    if (!job) return null;
    if (job.status === 'QUOTED' || job.status === 'SCHEDULED') {
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.startButton]}
          onPress={() => handleTransition('IN_PROGRESS')}
        >
          <Text style={styles.startButtonText}>Start Job</Text>
        </TouchableOpacity>
      );
    }
    if (job.status === 'IN_PROGRESS') {
      return (
        <TouchableOpacity
          style={[styles.actionButton, styles.completeButton]}
          onPress={() => handleTransition('COMPLETE')}
        >
          <Text style={styles.completeButtonText}>Complete Job</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  if (isLoading || !job) {
    return (
      <>
        <Stack.Screen options={{ title: 'Job Detail' }} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      </>
    );
  }

  const timeRange = formatTimeRange(job.scheduledStart, job.scheduledEnd);
  const completedDate =
    (job.status === 'COMPLETE' || job.status === 'INVOICED') && job.completedAt
      ? formatDate(job.completedAt)
      : null;

  return (
    <>
      <Stack.Screen options={{ title: job.title ?? 'Job Detail' }} />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={styles.badgeRow}>
            <JobStatusBadge status={job.status} />
          </View>
          <Text style={styles.customerName}>{customerName}</Text>
          {timeRange ? <Text style={styles.timeRange}>{timeRange}</Text> : null}
          {completedDate ? (
            <Text style={styles.completedAt}>Completed: {completedDate}</Text>
          ) : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <TextInput
            style={styles.notesInput}
            multiline
            value={localNotes}
            onChangeText={setLocalNotes}
            onBlur={handleBlur}
            placeholder="Add job notes..."
            placeholderTextColor="#aaa"
          />
          <Animated.Text style={[styles.savedIndicator, { opacity: savedOpacity }]}>
            Saved
          </Animated.Text>
        </View>

        <View style={styles.actionsSection}>{renderActionButton()}</View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
  timeRange: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  completedAt: {
    fontSize: 13,
    color: '#888',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  notesInput: {
    minHeight: 100,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    color: '#333',
    textAlignVertical: 'top',
  },
  savedIndicator: {
    marginTop: 6,
    fontSize: 13,
    color: '#16A34A',
    fontWeight: '500',
  },
  actionsSection: {
    padding: 16,
  },
  actionButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#2563EB',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  completeButton: {
    backgroundColor: '#16A34A',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 32,
  },
});
