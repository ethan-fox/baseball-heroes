import "./GameLog.css"

import GameItem from "../GameItem/GameItem";
import BigCard from "../Card/BigCard/BigCard"

function GameLog(props) {
    return <BigCard className='game-log'>
        {props.playerGames.map(gameInfo => <GameItem {...gameInfo} />)}
    </BigCard>
}

export default GameLog;