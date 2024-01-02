import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState("");

  const startTimer = () => {
    setStart(true);
  };

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec > 0) {
            return prevSec - 1;
          } else {
            setMin((prevMin) => {
              if (prevMin > 0) {
                return prevMin - 1;
              } else {
                setHours((prevHours) => {
                  if (prevHours > 0) {
                    return prevHours - 1;
                  } else {
                    setFinish("finish");
                    clearInterval(timer);
                    setStart(false);
                    setHours(0);
                    setMin(0);
                    setSec(0);
                    return 0;
                  }
                });
                return 59;
              }
            });
            return 59;
          }
        });
      }, 1000);
    }

    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, [start]);

  const stopTimer = () => {
    setStart(false);
    setFinish("");
    setHours(0);
    setMin(0);
    setSec(0);
  };

  return (
    <div className="main">
      <button onClick={startTimer} className="button_start">
        Start timer
      </button>
      <div className="card">
        <div className="card_timer">
          <h3>Hours</h3>
          {start ? (
            <label>{hours}</label>
          ) : (
            <input
              type="number"
              className="input"
              value={hours}
              onChange={(e) => setHours(Math.abs(e.target.value))}
            />
          )}
        </div>
        <div className="card_timer">
          <h3>Minutes</h3>
          {start ? (
            <label>{min}</label>
          ) : (
            <input
              type="number"
              className="input"
              value={min}
              onChange={(e) => setMin(Math.abs(e.target.value))}
            />
          )}
        </div>
        <div className="card_timer">
          <h3>Seconds</h3>

          {start ? (
            <label>{sec}</label>
          ) : (
            <input
              type="number"
              className="input"
              value={sec}
              onChange={(e) => setSec(Math.abs(e.target.value))}
            />
          )}
        </div>
      </div>
      {finish && <label>{finish}</label>}
      <button onClick={stopTimer} className="button_stop">
        Stop timer
      </button>
    </div>
  );
}

export default App;
