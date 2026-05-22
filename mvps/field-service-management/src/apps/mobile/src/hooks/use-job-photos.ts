import { useState, useEffect, useCallback } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import JobPhoto from '../db/models/job-photo';
import Job from '../db/models/job';
import { capturePhoto, compressPhoto } from '../services/photo-service';

export function useJobPhotos(jobId: string): { photos: JobPhoto[]; isLoading: boolean } {
  const database = useDatabase();
  const [photos, setPhotos] = useState<JobPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jobId) {
      setPhotos([]);
      setIsLoading(false);
      return;
    }

    const subscription = database
      .get<JobPhoto>('job_photos')
      .query(Q.where('job_id', jobId), Q.sortBy('taken_at', Q.asc))
      .observe()
      .subscribe((records) => {
        setPhotos(records);
        setIsLoading(false);
      });

    return () => subscription.unsubscribe();
  }, [database, jobId]);

  return { photos, isLoading };
}

export function useAddJobPhoto(): {
  addPhoto: (jobId: string, caption?: string) => Promise<JobPhoto | null>;
} {
  const database = useDatabase();

  const addPhoto = useCallback(
    async (jobId: string, caption?: string): Promise<JobPhoto | null> => {
      const rawUri = await capturePhoto();
      if (!rawUri) return null;
      const compressedUri = await compressPhoto(rawUri);

      return database.write(async () => {
        return database.get<JobPhoto>('job_photos').create((record) => {
          record.jobId = jobId;
          record.localUri = compressedUri;
          record.remoteUrl = '';
          record.caption = caption ?? '';
          record.takenAt = Date.now();
        });
      });
    },
    [database],
  );

  return { addPhoto };
}

export function useUpdateJobSignature(): {
  updateSignature: (jobId: string, localUri: string) => Promise<void>;
} {
  const database = useDatabase();

  const updateSignature = useCallback(
    async (jobId: string, localUri: string): Promise<void> => {
      await database.write(async () => {
        const job = await database.get<Job>('jobs').find(jobId);
        await job.update((record) => {
          record.signatureUrl = localUri;
        });
      });
    },
    [database],
  );

  return { updateSignature };
}
