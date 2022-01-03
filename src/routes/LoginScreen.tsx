import { FormEvent, useState } from "react";
import { APIError, IApiCall } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Alert from "../components/Alert";
import Modal from "../components/Modal";

interface IProps {
  apiCall: IApiCall;
  base: string;
  onTokenChange: (s: string) => void;
  onBaseChange: (s: string) => void;
}

export default function LoginScreen(props: IProps) {
  const { apiCall, base, onTokenChange, onBaseChange } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [waitingForLogin, setWaitingForLogin] = useState(false);
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [showOptions, toggleShowOptions] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      setWaitingForLogin(true);
      setLoginError(undefined);
      let result = (await apiCall("/token", {
        method: "POST",
        body: formData,
      }).then((r) => r.json())) as { access_token: string } | APIError;
      if ("access_token" in result) {
        onTokenChange(result.access_token);
        setWaitingForLogin(false);
        // TODO: redirect route here :)
      } else {
        setWaitingForLogin(false);
        setLoginError(result.detail);
      }
    } catch (e) {
      console.error(e);
      setWaitingForLogin(false);
      setLoginError("Server broke");
    }
  }

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center bg-secondary">
        <Alert
          show={!!loginError}
          onClose={() => setLoginError(undefined)}
          className="absolute inset-x-8 top-8 bg-red-300 shadow-red-200 text-red-900"
        >
          {waitingForLogin ? "Waiting..." : loginError}
        </Alert>
        <div className="rounded-md mx-auto overflow-hidden shadow-lg shadow-black">
          <h1 className="font-light text-center bg-primary px-4 py-2 text-white text-xl">
            <span className="block md:inline">Welcome to </span>
            <span className="font-black">FOHS ScoreTracker</span>
          </h1>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="bg-gray-100 p-3"
          >
            <label className="font-bold text-secondary block">Email</label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              required
              placeholder="Enter your email"
              type="email"
              className="input w-full"
            />
            <label className="font-bold text-secondary block mt-2">
              {" "}
              Password{" "}
            </label>
            <input
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="input w-full"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="check mr-1 bg-gray-100"
              />
              <label htmlFor="rememberMe" className="text-secondary">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn bg-primary text-white w-full mt-2"
              disabled={waitingForLogin}
            >
              Login
            </button>
            <a
              href="#"
              className="text-primary text-sm block text-center underline mt-1"
            >
              Forgot password?
            </a>
          </form>
        </div>
        <button
          className="text-white opacity-80 text-xs underline mt-2"
          onClick={() => toggleShowOptions(true)}
        >
          Show Advanced Options
        </button>
      </div>
      <Modal
        open={showOptions}
        onClose={() => toggleShowOptions(false)}
        title="Advanced Options"
      >
        <Alert show="always" className="mb-4 bg-yellow-300 shadow-yellow-200 text-yellow-900">
          <FontAwesomeIcon className="mr-4" size="lg" icon={faExclamationTriangle}/>
          Only change these if you know what you're doing
        </Alert>
        <label className="font-bold text-secondary block"> API Base </label>
        <input
          type="url"
          className="font-monospace input w-full"
          value={base}
          required
          onChange={(event) => onBaseChange(event.target.value)}
        />
      </Modal>
    </>
  );
}
