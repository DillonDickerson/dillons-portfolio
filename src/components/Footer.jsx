import { FaGithub, FaLinkedin, FaFacebook,FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
	return (
		<footer className='w-full bg-black text-white h-30 flex flex-col justify-center items-center font-serif'>
			<section className='m-4'>
				<h1 className='text-lg text-center'>Connect With Me</h1>
				<div className="flex ">
					<li className='list-none p-2'>
						<a
                        href='https://github.com/DillonDickerson'
						target='_blank'
						rel='noreferrer'>
							<FaGithub size={20}/>
						</a>
					</li>
					<li className='list-none p-2'>
						<a
                        href='https://www.linkedin.com/in/joshua-dickerson-a6619953/'
                        target='_blank'
                        rel='noreferrer'
                        >
							<FaLinkedin size={20}/>
						</a>
					</li>
                    <li className='list-none p-2'>
						<a
                        href='https://www.facebook.com/dillon.dickerson/'
                        target='_blank'
                        rel='noreferrer'
                        >
							<FaFacebook size={20}/>
						</a>
					</li>
                    <li className='list-none p-2'>
						<a
                        href='https://twitter.com/DDickerson5252'
                        target='_blank'
                        rel='noreferrer'
                        >
							<FaTwitterSquare size={20}/>
						</a>
					</li>
				</div>
			</section>
			<div className='text-center text-sm'>
				<p>&copy; Copyright 2023. Made by Dillon Dickerson</p>
			</div>
		</footer>
	);
};

export default Footer;
