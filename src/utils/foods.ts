export interface FoodTab {
	title: string
	description: string
	enquire?: string
	color: string
	img: string
}

export interface Aaccordion {
	icon: string
	title: string
	description: string
}

interface Food {
	id: string
	title: string
	tabs: FoodTab[]
	ticker?: string[]
	accordion: Aaccordion[]
	weight?: string
	case: string
}

export const capitalizeWords = (str: string) => {
	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

export const foods: Food[] = [
	{
		id: 'pieces',
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
		ticker: [
			'Bake Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Shallow-Fry Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Textured Vegetable Protein (28%) (Pea Protein Concentrate, Faba Protein Concentrate, Salt), Yeast Extract, Colour (Caramel), Black Pepper, Garlic Powder. ',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Shallow Fry: Place a small amount of cooking oil into pan. Once oil is hot add required number of pieces to pan and fry over a medium heat for 4 minutes. Oven Cook: Place on a baking tray and cook in a pre-heated oven at 200°C / 180°C Fan Assisted / Gas Mark 4 for approximately 4 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '500G',
		case: '2KG',
	},
	{
		id: 'mince',
		title: 'Curious Mince',
		tabs: [
			{
				title: 'Plain',
				description:
					'Tender, delicious, juicy protein mince, perfect for those with dietary restrictions. Our mince contains no allergens such as dairy, gluten, soy, and nuts. Whether you’re looking to create a classic bolognese, spicy chili, salad bowl or a filling lasagna, Curious Mince is the perfect ingredient for your meal.',
				color: '#1ABE71',
				img: '/images/products/mince/mince-5-1200x1200.jpg',
			},
			{
				title: "Mooin'",
				description:
					'Tender, delicious, juicy protein mince, perfect for those with dietary restrictions. Our mince contains no allergens such as dairy, gluten, soy, and nuts. Whether you’re looking to create a classic bolognese, spicy chili, salad bowl or a filling lasagna, Curious Mince is the perfect ingredient for your meal.',
				enquire: '/contact',
				color: '#FFB500',
				img: '/images/products/mince/mince-6-1200x1200.jpg',
			},
			{
				title: 'Tandoori Fire',
				description:
					'Tender delicious juicy protein pieces. Perfect for those with dietary restrictions, our pieces contain no allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!',
				color: '#1ABE71',
				img: '/images/products/mince/mince-7-1200x1200.jpg',
			},
		],
		ticker: [
			'Bake Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Shallow-Fry Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Textured Vegetable Protein (28%) (Pea Protein Concentrate, Salt). ',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Hob: Place a small amount of cooking oil into pan. Once oil is hot add mince to pan and fry over a medium heat for 3-4 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '500G',
		case: '2KG',
	},
	{
		id: 'negg',
		title: 'Curious Negg',
		tabs: [
			{
				title: 'Liquid Negg',
				description:
					'Embrace the deliciousness of our liquid plant based egg that flawlessly replicates the taste and texture of traditional eggs. No cracking or whisking required – just pour and cook! Perfectly suitable for all your favorite egg-based recipes, from fluffy omelets to mouthwatering quiches.',
				color: '#1ABE71',
				img: '/images/products/negg/negg-2-1200x1200.jpg',
			},
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Pea Protein Blend (12.5%) (Pea Protein, Starch, Stabiliser (Carrageenan), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances (contains Oat Fibre (Gluten Free), Stabiliser (Methyl Cellulose), Acidity Regulator (Ascorbic Acid), Colour (Carotenes)), Sunflower Oil.',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description:
					'For allergens, including Cereals containing Gluten, see ingredients in bold. \n May Contain Soya and Mustard.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Defrost: Defrost in fridge for approximately 12-hours. Pour required quantity into a pan and cook on a medium heat. Stir until egg sets to the required texture. The product can be enhanced by adding a small knob of butter finished with a sprinkling of chives. Also ideal for omelettes and quiche, use as required. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '1KG',
		case: '3KG',
	},
	{
		id: 'fillet',
		title: 'Curious Fillets',
		tabs: [
			{
				title: 'Breaded',
				description:
					'Eat Curious fillets dusted in a crispy panko crumb, made from a special blend of pea protein and our curious flavours. Perfect to be served in a burger or sliced for a plant-based katsu curry.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/fillet/CuriousFillet_Crop.png',
			},
			{
				title: 'Southern fried original',
				description:
					'Eat Curious fillets lightly dusted in a southern fried coating, made from a special blend of pea protein and our curious flavours. Served best on a soft, toasted bun with all your favorite toppings giving a mouth-watering zingy flavour.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/fillet/CuriousFillet_Crop.png',
			},
		],
		ticker: [
			'Bake Me',
			'Deep-Fry Me',
			'Bake Me',
			'Deep-Fry Me',
			'Bake Me',
			'Deep-Fry Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Breading Coating (15.5%) (Rice Flour, Potato Starch, Tapioca Starch, Salt, Flavour Enhancer (Monosodium Glutamate), Ground Black Pepper, Pepper Blend (Salt, Pepper Extract), Garlic Powder, Onion Powder, Chilli Flakes, Sage Blend (Salt, Flavouring), Maltodextrin, Capsicum Extract), Pea Protein Powder (14%) (Pea Protein, Bamboo Fibre, Emulsifier (Methyl Cellulose), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Stabiliser (Sodium Alginate), Salt), Wheat Flour (contains Calcium Carbonate, Iron, Niacin, Thiamin), Wheat Gluten, Sunflower Oil, Garlic Powder, Smoked Paprika, Salt, Mixed Herbs, Black Pepper, Turmeric.',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description:
					'For allergens, including Cereals containing Gluten, see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Deep Fry: Pre-heat fryer to correct temperature. Add product to basket and fry in hot oil (175°C) for 10 minutes. Oven Cook: Brush both sides with cooking oil. Place on a baking tray and cook in a pre-heated oven at 200°C/180°C Fan Assisted/Gas Mark 4 and cook for 15 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or equivalent or apply national standards.',
			},
		],
		weight: '100G',
		case: '2.5KG',
	},
	{
		id: 'tenders',
		title: 'Curious Tenders',
		tabs: [
			{
				title: 'Breaded',
				description:
					'Eat Curious tenders dusted in a crispy panko crumb, made from a special blend of pea protein and our curious flavours. Perfect to be served as a side, in a wrap or a burger.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/tenders/CuriousTenders_Crop.png',
			},
			{
				title: 'Southern fried original',
				description:
					'Eat Curious tenders dusted in a southern-fried coating, made from a special blend of pea protein and our curious flavours. Perfect to be served as a side, in a wrap or a burger.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/tenders/CuriousTenders_Crop.png',
			},
		],
		ticker: [
			'Bake Me',
			'Deep-Fry Me',
			'Bake Me',
			'Deep-Fry Me',
			'Bake Me',
			'Deep-Fry Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Breading Coating (16%) (Rice Flour, Potato Starch, Tapioca Starch, Salt, Flavour Enhancer (Monosodium Glutamate), Ground Black Pepper, Pepper Blend (Salt, Pepper Extract), Garlic Powder, Onion Powder, Chilli Flakes, Sage Blend (Salt, Flavouring), Maltodextrin, Capsicum Extract), Pea Protein Powder (13%) (Pea Protein, Bamboo Fibre, Emulsifier (Methyl Cellulose), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Stabiliser (Sodium Alginate), Salt), Wheat Flour (contains Calcium Carbonate, Iron, Niacin, Thiamin), Wheat Gluten, Sunflower Oil, Garlic Powder, Smoked Paprika, Salt, Mixed Herbs, Black Pepper, Turmeric.',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description:
					'For allergens, including Cereals containing Gluten, see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'From Frozen: Remove all packaging. Deep Fry: Pre-heat fryer to correct temperature. Add product to basket and fry in hot cooking oil (175°C) for 8 minutes. Oven Cook: Brush both sides with cooking oil. Place on a baking tray and cook in a pre-heated oven at 200°C / 180°C Fan Assisted / Gas Mark 4 for 12 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		case: '3.25KG',
	},
	{
		id: 'bangers',
		title: 'Curious Bangers',
		tabs: [
			{
				title: 'Original',
				description:
					'Our juicy Eat Curious bangers are made from our special pea protein mix, flavoured with sage and parsley. A must have for every fry up and they make a great hotdog and bangers & mash too!',
				enquire: '/contact',
				color: '#F95B77',
				img: '/images/products/bangers/CuriousBanger_Crop.png',
			},
			{
				title: 'Jumbo',
				description:
					'Our juicy Eat Curious jumbo bangers are made from our special pea protein mix, flavoured with sage and parsley. A must have for every fry up and they make a great jumbo hotdog and bangers & mash too!',
				enquire: '/contact',
				color: '#F95B77',
				img: '/images/products/bangers/bangers-10-1200x1200.jpg',
			},
		],
		ticker: [
			'Grill Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Grill Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Grill Me',
			'Shallow-Fry Me',
			'Bake Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Pea Protein Powder (13%) (Pea Proteins, Natural Flavouring (Flavouring Preparations, Natural Flavouring Substances), Stabilisers (Methyl Cellulose, Agar), Starch, Salt, Pea Fibre, Citrus Fibre, Smoke Flavouring), Sunflower Oil, Panko Breadcrumbs (Wheat Flour, Yeast, Salt), Soy Protein, Algae Casing (Natural Polysaccharides, Water, Glycerin), Black Pepper, Sage, Parsley. ',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Shallow Fry: Place a small amount of cooking oil in a frying pan. Shallow fry for 12 minutes, turning occasionally. Oven Cook: Brush with cooking oil. Place on a baking tray and cook in a pre-heated oven at 200°C / 180°C Fan Assisted / Gas Mark 4 for 12 minutes, turning occasionally. Grill: Brush with cooking oil. Grill for 12 minutes, turning occasionally. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '135G',
		case: '4.05KG',
	},
	{
		id: 'pattie',
		title: 'Curious Pattie',
		tabs: [
			{
				title: 'Round',
				description:
					'Our Eat Curious patties are tender and juicy, made from our special pea protein mix flavoured with sage and parsley. They make a great breakfast wrap or bap, a perfect way to start the day!',
				enquire: '/contact',
				color: '#F95B77',
				img: '/images/products/pattie/pattie-1200x1200.jpg',
			},
			{
				title: 'Rectanglular',
				description:
					'Our Eat Curious patties are tender and juicy, made from our special pea protein mix flavoured with sage and parsley. They make a great breakfast wrap or bap, a perfect way to start the day!',
				enquire: '/contact',
				color: '#F95B77',
				img: '/images/products/pattie/pattie-2-1200x1200.jpg',
			},
		],
		ticker: [
			'Grill Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Grill Me',
			'Shallow-Fry Me',
			'Bake Me',
			'Grill Me',
			'Shallow-Fry Me',
			'Bake Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Pea Protein Powder (14%) (Pea Proteins, Natural Flavouring (Flavouring Preparations, Natural Flavouring Substances), Stabilisers (Methyl Cellulose, Agar), Starch, Salt, Pea Fibre, Citrus Fibre, Smoke Flavouring), Sunflower Oil, Panko Breadcrumbs (6.5%) (Wheat Flour, Yeast, Salt), Soy Protein, Parsley, Sage, Black Pepper.',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'From Frozen: Remove all packaging. Shallow Fry: Place a small amount of cooking oil in a frying pan. Shallow fry for 5 minutes on both sides. Oven Cook: Brush both sides with cooking oil. Place on a baking tray and cook in a pre-heated oven at 200°C/180°C Fan Assisted/Gas Mark 4 for 12 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or equivalent or apply national standards.',
			},
		],
		weight: '65G',
		case: '3.25KG',
	},
	{
		id: 'block',
		title: 'Curious Block',
		tabs: [
			{
				title: "Mooin'",
				description:
					'Our Eat Curious beef flavoured block is tender and juicy, made from our special pea protein mix and lightly seasoned. Can be used to create a variety of curious dishes, our block is what inspires chefs to whip up, throw together, tear, shake, and break the rules – on a mission to redefine plant-based food for a new generation.',
				enquire: '/contact',
				color: '#FFB500',
				img: '/images/products/block/CuriousBlockBeef_Crop.png',
			},
			{
				title: "Cluckin'",
				description:
					'Our Eat Curious chicken flavoured block is tender and juicy, made from our special pea protein mix and lightly seasoned. Can be used to create a variety of curious dishes, our block is what inspires chefs to whip up, throw together, tear, shake, and break the rules – on a mission to redefine plant-based food for a new generation.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/block/nuggets-2-1200x1200.jpg',
			},
			{
				title: "Oinkin'",
				description:
					'Our Eat Curious sausage flavoured block is tender and juicy, made from our special pea protein mix flavoured with sage and parsley. Can be used to create a variety of curious dishes, our block is what inspires chefs to whip up, throw together, tear, shake, and break the rules – on a mission to redefine plant-based food for a new generation.',
				enquire: '/contact',
				color: '#F95B77',
				img: '/images/products/block/block-5.jpg',
			},
		],
		ticker: [
			'Slice Me',
			'Be Creative',
			'Skewer Me',
			'Dlice Me',
			'Shred Me',
			'Slice Me',
			'Be Creative',
			'Skewer Me',
			'Dlice Me',
			'Shred Me',
			'Slice Me',
			'Be Creative',
			'Skewer Me',
			'Dlice Me',
			'Shred Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Pea Protein Powder (16.5%) (Pea Protein, Bamboo Fibre, Emulsifier (Methyl Cellulose), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Stabiliser (Sodium Alginate), Salt), Sunflower Oil, Soy Protein, Yeast Extract, Colour (Caramel), Beetroot Powder (Dehydrated Beetroot, Anti-Caking Agent (Silicon Dioxide), Wheat Gluten.',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
		],
		weight: '500G',
		case: '4KG',
	},
	{
		id: 'roast',
		title: 'Curious Roast',
		tabs: [
			{
				title: 'Original',
				description:
					'A delicious plant-based roasting joint with a premium succulent stuffing, wrapped in a crispy skin, dusted with herbs and black pepper. Perfect for slicing and hand carved portions.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/roast/CuriousRoast_Crop.png',
			},
		],
		ticker: [
			'Wrap Me in foil',
			'bake me',
			'Wrap Me in foil',
			'bake me',
			'Wrap Me in foil',
			'bake me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Pea Protein Powder (14.5%) (Pea Protein, Bamboo Fibre, Emulsifier (Methyl Cellulose), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Stabiliser (Sodium Alginate), Salt), Sunflower Oil, Wheat Gluten, Oinkin’ Mix (3.5%) (Pea Proteins, Natural Flavouring (Flavouring Preparations, Natural Flavouring Substances), Stabilisers (Methyl Cellulose, Agar), Starch, Salt, Pea Fibre, Citrus Fibre, Smoke Flavouring), Panko Breadcrumbs (Wheat Flour, Yeast, Salt), Soy Protein, Rice Paper (Rice Flour, Tapioca Starch, Water, Salt), Sage, Parsley, Black Pepper, Mixed Herbs.',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Oven Cook: Place on a baking tray, brush with oil, wrap in foil and cook in a pre-heated oven at 175°C Fan Assisted / Gas Mark 3 for 1-hour and 20-minutes. These are guidelines only. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '1.5KG',
		case: '3KG',
	},
	{
		id: 'en-croute',
		title: 'Curious En Croute',
		tabs: [
			{
				title: "Mooin'",
				description:
					'Delicious tender plant-based beef style pattie topped with a premium succulent stuffing wrapped in puff pastry, dusted with cracked black pepper. Ideal for a centre plate offering taking plant-based food to another level.',
				enquire: '/contact',
				color: '#FFB500',
				img: '/images/products/en-croute/en-croute-3.png',
			},
			{
				title: "Cluckin'",
				description:
					'Delicious tender plant-based chicken style pattie topped with a premium succulent stuffing wrapped in puff pastry, dusted with mixed herbs. Ideal for a centre plate offering taking plant-based food to another level.',
				enquire: '/contact',
				color: '#1ABE71',
				img: '/images/products/en-croute/en-croute-6.jpg',
			},
		],
		ticker: [
			'Bake Me',
			'Bake Me',
			'Bake Me',
			'Bake Me',
			'Bake Me',
			'Bake Me',
			'Bake Me',
			'Bake Me',
			'Bake Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Puff Pastry (50%) (Wheat Flour (Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamine), Margarine (Palm and Rapeseed Oil, Water, Salt), Water, Preservative (Potassium Sorbate)), Water, Sunflower Oil, Pea Protein Powder (6%) (Pea Protein, Bamboo Fibre, Emulsifier (Methyl Cellulose), Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Stabiliser (Sodium Alginate), Salt), Pea Protein Mix (2%) (Pea Proteins, Natural Flavouring (Flavouring Preparations, Natural Flavouring Substances), Stabilisers (Methyl Cellulose, Agar), Starch, Salt, Pea Fibre, Citrus Fibre, Smoke Flavouring), Soy Protein, Panko Breadcrumbs (Wheat Flour, Yeast, Salt), Wheat Gluten, Parsley, Sage, Yeast Extract (Yeast Extract, Salt, Acidity Regulator (Citric Acid)), Colour (Ammonia Caramel), Beetroot Powder (Dehydrated Beetroot, Anti-Caking Agent (Silicon Dioxide)).',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description: 'For allergens see ingredients in bold.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Oven Cook: Pre-glaze en croute with plant milk. Place en croute onto a baking tray and cook in a pre-heated oven at 200°C / 180°C Fan Assisted / Gas Mark 4 for 30 minutes. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '190G',
		case: '3.42KG',
	},
	{
		id: 'burgers',
		title: 'Curious Burger',
		tabs: [
			{
				title: 'Original',
				description:
					'Introducing our signature burger, made from plants and is allergen free! This mouth-watering Eat Curious burger is packed with flavour, a must for your next BBQ. Fancy being creative…simply grill, smash, and serve on a bun with your favorite toppings for an unforgettable smashed burger experience!',
				enquire: '/contact',
				color: '#FFB500',
				img: '/images/products/burger/burger-2-768x1157.jpg',
			},
		],
		ticker: [
			'Bake Me',
			'Grill Me',
			'Griddle Me',
			'shallow fry Me',
			'Bake Me',
			'Grill Me',
			'Griddle Me',
			'shallow fry Me',
			'Bake Me',
			'Grill Me',
			'Griddle Me',
			'shallow fry Me',
		],
		accordion: [
			{
				icon: '/images/ingredients.svg',
				title: 'Ingredients',
				description:
					'Water, Textured Vegetable Protein (23%) (Pea Protein Concentrate, Faba Protein Concentrate, Salt), Sunflower Oil, Burger Mix Blend (6%) (Natural Flavourings (Flavouring Preparations, Natural Flavouring Substances), Emulsifier (Methyl Cellulose), Pea Protein, Salt, Maltodextrin, Pea Fibre, Psyllium Fibre, Colour (Ammonia Caramel), Red Beet Juice Concentrate Powder, Pepper Powder, Potato Fibre, Turmeric Extract Powder), Colour (Ammonia Caramel)).',
			},
			{
				icon: '/images/allergen.svg',
				title: 'Allergen Information',
				description:
					'For allergens see ingredients in bold. May contain Soya, Sesame and Mustard.',
			},
			{
				icon: '/images/storage.svg',
				title: 'Storage',
				description:
					'Keep frozen at -18°C or cooler. Important: If food has thawed, do not refreeze.',
			},
			{
				icon: '/images/cooking.svg',
				title: 'Cooking Instructions',
				description:
					'Cooking Guidelines from Frozen: Remove all packaging. Oven Cook: Brush both sides with cooking oil. Place on a baking tray and cook in a pre-heated oven at 200°C /180°C Fan Assisted/Gas Mark 4 for 18 minutes. Shallow Fry: Place a small amount of cooking oil in a frying pan. Shallow fry for 5 minutes on both sides. Griddle Plate: Place a small amount of cooking oil onto griddle plate. Once oil is hot place burger onto griddle plate. Fry for 3 ½ minutes on both sides. Press burger down with a smash burger plate and cook for a further 2 minutes on both sides. Cooking times may vary. Cook throughout to a minimum temperature of 75°C for 30 seconds or apply national standards.',
			},
		],
		weight: '114G',
		case: '3.42KG',
	},
]
