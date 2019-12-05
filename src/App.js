import React from "react";
import "./App.css";
import { Amount } from "./Amount";

const INACTIVITY_MS = 5000;

function exchangeRate() {
  return Math.random() * 10000;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      euros: 20,
      exchangeRate: exchangeRate()
    };

    this.resetTimeout();
  }

  handleChange = event => {
    this.setState({
      euros: event.target.value,
      exchangeRate: exchangeRate()
    });

    this.resetTimeout();
  };

  resetTimeout = () => {
    clearTimeout(this._inactivityTimer);

    this._inactivityTimer = setTimeout(() => {
      this.setState({
        exchangeRate: 0
      });
    }, INACTIVITY_MS);
  };

  render() {
    const { euros, exchangeRate } = this.state;

    return (
      <div className="App">
        <Amount value={euros} label="Euros" onChange={this.handleChange} />
        <br />
        <Amount value={euros * exchangeRate} label="$BTC" readOnly />
      </div>
    );
  }
}

export default App;
