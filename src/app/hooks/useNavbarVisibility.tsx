import { isValidProductsRoute } from '@/utils/routeCheck'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { context } from '../components/Context'

const useNavbarVisibility = () => {
	const [scrollHeight, setScrollHeight] = useState<number>(0)
	const [showNavbar, setShowNavbar] = useState<boolean>(true)
	const [textWhite, setTextWhite] = useState<boolean>(true)
	const { scrollY } = useScroll()
	const pathName = usePathname()
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
				if (!intriguedOffsetTop) setTextWhite(true)
				else if (scrollHeight < intriguedOffsetTop) {
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

	return {
		showNavbar,
		textWhite,
		values,
	}
}

export default useNavbarVisibility
