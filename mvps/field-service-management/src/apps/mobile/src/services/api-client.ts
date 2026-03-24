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

  async delete<T>(path: string): Promise<T> {
    const headers = await getAuthHeaders();
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'DELETE',
      headers,
    });
    return handleResponse<T>(response);
  },
};
