import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import mobilePattern from "./images/pattern-divider-mobile.svg";
import desktopPattern from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const advice = await axios("https://api.adviceslip.com/advice");
    const response = advice.data;
    setAdvice(response.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <span className="advice-id">Advice #{advice.id}</span>{" "}
      <h1 className="advice">{advice.advice}</h1>{" "}
      <div className="divider">
        <img src={desktopPattern} className="desktop" />
        <img src={mobilePattern} className="mobile" />
      </div>
      <button className="btn" onClick={getAdvice}>
        <img src={dice} alt="" />
      </button>
    </div>
  );
}

export default App;
