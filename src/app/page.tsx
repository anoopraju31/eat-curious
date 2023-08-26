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
import { BrandsCarousel, SpinnerSticker, Ticker } from './components'

export default function Home() {
	return (
		<div className='h-[2000vh] bg-[var(--white)] '>
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
				<Intrigued />
			</main>
		</div>
	)
}
