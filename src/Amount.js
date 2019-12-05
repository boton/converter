import React from "react";
import "./Amount.css";
import ConverterContext from "./ConverterContext";

export class Amount extends React.Component {
  static defaultProps = {
    onChange: () => {}
  };

  static contextType = ConverterContext;

  render() {
    const { readOnly, label, value, onChange } = this.props;
    const { theme } = this.context;

    return (
      <label>
        {label}:{" "}
        <input
          className={`${value < 0 ? "error" : ""} ${theme || ""}`}
          onChange={onChange}
          readOnly={readOnly}
          type="number"
          value={value}
        />
      </label>
    );
  }
}
