import { View, Text, StyleSheet } from 'react-native';
import ScheduleEvent from '../../db/models/schedule-event';

interface EventCardProps {
  event: ScheduleEvent;
  customerName?: string;
  jobTitle?: string;
}

function formatTime(ms: number): string {
  const date = new Date(ms);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 || 12;
  const displayMin = minutes.toString().padStart(2, '0');
  return `${displayHour}:${displayMin} ${ampm}`;
}

export function EventCard({ event, customerName, jobTitle }: EventCardProps) {
  const timeRange = `${formatTime(event.startTime)} – ${formatTime(event.endTime)}`;
  const displayTitle = jobTitle ?? event.title;
  const displayCustomer = customerName ?? '';

  return (
    <View style={styles.card}>
      <Text style={styles.title} numberOfLines={1}>
        {displayTitle}
      </Text>
      {displayCustomer ? (
        <Text style={styles.customer} numberOfLines={1}>
          {displayCustomer}
        </Text>
      ) : null}
      <Text style={styles.time}>{timeRange}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2563eb',
    borderRadius: 6,
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  title: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  customer: {
    color: '#bfdbfe',
    fontSize: 12,
    marginTop: 2,
  },
  time: {
    color: '#dbeafe',
    fontSize: 11,
    marginTop: 4,
  },
});
