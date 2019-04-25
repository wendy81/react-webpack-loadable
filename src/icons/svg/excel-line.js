import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-1886.000000, -1446.000000)" fill={color} fillRule="nonzero" id="excel">
						<g transform="translate(1894.000000, 1446.000000)">
							<polygon id="icon_share_Excel_拷贝" points="88.2628877 139.998503 61.1268449 96.9623529 33.9803209 139.998503 0 139.998503 44.1157219 69.9730481 0 0 34.0851337 0 61.1373262 42.973262 88.1895187 0 122.274652 0 78.1589305 69.9625668 122.274652 139.998503"></polygon>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}