import { useState } from "react";
import { useAPI } from "../api";

export default function LoginScreen() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const api = useAPI();

  const handleUsername = (event: any) => {
    setState({ ...state, username: event.target.value });
  };
  const handlePassword = (event: any) => {
    setState({ ...state, password: event.target.value });
  };

  const handleSubmit = (event: any) => {
    // alert("A name was submitted: ");
    // let formData = new FormData();
    // formData.append("username", state.username);
    // formData.append("password", state.password);

    // let test = api
    //   .call("/token", {
    //     method: "POST",
    //     body: formData,
    //   })
    //   .then((r) => r.json());
    event.preventDefault();
    alert("You have submitted the form.");
  };

  return (
    <div>
      <div className="h-100 d-flex align-items-center">
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-light border rounded p-3 shadow-lg col-11 col-md-auto"
        >
          <h1 className="fw-light text-center">
            Welcome to
            <br className="d-md-none" />
            <b> FOHS ScoreTracker</b>
          </h1>
          <hr />

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
