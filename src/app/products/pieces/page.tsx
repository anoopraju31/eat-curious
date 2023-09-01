import React from 'react'
import { AccordionsSection, Hero, Tickers } from './sections'
import { foods } from '@/utils/foods'
import { Ticker } from '@/app/components'
import { tickers } from '@/utils/ticker'

const PiecesPage = () => {
	return (
		<main className='w-full mx-auto bg-[var(--black)] h-[300vh]'>
			<Hero title={foods[0].title} tabs={foods[0].tabs} />
			<Tickers ticks={foods[0].ticker} />
			<AccordionsSection />
		</main>
	)
}

export default PiecesPage
