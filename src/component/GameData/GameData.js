import "./GameData.css"

import { gameResultStyler, resultTileStyler, teamStyler } from "./styler";
import { TEAM_ID_TO_INFO } from "../../constant/team"

function GameData(props) {
    return <div>
        <div className="game-data" style={resultTileStyler(props.result)}>
            <div>{props.date.toLocaleDateString('en-us')}</div>
            <div className="game-data__opponent" style={teamStyler(props.opponentId)}>{TEAM_ID_TO_INFO[props.opponentId].name}</div>
            <div style={gameResultStyler(props.result)}>{props.result}</div>
        </div>
    </div>;
}

export default GameData;