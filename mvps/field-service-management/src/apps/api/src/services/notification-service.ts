import { prisma } from '../config/prisma.js';

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

export async function sendPushToAccount(
  accountId: string,
  notification: { title: string; body: string; data?: Record<string, unknown> },
): Promise<void> {
  try {
    const members = await prisma.teamMember.findMany({
      where: { accountId, pushToken: { not: null } },
      select: { pushToken: true },
    });

    await Promise.all(
      members
        .filter((m): m is { pushToken: string } => m.pushToken !== null)
        .map(m => sendPushNotification(m.pushToken, notification.title, notification.body)),
    );
  } catch (err) {
    console.error('[notification-service] sendPushToAccount failed:', err);
  }
}
