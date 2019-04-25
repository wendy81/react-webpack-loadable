import React from 'react';
export default class ChartLine extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
		        <g id="Desktop-HD" transform="translate(-900.000000, -1105.000000)" fillRule="nonzero" stroke={color} strokeWidth="4">
		            <path d="M900.001795,1183.53846 C910.297179,1183.35897 903.252308,1183.82564 919.607179,1183.82564 C940.921282,1183.82564 943.109231,1162 962.822308,1162 C985.464615,1162 989.641282,1185.33333 1011.28385,1185.33333 C1021.0492,1185.70325 1030.61659,1182.51412 1038.20692,1176.35897" id="Shape"></path>
		        </g>
		    </g>
        </svg>
    )
}

} 
