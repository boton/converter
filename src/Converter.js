import React from "react";
import "./App.css";
import { Amount } from "./Amount";

export default class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoName: props.cryptoName,
      exchangeRate: props.exchangeRate,
      value: 20
    };
  }

  static defaultProps = {
    cryptoName: "$BTC",
    exchangeRate: Math.random() * 10000
  };

  handleChangeValue = event => {
    this.setState({
      value: event.target.value,
      exchangeRate: this.props.exchangeRate
    });
  };

  render() {
    const { cryptoName } = this.props;
    const { value, exchangeRate } = this.state;

    return (
      <>
        <Amount value={value} label="Euros" onChange={this.handleChangeValue} />
        <Amount
          value={(value * exchangeRate).toFixed(4)}
          label={cryptoName}
          readOnly
        />
      </>
    );
  }
}
