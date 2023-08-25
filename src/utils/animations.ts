export const marquee = {
	initial: {
		x: 0,
	},
	animate: {
		x: ['0%', '-100%'],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: 'loop',

				duration: 1,
				ease: 'linear',
			},
		},
	},
}
