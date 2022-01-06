import { IApiCall } from "../api";
import { IGameResult, ISession } from "../schemiaTypes";
import Game from "./Game";

interface IProps {
  apiCall: IApiCall;
  games: Array<IGameResult>;
  onDelete: (id: number) => void;
  session:ISession;
}

function GameListDisplay(props: IProps) {
  const { apiCall, games, onDelete, session } = props;
  return (
    <div className="flex justify-center  items-center">
      <div className=" grid grid-cols-2 gap-2   space-x-2 ">
        {games.map((game: IGameResult) => (
          <Game
            key={game.id}
            id={game.id}
            gameName={game.name}
            apiCall={apiCall}
            onDelete={onDelete}
            session={session}

          />
        ))}
      </div>
    </div>
  );
}

export default GameListDisplay;
