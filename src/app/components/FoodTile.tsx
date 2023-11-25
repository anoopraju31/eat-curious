'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { foodPop, foodTileTransition, marquee } from '@/utils/animations'

type Props = {
	id: number
	name: string
	img: string
	link: string
	bg: string
}

interface FoodTileTitleProps {
	link: string
	name: string
}

interface FoodTileImageProps {
	img: string
	link: string
}

const FoodTileTitle = (props: FoodTileTitleProps) => {
	const { link, name } = props
	return (
		<Link href={link} className='w-full min-w-full'>
			<h4 className='w-full flex-shrink-0 text-center mb-2 pt-[10px] px-[15px] pb-[20px] whitespace-break-spaces text-[20vw] md:text-[10vw] lg:text-[6.4vw] xl:text-[7vw] font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase'>
				{name}
			</h4>
		</Link>
	)
}

const FoodTileImage = (props: FoodTileImageProps) => {
	const { link, img } = props
	return (
		<div className='w-full h-auto inline-block mt-auto px-[20px] xl:px-10 relative align-bottom'>
			<div className='h-0 pb-[60%] overflow-hidden relative'>
				<Link href={link}>
					<Image
						className='block w-full min-w-full max-w-full h-auto min-h-full object-cover absolute top-0 left-1/2 -translate-x-1/2 translate-y-0'
						src={img}
						alt=''
						width={509}
						height={313}
					/>
				</Link>
			</div>
		</div>
	)
}

const FoodTile = ({ id, name, img, link, bg }: Props) => {
	const controls = useAnimation()

	const handleMouseEnterControls = () => controls.start('animate')
	const handleMouseLeaveControls = () => controls.start('initial')

	const transition = foodTileTransition(id)

	return (
		<motion.article
			variants={foodPop}
			initial='initial'
			whileInView='animate'
			transition={transition}
			viewport={{ once: true }}
			onMouseEnter={handleMouseEnterControls}
			onMouseLeave={handleMouseLeaveControls}
			style={{ background: bg }}
			className=' w-full flex flex-col justify-between flex-nowrap text-[var(--white)] relative aspect-square rounded-lg overflow-hidden'>
			<motion.div
				variants={marquee}
				animate={controls}
				className='w-full max-h-[54%] -mt-2 flex whitespace-nowrap'>
				<FoodTileTitle link={link} name={name} />
				<FoodTileTitle link={link} name={name} />
			</motion.div>

			<motion.div
				variants={marquee}
				animate={controls}
				className='mt-auto whitespace-nowrap'>
				<FoodTileImage img={img} link={link} />
				<FoodTileImage img={img} link={link} />
			</motion.div>
		</motion.article>
	)
}

export default FoodTile
