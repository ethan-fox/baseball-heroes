
import GameLog from "./component/GameLog/GameLog"

function App() {

  const playerGames = [
    {
      gameData: {
        date: new Date(2020, 5, 2),
        opponentId: 5,
        result: "W 7-0"
      },
      AB: 5,
      H: 3,
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
      BB: 1
    },
    {
      gameData: {
        date: new Date(2020, 5, 4),
        opponentId: 2,
        result: "W 3-2"
      },
      AB: 4,
      H: 1,
      BB: 0
    },
    {
      gameData: {
        date: new Date(2020, 5, 7),
        opponentId: 3,
        result: "L 5-6"
      },
      AB: 1,
      H: 0,
      BB: 1
    },
  ]

  return (
    <div>
      <h1>Player game tracker!</h1>
      <GameLog playerGames={playerGames}/>
    </div>
  );
}

export default App;