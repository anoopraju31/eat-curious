'use client'

import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { context } from '@/app/components/Context'
import { Button } from '@/app/components'
import { isValidProductsRoute } from '@/utils/routeCheck'

const Intrigued = () => {
	const pathName = usePathname()
	const values = useContext(context)

	return (
		<section
			id='intrigued'
			className='w-full mt-[4.9vw] sticky top-0 bg-[var(--white)] text-center text-[var(--black)] before:content-[""] before:block before:absolute before:bottom-[100%] before:left-0 before:right-0 before:h-[5vw] before:bg-repeat-x before:bg-top before:bg-curve-white md:before:bg-curve-white-md xl:before:bg-curve-white-xl before:bg-curve-size xl:before:bg-curve-size-xl before:bg-[var(--black)] before:z-50'>
			<div className='overflow-hidden relative  px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)]'>
				<div className='relative z-10 mx-auto max-w-[var(--content-width)] md:max-w-[var(--content-width-md)] lg:max-w-[var(--content-width-lg)] 1600:max-w-[var(--content-width-3xl)] '>
					<h3 className='mt-0 mb-[0.7em] font-heading-narrow font-extrabold leading-[0.85em] -tracking-[0.01em] uppercase text-[48px] md:text-[88px] xl:text-[96px]'>
						Intrigued?
					</h3>
					<p className='mx-auto mb-[3em] max-w-[440px] '>
						<Button
							title="Let's chat"
							link='/contact'
							background={
								isValidProductsRoute(pathName)
									? values?.backgroundColor
									: undefined
							}
						/>
					</p>
				</div>

				<motion.div
					initial={{
						filter: 'blur(10px)',
					}}
					whileInView={{
						filter: 'blur(0px)',
					}}
					viewport={{ once: true }}
					transition={{
						duration: 1,
					}}>
					<Image
						src='/images/home-6.svg'
						alt=''
						width={622}
						height={619}
						className='md:max-w-[50vh] 1600:max-w-[758px] mx-auto -mt-[100px] relative z-0'
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default Intrigued
