'use client'
import { Accordion } from '@/app/components'
import { context } from '@/app/components/Context'
import { Aaccordion } from '@/utils/foods'
import { useContext } from 'react'

interface Props {
	accordions: Aaccordion[]
}

const AccordionsSection = ({ accordions }: Props) => {
	const values = useContext(context)
	return (
		<section className='relative w-full mb-[30px] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] yl:py-[var(--padding-y-lg)] '>
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
		</section>
	)
}

export default AccordionsSection
