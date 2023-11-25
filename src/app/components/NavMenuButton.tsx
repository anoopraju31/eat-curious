import { useContext } from 'react'
import { usePathname } from 'next/navigation'
import { context } from './Context'
import { isValidProductsRoute } from '@/utils/routeCheck'

interface NavMenuButtonProps {
	isNavOpen: boolean
	toggleNavMenu: () => void
}

const NavMenuButton = (props: NavMenuButtonProps) => {
	const { isNavOpen, toggleNavMenu } = props
	const pathName = usePathname()
	const values = useContext(context)
	const menuButtonBackground = isNavOpen
		? '#042f1a'
		: isValidProductsRoute(pathName) && values?.backgroundColor
		? values?.backgroundColor
		: '#ff73b5'

	return (
		<button
			type='button'
			onClick={toggleNavMenu}
			style={{ backgroundColor: menuButtonBackground }}
			className='rounded px-[10px] md:hidden fixed top-4 right-4 z-50 cursor-pointer w-10 h-10 transition-colors duration-500 ease-in-out'>
			<span className='sr-only'> Menu </span>
			<div className='w-full h-auto block align-middle'>
				<span
					className={`block w-full h-[3px] mb-1 ${
						isNavOpen ? 'bg-transparent' : 'bg-[var(--black)]'
					} transition-colors duration-1000 ease-in-out`}
				/>
				<span
					className={`block w-full h-[3px] mb-1 ${
						isNavOpen ? 'bg-[var(--white)]' : 'bg-[var(--black)]'
					} transition-colors duration-1000 ease-in-out`}
				/>
				<span
					className={`block w-full h-[3px] mb-1 ${
						isNavOpen ? 'bg-transparent' : 'bg-[var(--black)]'
					} transition-colors duration-1000 ease-in-out`}
				/>
			</div>
		</button>
	)
}

export default NavMenuButton
