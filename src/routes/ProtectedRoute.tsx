import { useEffect, ReactNode } from "react";
import { Navigate, useNavigate } from "react-router";
import { IApiCall } from "../api";
import { ISession } from "../schemaTypes";

interface IProps {
  children: ReactNode;
  apiCall: IApiCall;
  session: ISession;
  // onTokenChange: (s: string) => void;
  // onBaseChange: (s: string) => void;
}

export default function ProtectedRoute({ children, apiCall, session }: IProps) {
  const navigate = useNavigate();

  let isAuthenticated = session.token !== "";

  useEffect(() => {
    userConfirm().catch((e) => {
      console.error(e);
    });
  }, []);

  async function userConfirm() {
    const res = await apiCall("/users/me");
    if (res.status === 200) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
  }

  if (!isAuthenticated) navigate("/login");
  return children as JSX.Element;
}
