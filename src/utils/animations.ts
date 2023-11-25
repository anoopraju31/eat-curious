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

export const view = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			opacity: {
				duration: 1,
			},
		},
	},
}

export const pop = {
	initial: {
		scale: 0.9,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			scale: {
				duration: 0.5,
				type: 'spring',
				bounce: 0.75,
				ease: [0.5, 1.51, 0.55, 0.89],
			},
			opacity: {
				duration: 0.5,
			},
		},
	},
}

export const foodPop = {
	initial: {
		scale: 0.9,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
	},
}

export const chomp = {
	animate: {
		scaleY: ['100%', '0%', '100%', '0%', '100%'],
		transition: {
			scaleY: { duration: 0.6, delay: 1, ease: [0.5, 1.51, 0.55, 0.89] },
		},
	},
}

export const one = {
	initial: {
		x: '-120vw',
		y: '-120vh',
	},
	hover: {
		x: '0vw',
		y: '0vh',
		scaleX: -1,
		rotate: -20,
	},
}

export const two = {
	initial: {
		y: '-120vh',
	},
	hover: {
		y: '0vh',
		scaleY: -1,
		rotate: -97,
	},
}

export const three = {
	initial: {
		y: '-120vh',
	},
	hover: {
		y: '0vh',
		scaleY: -1,
		rotate: -28,
	},
}

export const four = {
	initial: {
		y: '-120vh',
		x: '120vw',
	},
	hover: {
		y: '0vh',
		x: '0vw',
		rotate: -11,
	},
}

export const five = {
	initial: {
		x: '-120vh',
	},
	hover: {
		x: '0vh',
		rotate: 15,
	},
}

export const six = {
	initial: {
		x: '120vh',
	},
	hover: {
		x: '0vh',
		rotate: 10,
	},
}

export const seven = {
	initial: {
		x: '-120vw',
		y: '120vh',
	},
	hover: {
		x: '0vw',
		y: '0vh',
		rotate: -13,
	},
}

export const eight = {
	initial: {
		y: '120vh',
	},
	hover: {
		y: '0vh',
		scaleX: -1,
		rotate: -41,
	},
}

export const nine = {
	initial: {
		y: '120vh',
	},
	hover: {
		y: '0vh',
		rotate: -50,
	},
}

export const ten = {
	initial: {
		y: '120vh',
		x: '120vw',
	},
	hover: {
		y: '0vh',
		x: '0vw',
		rotate: -99,
	},
}

export const transition = {
	duration: 0.4,
	ease: [0.5, 1.51, 0.55, 0.89],
}

export const foodTileTransition = (id: number) => ({
	scale: {
		duration: 0.5,
		type: 'spring',
		bounce: 0.75,
		ease: [0.5, 1.51, 0.55, 0.89],
	},
	opacity: {
		duration: 0.5,
	},
	delay: 0.2 * id,
})

export const heroTransition = (delay: number) => ({
	scale: {
		duration: 0.5,
		type: 'spring',
		bounce: 0.75,
		ease: [0.5, 1.51, 0.55, 0.89],
	},
	opacity: {
		duration: 0.5,
	},
	delay,
})

export const slideDownView = {
	initial: {
		opacity: 0,
		y: 10,
	},
	view: {
		opacity: 1,
		y: 0,
	},
}

export const slideDownViewTransition = (delay: number) => ({
	delay,
	type: 'spring',
	bounce: 0.5,
	ease: [0.5, 1.51, 0.55, 0.89],
})
