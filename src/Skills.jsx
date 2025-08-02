import CircularGallery from './animations/CircularGallery';
import BlurText from "./animations/BlurText";

const Skills = () => {
    return (
        <div name="skills" className="relative overflow-hidden">
            <div className='flex justify-center relative z-10 '>
                <BlurText
                    text="Skills"
                    delay={150}
                    animateBy="chars"
                    direction="top"
                    className="text-4xl sm:text-7xl font-bold
                    text-white mb-[-6rem] flex justify-center
                    border-b-4 border-[#be3e46] pb-0 pt-9"
                    threshold="1"
                />
            </div>
            <div style={{ height: '500px', position: 'relative' }} className='mb-0 pb-0 relative z-10'>
                <CircularGallery
                    height={500}
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