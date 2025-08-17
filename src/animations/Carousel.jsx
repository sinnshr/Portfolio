import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { FaPhp, FaReact, FaChevronLeft, FaChevronRight, faEthereum, FaEthereum } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiSolidity } from "react-icons/si";

const DEFAULT_ITEMS = [
    {
        title: "Vira Online Bookstore",
        description: "A web-based bookstore management system built with PHP, JavaScript, and Tailwind CSS. Users can browse a collection of books, add books to their cart, and place orders seamlessly.",
        id: 1,
        icons: [
            { icon: FaPhp, color: "text-blue-500" },
            { icon: SiJavascript, color: "text-yellow-400 rounded" },
            { icon: SiTailwindcss, color: "text-cyan-400" }
        ],
        githubUrl: "https://github.com/sinnshr/Vira"
    },
    {
        title: "Focus App",
        description: "A productivity application developed using React and Tailwind CSS. It enables users to manage tasks, schedule events on a calendar, and boost focus with an integrated Pomodoro timer.",
        id: 2,
        icons: [
            { icon: FaReact, color: "text-blue-400" },
            { icon: SiTailwindcss, color: "text-cyan-400" }
        ],
        githubUrl: "https://github.com/sinnshr/Focus-App"
    },
    {
        title: "Fund Me",
        description: "A decentralized crowdfunding platform powered by Solidity and Ethereum. Users can create fundraising campaigns and contribute to projects securely on the blockchain.",
        id: 3,
        icons: [
            { icon: SiSolidity, color: "text-gray-500" },
            { icon: FaEthereum, color: "text-indigo-500" }
        ],
        githubUrl: "https://github.com/sinnshr/Foundry-FundMe"
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    return (
        <div className="relative flex items-center">
            {/* Left Navigation Button */}
            <button
                onClick={() => {
                    if (loop && currentIndex === 0) {
                        setCurrentIndex(items.length - 1);
                    } else {
                        setCurrentIndex((prev) => Math.max(prev - 1, 0));
                    }
                }}
                className={`absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 group ${!loop && currentIndex === 0
                    ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                    : 'text-white/80 hover:text-white hover:scale-105 cursor-target'
                    }`}
                disabled={!loop && currentIndex === 0}
            >
                <FaChevronLeft
                    className={`w-9 h-9 transition-transform duration-200 ${!loop && currentIndex === 0 ? '' : 'group-hover:scale-110'}`}
                />
            </button>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className={`relative overflow-hidden p-4 ${round
                    ? "rounded-full border border-white"
                    : "rounded-[24px] border-2 border-[#414040] shadow-2xl backdrop-blur-3xl"
                    }`}
                style={{
                    width: `${baseWidth}px`,
                    ...(round && { height: `${baseWidth}px` }),
                }}
            >
                <motion.div
                    className="flex"
                    drag="x"
                    {...dragProps}
                    style={{
                        width: itemWidth,
                        gap: `${GAP}px`,
                        perspective: 1000,
                        perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                        x,
                    }}
                    onDragEnd={handleDragEnd}
                    animate={{ x: -(currentIndex * trackItemOffset) }}
                    transition={effectiveTransition}
                    onAnimationComplete={handleAnimationComplete}
                >
                    {carouselItems.map((item, index) => {
                        const range = [
                            -(index + 1) * trackItemOffset,
                            -index * trackItemOffset,
                            -(index - 1) * trackItemOffset,
                        ];
                        const outputRange = [90, 0, -90];
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const rotateY = useTransform(x, range, outputRange, { clamp: false });
                        return (
                            <motion.div
                                key={index}
                                className={`relative shrink-0 flex flex-col ${round
                                    ? "items-center justify-center text-center bg-[#060010] border-0"
                                    : "items-start justify-between bg-transparent border-2 border-[#5f5f5f] rounded-[16px] shadow-lg"
                                    } overflow-hidden cursor-grab active:cursor-grabbing hover:shadow-xl transition-shadow duration-300`}
                                style={{
                                    width: itemWidth,
                                    height: round ? itemWidth : "345px",
                                    rotateY: rotateY,
                                    ...(round && { borderRadius: "50%" }),
                                }}
                                transition={effectiveTransition}
                            >
                                {/* Icons Section */}
                                <div className={`${round ? "p-0 m-0" : "p-5 pb-2"}`}>
                                    <div className="flex space-x-3 justify-center">
                                        {item.icons.map((iconData, iconIndex) => {
                                            const IconComponent = iconData.icon;
                                            return (
                                                <IconComponent
                                                    key={iconIndex}
                                                    className={`text-3xl ${iconData.color} hover:scale-110 transition-transform duration-200 cursor-pointer mb-4`}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-5 pt-2 pb-16">
                                    <div className="mb-3 font-bold text-[1.8rem] text-white">
                                        {item.title}
                                    </div>
                                    <p className="text-base text-gray-300 leading-relaxed">{item.description}</p>
                                </div>

                                {/* Button Section */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                    <a
                                        href={item.githubUrl}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 mb-4 bg-yellow-600 text-white rounded-full font-normal hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105 shadow-lg cursor-target"
                                    >
                                        View On GitHub
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                <div
                    className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-2/3" : ""
                        }`}
                >
                    <div className="mt-4 flex w-[150px] justify-between px-8">
                        {items.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                    ? round
                                        ? "bg-white"
                                        : "bg-[#9228d8]"
                                    : round
                                        ? "bg-[#555]"
                                        : "bg-[#9b9b9b] opacity-50"
                                    }`}
                                animate={{
                                    scale: currentIndex % items.length === index ? 1.5 : 1,
                                }}
                                onClick={() => setCurrentIndex(index)}
                                transition={{ duration: 0.15 }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Navigation Button */}
            <button
                onClick={() => {
                    if (loop && currentIndex === items.length - 1) {
                        setCurrentIndex(0);
                    } else {
                        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
                    }
                }}
                className={`absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 group ${!loop && currentIndex === carouselItems.length - 1
                    ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                    : 'text-white/80 hover:text-white hover:scale-105 cursor-target'
                    }`}
                disabled={!loop && currentIndex === carouselItems.length - 1}
            >
                <FaChevronRight
                    className={`w-9 h-9 transition-transform duration-200 ${!loop && currentIndex === carouselItems.length - 1 ? '' : 'group-hover:scale-110'}`}
                />
            </button>
        </div>
    );
}