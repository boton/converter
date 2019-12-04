import React from "react";

export class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: props.amount };
  }

  handleChange = event => {
    this.setState({ amount: event.target.value });
  };

  render() {
    const { readOnly, label } = this.props;
    const { amount } = this.state;

    return (
      <label>
        {label}:
        <input
          className={amount < 0 ? "error" : ""}
          type="number"
          onChange={this.handleChange}
          value={amount}
          readOnly={readOnly}
        />
      </label>
    );
  }
}
