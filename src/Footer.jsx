import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full text-gray-300 flex relative overflow-hidden bg-transparent pointer-events-auto px-4 sm:px-6">
            <div className="relative text-center flex justify-center items-center w-full py-6 sm:py-8">
                <div className="text-center bg-transparent rounded-xl px-4 py-3 ">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-indigo-300 text-lg sm:text-base">Made with</span>
                        <FaHeart className="text-red-500 animate-pulse" />
                        <span className="text-indigo-300 text-lg sm:text-base">by me</span>
                    </div>
                    <p className="text-indigo-300 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;