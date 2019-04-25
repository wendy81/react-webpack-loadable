import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-4048.000000, -1059.000000)" fillRule="nonzero" id="icon_Group_del">
						<g transform="translate(4048.000000, 1059.000000)">
							<circle id="椭圆_2" fill="#1793E6" cx="70" cy="70" r="70"></circle>
							<rect id="矩形_6" fill="#FFFFFF" x="30" y="60" width="80" height="20" rx="1"></rect>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}