export interface FoodTab {
	title: string
	description: string
	enquire: string
	color: string
	img: string
}

interface Aaccordion {
	icon: string
	title: string
	description: string[]
}

interface Food {
	title: string
	tabs: FoodTab[]
	ticker: string[]
	accordion: Aaccordion[]
	weight: string
	case: string
}

export const foods: Food[] = [
	{
		title: 'Curious Pieces',
		tabs: [
			{
				title: 'Hot & Spicy',
				description:
					'Tender delicious juicy protein pieces coated in a hot and spicy glaze. Perfect for those with dietary restrictions, our pieces contain no allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/pieces/pieces-8-1200x1200.jpg',
			},
			{
				title: 'Smokey BBQ',
				description:
					'Tender delicious juicy protein pieces coated in a smokey BBQ glaze. Perfect for those with dietary restrictions, our pieces contain no allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/pieces/pieces-9-1200x1200.jpg',
			},
			{
				title: "Mooin'",
				description:
					'Tender delicious juicy protein pieces. Perfect for those with dietary restrictions, our pieces contain no allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!',
				enquire: '/contact',
				color: '#FFB500',
				img: '/images/products/pieces/pieces-10-1200x1200.jpg',
			},
		],
		ticker: ['Bake Me', 'Shallow-Fry Me'],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description: [
					'Water, Textured Vegetable Protein (28%) (Pea Protein Concentrate, Faba Protein Concentrate, Salt), Yeast Extract, Colour (Caramel), Black Pepper, Garlic Powder. ',
				],
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: ['For allergens see ingredients in bold.'],
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description: [
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
				],
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description: [
					'Cooking Guidelines from Frozen: Remove all packaging. Shallow Fry: Place a small amount of cooking oil into pan. Once oil is hot add required number of pieces to pan and fry over a medium heat for 4 minutes. Oven Cook: Place on a baking tray and cook in a pre-heated oven at 200°C / 180°C Fan Assisted / Gas Mark 4 for approximately 4 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
				],
			},
		],
		weight: '500G',
		case: '2KG',
	},
]
