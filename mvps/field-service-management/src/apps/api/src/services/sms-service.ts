import { twilioClient, TWILIO_PHONE_NUMBER } from '../config/twilio.js';
import { AppError } from '../utils/error.js';

export async function sendSms(to: string, body: string): Promise<void> {
  try {
    await twilioClient.messages.create({ to, from: TWILIO_PHONE_NUMBER, body });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'SMS delivery failed';
    throw new AppError('SMS_DELIVERY_FAILED', message, 502);
  }
}
