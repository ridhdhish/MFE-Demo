import React from "react";
import "./Header.css";

import poke from "./assets/1.jpg";

export default function Header(props) {
  return (
    <div
      style={{ height: "54vh" }}
      className="div w-screen flex justify-center items-center text-white font-bold"
    >
      {/* <img className="object-scale-down" src={poke} alt="poke" /> */}
      <h3 className="text-3xl">Welcome to the PokeArena!</h3>
    </div>
  );
}
