import "./GameItem.css";

import { formattedCalculation } from "../../util/gameItemFormatter"

import BigCard from "../Card/BigCard/BigCard";
import GameData from "../GameData/GameData";
import StatLine from "../StatLine/StatLine";

function GameItem(props) {

    // TODO this should be calculated in a higher-order, taking into account full season's stats.
    const avg = (props.H / props.AB)
    const obp = (props.H + props.BB) / (props.AB + props.BB)

    const statLine = {
        playerStats: [
            {type: "AB", value: props.AB,},
            {type: "H", value: props.H,},
            {type: "BB", value: props.BB,},
            {type: "AVG", value: formattedCalculation(avg)},
            {type: "OBP", value: formattedCalculation(obp)},
        ]
    }

    // Two divs:
    // "Game data" -- regardless of the player
    // "Player data" -- specific to player performance
    // TODO better convention to pass in gameData?
    return <BigCard className="game-item">
        <GameData {...props.gameData}/>
        <StatLine {...statLine}/>
    </BigCard>;
}

export default GameItem;