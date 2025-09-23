import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full text-gray-300 flex relative overflow-hidden bg-transparent pointer-events-auto px-4 sm:px-6">
            <div className="relative text-center flex justify-center items-center w-full py-6 sm:py-8">
                <div className="text-center bg-transparent rounded-xl px-4 py-3 cursor-target">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-gray-400 text-lg sm:text-base">Made with</span>
                        <FaHeart className="text-red-500 animate-pulse" />
                        <span className="text-gray-400 text-lg sm:text-base">by me</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2025 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;