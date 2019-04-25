import React from "react";
export default class Expression extends React.Component {
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
        viewBox="0 0 16.3 16.3"
        style={{enableBackground:'new 0 0 16.3 16.3'}}
      >
        <g
          id="icon_expression"
          transform="translate(-15.948 -2.86)"
          style={{ opacity: "0.3" }}
        >
          <path
            id="路径_5"
            style={{ fill: "#16171A", stroke: "#17181A", strokeWidth: "0.3" }}
            d="M24.1,3c-4.4,0-8,3.6-8,8s3.6,8,8,8c4.4,0,8-3.6,8-8   C32.1,6.6,28.5,3,24.1,3z M24.1,18.1c-3.9,0-7.1-3.2-7.1-7.1c0-3.9,3.2-7.1,7.1-7.1c3.9,0,7.1,3.2,7.1,7.1   C31.2,14.9,28,18.1,24.1,18.1C24.1,18.1,24.1,18.1,24.1,18.1z M24.3,14L24.3,14c-1.2,0-2.4-0.5-3.2-1.4l-0.7,0.6   c1.9,2.1,5.2,2.3,7.3,0.3c0.1-0.1,0.2-0.1,0.2-0.2l-0.6-0.6C26.5,13.5,25.4,14,24.3,14L24.3,14z M26.2,9c0,0.5,0.4,0.9,0.9,0.9   C27.6,9.9,28,9.5,28,9c0-0.5-0.4-0.9-0.9-0.9c-0.2,0-0.5,0.1-0.6,0.3C26.3,8.5,26.2,8.7,26.2,9z M20.1,9c0,0.5,0.4,0.9,0.9,0.9   c0.5,0,0.9-0.4,0.9-0.9c0-0.5-0.4-0.9-0.9-0.9c-0.2,0-0.5,0.1-0.6,0.3C20.2,8.5,20.2,8.7,20.1,9z"
          />
        </g>
      </svg>
    );
  }
}
