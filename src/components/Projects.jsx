

const Projects = () => {
	return (
		<section name='projects' className='bg-white w-full lg:h-screen font-serif'>
			<div className='flex flex-col items-center w-full'>
				<h1 className='text-4xl font-bold inline border-b-4 border-[#6CCFF6] lg:text-6xl mt-36 lg:mt-24'>
					Projects
				</h1>
				<p className='flex text-center pt-4 font-serif md:text-xl text-[#757780]'>
					Here are some of my recent projects
				</p>
			</div>
			<div className='flex flex-col lg:mx-72'>
				<div className='grid grid-cols-2 gap-8 mt-8 pb-4 shadow-xl rounded mx-4'>
					<h1 className='flex justify-center items-center'>Image</h1>
					<div>
						<p>Project Description</p>
						<p className="text-[#757780]">Tech used: HTML, CSS, React</p>
						<div className='grid grid-cols-2'>
							<button className='flex justify-center items-center shadow-xl mt-4 w-16 md:w-24 h-12 rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold text-md md:text-xl '>
								Demo
							</button>
							<button className='flex justify-center items-center shadow-xl mt-4 w-16 md:w-24 h-12  rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl'>
								Code
							</button>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-8 mt-24 pb-4 shadow-xl rounded mx-4'>
					<h1 className='flex justify-center items-center'>Image</h1>
					<div>
						<p>Project Description</p>
						<p className="text-[#757780]">Tech used: HTML, CSS, React</p>
						<div className='grid grid-cols-2'>
							<button className='flex justify-center items-center shadow-xl mt-4 w-16 md:w-24 h-12 rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl '>
								Demo
							</button>
							<button className='flex justify-center items-center shadow-xl mt-4 w-16 md:w-24 h-12 rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl'>
								Code
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
