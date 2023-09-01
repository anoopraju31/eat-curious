'use client'
import { useEffect, useState } from 'react'

const isBrowser = () => typeof window !== 'undefined'

const getWidth = () => {
	if (isBrowser()) {
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		)
	}
}

function useCurrentWidth() {
	let [width, setWidth] = useState(getWidth())

	useEffect(() => {
		const resizeListener = () => {
			setWidth(getWidth())
		}

		window.addEventListener('resize', resizeListener)

		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	return width
}

export default useCurrentWidth
