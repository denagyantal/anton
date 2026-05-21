# Story 3.1: Calendar View and Job Scheduling

Status: ready-for-dev

## Story

As a tradesperson,
I want to view and manage my schedule on a day calendar and schedule jobs with specific times,
so that I can plan my workday efficiently and never miss an appointment.

## Acceptance Criteria

1. **Given** the user navigates to the Schedule tab, **when** the calendar view loads, **then** they see a day view by default showing time slots with any existing scheduled jobs displayed as event cards showing customer name, job title, and time range. (FR9)

2. **Given** the user taps on an empty time slot or taps "Schedule Job", **when** the job scheduling form opens, **then** they can select a customer (via picker), set a title, choose start and end times (via time picker), and optionally link to an existing approved quote; on save, a `job` record (status `SCHEDULED`) and a linked `schedule_event` record are both created in WatermelonDB atomically via `database.write()`. (FR9)

3. **Given** scheduled jobs exist on the calendar, **when** the user long-presses a job event card and drags it to a different time slot, **then** the `schedule_event` `start_time` and `end_time` are updated in WatermelonDB to the new position and the card re-renders at the new time. (FR10)

4. **Given** the user wants external calendar visibility, **when** they enable Google Calendar or Apple Calendar sync in settings (Settings screen in More tab), **then** the app requests `expo-calendar` permissions; on grant, newly scheduled jobs are created as events in the user's selected external calendar and the `external_calendar_id` is stored on the `schedule_event` record; on disable, future jobs are not synced (existing external events are left as-is). (FR14, NFR21)

5. **Given** the calendar day view is displayed, **when** the user swipes left or right or taps the date header arrows, **then** the view transitions to the adjacent day; newly selected date's jobs load from WatermelonDB within 500ms (NFR3); an empty-state card is shown when no jobs are scheduled for that day.

## Tasks / Subtasks

- [ ] Task 1: Install new dependencies (AC: #1, #3, #4)
  - [ ] 1.1: In `apps/mobile/`: run `npm install react-native-big-calendar` — pure JS library, no native modules, works with Expo Go; installs the calendar component used for day view and drag-and-drop
  - [ ] 1.2: In `apps/mobile/`: run `npx expo install expo-calendar` — Expo-managed native module for Google Calendar (Android) and Apple EventKit (iOS); required for AC #4

- [ ] Task 2: Prisma — add JobStatus enum, Job model, ScheduleEvent model (AC: #2)
  - [ ] 2.1: In `apps/api/prisma/schema.prisma`, add `JobStatus` enum after the existing enums:
    ```prisma
    enum JobStatus {
      QUOTED
      SCHEDULED
      IN_PROGRESS
      COMPLETE
      INVOICED
    }
    ```
  - [ ] 2.2: Add `jobs Job[]` relation to `Account` model (after `quotes Quote[]`); add `jobs Job[]` to `Customer` model (after `quotes Quote[]`); add `job Job?` to `Quote` model (after `quote_photos QuotePhoto[]`); add `assignedJobs Job[]` and `assignedEvents ScheduleEvent[]` to `TeamMember` model
  - [ ] 2.3: Append the `Job` model to `schema.prisma` (see Dev Notes for full model definition)
  - [ ] 2.4: Append the `ScheduleEvent` model to `schema.prisma` (see Dev Notes for full model definition)
  - [ ] 2.5: From `apps/api/`, run `npx prisma migrate dev --name add-jobs-and-schedule-events` to create the migration file and apply it
  - [ ] 2.6: Run `npx prisma generate` to regenerate the Prisma client with new models

- [ ] Task 3: WatermelonDB schema — bump to version 6 (AC: #2)
  - [ ] 3.1: In `apps/mobile/src/db/schema.ts`, change `version: 5` to `version: 6`
  - [ ] 3.2: Add the `jobs` tableSchema to the tables array (see Dev Notes for column list)
  - [ ] 3.3: Add the `schedule_events` tableSchema to the tables array (see Dev Notes for column list)

- [ ] Task 4: WatermelonDB migration v5 → v6 (AC: #2)
  - [ ] 4.1: In `apps/mobile/src/db/migrations.ts`, prepend a new migration object at the TOP of the `migrations` array (migrations are listed newest-first):
    ```typescript
    {
      toVersion: 6,
      steps: [
        createTable({ name: 'jobs', columns: [...] }),     // see Dev Notes
        createTable({ name: 'schedule_events', columns: [...] }),
      ],
    },
    ```
  - [ ] 4.2: Do NOT modify existing migration entries for versions 2–5 — they must remain unchanged

- [ ] Task 5: Create WatermelonDB model files (AC: #2, #3)
  - [ ] 5.1: Create `apps/mobile/src/db/models/job.ts` — see Dev Notes for full implementation
  - [ ] 5.2: Create `apps/mobile/src/db/models/schedule-event.ts` — see Dev Notes for full implementation

- [ ] Task 6: Register new models in db/index.ts (AC: #2)
  - [ ] 6.1: In `apps/mobile/src/db/index.ts`, import `Job` from `./models/job` and `ScheduleEvent` from `./models/schedule-event`
  - [ ] 6.2: Add both `Job` and `ScheduleEvent` to the `modelClasses` array: `modelClasses: [PricebookItem, Customer, Quote, LineItem, QuotePhoto, Job, ScheduleEvent]`

- [ ] Task 7: Create use-schedule.ts hook (AC: #1, #2, #3, #5)
  - [ ] 7.1: Create `apps/mobile/src/hooks/use-schedule.ts` — export `useScheduleEvents(date: Date)` that returns `{ events: ScheduleEvent[], isLoading: boolean }` filtered by account_id and the selected day (start_time between midnight and 23:59:59 of `date`)
  - [ ] 7.2: Export `useCreateJob()` that returns a `createJob(params)` async function — wraps `database.write()` to atomically create a `job` record + linked `schedule_event` record (see Dev Notes for write pattern)
  - [ ] 7.3: Export `useRescheduleJob()` that returns a `rescheduleEvent(eventId, newStart, newEnd)` async function — wraps `database.write()` to update the `schedule_event` start_time/end_time and the linked `job` scheduled_start/scheduled_end
  - [ ] 7.4: Create `apps/mobile/src/hooks/use-schedule.test.ts` — mock database and auth contexts; test that `useScheduleEvents` subscribes to correct query conditions; test that `useCreateJob` writes both a job and a schedule_event atomically

- [ ] Task 8: Create calendar-service.ts for Google/Apple Calendar sync (AC: #4)
  - [ ] 8.1: Create `apps/mobile/src/services/calendar-service.ts` — export `requestCalendarPermission(): Promise<boolean>` using `Calendar.requestCalendarPermissionsAsync()` from `expo-calendar`
  - [ ] 8.2: Export `getDefaultCalendarId(): Promise<string | null>` — calls `Calendar.getCalendarsAsync('event')`, returns the `id` of the first writable calendar, or null if none found; on iOS, looks for `Calendar.EntityTypes.EVENT`; on Android, looks for `accessLevel === 'owner'`
  - [ ] 8.3: Export `createExternalCalendarEvent(params: { title: string; startTime: Date; endTime: Date; notes?: string; calendarId: string }): Promise<string | null>` — calls `Calendar.createEventAsync(calendarId, eventDetails)` and returns the external event id; on error logs with `console.warn` and returns null (never throw — external calendar sync failure must not block job creation)
  - [ ] 8.4: Wrap ALL `expo-calendar` calls in try/catch — failures must be silent and non-blocking

- [ ] Task 9: Create schedule UI components (AC: #1, #3, #5)
  - [ ] 9.1: Create `apps/mobile/src/components/schedule/event-card.tsx` — a component that receives `event: ScheduleEvent`, `customerName: string`, `jobTitle: string`, and renders a colored card with the job title, customer name, and formatted time range (e.g., "9:00 AM – 10:30 AM"); uses `StyleSheet.create` (no NativeWind)
  - [ ] 9.2: Create `apps/mobile/src/components/schedule/calendar-view.tsx` — wraps `BigCalendar` from `react-native-big-calendar` in day mode; receives `events: CalendarEventShape[]`, `date: Date`, `onDayChange: (d: Date) => void`, `onPressCell: (d: Date) => void`, `onEventDrop: (event, newStart, newEnd) => void`; sets `draggable={true}` and `mode="day"`; see Dev Notes for the exact `CalendarEventShape` type and BigCalendar props

- [ ] Task 10: Add Schedule tab to tabs layout (AC: #1)
  - [ ] 10.1: In `apps/mobile/app/(tabs)/_layout.tsx`, add a new `<Tabs.Screen name="schedule" options={{ title: 'Schedule', headerShown: false }} />` between the `index` (Jobs) and `customers` tab entries — resulting in tab order: Jobs | Schedule | Customers | More

- [ ] Task 11: Create the schedule screen (AC: #1, #2, #3, #5)
  - [ ] 11.1: Create directory `apps/mobile/app/(tabs)/schedule/`
  - [ ] 11.2: Create `apps/mobile/app/(tabs)/schedule/index.tsx` — the main schedule screen (see Dev Notes for implementation outline):
    - State: `selectedDate` (Date, default today), `isCreating` (boolean)
    - Data: `useScheduleEvents(selectedDate)` → events array
    - Map ScheduleEvent records to `CalendarEventShape[]` for BigCalendar (join with customer names via a separate query)
    - Handle `onPressCell(date)` → open create-job modal with pre-filled time
    - Handle `onEventDrop(event, newStart, newEnd)` → call `rescheduleEvent()`
    - Show an empty-state card ("No jobs today") when events array is empty and not loading
    - "Schedule Job" button in the header right

- [ ] Task 12: Create create-job modal (AC: #2)
  - [ ] 12.1: Create `apps/mobile/app/(modals)/create-job.tsx` — form with: customer picker (reuse `CustomerPicker` component from `src/components/customers/customer-picker.tsx`), title text input, start/end time pickers (via `DateTimePickerAndroid` / iOS `DateTimePicker` from `@react-native-community/datetimepicker` which is already installed via Expo), optional quote ID field (simple text input for MVP), notes field; on submit calls `createJob()` from `useCreateJob()` hook; if external calendar sync is enabled in settings, calls `createExternalCalendarEvent()` and stores the returned id on the schedule_event; on success dismisses modal and shows a brief toast "Job Scheduled"; see Dev Notes for how to check sync preference
  - [ ] 12.2: Read the existing `CustomerPicker` component at `apps/mobile/src/components/customers/customer-picker.tsx` before implementing — reuse it exactly as other quote screens do

- [ ] Task 13: Update More tab — add calendar sync toggle to settings (AC: #4)
  - [ ] 13.1: In `apps/mobile/app/(tabs)/more/index.tsx`, add a "Calendar Sync" section with a toggle switch; store the user's preference in AsyncStorage under key `'calendarSyncEnabled'`; when toggled ON, call `requestCalendarPermission()` and then `getDefaultCalendarId()` — if permission denied, show Alert and revert toggle; store the selected `calendarId` in AsyncStorage under `'externalCalendarId'`

## Dev Notes

### Architecture Compliance

- **WatermelonDB is the only local data store.** Never make direct API calls to create jobs or schedule events from the mobile app — always use `database.write()`. These entities will be synced to the server later via the sync engine (Epic 6).
- **Atomic writes:** Job + ScheduleEvent must be created in a single `database.write()` call to guarantee consistency. If one fails, both fail.
- **No NativeWind.** Use `StyleSheet.create` for all styling — same pattern as all prior stories.
- **Calendar sync is non-blocking.** External calendar failures must never prevent job creation. Always wrap `expo-calendar` calls in try/catch.
- **Money is not involved in this story.** No integer-cents handling needed.
- **All timestamps in WatermelonDB are stored as numeric milliseconds** (Date.getTime()). The `date` decorator converts to/from Date objects; `field` stores raw numbers.

### Prisma — Full Job Model

Add to `apps/api/prisma/schema.prisma`:

```prisma
model Job {
  id             String     @id @default(uuid())
  accountId      String     @map("account_id")
  customerId     String     @map("customer_id")
  quoteId        String?    @map("quote_id")
  assignedToId   String?    @map("assigned_to_id")
  status         JobStatus  @default(SCHEDULED)
  title          String
  description    String?
  scheduledStart DateTime?  @map("scheduled_start")
  scheduledEnd   DateTime?  @map("scheduled_end")
  completedAt    DateTime?  @map("completed_at")
  signatureUrl   String?    @map("signature_url")
  notes          String?
  createdAt      DateTime   @default(now()) @map("created_at")
  updatedAt      DateTime   @updatedAt @map("updated_at")
  syncedAt       DateTime?  @map("synced_at")

  account         Account        @relation(fields: [accountId], references: [id])
  customer        Customer       @relation(fields: [customerId], references: [id])
  quote           Quote?         @relation(fields: [quoteId], references: [id])
  assignedTo      TeamMember?    @relation("AssignedJobs", fields: [assignedToId], references: [id])
  schedule_events ScheduleEvent[]

  @@index([accountId], name: "idx_jobs_account_id")
  @@index([customerId], name: "idx_jobs_customer_id")
  @@map("jobs")
}
```

### Prisma — Full ScheduleEvent Model

```prisma
model ScheduleEvent {
  id                 String    @id @default(uuid())
  accountId          String    @map("account_id")
  jobId              String?   @map("job_id")
  assignedToId       String?   @map("assigned_to_id")
  title              String
  startTime          DateTime  @map("start_time")
  endTime            DateTime  @map("end_time")
  allDay             Boolean   @default(false) @map("all_day")
  reminderMinutes    Int       @default(1440) @map("reminder_minutes")
  reminderSent       Boolean   @default(false) @map("reminder_sent")
  externalCalendarId String?   @map("external_calendar_id")
  createdAt          DateTime  @default(now()) @map("created_at")
  updatedAt          DateTime  @updatedAt @map("updated_at")
  syncedAt           DateTime? @map("synced_at")

  account    Account     @relation(fields: [accountId], references: [id])
  job        Job?        @relation(fields: [jobId], references: [id])
  assignedTo TeamMember? @relation("AssignedEvents", fields: [assignedToId], references: [id])

  @@index([accountId], name: "idx_schedule_events_account_id")
  @@index([jobId], name: "idx_schedule_events_job_id")
  @@map("schedule_events")
}
```

### Prisma — Back-Relations to Add to Existing Models

```prisma
// In Account model — add after quotes Quote[]:
jobs           Job[]
scheduleEvents ScheduleEvent[]

// In Customer model — add after quotes Quote[]:
jobs Job[]

// In Quote model — add after quote_photos QuotePhoto[]:
job Job?

// In TeamMember model — add before @@map("team_members"):
assignedJobs   Job[]            @relation("AssignedJobs")
assignedEvents ScheduleEvent[]  @relation("AssignedEvents")
```

### WatermelonDB Schema v6 — New Tables

Add to `apps/mobile/src/db/schema.ts` inside the `tables` array:

```typescript
tableSchema({
  name: 'jobs',
  columns: [
    { name: 'account_id', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'quote_id', type: 'string', isOptional: true },
    { name: 'assigned_to_id', type: 'string', isOptional: true },
    { name: 'status', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string', isOptional: true },
    { name: 'scheduled_start', type: 'number', isOptional: true },
    { name: 'scheduled_end', type: 'number', isOptional: true },
    { name: 'completed_at', type: 'number', isOptional: true },
    { name: 'signature_url', type: 'string', isOptional: true },
    { name: 'notes', type: 'string', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
}),
tableSchema({
  name: 'schedule_events',
  columns: [
    { name: 'account_id', type: 'string' },
    { name: 'job_id', type: 'string', isOptional: true },
    { name: 'assigned_to_id', type: 'string', isOptional: true },
    { name: 'title', type: 'string' },
    { name: 'start_time', type: 'number' },
    { name: 'end_time', type: 'number' },
    { name: 'all_day', type: 'boolean' },
    { name: 'reminder_minutes', type: 'number' },
    { name: 'reminder_sent', type: 'boolean' },
    { name: 'external_calendar_id', type: 'string', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
}),
```

### WatermelonDB Migration v5 → v6

Prepend to the FRONT of the migrations array in `apps/mobile/src/db/migrations.ts` (newest migration goes first):

```typescript
{
  toVersion: 6,
  steps: [
    createTable({
      name: 'jobs',
      columns: [
        { name: 'account_id', type: 'string' },
        { name: 'customer_id', type: 'string' },
        { name: 'quote_id', type: 'string', isOptional: true },
        { name: 'assigned_to_id', type: 'string', isOptional: true },
        { name: 'status', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'scheduled_start', type: 'number', isOptional: true },
        { name: 'scheduled_end', type: 'number', isOptional: true },
        { name: 'completed_at', type: 'number', isOptional: true },
        { name: 'signature_url', type: 'string', isOptional: true },
        { name: 'notes', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    createTable({
      name: 'schedule_events',
      columns: [
        { name: 'account_id', type: 'string' },
        { name: 'job_id', type: 'string', isOptional: true },
        { name: 'assigned_to_id', type: 'string', isOptional: true },
        { name: 'title', type: 'string' },
        { name: 'start_time', type: 'number' },
        { name: 'end_time', type: 'number' },
        { name: 'all_day', type: 'boolean' },
        { name: 'reminder_minutes', type: 'number' },
        { name: 'reminder_sent', type: 'boolean' },
        { name: 'external_calendar_id', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
},
```

### WatermelonDB Model — job.ts

```typescript
// apps/mobile/src/db/models/job.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Job extends Model {
  static table = 'jobs';

  @text('account_id') accountId!: string;
  @text('customer_id') customerId!: string;
  @text('quote_id') quoteId!: string;
  @text('assigned_to_id') assignedToId!: string;
  @text('status') status!: string;
  @text('title') title!: string;
  @text('description') description!: string;
  @field('scheduled_start') scheduledStart!: number | null;
  @field('scheduled_end') scheduledEnd!: number | null;
  @field('completed_at') completedAt!: number | null;
  @text('signature_url') signatureUrl!: string;
  @text('notes') notes!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

### WatermelonDB Model — schedule-event.ts

```typescript
// apps/mobile/src/db/models/schedule-event.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class ScheduleEvent extends Model {
  static table = 'schedule_events';

  @text('account_id') accountId!: string;
  @text('job_id') jobId!: string;
  @text('assigned_to_id') assignedToId!: string;
  @text('title') title!: string;
  @field('start_time') startTime!: number;
  @field('end_time') endTime!: number;
  @field('all_day') allDay!: boolean;
  @field('reminder_minutes') reminderMinutes!: number;
  @field('reminder_sent') reminderSent!: boolean;
  @text('external_calendar_id') externalCalendarId!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

### use-schedule.ts — Key Implementation

```typescript
// apps/mobile/src/hooks/use-schedule.ts
import { useState, useEffect, useCallback } from 'react';
import { Q } from '@nozbe/watermelondb';
import { v4 as uuidv4 } from 'uuid';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import ScheduleEvent from '../db/models/schedule-event';
import Job from '../db/models/job';

export function useScheduleEvents(date: Date) {
  const database = useDatabase();
  const { user } = useAuth();
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) { setEvents([]); setIsLoading(false); return; }

    const dayStart = new Date(date); dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(date); dayEnd.setHours(23, 59, 59, 999);

    const subscription = database
      .get<ScheduleEvent>('schedule_events')
      .query(
        Q.where('account_id', user.accountId),
        Q.where('start_time', Q.gte(dayStart.getTime())),
        Q.where('start_time', Q.lte(dayEnd.getTime())),
        Q.sortBy('start_time', Q.asc),
      )
      .observe()
      .subscribe((records) => { setEvents(records); setIsLoading(false); });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId, date.toDateString()]);

  return { events, isLoading };
}

interface CreateJobParams {
  customerId: string;
  title: string;
  startTime: Date;
  endTime: Date;
  quoteId?: string;
  notes?: string;
  externalCalendarId?: string;
}

export function useCreateJob() {
  const database = useDatabase();
  const { user } = useAuth();

  const createJob = useCallback(async (params: CreateJobParams): Promise<{ job: Job; event: ScheduleEvent }> => {
    if (!user?.accountId) throw new Error('Not authenticated');

    let createdJob!: Job;
    let createdEvent!: ScheduleEvent;

    await database.write(async () => {
      createdJob = await database.get<Job>('jobs').create((record) => {
        record._raw.id = uuidv4();
        record.accountId = user.accountId;
        record.customerId = params.customerId;
        record.quoteId = params.quoteId ?? '';
        record.status = 'SCHEDULED';
        record.title = params.title;
        record.scheduledStart = params.startTime.getTime();
        record.scheduledEnd = params.endTime.getTime();
        record.notes = params.notes ?? '';
      });

      createdEvent = await database.get<ScheduleEvent>('schedule_events').create((record) => {
        record._raw.id = uuidv4();
        record.accountId = user.accountId;
        record.jobId = createdJob.id;
        record.title = params.title;
        record.startTime = params.startTime.getTime();
        record.endTime = params.endTime.getTime();
        record.allDay = false;
        record.reminderMinutes = 1440; // 24 hours default
        record.reminderSent = false;
        record.externalCalendarId = params.externalCalendarId ?? '';
      });
    });

    return { job: createdJob, event: createdEvent };
  }, [database, user?.accountId]);

  return { createJob };
}

export function useRescheduleJob() {
  const database = useDatabase();

  const rescheduleEvent = useCallback(async (
    eventId: string,
    jobId: string,
    newStart: Date,
    newEnd: Date,
  ): Promise<void> => {
    await database.write(async () => {
      const event = await database.get<ScheduleEvent>('schedule_events').find(eventId);
      await event.update((record) => {
        record.startTime = newStart.getTime();
        record.endTime = newEnd.getTime();
      });
      if (jobId) {
        const job = await database.get<Job>('jobs').find(jobId);
        await job.update((record) => {
          record.scheduledStart = newStart.getTime();
          record.scheduledEnd = newEnd.getTime();
        });
      }
    });
  }, [database]);

  return { rescheduleEvent };
}
```

### BigCalendar Integration — calendar-view.tsx

```typescript
// apps/mobile/src/components/schedule/calendar-view.tsx
import BigCalendar from 'react-native-big-calendar';
import { View, StyleSheet } from 'react-native';

export type CalendarEventShape = {
  id: string;         // schedule_event id
  jobId: string;
  title: string;
  start: Date;
  end: Date;
  customerName: string;
};

interface CalendarViewProps {
  events: CalendarEventShape[];
  date: Date;
  onDayChange: (date: Date) => void;
  onPressCell: (date: Date) => void;
  onEventDrop: (event: CalendarEventShape, newStart: Date, newEnd: Date) => Promise<void>;
}

export function CalendarView({ events, date, onDayChange, onPressCell, onEventDrop }: CalendarViewProps) {
  return (
    <View style={styles.container}>
      <BigCalendar
        mode="day"
        events={events}
        date={date}
        onPressCell={onPressCell}
        onEventDrop={onEventDrop}
        draggable
        height={600}
        swipeEnabled
        onSwipeEnd={(d) => onDayChange(d)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
```

**BigCalendar version to install:** `npm install react-native-big-calendar` — installs the latest v4.x. The `draggable` and `onEventDrop` props are available in v4.6+. The `onSwipeEnd` prop triggers with the new date when user swipes. Check the installed version with `npm list react-native-big-calendar` after install; if below 4.6, run `npm install react-native-big-calendar@latest`.

**Note:** `react-native-big-calendar` internally uses `react-native-gesture-handler` for drag gestures, which is already included in Expo SDK 52. No additional native setup is needed.

### Create-Job Modal — Key Points

```typescript
// apps/mobile/app/(modals)/create-job.tsx
// Read AsyncStorage for 'calendarSyncEnabled' and 'externalCalendarId' at mount
// Use DateTimePicker from @react-native-community/datetimepicker (already in Expo)
// On successful save:
//   1. Call createJob(params) from useCreateJob()
//   2. If calendarSyncEnabled === 'true' && externalCalendarId:
//      - Call createExternalCalendarEvent({ title, startTime, endTime, notes, calendarId: externalCalendarId })
//      - If returned id is non-null, call rescheduleEvent() to update externalCalendarId on the schedule_event
//   3. router.back() to dismiss modal

import AsyncStorage from '@react-native-async-storage/async-storage';
// Note: AsyncStorage is bundled with Expo — no separate install needed
```

### calendar-service.ts — expo-calendar Pattern

```typescript
// apps/mobile/src/services/calendar-service.ts
import * as Calendar from 'expo-calendar';
import { Platform } from 'react-native';

export async function requestCalendarPermission(): Promise<boolean> {
  try {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    return status === 'granted';
  } catch {
    return false;
  }
}

export async function getDefaultCalendarId(): Promise<string | null> {
  try {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const writable = calendars.find((cal) =>
      Platform.OS === 'ios'
        ? cal.allowsModifications
        : cal.accessLevel === 'owner' && cal.allowsModifications,
    );
    return writable?.id ?? null;
  } catch {
    return null;
  }
}

export async function createExternalCalendarEvent(params: {
  title: string;
  startTime: Date;
  endTime: Date;
  notes?: string;
  calendarId: string;
}): Promise<string | null> {
  try {
    const eventId = await Calendar.createEventAsync(params.calendarId, {
      title: params.title,
      startDate: params.startTime,
      endDate: params.endTime,
      notes: params.notes,
      alarms: [{ relativeOffset: -60 }], // 1 hour before
    });
    return eventId;
  } catch (err) {
    console.warn('[calendar-service] createExternalCalendarEvent failed:', err);
    return null;
  }
}
```

### Customer Name Join Pattern (schedule/index.tsx)

The `schedule_events` table does not store `customer_name` directly — it stores `job_id`, and the job stores `customer_id`. To display customer names on event cards, query customers separately and join in memory:

```typescript
// In schedule/index.tsx
const { events: rawEvents, isLoading } = useScheduleEvents(selectedDate);
const { customers } = useCustomers(); // from existing use-customers.ts hook

const calendarEvents: CalendarEventShape[] = rawEvents.map((ev) => {
  // Find the customer by traversing job → customer
  // For MVP: fetch all account customers (they're in WatermelonDB already)
  // then look up by the job's customerId stored on the event's related job
  // Since WatermelonDB doesn't do JOIN, store customerId directly on schedule_event
  // OR do a two-step query
  return {
    id: ev.id,
    jobId: ev.jobId,
    title: ev.title,
    start: new Date(ev.startTime),
    end: new Date(ev.endTime),
    customerName: '', // populated via secondary query — see below
  };
});
```

**Recommended MVP approach:** Store `customer_id` on `schedule_event` as well (add it to both the WatermelonDB schema and the `createJob` write). This allows a direct look-up without needing to load the Job record first. Add `customer_id` as an optional string column to `schedule_events` in both `schema.ts` and the migration step. The `CalendarView` can then join via `useCustomers()`.

Alternatively, for simplicity, the event `title` can include the customer name: when creating the job, set `schedule_event.title = "{customerName} – {jobTitle}"`. This avoids needing a join entirely and is perfectly acceptable for MVP. **This is the recommended approach for Story 3.1.**

### Testing Pattern (from prior stories)

```typescript
// apps/mobile/src/hooks/use-schedule.test.ts
// Mock database-context and auth-context the same way use-quotes.test.ts does
// Key assertions:
// - useScheduleEvents filters by account_id and day boundaries
// - useCreateJob writes BOTH a job record AND a schedule_event in one database.write() call
// - useRescheduleJob updates start_time/end_time on both the schedule_event and the job
```

Look at `apps/mobile/src/hooks/use-quotes.test.ts` for the exact mock setup pattern before writing tests.

### Prior Story Learnings (from Story 2.4)

- **`v4 as uuidv4` import**: Use `import { v4 as uuidv4 } from 'uuid'` for record ID generation in `database.write()` via `record._raw.id = uuidv4()`
- **No NativeWind**: All StyleSheet.create, no className props
- **Auth context user object** has `.accountId` (not nested under `.user_metadata`)
- **api-client pattern**: Not needed for this story — all data is local WatermelonDB writes
- **`database.write()` returns the records** — use those return values directly instead of re-querying

### Project Structure Notes

Files to CREATE:
```
apps/mobile/src/db/models/job.ts                          NEW
apps/mobile/src/db/models/schedule-event.ts               NEW
apps/mobile/src/hooks/use-schedule.ts                     NEW
apps/mobile/src/hooks/use-schedule.test.ts                NEW
apps/mobile/src/services/calendar-service.ts              NEW
apps/mobile/src/components/schedule/calendar-view.tsx     NEW
apps/mobile/src/components/schedule/event-card.tsx        NEW
apps/mobile/app/(tabs)/schedule/index.tsx                 NEW
apps/mobile/app/(modals)/create-job.tsx                   NEW
```

Files to MODIFY:
```
apps/mobile/src/db/schema.ts                              MODIFIED (v5 → v6, add 2 tables)
apps/mobile/src/db/migrations.ts                          MODIFIED (prepend v6 migration)
apps/mobile/src/db/index.ts                               MODIFIED (register Job, ScheduleEvent)
apps/mobile/app/(tabs)/_layout.tsx                        MODIFIED (add Schedule tab)
apps/mobile/app/(tabs)/more/index.tsx                     MODIFIED (add Calendar Sync toggle)
apps/api/prisma/schema.prisma                             MODIFIED (add Job, ScheduleEvent, JobStatus)
```

All paths are relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 3.1] — All acceptance criteria, FR9, FR10, FR14, NFR3, NFR21
- [Source: planning/architecture.md#Data Architecture] — WatermelonDB schema v6; LokiJSAdapter; `jobs` and `schedule_events` data models with all columns
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — WatermelonDB observables pattern; no Redux; React Context for auth/sync/network only; feature-based folder structure
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB columns, camelCase TypeScript, kebab-case files
- [Source: planning/architecture.md#Implementation Patterns] — `database.write()` for all mobile writes; WatermelonDB as source of truth; never direct API calls for CRUD
- [Source: planning/architecture.md#Project Structure] — `app/(tabs)/schedule/`, `src/components/schedule/`, `src/hooks/use-schedule.ts`, `src/services/calendar-service.ts`
- [Source: planning/architecture.md#Integration Points] — Google Calendar API v3 and Apple EventKit via `expo-calendar` (unified mobile API); calendar sync is mobile-side only
- [Source: stories/2-4-quote-sms-delivery-and-customer-approval.md] — `uuid` usage via `record._raw.id = uuidv4()`; auth-context `.accountId` field; no NativeWind; StyleSheet.create; `database.write()` return value pattern
- [Source: apps/mobile/src/db/schema.ts] — Current schema version 5 (bump to 6); existing table patterns; column type conventions
- [Source: apps/mobile/src/db/migrations.ts] — Migration format; newest migration goes first in array
- [Source: apps/mobile/src/hooks/use-quotes.ts] — Observable subscribe pattern; Q.where / Q.sortBy usage; auth context access

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
