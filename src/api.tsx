export type IApiCall = (path: string, args?: RequestInit) => Promise<Response>;

// types returned by API
export interface APIError {
  detail: string;
}

export interface APIPlayer {
  name: string;
  id: number;
}

export type APIAccessTokenResponse = { access_token: string } | APIError;
