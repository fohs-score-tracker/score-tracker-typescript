import { useState } from "react";
import { apiPlayer, IApiCall } from "../api";
import Alert from "../components/Alert";
import PlayersScreen from "./PlayersScreen";

interface IProps {
  apiCall: IApiCall;
  api: { base: string; token?: string };
}

export default function WelcomeScreen({ apiCall, api }: IProps) {
  const [showAlert, toggleAlert] = useState(true);

  const players: apiPlayer[] = []; //  not my problem
  return (
    <div className="container mx-auto mt-4">
      <Alert
        show={showAlert}
        onClose={() => toggleAlert(false)}
        className="bg-blue-100 shadow-blue-200 text-blue-900"
      >
        <pre className="whitespace-pre-wrap font-code text-blue-900">
          {JSON.stringify(api, null, 2)}
        </pre>
      </Alert>
      <h1 color="blue">Hello Everyone</h1>
      <PlayersScreen players={players} />
    </div>
  );
}
