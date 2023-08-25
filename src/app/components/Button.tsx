import Link from 'next/link'
import React from 'react'

type Props = {
	title: string
	link: string
}

const Button = ({ title, link }: Props) => {
	return (
		<Link
			href={link}
			className='relative font-heading-narrow font-extrabold text-center text-xl md:text-2xl bg-[var(--pink)] text-[var(--black)] px-[0.7em] mt-[0.2em] pb-[0.6em] tracking-[0.01em] uppercase rounded'>
			{title}
		</Link>
	)
}

export default Button
