import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'text-font': 'var(--text-font)',
				'heading-narrow': 'var(--heading-narrow)',
			},
			letterSpacing: {
				hero: '-0.01em',
			},
			backgroundSize: {
				'curve-size': '101% auto',
			},
			backgroundImage: {
				squiggle1: 'url("/images/squiggle1.svg")',
				squiggle2: 'url("/images/squiggle2.svg")',
				squiggle3: 'url("/images/squiggle3.svg")',
				squiggle4: 'url("/images/squiggle4.svg")',
				flower: 'url("/images/flower.svg")',
				sticker: 'url("/images/sticker.svg")',
				curve: 'url("/images/curve.svg")',
				'curve-md': 'url("/images/curve-md.svg")',
				'curve-xl': 'url("/images/curve-xl.svg")',
			},
			transitionProperty: {},
			screens: {
				tall: { raw: '(min-height: 800px)' },
				'1600': { raw: '(min-width: 1600px)' },
				'minw-maxh-md': { raw: ' (min-width: 768px) and (max-height: 768px)' },
				'minw-lg-maxh-md': {
					raw: ' (min-width: 1024px) and (max-height: 768px)',
				},
				'minw-maxh-lg': {
					raw: '(min-width: 1024px) and (max-height: 1024px)',
				},
			},
			keyframes: {
				marquee: {
					'0%': {
						transform: 'translate3d(0%, 0, 0)',
					},
					'100%': {
						transform: 'translate3d(-100%, 0, 0)',
					},
				},
			},
			animation: {
				marquee: 'marquee 40s linear infinite',
			},
		},
	},
	plugins: [],
}
export default config
