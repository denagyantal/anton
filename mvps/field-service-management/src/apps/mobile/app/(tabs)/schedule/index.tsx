import { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { useScheduleEvents, useRescheduleJob } from '../../../src/hooks/use-schedule';
import { useCustomers } from '../../../src/hooks/use-customers';
import { CalendarView, CalendarEventShape } from '../../../src/components/schedule/calendar-view';

export default function ScheduleScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { events: rawEvents, isLoading } = useScheduleEvents(selectedDate);
  const { customers } = useCustomers();
  const { rescheduleEvent } = useRescheduleJob();

  const customerMap = useMemo(() => {
    const map = new Map<string, string>();
    customers.forEach((c) => map.set(c.id, c.name));
    return map;
  }, [customers]);

  const calendarEvents: CalendarEventShape[] = useMemo(
    () =>
      rawEvents.map((ev) => ({
        id: ev.id,
        jobId: ev.jobId,
        title: ev.title,
        start: new Date(ev.startTime),
        end: new Date(ev.endTime),
        customerName: customerMap.get(ev.customerId) ?? '',
      })),
    [rawEvents, customerMap],
  );

  async function handleEventDrop(event: CalendarEventShape, newStart: Date, newEnd: Date) {
    await rescheduleEvent(event.id, event.jobId, newStart, newEnd);
  }

  function handlePressCell(date: Date) {
    router.push({
      pathname: '/(modals)/create-job',
      params: { prefillStart: date.toISOString() },
    });
  }

  const isEmpty = !isLoading && rawEvents.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
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
      <View style={styles.header}>
        <Text style={styles.title}>Schedule</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/(modals)/create-job')}
        >
          <Text style={styles.addButtonText}>+ Schedule Job</Text>
        </TouchableOpacity>
      </View>

      {isEmpty ? (
        <View style={styles.emptyContainer}>
          <CalendarView
            events={[]}
            date={selectedDate}
            onDayChange={setSelectedDate}
            onPressCell={handlePressCell}
            onEventDrop={handleEventDrop}
          />
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>No jobs today</Text>
            <Text style={styles.emptySubText}>Tap a time slot or "Schedule Job" to add one</Text>
          </View>
        </View>
      ) : (
        <CalendarView
          events={calendarEvents}
          date={selectedDate}
          onDayChange={setSelectedDate}
          onPressCell={handlePressCell}
          onEventDrop={handleEventDrop}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  addButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
  },
  emptyCard: {
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  emptySubText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});
