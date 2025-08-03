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
                    className="text-4xl sm:text-7xl font-bold
                    text-white mt-[4rem] flex justify-center
                    border-b-4 border-yellow-600"
                    threshold="1"
                />
            </div>
            <div className='relative z-10 mt-[-6rem]'>
                <CircularGallery
                    height={480}
                    bend={6}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    scrollSpeed={0.5}
                />
            </div>
        </div>
    );
};

export default Skills;