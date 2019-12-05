import React from "react";
import "./App.css";
import Converter from "./Converter";
import ThemeContext from "./ThemeContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      conversions: 0
    };
  }

  componentDidUpdate() {
    if (this.state.conversions > 5) {
      alert(
        "👋 Hello, thanks for trying out LF Converter. \nBecome premium 💎 for unlimited conversions."
      );
    }
  }

  handleChangeTheme = event => {
    this.setState({
      theme: event.target.checked ? "light" : "dark"
    });
  };

  handleConversion = () => {
    this.setState(({ conversions }) => ({ conversions: conversions + 1 }));
  };

  render() {
    const { theme } = this.state;

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
          <Converter
            onChange={this.handleConversion}
            renderTitle={() => <h1>Bitcoin</h1>}
          />
          <Converter
            cryptoName="$ETH"
            exchangeRate={1.2}
            onChange={this.handleConversion}
            renderTitle={() => <h1>Ethereum</h1>}
          />
          <Converter
            cryptoName="$TRX"
            exchangeRate={0.014698}
            onChange={this.handleConversion}
            renderTitle={() => <h1>TRON</h1>}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
