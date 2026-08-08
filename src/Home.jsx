import { MdArrowForward } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
// import { useEffect, useState } from 'react';
import TextType from './animations/TextType';
import GlassSurface from './animations/GlassSurface';
// import DotGrid from './animations/DotGrid';
import Aurora from './animations/Aurora';
import { Link } from 'react-scroll';

const Home = () => {
    // const [showSubtitle, setShowSubtitle] = useState(false);

    // useEffect(() => {
    //     // Delay to start fade after typing animation
    //     const timer = setTimeout(() => setShowSubtitle(true), 3200);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div
            name="home"
            className="w-full min-h-screen flex items-center justify-center pt-10 relative overflow-hidden px-4 sm:px-6"
        >
            {/* Aurora background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* <DotGrid
                    dotSize={17}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                /> */}
                <Aurora
                    colorStops={["#623cea", "#576ca8", "#5227FF"]}
                    blend={1}
                    amplitude={1.0}
                    speed={0.6}
                />
                {/* Center Blur */}
                {/* <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        zIndex: 2,
                        borderRadius: 'inherit',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)',
                    }}
                /> */}
            </div>

            {/* Start Home Section  */}
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center text-center relative z-10">
                <p className="text-[#A8B4F8] text-3xl sm:text-3xl font-bold drop-shadow-md mb-2 sm:mb-4">Hello, I'm</p>

                <span className="block sm:hidden">
                    <TextType
                        text={"Sajede\nShirkhani"}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorClassName="cursor text-4xl font-bold"
                        className="text-5xl font-normal text-[#ddcabf] drop-shadow-lg mb-2"
                    />
                </span>
                <span className="hidden sm:block">
                    <TextType
                        text={"Sajede Shirkhani"}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorClassName="cursor sm:text-5xl font-black"
                        style={{ display: 'inline-block', minWidth: '19ch' }}
                        className="sm:text-6xl md:text-7xl font-normal text-[#ddcabf] drop-shadow-lg mb-3"
                    />
                </span>
                <p className={`text-2xl sm:text-4xl md:text-5xl font-bold text-[#5732F0] drop-shadow-md duration-[500ms]`}>I'm a Web Developer.</p>

                {/* <p className="text-[#be3e46] text-center hidden md:block">
                    <span className="text-5xl relative" style={{ right: '3.05em', top: '-0.1em' }}>^</span>
                    <span className="text-lg relative" style={{ right: '10.15em', top: '-0.2em' }}>future</span>
                </p> */}

                {/* Projects Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="text-white rounded-full py-3 text-center items-center justify-center
                    group hover:border-[#be3e46] transition-transform duration-300 hover:scale-110 hover:font-semibold mt-5">
                        <Link
                            to="projects"
                            duration={500}
                            smooth={true}
                        >
                            <GlassSurface width={190}
                                height={50}
                                borderRadius={24}>
                                <span className="group-hover:mt-2 group-hover:rotate-90 duration-300">
                                    <MdArrowForward className="mr-3" />
                                </span>
                                View Projects
                            </GlassSurface>
                        </Link>
                    </button>
                    <button className="text-white rounded-full py-3 text-center items-center justify-center
                    group hover:border-[#be3e46] transition-transform duration-300 hover:scale-110 hover:font-semibold mt-5">
                        <GlassSurface width={220}
                            height={50}
                            borderRadius={24}>
                            <span>
                                <FiDownload className="mr-3 " />
                            </span>
                            Download Resume
                            <a
                                href="/Sajede_Shirkhani_Resume.pdf"
                                download
                                aria-label="Download resume"
                                className="absolute inset-0"
                            >
                                <span className="sr-only">Download resume</span>
                            </a>
                        </GlassSurface>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home