import React from "react";
import "./App.css";
import Converter from "./Converter";
import ThemeContext from "./ThemeContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    };
  }

  handleChangeTheme = event => {
    this.setState({
      theme: event.target.checked ? "light" : "dark"
    });
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
          <Converter renderTitle={() => <h1>Bitcoin</h1>} />
          <Converter
            cryptoName="$ETH"
            exchangeRate={1.2}
            renderTitle={() => <h1>Ethereum</h1>}
          />
          <Converter
            cryptoName="$TRX"
            exchangeRate={0.014698}
            renderTitle={() => <h1>TRON</h1>}
          />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
