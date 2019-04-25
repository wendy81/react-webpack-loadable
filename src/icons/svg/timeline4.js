import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<defs>
					<linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
						<stop stopColor="#4482FC" offset="0%"></stop>
						<stop stopColor="#20B3FF" offset="100%"></stop>
					</linearGradient>
				</defs>
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-5857.000000, -1045.000000)" fillRule="nonzero" id="icon_Timeline_1">
						<g transform="translate(5857.393939, 1045.000000)">
							<g id="Group" fill="url(#linearGradient-1)">
								<circle id="椭圆_1_拷贝_11-2" cx="70" cy="70" r="70"></circle>
							</g>
							<g id="组_4" transform="translate(28.000000, 63.000000)" fill="#FFFFFF">
								<circle id="椭圆_2_拷贝_8" cx="8.75" cy="8.75" r="8.75"></circle>
								<circle id="椭圆_2_拷贝_8-2" cx="40.25" cy="8.75" r="8.75"></circle>
								<circle id="椭圆_2_拷贝_8-3" cx="71.75" cy="8.75" r="8.75"></circle>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}