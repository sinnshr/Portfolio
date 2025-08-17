import ScrollFloat from './animations/ScrollFloat';
import Carousel from './animations/Carousel'

const Projects = () => {
    return (
        <div name="projects" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-24 py-16">
            {/* Projects Title */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center text-white text-left">
                <ScrollFloat
                    animationDuration={3}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=40%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.2}
                    containerClassName="text-4xl sm:text-5xl md:text-7xl font-bold border-b-4 border-yellow-600"
                >
                    Projects
                </ScrollFloat>
                <p className="text-base w-2/3 leading-relaxed bg-gradient-to-r from-purple-300 to-purple-200 text-transparent bg-clip-text">
                    Explore my latest projects showcasing various technologies and development skills.
                </p>
            </div>

            {/* Carousel */}
            <div className="w-2/3 flex justify-center items-center">
                <div className="relative">
                    <Carousel
                        baseWidth={480}
                        autoplay={true}
                        autoplayDelay={5000}
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