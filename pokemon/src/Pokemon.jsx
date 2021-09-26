import React from "react";
import "./Pokemon.css";

import Chalizard from "./assets/1.jpg";

export default function Pokemon() {
  return (
    <div className="w-56 h-80 border-2 border-gray-400 rounded-br-md rounded-bl-md bg-blue-400">
      <img className="poke-img" src={Chalizard} alt="pikachu" />
      <div className="flex mt-2 items-center p-1">
        <h3 className="font-bold">Name: </h3>
        <p className="text-sm font-semibold ml-2">Chalizard</p>
      </div>
      <div className="flex mt-2 items-center p-1">
        <h3 className="font-bold">Ability: </h3>
        <p className="text-sm font-semibold ml-2">Fires Flames</p>
      </div>
      <div className="flex mt-2 items-center p-1">
        <h3 className="font-bold">Color: </h3>
        <p className="text-sm font-semibold ml-2">Red</p>
      </div>
      <div className="flex mt-2 items-center p-1">
        <h3 className="font-bold">Can Transform: </h3>
        <p className="text-sm font-semibold ml-2">True</p>
      </div>
    </div>
  );
}
