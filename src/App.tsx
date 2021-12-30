import { useState } from "react";
import { API, APIContext, call } from "./api";
import "./styles.sass";
import LoginScreen from "./screens/LoginScreen";
import { Routes, HashRouter, Route } from "react-router-dom";

interface IState {
  api: API;
}

export default function App() {
  const [state, setState] = useState<IState>({
    api: {
      call,
      base: "https://fohs-score-tracker.herokuapp.com",
      token: undefined,
      setBase: (base) => setState({ ...state, api: { ...state.api, base } }),
      setToken: (token) => setState({ ...state, api: { ...state.api, token } }),
    },
  });
  return (
    <APIContext.Provider value={state.api}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginScreen />} />
            <Route path="login" element={<LoginScreen />} />
          </Route>
        </Routes>
      </HashRouter>
    </APIContext.Provider>
  );
}
