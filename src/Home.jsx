import { MdArrowForward } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import TextType from './animations/TextType';
import GlassSurface from './animations/GlassSurface';
import Aurora from './animations/Aurora';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="home"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-[65px] sm:px-6"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Aurora
                    colorStops={["#623cea", "#576ca8", "#5227FF"]}
                    blend={1}
                    amplitude={1.0}
                    speed={0.6}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center gap-10 py-10 md:grid-cols-[1.2fr_0.8fr]">
                <div className="mx-auto max-w-3xl text-center">
                    
                    <span className="section-label border-emerald-400/30 bg-emerald-500/10 text-emerald-300 rounded-full border px-2 py-1">
                    Open to work
                    </span>
                    <p className="my-3 text-lg font-medium text-indigo-200 sm:text-xl">Hello, I&apos;m</p>
                    {/* Mobile Name Tag */}
                    <span className="block sm:hidden">
                        <TextType
                            text={"Sajede\nShirkhani"}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                            cursorClassName="cursor text-4xl font-bold"
                            className="text-5xl font-normal text-[#f4efe9] drop-shadow-lg"
                        />
                    </span>
                    {/* Desktop Name Tag */}
                    <span className="hidden sm:block">
                        <TextType
                            text={"Sajede Shirkhani"}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                            cursorClassName="cursor sm:text-5xl font-black"
                            style={{ display: 'inline-block' }}
                            className="sm:text-6xl md:text-7xl font-normal text-[#f4efe9] drop-shadow-lg"
                        />
                    </span>

                    <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-[55px]">
                        I craft <span className="text-gradient">modern web experiences</span> with clarity <br/> and intent.
                    </h1>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            to="projects"
                            duration={500}
                            smooth={true}
                            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white  transition hover:-translate-y-0.5 cursor-pointer"
                        >
                            <MdArrowForward className="mr-2" />
                            View projects
                        </Link>

                        <a
                            href="/Sajede_Shirkhani_Resume.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/10 hover:-translate-y-0.5"
                        >
                            <FiDownload className="mr-2" />
                            Download resume
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home