export interface ApiResponse<T> {
  data: T;
}

export interface ApiListResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    status: number;
  };
}

export interface PaginationMeta {
  total: number;
  page: number;
  pageSize: number;
}

export interface AuthSignupRequest {
  email: string;
  phone: string;
  password: string;
}

export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthRefreshRequest {
  refreshToken: string;
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: number | undefined;
}

export interface AuthUser {
  id: string;
  email: string | undefined;
  accountId: string;
}

export interface AuthResponse {
  user: AuthUser;
  session: AuthSession | null;
}
