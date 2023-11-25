interface EnquiryInputProps {
	label: string
	id: string
	name: string
	placeholder: string
	type: string
}

const EnquiryInput = (props: EnquiryInputProps) => {
	const { label, id, name, placeholder, type } = props
	return (
		<div className='mb-4'>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				className='w-full h-auto px-[1.3em] pt-[0.7em] pb-[1em] font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)] placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset'
			/>
		</div>
	)
}

export default EnquiryInput
