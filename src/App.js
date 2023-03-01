import { useState } from "react";

import AddGameItemButton from "./component/AddGameItemButton/AddGameItemButton";
import AddGameItemForm from "./component/AddGameItemForm/AddGameItemForm";
import GameLog from "./component/GameLog/GameLog"

function App() {

  const [playerGames, setPlayerGames] = useState([
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
    },
  ]);


  const handleNewGameSubmitted = (payload) => {
    console.log('In the app?', payload)
  }


  return (
    <div>
      <h1>Player game tracker!</h1>
      <AddGameItemButton />
      <AddGameItemForm onSubmission={handleNewGameSubmitted}/>
      <GameLog playerGames={playerGames} />
    </div>
  );
}

export default App;