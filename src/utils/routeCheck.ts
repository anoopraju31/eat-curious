export const isValidProductsRoute = (route: string) => {
	const regex = /^\/products\//

	return regex.test(route)
}
