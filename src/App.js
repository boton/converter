import React from "react";
import "./App.css";
import { Amount } from "./Amount";
import ThemeContext from "./ThemeContext";

const INACTIVITY_MS = 5000;

function exchangeRate() {
  return Math.random() * 10000;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      euros: 20,
      exchangeRate: exchangeRate(),
      theme: "light"
    };

    this.resetTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._inactivityTimer);
  }

  handleChangeEuros = event => {
    this.setState({
      euros: event.target.value,
      exchangeRate: exchangeRate()
    });

    this.resetTimeout();
  };

  handleChangeTheme = event => {
    this.setState({
      theme: event.target.checked ? "light" : "dark"
    });
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
    const { euros, exchangeRate, theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <div className={`App ${theme || ""}`}>
          <div>
            <label htmlFor="theme">
              <input
                type="checkbox"
                name="theme"
                id="theme"
                checked={this.state.theme === "light"}
                onChange={this.handleChangeTheme}
              />
              light theme
            </label>
          </div>
          <Amount
            value={euros}
            label="Euros"
            onChange={this.handleChangeEuros}
          />
          <Amount
            value={(euros * exchangeRate).toFixed(4)}
            label="$BTC"
            readOnly
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
