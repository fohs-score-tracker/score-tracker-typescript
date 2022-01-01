import { Player } from "../components/Player"

export const PlayersScreen = ({players}) => {
    return (
        <div>
            {players.map((player) => (
         <Player key={player.id} player={player} />))}   
        </div>
    )
}
