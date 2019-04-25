import React from 'react';
export default class ArrowDown extends React.Component {

render(){
    const { width, height } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-1537.000000, -485.000000)" fill="#F5B336" fillRule="nonzero">
		            <g id="icon_Payment_CreditCard" transform="translate(1537.000000, 503.000000)">
		                <path d="M1.02083333,96.25 C1.02083333,99.8958333 3.9375,102.8125 7.58333333,102.8125 L132.270833,102.8125 C135.916667,102.8125 138.833333,99.8958333 138.833333,96.25 L138.833333,42.5833333 L1.02083333,42.5833333 L1.02083333,96.25 Z M102.8125,66.6458333 L125.708333,66.6458333 L121.333333,85.1666667 L98.4375,85.1666667 L102.8125,66.6458333 Z" id="Shape"></path>
		                <path d="M132.270833,1.02083333 L7.58333333,1.02083333 C3.9375,1.02083333 1.02083333,3.9375 1.02083333,7.58333333 L1.02083333,30.625 L138.833333,30.625 L138.833333,7.58333333 C138.833333,4.08333333 135.916667,1.02083333 132.270833,1.02083333 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

}