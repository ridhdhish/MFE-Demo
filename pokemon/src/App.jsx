import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Pokemon from "./Pokemon";

export default function App() {
  return (
    <div>
      <Pokemon />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
