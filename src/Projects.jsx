import ScrollFloat from './animations/ScrollFloat';
import Carousel from './animations/Carousel'

const Projects = () => {
    return (
        <div name="projects" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-2 sm:px-6 lg:px-12 xl:px-24 py-16">
            {/* Projects Title */}
            <div className="w full md:w-1/3 h-full flex flex-col items-center justify-center text-white text-left ">
                <p className='mb-8 lg:mb-5 whitespace-nowrap mt-6 text-4xl sm:text-4xl inline-flex rounded-full bg-[#5732F0]/25 px-4 py-2 font-semibold uppercase tracking-[0.3em] text-indigo-300'>Projects</p>
                <p className="text-xl w-2/3 bg-gradient-to-r from-purple-300 to-purple-200 text-transparent bg-clip-text hidden lg:flex">
                    Explore my latest projects showcasing various technologies and development skills.
                </p>
            </div>

            {/* Carousel */}
            <div className="w-full sm:w-2/3 flex justify-center items-center">
                <div className="relative">
                    <Carousel
                        baseWidth={window.innerWidth < 640 ? 320 : 480}
                        autoplay={true}
                        autoplayDelay={10000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;