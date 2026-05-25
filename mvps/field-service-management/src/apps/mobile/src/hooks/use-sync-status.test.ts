import { getSyncStatus } from './use-sync-status';

describe('getSyncStatus', () => {
  it('returns synced when syncedAt is a timestamp', () => {
    const record = { syncedAt: 1700000000000 } as any;
    expect(getSyncStatus(record)).toBe('synced');
  });

  it('returns synced when syncedAt is 0 (epoch)', () => {
    const record = { syncedAt: 0 } as any;
    expect(getSyncStatus(record)).toBe('synced');
  });

  it('returns pending when syncedAt is null and no error', () => {
    const record = { syncedAt: null } as any;
    expect(getSyncStatus(record)).toBe('pending');
  });

  it('returns pending when syncedAt is null and syncHasError is false', () => {
    const record = { syncedAt: null } as any;
    expect(getSyncStatus(record, false)).toBe('pending');
  });

  it('returns error when syncedAt is null and syncHasError is true', () => {
    const record = { syncedAt: null } as any;
    expect(getSyncStatus(record, true)).toBe('error');
  });

  it('returns synced (not error) when syncedAt is set even if syncHasError is true', () => {
    const record = { syncedAt: 1700000000000 } as any;
    expect(getSyncStatus(record, true)).toBe('synced');
  });

  it('returns pending when syncedAt is undefined (legacy compat)', () => {
    const record = { syncedAt: undefined } as any;
    expect(getSyncStatus(record)).toBe('pending');
  });
});
