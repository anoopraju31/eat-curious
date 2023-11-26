import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AccordionsSection, Hero, Tickers } from './sections'
import { capitalizeWords, foods } from '@/utils/foods'
import { Footer } from '@/app/components'
import { Intrigued } from '@/app/(home)/sections'

interface Props {
	params: {
		productId: string
	}
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const productId = props.params.productId

	const product = foods.filter((food) => food.id === productId)

	if (!product.length)
		return {
			title: 'Product Not Found - Eat Curious',
		}

	return {
		title: capitalizeWords(productId) + ' - Eat Curious',
	}
}

const PiecesPage = (props: Props) => {
	const productId = props.params.productId
	const product = foods.filter((food) => food.id == productId)[0]

	if (!product) return notFound()

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
