import Link from 'next/link'
import React from 'react'
import { Logo } from '.'

type NavLinkProps = {
	title: string
	link: string
}
const NavLink = ({ title, link }: NavLinkProps) => (
	<li className=''>
		<Link href={link}> {title} </Link>
	</li>
)

const Navbar = () => {
	return (
		<nav>
			<div className='w-full sm:h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)] px-[var(--nav-padding-x)] sm:px-[var(--nav-padding-x-sm)] lg:px-[var(--nav-padding-x-lg)] pt-4 sm:pt-0 static sm:absolute top-4 sm:top-0 bg-[var(--black)] flex justify-center md:justify-between items-center font-text-font font-medium text-[var(--white)]'>
				{/* Navigation desktop - left */}
				<ul className='flex-1 mr-10 lg:mr-14 hidden md:flex items-center uppercase'>
					<li className='inline-block mr-auto'>
						<Link href='/#about'> About </Link>
					</li>

					<li className='inline-block mx-auto'>
						<Link href='/products'> Products </Link>
					</li>
				</ul>
				{/* Logo */}
				<Link href='/' className='w-[113px] md:w-[181px] lg:w-[184px] md:mt-4'>
					<Logo />
				</Link>
				{/* Navigation desktop - right */}
				<ul className='flex-1 ml-10 lg:ml-14 hidden md:flex items-center uppercase'>
					<li className='inline-block m-auto'>
						<Link href='/#about'> Recipes </Link>
					</li>

					<li className='inline-block ml-auto'>
						<Link href='/products'> Contact Us </Link>
					</li>
				</ul>
				{/* Menu */}
				<button className='w-8 h-8 px-[3px] bg-[var(--pink)] md:hidden flex flex-col justify-center  gap-[3px] rounded-md fixed right-6'>
					<div className='w-full h-[2px] bg-[var(--black)]'></div>
					<div className='w-full h-[2px] bg-[var(--black)]'></div>
					<div className='w-full h-[2px] bg-[var(--black)]'></div>
				</button>
				{/* navigation mobile */}
			</div>
		</nav>
	)
}

export default Navbar
