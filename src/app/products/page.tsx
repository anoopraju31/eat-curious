import React from 'react'
import { ProductItem } from '../components'

const ProductPage = () => {
	return (
		<main className=''>
			<div className='w-screen h-screen py-[80px] md:py-[100px] xl:py-[120px] fixed top-0 left-0 right-0 bottom-0 bg-[var(--black)]  flex flex-col justify-start items-center  '>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</main>
	)
}

export default ProductPage
