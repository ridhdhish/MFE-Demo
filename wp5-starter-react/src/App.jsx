import React from "react";
import ReactDOM from "react-dom";

import "tailwindcss/tailwind.css";

import Header from "hero/Header";
import Pokemon from "pokemon/Pokemon";

import "./index.css";

const App = () => (
  <div>
    <Header fav="Pikachu" />
    <div className="m-3">
      <Pokemon />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
