import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" >
				<defs>
					<linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
						<stop stopColor="#4482FC" offset="0%"></stop>
						<stop stopColor="#20B3FF" offset="100%"></stop>
					</linearGradient>
				</defs>
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-1537.000000, -1383.000000)" fillRule="nonzero" id="icon_Chat">
						<g transform="translate(1537.000000, 1383.000000)">
							<path d="M11.6666667,0 L128.333333,0 C134.776655,3.94539688e-16 140,5.22334459 140,11.6666667 L140,140 L11.6666667,140 C5.22334459,140 7.89079376e-16,134.776655 0,128.333333 L0,11.6666667 C-7.89079376e-16,5.22334459 5.22334459,1.18361906e-15 11.6666667,0 Z" id="圆角矩形_1" fill="url(#linearGradient-1)"></path>
							<g id="组_84" transform="translate(35.000000, 32.083333)">
								<path d="M1.23863882e-13,37.9166667 C0.000578956243,22.0739496 10.6429964,8.20720584 25.9465142,4.10915402 C41.250032,0.0111021919 57.3979573,6.70379518 65.315612,20.4261285 C73.2332666,34.1484617 70.9459898,51.4780894 59.7391667,62.67625 L65.4208333,72.9166667 L36.5079167,72.9166667 L36.5079167,72.89625 C36.00625,72.9176389 35.5016667,72.9283333 34.9941667,72.9283333 C25.7105785,72.9267866 16.8079218,69.2370127 10.2450748,62.6708837 C3.6822278,56.1047547 -0.00309465827,47.2002544 1.23863882e-13,37.9166667 Z" id="椭圆_576_拷贝_10" fill="#FFFFFF"></path>
								<ellipse id="椭圆_1118_拷贝_7" fill="#1793E5" cx="19.775" cy="37.9166667" rx="4.55" ry="4.57916667"></ellipse>
								<circle id="椭圆_1118_拷贝_7-2" fill="#1793E5" cx="35" cy="37.9166667" r="4.57916667"></circle>
								<ellipse id="椭圆_1118_拷贝_7-3" fill="#1793E5" cx="50.1958333" cy="37.9166667" rx="4.55" ry="4.57916667"></ellipse>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}