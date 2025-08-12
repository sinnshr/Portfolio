import { FaGithub, FaLinkedin } from "react-icons/fa";
import TargetCursor from './animations/TargetCursor';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-gray-300 relative overflow-hidden bg-transparent">
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 pointer-events-none">
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
            className="pointer-events-auto px-8 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-purple-700 hover:text-purple-200 transition duration-300 ease-in-out cursor-target focus:outline-none focus:ring-2 focus:ring-purple-400 text-3xl"
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
            className="pointer-events-auto px-8 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-yellow-600 hover:text-purple-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-target text-3xl"
            type="button"
          >
            Copy
          </button>
        </div>
        <p className="mt-8 text-gray-400 text-lg text-center select-all">
          <a href='https://github.com/sinnshr' className="pointer-events-auto text-gray-400 hover:text-purple-300 transition duration-300 ease-in-out inline-block px-2 text-3xl"><FaGithub className="cursor-target" /></a>
          <a href='https://www.linkedin.com/in/sajede-shirkhani-4268b125b' className="pointer-events-auto text-gray-400 hover:text-purple-300 transition duration-300 ease-in-out inline-block px-2 text-3xl"><FaLinkedin className="cursor-target" /></a>
        </p>
      </div>
    </div>
  )
}

export default Contact;