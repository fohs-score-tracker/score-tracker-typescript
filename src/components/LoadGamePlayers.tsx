import { IGameResult, IPlayerResult } from "../schemiaTypes"
import Player from "./Player";

interface IProps {
    gameInfo: IGameResult;
}



function LoadGamePlayers(props: IProps) {
    const { gameInfo } = props;
    return (
        <div className="grid grid-cols-2 gap-2  space-x-2">
            {gameInfo.players.map((player: IPlayerResult) => (
                <Player key={player.id} name={player.name} />
            ))}
        </div>
    )
}

export default LoadGamePlayers
