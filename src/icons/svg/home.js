import React from 'react';
export default class Home extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none"  strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-235.000000, -404.000000)" fill={color} fillRule="nonzero">
		            <g id="home" transform="translate(237.000000, 404.000000)">
		                <path d="M90.227224,140 L81.4790997,140 L81.4790997,91.9528403 C81.4340836,91.2175777 80.86388,90.6473741 80.1736334,90.6473741 L62.1972133,90.6473741 C61.5069668,90.6473741 60.9367631,91.2175777 60.8917471,91.9528403 L60.8917471,140 L29.920686,140 C27.0696677,139.969989 24.3536977,138.73955 22.357985,136.578778 C20.3622722,134.418006 19.2818864,131.491961 19.3269025,128.475884 L19.3269025,75.1618435 L9.528403,75.1618435 C5.58199357,75.3719185 1.99571275,72.7459807 0.765273312,68.7545552 C-0.675241158,64.778135 0.420150054,60.2765273 3.4812433,57.5155413 L63.187567,2.52090032 C66.5637728,-0.840300107 71.8156484,-0.840300107 75.1768489,2.52090032 L134.778135,57.5155413 C137.809218,60.2915327 138.859593,64.7931404 137.404073,68.7545552 C136.188639,72.7459807 132.602358,75.3719185 128.655949,75.1618435 L118.932476,75.1618435 L118.932476,128.475884 C118.977492,131.491961 117.882101,134.418006 115.901393,136.578778 C113.905681,138.73955 111.189711,139.969989 108.338692,140 L90.227224,140 Z M90.227224,130.696677 L108.338692,130.696677 C109.419078,130.606645 110.229368,129.616292 110.184352,128.475884 L110.184352,65.8735263 L128.821008,65.8735263 C129.346195,65.2282958 129.436227,64.8531618 128.821008,64.4780279 L69.1296892,9.48338692 L9.2733119,64.4780279 C9.09324759,64.7631297 9.09324759,65.1232583 9.2733119,65.3933548 L28.3451233,65.3933548 L28.3451233,128.010718 C28.3001072,129.151125 29.1103966,130.141479 30.1907824,130.231511 L52.3086817,130.231511 L52.3086817,91.9378349 C52.3536977,86.0707395 56.8553055,81.3440514 62.3772776,81.3440514 L80.1586281,81.3440514 C85.6806002,81.3440514 90.1822079,86.0707395 90.227224,91.9378349 L90.227224,130.696677 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 