jest.mock('../config/twilio.js', () => ({
  twilioClient: { messages: { create: jest.fn().mockResolvedValue({}) } },
  TWILIO_PHONE_NUMBER: '+15550000000',
}));

import { sendSms } from './sms-service.js';
import { AppError } from '../utils/error.js';

describe('sendSms', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls messages.create with correct to, from, and body', async () => {
    const { twilioClient } = require('../config/twilio.js');
    await sendSms('+15551234567', 'Test message');

    expect(twilioClient.messages.create).toHaveBeenCalledWith({
      to: '+15551234567',
      from: '+15550000000',
      body: 'Test message',
    });
  });

  it('throws AppError with SMS_DELIVERY_FAILED when Twilio errors', async () => {
    const { twilioClient } = require('../config/twilio.js');
    (twilioClient.messages.create as jest.Mock).mockRejectedValueOnce(
      new Error('Twilio error message'),
    );

    await expect(sendSms('+15551234567', 'Test')).rejects.toMatchObject({
      code: 'SMS_DELIVERY_FAILED',
      status: 502,
      message: 'Twilio error message',
    });
  });

  it('throws AppError with generic message for non-Error Twilio failures', async () => {
    const { twilioClient } = require('../config/twilio.js');
    (twilioClient.messages.create as jest.Mock).mockRejectedValueOnce('string error');

    await expect(sendSms('+15551234567', 'Test')).rejects.toBeInstanceOf(AppError);
  });
});
