import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { apiClient } from './api-client';

export async function registerPushToken(): Promise<void> {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') return;

    const projectId =
      (Constants.expoConfig?.extra?.eas?.projectId as string | undefined);
    if (!projectId) return;

    const tokenResult = await Notifications.getExpoPushTokenAsync({ projectId });
    await apiClient.patch('/api/v1/accounts/me/push-token', {
      pushToken: tokenResult.data,
    });
  } catch (err) {
    console.warn('[notification-service] push token registration failed:', err);
    // Non-critical — app works fine without push
  }
}

export async function scheduleSyncErrorNotification(errorMessage: string): Promise<void> {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Sync Error',
      body: 'Some records failed to sync. Open the app and tap a record to retry.',
      data: { type: 'sync_error', message: errorMessage },
    },
    trigger: null,
  });
}
