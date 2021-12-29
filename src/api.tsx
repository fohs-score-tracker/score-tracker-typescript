import { createContext, useContext } from "react";

export interface API {
  token?: string;
  base: string;
  call: (path: string, headers: any, method: string) => Promise<Response>;
  setToken: (newToken: string) => void;
  setBase: (newBase: string) => void;
}

export const APIContext = createContext<API>({
  base: "https://fohs-score-tracker.herokuapp.com",
  async call(path: string, headers: any = {}, method = "GET") {
    if (this.token !== undefined)
      headers["Authorization"] = `Bearer ${this.token}`;

    return await fetch(this.base + path, { method, headers });
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
