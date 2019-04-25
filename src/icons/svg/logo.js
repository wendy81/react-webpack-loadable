import React from 'react';
export default class Logo extends React.Component {

render(){
    const { width, height, color } = this.props;
    return (
        <svg width={width} height={height} viewBox="0 0 928.8 140" version="1.1" >
		    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Desktop-HD" transform="translate(-31.000000, -1108.000000)" fill={color} fillRule="nonzero">
		            <g id="Logo_OfferPlus" transform="translate(33.000000, 1109.000000)">
		                <path d="M124.96,71.92 C124.96,113.84 100.88,139.92 62.56,139.92 C24.16,139.92 0.08,113.84 0.08,71.92 C-4.3298698e-15,30 24.08,3.84 62.48,3.84 C100.8,3.84 124.96,30 124.96,71.92 Z M24.08,71.92 C24.08,101.2 38.96,119.84 62.48,119.84 C85.92,119.84 100.88,101.2 100.88,71.92 C100.88,42.56 85.92,23.92 62.48,23.92 C38.96,23.92 24.08,42.56 24.08,71.92 Z" id="XMLID_81_"></path>
		                <path d="M229.36,38 L229.36,30.08 C229.36,22.24 232.72,18.88 240.88,18.88 C243.6,18.88 246.16,19.12 248.16,19.6 L248.16,3.04 C244.8,2.4 241.12,2.16 237.12,2.16 C215.68,2.16 206.88,10.16 206.88,29.04 L206.88,38 L196.48,38 L193.28,38 L170.56,38 L170.56,30.08 C170.56,22.24 173.92,18.88 182.08,18.88 C184.8,18.88 187.36,19.12 189.36,19.6 L189.36,3.04 C186,2.4 182.32,2.16 178.32,2.16 C156.88,2.16 148.08,10.16 148.08,29.04 L148.08,38 L134.48,38 L134.48,55.6 L148.08,55.6 L148.08,137.76 L170.8,137.76 L170.8,55.6 L193.28,55.6 L196.48,55.6 L206.88,55.6 L206.88,137.76 L229.6,137.76 L229.6,55.6 L248.24,55.6 L248.24,38 L229.36,38 Z" id="Shape"></path>
		                <path d="M348.08,108.08 C345.12,126.48 327.44,139.2 304.16,139.2 C274.72,139.2 256.4,119.68 256.4,88.24 C256.4,56.88 274.72,36.56 303.28,36.56 C331.2,36.56 348.88,55.6 348.88,85.84 L348.88,93.36 L279.2,93.36 L279.2,94.72 C279.2,110.8 289.44,121.44 304.64,121.44 C315.6,121.44 324.08,116.24 326.72,108 L348.08,108 L348.08,108.08 Z M279.36,78.24 L326.64,78.24 C326.16,63.84 316.88,54.32 303.36,54.32 C290,54.32 280.32,64 279.36,78.24 Z" id="XMLID_74_"></path>
		                <path d="M364.24,38 L386.08,38 L386.08,55.36 L386.56,55.36 C389.76,43.68 398.72,36.96 410.48,36.96 C413.52,36.96 416.08,37.36 417.76,37.84 L417.76,58.4 C415.84,57.68 412.32,57.12 408.4,57.12 C395.04,57.12 387.04,65.76 387.04,79.84 L387.04,137.68 L364.32,137.68 L364.32,38 L364.24,38 Z" id="XMLID_72_"></path>
		                <path d="M502.32,6.16 C528.56,6.16 546.72,24 546.72,50.4 C546.72,76.8 528,94.64 501.28,94.64 L472.64,94.64 L472.64,138.32 L449.04,138.32 L449.04,6.16 L502.32,6.16 Z M472.64,75.6 L496,75.6 C512.96,75.6 522.72,66.4 522.72,50.4 C522.72,34.56 513.04,25.44 496.08,25.44 L472.64,25.44 L472.64,75.6 Z" id="XMLID_69_"></path>
		                <polygon id="XMLID_67_" points="562.8 0 585.6 0 585.6 138.32 562.8 138.32"></polygon>
		                <path d="M694,138.32 L672.08,138.32 L672.08,126.72 L671.52,126.72 C665.44,135.28 654,139.6 640.8,139.6 C618.96,139.6 605.36,125.52 605.36,102.4 L605.36,38.24 L628.16,38.24 L628.16,97.92 C628.16,112.48 635.2,120.4 648.72,120.4 C662.64,120.4 671.2,110.56 671.2,95.76 L671.2,38.24 L694,38.24 L694,138.32 Z" id="XMLID_65_"></path>
		                <path d="M751.92,36.8 C775.04,36.8 791.12,49.28 791.6,67.44 L770.32,67.44 C769.6,59.04 762.32,53.68 751.44,53.68 C740.8,53.68 733.84,58.56 733.84,65.84 C733.84,71.44 738.48,75.28 748.4,77.6 L766,81.6 C786.16,86.24 793.84,93.84 793.84,108.64 C793.84,127.2 776.4,139.76 751.36,139.76 C726.8,139.76 710.56,127.36 709.12,108.8 L731.6,108.8 C732.96,117.84 740.4,122.88 752.32,122.88 C763.92,122.88 771.2,118.24 771.2,110.8 C771.2,104.96 767.52,101.84 757.52,99.44 L739.36,95.04 C721.04,90.72 711.68,81.28 711.68,67.12 C711.68,49.04 727.76,36.8 751.92,36.8 Z" id="XMLID_63_"></path>
		                <path d="M897.84,27.28 C892.88,16.96 882.4,9.92 870.16,9.92 C853.84,9.92 840.4,22.64 839.36,38.64 C827.36,42.08 818.56,52.56 818.56,64.96 C818.56,79.6 830.8,91.6 846.08,92.48 C846.08,92.48 897.2,92.48 897.68,92.48 C914.72,92.48 928.64,77.84 928.64,59.84 C928.64,42.4 915.04,28.16 897.84,27.28 Z" id="XMLID_6_"></path>
		                <g id="XMLID_52_" transform="translate(819.200000, 107.200000)">
		                    <path d="M0.24,27.2 C0.24,25.44 1.6,24.08 3.36,24.08 C5.12,24.08 6.48,25.44 6.48,27.2 C6.48,28.96 5.12,30.32 3.36,30.32 C1.6,30.32 0.24,28.96 0.24,27.2 Z" id="XMLID_60_"></path>
		                    <path d="M30.64,10.16 C30,7.04 27.44,4.56 22.96,4.56 C17.84,4.56 14.32,8.8 14.32,15.36 C14.32,22.08 17.84,26.16 23.04,26.16 C27.12,26.16 29.84,24.24 30.72,20.72 L35.36,20.72 C34.56,26.48 29.76,30.4 23.04,30.4 C14.96,30.4 9.52,24.64 9.52,15.44 C9.52,6.4 14.88,0.48 22.96,0.48 C30.24,0.48 34.72,5.2 35.28,10.32 L30.64,10.32 L30.64,10.16 Z" id="XMLID_58_"></path>
		                    <path d="M37.36,15.28 C37.36,6.16 42.64,0.32 50.96,0.32 C59.2,0.32 64.56,6.16 64.56,15.28 C64.56,24.4 59.28,30.24 50.96,30.24 C42.64,30.32 37.36,24.48 37.36,15.28 Z M59.68,15.28 C59.68,8.48 56.4,4.48 50.96,4.48 C45.52,4.48 42.24,8.48 42.24,15.28 C42.24,22.08 45.52,26.08 50.96,26.08 C56.4,26.08 59.68,22.08 59.68,15.28 Z" id="XMLID_55_"></path>
		                    <path d="M68.32,0.56 L72.8,0.56 L72.8,5.36 L72.88,5.36 C74.24,2.24 77.44,0.32 81.2,0.32 C85.2,0.32 88.16,2.32 89.44,5.92 L89.52,5.92 C91.2,2.4 94.64,0.32 98.8,0.32 C104.64,0.32 108.4,4.08 108.4,9.92 L108.4,30 L103.68,30 L103.68,10.96 C103.68,6.88 101.44,4.48 97.44,4.48 C93.52,4.48 90.72,7.44 90.72,11.44 L90.72,29.92 L86,29.92 L86,10.32 C86,6.8 83.6,4.4 79.92,4.4 C76,4.4 73.12,7.52 73.12,11.6 L73.12,29.84 L68.4,29.84 L68.4,0.56 L68.32,0.56 Z" id="XMLID_53_"></path>
		                </g>
		            </g>
		        </g>
		    </g>
        </svg>
    )
}

} 