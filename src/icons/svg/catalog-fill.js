import React from 'react';
export default class Catalog extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="1">
					<g transform="translate(-1886.000000, -42.000000)" fill={color} fillRule="nonzero" id="icon_catalog">
						<g transform="translate(1886.000000, 56.000000)">
							<path d="M129.588667,16.646 L70.3593333,16.646 L52.1593333,2.24933333 C50.2896284,0.795479458 47.9897653,0.00423462939 45.6213333,1.18590034e-15 L10.4113333,1.18590034e-15 C4.72538372,-0.0518565323 0.0692013579,4.50623503 0,10.192 L0,101.808 C0.0692013579,107.493765 4.72538372,112.051857 10.4113333,112 L129.588667,112 C135.280781,112.049227 139.938452,107.481328 140,101.789333 L140,26.838 C139.930799,21.152235 135.274616,16.5941435 129.588667,16.646 Z"></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

} 
