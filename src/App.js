import { useRef, useEffect, useState } from 'react';
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from './Contact';
import Footer from './Footer';
import ParticlesBg from './animations/ParticlesBg';

function App() {
    const mainRef = useRef(null);
    const skillsRef = useRef(null);
    const [gradientPosition, setGradientPosition] = useState('bottom');

    useEffect(() => {
        const updatePosition = () => {
            if (mainRef.current && skillsRef.current) {
                const mainHeight = mainRef.current.scrollHeight;
                const skillsTop = skillsRef.current.offsetTop;
                const skillsHeight = skillsRef.current.offsetHeight;
                const skillsCenter = skillsTop + skillsHeight / 2;
                const positionPercentage = (skillsCenter / mainHeight) * 100;
                setGradientPosition(`50% ${positionPercentage}%`);
            }
        };
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    return (
        <div ref={mainRef} className="relative overflow-hidden min-h-screen w-full">
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${gradientPosition}, rgba(200,130,255,0.85) 0%, rgba(128,0,255,0.5) 15%, rgba(128,0,255,0.15) 30%, transparent 40%)`,
                    filter: 'blur(40px)',
                }}
            />
            <Navbar />
            <Home />
            <About />
            <div ref={skillsRef}>
                <Skills />
            </div>
            <Projects />

            {/* Shared Particles Background */}
            <ParticlesBg>
                <Contact />
                <Footer />
            </ParticlesBg>
        </div>
    );
}

export default App;