import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="1">
					<g transform="translate(-3736.000000, -91.000000)" fill={color} fillRule="nonzero" id="icon_Enterprise_3">
						<g transform="translate(3736.000000, 107.000000)">
							<g id="路径_9">
								<path d="M93.3927273,103.262727 L36.4445455,103.262727 C16.5421437,102.728776 0.53395137,86.7205836 -6.53588295e-16,66.8181818 C0.37438803,51.9464334 9.66572048,38.762786 23.5454545,33.4090909 C26.3953515,16.8774326 39.2055881,3.85023379 55.6870562,0.723118922 C72.1685243,-2.40399595 88.8601469,5.02566132 97.5672727,19.3645455 C118.361289,22.2685644 133.787098,40.1274489 133.636364,61.1227273 C134.032681,83.8227892 116.086982,102.614127 93.3927273,103.262727 Z M63,12.1481818 C48.2217169,12.1715299 35.971036,23.6056839 34.93,38.3472727 L34.5481818,42.5218182 L30.3736364,43.6609091 C19.672512,46.3222347 12.0609577,55.7950275 11.7663636,66.8181818 C12.3024358,80.1556968 23.1002935,90.7864912 36.4445455,91.1145455 L93.0109091,91.1145455 C100.722039,90.8873114 108.023995,87.5935901 113.298058,81.9635432 C118.57212,76.3334962 121.382565,68.8322589 121.106364,61.1227273 C121.019513,45.3188579 108.775462,32.2483678 93.0109091,31.1309091 L89.6,31.1309091 L88.0790909,27.7136364 C83.3816907,18.1581076 73.6476619,12.1166373 63,12.1481818 Z"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}