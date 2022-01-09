import { useEffect, useState } from "react";
import { IApiCall } from "../api";
import CourtSvg from "../components/CourtSvg";
import LoadGamePlayers from "../components/LoadGamePlayers";
import {
  IGameResult,
  IPlayerResult,
  ISession,
  IUserResult,
} from "../schemaTypes";

interface IProps {
  apiCall: IApiCall;
  session: ISession;
}

export default function GameScreen(props: IProps) {
  const { apiCall, session } = props;
  const [gameInfo, setGameInfo] = useState<IGameResult | undefined>(undefined);

  useEffect(() => {
    fetchGame(session.gameId as number);
  }, [session.gameId]);

  const fetchGame = async (id: number) => {
    const res = await apiCall(`/games/${id}`);
    const gameData = await res.json();
    setGameInfo(gameData);
  };

  return (
    <div className="m-4">
      <h1 className="text-center text-5xl">GameScreen</h1>
      <CourtSvg
        apiCall={apiCall}
        ignoreClicks={false}
        requireActive={false}
        activePlayerList={[]}
      />

      {gameInfo && gameInfo.players.length > 0 ? (
        <LoadGamePlayers gameInfo={gameInfo} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
