import { useState } from "react";
import { APIError, useAPI } from "../api";
import Alert from "../components/Alert";

interface IState {
  username: string;
  password: string;
  waitingForLogin: boolean;
  loginError?: string;
}

export default function LoginScreen() {
  const [state, setState] = useState<IState>({
    username: "",
    password: "",
    waitingForLogin: false,
    loginError: undefined,
  });
  const api = useAPI();

  const handleUsername = (event: any) => {
    setState({ ...state, username: event.target.value });
  };
  const handlePassword = (event: any) => {
    setState({ ...state, password: event.target.value });
  };

  const handleApi = (event: any) => {
    api.setBase(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("username", state.username);
    formData.append("password", state.password);

    try {
      setState({ ...state, waitingForLogin: true });
      let result = (await api
        .call("/token", {
          method: "POST",
          body: formData,
        })
        .then((r) => r.json())) as { access_token: string } | APIError;
      if ("access_token" in result) {
        api.setToken(result.access_token);
        setState({ ...state, waitingForLogin: false });
      } else {
        setState({
          ...state,
          waitingForLogin: false,
          loginError: result.detail,
        });
      }
    } catch (e) {
      console.error(e);
      setState({
        ...state,
        waitingForLogin: false,
        loginError: "Server broke",
      });
    }
  };

  return (
    <div>
      <div className="h-100 d-flex align-items-center">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="mx-auto bg-light border rounded p-3 shadow-lg col-11 col-md-auto"
        >
          <h1 className="fw-light text-center">
            Welcome to
            <br className="d-md-none" />
            <b> FOHS ScoreTracker</b>
          </h1>
          <hr />
          {state.waitingForLogin ? (
            <Alert
              type="info"
              className="position-absolute bottom-0 start-0 end-0 m-1"
            >
              Logging in...
            </Alert>
          ) : null}
          {state.loginError ? (
            <Alert
              className="position-absolute top-0 start-0 end-0 m-1"
              type="danger"
            />
          ) : null}

          <div className="mb-3">
            <label className="form-label"> Email </label>
            <input
              onChange={handleUsername}
              value={state.username}
              required
              placeholder="Enter your email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-1 mb-md-2">
            <label className="form-label"> Password </label>
            <input
              required
              onChange={handlePassword}
              value={state.password}
              type="password"
              placeholder="Enter your password"
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between mb-1 mb-md-2">
            <div className="form-check col-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#">reset password</a>
          </div>
          <div className="d-flex flex-wrap">
            <button
              type="submit"
              className="btn btn-primary col-md-auto col-12 mb-2 mb-md-0 me-0 me-md-2"
              disabled={state.waitingForLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-secondary col-md-auto col-12"
              data-bs-toggle="collapse"
              data-bs-target="#loginSettings"
            >
              Settings
            </button>
          </div>

          <div
            className="collapse rounded border shadow-sm mt-2 p-2"
            id="loginSettings"
          >
            <div className="text-danger text-center mb-1">
              Developer Options
            </div>
            <label className="form-label"> API Base </label>
            <input
              type="url"
              className="form-control font-monospace"
              onChange={(event) => api.setBase(event.target.value)}
              value={api.base}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function alertCouldNotLogin(props: any) {
  return (
    <div
      className={`alert alert-dismissible d-flex align-items-center alert-${props.errorType}  `}
    >
      <slot>Something went wrong</slot>
      {/* <button type="button" className="btn-close" onClick={()} ></button> */}
    </div>
  );
}
