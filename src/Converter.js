import React from "react";
import "./App.css";
import { Amount } from "./Amount";

export default class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoName: props.cryptoName,
      exchangeRate: props.exchangeRate,
      value: 0
    };
  }

  static defaultProps = {
    cryptoName: "$BTC",
    exchangeRate: Math.random() * 10000,
    onChange: () => {}
  };

  handleChangeValue = event => {
    this.setState({ value: event.target.value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    const { cryptoName, renderTitle } = this.props;
    const { value, exchangeRate } = this.state;

    return (
      <>
        {renderTitle && renderTitle()}
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
