import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-4363.000000, -343.000000)" fill={color} fillRule="nonzero" id="Group-9">
						<g transform="translate(4346.000000, 326.000000)">
							<path d="M110.208133,35.6113264 L110.208133,65.9758925 L91.9893936,65.9758925 L91.9893936,35.6113264 L73.770654,35.6113264 L101.098763,11.3196736 L128.426873,35.6113264 L110.208133,35.6113264 Z" id="Combined-Shape-Copy" transform="translate(101.098763, 38.647783) rotate(45.000000) translate(-101.098763, -38.647783) "></path>
							<path d="M47.7571528,98.0623068 L47.7571528,128.426873 L29.5384132,128.426873 L29.5384132,98.0623068 L11.3196736,98.0623068 L38.647783,73.770654 L65.9758925,98.0623068 L47.7571528,98.0623068 Z" id="Combined-Shape-Copy-2" transform="translate(38.647783, 101.098763) rotate(-135.000000) translate(-38.647783, -101.098763) "></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}