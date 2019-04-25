import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-3736.000000, -672.000000)" fillRule="nonzero" id="Group-6">
						<g transform="translate(3736.000000, 672.000000)">
							<circle id="Oval" fill="#29B22D" cx="70" cy="70" r="70"></circle>
							<path d="M97.3554515,53.8696298 L71.7267434,53.8696298 L63.8515494,47.6401494 C63.0425226,47.0110626 62.047365,46.6686886 61.0225375,46.6668562 L45.7870661,46.6668562 C43.3267388,46.6444178 41.3119949,48.6167175 41.2820513,51.0769649 L41.2820513,90.7194797 C41.3119949,93.179727 43.3267388,95.1520268 45.7870661,95.1295883 L97.3554515,95.1295883 C99.8184462,95.150889 101.833834,93.1743454 101.860466,90.7114025 L101.860466,58.2797384 C101.830523,55.819491 99.8157788,53.8471913 97.3554515,53.8696298 Z" id="icon_catalog" fill="#FFFFFF"></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}