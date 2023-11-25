'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

const SpinnerSticker = () => {
	const { scrollY } = useScroll()
	const rotate = useTransform(scrollY, [0, 1000], [0, 360], { clamp: false })

	return (
		<motion.div
			transition={{ type: 'spring', stiffness: 100 }}
			className='w-[86px] md:w-[129px] h-[86px] md:h-[129px]  fixed bottom-[15%] left-[-20px] md:left-[-30px] z-[60] bg-contain bg-sticker bg-no-repeat bg-center'
			style={{ rotate }}
		/>
	)
}

export default SpinnerSticker
