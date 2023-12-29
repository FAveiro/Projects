import { useState } from "react";

import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [result, setResult] = useState("");

  const displayOperator = [
    { operator: true, value: "/", label: "/" },
    { operator: true, value: "*", label: "x" },
    { operator: true, value: "-", label: "-" },
    { operator: true, value: "+", label: "+" },
    { operator: true, value: "DEL", label: "del" },
  ];
  const displayNumber = [
    { operator: false, value: "1", label: "1" },
    { operator: false, value: "2", label: "2" },
    { operator: false, value: "3", label: "3" },
    { operator: false, value: "4", label: "4" },
    { operator: false, value: "5", label: "5" },
    { operator: false, value: "6", label: "6" },
    { operator: false, value: "7", label: "7" },
    { operator: false, value: "8", label: "8" },
    { operator: false, value: "9", label: "9" },
    { operator: false, value: "0", label: "0" },
    { operator: false, value: ".", label: "." },
    { operator: true, value: "=", label: "=" },
  ];

  const operators = ['/', '*', '+', '-', '.']


  const addNumber = (number) => {
    switch (number) {
      case "DEL":
        if (result.length > 1) {
          setResult(result.slice(0, -1));
        } else {
          setResult("");
        }
        break;
      case "=":
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult("Error");
        }
        break;
      default:
        const lastChar = result.slice(-1);
        if (operators.includes(lastChar) && operators.includes(number)) {
          setResult(result.slice(0, -1).concat(number));
        } else {
          setResult(result === "0" ? number : result.concat(number));
        }
    }
  };

  return (
    <div className="main">
      <div className="custom_input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg_icon bi-calculator-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z"></path>
        </svg>
        <input defaultValue={result} className="input" type="text" />
      </div>
      <div className="display">
        <div className="display_operator">
          {displayOperator.map((operator, index) => (
            <ButtonComponent
              operator={operator.operator}
              value={operator.value}
              label={operator.label}
              addNumber={addNumber}
              key={index}
            />
          ))}
        </div>
        <div className="display_number">
          {displayNumber.map((number, index) => (
            <ButtonComponent
              operator={number.operator}
              value={number.value}
              label={number.label}
              addNumber={addNumber}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
