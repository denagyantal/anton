import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Job from '../../db/models/job';
import TeamMember from '../../db/models/team-member';
import JobStatusBadge from './job-status-badge';

interface DispatchBoardProps {
  teamMembers: TeamMember[];
  jobs: Job[];
  customerNames: Record<string, string>;
}

function formatTimeRange(start: number | null, end: number | null): string {
  if (!start) return 'No time set';
  const s = new Date(start);
  const e = end ? new Date(end) : null;
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return e ? `${fmt(s)} – ${fmt(e)}` : fmt(s);
}

function TechLane({
  name,
  jobs,
  customerNames,
  isUnassigned,
}: {
  name: string;
  jobs: Job[];
  customerNames: Record<string, string>;
  isUnassigned?: boolean;
}) {
  return (
    <View style={[styles.lane, isUnassigned && styles.unassignedLane]}>
      <View style={styles.laneHeader}>
        <Text style={[styles.laneName, isUnassigned && styles.unassignedLaneName]}>
          {name}
        </Text>
        <Text style={styles.jobCount}>{jobs.length} job{jobs.length !== 1 ? 's' : ''}</Text>
      </View>

      {jobs.length === 0 ? (
        <Text style={styles.emptyLane}>No jobs today</Text>
      ) : (
        jobs.map((job) => (
          <View key={job.id} style={styles.jobCard}>
            <View style={styles.jobCardHeader}>
              <Text style={styles.jobTitle} numberOfLines={1}>{job.title}</Text>
              <JobStatusBadge status={job.status} size="sm" />
            </View>
            <Text style={styles.jobCustomer}>
              {customerNames[job.customerId] ?? 'Unknown Customer'}
            </Text>
            <Text style={styles.jobTime}>
              {formatTimeRange(job.scheduledStart, job.scheduledEnd)}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}

export default function DispatchBoard({ teamMembers, jobs, customerNames }: DispatchBoardProps) {
  const unassignedJobs = jobs.filter((j) => !j.assignedToId);

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.boardContent}
    >
      {unassignedJobs.length > 0 && (
        <TechLane
          name="Unassigned"
          jobs={unassignedJobs}
          customerNames={customerNames}
          isUnassigned
        />
      )}

      {teamMembers.map((member) => {
        const memberJobs = jobs.filter((j) => j.assignedToId === member.id);
        return (
          <TechLane
            key={member.id}
            name={member.name}
            jobs={memberJobs}
            customerNames={customerNames}
          />
        );
      })}

      {teamMembers.length === 0 && unassignedJobs.length === 0 && (
        <View style={styles.emptyBoard}>
          <Text style={styles.emptyBoardTitle}>No team members yet</Text>
          <Text style={styles.emptyBoardSubtitle}>
            Invite team members from Settings › Team to see their assignments here.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  boardContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lane: {
    width: 220,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  unassignedLane: {
    backgroundColor: '#fffbeb',
    borderColor: '#fde68a',
  },
  laneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  laneName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    flex: 1,
  },
  unassignedLaneName: { color: '#92400e' },
  jobCount: { fontSize: 12, color: '#9ca3af' },
  emptyLane: { fontSize: 13, color: '#9ca3af', fontStyle: 'italic', paddingVertical: 8 },
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  jobCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  jobTitle: { fontSize: 14, fontWeight: '600', color: '#111827', flex: 1 },
  jobCustomer: { fontSize: 12, color: '#6b7280', marginBottom: 2 },
  jobTime: { fontSize: 12, color: '#9ca3af' },
  emptyBoard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyBoardTitle: { fontSize: 18, fontWeight: '600', color: '#374151', textAlign: 'center', marginBottom: 8 },
  emptyBoardSubtitle: { fontSize: 14, color: '#9ca3af', textAlign: 'center', lineHeight: 20 },
});
