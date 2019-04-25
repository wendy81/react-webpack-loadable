import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-3736.000000, -1300.000000)" fill={color} fillRule="nonzero" id="Path">
						<polygon points="3746.87694 1365.02274 3782.43005 1390.35647 3864.91796 1318 3876 1318 3876 1329.12181 3782.43005 1422.05544 3736 1375.36778 3736 1365.02274"></polygon>
					</g>
				</g>
			</svg>
		)
	}

}