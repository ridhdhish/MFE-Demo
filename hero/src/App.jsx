import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
