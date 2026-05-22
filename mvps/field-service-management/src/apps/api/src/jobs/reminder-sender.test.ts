import { processReminders } from './reminder-sender.js';

jest.mock('../config/prisma.js', () => ({
  prisma: {
    scheduleEvent: {
      findMany: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock('../services/sms-service.js', () => ({
  sendSms: jest.fn(),
}));

import { prisma } from '../config/prisma.js';
import { sendSms } from '../services/sms-service.js';

type PrismaMock = {
  scheduleEvent: {
    findMany: jest.Mock;
    update: jest.Mock;
  };
};

const mockPrisma = prisma as unknown as PrismaMock;
const mockFindMany = mockPrisma.scheduleEvent.findMany;
const mockUpdate = mockPrisma.scheduleEvent.update;
const mockSendSms = sendSms as jest.Mock;

function makeDueEvent(overrides: Record<string, unknown> = {}) {
  const now = new Date();
  // startTime = 30 min from now, reminderMinutes = 60 → trigger was 30 min ago → DUE
  const startTime = new Date(now.getTime() + 30 * 60_000);
  return {
    id: 'event-1',
    reminderSent: false,
    allDay: false,
    reminderMinutes: 60,
    startTime,
    account: { businessName: 'Test Co' },
    job: { customer: { phone: '+15551234567', name: 'Jane Smith' } },
    ...overrides,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  mockUpdate.mockResolvedValue({});
  mockSendSms.mockResolvedValue(undefined);
});

describe('processReminders', () => {
  it('sends SMS and updates reminderSent for a due event', async () => {
    const event = makeDueEvent();
    mockFindMany.mockResolvedValue([event]);

    await processReminders();

    expect(mockSendSms).toHaveBeenCalledTimes(1);
    expect(mockSendSms).toHaveBeenCalledWith(
      '+15551234567',
      expect.stringContaining('Test Co'),
    );
    expect(mockUpdate).toHaveBeenCalledTimes(1);
    expect(mockUpdate).toHaveBeenCalledWith({
      where: { id: 'event-1' },
      data: { reminderSent: true },
    });
  });

  it('does not send SMS for event not yet due', async () => {
    const now = new Date();
    // startTime = 3 hours from now, reminderMinutes = 60 → trigger is 2 hours away → NOT DUE
    const startTime = new Date(now.getTime() + 3 * 60 * 60_000);
    const event = makeDueEvent({ startTime, reminderMinutes: 60 });
    mockFindMany.mockResolvedValue([event]);

    await processReminders();

    expect(mockSendSms).not.toHaveBeenCalled();
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it('does not send SMS when allDay = true (excluded by Prisma query)', async () => {
    // Prisma filters out allDay:true events, so mock returns empty array
    mockFindMany.mockResolvedValue([]);

    await processReminders();

    expect(mockSendSms).not.toHaveBeenCalled();
  });

  it('skips event with no customer phone and does not call update', async () => {
    const event = makeDueEvent({
      job: { customer: { phone: null, name: 'No Phone' } },
    });
    mockFindMany.mockResolvedValue([event]);

    await processReminders();

    expect(mockSendSms).not.toHaveBeenCalled();
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it('skips event with empty customer phone', async () => {
    const event = makeDueEvent({
      job: { customer: { phone: '', name: 'No Phone' } },
    });
    mockFindMany.mockResolvedValue([event]);

    await processReminders();

    expect(mockSendSms).not.toHaveBeenCalled();
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it('continues processing remaining events when one sendSms fails', async () => {
    mockFindMany.mockResolvedValue([
      makeDueEvent({ id: 'event-1' }),
      makeDueEvent({ id: 'event-2' }),
    ]);
    mockSendSms
      .mockRejectedValueOnce(new Error('Twilio error'))
      .mockResolvedValueOnce(undefined);

    await processReminders();

    expect(mockSendSms).toHaveBeenCalledTimes(2);
    expect(mockUpdate).toHaveBeenCalledTimes(1);
    expect(mockUpdate).toHaveBeenCalledWith({
      where: { id: 'event-2' },
      data: { reminderSent: true },
    });
  });

  it('includes TCPA opt-out text in SMS message', async () => {
    const event = makeDueEvent();
    mockFindMany.mockResolvedValue([event]);

    await processReminders();

    expect(mockSendSms).toHaveBeenCalledWith(
      '+15551234567',
      expect.stringContaining('Reply STOP to opt out'),
    );
  });

  it('uses fallback business name when businessName is null', async () => {
    const event = makeDueEvent({ account: { businessName: null } });
    mockFindMany.mockResolvedValue([event]);

    await processReminders();

    expect(mockSendSms).toHaveBeenCalledWith(
      '+15551234567',
      expect.stringContaining('Your Service Provider'),
    );
  });
});
