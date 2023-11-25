'use client'
import Link from 'next/link'
import { pop } from '@/utils/animations'
import { motion } from 'framer-motion'

const Enquiry = () => {
	return (
		<section className='w-full py-[var(--padding-y)] md:py-[var(--padding-y-sm)] lg:py-[var(--padding-y-lg)] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] relative bg-[var(--black)] lg:flex lg:justify-between lg:flex-wrap lg:items-start '>
			{/* Contact Info */}
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='relative text-center lg:text-left text-[var(--white)] lg:w-[393px] '>
				<h4 className='mb-[0.7em] -tracking-[0.01em] text-[40px] md:text-[76px] lg:text-[5vw] font-heading-narrow font-extrabold leading-[0.85em] uppercase '>
					General Enquiry
				</h4>
				<p className='mb-5 text-base md:text-lg'>
					Curious about great tasting plant-based food? Please contact the
					Curious team at:
				</p>
				<p className='mb-5 text-base md:text-lg'>
					<Link href='/' className='border-b border-b-[#80bdea]'>
						Sales@eat-curious.com
					</Link>
				</p>
				<p className='mb-5 text-base md:text-lg'>&nbsp;</p>
				<p className='mb-5 text-base md:text-lg'>Horton Lodge Farm</p>
				<p className='mb-5 text-base md:text-lg'>Brafield Road</p>
				<p className='mb-5 text-base md:text-lg'>Horton</p>
				<p className='mb-5 text-base md:text-lg'>NN7 2BA</p>

				<div className='hidden lg:block w-[52px] h-[76px] bg-squiggle3 z-20 bg-no-repeat bg-center bg-contain pointer-events-none absolute top-[130%] left-[30%] -scale-x-100  '></div>
			</motion.div>

			{/* Contact Form */}
			<motion.div
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='mt-20 mb-[50px] lg:my-0 lg:w-1/2 lg:order-2'>
				<form className=''>
					<div>
						{/* Name */}
						<div className='mb-4'>
							<label htmlFor='name' className='sr-only'>
								Name
							</label>
							<input
								id='name'
								type='text'
								placeholder='full name'
								className='w-full h-auto px-[1.3em] pt-[0.7em] pb-[1em] font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)] placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset'
							/>
						</div>

						{/* Email */}
						<div className='mb-4'>
							<label htmlFor='email' className='sr-only'>
								Email
							</label>
							<input
								id='email'
								type='text'
								placeholder='Email Address'
								className='w-full h-auto px-[1.3em] pt-[0.7em] pb-[1em] font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)] placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset'
							/>
						</div>

						{/* Contact */}
						<div className='mb-4'>
							<label htmlFor='contact-number' className='sr-only'>
								Contact Number
							</label>
							<input
								id='contact-number'
								type='text'
								placeholder='Contact No.'
								className='w-full h-auto px-[1.3em] pt-[0.7em] pb-[1em] font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)] placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset'
							/>
						</div>

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
			</motion.div>
		</section>
	)
}

export default Enquiry
