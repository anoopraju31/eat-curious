'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { foodPop, heroTransition } from '@/utils/animations'

const Hero = () => {
	return (
		<header className='w-full h-auto min-h-screen text-center relative bg-[var(--black)] z-50'>
			<div className='w-full max-w-[100vw] h-full min-h-screen sm:min-h-[var(--hero-height)] lg:min-h-screen py-[var(--padding-y)] sm:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] flex flex-col justify-around text-[var(--white)]'>
				<motion.h1
					variants={foodPop}
					initial='initial'
					whileInView='animate'
					transition={heroTransition(0.2)}
					viewport={{ once: true }}
					className='mt-auto -mb-5 md:-mb-[30px] lg:-mb-[100px] relative lg:-top-[5vh] text-[30vw] md:text-[20vw] lg:text-[clamp(1vw,19.5vw,35vh)] font-heading-narrow font-extrabold leading-[0.85em] uppercase tracking-[-0.01em] pointer-events-none select-none'>
					Meat
					<span className='hidden md:inline-block'> - </span>
					<br className='md:hidden' />
					Free
				</motion.h1>

				<motion.div
					variants={foodPop}
					initial='initial'
					whileInView='animate'
					transition={heroTransition(0.3)}
					viewport={{ once: true }}
					className='md:w-[clamp(30vw,70vw,60vh)] lg:w-[40vw] minw-maxh-lg:w-[50vh] md:mx-auto relative md:aspect-[592/379]'>
					<span className='absolute -top-1/4 left-1/2 bg-no-repeat bg-center bg-contain bg-squiggle1 w-[37px] h-[60px] pointer-events-none'></span>
					<span className='absolute top-[37%] -left-[6%] bg-no-repeat bg-center bg-contain bg-squiggle3 w-[52px] h-[76px] pointer-events-none'></span>
					<span className='absolute top-[40%] -right-[3%] bg-no-repeat bg-center bg-contain bg-squiggle2 w-[80px] h-[100px] pointer-events-none'></span>

					<Image
						src='/images/Afro-Fusion-Spice-Bowl.png'
						alt='hero image'
						width={473}
						height={473}
						className='w-full max-w-full h-auto'
					/>
				</motion.div>

				<motion.h1
					variants={foodPop}
					initial='initial'
					whileInView='animate'
					transition={heroTransition(0.4)}
					viewport={{ once: true }}
					className='-mt-20 md:-mt-[100px] xl:-mt-[150px] mb-auto relative lg:-top-[5%] text-[30vw] md:text-[20vw] lg:text-[clamp(1vw,19.5vw,35vh)] font-heading-narrow font-extrabold leading-[0.85em] uppercase tracking-[-0.01em] pointer-events-none select-none'>
					{' '}
					Your Mind{' '}
				</motion.h1>
			</div>
		</header>
	)
}

export default Hero
