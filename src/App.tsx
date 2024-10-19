import React from "react";
import "./App.css";
import Bounce from "./packages/Bounce";
import bgImg from "./assets/playgroundBg.jpg";

function App() {
  return (
    <div className="app_container">
      <img src={bgImg} className="playgroundBg" alt="" />
      <Bounce color="#fff" />
    </div>
  );
}

export default App;
