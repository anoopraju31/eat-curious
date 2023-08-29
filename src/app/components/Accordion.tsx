'use client'

import { FAQ } from '@/utils/faq'
import { useState } from 'react'

const Accordion = ({ id, question, answer }: FAQ) => {
	const [show, setShow] = useState<boolean>(false)
	return (
		<div
			onClick={() => setShow((prev) => !prev)}
			className='w-full px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] text-[var(--white)] border-b border-b-[rgba(255,246,246,0.1)]  '>
			<button
				className={`w-full py-[20px] lg:py-[40px] text-left uppercase font-heading-narrow font-extrabold leading-normal text-[32px] md:text-[56px] cursor-pointer relative ${
					show ? 'after:content-["-"]' : 'after:content-["+"]'
				} after:block after:absolute after:right-0 after:top-[40%] after:leading-[0]  `}>
				{question}
			</button>

			<div
				className={`relative pb-[1em] lg:pb-[3em] ${
					show ? 'block' : 'hidden'
				} `}>
				<p className='max-w-[909px] mb-[1.25rem] '>{answer}</p>
			</div>
		</div>
	)
}

export default Accordion
