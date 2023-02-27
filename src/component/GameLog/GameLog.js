import './GameLog.css'

import GameItem from "../GameItem/GameItem";

function GameLog(props) {
    return <div className='game-log'>
        {props.playerGames.map(gameInfo => <GameItem {...gameInfo} />)}
    </div>
}

export default GameLog;