import  CryptoScan  from "../assets/CryptoScan.png";
import PromptShare from "../assets/PromptShare.png";
import PurpleChipCapital from "../assets/PurpleChipCapital.png"

const Projects = () => {
	return (
		<section name='projects' className='bg-white w-full lg:h-full font-serif'>
			<div className='flex flex-col items-center w-full'>
				<h1 className='text-4xl font-bold inline border-b-4 border-[#6CCFF6] lg:text-6xl mt-36 lg:mt-24'>
					Projects
				</h1>
				<p className='flex text-center pt-4 font-serif md:text-xl text-[#757780]'>
					Here are some of my recent projects
				</p>
			</div>
			<div className='flex flex-col lg:mx-72'>
				<div className='flex flex-col md:grid grid-cols-2 gap-8 mt-8 pb-4 shadow-xl rounded mx-4'>
				<img src={CryptoScan} alt="Crypto Scan" className=" p-4 items-center justify-center"/>
					<div className="px-2">
						<p>
							This project is a dynamic website that provides comprehensive
							information on various cryptocurrencies. It features a section
							that displays the top trending coins and allows users to sort
							cryptocurrencies by market capitalization. By clicking on each
							coin, users can access detailed information including a
							description of the coin, 24-hour and 1-hour price changes, and
							interactive price graphs. The graphs are adjustable to show
							historical price data over different periods: 1 year, 120 days, 90
							days, 60 days, and 30 days.
						</p>
						<p className='text-[#757780] mt-2'>
							Tech used: Vite, TailwindCSS, Javascript, React, Canva, API
						</p>
						<div className='grid grid-cols-2'>
							<button className='flex justify-center items-center shadow-xl mt-4 w-52 md:w-24 h-12 rounded md:transition ease-in-out delay-100 md:hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold text-md md:text-xl '>
								Demo
							</button>
							<button className='flex justify-center items-center shadow-xl mt-4 w-52 md:w-24 h-12  rounded md:transition ease-in-out delay-100 md:hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl'>
								Code
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 gap-8 mt-24 pb-4 shadow-xl rounded mx-4'>
				<img src={PromptShare} alt="Prompt Share" className="p-4 items-center justify-center"/>
					<div className="px-2">
						<p>
							Promptshare is a platform designed for users to create, edit, and
							share prompts for generative AI like ChatGPT. Users can easily
							sign up using their Google account. Logged-in users can create,
							edit, and share prompts, as well as like prompts created by
							others. Non-logged-in users can still view all available prompts
							in the database. Each user's account features a personal dashboard
							where they can see all the prompts they have created and liked.
						</p>
						<p className='text-[#757780] mt-2'>
							Tech used: Nextjs, React, Javascript, TailwindCSS, MongoDB, Canva, API
						</p>
						<div className='grid grid-cols-2'>
							<button className='flex justify-center items-center shadow-xl mt-4 w-52 md:w-24 h-12 rounded md:transition ease-in-out delay-100 md:hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl '>
								Demo
							</button>
							<button className='flex justify-center items-center shadow-xl mt-4 w-52 md:w-24 h-12 rounded md:transition ease-in-out delay-100 md:hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl'>
								Code
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:grid grid-cols-2 gap-8 mt-24 pb-4 shadow-xl rounded mx-4'>
				<img src={PurpleChipCapital} alt="Purple Chip Capital" className="p-4 items-center justify-center"/>
					<div className="px-2">
						<p>
							For Purple Chip Capital, a hedge fund, I developed a website
							adhering to SEC regulations. Potential clients can access the site
							directly or via a QR code. Upon arrival, they must confirm if they
							are accredited investors. Accredited investors are directed to a
							form to fill out their information. After submission, an API call
							sends their details to a CRM, and the client receives an automated
							email.{" "}
						</p>
						<p className='text-[#757780] mt-2'>Tech used: Nextjs, React, Javascript, TailwindCSS, React, API</p>
						<div className='grid grid-cols-2'>
							<button className='flex justify-center items-center shadow-xl mt-4 w-52 md:w-24 h-12 rounded md:transition ease-in-out delay-100 md:hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl '>
								Demo
							</button>
							<button className='flex justify-center items-center shadow-xl mt-4 w-52 md:w-24 h-12 rounded md:transition ease-in-out delay-100 md:hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold md:text-xl'>
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
