import { getSyncStatus } from './use-sync-status';

describe('getSyncStatus', () => {
  it('returns pending when syncedAt is null', () => {
    const record = { syncedAt: null } as any;
    expect(getSyncStatus(record)).toBe('pending');
  });

  it('returns pending when syncedAt is undefined', () => {
    const record = { syncedAt: undefined } as any;
    expect(getSyncStatus(record)).toBe('pending');
  });

  it('returns synced when syncedAt is a timestamp', () => {
    const record = { syncedAt: 1700000000000 } as any;
    expect(getSyncStatus(record)).toBe('synced');
  });

  it('returns synced when syncedAt is 0 (epoch)', () => {
    const record = { syncedAt: 0 } as any;
    // 0 is falsy but not null/undefined — record was synced at epoch
    // getSyncStatus uses == null (covers both null and undefined), not falsy
    expect(getSyncStatus(record)).toBe('synced');
  });
});
