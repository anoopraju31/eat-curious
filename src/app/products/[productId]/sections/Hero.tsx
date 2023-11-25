'use client'

import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/app/components'
import { context } from '@/app/components/Context'
import { FoodTab } from '@/utils/foods'

interface HeroProps {
	title: string
	tabs: FoodTab[]
}

const Hero = (props: HeroProps) => {
	const { title, tabs } = props
	const [tabId, setTabId] = useState<number>(0)
	const values = useContext(context)

	useEffect(() => {
		values?.setBackgroundColor(tabs[tabId].color)
	}, [tabId, values, tabs])

	return (
		<header className='w-full min-h-screen h-auto relative overflow-hidden pt-[80px] md:pt-[100px] xl:pt-[160px] pb-[var(--padding-y)] md:pb-[var(--padding-y-sm)] lg:pb-[var(--padding-y-lg)] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] lg:flex justify-between items-center text-[var(--white)] bg-[var(--black)]'>
			{/* Text Container */}
			<div className='lg:w-1/2 lg:max-w-[470px] lg:relative text-center lg:text-left flex flex-col overflow-visible'>
				{/* Tab Buttons */}
				<div className='w-auto self-start my-[1.5em] mx-auto lg:mx-0 flex justify-stretch '>
					{tabs.map((tab, idx) => (
						<button
							key={idx}
							onClick={() => {
								setTabId(idx)
							}}
							style={{
								backgroundColor:
									tabId === idx ? tab.color : 'rgba(255,246,246,0.1)',
								color: tabId === idx ? '#042f1a' : '#fff6f6',
							}}
							className={`w-auto pt-[0.3em] px-[0.7em] pb-[0.6em] font-heading-narrow font-semibold uppercase tracking-[0.02em] text-[15px] lg:text-[20px] ${
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
						className='w-full h-full object-cover aspect-square rounded'
						src={tabs[tabId].img}
						alt={title}
						width={1200}
						height={1200}
					/>
				</div>

				{/* Description */}
				<p className='mb-[25px]'> {tabs[tabId].description} </p>

				{/* Enquiry Button  */}
				{tabs[tabId].enquire && (
					<div className=' mx-auto lg:mx-0'>
						<Button
							title='Enquire Now'
							link={tabs[tabId].enquire}
							background={tabs[tabId].color}
						/>
					</div>
				)}
			</div>

			{/* Image Container */}
			<div className='hidden lg:block max-w-[50%] '>
				<Image
					className='w-full h-full object-cover aspect-square rounded'
					src={tabs[tabId].img}
					alt={title}
					width={1200}
					height={1200}
				/>
			</div>
		</header>
	)
}

export default Hero
