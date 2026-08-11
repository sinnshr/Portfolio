import CircularGallery from './animations/CircularGallery';

const Skills = () => {
    return (
        <div name="skills" className="relative mx-auto w-full h-svh max-w-6xl rounded-[2rem] px-5 pb-10 pt-[8rem] sm:px-10 flex-col justify-center items-center">
            <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="section-label">Skills</span>
                <h2 className="section-title mt-5">Div-ing Into My Stack.</h2>
            </div>
            {/* Desktop Circular Gallery */}
            <div className="relative z-10 hidden sm:block">
                <CircularGallery
                    height={170}
                    bend={0}
                    textColor="#d1d5db"
                    borderRadius={0.05}
                    fontSize="600px"
                    scrollEase={0.05}
                    scrollSpeed={0.4}
                />
            </div>
            {/* Mobile Circular Gallery */}
            <div className="relative z-10 mt-[-2rem] block sm:hidden text-2xl">
                <CircularGallery
                    height={150}zz
                    bend={0}
                    textColor="#d1d5db"
                    borderRadius={0.08}
                    fontSize="750px"
                    scrollEase={1}
                    scrollSpeed={0.4}
                />
            </div>
        </div>
    );
};

export default Skills;