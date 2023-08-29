'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQ } from '@/utils/faq'
import { pop, view } from '@/utils/animations'

const Accordion = ({ id, question, answer }: FAQ) => {
	const [show, setShow] = useState<boolean>(false)
	return (
		<div
			onClick={() => setShow((prev) => !prev)}
			className={`w-full px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] text-[var(--white)] border-b ${
				id === 1 ? 'border-t' : ''
			} border-[rgba(255,246,246,0.1)]  ${
				show ? '' : 'hover:bg-[rgba(255,246,246,0.1)]'
			}`}>
			<motion.button
				variants={pop}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				transition={{
					stiffness: 10,
				}}
				className={`w-full py-[20px] lg:py-[40px] text-left uppercase font-heading-narrow font-extrabold leading-normal text-[32px] md:text-[56px] cursor-pointer relative ${
					show ? 'after:content-["-"]' : 'after:content-["+"]'
				} after:block after:absolute after:right-0 after:top-[40%] after:leading-[0] after:transition-all after:duration-500 `}>
				{question}
			</motion.button>

			<AnimatePresence>
				{show && (
					<motion.div
						variants={view}
						initial='initial'
						animate='animate'
						exit='initial'
						transition={{ duration: 0.3 }}
						className='relative pb-[1em] lg:pb-[3em] transition-all'>
						<p className='max-w-[909px] mb-[1.25rem] '>{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Accordion
