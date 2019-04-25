import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="1">
					<g transform="translate(-3416.000000, -339.000000)" id="icon_Pro_2">
						<g transform="translate(3416.000000, 339.000000)">
							<rect id="Rectangle-path" x="0" y="0" width="62.2222222" height="62.2222222" rx="1.2"></rect>
							<rect id="Rectangle-path" stroke={color} strokeWidth="14.6" x="6.22222222" y="6.22222222" width="49.7777778" height="49.7777778" rx="0.4"></rect>
							<rect id="Rectangle-path" x="0" y="77.7777778" width="62.2222222" height="62.2222222" rx="1.2"></rect>
							<rect id="Rectangle-path" stroke={color} strokeWidth="14.6" x="6.22222222" y="84" width="49.7777778" height="49.7777778" rx="0.4"></rect>
							<rect id="Rectangle-path" x="77.7777778" y="0" width="62.2222222" height="62.2222222" rx="1.2"></rect>
							<rect id="Rectangle-path" stroke={color} strokeWidth="14.6" x="84" y="6.22222222" width="49.7777778" height="49.7777778" rx="0.4"></rect>
							<rect id="Rectangle-path" x="77.7777778" y="77.7777778" width="62.2222222" height="62.2222222" rx="1.2"></rect>
							<rect id="Rectangle-path" stroke={color} strokeWidth="14.6" x="84" y="84" width="49.7777778" height="49.7777778" rx="0.4"></rect>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}