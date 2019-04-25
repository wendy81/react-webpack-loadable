import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-1537.000000, -1694.000000)" fill={color} fillRule="nonzero" id="Group">
						<g transform="translate(1537.000000, 1694.000000)">
							<path d="M15.5555556,15.5555556 L15.5555556,42.7777778 L1.77635684e-15,42.7777778 L6.45947942e-16,15.5555556 L0,0 L42.7777778,0 L42.7777778,15.5555556 L15.5555556,15.5555556 Z" id="Combined-Shape"></path>
							<path d="M112.777778,112.777778 L112.777778,140 L97.2222222,140 L97.2222222,112.777778 L97.2222222,97.2222222 L140,97.2222222 L140,112.777778 L112.777778,112.777778 Z" id="Combined-Shape-Copy" transform="translate(118.611111, 118.611111) rotate(180.000000) translate(-118.611111, -118.611111) "></path>
							<path d="M15.5555556,112.777778 L15.5555556,140 L1.77635684e-15,140 L6.45947942e-16,112.777778 L0,97.2222222 L42.7777778,97.2222222 L42.7777778,112.777778 L15.5555556,112.777778 Z" id="Combined-Shape-Copy-3" transform="translate(21.388889, 118.611111) rotate(-90.000000) translate(-21.388889, -118.611111) "></path>
							<path d="M112.777778,15.5555556 L112.777778,42.7777778 L97.2222222,42.7777778 L97.2222222,15.5555556 L97.2222222,0 L140,0 L140,15.5555556 L112.777778,15.5555556 Z" id="Combined-Shape-Copy-2" transform="translate(118.611111, 21.388889) rotate(90.000000) translate(-118.611111, -21.388889) "></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}