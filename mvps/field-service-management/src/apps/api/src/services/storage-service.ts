import { supabaseAdmin } from '../config/supabase.js';
import { AppError } from '../utils/error.js';

export async function uploadFile(
  bucket: string,
  path: string,
  buffer: Buffer,
  contentType: string,
): Promise<string> {
  const { error } = await supabaseAdmin.storage.from(bucket).upload(path, buffer, {
    contentType,
    upsert: true,
  });

  if (error) {
    throw new AppError('STORAGE_ERROR', error.message, 500);
  }

  const { data: urlData } = supabaseAdmin.storage.from(bucket).getPublicUrl(path);
  return urlData.publicUrl;
}

export async function deleteFile(bucket: string, path: string): Promise<void> {
  const { error } = await supabaseAdmin.storage.from(bucket).remove([path]);
  if (error) {
    throw new AppError('STORAGE_ERROR', error.message, 500);
  }
}
