import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Social = () => {
    return (
        <div className="fixed flex-col top-[25%] left-0 hidden md:block">
            {/* Social Media List */}
            <ul>
                <li className="w-[150px] h-[40px] ml-[-100px] pt-[5px] pr-2 justify-between items-center rounded hover:ml-[-10px] duration-300 bg-blue-500">
                    <a href="/" className="flex justify-between items-center w-full text-white">Linkedin <FaLinkedin size={30} className="rounded" /></a>
                </li>
                <li className="w-[150px] h-[40px] ml-[-100px] pt-[5px] pr-2 justify-between items-center rounded hover:ml-[-10px] duration-300 bg-gray-700">
                    <a href="/" className="flex justify-between items-center w-full text-white">Github <FaGithub size={30} className="rounded" /></a>
                </li>
                <li className="w-[150px] h-[40px] ml-[-100px] pt-[5px] pr-2 justify-between items-center rounded hover:ml-[-10px] duration-300 bg-[#820BFB]">
                    <a href="/" className="flex justify-between items-center w-full text-white">Instagram <FaInstagram size={30} className="rounded" /></a>
                </li>
                <li className="w-[150px] h-[40px] ml-[-100px] pt-[5px] pr-2 justify-between items-center rounded hover:ml-[-10px] duration-300 bg-[#EA4335]">
                    <a href="/" className="flex justify-between items-center w-full text-white">Email <HiOutlineMail size={30} className="rounded" /></a>
                </li>
                <li className="w-[150px] h-[40px] ml-[-100px] pt-[5px] pr-2 justify-between items-center rounded hover:ml-[-10px] duration-300 bg-lime-700">
                    <a href="/" className="flex justify-between items-center w-full text-white">CV <BsFillPersonLinesFill size={30} className="rounded" /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social