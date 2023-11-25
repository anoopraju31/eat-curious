'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useLayoutEffect, useContext, useEffect } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Button, FooterLink, Logo } from '.'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import {
	slideDownView,
	slideDownViewTransition,
	view,
} from '@/utils/animations'
import { context } from './Context'
import { useRouter } from 'next/navigation'
import { isValidProductsRoute } from '@/utils/routeCheck'
import useNavbarMenuToggle from '../hooks/useNavbarMenuToggle'

const Navbar = () => {
	const [scrollHeight, setScrollHeight] = useState<number>(0)
	const [showNavbar, setShowNavbar] = useState<boolean>(true)
	const [textWhite, setTextWhite] = useState<boolean>(true)
	const { scrollY } = useScroll()
	const pathName = usePathname()
	const router = useRouter()
	const { navOpen, changeNavMenu, toggleNavMenu } = useNavbarMenuToggle()

	const values = useContext(context)

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
			} else if (
				pathName === '/contact' ||
				pathName === '/privacy-policy' ||
				pathName === '/products'
			) {
				setTextWhite(true)
			} else if (isValidProductsRoute(pathName)) {
				if (scrollHeight < intriguedOffsetTop) {
					setTextWhite(true)
				} else setTextWhite(false)
			}
		}

		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [scrollHeight, pathName])

	useEffect(() => {
		if (pathName !== '/products') values?.setIsTextWhite(true)
	}, [pathName, values])

	return (
		<nav
			className={`block w-full h-auto md:h-16 sm:h-auto z-[9999] ${
				navOpen ? 'fixed top-0 left-0 bottom-0 z-[999999]' : 'absolute'
			} md:fixed ${showNavbar ? 'top-0' : '-top-40'} md:bottom-auto ${
				textWhite && values?.isTextWhite
					? 'text-[var(--white)]'
					: 'text-[var(--black)]'
			} ${
				navOpen ? 'bg-[var(--pink)]' : 'bg-transparent'
			} font-heading-narrow`}>
			<div className='w-full px-[25px] md:px-[60px] xl:px-[107px] md:flex md:items-center md:h-[100px] xl:h-[120px]'>
				{/* Navigation desktop - left */}
				<motion.ul
					variants={view}
					initial='initial'
					whileInView='animate'
					className='w-full mx-auto pr-[50px] text-left hidden md:flex flex-row flex-nowrap items-baseline'>
					<li className='mr-auto font-semibold align-top text-base md:text-lg leading-[1.2em] md:inline-block uppercase'>
						<Link href='/#about'>About</Link>
					</li>

					<li className='mx-auto font-semibold align-top text-base md:text-lg leading-[1.2em] md:inline-block uppercase'>
						<Link href='/products'> Products </Link>
					</li>
				</motion.ul>

				<Logo
					fillWhite={textWhite && (values?.isTextWhite as boolean) && !navOpen}
				/>

				{/* Navigation desktop - right */}
				<motion.ul
					variants={view}
					initial='initial'
					whileInView='animate'
					className='w-full text-left md:text-right mx-auto pl-[50px] hidden md:flex md:flex-row md:flex-nowrap md:justify-end md:items-baseline'>
					<li className='text-base md:text-lg mx-auto font-semibold align-top md:inline-block uppercase'>
						<Link href='/#about'> Recipes </Link>
					</li>

					<li>
						<Button
							title='Contact Us'
							isSmall
							link='/contact'
							background={values?.backgroundColor}
						/>
					</li>
				</motion.ul>

				{/* Mobile Navigation Menu */}
				{navOpen && (
					<ul className='flex md:hidden w-full h-full z-30 mx-auto py-[80px] md:py-[100px] xl:py-[120px] flex-col justify-center absolute top-0 left-0 right-0 bottom-0 overflow-auto text-center '>
						<motion.li
							variants={slideDownView}
							initial='initial'
							whileInView='view'
							transition={slideDownViewTransition(0.8)}
							className='w-full text-[13vw] leading-[0.9em] font-heading-narrow font-[900] uppercase text-[var(--black)]'>
							<Link
								onClick={() => {
									changeNavMenu(false)
									router.push('/products')
								}}
								href='/products'>
								Products
							</Link>
						</motion.li>

						<motion.li
							variants={slideDownView}
							initial='initial'
							whileInView='view'
							transition={slideDownViewTransition(0.9)}
							className='w-full text-[13vw] relative leading-[0.9em] font-heading-narrow font-[900] uppercase text-[var(--black)]'>
							<Link
								onClick={() => {
									changeNavMenu(false)
									router.push('/contact')
								}}
								href='/contact'>
								Contact
							</Link>
						</motion.li>
					</ul>
				)}

				{/* Menu */}
				<button
					type='button'
					onClick={toggleNavMenu}
					style={{
						backgroundColor: navOpen
							? '#042f1a'
							: isValidProductsRoute(pathName) && values?.backgroundColor
							? values?.backgroundColor
							: '#ff73b5',
					}}
					className={`rounded px-[10px] md:hidden fixed top-4 right-4 z-50 cursor-pointer w-10 h-10 ${
						navOpen
							? 'bg-[var(--black)]'
							: isValidProductsRoute(pathName) && values?.backgroundColor
							? `bg-[${values?.backgroundColor}]`
							: 'bg-[var(--pink)]'
					} transition-colors duration-500 ease-in-out`}>
					<div className='sr-only'> Menu </div>
					<div className='w-full h-auto block align-middle'>
						<span
							className={`block w-full h-[3px] mb-1 ${
								navOpen ? 'bg-transparent' : 'bg-[var(--black)]'
							} transition-colors duration-1000 ease-in-out`}></span>
						<span
							className={`block w-full h-[3px] mb-1 ${
								navOpen ? 'bg-[var(--white)]' : 'bg-[var(--black)]'
							} transition-colors duration-1000 ease-in-out`}></span>
						<span
							className={`block w-full h-[3px] mb-1 ${
								navOpen ? 'bg-transparent' : 'bg-[var(--black)]'
							} transition-colors duration-1000 ease-in-out`}></span>
					</div>
				</button>

				{/* Social Media Links */}
				{navOpen && (
					<ul className='w-full absolute bottom-5 left-0 px-[var(--padding-x)] md:hidden text-[var(--black)] flex justify-center gap-5'>
						<FooterLink
							link='https://www.instagram.com'
							title='Instagram'
							Icon={BsInstagram}
						/>
						<FooterLink
							link='https://wwww.facebook.com'
							title='Facebook'
							Icon={BsFacebook}
						/>
						<FooterLink
							Icon={BsLinkedin}
							link='https://www.linkedin.com'
							title='LinkedIn'
						/>
					</ul>
				)}
			</div>
		</nav>
	)
}

export default Navbar
