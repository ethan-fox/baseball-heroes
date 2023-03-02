import * as _ from "lodash";

import { MONTH_VALUE_TO_NAME } from "../constant";

/* Generate mapping of stats per-month. Final shape:
    {
        "0": { G, AB, ... }
        "1": { G, AB, ... }
        ...
    }
*/
const collateSummaryDataFromRaw = (rawData) => {

    const summaryByMonth = {
        ..._.range(0, 12).map(i => {
            return {
                month: MONTH_VALUE_TO_NAME[i],
                G: 0,
                AB: 0,
                H: 0,
                BB: 0,
                K: 0
            }
        })
    };

    Object.entries(rawData).forEach(([month, gamesForMonth]) => {
        const monthToUpdate = summaryByMonth[month]
        gamesForMonth.forEach(game => {
            monthToUpdate.G += 1
            monthToUpdate.H += game.H
            monthToUpdate.AB += game.AB
            monthToUpdate.BB += game.BB
            monthToUpdate.K += game.K
        });
    });

    return _.range(3, 11).map(i => summaryByMonth[i]);
}

export default collateSummaryDataFromRaw;