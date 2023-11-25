'use client'

import { useNavbarMenuToggle, useNavbarVisibility } from '../hooks'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Button, FooterLink, Logo, NavMenuButton, NavMobileMenu } from '.'
import { view } from '@/utils/animations'

const Navbar = () => {
	const { navOpen, changeNavMenu, toggleNavMenu } = useNavbarMenuToggle()
	const { showNavbar, textWhite, values } = useNavbarVisibility()
	const isFillWhite = textWhite && (values?.isTextWhite as boolean) && !navOpen

	return (
		<nav
			className={`block w-full h-auto md:h-16 sm:h-auto z-[9999] ${
				navOpen
					? 'fixed top-0 left-0 bottom-0 z-[999999] bg-[var(--pink)]'
					: 'absolute bg-transparent'
			} md:fixed ${showNavbar ? 'top-0' : '-top-40'} md:bottom-auto ${
				textWhite && values?.isTextWhite
					? 'text-[var(--white)]'
					: 'text-[var(--black)]'
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

				<Logo fillWhite={isFillWhite} />

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
				{navOpen && <NavMobileMenu closeMenu={changeNavMenu} />}

				{/* Hamburger Menu Button */}
				<NavMenuButton isNavOpen={navOpen} toggleNavMenu={toggleNavMenu} />

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
