import React from 'react'
import { AccordionsSection, Hero, Tickers } from './sections'
import { foods } from '@/utils/foods'
import { Footer } from '@/app/components'
import { Intrigued } from '@/app/(home)/sections'

const PiecesPage = () => {
	return (
		<main className='w-full mx-auto bg-[var(--white)]'>
			<Hero title={foods[10].title} tabs={foods[10].tabs} />
			{foods[10].ticker && <Tickers ticks={foods[10].ticker} />}
			<AccordionsSection
				accordions={foods[10].accordion}
				weight={foods[10].weight}
				caseValue={foods[10].case}
			/>
			<Intrigued />
			<Footer />
		</main>
	)
}

export default PiecesPage
