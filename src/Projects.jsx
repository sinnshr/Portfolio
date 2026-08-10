import Carousel from './animations/Carousel';

const Projects = () => {
    return (
        <section name="projects" className="relative w-full py-24 sm:py-28 flex-col">
            <div className="page-shell">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <span className="section-label">Projects</span>
                    <h2 className="section-title mt-5">Deployed & Confused.</h2>
                </div>
                
            </div>
            <div className="flex justify-center items-center">
                <Carousel
                    baseWidth={window.innerWidth < 650 ? 320 : 480}
                    autoplay={true}
                    autoplayDelay={13000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </section>
    );
};

export default Projects;