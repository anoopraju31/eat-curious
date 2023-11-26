'use client'

import { Button, Footer } from '@/app/components'

const NotFound = () => {
	return (
		<main className='w-full mx-auto bg-[var(--black)] text-[var(--white)]'>
			<section className='sticky top-0 h-auto lg:min-h-screen px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] lg:flex lg:justify-between lg:items-center '>
				<div className='w-[70%] lg:w-1/2 mx-auto lg:ml-0 text-center lg:text-left py-10'>
					<h1 className='font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase mb-[0.2em] text-5xl md:text-[88px] minw-maxh-md:text-[76px]'>
						404
					</h1>
					<h2 className='hidden md:block font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase mb-[0.2em] md:text-[160px]'>
						Page Not Found.
					</h2>
					<p className='mb-5 text-xl lg:max-w-sm'>
						Whoops. We can{"'"}t seem to find that page. Click below to go back
						to the homepage.
					</p>
					<Button title='Go To homepage' link='/' background='#ff73b5' />
				</div>
			</section>
			<Footer />
		</main>
	)
}

export default NotFound
