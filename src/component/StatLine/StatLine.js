import "./StatLine.css"

import PlayerStat from "../PlayerStat/PlayerStat"

function StatLine(props) {

    return <div className="stat-line">
        {props.playerStats.map(ea => <PlayerStat {...ea}/>)}
    </div>
}

export default StatLine;