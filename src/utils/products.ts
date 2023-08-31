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

type ImageLayoutAnimation = {
	layout: string
	animation: Animation
}

export interface Product {
	id?: number
	name: string
	link: string
	img: string
	imgAnimation: ImageLayoutAnimation[]
}

export const products = [
	{
		id: 1,
		name: 'pieces',
		link: '/products/pieces',
		img: 'url("/images/products/pieces-7-e1689971037607-473x214.png")',
		imgAnimation: [
			{
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -97,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -28,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						y: '-120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -11,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 15,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 10,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vw',
						y: '120vh',
					},
					hover: {
						x: '0vw',
						y: '0vh',
						rotate: -13,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: -41,
					},
				},
			},
			{
				layout: 'left-[15%] row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: -50,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
					initial: {
						y: '120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -99,
					},
				},
			},
		],
	},
	{
		id: 2,
		name: 'mince',
		link: '/products/mince',
		img: 'url("/images/products/mince-9-e1689971464732-471x473.png")',
		imgAnimation: [
			{
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
			},
		],
	},
	{
		id: 3,
		name: 'negg',
		link: '/products/negg',
		img: 'url("/images/products/negg-e1690228015512-473x433.png")',
		imgAnimation: [
			{
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
			},
		],
	},
	{
		id: 6,
		name: 'bangers',
		link: '/products/bangers',
		img: 'url("/images/products/bangers-7-e1668786408139-473x324.png")',
		imgAnimation: [
			{
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -97,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -28,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						y: '-120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -11,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 15,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 10,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vw',
						y: '120vh',
					},
					hover: {
						x: '0vw',
						y: '0vh',
						rotate: -13,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: -41,
					},
				},
			},
			{
				layout: 'left-[15%] row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: -50,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
					initial: {
						y: '120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -99,
					},
				},
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
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -97,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -28,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						y: '-120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -11,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 15,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 10,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vw',
						y: '120vh',
					},
					hover: {
						x: '0vw',
						y: '0vh',
						rotate: -13,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: -41,
					},
				},
			},
			{
				layout: 'left-[15%] row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: -50,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
					initial: {
						y: '120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -99,
					},
				},
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
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -97,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleY: -1,
						rotate: -28,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						y: '-120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -11,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 15,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 10,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vw',
						y: '120vh',
					},
					hover: {
						x: '0vw',
						y: '0vh',
						rotate: -13,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: -41,
					},
				},
			},
			{
				layout: 'left-[15%] row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: -50,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
					initial: {
						y: '120vh',
						x: '120vw',
					},
					hover: {
						y: '0vh',
						x: '0vw',
						rotate: -99,
					},
				},
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
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
			},
		],
	},
	{
		id: 10,
		name: 'Burger',
		link: '/products/burger',
		img: 'url("/images/products/burger-4-473x461.png")',
		imgAnimation: [
			{
				layout: 'row-start-1 row-end-2 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-1 row-end-2 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '-120vh',
					},
					hover: {
						y: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-1 row-end-2 col-start-4 col-end-5',
				animation: {
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
			},
			{
				layout: 'row-start-2 row-end-2 col-start-1 col-end-2',
				animation: {
					initial: {
						x: '-120vh',
					},
					hover: {
						x: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-2 row-end-2 col-start-4 col-end-5',
				animation: {
					initial: {
						x: '120vh',
					},
					hover: {
						x: '0vh',
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-1 col-end-2',
				animation: {
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
			},
			{
				layout: 'row-start-3 row-end-4 col-start-2 col-end-3',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						rotate: 180,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-3 col-end-4',
				animation: {
					initial: {
						y: '120vh',
					},
					hover: {
						y: '0vh',
						scaleX: -1,
						rotate: 0,
					},
				},
			},
			{
				layout: 'row-start-3 row-end-4 col-start-4 col-end-4',
				animation: {
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
			},
		],
	},
]
