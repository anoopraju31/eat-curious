import React from 'react'
import { Hero } from './sections'
import { foods } from '@/utils/foods'
import { Ticker } from '@/app/components'
import { tickers } from '@/utils/ticker'
import Tickers from './sections/Tickers'

const PiecesPage = () => {
	return (
		<main className='bg-[var(--black)] h-[300vh]'>
			<Hero title={foods[0].title} tabs={foods[0].tabs} />
			<Tickers ticks={foods[0].ticker} />
		</main>
	)
}

export default PiecesPage
