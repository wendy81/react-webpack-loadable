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
					<g transform="translate(-5553.000000, -1033.000000)" fillRule="nonzero" id="icon_Timeline_3">
						<g transform="translate(5553.000000, 1033.000000)">
							<g id="Group" fill="url(#linearGradient-1)">
								<circle id="椭圆_1_拷贝_5-2" cx="70" cy="70" r="70"></circle>
							</g>
							<g id="组_1_拷贝" transform="translate(36.102500, 43.143333)" fill="#FFFFFF">
								<path d="M66.99,7.57166667 C68.1495389,8.66199685 68.807107,10.1829331 68.807107,11.7745833 C68.807107,13.3662335 68.1495389,14.8871698 66.99,15.9775 L31.8266667,49.6008333 C29.3565708,51.9232982 25.5059292,51.9232982 23.0358333,49.6008333 C21.8747209,48.5113774 21.2160393,46.9901153 21.2160393,45.3979167 C21.2160393,43.8057181 21.8747209,42.284456 23.0358333,41.195 L58.1991667,7.56583333 C60.6708034,5.24500684 64.5214455,5.24756201 66.99,7.57166667 Z" id="圆角矩形_563_拷贝"></path>
								<path d="M16.4325,26.5125 L31.815,41.2241667 C32.9761124,42.3136226 33.634794,43.8348847 33.634794,45.4270833 C33.634794,47.0192819 32.9761124,48.540544 31.815,49.63 C29.3449041,51.9524649 25.4942626,51.9524649 23.0241667,49.63 L7.64166667,34.9241667 C6.47866658,33.8345565 5.81876187,32.3120145 5.81876187,30.7183333 C5.81876187,29.1246522 6.47866658,27.6021102 7.64166667,26.5125 C10.1117626,24.1900351 13.9624041,24.1900351 16.4325,26.5125 Z" id="圆角矩形_563_拷贝_2"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}