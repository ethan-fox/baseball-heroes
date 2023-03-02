import "./SeasonSummary.css"

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import * as _ from "lodash";

import BigCard from "../../../ui/component/Card/BigCard/BigCard";
import SeasonSummaryFilterCard from "./SeasonSummaryFilterCard/SeasonSummaryFilterCard";

import { MONTH_VALUE_TO_NAME } from "./constant";

const collateSummaryDataFromRaw = (rawData) => {

    const summaryByYearAndMonth = {};

    _.range(0, 12).forEach(ea => summaryByYearAndMonth[ea] = {
        G: 0,
        H: 0,
        AB: 0,
        BB: 0,
        K: 0
    });

    // return data
}

const SeasonSummary = (props) => {

    const activeYears = [];


    Object.entries(props.playerGames).forEach(([year, gamesForYear]) => {
        activeYears.push(year)
    });
    activeYears.sort();

    const mostRecentActiveYear = activeYears.at(-1)

    /*
    Generate mapping of stats per-month. Final shape:
    {
        "0": { G, AB, ... }
        "1": { G, AB, ... }
        ...
    }
    */
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

    const yearSelectOpts = Array.from(activeYears).map(ea => { return { value: ea, label: ea } })

    const chartData = _.range(3, 11).map(i => summaryByMonth[i]);

    const [filterYear, setFilterYear] = useState(mostRecentActiveYear)

    const handleYearFilterChange = (value) => {
        setFilterYear(value);
        props.onYearFilterChange(value);
    }

    Object.entries(props.playerGames[filterYear]).forEach(([month, gamesForMonth]) => {
        const monthToUpdate = summaryByMonth[month]
        gamesForMonth.forEach(game => {
            monthToUpdate.G += 1
            monthToUpdate.H += game.H
            monthToUpdate.AB += game.AB
            monthToUpdate.BB += game.BB
            monthToUpdate.K += game.K
        });
    });

    return <BigCard className="season-summary">
        <SeasonSummaryFilterCard
            yearSelectOpts={yearSelectOpts}
            onYearChange={handleYearFilterChange}
        />
        <BigCard className="season-summary__chart">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={chartData}
                    margin={{
                        top: 15,
                        right: 20,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="G" fill="#41ba00" />
                </BarChart>
            </ResponsiveContainer>
        </BigCard>
    </BigCard>;
}

export default SeasonSummary;