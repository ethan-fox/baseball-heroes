import "./GameItem.css";

import { formattedCalculation } from "../../util/gameItemFormatter"
import { TEAM_ID_TO_INFO } from "../../constant/team"

import { gameResultStyler, teamStyler } from "./styler";

function GameItem(props) {

    const avg = (props.H / props.AB)
    const obp = (props.H + props.BB) / (props.AB + props.BB)

    const opponentName = TEAM_ID_TO_INFO[props.gameData.opponentId].name

    // Two divs - 
    // "Game data" -- regardless of the player
    // "Player data" -- s pecific to player performance
    return <div className="game-item">
        <div className="game-item__section">
            <div className="game-item__meta">{props.gameData.date.toDateString()}</div>
            <div className="game-item__opponent" style={teamStyler(props.gameData.opponentId)}>{opponentName}</div>
            <b className="game-item__meta" style={gameResultStyler(props.gameData.result)}>{props.gameData.result}</b>
        </div>
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