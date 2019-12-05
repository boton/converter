import React from "react";
import ThemeContext from "./ThemeContext";

export class Amount extends React.Component {
  static defaultProps = {
    onChange: () => {}
  };

  static contextType = ThemeContext;

  render() {
    const { readOnly, label, value, onChange } = this.props;
    const theme = this.context;

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
