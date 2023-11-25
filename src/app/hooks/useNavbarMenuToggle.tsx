import { useLayoutEffect, useState } from 'react'

const useNavbarMenuToggle = () => {
	const [navOpen, setNavOpen] = useState<boolean>(false)

	useLayoutEffect(() => {
		const resizeListener = () => {
			if (typeof window !== 'undefined') {
				const currentWidth =
					window.innerWidth ||
					document.documentElement.clientWidth ||
					document.body.clientWidth

				if (currentWidth >= 768) setNavOpen(false)
			}
		}

		window.addEventListener('resize', resizeListener)

		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	const toggleNavMenu = () => setNavOpen((prev) => !prev)
	const changeNavMenu = (status: boolean) => setNavOpen(status)

	return {
		navOpen,
		toggleNavMenu,
		changeNavMenu,
	}
}

export default useNavbarMenuToggle
