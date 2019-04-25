import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-5559.000000, -1275.000000)" fillRule="nonzero" id="icon_Timeline_2">
						<g transform="translate(5559.000000, 1275.000000)">
							<circle id="椭圆_1_拷贝_10" fill="#DBDBDB" cx="70" cy="70" r="70"></circle>
							<g id="组_4" transform="translate(29.166667, 64.166667)" fill="#FFFFFF">
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