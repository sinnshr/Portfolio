import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from './assets/logo.png';
// import Social from './Social'
import GlassSurface from './animations/GlassSurface';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-transparent text-white z-20">
      {/* Main Menu */}
      <GlassSurface width={480}
        height={50}
        borderRadius={24}
        className="hidden md:flex cursor-target cursor-pointer">
        <ul className="hidden md:flex">
          <li >
            {/* react-scroll Component */}
            <Link
              to="home"
              duration={500}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              duration={500}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              duration={500}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              duration={500}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              duration={500}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </GlassSurface>

      {/* Hamburger Menu Button */}
      <div
        onClick={handleClick}
        className="md:hidden z-20 cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        style={{ position: 'fixed', top: '1rem', left: '1.2rem' }}
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Expanded Ham Menu */}
      <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#060010]/95 backdrop-blur-md flex flex-col justify-center items-center z-5 text-center"}>
        <ul className="space-y-8">
          <li className="py-4 text-2xl">
            <Link
              to="home"
              duration={500}
              smooth={true}
              onClick={() => setNav(false)}
            >
              Home
            </Link>
          </li>
          <li className="py-4 text-2xl">
            <Link
              to="about"
              duration={500}
              smooth={true}
              onClick={() => setNav(false)}
            >
              About
            </Link>
          </li>
          <li className="py-4 text-2xl">
            <Link
              to="skills"
              duration={500}
              smooth={true}
              onClick={() => setNav(false)}
            >
              Skills
            </Link>
          </li>
          <li className="py-4 text-2xl">
            <Link
              to="projects"
              duration={500}
              smooth={true}
              onClick={() => setNav(false)}
            >
              Projects
            </Link>
          </li>
          <li className="py-4 text-2xl">
            <Link
              to="contact"
              duration={500}
              smooth={true}
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* <div> <img src={Logo} alt="Logo" className="w-12" style={{ width: "70px" }} /> </div> */}
    </div>
  )
}

export default Navbar