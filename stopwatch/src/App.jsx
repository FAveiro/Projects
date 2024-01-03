import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const handleClick = () => {
    setRunning(!running);
  };

  const resetButton = () => {
    setTime(0);
  };

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  return (
    <div className="main">
      <div className="card">
        <div className="card_timer">
          <h3>Hours</h3>
          <label>{Math.floor(time / 360000)}</label>
        </div>
        <div className="card_timer">
          <h3>Minutes</h3>
          <label>{Math.floor((time % 360000) / 6000)}</label>
        </div>
        <div className="card_timer">
          <h3>Seconds</h3>
          <label>{Math.floor((time % 6000) / 100)}</label>
        </div>
        <div className="card_timer">
          <h3>Milliseconds </h3>
          <label>{time % 100}</label>
        </div>
      </div>
      <div className="card">
        <button onClick={handleClick} className="button_start">
          {running ? "Stop" : "Start"} timer
        </button>
        <button onClick={resetButton} className="button_start">
          Reset timer
        </button>
      </div>
    </div>
  );
}

export default App;
