export async function sendPushNotification(
  pushToken: string | null | undefined,
  title: string,
  body: string,
): Promise<void> {
  if (!pushToken) return;

  try {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: pushToken, title, body, sound: 'default' }),
    });
  } catch (err) {
    console.error('[notification-service] push failed:', err);
    // Never throw — push failure must not break the HTTP response
  }
}
