import { useSessionstorageState } from "rooks";
import LoginScreen from "./routes/LoginScreen";
import { Routes, HashRouter, Route } from "react-router-dom";
import WelcomeScreen from "./routes/WelcomeScreen";
import GameList from "./routes/GameList";
import ProtectedRoute from "./routes/ProtectedRoute";
import GameScreen from "./routes/GameScreen";

export default function App() {
  const [session, setSession] = useSessionstorageState(
    "score-tracker-session",
    {
      base: "https://fohs-score-tracker.herokuapp.com",
      token: "",
      gameId: 0,
    }
  );

  async function apiCall(path: string, args: RequestInit = {}) {
    if (session.token !== undefined) {
      if (args.headers === undefined) args.headers = {};
      (args.headers as any)["Authorization"] = `Bearer ${session.token}`;
    }
    return await fetch(session.base + path, args);
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element="Index page intentionally left blank." />
          <Route
            path="login"
            element={
              <LoginScreen
                apiCall={apiCall}
                base={session.base}
                onTokenChange={(s) => setSession({ ...session, token: s })}
                onBaseChange={(s) => setSession({ ...session, base: s })}
              />
            }
          />
          <Route
            path="games"
            element={
              <ProtectedRoute apiCall={apiCall} session={session}>
                <GameList
                  apiCall={apiCall}
                  session={session}
                  onGameIdChange={(id: number) =>
                    setSession({ ...session, gameId: id })
                  }
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="gamescreen"
            element={
              <ProtectedRoute apiCall={apiCall} session={session}>
                <GameScreen apiCall={apiCall} session={session} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

// <ProtectedRoute apiCall={apiCall} onTokenChange={(s: string) =>
//   setSession({ ...session, token: s })
// } onBaseChange={(s: string) =>
//   setSession({ ...session, base: s })
// } session={session} screen={<GameScreen apiCall={apiCall} session={session} onGameIdChange={(n: number) => setSession({ ...session, gameId: n })} />} />
