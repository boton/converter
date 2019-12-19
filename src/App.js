import React from 'react';
import { Btc, Eth, Neo } from 'react-cryptocoins';
import './App.css';
import Converter from './Converter';
import ConverterContext from './ConverterContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      conversions: 0,
      isPremiun: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.isPremiun && this.state.conversions > 5) {
      alert(
        '👋 Hello, thanks for trying out Boton Converter. \nBecome premium 💎 for unlimited conversions.'
      );
    }
  }

  handleChangeTheme = event => {
    this.setState({
      theme: event.target.checked ? 'light' : 'dark',
    });
  };

  handleConversion = () => {
    this.setState(({ conversions }) => ({ conversions: conversions + 1 }));
  };

  render() {
    const { theme, isPremiun } = this.state;

    return (
      <ConverterContext.Provider value={{ theme }}>
        <div className={`App ${theme || ''}`}>
          <div>
            <label htmlFor="theme">
              <input
                type="checkbox"
                name="theme"
                id="theme"
                checked={this.state.theme === 'light'}
                onChange={this.handleChangeTheme}
              />
              light theme
            </label>
          </div>
          <Converter
            onChange={this.handleConversion}
            renderTitle={() => (
              <h1>
                <Btc /> Bitcoin
              </h1>
            )}
          />
          <Converter
            cryptoName="$ETH"
            exchangeRate={1.2}
            onChange={this.handleConversion}
            renderTitle={() => (
              <h1>
                <Eth /> Ethereum
              </h1>
            )}
          />
          <Converter
            cryptoName="$NEO"
            exchangeRate={0.014698}
            onChange={this.handleConversion}
            renderTitle={() => (
              <h1>
                <Neo /> NEO
              </h1>
            )}
          />
          <footer>
            {isPremiun ? (
              <div>
                <span role="img" aria-label="Diamonds">
                  💎💎💎
                </span>
                Proudly menber of Boton Converter
                <span role="img" aria-label="Diamonds">
                  💎💎💎
                </span>
              </div>
            ) : (
              <button onClick={() => this.setState({ isPremiun: true })}>
                <span role="img" aria-label="Money">
                  💵
                </span>
                Premium conversion
              </button>
            )}
          </footer>
        </div>
      </ConverterContext.Provider>
    );
  }
}

export default App;
