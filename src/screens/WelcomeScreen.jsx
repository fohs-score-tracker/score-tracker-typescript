import { PlayersScreen } from "./PlayersScreen"


export const WelcomeScreen = ({players}) => {
    return (
        <div>
            <h1 color="blue">Hello Everyone</h1>
            <PlayersScreen players={players} />
        </div>
    )
}
