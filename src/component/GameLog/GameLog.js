import "./GameLog.css"

import AddGameItemButton from "../AddGameItemButton/AddGameItemButton";
import BigCard from "../Card/BigCard/BigCard";
import GameItem from "../GameItem/GameItem";

const doThing = () => console.log('YO')

const GameLog = (props) => <BigCard className="game-log">
    <AddGameItemButton className="game-log__adder_button" onClick={doThing}/>
    {props.playerGames.map(gameInfo => <GameItem {...gameInfo} />)}
</BigCard>


export default GameLog;