import { useState, useEffect, FC } from "react";
import { API, APIContext, call } from "./api";
import "./styles.sass";
import LoginScreen from "./screens/LoginScreen";
import { Routes, HashRouter, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";

interface IState {
  api: API;
}

// interface IState {
//   api: API;
// }
export default function App() {
  const [players, setPlayers] = useState([]);

  // use Effect to getPlayers from Server
  useEffect(() => {
    const getPlayers = async () => {
      const playersFromServer = await fetchPlayers();
      setPlayers(playersFromServer);
    };
    getPlayers();
  }, []);

  // Fetch Players from API
  const fetchPlayers = async () => {
    const res = await fetch("https://fohs-score-tracker.herokuapp.com/players");
    const data = await res.json();
    // print to console
    console.log(data);
    return data;
  };

  const [state, setState] = useState<IState>({
    api: {
      call,
      base: "https://fohs-score-tracker.herokuapp.com",
      token: undefined,
      setBase: (base) => {
        setState({ api: { ...state.api, base } });
      },
      setToken: (token) => {
        setState({ api: { ...state.api, token } });
      },
    },
  });
  return (
    <APIContext.Provider value={state.api}>
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
