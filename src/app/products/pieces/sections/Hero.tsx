import { Button } from '@/app/components'
import { FoodTab } from '@/utils/foods'
import Image from 'next/image'
import React from 'react'

interface Props {
	title: string
	tabs: FoodTab[]
}

const Hero = ({ title, tabs }: Props) => {
	return (
		<header className='w-full min-h-screen h-auto relative overflow-hidden pt-[80px] md:pt-[100px] xl:pt-[160px] pb-[var(--padding-y)] md:pb-[var(--padding-y-sm)] lg:pb-[var(--padding-y-lg)] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] lg:flex justify-between items-center text-[var(--white)]'>
			{/* Text Container */}
			<div className='lg:w-1/2 lg:max-w-[470px] lg:relative text-center lg:text-left flex flex-col overflow-visible'>
				{/* Tab Buttons */}
				<div className='w-auto self-start my-[1.5em] mx-auto lg:mx-0 flex justify-stretch '>
					{/* <button className='w-auto mr-[1px] pt-[0.3em] px-[0.7em] pb-[0.6em] bg-[rgba(255,246,246,0.1)] font-heading-narrow font-semibold uppercase tracking-[0.02em] text-[15px] lg:text-[20px] rounded-tl rounded-bl'>
						{' '}
						Hot & Spicy{' '}
					</button>
					<button className='w-auto mr-[1px] pt-[0.3em] px-[0.7em] pb-[0.6em] bg-[rgba(255,246,246,0.1)] font-heading-narrow font-semibold uppercase tracking-[0.02em] text-[15px] lg:text-[20px]'>
						{' '}
						Smokey BBQ{' '}
					</button>
					<button className='w-auto pt-[0.3em] px-[0.7em] pb-[0.6em] bg-[rgba(255,246,246,0.1)] font-heading-narrow font-semibold uppercase tracking-[0.02em] text-[15px] lg:text-[20px] rounded-tr rounded-br'>
						{' '}
						Mooin{' '}
					</button> */}

					{tabs.map((tab, idx) => (
						<button
							key={idx}
							className={`w-auto pt-[0.3em] px-[0.7em] pb-[0.6em] bg-[rgba(255,246,246,0.1)] font-heading-narrow font-semibold uppercase tracking-[0.02em] text-[15px] lg:text-[20px] ${
								idx === 0 ? 'rounded-tl rounded-bl' : ''
							} ${idx < tabs.length - 1 ? 'mr-[1px]' : ''} ${
								tabs.length === idx + 1 ? 'rounded-tr rounded-br' : ''
							}`}>
							{tab.title}
						</button>
					))}
				</div>

				{/* Heading */}
				<div className=''>
					<h1 className=' mb-[0.5em] tracking-normal leading-[0.85em] font-headingFont uppercase font-bold text-[48px] md:text-[88px] 1600:text-[96px]  '>
						{title}
					</h1>
				</div>

				{/* Image */}
				<div className='block lg:hidden mb-10'>
					<Image
						className='w-full aspect-square object-cover'
						src='/images/products/pieces/pieces-8-1200x1200.jpg'
						alt=''
						width={1200}
						height={1200}
					/>
				</div>

				{/* Description */}
				<p className='mb-[25px]'>
					Tender delicious juicy protein pieces coated in a hot and spicy glaze.
					Perfect for those with dietary restrictions, our pieces contain no
					allergens such as dairy, gluten, soy, and nuts. Our versatile Eat
					Curious pieces are perfect for a variety of culinary applications
					including pizza toppings, pies, salad bowls, stir-fry, pasta dishes,
					curries and more!
				</p>

				{/* Enquiry Button  */}
				<div className=' mx-auto lg:mx-0'>
					<Button title='Enquire Now' link='/contact' />
				</div>
			</div>

			{/* Image Container */}
			<div className='hidden lg:block max-w-[50%] '>
				<Image
					className='w-full aspect-square object-cover'
					src='/images/products/pieces/pieces-8-1200x1200.jpg'
					alt=''
					width={1200}
					height={1200}
				/>
			</div>
		</header>
	)
}

export default Hero
