import { Button, Drooling, FoodTile } from '@/app/components'
import { foods } from '@/utils/foodTiles'

const Foods = () => {
	return (
		<section
			id='foods'
			className='w-full px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)] pt-10 lg:pt-[60px] xl:pt-[100px] z-10 relative overflow-hidden before:content-[""] before:block before:absolute before:w-[150vw] before:left-1/2 before:top-0 before:h-0 before:pb-[138%] before:-translate-x-1/2 before:bg-[var(--black)] before:rounded-[150%] before:z-0 after:content-[""] after:block after:absolute after:top-[20%] lg:after:top-[40%] after:bottom-0 after:left-0 after:right-0 after:bg-[var(--black)] after:-z-10 '>
			{/* Heading */}
			<Drooling />

			{/* Tiles Wrapper */}
			<div className='mb-6 lg:mb-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'>
				{foods.map(({ id, name, img, link, bg }) => (
					<div
						key={id}
						className={`w-full ${
							id > 4 ? 'hidden lg:block' : id > 3 ? 'hidden md:block' : 'block'
						}`}>
						<FoodTile
							key={id}
							id={id}
							name={name}
							img={img}
							link={link}
							bg={bg}
						/>
					</div>
				))}
			</div>

			{/* View More Button */}
			<div className='mb-5 flex justify-center'>
				<Button title='View All' link='/products' />
			</div>
		</section>
	)
}

export default Foods
