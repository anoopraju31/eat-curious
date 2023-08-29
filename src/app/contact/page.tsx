import { Footer } from '../components'
import { Enquiry, FAQ, Hero } from './sections'

export default function ContactPage() {
	return (
		<div className='bg-[var(--black)]'>
			<Hero />

			<main className='w-full mx-auto'>
				<Enquiry />
				<FAQ />
			</main>

			<Footer />
		</div>
	)
}
