type Animation = {
	initial: {
		x?: string
		y?: string
	}
	hover: {
		x?: string
		y?: string
		scaleX?: number
		scaleY?: number
		rotate?: number
	}
}

export interface Product {
	id: number
	name: string
	link: string
	img: string
	thin?: boolean
	imgAnimation: Animation[]
	new?: boolean
}

export const backgrounds: string[] = [
	'#1ABE71',
	'#FFB500',
	'#1ABE71',
	'#1ABE71',
	'#1ABE71',
	'#F95B77',
	'#F95B77',
	'#FFB500',
	'#1ABE71',
	'#FFB500',
	'#FFB500',
]

export const layouts: string[] = [
	'1/1/2/2',
	'1/2/2/3',
	'1/3/2/4',
	'1/4/2/5',
	'2/1/3/2',
	'2/4/3/5',
	'3/1/4/2',
	'3/2/4/3',
	'3/3/4/4',
	'3/4/4/5',
]

export const products: Product[] = [
	{
		id: 1,
		name: 'pieces',
		link: '/products/pieces',
		img: 'url("/images/products/pieces-7-e1689971037607-473x214.png")',
		thin: true,
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0', y: '0', scaleX: -1, rotate: -20 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -97 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -28 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -11 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 15 },
			},

			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 10 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: -13 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: -41 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: -50 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -99 },
			},
		],
	},
	{
		id: 2,
		name: 'mince',
		link: '/products/mince',
		new: true,
		img: 'url("/images/products/mince-9-e1689971464732-471x473.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 180 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 180 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 0 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: 180 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 0 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
		],
	},
	{
		id: 3,
		name: 'negg',
		link: '/products/negg',
		new: true,
		img: 'url("/images/products/negg-e1690228015512-473x433.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 180 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 180 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 0 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: 180 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 0 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
		],
	},
	{
		id: 4,
		name: 'fillet',
		link: '/products/fillet',
		img: 'url("/images/products/fillets-3-473x469.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 180 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 180 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 0 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: 180 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 0 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
		],
	},
	{
		id: 5,
		name: 'tenders',
		link: '/products/tenders',
		img: 'url("/images/products/tenders-3-e1669377993231-473x470.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 180 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 180 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 0 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: 180 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 0 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
		],
	},
	{
		id: 6,
		name: 'bangers',
		link: '/products/bangers',
		img: 'url("/images/products/bangers-7-e1668786408139-473x324.png")',
		thin: true,
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', scaleX: -1, rotate: -20 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -97 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -28 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -11 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 15 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 10 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: -13 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: -41 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: -50 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -99 },
			},
		],
	},
	{
		id: 7,
		name: 'pattie',
		link: '/products/pattie',
		img: 'url("/images/products/patty-3-e1669121069255-473x473.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 180 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 180 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 0 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: 180 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 0 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
		],
	},
	{
		id: 8,
		name: 'block',
		link: '/products/block',
		img: 'url("/images/products/block-473x238.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', scaleX: -1, rotate: -20 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -97 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -28 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -11 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 15 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 10 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: -13 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: -41 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: -50 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -99 },
			},
		],
	},
	{
		id: 9,
		name: 'roast',
		link: '/products/roast',
		img: 'url("/images/products/roast-2-473x322.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', scaleX: -1, rotate: -20 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -97 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleY: -1, rotate: -28 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -11 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 15 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 10 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: -13 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: -41 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: -50 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: -99 },
			},
		],
	},
	{
		id: 10,
		name: 'En Croute',
		link: '/products/en-croute',
		img: 'url("/images/products/en-croute-7-e1689969278751-422x473.png")',
		imgAnimation: [
			{
				initial: { x: '-120vw', y: '-120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 180 },
			},
			{
				initial: { y: '-120vh' },
				hover: { y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '-120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
			{
				initial: { x: '-120vh' },
				hover: { x: '0vh', rotate: 180 },
			},
			{
				initial: { x: '120vh' },
				hover: { x: '0vh', rotate: 0 },
			},
			{
				initial: { x: '-120vw', y: '120vh' },
				hover: { x: '0vw', y: '0vh', rotate: 0 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', rotate: 180 },
			},
			{
				initial: { y: '120vh' },
				hover: { y: '0vh', scaleX: -1, rotate: 0 },
			},
			{
				initial: { y: '120vh', x: '120vw' },
				hover: { y: '0vh', x: '0vw', rotate: 0 },
			},
		],
	},
	{
		id: 11,
		name: 'Burger',
		link: '/products/burger',
		img: 'url("/images/products/burger-4-473x461.png")',
		imgAnimation: [
			{
				initial: {
					x: '-120vw',
					y: '-120vh',
				},
				hover: {
					x: '0vw',
					y: '0vh',
					rotate: 0,
				},
			},
			{
				initial: {
					y: '-120vh',
				},
				hover: {
					y: '0vh',
					scaleX: -1,
					rotate: 180,
				},
			},
			{
				initial: {
					y: '-120vh',
				},
				hover: {
					y: '0vh',
					rotate: 0,
				},
			},
			{
				initial: {
					y: '-120vh',
					x: '120vw',
				},
				hover: {
					y: '0vh',
					x: '0vw',
					rotate: 0,
				},
			},
			{
				initial: {
					x: '-120vh',
				},
				hover: {
					x: '0vh',
					rotate: 180,
				},
			},
			{
				initial: {
					x: '120vh',
				},
				hover: {
					x: '0vh',
					rotate: 0,
				},
			},
			{
				initial: {
					x: '-120vw',
					y: '120vh',
				},
				hover: {
					x: '0vw',
					y: '0vh',
					rotate: 0,
				},
			},
			{
				initial: {
					y: '120vh',
				},
				hover: {
					y: '0vh',
					rotate: 180,
				},
			},
			{
				initial: {
					y: '120vh',
				},
				hover: {
					y: '0vh',
					scaleX: -1,
					rotate: 0,
				},
			},
			{
				initial: {
					y: '120vh',
					x: '120vw',
				},
				hover: {
					y: '0vh',
					x: '0vw',
					rotate: 0,
				},
			},
		],
	},
]
