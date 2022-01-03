export interface APIError {
  detail: string;
}

// types returned by API
export interface apiPlayer {
  name: string;
  id: number;
}

export type IApiCall = (path: string, args?: RequestInit) => Promise<Response>;
