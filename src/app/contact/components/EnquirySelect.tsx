import { EnquirySelectType } from '@/utils/enquiry'

interface EnquirySelectProps {
	label: string
	id: string
	name: string
	options: EnquirySelectType[]
}

const EnquirySelect = (props: EnquirySelectProps) => {
	const { label, id, name, options } = props
	return (
		<div className='mb-4'>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			<select
				name={name}
				id={id}
				className='w-full h-auto px-[1.3em] pt-[0.7em] pb-[1em] font-medium tracking-[0.01em] font-heading-narrow text-[18px] text-[var(--white)] text-left leading-[1em] uppercase rounded border-none outline-none shadow-none bg-[rgba(255,246,246,0.1)] placeholder:text-[rgba(4,47,26,0.5)] focus:shadow-inset appearance-none bg-plus bg-no-repeat bg-select relative focus:border-none focus:outline-none'>
				{options.map(({ title, value }) => (
					<option
						key={value}
						value={value}
						className='text-[rgba(255, 246,246, 0.5)] bg-[var(--black)] border-none outline-none px-[1.3em] pt-[0.7em] pb-[1em]  '>
						{title}
					</option>
				))}
			</select>
		</div>
	)
}

export default EnquirySelect
