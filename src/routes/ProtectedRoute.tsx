import { Navigate } from "react-router";

function ProtectedRoute(props: any) {
  if (sessionStorage.getItem("score-tracker-session") !== null) {
    const session = JSON.parse(
      sessionStorage.getItem("score-tracker-session") as string
    );
    props.onTokenChange(session.token);
    props.onBaseChange(session.base);
  }

  const isAuthenticated =
    sessionStorage.getItem("score-tracker-session") !== null;

  return isAuthenticated ? props.screen : <Navigate to="/login" />;
}

export default ProtectedRoute;
