import React from "react";
import "./App.css";
import Bounce from "./packages/Bounce";

function App() {
  return (
    <div className="app_container">
      <img src="./playgroundBg.jpg" className="playgroundBg" alt="" />
      <Bounce withOverlay color="#fff" />
    </div>
  );
}

export default App;
