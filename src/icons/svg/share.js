import React from 'react';
export default class Share extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none"  strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-894.000000, -844.000000)" fill={color} fillRule="nonzero">
		            <g id="share" transform="translate(896.000000, 844.000000)">
		                <path d="M124.8,84 C120.4,84 116.8,87.6 116.8,92 L116.8,112.4 C116.8,116.4 113.2,120.8 110,120.8 L22.8,120.8 C19.6,120.8 16,116.4 16,112.4 L16,24.8 C16,20 22,19.6 22.8,19.6 L40.8,19.6 C45.2,19.6 48.8,16 48.8,11.6 C48.8,7.2 45.2,3.6 40.8,3.6 L22.8,3.6 C9.6,4 0,12.8 0,24.8 L0,112.4 C0,125.2 10.8,136.8 22.8,136.8 L110.4,136.8 C122.4,136.8 132.8,125.6 132.8,112.4 L132.8,92 C132.8,87.6 129.2,84 124.8,84 Z" id="Shape"></path>
		                <path d="M124.8,4 L84,4 C79.6,4 76,7.6 76,12 C76,16.4 79.6,20 84,20 L105.6,20 L55.2,73.6 C52.4,76.8 52.4,81.6 55.6,84.8 C57.2,86 58.8,86.8 60.8,86.8 C62.8,86.8 65.2,86 66.4,84.4 L117.2,30.4 L117.2,52.8 C117.2,57.2 120.8,60.8 125.2,60.8 C129.6,60.8 133.2,57.2 133.2,52.8 L133.2,12 C132.8,7.6 129.2,4 124.8,4 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 