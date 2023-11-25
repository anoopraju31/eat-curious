interface EnquiryTextareaProps {
	label: string
	id: string
	name: string
	placeholder: string
	rows: number
	cols: number
}

const EnquiryTextarea = (props: EnquiryTextareaProps) => {
	const { id, label, name, placeholder, rows, cols } = props

	return (
		<div className='mb-4'>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			<textarea
				id={id}
				name={name}
				placeholder={placeholder}
				aria-invalid='false'
				rows={rows}
				cols={cols}
				className='w-full h-[10em] px-[1.3em] pt-[0.7em] pb-[1.3em] m-0 mb-0 appearance-none font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1.25em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)]  placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset'
			/>
		</div>
	)
}

export default EnquiryTextarea
