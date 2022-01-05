import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { IApiCall } from "../api";

interface IProps {
  screen: JSX.Element;
  apiCall: IApiCall;
}

function ProtectedRoute(props: any) {
  const { screen, apiCall } = props;
  const navigate = useNavigate();

  let isAuthenticated = props.session.token !== "";

  useEffect(() => {
    userConfirm().catch((e) => {
      console.error(e);
    });
  }, []);

  async function userConfirm() {
    const res = apiCall("/users/me");
    if (res.status === 200) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
  }

  return isAuthenticated ? screen : <Navigate to="/login" />;
}

export default ProtectedRoute;
