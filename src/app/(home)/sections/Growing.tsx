'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { pop } from '@/utils/animations'
import { Button } from '@/app/components'

const Growing = () => {
	return (
		<section className='w-full px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] py-[var(--padding-y-2)] md:py-[var(--padding-y-sm-2)] lg:py-[var(--padding-y-lg-2)] bg-[var(--black)] text-[var(--white)] lg:flex lg:justify-between lg:items-center relative'>
			{/* Text Container */}
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='text-center lg:text-left lg:w-2/5'>
				<h4 className='mt-0 mb-[0.7em] font-heading-narrow font-extrabold leading-[0.85em] -tracking-[0.01em] uppercase text-[40px] md:text-[76px] lg:text-[5vw]'>
					We{"'"}re growing more than plants...
				</h4>

				<p className='mb-5'>
					We’re here to grow a positive, curious and thoughtful attitude to
					plant-based food. Which is why we put curiosity at the heart of
					everything we do. So much so, we’ve built our own vertical farm – a
					near-off-grid, plant playground where we’re researching how to add
					even more flavour, nutrition and sustainability to the way we all eat.
				</p>

				<p className='mb-5'>&nbsp;</p>

				<p className='mb-5'>
					<Button title='Visit Syan Farms' link='https://syanfarms.com/' />
				</p>
			</motion.div>

			{/* Image Container */}
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='leading-[0] bg-black/20 mt-[80px] mb-[50px] lg:my-0  lg:w-1/2 lg:-order-1'>
				<Image
					src='/images/home-54-1024x576.jpg'
					alt='plants'
					width={1024}
					height={576}
					className='w-full max-w-full aspect-[1024/576] h-full object-cover rounded-lg'
				/>
			</motion.div>
		</section>
	)
}

export default Growing
