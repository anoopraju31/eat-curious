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
			<div className='sm:h-[var(--nav-height-sm)] lg:h-[var(--nav-height-lg)] px-[var(--nav-padding-x)] sm:px-[var(--nav-padding-x-sm)] lg:px-[var(--nav-padding-x-lg)] flex justify-between items-center font-text-font font-medium bg-black text-[var(--white)]'>
				{/* Navigation desktop - left */}
				<ul className='mr-10 lg:mr-14 flex-1 flex items-center uppercase '>
					<li className='inline-block mr-auto'>
						<Link href='/#about'> About </Link>
					</li>

					<li className='inline-block mx-auto'>
						<Link href='/products'> Products </Link>
					</li>
				</ul>
				{/* Logo */}
				<Link href='/' className='w-[181px] lg:w-[184px] mt-4'>
					<Logo />
				</Link>
				{/* Navigation desktop - right */}
				<ul className='ml-10 lg:ml-14 flex-1 flex items-center uppercase '>
					<li className='inline-block m-auto'>
						<Link href='/#about'> Recipes </Link>
					</li>

					<li className='inline-block ml-auto'>
						<Link href='/products'> Contact Us </Link>
					</li>
				</ul>
				{/* Menu */}
				{/* navigation mobile */}
			</div>
		</nav>
	)
}

export default Navbar
