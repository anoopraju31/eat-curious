import { Accordion } from '@/app/components'
import React from 'react'

const FAQ = () => {
	return (
		<section className='w-full mb-[30px] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] relative bg-[var(--black)]'>
			<Accordion />
			<Accordion />
			<Accordion />
		</section>
	)
}

export default FAQ
