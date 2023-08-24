import { Drooling } from '@/app/components'
import React from 'react'

const Foods = () => {
	return (
		<section className='w-full px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] pt-10 lg:pt-[60px] xl:pt-[100px] z-10 relative overflow-hidden before:content-[""] before:block before:absolute before:w-[150vw] before:left-1/2 before:top-0 before:h-0 before:pb-[138%] before:-translate-x-1/2 before:bg-[var(--black)] before:rounded-[150%] before:z-0 after:content-[""] after:block after:absolute after:top-[20%] lg:after:top-[40%] after:bottom-0 after:left-0 after:right-0 after:bg-[var(--black)] after:-z-10 '>
			<div className=''>
				<Drooling />
			</div>
		</section>
	)
}

export default Foods
