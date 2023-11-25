'use client'

import { motion } from 'framer-motion'
import { EnquiryInput, EnquirySelect, EnquiryTextarea } from '.'
import { enquirySelect } from '@/utils/enquiry'
import { pop } from '@/utils/animations'

const EnquiryForm = () => {
	return (
		<motion.div
			variants={pop}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='mt-20 mb-[50px] lg:my-0 lg:w-1/2 lg:order-2'>
			<form>
				{/* Name - input */}
				<EnquiryInput
					id='name'
					label='Name'
					name='name'
					placeholder='full name'
					type='text'
				/>

				{/* Email - input */}
				<EnquiryInput
					id='email'
					label='Email'
					name='email'
					placeholder='email address'
					type='email'
				/>

				{/* Contact Number - input */}
				<EnquiryInput
					id='contact-number'
					label='Contact Number'
					name='contact number'
					placeholder='contact no.'
					type='text'
				/>

				{/* Enquiry Select */}
				<EnquirySelect
					id='enquiry-select'
					label='Enquiry Type'
					name='enquiry select'
					options={enquirySelect}
				/>

				{/* Message - input */}
				<EnquiryTextarea
					id='message'
					cols={50}
					label='Message'
					name='message'
					placeholder='message'
					rows={10}
				/>

				{/* Submit Button */}
				<div className='-mt-[10.8px]'>
					<button className='w-auto min-w-[120px] px-[0.7em] pt-[0.2em] pb-[0.6em] rounded text-[20px] md:text-[24px] text-center bg-[var(--pink)] text-[var(--black)] font-heading-narrow tracking-[0.01em] uppercase font-extrabold '>
						Send Enquiry
					</button>
				</div>
			</form>
		</motion.div>
	)
}

export default EnquiryForm
