import { Accordion } from '@/app/components'
import { faqs } from '@/utils/faq'

const FAQ = () => {
	return (
		<section className='w-full mb-[30px] py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] relative bg-[var(--black)] after:content-[""] after:table after:clear-both'>
			{faqs.map((faq) => (
				<Accordion key={faq.id} {...faq} />
			))}
		</section>
	)
}

export default FAQ
