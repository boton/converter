import React from "react";

export class Amount extends React.Component {
  static defaultProps = {
    onChange: () => {}
  };

  render() {
    const { readOnly, label, value, onChange } = this.props;

    return (
      <label>
        {label}:
        <input
          className={value < 0 ? "error" : ""}
          onChange={onChange}
          readOnly={readOnly}
          type="number"
          value={value}
        />
      </label>
    );
  }
}
