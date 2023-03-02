import { useState } from "react";

import AddGameItemForm from "./domain/component/AddGameItemForm/AddGameItemForm";
import GameLog from "./domain/component/GameLog/GameLog"
import SeasonSummary from "./domain/component/SeasonSummary/SeasonSummary";

const getActiveYears = (playerGames) => Object.entries(playerGames).sort()

function App() {

  const apiResponse = {
    2020: {
      6: [
        {
          gameData: {
            date: new Date(2020, 5, 2),
            opponentId: 5,
            result: "W 7-0"
          },
          AB: 5,
          H: 3,
          K: 2,
          BB: 1
        },
        {
          gameData: {
            date: new Date(2020, 5, 3),
            opponentId: 5,
            result: "L 2-4"
          },
          AB: 3,
          H: 0,
          K: 0,
          BB: 1
        },
        {
          gameData: {
            date: new Date(2020, 5, 4),
            opponentId: 4,
            result: "W 3-2"
          },
          AB: 4,
          H: 1,
          K: 1,
          BB: 0
        },
        {
          gameData: {
            date: new Date(2020, 5, 7),
            opponentId: 3,
            result: "L 5-6"
          },
          AB: 2,
          H: 0,
          K: 1,
          BB: 1
        }
      ],
      8: [
        {
          gameData: {
            date: new Date(2020, 7, 7),
            opponentId: 1,
            result: "W 4-1"
          },
          AB: 3,
          H: 3,
          K: 0,
          BB: 1
        }
      ]
    },
    2021: {
      6: [
        {
          gameData: {
            date: new Date(2021, 5, 1),
            opponentId: 1,
            result: "W 1-0"
          },
          AB: 3,
          H: 1,
          K: 0,
          BB: 0
        },
      ],
      8: [
        {
          gameData: {
            date: new Date(2021, 7, 3),
            opponentId: 1,
            result: "L 6-2"
          },
          AB: 4,
          H: 3,
          K: 0,
          BB: 1
        },
      ]
    }
  }

  const [playerGames, setPlayerGames] = useState(apiResponse);

  const activeYears = getActiveYears(playerGames)

  const [filterYear, setFilterYear] = useState(activeYears.at(-1)[0])

  console.log('fY', filterYear)
  console.log('pG',playerGames)

  const handleNewGameSubmitted = (payload) => {
    console.log('In the app?', payload)
  }

  const handleYearFilterChange = (value) => {
    setFilterYear(value)
  }
  
  const f = (stuff) => {
    console.log('heyo', stuff)
    let l = []
    Object.entries(stuff).forEach(([month, gamesForMonth]) => {
      console.log('gFM',gamesForMonth)
      l = l.concat(gamesForMonth)
    })
    console.log(l)
    return l
  }

  return (
    <div>
      <h1>Player game tracker!</h1>
      <SeasonSummary
        playerGames={playerGames}
        onYearFilterChange={handleYearFilterChange}
      />
      <AddGameItemForm onSubmission={handleNewGameSubmitted} />
      <GameLog playerGames={f(playerGames[filterYear])} />
    </div>
  );
}

export default App;