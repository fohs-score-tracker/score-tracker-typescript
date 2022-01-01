import { apiPlayer } from "../api";
import Player from "../components/Player";

interface IProps {
  players: apiPlayer[];
}

export default function PlayersScreen({ players }: IProps) {
  return (
    <div>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}
