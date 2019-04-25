import React from "react";
export default class NewChat extends React.Component {
  render() {
    const { width, height, color } = this.props;
    const c = color ? color : '#B9B9BA'
    return (
      <svg width={width} height={height} version="1.1" x="0px" y="0px" viewBox="0 0 16 15">
        <path
          id="icon_NewChat"
          style={{fill: c}}
          d="M8,15c-0.2,0-0.3-0.1-0.4-0.2L5.9,13h-4c-1,0-1.9-0.9-1.8-2V2c0-1,0.8-1.9,1.8-2  h12.3c1,0,1.9,0.9,1.8,2v9.1c0,1-0.8,1.9-1.8,2h-4.1l-1.7,1.8C8.3,14.9,8.2,15,8,15z M4.8,5.9C4.3,5.9,4,6.2,4,6.6s0.3,0.7,0.8,0.8  h2.5v2.5c0,0.4,0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8V7.4h2.5c0.4,0,0.7-0.3,0.8-0.8c0-0.4-0.3-0.7-0.8-0.8H8.8V3.4  C8.8,3,8.4,2.6,8,2.6C7.6,2.6,7.3,3,7.3,3.4v2.5H4.8z"
        />
      </svg>
    );
  }
}
