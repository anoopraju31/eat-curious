import type { Metadata } from 'next'
import { Context, Navbar, SpinnerSticker } from './components'
import './globals.css'

export const metadata: Metadata = {
	title: 'Eat Curious | Meat free your mind',
	description:
		"Flavoursome food for everyone Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn't mean flavour free.",
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='stylesheet' href='https://use.typekit.net/sqg3ceb.css' />
			</head>
			<body className='bg-[var(--white)] leading-[1.6em] font-light font-text-font text-lg'>
				<Context>
					<Navbar />
					<SpinnerSticker />
					{children}
				</Context>
			</body>
		</html>
	)
}
