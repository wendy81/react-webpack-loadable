import React from 'react';
export default class Cancel extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-1297.000000, -214.000000)" fill={color} fillRule="nonzero">
		            <g id="caret-down-copy" transform="translate(1367.000000, 284.000000) scale(1, -1) translate(-1367.000000, -284.000000) translate(1297.000000, 237.000000)">
		                <path d="M136.710125,4.3781362 C132.670699,0.965949821 127.702957,0 117.31586,0 L23.7065412,0 C22.828405,0 22.0129928,0.0501792115 21.2603047,0.150537634 C15.1886201,0.288530466 8.53987455,-0.777777778 3.96102151,4.3781362 C-1.3203405,10.2114695 -1.3203405,19.6953405 3.96102151,25.5412186 L60.8517025,89.0304659 C66.0703405,94.9139785 74.5757168,94.9139785 79.8194444,89.0304659 L136.697581,25.5412186 C141.916219,19.6953405 140.109767,7.27598566 136.710125,4.3781362 Z" id="Shape"></path>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

}
