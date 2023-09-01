import { Accordion } from '@/app/components'
import { Aaccordion } from '@/utils/foods'
import React from 'react'

interface Props {
	accordions: Aaccordion[]
}

const AccordionsSection = ({ accordions }: Props) => {
	return (
		<section className='relative w-full mb-[30px] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] yl:py-[var(--padding-y-lg)] '>
			{accordions.map((accordion, idx) => (
				<Accordion
					key={idx}
					id={idx}
					icon={accordion.icon}
					question={accordion.title}
					answer={accordion.description}
				/>
			))}
		</section>
	)
}

export default AccordionsSection
