import React from 'react';
export default class ArrowDown extends React.Component {

	render() {
		const { width, height, color } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 140 140" version="1.1" >
				<g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g transform="translate(-2239.000000, -526.000000)" fill={color} fillRule="nonzero" id="icon_Category_Furniture">
						<g transform="translate(2239.000000, 537.000000)">
							<path d="M137.34,49.826 C136.573906,46.6725906 134.910913,43.8085464 132.552,41.58 C128.571242,37.9425929 123.208227,36.2111053 117.852,36.834 L117.852,17.143 C117.840429,7.67997948 110.172021,0.0115708553 100.709,0 L33.579,0 C24.116436,0.0154043068 16.4482674,7.68044312 16.429,17.143 L16.429,36.897 C12.2665771,37.1434378 8.3205221,38.8342506 5.271,41.678 C2.90858201,43.9026372 1.24695356,46.7685205 0.49,49.924 C-0.301025089,53.3308868 -0.119115262,56.8914685 1.015,60.2 C2.65966672,62.9350485 4.55301438,65.5126258 6.671,67.9 C7.371,68.74 7.875,69.398 8.071,69.678 C9.73857649,71.8401287 11.1810553,74.1668587 12.376,76.622 C12.705,77.322 13.034,78.106 13.349,78.883 C15.0486021,83.0962128 16.3834997,87.4475105 17.339,91.889 C17.682,93.485 17.815,94.178 18.039,95.452 C18.2094678,96.1524226 18.4806237,96.8244176 18.844,97.447 C18.907,97.58 19.012,97.762 19.04,97.846 C19.1189428,98.4075854 19.3144614,98.9464538 19.614,99.428 L19.614,111.482 C19.614,113.886648 21.5633522,115.836 23.968,115.836 C26.3726478,115.836 28.322,113.886648 28.322,111.482 L28.322,103.026 L110.747,103.026 L110.747,111.468 C110.747,113.872648 112.696352,115.822 115.101,115.822 C117.505648,115.822 119.455,113.872648 119.455,111.468 L119.455,98.7 C119.451498,98.418089 119.423392,98.137022 119.371,97.86 C119.379012,97.7832084 119.379012,97.7057916 119.371,97.629 C119.371,97.496 119.455,97.02 119.602,96.082 C119.833,94.682 120.113,93.282 120.428,91.777 C121.378224,87.3341381 122.71326,82.9823903 124.418,78.771 C124.733,77.994 125.062,77.238 125.391,76.51 C126.585945,74.0548587 128.028424,71.7281287 129.696,69.566 C129.892,69.286 130.396,68.628 131.096,67.788 C133.221474,65.4033506 135.119708,62.8255014 136.766,60.088 C137.928437,56.791344 138.127542,53.2317271 137.34,49.826 Z M128.541,57.162 C128.394,57.33 128.198,57.575 127.946,57.862 L127.155,58.835 C124.915,61.558 124.054,62.608 122.773,64.358 C120.746678,66.9996813 119.001246,69.8453923 117.565,72.849 C117.187,73.689 116.809,74.564 116.445,75.439 C114.556277,80.1172003 113.071523,84.948507 112.007,89.88 C111.678,91.399 111.377,92.883 111.153,94.297 L27.293,94.297 C27.1063616,93.5822908 26.8725148,92.8807504 26.593,92.197 C26.2939963,91.4780182 26.0460485,90.7388528 25.851,89.985 C24.7941842,85.0514981 23.3092278,80.2195343 21.413,75.544 C21.049,74.655 20.671,73.78 20.293,72.954 C18.8505346,69.953779 17.1054842,67.1086901 15.085,64.463 C13.783,62.713 12.943,61.663 10.703,58.94 L9.912,57.967 L9.317,57.267 C9.317,57.267 9.254,57.183 9.205,57.134 C8.07820029,53.9576381 8.87906581,50.416396 11.263,48.034 C14.6687907,45.3316393 19.292408,44.7412182 23.268,46.501 L45.878,75.6 C46.1318421,75.9169095 46.4259978,76.199299 46.753,76.44 C47.5353768,77.1040052 48.5268471,77.4708492 49.553,77.476 L87.92,77.476 C89.2513519,77.4765615 90.5097913,76.8679719 91.336,75.824 L114.569,46.424 C118.548205,44.6568921 123.17976,45.247638 126.588,47.957 C128.981319,50.3342101 129.783503,53.8812811 128.646,57.057 C128.604,57.078 128.569,57.127 128.541,57.162 Z M109.151,39.354 C108.905991,39.5617945 108.685257,39.7966186 108.493,40.054 L85.827,68.754 L51.576,68.754 L29.337,40.131 C28.8635892,39.539252 28.2500779,39.0749081 27.552,38.78 C26.7643627,38.4586442 25.960621,38.1782692 25.144,37.94 L25.144,17.143 C25.155543,12.4892678 28.9252678,8.719543 33.579,8.708 L100.716,8.708 C105.375192,8.71570753 109.150292,12.4908084 109.158,17.15 L109.158,39.354 L109.151,39.354 Z"></path>
						</g>
					</g>
				</g>
			</svg>
		)
	}

}