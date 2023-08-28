import {
	Curious,
	Features,
	Flavoursome,
	Foods,
	Growing,
	Hero,
	Inspiring,
	Intrigued,
	Positivity,
} from './(home)/sections'
import { BrandsCarousel, Footer, SpinnerSticker, Ticker } from './components'

export default function Home() {
	return (
		<div className='bg-[var(--white)] font-text-font relative'>
			<Hero />
			<main className='w-full mx-auto'>
				<Ticker />
				<SpinnerSticker />
				<BrandsCarousel />
				{/* Sections */}
				<Curious />
				<Inspiring />
				<Positivity />
				<Flavoursome />
				<Features />
				<Foods />
				<Growing />
			</main>
			<Intrigued />
			<Footer />
		</div>
	)
}
