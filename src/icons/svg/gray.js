import React from 'react';
export default class Home extends React.Component {

render(){
    const { width, height } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
			<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g transform="translate(-1329.000000, -825.000000)" fill="#F0F2F5" id="Rectangle">
		            <rect x="1329" y="825" width="140" height="140"></rect>
		        </g>
		    </g>
        </svg>
    )
}

} 