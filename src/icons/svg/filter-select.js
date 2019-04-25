import React from 'react';
export default class FilterSelect extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-448.000000, -207.000000)" fill={color} fillRule="nonzero">
		            <g id="filter-select" transform="translate(449.000000, 207.000000)">
		                <path d="M13.9561129,0 L125.648903,0 C133.373041,0 139.605016,6.23197492 139.605016,13.9561129 C139.605016,21.6363636 133.373041,27.9122257 125.648903,27.9122257 L13.9561129,27.9122257 C6.27586207,27.9122257 0,21.6363636 0,13.9561129 C0,6.23197492 6.27586207,0 13.9561129,0 Z" id="Shape"></path>
		                <path d="M13.9561129,55.8244514 L125.648903,55.8244514 C133.373041,55.8244514 139.605016,62.0564263 139.605016,69.7805643 C139.605016,77.5047022 133.373041,83.7366771 125.648903,83.7366771 L13.9561129,83.7366771 C6.27586207,83.7366771 0,77.5047022 0,69.7805643 C0,62.0564263 6.27586207,55.8244514 13.9561129,55.8244514 Z" id="Shape"></path>
		                <path d="M13.9561129,111.648903 L125.648903,111.648903 C133.373041,111.648903 139.605016,117.924765 139.605016,125.605016 C139.605016,133.329154 133.373041,139.561129 125.648903,139.561129 L13.9561129,139.561129 C6.27586207,139.605016 0,133.329154 0,125.648903 C0,117.924765 6.27586207,111.648903 13.9561129,111.648903 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 