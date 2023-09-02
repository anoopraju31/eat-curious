import React from 'react'

type Props = {
	title: string
	isLargeSize: boolean
}

type TickerProps = {
	ticks: string[]
	background: string
	position?: string
	isLargeSize?: true
}

const TickerTapeItem = ({ title, isLargeSize }: Props) => (
	<span
		className={`after:content-[''] after:inline-block ${
			isLargeSize
				? 'after:w-[0.8em] after:h-[0.8em] after:mx-[20px]'
				: 'after:w-4 after:h-4 after:mx-6'
		} after:bg-no-repeat after:bg-center after:bg-flower after:bg-contain after:align-middle`}>
		{title}
	</span>
)

const Ticker = ({ ticks, background, position, isLargeSize }: TickerProps) => {
	return (
		<div
			style={{ backgroundColor: background }}
			className={`${position} w-full z-[999] bg-[var(--pink)] overflow-hidden text-[var(--black)] ${
				isLargeSize
					? 'font-heading-narrow text-[32px] md:text-[56px] pt-[0.3em] pb-[0.4em]'
					: 'font-headingFont text-sm md:text-lg pt-[0.7em] pb-[1.1em]'
			} font-extrabold uppercase tracking-[0.01em] whitespace-nowrap`}>
			<div className='inline-block min-w-screen animate-marquee'>
				{ticks.map((tick, idx) => (
					<TickerTapeItem key={idx} title={tick} isLargeSize />
				))}
			</div>
			<div className='inline-block min-w-screen animate-marquee'>
				{ticks.map((tick, idx) => (
					<TickerTapeItem key={idx} title={tick} isLargeSize />
				))}
			</div>
		</div>
	)
}

export default Ticker
