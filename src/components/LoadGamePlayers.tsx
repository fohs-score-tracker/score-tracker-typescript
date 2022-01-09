import { IGameResult, IPlayerResult } from "../schemaTypes";
import Player from "./Player";

interface IProps {
  gameInfo: IGameResult;
}

export default function LoadGamePlayers(props: IProps) {
  const { gameInfo } = props;
  return (
    <div className="grid grid-cols-2 gap-2  space-x-2">
      {gameInfo.players.map((player: IPlayerResult) => (
        <Player key={player.id} name={player.name} />
      ))}
    </div>
  );
}
