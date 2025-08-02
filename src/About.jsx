import CountUp from './animations/CountUp';
import SplitText from "./animations/SplitText";
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
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <SplitText
                            text="About Me"
                            className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#be3e46] cursor-target"
                            delay={100}
                            duration={2}
                            ease="elastic.out(1,0.3)"
                            splitType="chars"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0}
                            rootMargin="-50px"
                            textAlign="center"
                        />
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-3xl sm:text-4xl font-medium">
                        <p className='inline'>
                            I'm a&nbsp;
                        </p>
                        <CountUp
                            from={0}
                            to={20}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text font-bold"
                            delay={1}
                        />
                        <p>year old Software Engineering Student based in Mashhad, Iran.</p>
                    </div>
                    <div className="text-2xl mb-8">
                        <div className="leading-relaxed">
                            <span>
                                I specialize in Frontend Engineering, focusing on building{' '}
                                <LayoutGroup>
                                    <motion.span className="inline-flex items-baseline" layout>
                                        <RotatingText
                                            texts={words}
                                            mainClassName="rotating-text-main text-white px-2 cursor-target"
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