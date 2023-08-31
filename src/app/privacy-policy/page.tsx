import { PrivacyPolicy, privacyPolicies } from '@/utils/privacyPolicy'
import React from 'react'
import { Footer } from '../components'

const Policy = ({ heading, descriptions }: PrivacyPolicy) => (
	<article>
		<h4 className='font-heading-narrow font-extrabold leading-[0.85em] mb-[0.7em] uppercase -tracking-[0.01em] text-[40px] md:text-[76px] lg:text-[56px]   '>
			{heading}
		</h4>
		{descriptions.map((description, idx) => (
			<p key={idx} className='mb-5'>
				{' '}
				{description}{' '}
			</p>
		))}
	</article>
)

const PrivacyPolicyPage = () => {
	return (
		<div className='bg-[var(--black)]'>
			<main className='w-full pt-[160px] md:pt-[200px] xl:pt-[240px] px-[var(--padding-x)] md:px-[var(--padding-x-sm)] xl:px-[var(--padding-x-lg)]  pb-[80px] md:pb-[100px] xl:pb-[120px] bg-[var(--black)] text-white before:content-[""] before:table after:clear-both after:content-[""] after:table'>
				<section className='w-full md:w-[808px] max-w-[calc(100vw - 2rem)] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[940px]  mx-auto relative'>
					{privacyPolicies.map((policy) => (
						<Policy key={policy.id} {...policy} />
					))}
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default PrivacyPolicyPage
