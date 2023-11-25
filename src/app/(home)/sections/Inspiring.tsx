'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { pop } from '@/utils/animations'

const Inspiring = () => {
	return (
		<section
			id='inspiring'
			className='w-full lg:min-h-screen px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] bg-[var(--white)] text-[var(--black)] z-40 sticky bottom-0 lg:flex lg:flow-row lg:flex-nowrap lg:items-center lg:justify-between'>
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='w-[70%] mx-auto -mb-4 z-10 relative text-center lg:hidden'>
				<h3 className='font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase mb-[0.2em] text-5xl md:text-[88px] minw-maxh-md:text-[76px]'>
					Inspiring good through tasty goodness
				</h3>
			</motion.div>

			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='w-[70%] lg:w-[40%] mx-auto mb-5 relative text-center lg:order-0 lg:text-right lg:ml-0 after:content-[""] after:hidden lg:after:block after:w-[100px] after:h-[135px] after:absolute after:top-[6%] after:left-[209%] after:right-[135%]  after:bg-squiggle5 after:bg-contain after:bg-no-repeat after:bg-top after:-translate-y-1/2 after:rotate-[15deg]'>
				<Image
					className='max-w-full h-auto lg:w-full lg:mb-auto'
					src='/images/home-5.svg'
					alt='home'
					width={1024}
					height={1024}
				/>
			</motion.div>

			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='w-[70%] lg:w-1/2 mx-auto lg:mr-0 lg:ml-auto text-center lg:text-left '>
				<h3 className='hidden lg:block mb-11 font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase minw-lg-maxh-md:text-[56px] text-[88px] 1600:text-[6vw]'>
					Inspiring good through tasty goodness
				</h3>
				<p className='lg:max-w-[511px] mb-5 font-text-font text-base lg:text-xl font-light'>
					It’s what inspires us to whip up, throw together, tear, shake, and
					break the rules – on a mission to redefine food for a new generation.
				</p>
			</motion.div>
		</section>
	)
}

export default Inspiring
