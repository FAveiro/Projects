import { useState, useEffect } from "react";
import { X, Circle } from "@phosphor-icons/react";

import "./App.css";
import {} from "react";

function App() {
  const [squares, setSquares] = useState([
    { button: 0, value: "" },
    { button: 1, value: "" },
    { button: 2, value: "" },
    { button: 3, value: "" },
    { button: 4, value: "" },
    { button: 5, value: "" },
    { button: 6, value: "" },
    { button: 7, value: "" },
    { button: 8, value: "" },
  ]);

  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [winner, setWinners] = useState("");

  const [numberPlay, setNumberPlay] = useState(0);

  const playSquare = (squareRec) => {
    if (squareRec.value === "" && winner === "") {
      if (numberPlay % 2 === 0) {
        setSquares(
          squares.map((square) =>
            square.button === squareRec.button
              ? { ...square, value: "x" }
              : square
          )
        );
      } else {
        setSquares(
          squares.map((square) =>
            square.button === squareRec.button
              ? { ...square, value: "circle" }
              : square
          )
        );
      }
      setNumberPlay(numberPlay + 1);
    }
  };

  const getValues = (value) => {
    if (value === "x") {
      return <X size={32} />;
    } else if (value === "circle") {
      return <Circle size={32} />;
    } else {
      null;
    }
  };

  const resetGame = () => {
    setSquares([
      { button: 0, value: "" },
      { button: 1, value: "" },
      { button: 2, value: "" },
      { button: 3, value: "" },
      { button: 4, value: "" },
      { button: 5, value: "" },
      { button: 6, value: "" },
      { button: 7, value: "" },
      { button: 8, value: "" },
    ]);
    setNumberPlay(0);
    setWinners("");
  };

  const checkCombo = (combo, value) => {
    const comboWinner = combo.map((key) => {
      return squares[key].value;
    });

    return comboWinner.every((element) => element === value);
  };

  useEffect(() => {
    combinations.map((combo) => {
      if (checkCombo(combo, "x") === true) {
        setWinners("x");
      } else if (checkCombo(combo, "circle") === true) {
        setWinners("O");
      }
    });
  }, [squares]);

  return (
    <div className="main">
      <div className="squares_main">
        {squares.map((square, index) => (
          <button
            onClick={() => playSquare(square)}
            className="square"
            key={index}
          >
            {getValues(square.value)}
          </button>
        ))}
      </div>
      <div>
        {winner && <h1>Winner's is {winner}</h1>}
        <button onClick={() => resetGame()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
