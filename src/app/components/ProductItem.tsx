'use client'
import Link from 'next/link'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { transition } from '@/utils/animations'
import { Product } from '@/utils/products'

const ProductItem = ({ name, link, img, imgAnimation }: Product) => {
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
				href={link}
				className='relative inline-block font-heading-narrow font-[900] text-[clamp(40px,10vh,80px)] lg:text-[9vw] uppercase tracking-[0.01em] leading-[1em] md:leading-[0.7em] text-white'>
				{name}
			</Link>
			<span className='w-[120vw] h-[120vh] bg-green-300 fixed -top-[10vh] -bottom-[10vh] -left-[10vw] -right-[10vw] bg-no-repeat bg-center bg-cover pointer-events-none -z-10 lg:grid grid-cols-4 grid-rows-3 gap-5 '>
				{imgAnimation.map((variant, idx) => (
					<motion.span
						key={idx}
						variants={variant.animation}
						initial='initial'
						animate={controls}
						transition={transition}
						style={{
							backgroundImage: img,
						}}
						className={`relative ${variant.layout} bg-no-repeat bg-center bg-contain `}></motion.span>
				))}
			</span>
		</li>
	)
}

export default ProductItem
