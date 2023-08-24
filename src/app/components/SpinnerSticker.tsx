'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

const SpinnerSticker = () => {
	const { scrollY } = useScroll()
	const rotate = useTransform(scrollY, [0, 1000], [0, 360], { clamp: false })

	console.log(rotate)

	return (
		<motion.div
			transition={{ type: 'spring', stiffness: 100 }}
			className='w-[86px] md:w-[129px] h-[86px] md:h-[129px]  fixed bottom-[15%] left-[-20px] md:left-[-30px] z-[9999] bg-contain bg-sticker bg-no-repeat bg-center'
			style={{ rotate }}></motion.div>
	)
}

export default SpinnerSticker
