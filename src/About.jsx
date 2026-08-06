import CountUp from './animations/CountUp';
// import SplitText from "./animations/SplitText";
import RotatingText from './animations/RotatingText';
import { motion, LayoutGroup } from 'framer-motion'; // Add LayoutGroup

const words = [
    "responsive",
    "smooth",
    "captivating",
    "seamless",
];
const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen text-gray-300 z-0 relative overflow-hidden"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] grid grid-cols-2 gap-8">
                    <div className="mt-6 text-4xl sm:text-4xl inline-flex rounded-full bg-[#5732F0]/25 px-4 py-2 font-semibold uppercase tracking-[0.3em] text-indigo-200 text-center">About Me</div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-[45px] sm:text-[50px] font-medium leading-[1.25]">
                        <span className="inline-flex items-baseline">
                            <span>
                                I'm a&nbsp;
                            </span>
                            <CountUp
                                from={0}
                                to={21}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text font-bold whitespace-nowrap"
                                delay={1}
                            />
                            <span className='whitespace-nowrap'>&nbsp;year old</span>
                        </span>
                        <p className='text-[40px]'>student based in</p>
                        <p className='text-4xl'>Mashhad, Iran.</p>
                    </div>
                    <div className="text-[1.5rem] sm:text-[25px] mb-8">
                        <div className="leading-[1.55]">
                            <span>
                                I'm studying Web Development and enjoy building{' '}
                                <LayoutGroup>
                                    <motion.span className="inline-flex items-baseline" layout>
                                        <RotatingText
                                            texts={words}
                                            mainClassName="rotating-text-main text-white px-2 "
                                            staggerFrom={"last"}
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "-120%" }}
                                            staggerDuration={0.025}
                                            splitLevelClassName="rotating-text-split"
                                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                            rotationInterval={2000}
                                        />
                                    </motion.span>
                                </LayoutGroup>{' '}
                                web experiences through clean code and thoughtful design.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About