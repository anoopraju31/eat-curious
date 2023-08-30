import Link from 'next/link'
import React from 'react'

const ProductItem = () => {
	return (
		<li className='w-auto mt-auto px-[0.2em] inline-block overflow-hidden relative flex-grow-0 flex-shrink-0 basis-auto'>
			<Link
				href='/'
				className='relative inline-block font-heading-narrow font-[900] text-[clamp(40px,10vh,80px)] lg:text-[9vw] uppercase tracking-[0.01em] leading-[1em] md:leading-[0.7em] text-white'>
				{' '}
				Pieces{' '}
			</Link>
			<span className='w-[120vw] h-[120vh] fixed -top-[10vh] -bottom-[10vh] -left-[10vw] -right-[10vw] bg-no-repeat bg-center bg-cover pointer-events-none -z-10 lg:grid grid-cols-4 grid-rows-3 gap-5 '>
				{/* <span className='bg-green-500 relative -top-[100%] -left-[100%] grid-rows-1/2 grid-cols-1/2 bg-no-repeat bg-center bg-contain bg-piece -scale-x-100 -rotate-[20deg]'></span>
				<span className='bg-green-500 relative -top-[100%] grid-rows-1/2 grid-cols-2/3 bg-no-repeat bg-center bg-contain bg-piece -scale-x-100 -rotate-[20deg] '></span>
				<span className='bg-green-500 relative -top-[100%] grid-rows-1/2 grid-cols-3/4 bg-no-repeat bg-center bg-contain bg-piece -rotate-[99.63deg] '></span>
				<span className='bg-green-500 relative -top-[100%] left-[100%] grid-rows-1/2 grid-cols-4/5 bg-no-repeat bg-center bg-contain bg-piece -rotate-[99.63deg]'></span>
				<span className='bg-green-500 relative -left-[100%] grid-rows-2/3 grid-cols-1/2 bg-no-repeat bg-center bg-contain bg-piece -scale-y-100 '></span>
				<span className='bg-green-500 relative left-[100%] grid-rows-2/3 grid-cols-4/5 bg-no-repeat bg-center bg-contain bg-piece -rotate-[99.63deg] '></span>
				<span className='bg-green-500 relative top-[100%] -left-[100%] grid-rows-3/4 grid-cols-1/2 bg-no-repeat bg-center bg-contain bg-piece -rotate-[99.63deg] '></span>
				<span className='bg-green-500 relative top-[100%] grid-rows-3/4 grid-cols-2/3 bg-no-repeat bg-center bg-contain bg-piece -scale-x-100 rotate-[10deg] '></span>
				<span className='bg-green-500 relative top-[100%] left-[15%] grid-rows-3/4 grid-cols-3/4 bg-no-repeat bg-center bg-contain bg-piece rotate-[50deg] '></span>
				<span className='bg-green-500 relative top-[100%] left-[100%] grid-rows-3/4 grid-cols-4/5 bg-no-repeat bg-center bg-contain bg-piece rotate-0'></span> */}

				<span className='relative top-0 left-0 row-start-1 row-end-2 col-start-1 col-end-2 bg-no-repeat bg-center bg-contain bg-pieces -scale-x-100 rotate-[20deg]'></span>
				<span className='relative row-start-1 row-end-2 col-start-2 col-end-3 bg-no-repeat bg-center bg-contain bg-pieces -scale-y-100 rotate-[97deg]'></span>
				<span className='relative row-start-1 row-end-2 col-start-3 col-end-4 bg-no-repeat bg-center bg-contain bg-pieces -scale-y-100 rotate-[28deg]'></span>
				<span className='relative row-start-1 row-end-2 col-start-4 col-end-5 bg-no-repeat bg-center bg-contain bg-pieces -rotate-[11deg]'></span>
				<span className='relative row-start-2 row-end-2 col-start-1 col-end-2 bg-no-repeat bg-center bg-contain bg-pieces rotate-[15deg]'></span>
				<span className='relative row-start-2 row-end-2 col-start-4 col-end-5 bg-no-repeat bg-center bg-contain bg-pieces rotate-[10deg]'></span>
				<span className='relative row-start-3 row-end-4 col-start-1 col-end-2 bg-no-repeat bg-center bg-contain bg-pieces -rotate-[13deg]'></span>
				<span className='relative row-start-3 row-end-4 col-start-2 col-end-3 bg-no-repeat bg-center bg-contain bg-pieces -scale-x-100 rotate-[41deg]'></span>
				<span className='relative left-[15%] row-start-3 row-end-4 col-start-3 col-end-4 bg-no-repeat bg-center bg-contain bg-pieces -rotate-[50deg]'></span>
				<span className='relative row-start-3 row-end-4 col-start-4 col-end-4 bg-no-repeat bg-center bg-contain bg-pieces -rotate-[99deg]'></span>
			</span>
		</li>
	)
}

export default ProductItem
