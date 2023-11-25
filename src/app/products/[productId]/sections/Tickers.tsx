'use client'

import { useContext } from 'react'
import { Ticker } from '@/app/components'
import { context } from '@/app/components/Context'
import { tickers } from '@/utils/ticker'

interface Props {
	ticks: string[]
}

const Tickers = ({ ticks }: Props) => {
	const values = useContext(context)

	return (
		<>
			<Ticker
				ticks={ticks}
				background={values?.backgroundColor as string}
				isLargeSize
			/>
			<Ticker ticks={tickers} background='#fff6f6' position='fixed bottom-0' />
		</>
	)
}

export default Tickers
