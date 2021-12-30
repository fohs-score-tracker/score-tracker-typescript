import { createContext, useContext } from "react";

export interface API {
  token?: string;
  base: string;
  call: (path: string, args: RequestInit) => Promise<Response>;
  setToken: (newToken: string) => void;
  setBase: (newBase: string) => void;
}

export const APIContext = createContext<API>({
  base: "https://fohs-score-tracker.herokuapp.com",
  async call(path: string, args: RequestInit = {}) {
    if (this.token !== undefined) {
      if (args.headers === undefined) args.headers = {};
      (args.headers as any)["Authorization"] = `Bearer ${this.token}`;
    }
    return await fetch(this.base + path, args);
  },
  // These should be overwritten by the parent of the context's `Provider`.
  setToken() {
    throw undefined;
  },
  setBase() {
    throw undefined;
  },
});

/** Shortcut for `useContext(APIContext)` */
export function useAPI(): API {
  return useContext(APIContext);
}
