import {Link} from 'react-scroll';


const Home = () => {
  return (
    <section name='home' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <h1 className='flex justify-center items-center text-xl md:text-3xl font-bold lg:text-5xl font-serif uppercase'>Hey, I'm Dillon Dickerson</h1>
            <p className='flex text-center font-serif text-md md:leading-loose md:text-2xl md:mt-10 text-[#757780] mt-6 '>A Frontend Developer focused on building dynamic Websites and Web Applications with exceptional user experiences</p>
            <div className='flex justify-center items-center'>
                <Link to="projects" smooth={true} duration={500}>
                <button
                className='flex justify-center items-center shadow-xl mt-8 w-48 h-12 md:w-64 md:h-14 rounded transition ease-in-out delay-100 hover:scale-110 bg-[#6CCFF6] text-white font-serif font-bold text-xl md:text-2xl'>
                    Projects
                </button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Home