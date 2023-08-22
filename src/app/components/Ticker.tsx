import React from 'react'

type Props = {
	title: string
}

const TickerTapeItem = ({ title }: Props) => (
	<span className="after:content-[''] after:inline-block after:w-4 after:h-4 after:mx-6 after:bg-no-repeat after:bg-center after:bg-flower after:bg-contain after:align-middle">
		{title}
	</span>
)

const Ticker = () => {
	return (
		<div className='fixed bottom-0 w-screen z-50 bg-[var(--pink)] overflow-hidden text-[var(--black)] font-heading-narrow text-sm md:text-lg font-extrabold uppercase tracking-[0.01em] pt-[0.7em] pb-[1.1em] whitespace-nowrap'>
			<div className='inline-block min-w-screen animate-marquee'>
				<TickerTapeItem title='Dairy Free' />
				<TickerTapeItem title='Package with flavour' />
				<TickerTapeItem title='100% plant based' />
				<TickerTapeItem title='Dairy Free' />
				<TickerTapeItem title='Package with flavour' />
				<TickerTapeItem title='100% plant based' />
				<TickerTapeItem title='Dairy Free' />
				<TickerTapeItem title='Package with flavour' />
				<TickerTapeItem title='100% plant based' />
			</div>
			<div className='inline-block min-w-screen animate-marquee'>
				<TickerTapeItem title='Dairy Free' />
				<TickerTapeItem title='Package with flavour' />
				<TickerTapeItem title='100% plant based' />
				<TickerTapeItem title='Dairy Free' />
				<TickerTapeItem title='Package with flavour' />
				<TickerTapeItem title='100% plant based' />
				<TickerTapeItem title='Dairy Free' />
				<TickerTapeItem title='Package with flavour' />
				<TickerTapeItem title='100% plant based' />
			</div>
		</div>
	)
}

export default Ticker
