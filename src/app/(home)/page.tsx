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
} from './sections'
import { BrandsCarousel, Footer, SpinnerSticker, Ticker } from '../components'
import { tickers } from '@/utils/ticker'

export default function Home() {
	return (
		<div className='bg-[var(--white)] font-text-font relative'>
			<Hero />
			<main className='w-full mx-auto'>
				<Ticker
					ticks={tickers}
					background='#ff73b5'
					position='fixed bottom-0'
				/>
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
