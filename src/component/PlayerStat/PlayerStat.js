import "./PlayerStat.css"

function PlayerStat(props) {
    const value = props.value;
    const type = props.type;

    return <div className="player-stat">
        <div className="player-stat__type">{type}</div>
        <div className="player-stat__value">{value}</div>
    </div>
}

export default PlayerStat;