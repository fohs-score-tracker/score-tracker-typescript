import { useState } from "react";
import { apiPlayer } from "../api";
import Alert from "../components/Alert";
import PlayersScreen from "./PlayersScreen";

interface IProps {
  players: apiPlayer[];
}

export default function WelcomeScreen({ players }: IProps) {
  const [showAlert, toggleAlert] = useState(true);
  return (
    <div className="container mx-auto mt-4">
      <Alert
        show={showAlert}
        onClose={() => toggleAlert(false)}
        className="bg-blue-100 shadow-blue-200 text-blue-900"
      >
        test
      </Alert>
      <h1 color="blue">Hello Everyone</h1>
      <PlayersScreen players={players} />
    </div>
  );
}
