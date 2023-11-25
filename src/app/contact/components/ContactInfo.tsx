'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { pop } from '@/utils/animations'

const ContactInfo = () => {
	return (
		<motion.div
			variants={pop}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='relative text-center lg:text-left text-[var(--white)] lg:w-[393px] '>
			<h4 className='mb-[0.7em] -tracking-[0.01em] text-[40px] md:text-[76px] lg:text-[5vw] font-heading-narrow font-extrabold leading-[0.85em] uppercase '>
				General Enquiry
			</h4>
			<p className='mb-5 text-base md:text-lg'>
				Curious about great tasting plant-based food? Please contact the Curious
				team at:
			</p>
			<p className='mb-5 text-base md:text-lg'>
				<Link href='/' className='border-b border-b-[#80bdea]'>
					Sales@eat-curious.com
				</Link>
			</p>
			<p className='mb-5 text-base md:text-lg'>&nbsp;</p>
			<p className='mb-5 text-base md:text-lg'>Horton Lodge Farm</p>
			<p className='mb-5 text-base md:text-lg'>Brafield Road</p>
			<p className='mb-5 text-base md:text-lg'>Horton</p>
			<p className='mb-5 text-base md:text-lg'>NN7 2BA</p>

			<div className='hidden lg:block w-[52px] h-[76px] bg-squiggle3 z-20 bg-no-repeat bg-center bg-contain pointer-events-none absolute top-[130%] left-[30%] -scale-x-100  '></div>
		</motion.div>
	)
}

export default ContactInfo
