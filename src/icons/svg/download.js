import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-4057.000000, -331.000000)" fill={color} fillRule="nonzero" id="Group">
						<g transform="translate(4064.000000, 331.000000)">
							<g id="Group-8">
								<rect id="Rectangle" x="54" y="0" width="17.5" height="108.5" rx="8.75"></rect>
								<rect id="Rectangle-Copy-2" transform="translate(86.250000, 81.760985) rotate(45.000000) translate(-86.250000, -81.760985) " x="77.5" y="38.5" width="17.5" height="86.5219696" rx="8.75"></rect>
								<path d="M37.25,38.5 L37.25,38.5 C42.0824916,38.5 46,42.4175084 46,47.25 L46,116.27197 C46,121.104461 42.0824916,125.02197 37.25,125.02197 L37.25,125.02197 C32.4175084,125.02197 28.5,121.104461 28.5,116.27197 L28.5,88.7504077 L28.5,47.25 C28.5,42.4175084 32.4175084,38.5 37.25,38.5 Z" id="Rectangle-Copy-3" transform="translate(37.250000, 81.760985) scale(-1, 1) rotate(45.000000) translate(-37.250000, -81.760985) "></path>
								<rect id="Rectangle-Copy" transform="translate(63.500000, 131.250000) rotate(90.000000) translate(-63.500000, -131.250000) " x="54.75" y="68.25" width="17.5" height="126" rx="8.75"></rect>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}