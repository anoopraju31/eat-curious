import React from 'react'
import { ProductItem } from '../components'
import { products } from '@/utils/products'

const ProductPage = () => {
	return (
		<main className='overflow-hidden'>
			<div className='w-screen h-screen py-[80px] md:py-[100px] xl:py-[120px] fixed top-0 left-0 right-0 bottom-0 bg-[var(--black)]  flex flex-col justify-start items-center overflow-auto '>
				{products.map((product) => (
					<ProductItem key={product.id} {...product} />
				))}
			</div>
		</main>
	)
}

export default ProductPage
