import React from 'react';
export default class Edit extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-899.000000, -616.000000)" fill={color} fillRule="nonzero">
		            <g id="edit" transform="translate(902.000000, 616.000000)">
		                <path d="M124.8,66.4 C120.4,66.4 116.8,70 116.8,74.4 L116.8,112.4 C116.8,116.4 113.2,120.8 110,120.8 L22.8,120.8 C19.6,120.8 16,116.4 16,112.4 L16,24.8 C16,20 22,19.6 22.8,19.6 L58.4,19.6 C62.8,19.6 66.4,16 66.4,11.6 C66.4,7.2 62.8,3.6 58.4,3.6 L22.8,3.6 C9.6,4 0,12.8 0,24.8 L0,112.4 C0,125.2 10.8,136.8 22.8,136.8 L110.4,136.8 C122.4,136.8 132.8,125.6 132.8,112.4 L132.8,74.4 C132.8,70 129.2,66.4 124.8,66.4 Z" id="Shape"></path>
		                <path d="M52,81.2 C52,83.2 52.8,85.2 54.4,86.8 C56,88 57.6,88.8 59.6,88.8 C61.6,88.8 64,88 65.2,86.4 L123.6,24.8 C125.2,23.2 126,21.2 125.6,18.8 C125.2,16.4 124.4,14.8 122.8,13.2 C119.6,10.4 114.8,10.8 112,13.6 L54,75.6 C52.8,77.2 52,79.2 52,81.2 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 
