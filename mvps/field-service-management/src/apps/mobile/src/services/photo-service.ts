import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { database } from '../db';
import QuotePhoto from '../db/models/quote-photo';
import { apiClient } from './api-client';
import { Q } from '@nozbe/watermelondb';

export async function capturePhoto(): Promise<string | null> {
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  if (permission.status !== 'granted') {
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    allowsEditing: false,
  });

  if (result.canceled || !result.assets[0]) {
    return null;
  }

  return result.assets[0].uri;
}

export async function compressPhoto(uri: string): Promise<string> {
  const result = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 1200 } }],
    { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG },
  );
  return result.uri;
}

export async function savePhotoLocally(
  quoteId: string,
  localUri: string,
  caption?: string,
): Promise<QuotePhoto> {
  return database.write(async () => {
    return database.get<QuotePhoto>('quote_photos').create((record) => {
      record.quoteId = quoteId;
      record.localUri = localUri;
      record.remoteUrl = '';
      record.caption = caption ?? '';
      record.takenAt = Date.now();
    });
  });
}

export async function uploadPhoto(
  quoteId: string,
  photoId: string,
  localUri: string,
): Promise<string> {
  const result = await apiClient.uploadFile<{ photoUrl: string }>(
    `/api/v1/quotes/${quoteId}/photos`,
    localUri,
    'photo',
  );

  await database.write(async () => {
    const photo = await database.get<QuotePhoto>('quote_photos').find(photoId);
    await photo.update((record) => {
      record.remoteUrl = result.photoUrl;
    });
  });

  return result.photoUrl;
}

export async function uploadPendingPhotos(quoteId: string): Promise<number> {
  const pendingPhotos = await database
    .get<QuotePhoto>('quote_photos')
    .query(Q.where('quote_id', quoteId), Q.where('remote_url', ''))
    .fetch();

  let count = 0;
  for (const photo of pendingPhotos) {
    try {
      await uploadPhoto(quoteId, photo.id, photo.localUri);
      count++;
    } catch {
      // Continue uploading others if one fails
    }
  }

  return count;
}
