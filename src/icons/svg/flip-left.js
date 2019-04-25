import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="4" fill="none" fillRule="evenodd">
					<g transform="translate(-4574.000000, -791.000000)" fillRule="nonzero" id="Group-12">
						<g transform="translate(4577.000000, 791.000000)">
							<g id="Group-2">
								<path d="M61.1,2.30824532 L0.776511154,135.016177 L61.1,135.016177 L61.1,2.30824532 Z" id="Path-8" stroke={color}></path>
								<polygon id="Path-8-Copy" fill={color} transform="translate(102.191109, 67.758088) scale(-1, 1) translate(-102.191109, -67.758088) " points="131.582218 0 72.8 135.516177 131.582218 135.516177"></polygon>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}