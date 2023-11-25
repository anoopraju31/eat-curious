import { AccordionsSection, Hero, Tickers } from './sections'
import { foods } from '@/utils/foods'
import { Footer } from '@/app/components'
import { Intrigued } from '@/app/(home)/sections'

interface Props {
	params: {
		productId: string
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
