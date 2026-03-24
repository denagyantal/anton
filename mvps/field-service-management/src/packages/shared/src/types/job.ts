export interface Job {
  id: string;
  accountId: string;
  customerId: string;
  quoteId: string | null;
  assignedToId: string | null;
  status: string;
  title: string;
  description: string | null;
  scheduledStart: string | null;
  scheduledEnd: string | null;
  completedAt: string | null;
  signatureUrl: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface JobPhoto {
  id: string;
  jobId: string;
  photoUrl: string;
  caption: string | null;
  takenAt: string;
}
