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
      alarms: [{ relativeOffset: -60 }],
    });
    return eventId;
  } catch (err) {
    console.warn('[calendar-service] createExternalCalendarEvent failed:', err);
    return null;
  }
}
