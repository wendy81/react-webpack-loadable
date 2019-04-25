import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-4345.000000, -539.000000)" fill={color} fillRule="nonzero" id="Group-10">
						<g transform="translate(4347.000000, 541.000000)">
							<path d="M107.059329,34.59386 L107.059329,64.090867 L89.3611252,64.090867 L89.3611252,34.59386 L71.662921,34.59386 L98.2102273,10.9962543 L124.757534,34.59386 L107.059329,34.59386 Z" id="Combined-Shape-Copy-3" transform="translate(98.210227, 37.543561) rotate(-135.000000) translate(-98.210227, -37.543561) "></path>
							<path d="M46.3926628,95.2605266 L46.3926628,124.757534 L28.6944585,124.757534 L28.6944585,95.2605266 L10.9962543,95.2605266 L37.5435607,71.662921 L64.090867,95.2605266 L46.3926628,95.2605266 Z" id="Combined-Shape-Copy-4" transform="translate(37.543561, 98.210227) rotate(45.000000) translate(-37.543561, -98.210227) "></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}