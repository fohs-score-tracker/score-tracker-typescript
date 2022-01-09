import { IApiCall } from "../api";
import { IGameResult, ISession } from "../schemaTypes";
import Game from "./Game";

interface IProps {
  apiCall: IApiCall;
  games: Array<IGameResult>;
  onDelete: (id: number) => void;
  session: ISession;
  onGameIdChange: (s: number) => void;
}

export default function GameListDisplay(props: IProps) {
  const { apiCall, games, onDelete, session, onGameIdChange } = props;
  return (
    <div className="grid grid-cols-2 place-content-evenly gap-10">
      {games.map((game: IGameResult) => (
        <Game
          key={game.id}
          id={game.id}
          gameName={game.name}
          apiCall={apiCall}
          onDelete={onDelete}
          session={session}
          onGameIdChange={onGameIdChange}
        />
      ))}
    </div>
  );
}
