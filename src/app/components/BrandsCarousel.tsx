import Image from 'next/image'
import { brands } from '@/utils/carousel'

type BrandProps = {
	brand: string
}

const Brand = (props: BrandProps) => {
	const { brand } = props
	return (
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
}

const Brands = () => brands.map((brand) => <Brand key={brand} brand={brand} />)

const BrandsCarousel = () => {
	return (
		<div className='relative w-full -mt-[2px] py-[50px] lg:py-[100px] bg-[var(--black)] flex flex-row flex-nowrap z-50 overflow-hidden whitespace-nowrap text-[var(--black)] font-extrabold tracking-[0.01em]'>
			<div className='inline-block overflow-hidden flex-shrink-0 animate-marquee'>
				<Brands />
				<Brands />
			</div>

			<div className='inline-block overflow-hidden flex-shrink-0 animate-marquee'>
				<Brands />
				<Brands />
			</div>
		</div>
	)
}

export default BrandsCarousel
