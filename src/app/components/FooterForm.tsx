const FooterForm = () => {
	return (
		<form action='/' className='w-full flex flex-col md:flex-row gap-4'>
			<div className='flex-1'>
				<label htmlFor='name' className='hidden'>
					Name
				</label>
				<input
					type='text'
					id='name'
					placeholder='Full Name'
					className='shrink-0 w-full h-auto pt-[0.7rem] pb-4 px-[1.3rem] border-none outline-none shadow-none font-semibold font-heading-narrow text-left tracking-[0.01em] uppercase bg-[var(--white)] text-[var(--black)] text-base md:text-lg leading-4 rounded'
				/>
			</div>

			<div className='flex-1'>
				<label htmlFor='email' className='hidden'>
					email
				</label>
				<input
					type='email'
					id='email'
					placeholder='email address'
					className='shrink-0 w-full h-auto pt-[0.7rem] pb-4 px-[1.3rem] border-none outline-none shadow-none font-semibold font-heading-narrow text-left tracking-[0.01em] uppercase bg-[var(--white)] text-[var(--black)] text-base md:text-lg leading-4 rounded'
				/>
			</div>

			<div className=''>
				<button className='min-w-[120px] w-full h-full pt-[0.2rem] pb-[0.6rem] px-[0.7rem] bg-[var(--black)] text-[var(--white)] rounded font-heading-narrow font-bold outline-none border-none cursor-pointer text-center text-xl'>
					Sign Up
				</button>
			</div>
		</form>
	)
}

export default FooterForm
