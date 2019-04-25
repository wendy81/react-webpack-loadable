import React from 'react';
export default class ArrowDown extends React.Component {

render(){
    const { width, height, color} = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-249.000000, -21.000000)" fill={color} fillRule="nonzero">
		            <g id="arrow-down" transform="translate(249.000000, 56.000000)">
		                <path d="M138.029851,23.119403 L79.5820896,65.5074627 C74.2985075,71.2985075 65.7313433,71.2985075 60.4477612,65.5074627 L1.97014925,23.119403 C-0.656716418,20.2238806 -0.656716418,15.5074627 1.97014925,12.641791 L11.5223881,2.19402985 C14.1492537,-0.731343284 18.4477612,-0.731343284 21.0746269,2.19402985 L65.2238806,39.358209 C67.880597,42.2537313 72.1492537,42.2537313 74.8358209,39.358209 L118.925373,2.19402985 C121.552239,-0.731343284 125.850746,-0.731343284 128.477612,2.19402985 L138.029851,12.641791 C140.656716,15.5373134 140.656716,20.2238806 138.029851,23.119403 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 



