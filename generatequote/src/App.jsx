import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    setNumber(Math.round(Math.abs(Math.random() * quotes.length)));
    console.log(number)
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.quotable.io/quotes");
      const jsonData = await data.json();
      setQuotes(jsonData.results);
    };

    fetchData().catch(console.error);
    generateNumber();
  }, []);

  return (
    <div className="center">
      {quotes.length > 0 ? (
        
        <>
          <Cards quote={quotes[number]} />
        </>
      ) : null}
      <button className="myButton" onClick={generateNumber}>New Quote</button>
    </div>
  );
}

export default App;
