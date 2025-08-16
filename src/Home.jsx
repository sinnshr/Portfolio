import { MdArrowForward } from "react-icons/md";
import TextType from './animations/TextType';
import GlassSurface from './animations/GlassSurface';
import DotGrid from './animations/DotGrid';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="home"
            className="w-full min-h-screen flex items-center justify-center pt-10 relative overflow-hidden"
        >
            {/* DotGrid background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <DotGrid
                    dotSize={17}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
                {/* Center Blur */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        zIndex: 2,
                        borderRadius: 'inherit',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
                    }}
                />
            </div>

            {/* Start Home Section  */}
            <div className="max-w-[1000px] mx-auto pl-10 flex flex-col justify-center text-center relative z-10">
                <p className="text-[#be3e46] text-3xl font-bold drop-shadow-md">Hi, I'm</p>
                <TextType
                    text={"SAJEDE SHIRKHANI"}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="cursor text-5xl font-bold"
                    style={{ display: 'inline-block', minWidth: '19ch' }}
                    className="text-4xl sm:text-7xl font-normal text-[#ddcabf] name drop-shadow-lg"
                />
                <p className="text-xl sm:text-5xl font-bold text-yellow-600 drop-shadow-md">I'm a Frontend Developer.</p>
                <p className="text-[#be3e46] text-center">
                    <span className="text-5xl relative" style={{ right: '3.05em', top: '-0.1em' }}>^</span>
                    <span className="text-lg relative" style={{ right: '10.15em', top: '-0.2em' }}>future</span>
                </p>

                {/* Projects Button */}
                <div>
                    <button className="text-white rounded-full py-3 text-center items-center justify-center
                    group hover:border-[#be3e46] transition-transform duration-300 hover:scale-110 hover:font-semibold cursor-target mt-[-4rem]">
                        <Link
                            to="projects"
                            duration={500}
                            smooth={true}
                        >
                            <GlassSurface width={200}
                                height={50}
                                borderRadius={24}>
                                View Projects
                                <span className="group-hover:-mt-2 group-hover:rotate-90 duration-300">
                                    <MdArrowForward className="ml-3 " />
                                </span>
                            </GlassSurface>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home