import React from "react";
export default class Pic extends React.Component {
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
        viewBox="0 0 16 16"
        style={{ enableBackground: "new 0 0 16 16" }}
      >
        <g
          id="icon_pic"
          transform="translate(-771 -790)"
          style={{ opacity: "1" }}
        >
          <g id="圆角矩形_1145_拷贝" transform="translate(771 790)">
            <path
              style={{ fill: "none" }}
              d="M2,0H14c1.1,0,2.1,1,2,2.1v11.8c0,1.1-0.9,2.1-2,2.1H2c-1.1,0-2.1-1-2-2.1V2.1C0,1,0.9,0,2,0z"
            />
            <path
              style={{ fill: color }}
              d="M2,1.2c-0.5,0-0.8,0.4-0.8,0.9v11.8c0,0.5,0.4,0.9,0.8,0.9H14c0.5,0,0.8-0.4,0.8-0.9V2.1    c0-0.5-0.4-0.9-0.8-0.9H2 M2,0H14c1.1,0,2,0.9,2,2.1v11.8c0,1.2-0.9,2.1-2,2.1H2c-1.1,0-2-0.9-2-2.1V2.1C0,0.9,0.9,0,2,0z"
            />
          </g>
          <g id="椭圆_1" transform="translate(774 793)">
            <circle style={{ fill: color }} cx="2.5" cy="2.5" r="2.5" />
            <circle
              style={{ fill: "none", stroke: color, strokeWidth: "1.2" }}
              cx="2.5"
              cy="2.5"
              r="1.9"
            />
          </g>
          <path
            id="路径_4"
            style={{
              fill: "none",
              stroke: color,
              strokeWidth: "1.2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }}
            d="M772,802.5   l2.6-2.4l2.8,2.4l5.1-5.1l3.8,3.8"
          />
        </g>
      </svg>
    );
  }
}
