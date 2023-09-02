import React from 'react'
import { AccordionsSection, Hero, Tickers } from './sections'
import { foods } from '@/utils/foods'
import { Footer } from '@/app/components'
import { Intrigued } from '@/app/(home)/sections'

const PiecesPage = () => {
	return (
		<main className='w-full mx-auto bg-[var(--white)]'>
			<Hero title={foods[0].title} tabs={foods[0].tabs} />
			<Tickers ticks={foods[0].ticker} />
			<AccordionsSection
				accordions={foods[0].accordion}
				weight={foods[0].weight}
				caseValue={foods[0].case}
			/>
			<Intrigued />
			<Footer />
		</main>
	)
}

export default PiecesPage
