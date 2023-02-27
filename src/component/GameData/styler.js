
import { TEAM_ID_TO_INFO } from "../../constant/team" 

const resultTileStyler = (gameResult) => { return {"background-color": (gameResult.includes("W") ? "#c7ffba" : "#ffabab") } }

const gameResultStyler = (gameResult) => { return {"font-weight": "bold", "color": (gameResult.includes("W") ? "green" : "red")}}

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
    resultTileStyler,
    teamStyler
}
