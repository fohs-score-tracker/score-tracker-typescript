import { createContext, useContext } from "react";

export interface API {
  token?: string;
  base: string;
  call: (path: string, args?: RequestInit) => Promise<Response>;
  setToken: (newToken: string) => void;
  setBase: (newBase: string) => void;
}

export interface APIError {
  detail: string;
}

// types returned by API
export interface apiPlayer {
  name: string;
  id: number;
}

export async function call(this: API, path: string, args: RequestInit = {}) {
  if (this.token !== undefined) {
    if (args.headers === undefined) args.headers = {};
    (args.headers as any)["Authorization"] = `Bearer ${this.token}`;
  }
  return await fetch(this.base + path, args);
}

// Workaround for default value
export const APIContext = createContext<API>(undefined as any);

/** Shortcut for `useContext(APIContext)` */
export function useAPI(): API {
  return useContext(APIContext);
}
