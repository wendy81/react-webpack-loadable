import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-5015.000000, -1053.000000)" fill={color} id="loading">
                        <path d="M5015,1123.99748 L5059.81621,1079 L5059.81621,1104.18906 L5100.30999,1104.18906 L5100.30999,1141.96579 L5059.81621,1141.96579 L5059.81621,1166.94906 L5015,1123.99748 Z M5109.6162,1104.23682 L5136.98476,1104.23682 L5136.98476,1142.0032 L5109.6162,1142.0032 L5109.6162,1104.23682 Z M5146.29097,1104.23682 L5155,1104.23682 L5155,1142.0032 L5146.29097,1142.0032 L5146.29097,1104.23682 Z"></path>
                    </g>
                </g>
			</svg>
		)
	}

}