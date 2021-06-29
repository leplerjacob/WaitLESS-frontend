import React from "react";

export default class CircleIcon extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 100 100" style={{ maxWidth: "25px" }}>
        <circle
          cx="50"
          cy="50"
          r="15"
          stroke="black"
          strokeWidth="2"
          fill={this.props.fill ? "none" : "#12110b"}
        />
      </svg>
    );
  }
}
