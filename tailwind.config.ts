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
				headingFont: 'var(--headingFont)',
				'heading-narrow': 'var(--heading-narrow)',
			},
			letterSpacing: {
				hero: '-0.01em',
			},
			backgroundSize: {
				'curve-size': '101% auto',
				'curve-size-xl': '106% auto',
			},
			backgroundImage: {
				squiggle1: 'url("/images/squiggle1.svg")',
				squiggle2: 'url("/images/squiggle2.svg")',
				squiggle3: 'url("/images/squiggle3.svg")',
				squiggle4: 'url("/images/squiggle4.svg")',
				squiggle5: 'url("/images/squiggle5.svg")',
				squiggle6: 'url("/images/squiggle6.svg")',
				squiggle7: 'url("/images/squiggle7.svg")',
				flower: 'url("/images/flower.svg")',
				sticker: 'url("/images/sticker.svg")',
				curve: 'url("/images/curve.svg")',
				'curve-md': 'url("/images/curve-md.svg")',
				'curve-xl': 'url("/images/curve-xl.svg")',
				'curve-white': 'url("/images/curve-white.svg")',
				'curve-white-md': 'url("/images/curve-white-md.svg")',
				'curve-white-xl': 'url("/images/curve-white-xl.svg")',
				weight: 'url("/images/weight.svg")',
				case: 'url("/images/case.svg")',
				plus: 'url("/images/plus.svg")',
				pieces: 'url("/images/products/pieces-7-e1689971037607-473x214.png")',
				mince: 'url("/images/products/mince-9-e1689971464732-471x473.png")',
				negg: 'url("/images/products/negg-e1690228015512-473x433.png")',
				fillet: 'url("/images/products/fillets-3-473x469.png")',
			},
			transitionProperty: {},
			screens: {
				tall: { raw: '(min-height: 800px)' },
				'600': { raw: '(min-width: 600px)' },
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
			boxShadow: {
				inset: 'inset 0 0 0 2px rgba(255,246,246,0.1)',
			},
			backgroundPosition: {
				select: 'calc(100% - 1em) 50%',
			},
		},
	},
	plugins: [],
}
export default config
