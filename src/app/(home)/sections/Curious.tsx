'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { pop } from '@/utils/animations'

const Curious = () => {
	return (
		<section
			id='about'
			className='w-full lg:min-h-screen mt-[5vw] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] bg-[var(--pink)] text-[var(--black)] z-50 relative bottom-0 lg:flex lg:flow-row lg:flex-nowrap lg:items-center lg:justify-between before:content-[""] before:block before:w-full before:absolute before:-top-[5vw] before:left-0 before:right-0 before:h-[5vw] before:bg-repeat before:bg-top before:bg-curve md:before:bg-curve-md xl:before:bg-curve-xl before:bg-curve-size xl:before:bg-curve-size-xl before:bg-[var(--black)] before:z-50'>
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='w-[70%] mx-auto -mb-4 z-10 relative text-center lg:hidden'>
				<h3 className='font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase mb-[0.2em] text-5xl md:text-[88px] minw-maxh-md:text-[76px]'>
					Curious... by name, by nature
				</h3>
			</motion.div>

			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='w-[70%] lg:w-[40%] mx-auto mb-5 relative text-center lg:order-3 lg:text-right lg:mr-0 after:content-[""] after:hidden lg:after:block after:w-[69px] after:h-[114px] after:absolute after:-top-[20%] after:right-[110%]  after:bg-squiggle4 after:bg-contain after:bg-no-repeat after:bg-top after:-translate-y-1/2 after:rotate-[15deg]'>
				<Image
					className='max-w-full h-auto lg:w-full lg:mb-auto'
					src='/images/home-3.svg'
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
				className='w-[70%] lg:w-1/2 mx-auto lg:ml-0 lg:mr-auto text-center lg:text-left '>
				<h3 className='hidden lg:block mb-11 1600:-mr-[100px] font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase minw-lg-maxh-md:text-[56px] text-[88px] 1600:text-[6vw]'>
					Curious... by name, by nature
				</h3>
				<p className='lg:max-w-[392px] mb-5 font-text-font text-base lg:text-xl font-light'>
					It’s what inspires us to whip up, throw together, tear, shake, and
					break the rules – on a mission to redefine food for a new generation.
				</p>
			</motion.div>
		</section>
	)
}

export default Curious
