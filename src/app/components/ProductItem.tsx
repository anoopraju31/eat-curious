'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { transition } from '@/utils/animations'
import { Product, backgrounds, layouts } from '@/utils/products'
import { context } from './Context'

const ProductItem = ({ id, name, link, img, thin, imgAnimation }: Product) => {
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
				className={`w-[120vw] xl:w-[130vw] h-[120vh] ${
					thin === true ? 'xl:h-[130vh]' : 'xl:h-[81.25vw]'
				} fixed -top-[10vh] xl:top-[50vh] -bottom-[10vh] xl:bottom-auto -left-[10vw] xl:left-[50vw] -right-[10vw] xl:right-auto xl:-translate-x-[50%] xl:-translate-y-[50%] bg-no-repeat bg-center bg-cover pointer-events-none -z-10 lg:grid grid-cols-4 grid-rows-3 gap-5`}>
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
