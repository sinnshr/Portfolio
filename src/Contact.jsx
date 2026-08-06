import { FaGithub, FaLinkedin } from "react-icons/fa";
// import TargetCursor from './animations/TargetCursor';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-gray-300 relative overflow-hidden bg-transparent">
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 pointer-events-none">
        {/* <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
        /> */}
        <h1 className="mt-6 text-4xl sm:text-4xl inline-flex rounded-full bg-[#5732F0]/25 px-4 py-2 mb-5 font-semibold uppercase tracking-[0.3em] text-indigo-300">
          Contact Me
        </h1>
        <div className="flex flex-row items-center gap-4 sm:gap-8 bg-slate-800/60 rounded-xl p-5 sm:px-10 sm:py-8 shadow-xl backdrop-blur-md">
          <a
            href="mailto:sajedeshirkhani22@gmail.com"
            className="pointer-events-auto px-8 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-purple-700 hover:text-purple-200 transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-purple-400 text-2xl sm:text-3xl hidden sm:flex"
          >
            Click
          </a>
          {/* Changed button for small screens */}
          <a
            href="mailto:sajedeshirkhani22@gmail.com"
            className="pointer-events-auto px-10 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-purple-700 hover:text-purple-200 transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-purple-400 text-2xl sm:text-3xl flex sm:hidden"
          >
            Tap
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
            className="pointer-events-auto px-8 py-4 rounded-lg bg-slate-500 text-white font-semibold shadow-md hover:bg-indigo-600 hover:text-purple-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400  text-2xl sm:text-3xl"
            type="button"
          >
            Copy
          </button>
        </div>
        <p className="mt-8 text-gray-400 text-lg text-center select-all">
          <a href='https://github.com/sinnshr' className="pointer-events-auto text-gray-400 hover:text-purple-300 transition duration-300 ease-in-out inline-block px-2 text-3xl"><FaGithub className="" /></a>
          <a href='https://www.linkedin.com/in/sajede-shirkhani-4268b125b' className="pointer-events-auto text-gray-400 hover:text-purple-300 transition duration-300 ease-in-out inline-block px-2 text-3xl"><FaLinkedin className="" /></a>
        </p>
      </div>
    </div>
  )
}

export default Contact;