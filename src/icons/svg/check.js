import React from 'react';
export default class Check extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-235.000000, -207.000000)" fill={color} fillRule="nonzero">
		            <g id="check" transform="translate(236.000000, 226.000000)">
		                <path d="M135.014245,5.14529915 C128.672365,-1.1965812 118.421652,-1.1965812 112.079772,5.14529915 L54.8034188,62.4216524 L28.0797721,35.6980057 C21.7378917,29.3561254 11.4871795,29.3561254 5.14529915,35.6980057 C-1.1965812,42.039886 -1.1965812,52.2905983 5.14529915,58.5925926 L43.3561254,96.8034188 C49.6581197,103.145299 59.9487179,103.145299 66.2507123,96.8034188 L135.014245,28.039886 C141.356125,21.7378917 141.356125,11.4472934 135.014245,5.14529915 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 
