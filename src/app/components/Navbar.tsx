'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useLayoutEffect } from 'react'
import { Button, Logo } from '.'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { view } from '@/utils/animations'

const Navbar = () => {
	const [scrollHeight, setScrollHeight] = useState<number>(0)
	const [showNavbar, setShowNavbar] = useState<boolean>(true)
	const [textWhite, setTextWhite] = useState<boolean>(true)
	const { scrollY } = useScroll()
	const pathName = usePathname()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setShowNavbar(scrollHeight > latest ? true : false)
		setScrollHeight(latest)
	})

	useLayoutEffect(() => {
		function scrollHandler() {
			const aboutSection = document.querySelector(
				'#about',
			) as HTMLElement | null
			const flavoursomeSection = document.querySelector(
				'#flavoursome',
			) as HTMLElement | null
			const featuresSection = document.querySelector(
				'#features',
			) as HTMLElement | null
			const foodsSection = document.querySelector(
				'#foods',
			) as HTMLElement | null
			const intriguedSection = document.querySelector(
				'#intrigued',
			) as HTMLElement | null

			const aboutOffsetTop: number = aboutSection ? aboutSection.offsetTop : 0
			const flavoursomeOffsetTop: number = flavoursomeSection
				? flavoursomeSection.offsetTop
				: 0
			const featuresOffsetTop: number = featuresSection
				? featuresSection.offsetTop
				: 0
			const foodsOffsetTop: number = foodsSection ? foodsSection.offsetTop : 0
			const intriguedOffsetTop: number = intriguedSection
				? intriguedSection.offsetTop
				: 0

			if (pathName == '/') {
				if (scrollHeight < aboutOffsetTop) setTextWhite(true)
				else if (
					scrollHeight >= aboutOffsetTop &&
					scrollHeight <
						featuresOffsetTop - 2 * (flavoursomeSection?.clientHeight || 0)
				)
					setTextWhite(false)
				else if (
					scrollHeight >=
						featuresOffsetTop - (flavoursomeSection?.clientHeight || 0) &&
					scrollHeight < featuresOffsetTop
				)
					setTextWhite(true)
				else if (
					scrollHeight >= featuresOffsetTop &&
					scrollHeight < foodsOffsetTop
				)
					setTextWhite(false)
				else if (
					scrollHeight >= foodsOffsetTop &&
					scrollHeight < intriguedOffsetTop - window.innerHeight / 4
				)
					setTextWhite(true)
				else setTextWhite(false)
			} else if (pathName === '/contact' || pathName === '/privacy-policy') {
				setTextWhite(true)
			}
		}

		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [scrollHeight, pathName])

	return (
		<nav
			className={`block w-full h-16 sm:h-auto z-[9999] absolute md:fixed ${
				showNavbar ? 'top-0' : '-top-40'
			} md:bottom-auto ${
				textWhite ? 'text-[var(--white)]' : 'text-[var(--black)]'
			} font-heading-narrow transition-all duration-500`}>
			<div className='w-full px-[25px] md:px-[60px] xl:px-[107px] md:flex md:items-center md:h-[100px] xl:h-[120px]'>
				{/* Navigation desktop - left */}
				<motion.ul
					variants={view}
					initial='initial'
					whileInView='animate'
					className='w-full mx-auto pr-[50px] text-left hidden md:flex flex-row flex-nowrap items-baseline'>
					<li className='mr-auto font-semibold align-top text-base md:text-lg leading-[1.2em] md:inline-block'>
						<Link href='/#about'> About </Link>
					</li>

					<li className='mx-auto font-semibold align-top text-base md:text-lg leading-[1.2em] md:inline-block'>
						<Link href='/products'> Products </Link>
					</li>
				</motion.ul>

				{/* Logo */}
				<motion.div
					variants={view}
					initial='initial'
					whileInView='animate'
					className='w-[113px] md:w-48 lg:w-[184px] block mt-4 mx-auto flex-shrink-0'>
					<Link href='/'>
						<Logo fillWhite={textWhite} />
					</Link>
				</motion.div>

				{/* Navigation desktop - right */}
				<motion.ul
					variants={view}
					initial='initial'
					whileInView='animate'
					className='w-full text-left md:text-right mx-auto pl-[50px] hidden md:flex md:flex-row md:flex-nowrap md:justify-end md:items-baseline'>
					<li className='text-base md:text-lg mx-auto font-semibold align-top md:inline-block'>
						<Link href='/#about'> Recipes </Link>
					</li>

					{/* <li className='text-base md:text-lg font-extrabold align-top rounded-md md:inline-block md:mr-0 px-[0.7em] py-[0.2em] bg-[var(--pink)] text-[var(--black)]'>
						<Link href='/contact'> Contact Us </Link>
					</li> */}

					<li>
						<Button title='Contact Us' isSmall link='/contact' />
					</li>
				</motion.ul>

				{/* Menu */}
				<button className='bg-[var(--pink)] rounded px-[10px] md:hidden fixed top-4 right-4 z-50 cursor-pointer w-10 h-10'>
					<div className='w-full h-auto block align-middle'>
						<span className='block w-full h-[3px] mb-1 bg-[var(--black)]'></span>
						<span className='block w-full h-[3px] mb-1 bg-[var(--black)]'></span>
						<span className='block w-full h-[3px] mb-1 bg-[var(--black)]'></span>
					</div>
				</button>
			</div>
		</nav>
	)
}

export default Navbar
