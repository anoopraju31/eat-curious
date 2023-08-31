'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { transition } from '@/utils/animations'
import { Product, backgrounds, layouts } from '@/utils/products'
import { context } from './Context'

const ProductItem = ({ id, name, link, img, imgAnimation }: Product) => {
	const [background, setBackground] = useState<string>('transparent')
	const values = useContext(context)
	const controls = useAnimation()
	function handleMouseEnterControls() {
		controls.start('hover')
		setBackground(backgrounds[id - 1])
		values?.setProductId(id)
		values?.setIsTextWhite(false)
	}

	function handleMouseLeaveControls() {
		controls.start('initial')
		setBackground('transparent')
		values?.setProductId(-1)
		values?.setIsTextWhite(true)
	}

	return (
		<li
			onMouseEnter={handleMouseEnterControls}
			onMouseLeave={handleMouseLeaveControls}
			className='w-auto mt-auto px-[0.2em] inline-block overflow-hidden relative flex-grow-0 flex-shrink-0 basis-auto'>
			<Link
				href={link}
				style={{
					color:
						values?.productId === id || values?.productId === -1
							? '#fff6f6'
							: '#042f1a',
				}}
				className='relative inline-block font-heading-narrow font-[900] text-[clamp(40px,10vh,80px)] lg:text-[9vw] uppercase tracking-[0.01em] leading-[1em] md:leading-[0.7em] text-[var(--white)]'>
				{name}
			</Link>

			<span
				style={{ background: background }}
				className='w-[120vw] h-[120vh]  fixed -top-[10vh] -bottom-[10vh] -left-[10vw] -right-[10vw] bg-no-repeat bg-center bg-cover pointer-events-none -z-10 lg:grid grid-cols-4 grid-rows-3 gap-5 '>
				{imgAnimation.map((variant, idx) => (
					<motion.span
						key={idx}
						variants={variant}
						initial='initial'
						animate={controls}
						transition={transition}
						style={{
							backgroundImage: img,
							gridArea: layouts[idx],
						}}
						className='relative bg-no-repeat bg-center bg-contain'></motion.span>
				))}
			</span>
		</li>
	)
}

export default ProductItem
