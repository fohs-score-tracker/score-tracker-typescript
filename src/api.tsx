export interface APIError {
  detail: string;
}

export type IApiCall = (path: string, args?: RequestInit) => Promise<Response>;
