import CircularGallery from './animations/CircularGallery';
import BlurText from "./animations/BlurText";

const Skills = () => {
    return (
        <div name="skills" className="relative overflow-hidden">
            <div className='flex justify-center relative z-10 pt-12'>
                <BlurText
                    text="Skills"
                    delay={150}
                    animateBy="chars"
                    direction="top"
                    className="text-6xl sm:text-7xl font-bold
                    text-white mt-[4rem] flex justify-center
                    border-b-4 border-yellow-600"
                    threshold="1"
                />
            </div>
            {/* Desktop Circular Gallery */}
            <div className="relative z-10 mt-[-6rem] hidden sm:block">
                <CircularGallery
                    height={480}
                    bend={6}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    fontSize="600px"
                    scrollEase={0.05}
                    scrollSpeed={0.5}
                />
            </div>
            {/* Mobile Circular Gallery */}
            <div className="relative z-10 mt-[-2rem] block sm:hidden text-2xl">
                <CircularGallery
                    height={320}
                    bend={-20}
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