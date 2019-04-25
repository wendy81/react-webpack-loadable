import React from 'react';
export default class ArrowDown extends React.Component {

render(){
    const { width, height ,color} = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-1537.000000, -1157.000000)" fill={color} fillRule="nonzero">
		            <g id="icon_Renew_Reduce" transform="translate(1537.000000, 1160.000000)">
		                <path d="M71.8064516,6.77419355 C105.677419,6.77419355 133.225806,34.3225806 133.225806,67.7419355 C133.225806,101.16129 105.677419,128.709677 71.8064516,128.709677 C37.9354839,128.709677 10.3870968,101.16129 10.3870968,67.7419355 C10.3870968,34.3225806 37.9354839,6.77419355 71.8064516,6.77419355 Z M71.8064516,0 C34.3225806,0 3.61290323,30.2580645 3.61290323,67.7419355 C3.61290323,105.225806 34.3225806,135.483871 71.8064516,135.483871 C109.290323,135.483871 140,105.225806 140,67.7419355 C140,30.2580645 109.290323,0 71.8064516,0 Z" id="Shape"></path>
		                <polygon id="Shape" points="44.2580645 61.4193548 99.8064516 61.4193548 99.8064516 74.0645161 44.2580645 74.0645161"></polygon>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

}
