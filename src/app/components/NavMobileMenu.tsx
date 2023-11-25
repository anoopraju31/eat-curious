'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slideDownView, slideDownViewTransition } from '@/utils/animations'

interface NavMobileMenuProps {
	closeMenu: (status: boolean) => void
}

const NavMobileMenu = (props: NavMobileMenuProps) => {
	const { closeMenu } = props
	const router = useRouter()

	const handleClose = (link: string) => {
		closeMenu(false)
		router.push(link)
	}
	const closeMenuOnClickingProductLink = () => handleClose('/products')
	const closeMenuOnClickingContactLink = () => handleClose('/contact')

	return (
		<ul className='flex md:hidden w-full h-full z-30 mx-auto py-[80px] md:py-[100px] xl:py-[120px] flex-col justify-center absolute top-0 left-0 right-0 bottom-0 overflow-auto text-center '>
			<motion.li
				variants={slideDownView}
				initial='initial'
				whileInView='view'
				transition={slideDownViewTransition(0.8)}
				className='w-full text-[13vw] leading-[0.9em] font-heading-narrow font-[900] uppercase text-[var(--black)]'>
				<Link onClick={closeMenuOnClickingProductLink} href='/products'>
					Products
				</Link>
			</motion.li>

			<motion.li
				variants={slideDownView}
				initial='initial'
				whileInView='view'
				transition={slideDownViewTransition(0.9)}
				className='w-full text-[13vw] relative leading-[0.9em] font-heading-narrow font-[900] uppercase text-[var(--black)]'>
				<Link onClick={closeMenuOnClickingContactLink} href='/contact'>
					Contact
				</Link>
			</motion.li>
		</ul>
	)
}

export default NavMobileMenu
