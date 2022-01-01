import { useState, useEffect, FC } from "react";
import { API, APIContext, call } from "./api";
import "./styles.sass";
import LoginScreen from "./screens/LoginScreen";
import { Routes, HashRouter, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";

interface IState {
  api: API;
}
export default function App() {
  const [players, setPlayers] = useState([]);

  const [api, setAPI] = useState<API>({
    call,
    base: "https://fohs-score-tracker.herokuapp.com",
    token: undefined,
    setBase: (base) => {
      setAPI({ ...api, base });
    },
    setToken: (token) => {
      setAPI({ ...api, token });
    },
  });
  // use Effect to getPlayers from Server
  useEffect(() => {
    async function getPlayers() {
      const response = await api.call("/players");
      if (response.ok) setPlayers(await response.json());
    }
    getPlayers();
  }, []);

  return (
    <APIContext.Provider value={api}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<WelcomeScreen players={players} />} />
            <Route path="login" element={<LoginScreen />} />
          </Route>
        </Routes>
      </HashRouter>
    </APIContext.Provider>
  );
}
