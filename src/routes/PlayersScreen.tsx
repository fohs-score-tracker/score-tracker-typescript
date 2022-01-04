import { APIPlayer } from "../api";
import Player from "../components/Player";

interface IProps {
  players: APIPlayer[];
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
