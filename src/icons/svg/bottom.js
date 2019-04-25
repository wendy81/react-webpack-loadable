import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-4057.000000, -56.000000)" fill={color} fillRule="nonzero" id="right-copy">
						<g transform="translate(4127.000000, 126.000000) rotate(90.000000) translate(-4127.000000, -126.000000) translate(4099.000000, 56.000000)">
							<path d="M12.3421053,1.12253289 L53.6513158,64.5139803 C56.7598684,67.5534539 56.7598684,72.4350329 53.6513158,75.4514803 L12.3421053,138.865954 C10.7993421,140.362664 8.28947368,140.362664 6.74671053,138.865954 L1.17434211,133.385691 C-0.391447368,131.88898 -0.391447368,129.448191 1.17434211,127.928454 L39.6743421,72.7574013 C41.2401316,71.2376645 41.2401316,68.7738487 39.6743421,67.2541118 L1.17434211,12.0370066 C-0.391447368,10.5633224 -0.391447368,8.09950658 1.17434211,6.57976974 L6.76973684,1.12253289 C8.28947368,-0.374177632 10.7993421,-0.374177632 12.3421053,1.12253289 Z" id="Shape"></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}