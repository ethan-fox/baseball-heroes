
import { TEAM_ID_TO_INFO } from "../../constant/team" 

const gameResultStyler = (gameResult) => { return {"color": (gameResult.includes("W") ? "green" : "red")}}

const teamStyler = (opponentId) => {
    const team = TEAM_ID_TO_INFO[opponentId]

    return {
        "color": team.textColor,
        "background-color": team.primaryColor,
        "border-color": team.secondaryColor
    }
}

export {
    gameResultStyler,
    teamStyler
}
