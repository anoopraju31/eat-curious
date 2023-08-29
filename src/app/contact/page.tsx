import { Enquiry, Hero } from './sections'

export default function ContactPage() {
	return (
		<div className='h-[300vh] '>
			<Hero />

			<main className='w-full mx-auto'>
				<Enquiry />
			</main>
		</div>
	)
}
