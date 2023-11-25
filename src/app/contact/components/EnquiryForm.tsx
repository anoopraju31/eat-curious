import React from 'react'
import { EnquiryInput } from '.'

const EnquiryForm = () => {
	return (
		<form className=''>
			<div>
				<EnquiryInput
					id='name'
					label='Name'
					name='name'
					placeholder='full name'
					type='text'
				/>
				<EnquiryInput
					id='email'
					label='Email'
					name='email'
					placeholder='email address'
					type='email'
				/>
				<EnquiryInput
					id='contact-number'
					label='Contact Number'
					name='contact number'
					placeholder='contact no.'
					type='text'
				/>

				{/* Interest */}
				<div className='mb-4'>
					<label htmlFor='interest-in' className='sr-only'>
						Interest In
					</label>
					<select
						name=''
						id='interest-in'
						className='w-full h-auto px-[1.3em] pt-[0.7em] pb-[1em] font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)] placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset appearance-none bg-plus bg-no-repeat bg-select relative focus:border-none focus:outline-none'>
						<option
							value=''
							className='text-[rgba(255, 246,246, 0.5)] bg-[var(--black)] border-none outline-none px-[1.3em] pt-[0.7em] pb-[1em]  '>
							I{"'"}m interested in...
						</option>
						<option
							value=''
							className='text-[rgba(255, 246,246, 0.5)] bg-[var(--black)] border-none outline-none px-[1.3em] pt-[0.7em] pb-[1em]  '>
							Becoming a distribution partner
						</option>
						<option
							value=''
							className='text-[rgba(255, 246,246, 0.5)] bg-[var(--black)] border-none outline-none px-[1.3em] pt-[0.7em] pb-[1em]  '>
							Stocking an Eat Curious product
						</option>
						<option
							value=''
							className='text-[rgba(255, 246,246, 0.5)] bg-[var(--black)] border-none outline-none px-[1.3em] pt-[0.7em] pb-[1em]  '>
							Curious for more...
						</option>
					</select>
				</div>

				{/* Message */}
				<div className='mb-4'>
					<label htmlFor='message' className='sr-only'>
						Message
					</label>
					<textarea
						id='message'
						placeholder='Message'
						aria-invalid='false'
						rows={10}
						cols={50}
						className='w-full h-[10em] px-[1.3em] pt-[0.7em] pb-[1.3em] m-0 mb-0 appearance-none font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1.25em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)]  placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset'
					/>
				</div>
			</div>

			{/* Submit Button */}
			<div className='-mt-[10.8px]'>
				<button className='w-auto min-w-[120px] px-[0.7em] pt-[0.2em] pb-[0.6em] rounded text-[20px] md:text-[24px] text-center bg-[var(--pink)] text-[var(--black)] font-heading-narrow tracking-[0.01em] uppercase font-extrabold '>
					Send Enquiry
				</button>
			</div>
		</form>
	)
}

export default EnquiryForm
