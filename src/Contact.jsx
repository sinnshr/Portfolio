import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TargetCursor from './animations/TargetCursor';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      const timeDiff = now - lastPosition.time;

      if (timeDiff > 50) { // Throttle updates
        const distance = Math.sqrt(
          Math.pow(e.clientX - lastPosition.x, 2) +
          Math.pow(e.clientY - lastPosition.y, 2)
        );

        const speed = distance / timeDiff; // pixels per millisecond
        setMouseSpeed(speed);

        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });

        setLastPosition({ x: e.clientX, y: e.clientY, time: now });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [lastPosition]);

  // Calculate duration factor based on mouse speed
  const getDurationFactor = () => {
    // Map speed to duration factor (slower when moving faster)
    // Speed range: 0-5 px/ms → Factor range: 1-5
    return Math.min(5, Math.max(1, 1 + mouseSpeed * 0.8));
  };

  return (
    <div className="w-full h-screen text-gray-300 z-0 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, index) => {
          const particleSize = 8 + Math.random() * 16;
          const baseDuration = 30 + Math.random() * 20;
          const duration = baseDuration * getDurationFactor();

          return (
            <div
              key={index}
              className="absolute bg-purple-400/30 rounded-full"
              style={{
                width: `${particleSize}px`,
                height: `${particleSize}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${duration}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                "--dir-x": Math.random() > 0.5 ? 1 : -1,
                "--dir-y": Math.random() > 0.5 ? 1 : -1,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
        />
        <h1 className="text-6xl sm:text-7xl font-bold mb-12 text-center text-white drop-shadow-lg tracking-tight cursor-target">
          Contact <span className="text-purple-400">Me</span>
        </h1>
        <div className="flex flex-row items-center gap-8 bg-slate-800/60 rounded-xl px-16 py-10 shadow-xl backdrop-blur-md">
          <a
            href="mailto:sajedeshirkhani22@gmail.com"
            className="px-8 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-purple-700 hover:text-purple-200 transition duration-300 ease-in-out cursor-target focus:outline-none focus:ring-2 focus:ring-purple-400 text-3xl"
          >
            Click
          </a>
          <span className="text-gray-400 font-medium text-2xl">or</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText("sajedeshirkhani22@gmail.com").then(() => {
                const alertDiv = document.createElement("div");
                alertDiv.textContent = "Email copied to clipboard!";
                alertDiv.className =
                  "fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white px-8 py-3 rounded-lg shadow-lg text-xl font-medium z-50 opacity-95 transition-opacity";
                document.body.appendChild(alertDiv);

                setTimeout(() => {
                  alertDiv.classList.add("opacity-0");
                  setTimeout(() => {
                    if (alertDiv.parentNode) {
                      alertDiv.parentNode.removeChild(alertDiv);
                    }
                  }, 300);
                }, 1500);
              });
            }}
            className="px-8 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-purple-600 hover:text-purple-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-target text-3xl"
            type="button"
          >
            Copy
          </button>
        </div>
        <p className="mt-8 text-gray-400 text-lg text-center select-all">
          <a href='https://github.com/sinnshr' className="text-gray-400 hover:text-purple-300 transition duration-300 ease-in-out inline-block px-2 text-3xl"><FaGithub className="cursor-target" /></a>
          <a href='https://www.linkedin.com/in/sajede-shirkhani-4268b125b' className="text-gray-400 hover:text-purple-300 transition duration-300 ease-in-out inline-block px-2 text-3xl"><FaLinkedin className="cursor-target" /></a>
        </p>
      </div>
    </div>
  )
}

export default Contact;