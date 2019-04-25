import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<defs>
					<linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
						<stop stopColor="#4482FC" offset="0%"></stop>
						<stop stopColor="#20B3FF" offset="100%"></stop>
					</linearGradient>
				</defs>
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-3065.000000, -586.000000)" fillRule="nonzero" id="icon_navbar_new">
						<g transform="translate(3065.000000, 586.000000)">
							<g id="Group" fill="url(#linearGradient-1)">
								<circle id="圆角矩形_1148_拷贝_15-2" cx="70" cy="70" r="70"></circle>
							</g>
							<rect id="圆角矩形_3_拷贝_24" fill="#FFFFFF" x="38.8888889" y="64.7111111" width="62.2222222" height="8.94444444" rx="0.5"></rect>
							<rect id="圆角矩形_3_拷贝_24-2" fill="#FFFFFF" x="64.7111111" y="38.8888889" width="8.94444444" height="62.2222222" rx="0.5"></rect>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}