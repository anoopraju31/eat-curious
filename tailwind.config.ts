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
			backgroundImage: {
				squiggle1: 'url("/images/squiggle1.svg")',
				squiggle2: 'url("/images/squiggle2.svg")',
				squiggle3: 'url("/images/squiggle3.svg")',
				flower: 'url("/images/flower.svg")',
				sticker: 'url("/images/sticker.svg")',
			},
			transitionProperty: {},
			screens: {
				tall: { raw: '(min-height: 800px)' },
				'1600': { raw: '(min-width: 1600px)' },
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