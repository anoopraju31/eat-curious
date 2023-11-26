import { Metadata } from 'next'
import { Footer } from '../components'
import { Enquiry, FAQ, Hero } from './sections'

export const metadata: Metadata = {
	title: 'Contact - Eat Curious',
	description:
		'Curious to find out more? Contact us at sales@eat-curious.com and we will be in touch as soon as possible.',
}

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
