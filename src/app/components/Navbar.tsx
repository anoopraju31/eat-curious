import Link from 'next/link'
import React from 'react'
import { Logo } from '.'

const Navbar = () => {
	return (
		<nav className='block w-full h-16 sm:h-auto z-50 absolute md:bottom-auto text-[var(--white)] font-heading-narrow'>
			<div className='w-full px-[25px] md:px-[60px] xl:px-[107px] md:flex md:items-center md:h-[100px] xl:h-[120px]'>
				{/* Navigation desktop - left */}
				<ul className='w-full mx-auto pr-[50px] text-left hidden md:flex flex-row flex-nowrap items-baseline'>
					<li className='mr-auto font-semibold align-top text-base md:text-lg leading-[1.2em] md:inline-block'>
						<Link href='/#about'> About </Link>
					</li>

					<li className='mx-auto font-semibold align-top text-base md:text-lg leading-[1.2em] md:inline-block'>
						<Link href='/products'> Products </Link>
					</li>
				</ul>

				{/* Logo */}
				<div className='w-[113px] md:w-48 lg:w-[184px] block mt-4 mx-auto flex-shrink-0'>
					<Link href='/'>
						<Logo />
					</Link>
				</div>

				{/* Navigation desktop - right */}
				<ul className='w-full text-left md:text-right mx-auto pl-[50px] hidden md:flex md:flex-row md:flex-nowrap md:justify-end md:items-baseline'>
					<li className='text-base md:text-lg mx-auto font-semibold align-top md:inline-block'>
						<Link href='/#about'> Recipes </Link>
					</li>

					<li className='text-base md:text-lg font-extrabold align-top md:inline-block md:mr-0 px-[0.7em] py-[0.2em] bg-[var(--pink)] text-[var(--black)]'>
						<Link href='/products'> Contact Us </Link>
					</li>
				</ul>

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
