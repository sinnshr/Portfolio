import ScrollFloat from './animations/ScrollFloat';
import ScrollStack, { ScrollStackItem } from './animations/ScrollStack';
import { FaPhp, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiSolidity } from "react-icons/si";

const Projects = () => {
    return (
        <div name="projects" className="w-full h-screen flex items-center justify-center px-12 sm:px-24">
            <div className="w-3/5 h-[80vh] flex items-center justify-center relative">
                <div className="w-full h-full relative z-10 rounded-3xl border-gray-500 border-opacity-70 cursor-target">
                    <div className="pointer-events-none absolute inset-0 z-0 transition duration-300" />
                    {/* "The End" text positioned below stack items */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
                        <span className="text-4xl font-bold text-gray-500 select-none opacity-60">
                            The End :)
                        </span>
                    </div>
                    <ScrollStack className="w-full h-full scrollbar-hide bg-transparent relative z-10" blurAmount={1}>
                        {/* Vira Bookstore */}
                        <ScrollStackItem backgroundColor="#FFF7F3">
                            <div className="relative h-full flex flex-col justify-center items-center">
                                <div className="w-full max-w-lg px-10 py-20 gap-4">
                                    <h2 className='text-xl sm:text-3xl font-bold mb-2'>Vira Online Bookstore</h2>
                                    <p className='text-sm sm:text-lg text-gray-700 pt-3 mb-6'>
                                        A web-based bookstore management system built with PHP, JavaScript, and Tailwind CSS. Users can browse a collection of books, add books to their cart, and place orders seamlessly.
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex space-x-4">
                                            <FaPhp className="text-4xl text-yellow-600" />
                                            <SiJavascript className="text-4xl text-yellow-600" />
                                            <SiTailwindcss className="text-4xl text-yellow-600" />
                                        </div>
                                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-full">
                                            View On GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                        {/* Focus App */}
                        <ScrollStackItem backgroundColor="#FFF7F3">
                            <div className="relative h-full flex flex-col justify-center items-center">
                                <div className="w-full max-w-lg px-12 py-20 gap-4 bg-transparent">
                                    <h2 className='text-xl sm:text-3xl font-bold mb-2'>Focus App</h2>
                                    <p className='text-sm sm:text-lg text-gray-700 pt-3 mb-6'>
                                        A productivity application developed using React and Tailwind CSS. It enables users to manage tasks, schedule events on a calendar, and boost focus with an integrated Pomodoro timer.
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex space-x-4">
                                            <FaReact className="text-4xl text-yellow-600" />
                                            <SiTailwindcss className="text-4xl text-yellow-600" />
                                        </div>
                                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-full">
                                            View On GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                        {/* Fund Me */}
                        <ScrollStackItem backgroundColor="#FFF7F3">
                            <div className="relative h-full flex flex-col justify-center items-center">
                                <div className="w-full max-w-lg px-12 py-20 gap-4 bg-transparent">
                                    <h2 className='text-xl sm:text-3xl font-bold mb-2'>Fund Me</h2>
                                    <p className='text-sm sm:text-lg text-gray-700 pt-3 mb-6'>
                                        A decentralized crowdfunding platform powered by Solidity and Ethereum. Users can create fundraising campaigns and contribute to projects securely on the blockchain.
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <div>
                                            <SiSolidity className="text-4xl text-yellow-600" />
                                        </div>
                                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-full">
                                            View On GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    </ScrollStack>
                </div>
            </div>

            {/* Right: Evenly spaced */}
            <div className="w-2/5 h-[80vh] flex flex-col items-center justify-center text-white">
                <ScrollFloat
                    animationDuration={3}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=40%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.2}
                    containerClassName="text-4xl sm:text-7xl font-bold"
                >
                    Projects
                </ScrollFloat>
                <ScrollFloat
                    animationDuration={2}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=30%"
                    scrollEnd="bottom bottom-=30%"
                    stagger={0.2}
                    containerClassName="-mt-5 opacity-50"
                    textClassName="text-lg text-yellow-400"
                >
                    ← Hover & scroll to reveal more
                </ScrollFloat>
            </div>
        </div>
    );
};

export default Projects;