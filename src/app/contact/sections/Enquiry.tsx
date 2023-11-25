import { ContactInfo, EnquiryForm } from '../components'

const Enquiry = () => {
	return (
		<section className='w-full py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] relative bg-[var(--black)] lg:flex lg:justify-between lg:flex-wrap lg:items-start '>
			{/* Contact Info */}
			<ContactInfo />

			{/* Contact Form */}
			<EnquiryForm />
		</section>
	)
}

export default Enquiry
