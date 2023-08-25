'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const marquee = {
	initial: {
		x: 0,
	},
	animate: {
		x: ['0%', '-100%'],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: 'loop',

				duration: 1,
				ease: 'linear',
			},
		},
	},
}

type Props = {
	name: string
	img: string
	link: string
	bg: string
}

const FoodTile = ({ name, img, link, bg }: Props) => {
	const controls = useAnimation()
	const handleMouseEnterControls = () => {
		controls.start('animate')
	}

	const handleMouseLeaveControls = () => {
		controls.start('initial')
	}

	return (
		<article
			onMouseEnter={handleMouseEnterControls}
			onMouseLeave={handleMouseLeaveControls}
			style={{ background: bg }}
			className=' w-full flex flex-col justify-between flex-nowrap text-[var(--white)] relative aspect-square rounded-lg overflow-hidden'>
			<motion.div
				variants={marquee}
				animate={controls}
				className='w-full max-h-[54%] -mt-2 flex whitespace-nowrap'>
				<Link href='/products/pieces' className='w-full min-w-full'>
					<h4 className='w-full flex-shrink-0 text-center mb-2 pt-[10px] px-[15px] pb-[20px] whitespace-break-spaces text-[20vw] md:text-[10vw] lg:text-[6.4vw] xl:text-[7vw] font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase'>
						{name}
					</h4>
				</Link>

				<Link href='/products/pieces' className='w-full min-w-full'>
					<h4 className='w-full flex-shrink-0 text-center mb-2 pt-[10px] px-[15px] pb-[20px] whitespace-break-spaces text-[20vw] md:text-[10vw] lg:text-[6.4vw] xl:text-[7vw] font-heading-narrow font-extrabold leading-[0.85em] tracking-[0.01em] uppercase'>
						{name}
					</h4>
				</Link>
			</motion.div>

			<motion.div
				variants={marquee}
				initial='initial'
				animate={controls}
				className='mt-auto whitespace-nowrap'>
				<div className='w-full h-auto inline-block mt-auto px-[20px] xl:px-10 relative align-bottom'>
					<div className='h-0 pb-[60%] overflow-hidden relative'>
						<Link href='/products/pieces'>
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
				<div className='w-full h-auto inline-block mt-auto px-[20px] xl:px-10 relative align-bottom'>
					<div className='h-0 pb-[60%] overflow-hidden relative'>
						<Link href='/products/pieces'>
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
			</motion.div>
		</article>
	)
}

export default FoodTile
