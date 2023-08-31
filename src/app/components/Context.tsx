'use client'
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react'

interface Props {
	children: ReactNode
}

export interface ContextType {
	isTextWhite: boolean
	setIsTextWhite: Dispatch<SetStateAction<boolean>>
	productId: number
	setProductId: Dispatch<SetStateAction<number>>
}

export const context = createContext<ContextType | null>(null)

const Context = ({ children }: Props) => {
	const [isTextWhite, setIsTextWhite] = useState<boolean>(true)
	const [productId, setProductId] = useState<number>(-1)
	return (
		<context.Provider
			value={{ isTextWhite, setIsTextWhite, productId, setProductId }}>
			{children}
		</context.Provider>
	)
}

export default Context
