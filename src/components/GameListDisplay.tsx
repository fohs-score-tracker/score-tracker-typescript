import React from "react";
import { IApiCall } from "../api";
import Game from "./Game";

interface IProps {
  apiCall: IApiCall;
  games: Array<object>; // TODO: change to type to Game
  onDelete: (id: number) => void;
}

function GameListDisplay(props: IProps) {
  const { apiCall, games, onDelete } = props;
  return (
    <div className="flex justify-center  items-center">
      <div className=" grid grid-cols-2 gap-2  space-x-2 ">
        {games.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            gameName={game.name}
            apiCall={apiCall}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default GameListDisplay;
