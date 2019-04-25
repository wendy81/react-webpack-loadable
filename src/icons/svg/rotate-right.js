import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-4561.000000, -538.000000)" fill={color} fillRule="nonzero" id="Group">
						<g transform="translate(4641.000000, 605.500000) scale(-1, 1) translate(-4641.000000, -605.500000) translate(4571.000000, 555.000000)">
							<g id="Group-11">
								<polygon id="Combined-Shape-Copy-5" transform="translate(31.227168, 34.879342) rotate(-135.000000) translate(-31.227168, -34.879342) " points="29.5755191 19.6081641 60.1178742 50.1505192 2.33646119 46.847222"></polygon>
								<path d="M28.1063826,40.3755699 C35.3456775,17.3264985 56.8789322,0.607453982 82.317129,0.607453982 C113.693306,0.607453982 139.128723,26.0428711 139.128723,57.4190482 C139.128723,74.5319316 131.562395,89.8776044 119.592635,100.293169 L115.586374,96.6534091 L111.109815,92.5863742 C121.278205,84.251339 127.766404,71.5928937 127.766404,57.4190482 C127.766404,32.3181065 107.418071,11.9697728 82.317129,11.9697728 C63.2433319,11.9697728 46.9138013,23.7193744 40.1715447,40.3755699 L28.1063826,40.3755699 Z" id="Combined-Shape"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}