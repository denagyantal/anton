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
