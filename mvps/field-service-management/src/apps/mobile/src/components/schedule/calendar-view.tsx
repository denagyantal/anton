import { View, StyleSheet } from 'react-native';
import BigCalendar from 'react-native-big-calendar';

export type CalendarEventShape = {
  id: string;
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
        onSwipeEnd={(d: Date) => onDayChange(d)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
