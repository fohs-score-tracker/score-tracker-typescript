import { useState, useEffect, FC } from "react";
import { IApiCall } from "./api";
import LoginScreen from "./routes/LoginScreen";
import { Routes, HashRouter, Route } from "react-router-dom";
import WelcomeScreen from "./routes/WelcomeScreen";
import GameList from "./routes/GameList";

export default function App() {
  const [base, setBase] = useState("https://fohs-score-tracker.herokuapp.com");
  const [token, setToken] = useState<string | undefined>(undefined);

  async function apiCall(path: string, args: RequestInit = {}) {
    if (token !== undefined) {
      if (args.headers === undefined) args.headers = {};
      (args.headers as any)["Authorization"] = `Bearer ${token}`;
    }
    return await fetch(base + path, args);
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<WelcomeScreen apiCall={apiCall} api={{ base, token }} />}
          />
          <Route
            path="login"
            element={
              <LoginScreen
                apiCall={apiCall}
                base={base}
                onTokenChange={(s) => setToken(s)}
                onBaseChange={(s) => setBase(s)}
              />
            }
          />
          <Route path="games" element={<GameList apiCall={apiCall} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
