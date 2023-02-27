import "./GameLog.css"

import GameItem from "../GameItem/GameItem";
import BigCard from "../Card/BigCard/BigCard"

const GameLog = (props) => <BigCard className='game-log'>
    {props.playerGames.map(gameInfo => <GameItem {...gameInfo} />)}
</BigCard>


export default GameLog;