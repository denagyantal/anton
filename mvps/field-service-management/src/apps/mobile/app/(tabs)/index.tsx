import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { useJobs, useTransitionJobStatus } from '../../src/hooks/use-jobs';
import { useCustomers } from '../../src/hooks/use-customers';
import JobCard from '../../src/components/jobs/job-card';
import Job from '../../src/db/models/job';

const STATUS_FILTERS = [
  { label: 'All', value: undefined },
  { label: 'Quoted', value: 'QUOTED' },
  { label: 'Scheduled', value: 'SCHEDULED' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Complete', value: 'COMPLETE' },
  { label: 'Invoiced', value: 'INVOICED' },
] as const;

type FilterValue = (typeof STATUS_FILTERS)[number]['value'];

export default function JobsListScreen() {
  const [selectedFilter, setSelectedFilter] = useState<FilterValue>(undefined);
  const { jobs, isLoading } = useJobs(selectedFilter);
  const { customers } = useCustomers();
  const { transitionStatus } = useTransitionJobStatus();

  const customerMap = useMemo(
    () => new Map(customers.map((c) => [c.id, c.name])),
    [customers],
  );

  const handlePress = useCallback((job: Job) => {
    router.push(`/jobs/${job.id}`);
  }, []);

  const handleTransition = useCallback(
    async (job: Job, newStatus: string) => {
      await transitionStatus(job.id, newStatus);
    },
    [transitionStatus],
  );

  const renderItem = useCallback(
    ({ item }: { item: Job }) => (
      <JobCard
        job={item}
        customerName={customerMap.get(item.customerId) ?? 'Unknown Customer'}
        onPress={() => handlePress(item)}
        onTransition={(newStatus) => handleTransition(item, newStatus)}
      />
    ),
    [customerMap, handlePress, handleTransition],
  );

  const keyExtractor = useCallback((item: Job) => item.id, []);

  function renderEmpty() {
    if (isLoading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          {selectedFilter ? 'No jobs with this status' : 'No jobs yet'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterBar}
        contentContainerStyle={styles.filterContent}
      >
        {STATUS_FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter.label}
            style={[styles.chip, selectedFilter === filter.value && styles.chipActive]}
            onPress={() => setSelectedFilter(filter.value)}
          >
            <Text
              style={[styles.chipText, selectedFilter === filter.value && styles.chipTextActive]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={jobs.length === 0 ? styles.emptyList : styles.list}
          ListEmptyComponent={renderEmpty}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filterBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    maxHeight: 52,
  },
  filterContent: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
  },
  chipActive: {
    backgroundColor: '#2563eb',
  },
  chipText: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingVertical: 8,
  },
  emptyList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
  },
  emptyText: {
    fontSize: 15,
    color: '#999',
    textAlign: 'center',
  },
});
