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
