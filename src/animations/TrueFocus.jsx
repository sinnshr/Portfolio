import { useEffect, useRef, useState, Children } from "react";
import { motion } from "framer-motion";

const TrueFocus = ({
    children = null,
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    const childArray = Children.toArray(children);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastActiveIndex, setLastActiveIndex] = useState(null);
    const containerRef = useRef(null);
    const wordRefs = useRef([]);
    const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [animatedIndices, setAnimatedIndices] = useState([]);

    // Identify which children should be animated
    useEffect(() => {
        const indices = [];
        childArray.forEach((child, index) => {
            if (child.props && child.props.animated) {
                indices.push(index);
            }
        });
        setAnimatedIndices(indices);
    }, [children]);

    useEffect(() => {
        if (!manualMode && animatedIndices.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prev => {
                    const currentPos = animatedIndices.indexOf(prev);
                    const nextPos = (currentPos + 1) % animatedIndices.length;
                    return animatedIndices[nextPos];
                });
            }, (animationDuration + pauseBetweenAnimations) * 1000);

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, animatedIndices]);

    useEffect(() => {
        if (currentIndex === null || !wordRefs.current[currentIndex]) return;
        if (!containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex, childArray.length]);

    const handleMouseEnter = (index) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };

    return (
        <div
            className="relative flex gap-4 justify-center items-center flex-wrap"
            ref={containerRef}
        >
            {childArray.map((child, index) => {
                const isAnimated = child.props && child.props.animated;
                const isActive = index === currentIndex;

                if (isAnimated) {
                    return (
                        <span
                            key={index}
                            ref={(el) => (wordRefs.current[index] = el)}
                            className="relative text-[3rem] font-black cursor-pointer inline-block"
                            style={{
                                filter: manualMode
                                    ? isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`
                                    : isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`,
                                "--border-color": borderColor,
                                "--glow-color": glowColor,
                                transition: `filter ${animationDuration}s ease`,
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {child}
                        </span>
                    );
                }

                // Render non-animated children normally
                return (
                    <span key={index} className="text-[3rem] font-black">
                        {child}
                    </span>
                );
            })}

            {animatedIndices.length > 0 && (
                <motion.div
                    className="absolute top-0 left-0 pointer-events-none box-border border-0"
                    animate={{
                        x: focusRect.x,
                        y: focusRect.y,
                        width: focusRect.width,
                        height: focusRect.height,
                        opacity: currentIndex >= 0 ? 1 : 0,
                    }}
                    transition={{
                        duration: animationDuration,
                    }}
                    style={{
                        "--border-color": borderColor,
                        "--glow-color": glowColor,
                    }}
                >
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    ></span>
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    ></span>
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    ></span>
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    ></span>
                </motion.div>
            )}
        </div>
    );
};

export default TrueFocus;