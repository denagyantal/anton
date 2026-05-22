# Story 3.4: Automated SMS Appointment Reminders

Status: ready-for-dev

## Story

As a tradesperson,
I want the system to automatically text my customers before their appointments,
so that I have fewer no-shows and don't have to remember to call each customer.

## Acceptance Criteria

1. **[Reminder SMS sent at configured time]** Given a job is scheduled with a future start time and `reminder_sent = false` on the linked `schedule_event`, when the server-side background job runs and `startTime - reminderMinutes` minutes <= now, then an SMS is sent to the customer's phone via Twilio containing the business name, appointment date, and time, and `schedule_events.reminder_sent` is updated to `true` in PostgreSQL. (FR11, FR48)

2. **[Configure reminder timing in Settings]** Given the user navigates to the More tab (Settings), when they view the "Notifications" section, then they see three reminder timing options: "1 hour before" (60 min), "2 hours before" (120 min), "24 hours before" (1440 min), with the current selection indicated by a blue checkmark (✓). (FR49)

3. **[Saved preference applied to new jobs]** Given the user has selected "2 hours before" as their reminder preference, when they schedule a new job via the create-job form, then the resulting `schedule_events` record in WatermelonDB has `reminder_minutes = 120`. (FR49)

4. **[Reminder reset when job is rescheduled]** Given a job's schedule event already has `reminder_sent = true` (a reminder was already sent), when the user drags the event to a new time and `useRescheduleJob()` saves the change, then `schedule_events.reminder_sent` is reset to `false` so a new reminder is queued for the updated time. (FR11)

5. **[SMS dispatched within 60 seconds of trigger]** Given the API server is running and a reminder is due (trigger time has passed), when the background job's `processReminders()` runs, then the Twilio SMS call is made within 60 seconds of the trigger time becoming active (the job polls every 60 seconds). (NFR5, NFR19)

6. **[Reminder skipped for missing customer phone]** Given a scheduled event has a linked job but the customer record has no phone number, when the background job processes that event, then no SMS is attempted and `reminder_sent` remains `false`. (Safety guard)

7. **[All-day events excluded from reminders]** Given a scheduled event has `all_day = true`, when the background job processes reminders, then the event is excluded — no SMS is sent and `reminder_sent` is not modified.

## Tasks / Subtasks

### Mobile: Reminder Settings UI

- [ ] Task 1: Add "Notifications" section to the Settings screen (AC: #2, #3)
  - [ ] 1.1: In `apps/mobile/app/(tabs)/more/index.tsx`, add `reminderMinutes` state: `const [reminderMinutes, setReminderMinutes] = useState<number>(1440)`
  - [ ] 1.2: In the existing `useEffect` (or a new one), load stored value: `AsyncStorage.getItem('reminderMinutes').then(v => { if (v) setReminderMinutes(parseInt(v, 10)); })`
  - [ ] 1.3: Define the options array at module level (outside the component): `const REMINDER_OPTIONS = [{ label: '1 hour before', value: 60 }, { label: '2 hours before', value: 120 }, { label: '24 hours before', value: 1440 }]`
  - [ ] 1.4: Add `async function handleReminderSelect(minutes: number)` that calls `await AsyncStorage.setItem('reminderMinutes', String(minutes))` then `setReminderMinutes(minutes)`
  - [ ] 1.5: After the existing Calendar section, add a `<Text style={styles.sectionHeader}>Notifications</Text>` header
  - [ ] 1.6: Render the three options as `<TouchableOpacity style={styles.row}` rows; each row shows the label on the left and a `✓` in `#2563eb` on the right when `reminderMinutes === option.value`
  - [ ] 1.7: No NativeWind — use `StyleSheet.create` only (all styles already in the file)

### Mobile: Apply Preference When Creating Jobs

- [ ] Task 2: Read stored `reminderMinutes` preference in `useCreateJob()` (AC: #3)
  - [ ] 2.1: In `apps/mobile/src/hooks/use-schedule.ts`, add import: `import AsyncStorage from '@react-native-async-storage/async-storage';`
  - [ ] 2.2: In `useCreateJob()` inside the `createJob` callback, before `database.write(...)`, add: `const storedMinutes = await AsyncStorage.getItem('reminderMinutes'); const reminderMins = storedMinutes ? parseInt(storedMinutes, 10) : 1440;`
  - [ ] 2.3: In the `schedule_events` record creation, replace `record.reminderMinutes = 1440` with `record.reminderMinutes = reminderMins`

### Mobile: Reset `reminder_sent` on Reschedule

- [ ] Task 3: Reset `reminderSent` flag in `useRescheduleJob()` (AC: #4)
  - [ ] 3.1: In `useRescheduleJob()` in `use-schedule.ts`, inside the `event.update(...)` callback, add `record.reminderSent = false;` after the `startTime`/`endTime` assignments

### API: Background Reminder Job

- [ ] Task 4: Create `apps/api/src/jobs/reminder-sender.ts` (AC: #1, #5, #6, #7)
  - [ ] 4.1: Create the file with two exports: `processReminders()` (async, the core logic) and `startReminderJob()` (starts the polling loop)
  - [ ] 4.2: In `processReminders()`, query Prisma for all due candidates:
    ```typescript
    const now = new Date();
    const events = await prisma.scheduleEvent.findMany({
      where: { reminderSent: false, allDay: false, startTime: { gt: now } },
      include: {
        account: { select: { businessName: true } },
        job: { include: { customer: { select: { phone: true, name: true } } } },
      },
    });
    ```
  - [ ] 4.3: Filter to events where trigger time has passed: `e.startTime.getTime() - e.reminderMinutes * 60_000 <= now.getTime()`
  - [ ] 4.4: For each due event, skip (with `continue`) if `!event.job?.customer?.phone` (AC: #6)
  - [ ] 4.5: Build the SMS message string: `Reminder from ${businessName}: You have an appointment on ${date} at ${time}. Reply STOP to opt out.` — use `toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })` for date and `toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })` for time on `event.startTime`
  - [ ] 4.6: Call `await sendSms(event.job.customer.phone, message)` (import from `'../services/sms-service.js'`)
  - [ ] 4.7: On success, call `await prisma.scheduleEvent.update({ where: { id: event.id }, data: { reminderSent: true } })`
  - [ ] 4.8: Wrap each event's processing in `try { ... } catch (err) { console.error('[reminder-sender] Failed for event ${event.id}:', err); }` — never abort the batch on a single failure
  - [ ] 4.9: In `startReminderJob()`, call `processReminders()` immediately (wrapped in `.catch`), then use `setInterval(() => processReminders().catch(...), 60_000)` for subsequent runs

- [ ] Task 5: Wire reminder job into API server startup (AC: #5)
  - [ ] 5.1: In `apps/api/src/index.ts`, import `startReminderJob` from `'./jobs/reminder-sender.js'`
  - [ ] 5.2: Inside the existing `if (process.env['NODE_ENV'] !== 'test')` block, add `startReminderJob();` after the `app.listen(...)` call

- [ ] Task 6: Write tests for `reminder-sender.ts` (AC: #1, #6, #7)
  - [ ] 6.1: Create `apps/api/src/jobs/reminder-sender.test.ts`
  - [ ] 6.2: Mock `'../config/prisma.js'` and `'../services/sms-service.js'` using `jest.mock()`
  - [ ] 6.3: Create a `makeEvent()` factory that returns a valid event with `account.businessName`, `job.customer.phone`, `reminderMinutes = 1440`, `allDay = false`, `reminderSent = false`, `startTime` set to 30 minutes from now (making it immediately due for a 1440-min reminder? No — set `startTime` to 1 hour from now and `reminderMinutes = 60` to make it due)
  - [ ] 6.4: Test: event due (triggerTime <= now, has phone, not allDay) → `sendSms` called once with correct phone, `prisma.scheduleEvent.update` called with `{ reminderSent: true }`
  - [ ] 6.5: Test: event NOT yet due (startTime is 3 hours away, reminderMinutes = 60) → `sendSms` NOT called
  - [ ] 6.6: Test: event with `allDay = true` → event never returned by the Prisma query mock (mock returns empty array for allDay:true); assert `sendSms` not called
  - [ ] 6.7: Test: due event with no customer phone (`event.job.customer.phone = ''` or `null`) → `sendSms` NOT called, `prisma.scheduleEvent.update` NOT called
  - [ ] 6.8: Test: `sendSms` throws on first event, second event still processed → both `sendSms` calls attempted, only second event's `update` called with `reminderSent: true`

## Dev Notes

### No Schema Migrations Required

Both WatermelonDB (schema v7) and Prisma already have `reminder_minutes` and `reminder_sent` on `schedule_events`. This story is pure business logic — no DB or schema changes needed.

**WatermelonDB schema (confirmed v7):** `schedule_events` has `{ name: 'reminder_minutes', type: 'number' }` and `{ name: 'reminder_sent', type: 'boolean' }`.

**Prisma schema (confirmed):** `ScheduleEvent` has `reminderMinutes Int @default(1440)` and `reminderSent Boolean @default(false)`.

**`ScheduleEvent` model (mobile):** `@field('reminder_minutes') reminderMinutes!: number` and `@field('reminder_sent') reminderSent!: boolean` already declared.

### Background Job — `setInterval` Approach

The architecture names `apps/api/src/jobs/reminder-sender.ts` as a background job. For MVP, use `setInterval` in the Express process (no Redis, Bull, or external runner):

```typescript
// apps/api/src/jobs/reminder-sender.ts
import { prisma } from '../config/prisma.js';
import { sendSms } from '../services/sms-service.js';

export async function processReminders(): Promise<void> {
  const now = new Date();

  const events = await prisma.scheduleEvent.findMany({
    where: {
      reminderSent: false,
      allDay: false,
      startTime: { gt: now },
    },
    include: {
      account: { select: { businessName: true } },
      job: {
        include: {
          customer: { select: { phone: true, name: true } },
        },
      },
    },
  });

  const dueEvents = events.filter(
    (e) => e.startTime.getTime() - e.reminderMinutes * 60_000 <= now.getTime(),
  );

  for (const event of dueEvents) {
    try {
      if (!event.job?.customer?.phone) continue;

      const businessName = event.account.businessName ?? 'Your Service Provider';
      const apptDate = event.startTime.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      const apptTime = event.startTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const message =
        `Reminder from ${businessName}: You have an appointment on ${apptDate} at ${apptTime}. Reply STOP to opt out.`;

      await sendSms(event.job.customer.phone, message);
      await prisma.scheduleEvent.update({
        where: { id: event.id },
        data: { reminderSent: true },
      });
    } catch (err) {
      console.error(`[reminder-sender] Failed for event ${event.id}:`, err);
    }
  }
}

export function startReminderJob(): void {
  processReminders().catch((err) =>
    console.error('[reminder-sender] Initial run failed:', err),
  );
  setInterval(() => {
    processReminders().catch((err) =>
      console.error('[reminder-sender] Scheduled run failed:', err),
    );
  }, 60_000);
}
```

### SMS Message — TCPA Compliance

Always include "Reply STOP to opt out." in the SMS body. This is legally required for commercial SMS in the US under TCPA. Twilio also enforces this for toll-free/short-code senders.

Example message:
```
Reminder from Smith HVAC: You have an appointment on Tue May 26 at 2:00 PM. Reply STOP to opt out.
```

### Wiring into `index.ts`

The existing `index.ts` already has a `process.env['NODE_ENV'] !== 'test'` guard for `app.listen`. Add `startReminderJob()` inside that same block:

```typescript
if (process.env['NODE_ENV'] !== 'test') {
  const port = parseInt(process.env['PORT'] ?? '3001', 10);
  app.listen(port, () => {
    console.log(`API server running on port ${port}`);
  });
  startReminderJob(); // ← add this line
}
```

Import at top of file: `import { startReminderJob } from './jobs/reminder-sender.js';`

### Mobile Settings UI — Reminder Picker

Follow the exact pattern from `more/index.tsx`. The existing `AsyncStorage` import and row/section `StyleSheet` are already in scope — no new imports needed on the mobile side except potentially for the `REMINDER_OPTIONS` constant. `AsyncStorage` is already imported in `more/index.tsx`.

```tsx
const REMINDER_OPTIONS = [
  { label: '1 hour before', value: 60 },
  { label: '2 hours before', value: 120 },
  { label: '24 hours before', value: 1440 },
];

// Inside component JSX, after the Calendar section:
<Text style={styles.sectionHeader}>Notifications</Text>

{REMINDER_OPTIONS.map((option) => (
  <TouchableOpacity
    key={option.value}
    style={styles.row}
    onPress={() => handleReminderSelect(option.value)}
  >
    <Text style={styles.rowText}>{option.label}</Text>
    {reminderMinutes === option.value && (
      <Text style={{ color: '#2563eb', fontSize: 18, fontWeight: '600' }}>✓</Text>
    )}
  </TouchableOpacity>
))}
```

The `sectionHeader` and `row` styles already exist in `more/index.tsx` — reuse them directly.

### `useCreateJob()` — AsyncStorage Read

The `createJob` function is already async. Reading AsyncStorage before `database.write()` adds negligible latency. Use `parseInt(storedMinutes, 10)` with fallback to `1440`:

```typescript
// In useCreateJob(), inside createJob callback, before database.write():
const stored = await AsyncStorage.getItem('reminderMinutes');
const reminderMins = stored ? parseInt(stored, 10) : 1440;

// Then in the schedule_events create():
record.reminderMinutes = reminderMins;  // ← was hardcoded 1440
```

`@react-native-async-storage/async-storage` is already installed (used in `more/index.tsx`). Do NOT add it to `package.json` again.

### `useRescheduleJob()` — Reset `reminderSent`

Only one line changes inside the `event.update()` callback:

```typescript
await event.update((record) => {
  record.startTime = newStart.getTime();
  record.endTime = newEnd.getTime();
  record.reminderSent = false;  // ← ADD THIS LINE
});
```

### Testing Pattern for `reminder-sender.test.ts`

Jest mocks for Prisma and sms-service. Create a factory function for test events to avoid repetitive setup:

```typescript
import { processReminders } from './reminder-sender.js';

jest.mock('../config/prisma.js', () => ({
  prisma: {
    scheduleEvent: {
      findMany: jest.fn(),
      update: jest.fn().mockResolvedValue({}),
    },
  },
}));

jest.mock('../services/sms-service.js', () => ({
  sendSms: jest.fn().mockResolvedValue(undefined),
}));

import { prisma } from '../config/prisma.js';
import { sendSms } from '../services/sms-service.js';

const mockFindMany = prisma.scheduleEvent.findMany as jest.Mock;
const mockUpdate = prisma.scheduleEvent.update as jest.Mock;
const mockSendSms = sendSms as jest.Mock;

function makeDueEvent(overrides = {}) {
  const now = new Date();
  // startTime = 30 min from now, reminderMinutes = 60 → trigger was 30 min ago → DUE
  const startTime = new Date(now.getTime() + 30 * 60_000);
  return {
    id: 'event-1',
    reminderSent: false,
    allDay: false,
    reminderMinutes: 60,
    startTime,
    account: { businessName: 'Test Co' },
    job: { customer: { phone: '+15551234567', name: 'Jane Smith' } },
    ...overrides,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  mockUpdate.mockResolvedValue({});
  mockSendSms.mockResolvedValue(undefined);
});
```

**Key test: `sendSms` failure doesn't break the loop**
```typescript
it('continues processing remaining events when one sendSms fails', async () => {
  mockFindMany.mockResolvedValue([
    makeDueEvent({ id: 'event-1' }),
    makeDueEvent({ id: 'event-2' }),
  ]);
  mockSendSms
    .mockRejectedValueOnce(new Error('Twilio error'))
    .mockResolvedValueOnce(undefined);

  await processReminders();

  expect(mockSendSms).toHaveBeenCalledTimes(2);
  expect(mockUpdate).toHaveBeenCalledTimes(1);
  expect(mockUpdate).toHaveBeenCalledWith({ where: { id: 'event-2' }, data: { reminderSent: true } });
});
```

### Prisma Client Import

The existing `apps/api/src/config/prisma.ts` exports a `prisma` singleton. Import it as:
```typescript
import { prisma } from '../config/prisma.js';
```
(Note the `.js` extension — required for Node.js ESM compatibility in this project.)

### Architecture Compliance Notes

- **No direct Twilio calls** in `reminder-sender.ts` — call `sendSms()` from `sms-service.ts` only.
- **`processReminders()` is idempotent at the event level** — `reminderSent = true` is written immediately after each successful `sendSms`. If the process crashes between SMS and DB update, a duplicate reminder may be sent (acceptable for MVP; no deduplication needed).
- **`startReminderJob()` is never called in test environment** — guarded by `process.env['NODE_ENV'] !== 'test'` in `index.ts`.
- **WatermelonDB `reminderSent` is updated only by `useRescheduleJob()`** — the server-side `reminderSent` update happens via Prisma. The two will drift until Epic 6 sync is implemented. This is intentional for MVP.
- **`useCreateJob()` and `useRescheduleJob()` in `use-schedule.ts`** — both write to WatermelonDB only (no API calls). Architecture rule: all mobile CRUD goes through WatermelonDB.
- **TypeScript strict mode** — no `any`, no `@ts-ignore`. The Prisma-generated types will correctly type the `findMany` result including nested `account` and `job.customer` selects.

### Project Structure Notes

Files to **CREATE**:
```
apps/api/src/jobs/reminder-sender.ts          NEW
apps/api/src/jobs/reminder-sender.test.ts     NEW
```

Files to **MODIFY**:
```
apps/mobile/app/(tabs)/more/index.tsx         MODIFY (add Notifications section: state, useEffect load, REMINDER_OPTIONS, handler, JSX rows)
apps/mobile/src/hooks/use-schedule.ts         MODIFY (useCreateJob: read AsyncStorage; useRescheduleJob: reset reminderSent)
apps/api/src/index.ts                         MODIFY (import startReminderJob, call inside NODE_ENV !== 'test' guard)
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 3.4] — All acceptance criteria, FR11, FR48, FR49, NFR5, NFR19
- [Source: planning/architecture.md#Infrastructure & Deployment] — `apps/api/src/jobs/reminder-sender.ts` named as the SMS reminder background job
- [Source: planning/architecture.md#Service Boundaries] — "sms-service owns all Twilio interaction — no direct Twilio calls elsewhere"
- [Source: apps/api/src/services/sms-service.ts] — `sendSms(to: string, body: string): Promise<void>` — throws `AppError('SMS_DELIVERY_FAILED', ...)` on Twilio failure
- [Source: apps/api/src/config/twilio.ts] — `twilioClient` and `TWILIO_PHONE_NUMBER` export
- [Source: apps/api/src/config/prisma.ts] — `prisma` singleton import
- [Source: apps/api/prisma/schema.prisma#ScheduleEvent] — `reminderMinutes Int @default(1440)`, `reminderSent Boolean @default(false)`, `startTime DateTime`, `allDay Boolean`, relation to `job.customer.phone` and `account.businessName`
- [Source: apps/api/src/index.ts] — existing `NODE_ENV !== 'test'` guard structure to extend
- [Source: apps/mobile/src/hooks/use-schedule.ts] — `useCreateJob()` hardcodes `reminderMinutes = 1440` (line to change); `useRescheduleJob()` updates event fields (line to add)
- [Source: apps/mobile/app/(tabs)/more/index.tsx] — `AsyncStorage` import and usage pattern; `styles.sectionHeader`, `styles.row`, `styles.rowText` for UI consistency
- [Source: apps/mobile/src/db/schema.ts] — schema v7; `schedule_events` has `reminder_minutes` (number) and `reminder_sent` (boolean) — no migration needed
- [Source: apps/mobile/src/db/models/schedule-event.ts] — `reminderMinutes: number` and `reminderSent: boolean` already declared with `@field`
- [Source: stories/3-3-on-site-photo-documentation-and-signature-capture.md] — Confirmed schema v7; `database.write()` pattern; `StyleSheet.create` (no NativeWind); LokiJS test adapter pattern

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
