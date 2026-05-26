import { supabase } from './supabase-client';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3001';

interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    status: number;
  };
}

export class ApiError extends Error {
  public readonly code: string;
  public readonly status: number;

  constructor(code: string, message: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
    this.name = 'ApiError';
  }
}

async function getAuthHeaders(): Promise<Record<string, string>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const { data: { session } } = await supabase.auth.getSession();
  if (session?.access_token) {
    headers['Authorization'] = `Bearer ${session.access_token}`;
  }

  return headers;
}

async function handleResponse<T>(response: Response): Promise<T> {
  const body = await response.json();

  if (!response.ok) {
    const errorBody = body as ApiErrorResponse;
    const code = errorBody.error?.code ?? 'UNKNOWN_ERROR';
    const message = errorBody.error?.message ?? 'An unexpected error occurred';
    const status = errorBody.error?.status ?? response.status;

    if (status === 401) {
      // Token is invalid/expired — trigger sign out
      await supabase.auth.signOut();
    }

    throw new ApiError(code, message, status);
  }

  return body.data as T;
}

export const apiClient = {
  async get<T>(path: string): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      headers,
    });
    return handleResponse<T>(response);
  },

  async post<T>(path: string, body?: unknown): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(response);
  },

  async put<T>(path: string, body?: unknown): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'PUT',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(response);
  },

  async patch<T>(path: string, body?: unknown): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'PATCH',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    return handleResponse<T>(response);
  },

  async delete<T>(path: string): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'DELETE',
      headers,
    });
    return handleResponse<T>(response);
  },

  async uploadFile<T>(path: string, fileUri: string, fieldName: string): Promise<T> {
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = {};
    if (session?.access_token) {
      headers['Authorization'] = `Bearer ${session.access_token}`;
    }

    const formData = new FormData();
    const filename = fileUri.split('/').pop() || 'photo.jpg';
    const ext = filename.split('.').pop()?.toLowerCase() || 'jpg';
    const mimeType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;

    formData.append(fieldName, {
      uri: fileUri,
      name: filename,
      type: mimeType,
    } as unknown as Blob);

    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers,
      body: formData,
    });
    return handleResponse<T>(response);
  },
};

export interface QbSyncEntry {
  id: string;
  entityType: 'CUSTOMER' | 'INVOICE' | 'PAYMENT';
  entityId: string;
  entityDisplayName: string;
  direction: string;
  status: 'SUCCESS' | 'FAILED' | 'DUPLICATE_PREVENTED';
  errorMessage: string | null;
  quickbooksId: string | null;
  syncedAt: string;
}

export async function connectQuickBooks(): Promise<{ authorizationUrl: string }> {
  return apiClient.post<{ authorizationUrl: string }>('/api/v1/quickbooks/connect', {});
}

export async function getQuickBooksStatus(): Promise<{
  connected: boolean;
  companyName: string | null;
  realmId: string | null;
  syncLog: QbSyncEntry[];
}> {
  return apiClient.get('/api/v1/quickbooks/status');
}

export async function disconnectQuickBooks(): Promise<void> {
  await apiClient.post('/api/v1/quickbooks/disconnect', {});
}

export async function retryQbSync(
  entityType: string,
  entityId: string,
): Promise<{ attempted: boolean; status: string; message?: string }> {
  return apiClient.post('/api/v1/quickbooks/sync', { entityType, entityId });
}

export interface TeamMemberResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: 'OWNER' | 'MEMBER';
  createdAt: string;
}

export interface PendingInvite {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  invitedAt: string;
  expiresAt: string;
}

export async function getTeamMembers(): Promise<{
  members: TeamMemberResponse[];
  pendingInvites: PendingInvite[];
}> {
  return apiClient.get('/api/v1/team-members');
}

export async function inviteTeamMember(payload: {
  name: string;
  email: string;
  phone?: string;
}): Promise<{ invited: boolean; email: string; name: string }> {
  return apiClient.post('/api/v1/team-members/invite', payload);
}

export async function removeTeamMember(id: string): Promise<{ removed: boolean; id: string }> {
  return apiClient.delete(`/api/v1/team-members/${id}`);
}

export async function registerMember(payload: {
  name: string;
  phone?: string;
}): Promise<{ id: string; accountId: string; name: string; role: string }> {
  return apiClient.post('/api/v1/auth/register-member', payload);
}
