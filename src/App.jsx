import React from "react";
import Game from "./Game";
import Home from "./Home";
import Background from "./Background";

export default function App() {
  const [startGame, setStartGame] = React.useState(true);
  return (
    <main>
      <Background />
      {startGame && <Home setStartGame={setStartGame} />}
      {!startGame && <Game setStartGame={setStartGame} />}
    </main>
  );
}
