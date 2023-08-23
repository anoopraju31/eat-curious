import { Curious, Hero } from './(home)/sections'
import { BrandsCarousel, SpinnerSticker, Ticker } from './components'

export default function Home() {
	return (
		<main className='h-[2000vh] bg-[var(--black)] '>
			<Hero />
			<Ticker />
			<SpinnerSticker />
			<BrandsCarousel />
			<Curious />
		</main>
	)
}
