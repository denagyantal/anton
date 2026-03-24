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
