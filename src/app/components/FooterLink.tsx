import { IconType } from 'react-icons'

interface FooterLinkProps {
	link: string
	title: string
	Icon: IconType
}

const FooterLink = (props: FooterLinkProps) => {
	const { link, title, Icon } = props

	return (
		<li>
			<a href={link} rel='noopener' target='_blank'>
				<span className='sr-only'> {title} </span>
				<Icon />
			</a>
		</li>
	)
}

export default FooterLink
