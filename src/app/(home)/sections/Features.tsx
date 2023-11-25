'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { pop } from '@/utils/animations'

type FeatureCardProps = {
	title: string
	description: string
	img: string
}

const FeatureCard = (props: FeatureCardProps) => {
	const { title, description, img } = props

	return (
		<motion.div
			variants={pop}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='600:w-1/2 lg:w-full px-4'>
			<div className='py-8 bg-[var(--white)] flex justify-center items-center'>
				<Image
					className='max-w-full h-auto'
					src={img}
					alt={title}
					width={193}
					height={193}
				/>
			</div>
			<div>
				<h5 className='my-2 text-xl md:text-[32px] font-heading-narrow font-medium leading-normal uppercase'>
					{title}
				</h5>
				<p className='my-4 font-text-font font-light text-base md:text-xl leading-[1.6em]'>
					{description}
				</p>
			</div>
		</motion.div>
	)
}

const Features = () => {
	return (
		<section
			id='features'
			className='relative lg:sticky minw-lg-maxh-md:static lg:top-0 w-full lg:min-h-screen px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] bg-[var(--white)] minw-maxh-lg:py-[10vh] text-[var(--black)] text-center flex flex-wrap justify-between'>
			{/* Heading */}
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='w-full'>
				<h4 className='w-full mb-4 lg:mb-12 font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase text-[40px] md:text-[76px] lg:text-[56px] '>
					{' '}
					Features & <br /> Benefits{' '}
				</h4>
			</motion.div>
			{/* Features */}
			<div className='w-full h-full mx-auto mb-[var(--padding-y)] md:mb-[var(--padding-y-sm)] lg:mb-[var(--padding-y-lg)] flex flex-col 600:flex-row 600:flex-wrap lg:flex-nowrap lg:gap-4 justify-between'>
				<FeatureCard
					title='Plant based'
					description='Plant-protein yumminess, suitable for everyone.'
					img='/images/home-9.png'
				/>
				<FeatureCard
					title='Real ingredients'
					description='If we don’t know exactly what an ingredient is, we don’t include it.'
					img='/images/home-11.png'
				/>
				<FeatureCard
					title='unreal texture'
					description='It’s not meat. No really, it’s not!'
					img='/images/home-12.png'
				/>
				<FeatureCard
					title='Bland is banned'
					description='Foodies unite, because here flavour rules.'
					img='/images/home-10.png'
				/>
			</div>
		</section>
	)
}

export default Features
