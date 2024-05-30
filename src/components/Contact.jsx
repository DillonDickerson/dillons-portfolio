const Contact = () => {
	return (
		<section
			name='contact'
			className='w-full h-screen font-serif flex flex-col justify-center items-center p-4'
		>
			<div className='pb-8'>
				<h1 className='text-4xl font-bold inline border-b-4 border-[#6CCFF6] md:text-6xl font-serif'>
					Contact Me
				</h1>
			</div>
			<form
				method='POST'
				action='https://getform.io/f/13dd5889-afeb-426e-a943-95a3922ee86b'
				className='flex flex-col max-w-[600px] w-full bg-white rounded p-4 shadow-lg'
			>
				<label className='text-sm font-bold text-[#757780]'>Name</label>
				<input
					className='my-4 p-2 bg-[#f0f0f0] text-[#757780] rounded'
					type='text'
					placeholder='name'
					name='name'
					required
				></input>
				<label className='text-sm font-bold text-[#757780]'>Email</label>
				<input
					className='my-4 p-2 bg-[#f0f0f0] text-[#757780] rounded'
					type='text'
					placeholder='email'
					name='email'
					required
				></input>
				<label className='text-sm font-bold text-[#757780]'>Message</label>
				<textarea
					className='my-4 p-2 bg-[#f0f0f0] text-[#757780] rounded'
					type='text'
					placeholder='message'
					name='message'
					cols='30'
					rows='10'
					required
				></textarea>
				<button className='flex self-end justify-center items-center shadow-xl mt-4 w-24 h-12 md:w-64 md:h-14 rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold text-xl md:text-2xl'>
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
