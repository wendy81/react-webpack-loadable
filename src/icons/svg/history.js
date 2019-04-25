import React from "react";
export default class Warning extends React.Component {
  render() {
    const { width, height, color } = this.props;
    return (
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="图层_1"
        x="0px"
        y="0px"
        viewBox="0 0 15 15"
        style={{enableBackground: 'new 0 0 15 15',}}
      >
        <g
          id="icon_history"
          transform="translate(-1861 -1815)"
          style={{ opacity: "0.3" }}
        >
          <g transform="translate(1861 1815)">
            <circle style={{ fill: "none" }} cx="7.5" cy="7.5" r="7.5" />
            <circle
              style={{ fill: "none", stroke: "#16171A", strokeWidth: "1.2" }}
              cx="7.5"
              cy="7.5"
              r="6.9"
            />
          </g>
          <g transform="translate(1868 1818)">
            <path
              style={{ fill: "none" }}
              d="M0.5,0h0.2C1,0,1.2,0.2,1.2,0.5v4.2C1.2,5,1,5.2,0.7,5.2H0.5C0.2,5.2,0,5,0,4.7V0.5C0,0.2,0.2,0,0.5,0    z"
            />
            <rect
              x="0.5"
              y="0.5"
              style={{ fill: "none", stroke: "#16171A" }}
              width="0.2"
              height="4.2"
            />
          </g>
          <g transform="translate(1864 1822)">
            <path
              style={{ fill: "none" }}
              d="M0.5,0h4C4.8,0,5,0.2,5,0.5v0.2C5,1,4.8,1.2,4.5,1.2h-4C0.2,1.2,0,1,0,0.7V0.5C0,0.2,0.2,0,0.5,0z"
            />
            <rect
              x="0.5"
              y="0.5"
              style={{ fill: "none", stroke: "#16171A" }}
              width="4"
              height="0.2"
            />
          </g>
        </g>
      </svg>
    );
  }
}
