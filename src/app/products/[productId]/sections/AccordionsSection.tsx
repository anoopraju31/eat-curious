'use client'

import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Accordion } from '@/app/components'
import { context } from '@/app/components/Context'
import { Aaccordion } from '@/utils/foods'
import { pop } from '@/utils/animations'

interface AccordionsSectionProps {
	accordions: Aaccordion[]
	weight?: string
	caseValue?: string
}

const AccordionsSection = (props: AccordionsSectionProps) => {
	const { accordions, weight, caseValue } = props
	const values = useContext(context)

	return (
		<section className='relative w-full py-[var(--padding-y)] md:py-[var(--padding-y-sm)] yl:py-[var(--padding-y-lg)] bg-[var(--black)]'>
			{accordions.map((accordion, idx) => (
				<Accordion
					key={idx}
					id={idx + 1}
					icon={accordion.icon}
					question={accordion.title}
					answer={accordion.description}
					iconBackground={values?.backgroundColor}
				/>
			))}

			<div className='w-full px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] text-[var(--white)] border-b border-b-[rgba(255,246,246,0.1)]'>
				{weight && (
					<motion.button
						variants={pop}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						transition={{
							stiffness: 10,
						}}
						className={`inline-block py-[20px] lg:py-[40px] text-left uppercase font-heading-narrow font-extrabold leading-normal text-[32px] md:text-[56px] cursor-pointer relative mr-[1em]`}>
						<span
							className='inline-block w-14 h-14 rounded-full bg-[var(--green)] mr-[0.4em] align-middle bg-weight'
							style={{
								backgroundColor: values?.backgroundColor,
							}}></span>
						Weight: {weight}
					</motion.button>
				)}

				{caseValue && (
					<motion.button
						variants={pop}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						transition={{
							stiffness: 10,
						}}
						className={`inline-block pb-[20px] lg:py-[40px] text-left uppercase font-heading-narrow font-extrabold leading-normal text-[32px] md:text-[56px] cursor-pointer relative mr-[1em]`}>
						<span
							className='inline-block w-14 h-14 rounded-full bg-[var(--green)] mr-[0.4em] align-middle bg-case'
							style={{
								backgroundColor: values?.backgroundColor,
							}}></span>
						Case: {caseValue}
					</motion.button>
				)}
			</div>
		</section>
	)
}

export default AccordionsSection
