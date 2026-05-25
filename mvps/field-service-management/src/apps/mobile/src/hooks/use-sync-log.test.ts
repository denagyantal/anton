import AsyncStorage from '@react-native-async-storage/async-storage';
import { appendSyncLog, SyncLogEntry } from './use-sync-log';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const mockGetItem = AsyncStorage.getItem as jest.Mock;
const mockSetItem = AsyncStorage.setItem as jest.Mock;

const makeEntry = (overrides: Partial<SyncLogEntry> = {}): SyncLogEntry => ({
  timestamp: Date.now(),
  status: 'success',
  recordsPushed: 3,
  recordsPulled: 2,
  conflictsResolved: 0,
  ...overrides,
});

describe('appendSyncLog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSetItem.mockResolvedValue(undefined);
  });

  it('creates new log when none exists', async () => {
    mockGetItem.mockResolvedValue(null);
    const entry = makeEntry();
    await appendSyncLog(entry);
    const written = JSON.parse(mockSetItem.mock.calls[0][1]);
    expect(written).toHaveLength(1);
    expect(written[0]).toEqual(entry);
  });

  it('prepends to existing log', async () => {
    const old = makeEntry({ timestamp: 1000 });
    mockGetItem.mockResolvedValue(JSON.stringify([old]));
    const fresh = makeEntry({ timestamp: 2000 });
    await appendSyncLog(fresh);
    const written = JSON.parse(mockSetItem.mock.calls[0][1]);
    expect(written[0].timestamp).toBe(2000);
    expect(written[1].timestamp).toBe(1000);
  });

  it('caps log at 10 entries', async () => {
    const entries = Array.from({ length: 10 }, (_, i) => makeEntry({ timestamp: i }));
    mockGetItem.mockResolvedValue(JSON.stringify(entries));
    await appendSyncLog(makeEntry({ timestamp: 999 }));
    const written = JSON.parse(mockSetItem.mock.calls[0][1]);
    expect(written).toHaveLength(10);
    expect(written[0].timestamp).toBe(999);
  });

  it('stores failed entry with errorMessage', async () => {
    mockGetItem.mockResolvedValue(null);
    const entry = makeEntry({ status: 'failed', errorMessage: 'Network timeout' });
    await appendSyncLog(entry);
    const written = JSON.parse(mockSetItem.mock.calls[0][1]);
    expect(written[0].status).toBe('failed');
    expect(written[0].errorMessage).toBe('Network timeout');
  });
});
