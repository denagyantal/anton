# Story 8.2: Dispatch Board and Job Assignment

Status: done

## Story

As a shop owner managing 2-5 technicians,
I want to see where everyone is and what they're working on, and assign jobs to specific techs,
so that I can efficiently route my crew and balance workloads.

## Acceptance Criteria

1. **[Dispatch board shows all techs and today's jobs]** Given the account has multiple team members, when the user navigates to the dispatch view, then they see a board showing each technician's name, current assignment (if any), and upcoming jobs for the day, plus an "Unassigned" lane for jobs with no assigned technician. (FR12)

2. **[Job creation supports tech assignment]** Given a new job needs to be assigned, when the user creates a job via the "Schedule Job" modal, then they can optionally select a technician from a dropdown list of team members and the `assigned_to_id` is saved to WatermelonDB on the job record. (FR13)

3. **[Job reassignment on job detail screen]** Given a job is currently assigned to one technician, when the user views the job detail screen and taps "Reassign", then they can select a different technician from a picker and the change is reflected immediately on the job record and the dispatch board. (FR13)

4. **[Dispatch board reflects live job statuses]** Given the dispatch board is displayed, when team members' jobs update throughout the day (via sync or local writes), then the board reflects current job statuses in near-real-time via WatermelonDB observable queries — no manual refresh required.

5. **[Unassigned jobs are visible]** Given jobs exist without an assigned technician, when the dispatch board loads, then they appear in a clearly labelled "Unassigned" section at the top or bottom of the board so no work is invisible.

6. **[Tech name shown on job detail]** Given a job has an assigned technician, when the user views the job detail screen, then the assigned technician's name is displayed in an "Assigned To" row.

## Tasks / Subtasks

### Task 1: Create `useTeamMembers` hook (AC: #1, #2, #3, #4)

- [x] 1.1: Create `apps/mobile/src/hooks/use-team-members.ts`:

  ```typescript
  import { useState, useEffect } from 'react';
  import { Q } from '@nozbe/watermelondb';
  import { useDatabase } from '../contexts/database-context';
  import { useAuth } from '../contexts/auth-context';
  import TeamMember from '../db/models/team-member';

  export function useTeamMembers(): { teamMembers: TeamMember[]; isLoading: boolean } {
    const database = useDatabase();
    const { user } = useAuth();
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!user?.accountId) {
        setTeamMembers([]);
        setIsLoading(false);
        return;
      }

      const subscription = database
        .get<TeamMember>('team_members')
        .query(
          Q.where('account_id', user.accountId),
          Q.sortBy('name', Q.asc),
        )
        .observe()
        .subscribe((records) => {
          setTeamMembers(records);
          setIsLoading(false);
        });

      return () => subscription.unsubscribe();
    }, [database, user?.accountId]);

    return { teamMembers, isLoading };
  }
  ```

### Task 2: Add `useAssignJob` hook to `use-jobs.ts` (AC: #3, #4)

- [x] 2.1: In `apps/mobile/src/hooks/use-jobs.ts`, add the `useAssignJob` hook at the end of the file (after `useUpdateJobNotes`):

  ```typescript
  export function useAssignJob(): {
    assignJob: (jobId: string, assignedToId: string | null) => Promise<void>;
  } {
    const database = useDatabase();

    const assignJob = useCallback(
      async (jobId: string, assignedToId: string | null): Promise<void> => {
        await database.write(async () => {
          const job = await database.get<Job>('jobs').find(jobId);
          await job.update((record) => {
            record.assignedToId = assignedToId ?? '';
          });
        });
      },
      [database],
    );

    return { assignJob };
  }
  ```

  Also add `useAssignJob` to the existing imports at the top (no new imports needed — `useCallback` and `database` are already imported).

### Task 3: Create `TechnicianPicker` component (AC: #2, #3)

- [x] 3.1: Create `apps/mobile/src/components/jobs/technician-picker.tsx`:

  ```typescript
  import { useState } from 'react';
  import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';
  import TeamMember from '../../db/models/team-member';

  interface TechnicianPickerProps {
    visible: boolean;
    teamMembers: TeamMember[];
    selectedId: string | null;
    onSelect: (member: TeamMember | null) => void;
    onClose: () => void;
  }

  export default function TechnicianPicker({
    visible,
    teamMembers,
    selectedId,
    onSelect,
    onClose,
  }: TechnicianPickerProps) {
    return (
      <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Assign Technician</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={[{ id: null, name: 'Unassigned', role: '' } as unknown as TeamMember, ...teamMembers]}
            keyExtractor={(item) => item.id ?? 'unassigned'}
            renderItem={({ item }) => {
              const isSelected = item.id === selectedId || (!item.id && !selectedId);
              return (
                <TouchableOpacity
                  style={[styles.row, isSelected && styles.rowSelected]}
                  onPress={() => {
                    onSelect(item.id ? item : null);
                    onClose();
                  }}
                >
                  <Text style={[styles.rowName, isSelected && styles.rowNameSelected]}>
                    {item.name}
                  </Text>
                  {item.id && (
                    <Text style={styles.rowRole}>{item.role}</Text>
                  )}
                  {isSelected && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </SafeAreaView>
      </Modal>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    },
    title: { fontSize: 18, fontWeight: '700', color: '#111827' },
    closeButton: { paddingHorizontal: 4 },
    closeText: { fontSize: 16, color: '#6b7280' },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 14,
      backgroundColor: '#fff',
    },
    rowSelected: { backgroundColor: '#eff6ff' },
    rowName: { flex: 1, fontSize: 16, color: '#111827' },
    rowNameSelected: { color: '#2563eb', fontWeight: '600' },
    rowRole: { fontSize: 13, color: '#9ca3af', marginRight: 8 },
    checkmark: { fontSize: 16, color: '#2563eb', fontWeight: '700' },
    separator: { height: 1, backgroundColor: '#f3f4f6', marginLeft: 20 },
  });
  ```

### Task 4: Create `DispatchBoard` component (AC: #1, #4, #5)

- [x] 4.1: Create `apps/mobile/src/components/jobs/dispatch-board.tsx`:

  ```typescript
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
  ```

### Task 5: Create Dispatch Screen route (AC: #1, #4, #5)

- [x] 5.1: Create `apps/mobile/app/(tabs)/schedule/dispatch.tsx`:

  ```typescript
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

    // Only show today's scheduled/in-progress/complete jobs on the dispatch board
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
  ```

### Task 6: Add "Dispatch" button to Schedule screen (AC: #1)

- [x] 6.1: In `apps/mobile/app/(tabs)/schedule/index.tsx`, add a "Dispatch" navigation button to the screen header or as a floating action. Read the file first to determine the exact location.

  The schedule screen uses `Stack.Screen` options or a custom header. Add a header right button that navigates to `/(tabs)/schedule/dispatch`:

  ```typescript
  import { router, Stack } from 'expo-router';

  // Inside the component, add or update Stack.Screen options:
  <Stack.Screen
    options={{
      title: 'Schedule',
      headerRight: () => (
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/schedule/dispatch')}
          style={{ marginRight: 4 }}
        >
          <Text style={{ fontSize: 14, color: '#2563eb', fontWeight: '600' }}>Dispatch</Text>
        </TouchableOpacity>
      ),
    }}
  />
  ```

  If `Stack.Screen` is not already used in the schedule screen, add the import: `import { Stack } from 'expo-router';`

  **Note**: Read `apps/mobile/app/(tabs)/schedule/index.tsx` before editing to identify the exact insertion point and avoid duplicate `Stack.Screen` definitions.

### Task 7: Update `CreateJobParams` and `useCreateJob` to support tech assignment (AC: #2)

- [x] 7.1: In `apps/mobile/src/hooks/use-schedule.ts`, add `assignedToId` to the `CreateJobParams` interface:

  ```typescript
  export interface CreateJobParams {
    customerId: string;
    customerName: string;
    title: string;
    startTime: Date;
    endTime: Date;
    quoteId?: string;
    notes?: string;
    externalCalendarId?: string;
    initialStatus?: string;
    assignedToId?: string;  // NEW
  }
  ```

- [x] 7.2: In the `createJob` callback, update the job record creation to set `assignedToId` when provided. The existing job creation block (line ~74-83 in `use-schedule.ts`) currently ends with `record.notes = params.notes ?? '';`. Add one line after it:

  ```typescript
  createdJob = await database.get<Job>('jobs').create((record) => {
    record.accountId = user.accountId;
    record.customerId = params.customerId;
    record.quoteId = params.quoteId ?? '';
    record.status = params.initialStatus ?? 'SCHEDULED';
    record.title = params.title;
    record.scheduledStart = params.startTime.getTime();
    record.scheduledEnd = params.endTime.getTime();
    record.notes = params.notes ?? '';
    record.assignedToId = params.assignedToId ?? '';  // NEW
  });
  ```

### Task 8: Update `create-job.tsx` modal to include tech assignment picker (AC: #2)

- [x] 8.1: In `apps/mobile/app/(modals)/create-job.tsx`, add the following imports at the top (after existing imports):

  ```typescript
  import TechnicianPicker from '../../src/components/jobs/technician-picker';
  import { useTeamMembers } from '../../src/hooks/use-team-members';
  import TeamMember from '../../src/db/models/team-member';
  ```

- [x] 8.2: Add state variables for the tech assignment (after the existing `const [isSaving, setIsSaving] = useState(false);` line):

  ```typescript
  const { teamMembers } = useTeamMembers();
  const [selectedTech, setSelectedTech] = useState<TeamMember | null>(null);
  const [showTechPicker, setShowTechPicker] = useState(false);
  ```

- [x] 8.3: Update the `handleSave` function to pass `assignedToId` to `createJob`. Change:

  ```typescript
  const { event } = await createJob({
    customerId: selectedCustomer.id,
    customerName: selectedCustomer.name,
    title: title.trim(),
    startTime,
    endTime,
    quoteId: quoteId.trim() || undefined,
    notes: notes.trim() || undefined,
  });
  ```

  To:

  ```typescript
  const { event } = await createJob({
    customerId: selectedCustomer.id,
    customerName: selectedCustomer.name,
    title: title.trim(),
    startTime,
    endTime,
    quoteId: quoteId.trim() || undefined,
    notes: notes.trim() || undefined,
    assignedToId: selectedTech?.id ?? undefined,
  });
  ```

- [x] 8.4: Add the Assign Technician field to the form's `ScrollView`. Insert it after the "Customer" field block (after the customer picker `TouchableOpacity` closing tag, before the Job Title label). Only show the picker if there are team members (solo operators with no team don't need it):

  ```tsx
  {teamMembers.length > 0 && (
    <>
      <Text style={styles.label}>Assign Technician (optional)</Text>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setShowTechPicker(true)}
      >
        <Text style={selectedTech ? styles.pickerValue : styles.pickerPlaceholder}>
          {selectedTech ? selectedTech.name : 'Unassigned'}
        </Text>
      </TouchableOpacity>
    </>
  )}
  ```

- [x] 8.5: Add the `TechnicianPicker` modal at the bottom of the component (before the closing `</View>` tag, after the existing `<CustomerPicker ... />`):

  ```tsx
  <TechnicianPicker
    visible={showTechPicker}
    teamMembers={teamMembers}
    selectedId={selectedTech?.id ?? null}
    onSelect={(member) => setSelectedTech(member)}
    onClose={() => setShowTechPicker(false)}
  />
  ```

### Task 9: Add assignment display and reassignment to job detail screen (AC: #3, #6)

- [x] 9.1: In `apps/mobile/app/(tabs)/jobs/[id].tsx`, add the following imports (after the existing imports near the top of the file):

  ```typescript
  import { useTeamMembers } from '../../../src/hooks/use-team-members';
  import { useAssignJob } from '../../../src/hooks/use-jobs';
  import TechnicianPicker from '../../../src/components/jobs/technician-picker';
  ```

- [x] 9.2: Inside the `JobDetailScreen` component, add hooks after the existing hook calls:

  ```typescript
  const { teamMembers } = useTeamMembers();
  const { assignJob } = useAssignJob();
  const [showTechPicker, setShowTechPicker] = useState(false);
  ```

- [x] 9.3: Add a computed value for the current assignee name (after `const customerName = ...`):

  ```typescript
  const assignedTechName = job?.assignedToId
    ? (teamMembers.find((m) => m.id === job.assignedToId)?.name ?? 'Unknown')
    : null;
  ```

- [x] 9.4: Read `apps/mobile/app/(tabs)/jobs/[id].tsx` to find the correct location to insert the "Assigned To" row. It should appear in the job details section, after the customer/time information and before photos/notes. Insert the following JSX block:

  ```tsx
  {/* Only show assignment row if account has team members */}
  {teamMembers.length > 0 && (
    <View style={styles.assignmentRow}>
      <View style={styles.assignmentInfo}>
        <Text style={styles.assignmentLabel}>Assigned To</Text>
        <Text style={styles.assignmentValue}>
          {assignedTechName ?? 'Unassigned'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.reassignButton}
        onPress={() => setShowTechPicker(true)}
      >
        <Text style={styles.reassignButtonText}>
          {assignedTechName ? 'Reassign' : 'Assign'}
        </Text>
      </TouchableOpacity>
    </View>
  )}
  ```

- [x] 9.5: Add the `TechnicianPicker` modal and `handleAssign` function to the component. Add the handler before the `return` statement:

  ```typescript
  const handleAssign = useCallback(
    async (member: import('../../../src/db/models/team-member').default | null) => {
      if (!job) return;
      await assignJob(job.id, member?.id ?? null);
    },
    [job, assignJob],
  );
  ```

  Add the picker near the end of the JSX (before the closing `</ScrollView>` or `</View>`):

  ```tsx
  <TechnicianPicker
    visible={showTechPicker}
    teamMembers={teamMembers}
    selectedId={job?.assignedToId ?? null}
    onSelect={handleAssign}
    onClose={() => setShowTechPicker(false)}
  />
  ```

- [x] 9.6: Add the new styles to the `StyleSheet.create({})` at the bottom of `[id].tsx`. Read the file to identify the correct location and avoid conflicts with existing style names:

  ```typescript
  assignmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  assignmentInfo: { flex: 1 },
  assignmentLabel: { fontSize: 12, color: '#6b7280', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  assignmentValue: { fontSize: 16, color: '#111827', marginTop: 2 },
  reassignButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
  },
  reassignButtonText: { fontSize: 14, color: '#374151', fontWeight: '500' },
  ```

### Task 10: Tests (AC: #1, #2, #3, #4)

- [x] 10.1: Create `apps/mobile/src/hooks/use-team-members.test.ts`:

  ```typescript
  import { renderHook, act } from '@testing-library/react-native';
  import { useTeamMembers } from './use-team-members';

  const mockSubscription = { unsubscribe: jest.fn() };
  const mockObserve = jest.fn(() => ({ subscribe: jest.fn((cb) => { cb([{ id: 'tm-1', name: 'Alice', role: 'MEMBER' }]); return mockSubscription; }) }));
  const mockQuery = jest.fn(() => ({ observe: mockObserve }));
  const mockGet = jest.fn(() => ({ query: mockQuery }));

  jest.mock('../contexts/database-context', () => ({
    useDatabase: () => ({ get: mockGet }),
  }));

  jest.mock('../contexts/auth-context', () => ({
    useAuth: () => ({ user: { accountId: 'account-1' } }),
  }));

  describe('useTeamMembers', () => {
    it('returns team members from WatermelonDB', async () => {
      const { result } = renderHook(() => useTeamMembers());
      expect(result.current.teamMembers).toHaveLength(1);
      expect(result.current.teamMembers[0]!.name).toBe('Alice');
      expect(result.current.isLoading).toBe(false);
    });

    it('returns empty array when no accountId', () => {
      jest.resetModules();
      jest.mock('../contexts/auth-context', () => ({
        useAuth: () => ({ user: null }),
      }));
      // isLoading false, empty array
    });
  });
  ```

- [x] 10.2: Create `apps/mobile/src/hooks/use-assign-job.test.ts`:

  ```typescript
  import { renderHook, act } from '@testing-library/react-native';
  import { useAssignJob } from './use-jobs';

  const mockUpdate = jest.fn();
  const mockFind = jest.fn().mockResolvedValue({ update: mockUpdate });
  const mockWrite = jest.fn(async (fn: () => Promise<void>) => fn());
  const mockGet = jest.fn(() => ({ find: mockFind }));

  jest.mock('../contexts/database-context', () => ({
    useDatabase: () => ({ get: mockGet, write: mockWrite }),
  }));

  describe('useAssignJob', () => {
    it('writes assignedToId to job record', async () => {
      const { result } = renderHook(() => useAssignJob());
      await act(async () => {
        await result.current.assignJob('job-1', 'tech-1');
      });
      expect(mockFind).toHaveBeenCalledWith('job-1');
      expect(mockUpdate).toHaveBeenCalled();
    });

    it('clears assignedToId when null is passed', async () => {
      const { result } = renderHook(() => useAssignJob());
      const updatedRecord: Record<string, string> = {};
      mockUpdate.mockImplementation((fn: (r: Record<string, string>) => void) => {
        fn(updatedRecord);
      });
      await act(async () => {
        await result.current.assignJob('job-1', null);
      });
      expect(updatedRecord['assignedToId']).toBe('');
    });
  });
  ```

- [x] 10.3: Create `apps/mobile/src/components/jobs/dispatch-board.test.tsx`:

  ```typescript
  import React from 'react';
  import { render } from '@testing-library/react-native';
  import DispatchBoard from './dispatch-board';

  const mockTeamMembers = [
    { id: 'tm-1', name: 'Alice', role: 'MEMBER' },
    { id: 'tm-2', name: 'Bob', role: 'MEMBER' },
  ] as any[];

  const mockJobs = [
    { id: 'j-1', title: 'HVAC Repair', customerId: 'c-1', assignedToId: 'tm-1', status: 'SCHEDULED', scheduledStart: Date.now(), scheduledEnd: Date.now() + 3600000 },
    { id: 'j-2', title: 'Pipe Fix', customerId: 'c-2', assignedToId: null, status: 'IN_PROGRESS', scheduledStart: Date.now(), scheduledEnd: null },
    { id: 'j-3', title: 'Panel Upgrade', customerId: 'c-3', assignedToId: 'tm-2', status: 'SCHEDULED', scheduledStart: Date.now(), scheduledEnd: null },
  ] as any[];

  const mockCustomerNames = { 'c-1': 'John Smith', 'c-2': 'Jane Doe', 'c-3': 'Bob Jones' };

  // Mock JobStatusBadge to avoid style issues in tests
  jest.mock('./job-status-badge', () => ({
    __esModule: true,
    default: ({ status }: { status: string }) => null,
  }));

  describe('DispatchBoard', () => {
    it('renders a lane for each team member', () => {
      const { getByText } = render(
        <DispatchBoard teamMembers={mockTeamMembers} jobs={mockJobs} customerNames={mockCustomerNames} />,
      );
      expect(getByText('Alice')).toBeTruthy();
      expect(getByText('Bob')).toBeTruthy();
    });

    it('renders Unassigned lane when unassigned jobs exist', () => {
      const { getByText } = render(
        <DispatchBoard teamMembers={mockTeamMembers} jobs={mockJobs} customerNames={mockCustomerNames} />,
      );
      expect(getByText('Unassigned')).toBeTruthy();
    });

    it('shows jobs in the correct tech lane', () => {
      const { getByText } = render(
        <DispatchBoard teamMembers={mockTeamMembers} jobs={mockJobs} customerNames={mockCustomerNames} />,
      );
      expect(getByText('HVAC Repair')).toBeTruthy();
      expect(getByText('Panel Upgrade')).toBeTruthy();
    });

    it('shows empty board message when no members or jobs', () => {
      const { getByText } = render(
        <DispatchBoard teamMembers={[]} jobs={[]} customerNames={{}} />,
      );
      expect(getByText('No team members yet')).toBeTruthy();
    });

    it('does NOT render Unassigned lane when all jobs are assigned', () => {
      const allAssigned = mockJobs.filter((j) => j.assignedToId);
      const { queryByText } = render(
        <DispatchBoard teamMembers={mockTeamMembers} jobs={allAssigned} customerNames={mockCustomerNames} />,
      );
      expect(queryByText('Unassigned')).toBeNull();
    });
  });
  ```

## Dev Notes

### Foundation from Story 8.1

Story 8.1 built everything this story depends on:
- `team_members` table in PostgreSQL (migration `20260526000000_add_account_invites`) and WatermelonDB (schema v11, migration `toVersion: 11`)
- `TeamMember` Prisma model (`apps/api/prisma/schema.prisma`) and WatermelonDB model (`apps/mobile/src/db/models/team-member.ts`)
- `team_members` included in sync pull — pulled read-only, never pushed from mobile
- `apps/mobile/src/db/index.ts` already registers `TeamMember` in `modelClasses`

**No schema migration needed**: The `jobs` table already has `assigned_to_id` column (optional) in both WatermelonDB (schema v11) and PostgreSQL (from the original architecture). The `Job` WatermelonDB model (`apps/mobile/src/db/models/job.ts`) already has `@text('assigned_to_id') assignedToId!: string;`. No new Prisma migration is required.

### WatermelonDB: `assignedToId` is an empty string, not null

WatermelonDB text fields use `''` (empty string) as the "absent" value, not `null`. The `jobs` schema marks `assigned_to_id` as `isOptional: true`, which means it can be stored as an empty string. When checking if a job is assigned:

```typescript
// Correct:
const isAssigned = job.assignedToId !== '' && job.assignedToId !== null;

// In useAssignJob:
record.assignedToId = assignedToId ?? '';  // null → '' for WatermelonDB
```

When filtering jobs for a tech lane:
```typescript
// Unassigned:
const unassigned = jobs.filter((j) => !j.assignedToId);
// For a specific tech:
const techJobs = jobs.filter((j) => j.assignedToId === member.id);
```

### `useTeamMembers` is a WatermelonDB observable hook

Like `useJobs`, `useTeamMembers` uses `.observe().subscribe()` — it auto-updates when `team_members` records change (e.g., after a sync pull adds a new team member). No manual refresh needed.

### DispatchBoard is purely presentational

`DispatchBoard` takes `teamMembers`, `jobs`, and `customerNames` as props — it renders only, no data fetching. All data fetching is in the `DispatchScreen` parent. This makes the component easy to test and reuse.

The `customerNames` map avoids WatermelonDB joins inside the component. The dispatch screen builds this map from `useCustomers()` before passing it down.

### Dispatch screen filters today's jobs

The dispatch screen uses `useMemo` to filter to jobs with `scheduledStart` within today (midnight to 23:59:59). It excludes `INVOICED` status since those are finished jobs. Jobs without a `scheduledStart` (e.g., QUOTED status) are not shown on the dispatch board — they have no time slot.

### Route for dispatch screen

The dispatch screen is at `apps/mobile/app/(tabs)/schedule/dispatch.tsx`, which Expo Router automatically maps to `/(tabs)/schedule/dispatch`. The `Stack.Screen` header title is set to "Dispatch Board" with "Schedule" as the back button title.

### `create-job.tsx`: Conditionally show tech picker

The tech picker only renders when `teamMembers.length > 0`. This ensures the modal is clean for solo operators (who have no team) and only shows tech assignment for shops with multiple members.

### `useCreateJob` change is additive

Adding `assignedToId?: string` to `CreateJobParams` is backward compatible — all existing call sites omit it and get the default behavior (empty string → unassigned). Only the updated `create-job.tsx` modal will pass `assignedToId`.

### Job detail: team lookup is local

`teamMembers.find((m) => m.id === job.assignedToId)` is a local in-memory lookup from WatermelonDB. It is fast (< 1ms) and works offline. Team members are pulled into WatermelonDB during sync.

### `useAssignJob` writes to WatermelonDB immediately

The assignment change is written locally via `database.write()` immediately — no API call. It is synced to the server on the next push cycle. This means the dispatch board updates immediately after reassignment (WatermelonDB observable fires).

### `TechnicianPicker`: first item is "Unassigned"

The picker prepends a synthetic `{ id: null, name: 'Unassigned' }` item so users can clear an assignment. The `onSelect(null)` call triggers `assignJob(jobId, null)` which sets `assignedToId = ''`.

### Import paths in mobile — NO `.js` extension

Unlike the API server (which uses ESM with `.js` extensions), the mobile app uses Metro bundler and does **not** require `.js` extensions on imports:
```typescript
// Correct for mobile:
import { useTeamMembers } from '../hooks/use-team-members';
import TeamMember from '../db/models/team-member';

// Correct for API:
import { teamMembersRouter } from './routes/team-members.js';
```

### Schedule screen: read before editing

The schedule screen (`apps/mobile/app/(tabs)/schedule/index.tsx`) was built in Story 3.1. Read it before modifying. Look for:
- Existing `Stack.Screen` usage (add `headerRight` to it, don't create a duplicate)
- Whether `router` and `TouchableOpacity` are already imported
- The exact location to add the Dispatch button (header right is preferred)

### Job detail screen: read before editing

`apps/mobile/app/(tabs)/jobs/[id].tsx` is complex (built across stories 3.2, 3.3, 4.1–4.4). Read it fully before inserting the assignment row. Look for:
- The `StyleSheet.create({})` call at the bottom — add new styles there
- A logical place for the assignment row (after customer info, before notes/photos section)
- Whether `useState` and `useCallback` are already imported from React (they are — don't duplicate)

### Do NOT Modify

- `apps/mobile/src/db/schema.ts` — no schema changes needed (version stays at 11)
- `apps/mobile/src/db/migrations.ts` — no new migration steps needed
- `apps/api/prisma/schema.prisma` — `assigned_to_id` column already exists in `jobs` table
- `apps/api/src/services/sync-service.ts` — `assigned_to_id` syncs automatically as part of jobs push/pull (no special handling needed)
- `apps/mobile/src/db/models/job.ts` — `assignedToId` field already declared
- Stripe, Twilio, QuickBooks, push notification services — not touched in this story

### Project Structure Notes

| Action | File |
|--------|------|
| Create | `apps/mobile/src/hooks/use-team-members.ts` — WatermelonDB team members observable hook |
| Modify | `apps/mobile/src/hooks/use-jobs.ts` — add `useAssignJob` hook |
| Modify | `apps/mobile/src/hooks/use-schedule.ts` — add `assignedToId` to `CreateJobParams`, pass to job create |
| Create | `apps/mobile/src/components/jobs/technician-picker.tsx` — reusable tech selection modal |
| Create | `apps/mobile/src/components/jobs/dispatch-board.tsx` — presentational dispatch board |
| Create | `apps/mobile/app/(tabs)/schedule/dispatch.tsx` — dispatch board screen |
| Modify | `apps/mobile/app/(tabs)/schedule/index.tsx` — add Dispatch header button |
| Modify | `apps/mobile/app/(modals)/create-job.tsx` — add tech assignment picker field |
| Modify | `apps/mobile/app/(tabs)/jobs/[id].tsx` — add "Assigned To" row + reassign picker |
| Create | `apps/mobile/src/hooks/use-team-members.test.ts` — hook tests |
| Create | `apps/mobile/src/hooks/use-assign-job.test.ts` — hook tests |
| Create | `apps/mobile/src/components/jobs/dispatch-board.test.tsx` — component tests |

### References

- [Source: epics.md#Story 8.2] — User story statement, AC: FR12, FR13
- [Source: architecture.md#Frontend Architecture (Mobile)] — `dispatch-board.tsx` listed in `src/components/jobs/`; WatermelonDB observables for data state; feature-based organization
- [Source: architecture.md#Project Structure] — Dispatch board component path: `apps/mobile/src/components/jobs/dispatch-board.tsx`
- [Source: architecture.md#Component Boundaries] — "UI components in `components/ui/` are pure/presentational — no business logic, no data fetching"; applies to DispatchBoard
- [Source: architecture.md#Data Architecture] — "WatermelonDB (SQLite-backed) ... All mobile data operations go through WatermelonDB — never direct API calls for CRUD"
- [Source: architecture.md#Data Model] — `jobs` table: `assigned_to_id (FK → team_members, nullable)`; `team_members` table schema
- [Source: stories/8-1-team-member-invites-and-multi-device-access.md] — team_members WatermelonDB schema (v11), TeamMember model, sync pull-only setup
- [Source: stories/3-1-calendar-view-and-job-scheduling.md] — `useCreateJob`, `CreateJobParams` pattern in `use-schedule.ts`
- [Source: stories/3-2-job-lifecycle-and-status-tracking.md] — `useJobs`, WatermelonDB observable pattern, `use-jobs.ts` structure
- [Source: stories/2-1-customer-creation-and-contact-management.md] — `CustomerPicker` modal pattern (mirrors `TechnicianPicker` design)

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Implemented all 10 tasks across 11 files (3 new hooks/components, 3 new screens/tests, 5 modified files).
- Tests use WatermelonDB LokiJSAdapter directly (no @testing-library/react-native, matching existing test patterns). 14 new tests pass across 3 test files.
- Pre-existing test failure in `schema.test.ts` (`schema is at version 10`, but v11 since Story 8.1) is unrelated to this story.
- `useAssignJob` uses `''` (empty string) for null assignments per WatermelonDB text field convention — `!j.assignedToId` correctly filters unassigned jobs.
- Reactive dispatch board: WatermelonDB observable queries in `useTeamMembers` and `useJobs` auto-update the board without manual refresh.
- Tech picker shows conditionally (`teamMembers.length > 0`) so solo operators see a clean UI.

### File List

- `apps/mobile/src/hooks/use-team-members.ts` (created)
- `apps/mobile/src/hooks/use-jobs.ts` (modified — added `useAssignJob`)
- `apps/mobile/src/hooks/use-schedule.ts` (modified — added `assignedToId` to `CreateJobParams` and job create)
- `apps/mobile/src/components/jobs/technician-picker.tsx` (created)
- `apps/mobile/src/components/jobs/dispatch-board.tsx` (created)
- `apps/mobile/app/(tabs)/schedule/dispatch.tsx` (created)
- `apps/mobile/app/(tabs)/schedule/index.tsx` (modified — added Dispatch header button)
- `apps/mobile/app/(modals)/create-job.tsx` (modified — added tech assignment picker)
- `apps/mobile/app/(tabs)/jobs/[id].tsx` (modified — added Assigned To row + reassign picker)
- `apps/mobile/src/hooks/use-team-members.test.ts` (created)
- `apps/mobile/src/hooks/use-assign-job.test.ts` (created)
- `apps/mobile/src/components/jobs/dispatch-board.test.tsx` (created)
