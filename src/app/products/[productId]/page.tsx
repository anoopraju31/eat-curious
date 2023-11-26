import { AccordionsSection, Hero, Tickers } from './sections'
import { capitalizeWords, foods } from '@/utils/foods'
import { Footer } from '@/app/components'
import { Intrigued } from '@/app/(home)/sections'
import { Metadata } from 'next'

interface Props {
	params: {
		productId: string
	}
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const productId = props.params.productId
	return {
		title: capitalizeWords(productId) + ' - Eat Curious',
	}
}

const PiecesPage = (props: Props) => {
	const productId = props.params.productId
	const product = foods.filter((food) => food.id == productId)[0]

	return (
		<main className='w-full mx-auto bg-[var(--white)]'>
			<Hero title={product.title} tabs={product.tabs} />
			{product.ticker && <Tickers ticks={product.ticker} />}
			<AccordionsSection
				accordions={product.accordion}
				weight={product.weight}
				caseValue={product.case}
			/>
			<Intrigued />
			<Footer />
		</main>
	)
}

export default PiecesPage

export async function generateStaticParams() {
	return foods.map((food) => ({
		productId: food.id,
	}))
}
