import React from 'react'
import { Hero } from './sections'
import { foods } from '@/utils/foods'

const PiecesPage = () => {
	return (
		<main className='bg-[var(--black)]'>
			<Hero title={foods[0].title} tabs={foods[0].tabs} />
		</main>
	)
}

export default PiecesPage
