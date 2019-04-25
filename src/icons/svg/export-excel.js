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
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="iPad" transform="translate(-111.000000, -484.000000)" fillRule="nonzero">
                        <g id="icon_Excel" transform="translate(124.000000, 484.000000)">
                            <rect id="矩形_562_拷贝" fill="url(#linearGradient-1)" x="0" y="0" width="115.294118" height="140" rx="4"></rect>
                            <polygon id="icon_share_Excel_拷贝" fill="#FFFFFF" points="68.2994118 97.4976471 57.6388235 80.5905882 46.9741176 97.4976471 33.6247059 97.4976471 50.9558824 69.9876471 33.6247059 42.4982353 47.0152941 42.4982353 57.6429412 59.3805882 68.2705882 42.4982353 81.6611765 42.4982353 64.33 69.9835294 81.6611765 97.4976471"></polygon>
                        </g>
                    </g>
                </g>
			</svg>
		)
	}

}