'use client'

import { useContext, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { context } from './Context'
import { transition } from '@/utils/animations'
import { Product, backgrounds, layouts } from '@/utils/products'

const ProductItem = (props: Product) => {
	const { id, name, link, img, thin, imgAnimation } = props
	const [background, setBackground] = useState<string>('transparent')
	const values = useContext(context)
	const controls = useAnimation()

	const handleMouseEnterControls = () => {
		controls.start('hover')
		setBackground(backgrounds[id - 1])
		values?.setProductId(id)
		values?.setIsTextWhite(false)
	}

	const handleMouseLeaveControls = () => {
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
				prefetch={true}
				onClick={handleMouseLeaveControls}
				className={`'relative inline-block font-heading-narrow font-[900] text-[clamp(40px,10vh,80px)] lg:text-[9vw] uppercase tracking-[0.01em] leading-[1em] md:leading-[0.7em] ${
					values?.productId === id || values?.productId === -1
						? 'text-[var(--white)]'
						: 'text-[var(--black)]'
				}`}>
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
						className='relative bg-no-repeat bg-center bg-contain'
					/>
				))}
			</span>
		</li>
	)
}

export const newProductItem = (
	ProductItem: (props: Product) => JSX.Element,
) => {
	const EnhancedProductItem = (product: Product) => (
		<div className='relative'>
			<ProductItem {...product} />
			<div className='absolute left-[93%] bottom-[65%] lg:bottom-[70%] rotate-[5deg] font-heading-narrow rounded pt-[0.1em] md:pt-[0.2em] px-[0.4em] md:px-[0.7em] pb-[0.45em] md:pb-[0.6em] leading-none text-[var(--black)] text-[14px] font-extrabold bg-[var(--light-green)] uppercase'>
				{' '}
				new
			</div>
		</div>
	)

	EnhancedProductItem.displayName = 'EnhancedProductItem'
	return EnhancedProductItem
}

export default ProductItem
