
import GameItem from "../GameItem/GameItem";

function GameLog(props) {
    return <div>
        {props.playerGames.map(gameInfo => <GameItem {...gameInfo} />)}
    </div>
}

export default GameLog;