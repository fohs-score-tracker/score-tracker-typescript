import { useState } from "react";
import { API, APIContext, useAPI } from "./api";
import "./styles.sass";
import LoginScreen from "./screens/LoginScreen";
interface IState {
  api: API;
}

export default function App() {
  const [state, updateState] = useState<IState>({
    api: {
      ...useAPI(),
      setToken(token: string) {
        updateState(({ api }) => ({ api: { ...api, token } }));
      },
      setBase(base: string) {
        updateState(({ api }) => ({ api: { ...api, base } }));
      },
        
    },


  });
  return (
    <APIContext.Provider value={state.api}>
      {/*
          TODO
       */}
      <LoginScreen/>
    </APIContext.Provider>
  );
}
