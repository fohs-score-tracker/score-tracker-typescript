import { useEffect, useState } from "react";
import { IApiCall } from "../api";
import LoadGamePlayers from "../components/LoadGamePlayers";
import { IGameResult, IPlayerResult, ISession, IUserResult } from "../schemiaTypes";

interface IProps {
  apiCall: IApiCall;
  session: ISession;
}




export default function GameScreen(props:IProps) {
  const { apiCall, session } = props;
  const [gameInfo, setGameInfo] = useState({id: 0, name:"Game1",user: {} as IUserResult, players: [] as IPlayerResult[] , other_team: String});

  useEffect(() => {
      fetchGame(session.gameId as number); }, [session.gameId]);


  const fetchGame = async ( id:number) => {
    const res = await apiCall(`/games/${id}`);
    const gameData = await res.json();
    setGameInfo(gameData);
  };


  return (
    <div className="">
      <h1 className="text-center text-size ">GameScreen</h1>      
             {gameInfo.players.length  > 0 ? ( <LoadGamePlayers gameInfo={gameInfo} />) : (<div>Loading...</div>)}
             
        </div>
  );
}

