import { useState } from "react";

import "./App.css";
import { HandFist, File, Scissors } from "@phosphor-icons/react";

function App() {
  const [userWins, setUserWins] = useState(0);
  const [pcWins, setPcWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [lastGame, setLastGame] = useState([]);
  const options = ["Pedra", "Papel", "Tesoura"];

  const returnIcon = (icon) => {
    switch (icon) {
      case "Pedra":
        return <HandFist size={32} />;
      case "Papel":
        return <File size={32} />;
      case "Tesoura":
        return <Scissors size={32} />;
      default:
        break;
    }
  };

  const StartRound = (option) => {
    const randomOption = options[Math.floor(Math.random() * 3)];
    setLastGame([option, randomOption]);

    if (option === randomOption) {
      setDraws(draws + 1);
    } else if (
      (option === "Pedra" && randomOption === "Tesoura") ||
      (option === "Papel" && randomOption === "Pedra") ||
      (option === "Tesoura" && randomOption === "Papel")
    ) {
      setUserWins(userWins + 1);
    } else {
      setPcWins(pcWins + 1);
    }
  };

  return (
    <div className="main">
      {/* Options */}
      <div className="options">
        {options.map((option, index) => (
          <button
            onClick={() => StartRound(option)}
            className="button_option"
            key={index}
          >
            {returnIcon(option)}
          </button>
        ))}
      </div>
      {/* Current game */}
      <div className="info">
        <h3>Current Game</h3>
        <div className="info_det">
          <div className="info">
            <h4>Your choice</h4>
            <label>{returnIcon(lastGame[0])}</label>
          </div>
          <div className="info">
            <h4>PC choice</h4>
            <label>{returnIcon(lastGame[1])}</label>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="info">
        <h3>Games</h3>
        <div className="info_det">
          <h4>User wins: {userWins}</h4>
          <h4>PC wins: {pcWins}</h4>
          <h4>Draws: {draws}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
