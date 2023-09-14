import html from "devicon";
import {Link} from 'react-scroll';

const About = () => {
	return (
		<section name='about' className='w-full h-screen bg-[#FFFFFC] flex flex-col items-center'>
				<h1 className='text-4xl mt-12 md:mt-24 font-bold inline border-b-4 border-[#6CCFF6] md:text-6xl font-serif'>
					About Me
				</h1>
				<p className='flex text-center pt-8 px-4 font-serif md:text-xl text-[#757780]'>
					Here you will find more information about me, what I do, and current
					technologies I work with
				</p>
				<div className='w-full grid md:grid-cols-2 gap-4 px-2 md:px-0'>
					<div className='pl-4 md:mx-20'>
						<h2 className='flex justify-center pt-8 md:pt-20 font-serif font-bold text-xl md:text-2xl'>
							Who I Am
						</h2>
						<div className='flex flex-col justify-center items-center'>
							<p className='flex text-left md:leading-8 mt-4 font-serif md:text-xl text-[#757780] '>
								I am a Frontend Developer focused on building dynamic Websites
								and Web Applications with exceptional user experiences. Checkout
								some of my work in the Projects section.
							</p>
							<br></br>
							<p className='flex text-left md:leading-8 mt-4 font-serif md:text-xl text-[#757780]'>
								I'm open to job opportunities where I can contribute, learn, and
								grow. If you have a good opportunity that matches my skills and
								expereince then don't hesitate to contact me.
							</p>
							<Link to="contact" smooth={true} delay={500}>
							<button className='flex justify-center items-center shadow-xl mt-8 w-48 h-12 md:w-64 md:h-14 rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold text-xl md:text-2xl'>
								Contact
							</button>
							</Link>
						</div>
					</div>
					<div>
						<h2 className='flex justify-center pt-8 md:pt-20 font-serif font-bold text-xl md:text-2xl'>
							Skills
						</h2>
						{/* Grid container */}
						<div className='grid grid-cols-2 lg:grid-cols-4 list-none mt-8'>
							<div className='md:flex flex-col justify-center items-center'>
								<li className='text-center md:w-auto cursor-default '>
									<i className='devicon-html5-plain-wordmark colored text-[60px]'></i>
								</li>
								<br></br>
								<li className='text-center md:mt-8 md:w-auto cursor-default '>
									<i className='devicon-css3-plain-wordmark colored text-[60px]'></i>
								</li>
							</div>
							<div className='md:flex flex-col justify-center items-center'>
								<li className='text-center md:w-auto cursor-default '>
									<i className='devicon-javascript-plain colored text-[60px]'></i>
								</li>
								<br></br>
								<li className='text-center md:mt-8 md:w-auto cursor-default'>
									<i className='devicon-react-original-wordmark colored text-[60px]'></i>
								</li>
							</div>
							<div className='md:flex flex-col justify-center items-center'>
								<li className='text-center md:w-auto cursor-default'>
									<i className='devicon-git-plain-wordmark colored text-[60px]'></i>
								</li>
								<br></br>
								<li className='text-center md:mt-8 md:w-auto cursor-default'>
									<i className='devicon-figma-plain colored text-[32px]'>
										Figma
									</i>
								</li>
							</div>
							<div className='md:flex flex-col justify-center items-center'>
								<li className='text-center md:w-auto cursor-default'>
									<i className='devicon-tailwindcss-original-wordmark colored text-[72px] md:text-[96px]'></i>
								</li>
								<br></br>
								<li className='text-center md:mt-8 md:w-auto cursor-default'>
									<i className='devicon-jest-plain colored text-[60]'>Jest</i>
								</li>
							</div>
						</div>
					</div>
				</div>
		</section>
	);
};

export default About;
