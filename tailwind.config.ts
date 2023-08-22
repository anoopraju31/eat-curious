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
			},
			transitionProperty: {},
			screens: {
				tall: { raw: '(min-height: 800px)' },
				'1600': { raw: '(min-width: 1600px)' },
			},
		},
	},
	plugins: [],
}
export default config
