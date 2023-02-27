import "./StatTile.css"

function StatTile(props) {
    const value = props.value;
    const type = props.type;

    return <div className="stat-tile">
        <div className="stat-tile__type">{type}</div>
        <div className="stat-tile__value">{value}</div>
    </div>
}

export default StatTile;