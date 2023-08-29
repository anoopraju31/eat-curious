import { Footer } from '../components'
import { Enquiry, FAQ, Hero } from './sections'

export default function ContactPage() {
	return (
		<div className=''>
			<Hero />

			<main className='w-full mx-auto'>
				<Enquiry />
				<FAQ />
			</main>

			<Footer />
		</div>
	)
}
