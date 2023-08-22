import { Hero } from './(home)/sections'
import { SpinnerSticker, Ticker } from './components'

export default function Home() {
	return (
		<main className='h-[2000vh] bg-[var(--black)] '>
			<Hero />
			<Ticker />
			<SpinnerSticker />
		</main>
	)
}
