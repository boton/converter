import React from "react";
import "./App.css";
import { Amount } from "./Amount";

function exchangeRate() {
  return Math.random() * 10000;
}

function App() {
  return (
    <div className="App">
      <Amount amount={20} label="Euros"/>
      <br/>
      <Amount amount={exchangeRate()} label="$BTC" readOnly/>
    </div>
  );
}

export default App;
