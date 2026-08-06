import CircularGallery from './animations/CircularGallery';

const Skills = () => {
    return (
        <div name="skills" className="relative mx-auto w-full h-svh max-w-6xl rounded-[2rem] px-5 py-10 sm:px-10 flex-col justify-center items-center">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center mt-[10%]">
                <h2 className="mt-6 text-4xl sm:text-3xl inline-flex rounded-full bg-[#5732F0]/25 px-4 py-2 mb-5 font-semibold uppercase tracking-[0.3em] text-indigo-300">
                    Technologies I Work With
                </h2>

            </div>
            {/* Desktop Circular Gallery */}
            <div className="relative z-10 hidden sm:block">
                <CircularGallery
                    height={170}
                    bend={0}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    fontSize="600px"
                    scrollEase={0.05}
                    scrollSpeed={0.4}
                />
            </div>
            {/* Mobile Circular Gallery */}
            <div className="relative z-10 mt-[-2rem] block sm:hidden text-2xl">
                <CircularGallery
                    height={320}
                    bend={0}
                    textColor="#ffffff"
                    borderRadius={0.08}
                    fontSize="750px"
                    scrollEase={1}
                    scrollSpeed={2}
                />
            </div>
        </div>
    );
};

export default Skills;