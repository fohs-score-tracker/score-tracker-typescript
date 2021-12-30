import { useState } from "react";
import { API, APIContext, call } from "./api";
import "./styles.sass";
import LoginScreen from "./screens/LoginScreen";
interface IState {
  api: API;
}

export default function App() {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [base, setBase] = useState<string>(
    "https://fohs-score-tracker.herokuapp.com"
  );
  const [state, updateState] = useState<IState>({
    api: {
      token,
      setToken,
      base,
      setBase,
      call,
    },
  });
  return (
    <APIContext.Provider value={state.api}>
      <LoginScreen />
    </APIContext.Provider>
  );
}
