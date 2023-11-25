import './globals.css'
import type { Metadata } from 'next'
import { Context, Footer, Navbar, SpinnerSticker } from './components'

export const metadata: Metadata = {
	title: 'Eat Curious | Meat free your mind',
	description:
		"Flavoursome food for everyone​​ Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn't mean flavour free.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='stylesheet' href='https://use.typekit.net/sqg3ceb.css' />
				<title> Eat Curious | Meat free your mind </title>
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
