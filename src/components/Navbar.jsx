import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import  Logo  from "../assets/DillonDickersonLogo.png"

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<nav className='fixed w-full h-[80px] flex justify-between items-center px-4 shadow-md bg-[#FFFFFF]'>
			{/* Logo */}
			<div className="flex justify-center items-center">
			<img src={Logo} alt="Dillon Dickerson"/>
			<h1 className="font-source text-xl">Dillon Dickerson</h1>
			</div>
			{/*Menu */}
			<ul className='hidden md:flex font-serif'>
				<li className='hover:text-[#6CCFF6]'>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='hover:text-[#6CCFF6]'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='hover:text-[#6CCFF6]'>
					<Link to='projects' smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className='hover:text-[#6CCFF6]'>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* Hamburger Menu */}
			<div className='md:hidden z-10' onClick={handleClick}>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/*Mobile Menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#FFFFFF] flex flex-col justify-center items-center"
				}
			>
				<li className='py-6 text-4xl hover:text-[#6CCFF6]'>
					<Link onClick={handleClick} to='home' spy={true} smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl hover:text-[#6CCFF6]'>
					<Link onClick={handleClick} to='about' spy={true} smooth={true} offset={-70} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl hover:text-[#6CCFF6]'>
					<Link onClick={handleClick} to='projects' spy={true} smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className='py-6 text-4xl hover:text-[#6CCFF6]'>
					<Link onClick={handleClick} to='contact' spy={true} smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* Socials */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0 bg-[#6CCFF6] shadow-lg rounded'>
				<ul>
					<li className='w-[80px] h-[60px] flex justify-between items-center hover:bg-[#FFFFFF] hover:rounded'>
						<a
							className='flex items-center'
							href='https://www.linkedin.com/in/joshua-dickerson-a6619953/'
							target='_blank'
							rel='noreferrer'
						>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[80px] h-[60px] flex justify-between items-center hover:bg-[#FFFFFF] hover:rounded'>
						<a
							className='flex items-center'
							href='https://github.com/DillonDickerson'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub size={30} />
						</a>
					</li>
					<li className='w-[80px] h-[60px] flex justify-between items-center hover:bg-[#FFFFFF] hover:rounded'>
						<a
							className='flex items-center'
							href='mailto:dickerson.dillon@gmail.com'
						>
							<HiOutlineMail size={30} />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
