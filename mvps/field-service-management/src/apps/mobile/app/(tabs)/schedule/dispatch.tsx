import { useMemo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import DispatchBoard from '../../../src/components/jobs/dispatch-board';
import { useTeamMembers } from '../../../src/hooks/use-team-members';
import { useJobs } from '../../../src/hooks/use-jobs';
import { useCustomers } from '../../../src/hooks/use-customers';

export default function DispatchScreen() {
  const { teamMembers, isLoading: teamsLoading } = useTeamMembers();
  const { customers } = useCustomers();
  const { jobs, isLoading: jobsLoading } = useJobs();

  const isLoading = teamsLoading || jobsLoading;

  const todayStart = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }, []);

  const todayEnd = useMemo(() => {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d.getTime();
  }, []);

  const todayJobs = useMemo(
    () =>
      jobs.filter(
        (j) =>
          j.scheduledStart !== null &&
          j.scheduledStart >= todayStart &&
          j.scheduledStart <= todayEnd &&
          j.status !== 'INVOICED',
      ),
    [jobs, todayStart, todayEnd],
  );

  const customerNames = useMemo(() => {
    const map: Record<string, string> = {};
    customers.forEach((c) => {
      map[c.id] = c.name;
    });
    return map;
  }, [customers]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen
        options={{
          title: 'Dispatch Board',
          headerBackTitle: 'Schedule',
        }}
      />
      <View style={styles.dateHeader}>
        <Text style={styles.dateText}>
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
        <Text style={styles.jobSummary}>
          {todayJobs.length} job{todayJobs.length !== 1 ? 's' : ''} today
        </Text>
      </View>
      <DispatchBoard
        teamMembers={teamMembers}
        jobs={todayJobs}
        customerNames={customerNames}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  dateHeader: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  dateText: { fontSize: 16, fontWeight: '600', color: '#111827' },
  jobSummary: { fontSize: 13, color: '#6b7280', marginTop: 2 },
});
