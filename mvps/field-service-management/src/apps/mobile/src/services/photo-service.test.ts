import { compressPhoto, savePhotoLocally } from './photo-service';

// Mock expo-image-picker
jest.mock('expo-image-picker', () => ({
  requestCameraPermissionsAsync: jest.fn(),
  launchCameraAsync: jest.fn(),
  MediaTypeOptions: { Images: 'Images' },
}));

// Mock expo-image-manipulator — use jest.fn() inside factory to avoid hoisting issues
jest.mock('expo-image-manipulator', () => ({
  manipulateAsync: jest.fn(),
  SaveFormat: { JPEG: 'jpeg' },
}));

const mockCreate = jest.fn();
const mockGet = jest.fn(() => ({
  create: mockCreate,
}));
const mockWrite = jest.fn((fn: () => Promise<unknown>) => fn());

jest.mock('../db', () => ({
  database: {
    write: (fn: () => Promise<unknown>) => mockWrite(fn),
    get: () => mockGet(),
  },
}));

// Mock api-client
jest.mock('./api-client', () => ({
  apiClient: {
    uploadFile: jest.fn(),
  },
}));

describe('photo-service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('compressPhoto', () => {
    it('calls manipulateAsync with correct resize and format args', async () => {
      const { manipulateAsync } = require('expo-image-manipulator');
      const compressedUri = 'file:///compressed/photo.jpg';
      (manipulateAsync as jest.Mock).mockResolvedValueOnce({ uri: compressedUri });

      const result = await compressPhoto('file:///original/photo.jpg');

      expect(manipulateAsync).toHaveBeenCalledWith(
        'file:///original/photo.jpg',
        [{ resize: { width: 1200 } }],
        { compress: 0.8, format: 'jpeg' },
      );
      expect(result).toBe(compressedUri);
    });
  });

  describe('savePhotoLocally', () => {
    it('creates a WatermelonDB record with empty remoteUrl', async () => {
      const mockPhoto = { id: 'photo-1', remoteUrl: '' };
      mockCreate.mockImplementation((fn: (record: Record<string, unknown>) => void) => {
        const record: Record<string, unknown> = {};
        fn(record);
        return { ...mockPhoto, ...record };
      });

      await savePhotoLocally('quote-123', 'file:///photo.jpg', 'test caption');

      expect(mockWrite).toHaveBeenCalled();
      expect(mockGet).toHaveBeenCalled();
      expect(mockCreate).toHaveBeenCalled();

      // Verify the create callback sets the correct fields
      const createCallback = mockCreate.mock.calls[0]?.[0] as (record: Record<string, unknown>) => void;
      const record: Record<string, unknown> = {};
      createCallback(record);

      expect(record['quoteId']).toBe('quote-123');
      expect(record['localUri']).toBe('file:///photo.jpg');
      expect(record['remoteUrl']).toBe('');
      expect(record['caption']).toBe('test caption');
      expect(typeof record['takenAt']).toBe('number');
    });

    it('defaults caption to empty string when not provided', async () => {
      mockCreate.mockImplementation((fn: (record: Record<string, unknown>) => void) => {
        const record: Record<string, unknown> = {};
        fn(record);
        return record;
      });

      await savePhotoLocally('quote-123', 'file:///photo.jpg');

      const createCallback = mockCreate.mock.calls[0]?.[0] as (record: Record<string, unknown>) => void;
      const record: Record<string, unknown> = {};
      createCallback(record);

      expect(record['caption']).toBe('');
    });
  });
});
