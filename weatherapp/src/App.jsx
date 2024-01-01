import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState("");
  const [search, setSearch] = useState("");

  const APIKEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKEY}&units=metric`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const showInfo = () => {
    console.log(info);
    if (info.cod === 200) {
      const urlIcon = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
      return (
        <div className="card_info">
          <div className="card_info_det">
            <div className="info_det">
              <h3>Temp Max</h3>
              <label>{info.main.temp_max}</label>
            </div>
            <div className="info_det">
              <h3>Temp Min</h3>
              <label>{info.main.temp_min}</label>
            </div>
            <div className="info_det">
              <h3>Humity</h3>
              <label>{info.main.humidity}</label>
            </div>
          </div>
          <div className="info_weather">
            <h3>{info.weather[0].main}</h3>
            <img src={urlIcon} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="card_info">
          <h3 className="label_error">{info.message}</h3>
        </div>
      );
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h1>Weather App</h1>
        <div className="card_input">
          <input
            className="input"
            type="text"
            placeholder="Find your city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button_card" onClick={() => fetchWeather()}>
            Search
          </button>
        </div>
        {info && showInfo()}
      </div>
    </div>
  );
}

export default App;
