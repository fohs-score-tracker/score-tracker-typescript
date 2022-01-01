import { apiPlayer } from "../api";
import PlayersScreen from "./PlayersScreen";

interface IProps {
  players: apiPlayer[];
}

export default function WelcomeScreen({ players }: IProps) {
  return (
    <div>
      <h1 color="blue">Hello Everyone</h1>
      <PlayersScreen players={players} />
    </div>
  );
}
