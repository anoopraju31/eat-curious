import { brands } from '@/utils/carousel'
import Image from 'next/image'
import React from 'react'

type Props = {
	brand: string
}

const Brands = ({ brand }: Props) => (
	<span className='inline-block align-middle mr-20'>
		<Image
			src={brand}
			alt=''
			width={300}
			height={200}
			className='w-auto max-w-[125px] md:max-w-[167px] lg:max-w-[246px] h-auto max-h-[50px] md:max-h-[67px] lg:max-h-[90px]'
		/>
	</span>
)

const BrandsCarousel = () => {
	return (
		<div className='relative w-full -mt-[2px] py-[50px] lg:py-[100px] bg-[var(--black)] flex flex-row flex-nowrap z-10 overflow-hidden whitespace-nowrap text-[var(--black)] font-extrabold tracking-[0.01em]'>
			<div className='inline-block overflow-hidden flex-shrink-0 animate-marquee'>
				{brands.map((brand) => (
					<Brands key={brand} brand={brand} />
				))}
				{brands.map((brand) => (
					<Brands key={brand} brand={brand} />
				))}
			</div>

			<div className='inline-block overflow-hidden flex-shrink-0 animate-marquee'>
				{brands.map((brand) => (
					<Brands key={brand} brand={brand} />
				))}
				{brands.map((brand) => (
					<Brands key={brand} brand={brand} />
				))}
			</div>
		</div>
	)
}

export default BrandsCarousel
