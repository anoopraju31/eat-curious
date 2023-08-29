'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { chomp } from '@/utils/animations'

const Hero = () => {
	return (
		<header className='w-full pt-[105px] md:pt-[160px] xl:pt-[227px] pb-[5vw] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] text-center border-b-2 border-b-[rgba(255,246,246,0.1)] bg-[var(--black)]'>
			<motion.svg
				variants={chomp}
				whileInView='animate'
				viewport={{ once: true }}
				className='w-full max-w-[424px] md:max-w-[808px] mx-auto'
				width='808'
				height='207'
				viewBox='0 0 808 207'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clip-path='url(#clip0_587_16655)'>
					<path
						d='M46.4079 158.664C50.7625 157.371 55.6145 155.968 60.7206 154.521C60.9748 162.949 61.3506 171.488 61.7153 179.728C62.0911 188.123 62.4669 196.661 62.9643 205.056C41.9759 205.255 20.9876 205.465 -0.0117188 205.686C0.275641 192.972 0.46353 180.258 0.46353 167.533C0.46353 154.93 0.485634 142.305 -0.0117188 129.712C14.4999 119.429 29.3432 109.576 44.5953 100.43C44.8827 118.037 45.59 135.633 46.1758 153.229C46.2642 155.405 46.3084 156.488 46.3858 158.664H46.4079Z'
						fill='#FFF6F6'></path>
					<path
						d='M141.05 52.0931C141.216 57.8259 141.437 67.0492 141.846 74.9581C142.277 83.2756 142.862 92.3554 143.404 97.9667C132.871 100.739 122.36 103.777 112.015 107.179C112.192 110.515 112.281 112.183 112.446 115.508C122.603 112.514 132.761 109.476 142.818 106.152C143.315 118.921 143.89 131.69 144.664 144.437C135.789 145.287 124.714 146.856 114.193 148.833C114.37 152.312 114.469 154.058 114.646 157.537C125.168 155.836 135.689 154.091 146.2 152.368C146.3 159.106 146.819 169.246 147.294 178.58C147.747 187.306 148.256 197.236 148.875 204.339C122.946 204.526 97.0174 204.725 71.0887 204.957C70.5914 185.45 69.7625 165.932 68.8451 146.458C67.9388 127.062 66.9441 107.632 65.6289 88.2352C90.2313 74.8697 115.209 62.896 141.039 52.082L141.05 52.0931Z'
						fill='#FFF6F6'></path>
					<path
						d='M224.66 24.1016C224.903 37.4671 225.467 50.8326 226.008 64.1871C226.572 78.1491 227.102 92.1222 227.942 106.084C222.914 106.636 220.405 106.924 215.387 107.542C216.835 139.752 218.028 171.995 219.974 204.183C213.309 203.509 202.301 203.575 194.288 203.63C186.275 203.686 175.521 203.763 168.669 204.448C167.796 175.209 166.293 145.982 164.944 116.754C159.949 117.958 157.462 118.566 152.477 119.814C152.002 107.719 151.372 95.6237 150.764 83.5285C150.178 72.0186 149.615 60.4867 148.885 48.9769C173.819 39.4443 198.93 31.2041 224.671 24.1126L224.66 24.1016Z'
						fill='#FFF6F6'></path>
					<path
						d='M254.911 17.541C261.752 16.0498 274.186 13.1006 279.237 11.9297C276.032 48.105 273.512 84.3465 270.782 120.566C258.856 119.373 246.887 118.291 234.906 118.202C235.79 86.0255 236.089 53.6279 234.917 21.4623C239.172 20.8879 247.03 19.2531 254.911 17.541Z'
						fill='#FFF6F6'></path>
					<path
						d='M323.964 144.977C324.13 153.427 325.224 157.614 327.877 157.536C330.408 157.459 331.358 154.256 331.237 147.098C331.038 136.229 328.971 131.38 318.029 128.629C289.636 121.471 286.066 94.9944 285.16 69.4232C284.021 37.0808 293.051 5.57792 329.291 1.25897C365.344 -3.03788 375.17 20.9317 375.269 52.8101C375.28 57.107 375.203 62.2433 375.114 67.6448C368.759 66.2088 357.74 65.8443 349.34 66.3082C344.942 66.5512 341.195 66.7942 338.741 67.225C338.841 65.3583 338.808 63.4915 338.785 61.8899C338.653 53.6386 337.548 49.4522 334.563 49.6842C332.099 49.883 330.861 53.1747 330.96 59.272C331.148 69.8871 333.093 75.1339 345.881 78.8011C375.081 87.1629 377.104 117.572 377.17 143.906C377.247 176.005 371.047 206.768 333.292 207C299.152 207.21 288.895 186.885 288.321 155.371C288.221 150.025 288.144 144.325 288.221 138.14C295.604 138.714 305.916 139.443 315.697 139.001C318.869 138.858 321.92 138.725 323.821 138.383C323.876 141.023 323.898 142.337 323.953 144.977H323.964Z'
						fill='#FFF6F6'></path>
					<path
						d='M471.978 82.58C472.243 66.6297 470.242 60.6207 469.226 61.0957C463.865 63.5258 465.07 88.2023 464.904 98.9831C464.75 108.98 462.782 133.435 468.043 136.175C469.193 136.771 471.359 128.045 471.547 116.347C471.613 112.625 471.547 108.096 471.502 103.567C478.675 104.473 486.611 104.683 494.16 105.202C501.708 105.721 509.246 106.572 516.662 106.693C516.717 114.193 516.717 120.953 516.496 127.084C515.17 164.574 510.882 206.846 464.794 206.99C411.577 207.156 416.926 130.475 417.103 95.1281C417.302 58.2901 416.506 -4.72675 469.104 0.27704C510.915 4.25356 519.116 34.1217 517.966 71.9317C517.745 79.1226 517.292 87.3739 516.662 96.3542C509.257 95.1281 501.697 94.4764 494.259 93.902C486.821 93.3276 478.863 92.7974 471.657 92.9189C471.856 88.9424 471.911 85.485 471.956 82.5579L471.978 82.58Z'
						fill='#FFF6F6'></path>
					<path
						d='M629.218 37.9981C627.604 65.657 626.212 93.338 624.897 120.986C623.581 148.678 622.355 176.392 621.338 204.117C605.986 204.029 590.635 203.952 575.283 203.874C576.3 185.174 577.162 166.462 578.024 147.75C576.709 147.64 576.057 147.584 574.741 147.463C573.426 147.352 572.774 147.297 571.459 147.187C570.729 166.064 570.077 184.953 569.646 203.841C554.295 203.775 538.932 203.72 523.58 203.664C524.796 171.731 525.813 139.786 526.741 107.863C527.67 75.9187 528.51 43.9519 529.14 11.9961C545.099 15.0558 560.893 18.5021 576.676 22.3682C575.637 41.2898 574.83 60.2225 574.089 79.1662C575.239 79.365 576.256 79.5528 577.394 79.7626C578.543 79.9725 579.56 80.1603 580.699 80.3702C581.329 61.5369 581.97 42.7037 582.434 23.8704C598.172 28.1894 613.712 32.8839 629.207 37.9981H629.218Z'
						fill='#FFF6F6'></path>
					<path
						d='M681.506 204.514C681.937 198.605 682.633 190.232 683.142 180.335C681.65 180.213 680.898 180.158 679.406 180.036C677.66 179.893 676.787 179.827 675.04 179.694C674.51 189.834 674.311 198.428 674.245 204.47C658.937 204.36 643.641 204.26 628.333 204.161C636.203 151.339 643.707 98.1091 648.526 44.9121C674.621 54.9639 699.897 66.2086 724.842 78.8451C726.202 120.853 727.848 163.092 732.015 204.934C715.171 204.79 698.339 204.647 681.495 204.525L681.506 204.514ZM681.407 144.237C682.744 144.491 683.418 144.612 684.755 144.866C685.065 132.572 685.33 120.09 684.932 107.94C684.722 101.5 684.623 92.2438 684.534 84.357C684.236 84.2465 684.092 84.1913 683.794 84.0808C682.899 91.6141 681.915 100.561 681.097 106.791C679.517 118.953 678.489 131.236 677.428 143.486C679.019 143.773 679.815 143.927 681.396 144.226L681.407 144.237Z'
						fill='#FFF6F6'></path>
					<path
						d='M808 129.702C807.779 133.8 807.768 140.505 807.768 146.492C807.768 152.478 807.768 159.493 808 164.342C803.325 162.519 800.993 161.613 796.296 159.824C796.163 175.1 795.887 190.388 796.13 205.653C789.51 205.256 778.524 205.112 770.533 205.013C762.542 204.924 751.788 204.792 744.903 205.178C746.384 184.71 747.246 164.187 748.251 143.697C743.411 142.316 740.979 141.642 736.105 140.339C736.58 132.938 737.1 122.025 737.542 112.691C737.984 103.357 738.481 92.919 738.68 86.2031C762.575 99.5907 785.531 114.006 807.989 129.691L808 129.702Z'
						fill='#FFF6F6'></path>
				</g>
				<defs>
					<clipPath id='clip0_587_16655'>
						<rect width='808' height='207' fill='white'></rect>
					</clipPath>
				</defs>
			</motion.svg>
		</header>
	)
}

export default Hero
