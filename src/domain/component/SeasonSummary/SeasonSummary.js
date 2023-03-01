import "./SeasonSummary.css"

import * as _ from "lodash";
import Select from "react-select";

import BigCard from "../../../ui/component/Card/BigCard/BigCard";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SeasonSummary = (props) => {

    const summaryByMonth = {};

    const yearsRange = new Set()

    _.range(0, 12).forEach(ea => summaryByMonth[ea] = {
        G: 0,
        H: 0,
        AB: 0,
        BB: 0,
        K: 0
    });

    props.playerGames.forEach(g => {
        yearsRange.add(g.gameData.date.getFullYear())
        const monthToUpdate = summaryByMonth[g.gameData.date.getMonth()]

        monthToUpdate.G += 1
        monthToUpdate.H += g.H
        monthToUpdate.AB += g.AB
        monthToUpdate.BB += g.BB
        monthToUpdate.K += g.K
    });

    const yearSelectOpts = Array.from(yearsRange).map(ea => {return {value: ea, label: ea}})

    const data = _.range(2, 10).map(i => summaryByMonth[i]);

    return <BigCard className="season-summary">
        <div className="season-summary__filter">
            <div>Filter by Year</div>
            <Select
                options={yearSelectOpts}
                defaultValue={yearSelectOpts.at(-1)}
            />
        </div>
        <BigCard className="season-summary__chart">
            <ResponsiveContainer
                width="100%" height={300}
            >
                <BarChart
                    data={data}
                    margin={{
                        top: 15,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="games" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="G" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </BigCard>
    </BigCard>;
}

export default SeasonSummary;