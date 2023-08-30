'use client'
import Link from 'next/link'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import {
	eight,
	five,
	four,
	nine,
	one,
	seven,
	six,
	ten,
	three,
	transition,
	two,
} from '@/utils/animations'

const ProductItem = () => {
	const controls = useAnimation()
	function handleMouseEnterControls() {
		controls.start('hover')
	}

	function handleMouseLeaveControls() {
		controls.start('initial')
	}
	return (
		<li
			onMouseEnter={handleMouseEnterControls}
			onMouseLeave={handleMouseLeaveControls}
			className='w-auto mt-auto px-[0.2em] inline-block overflow-hidden relative flex-grow-0 flex-shrink-0 basis-auto'>
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

				<motion.span
					variants={one}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-1 row-end-2 col-start-1 col-end-2 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={two}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-1 row-end-2 col-start-2 col-end-3 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={three}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-1 row-end-2 col-start-3 col-end-4 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={four}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-1 row-end-2 col-start-4 col-end-5 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={five}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-2 row-end-2 col-start-1 col-end-2 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={six}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-2 row-end-2 col-start-4 col-end-5 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={seven}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-3 row-end-4 col-start-1 col-end-2 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={eight}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-3 row-end-4 col-start-2 col-end-3 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={nine}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative left-[15%] row-start-3 row-end-4 col-start-3 col-end-4 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
				<motion.span
					variants={ten}
					initial='initial'
					animate={controls}
					transition={transition}
					className='relative row-start-3 row-end-4 col-start-4 col-end-4 bg-no-repeat bg-center bg-contain bg-pieces'></motion.span>
			</span>
		</li>
	)
}

export default ProductItem
