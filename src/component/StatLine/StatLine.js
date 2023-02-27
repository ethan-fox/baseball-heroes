import "./StatLine.css"

import StatTile from "../StatTile/StatTile"

function StatLine(props) {

    return <div className="stat-line">
        {props.playerStats.map(ea => <StatTile {...ea}/>)}
    </div>
}

export default StatLine;