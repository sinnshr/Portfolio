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
        className="hidden md:flex cursor-target">
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
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Expanded Ham Menu */}
      <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#060010] flex flex-col justify-center items-center"}>
        <ul>
          <li className="py-6 text-2xl cursor-target"><Link
            to="home"
            duration={500}
            smooth={true}
          >
            Home
          </Link></li>
          <li className="py-6 text-2xl cursor-target"><Link
            to="about"
            duration={500}
            smooth={true}
          >
            About
          </Link></li>
          <li className="py-6 text-2xl cursor-target"><Link
            to="skills"
            duration={500}
            smooth={true}
          >
            Skills
          </Link></li>
          <li className="py-6 text-2xl cursor-target"><Link
            to="projects"
            duration={500}
            smooth={true}
          >
            Projects
          </Link></li>
          <li className="py-6 text-2xl cursor-target"><Link
            to="contact"
            duration={500}
            smooth={true}
          >
            Contact
          </Link></li>
        </ul>
      </div>

      {/* <div> <img src={Logo} alt="Logo" className="w-12" style={{ width: "70px" }} /> </div> */}
    </div>
  )
}

export default Navbar