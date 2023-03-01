import * as _ from "lodash"

import { TEAM_ID_TO_INFO } from "../../../constant/team"

// TODO LMAO this is weird
const TEAM_SELECT_VALUES = _.range(0, 6).map((i) => { return { value: i, label: TEAM_ID_TO_INFO[i].name } })

export {
    TEAM_SELECT_VALUES
};