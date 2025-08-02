import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from './assets/logo.png';
// import Social from './Social'
import GlassSurface from './animations/GlassSurface';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-white z-20">
      {/* Main Menu */}
      <GlassSurface width={480}
        height={50}
        borderRadius={24}
        className="hidden md:flex cursor-target">
        <ul className="hidden md:flex">
          <li >Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </GlassSurface>

      {/* Hamburger Menu Button */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Expanded Ham Menu */}
      <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-transparent flex flex-col justify-center items-center"}>
        <ul>
          <li className="py-6 text-2xl">Home</li>
          <li className="py-6 text-2xl">About</li>
          <li className="py-6 text-2xl">Skills</li>
          <li className="py-6 text-2xl">Projects</li>
          <li className="py-6 text-2xl">Contact</li>
        </ul>
      </div>

      {/* <div> <img src={Logo} alt="Logo" className="w-12" style={{ width: "70px" }} /> </div> */}
    </div>
  )
}

export default Navbar