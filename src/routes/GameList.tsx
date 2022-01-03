import { useEffect, useState } from "react";
import { IApiCall } from "../api";
import Game from "../components/Game";

interface IProps {
  apiCall: IApiCall;
}

export default function GameList(props: IProps) {
  const { apiCall } = props;
  const [games, setGames] = useState([]);

  useEffect(() => {
    const data = getGames();
    async function getGames() {
      const res = await apiCall("/games");
      const gameData = await res.json();
      setGames(gameData);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center">Game List</h1>
      <div className="flex justify-center  items-center">
        <div className=" grid grid-cols-2 gap-4  ">
          {games.map((game) => (
            <Game key={game.id} gameName={game.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
