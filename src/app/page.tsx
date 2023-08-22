import { Hero } from './(home)/sections'
import { Ticker } from './components'

export default function Home() {
	return (
		<main className='h-[200vh] bg-[var(--black)] '>
			<Hero />
			<Ticker />
		</main>
	)
}
