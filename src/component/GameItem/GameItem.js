import "./GameItem.css";

import { formattedCalculation } from "../../util/gameItemFormatter"

import GameData from "../GameData/GameData";

function GameItem(props) {

    const avg = (props.H / props.AB)
    const obp = (props.H + props.BB) / (props.AB + props.BB)

    // Two divs - 
    // "Game data" -- regardless of the player
    // "Player data" -- specific to player performance
    return <div className="game-item">
        <GameData {...props.gameData}/>
        <div className="game-item__section">
            <div className="game-item__meta">AB: {props.AB}</div>
            <div className="game-item__meta">H: {props.H}</div>
            <div className="game-item__meta">BB: {props.BB}</div>
            <div className="game-item__calculated">AVG: {formattedCalculation(avg)}</div>
            <div className="game-item__calculated">OBP: {formattedCalculation(obp)}</div>
        </div>
    </div>;
}

export default GameItem;