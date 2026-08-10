import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-4 pt-4 text-white">
      <div className="page-shell flex items-center justify-center">
        <nav className="hidden items-center rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 shadow-[0_0_30px_rgba(99,102,241,0.12)] backdrop-blur-xl md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={() => setNav(!nav)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-100 shadow-lg backdrop-blur-md md:hidden"
        aria-label="Toggle navigation"
      >
        {!nav ? <FaBars size={18} /> : <FaTimes size={18} />}
      </button>

      <div className={nav ? "fixed inset-0 z-40 flex items-center justify-center bg-[#050816]/90 backdrop-blur-xl md:hidden" : "hidden"}>
        <ul className="space-y-7 text-center text-2xl text-slate-100">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
                className="transition hover:text-indigo-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center justify-center gap-4 pt-4 text-3xl text-slate-300">
            <a href="mailto:sajedeshirkhani22@gmail.com" aria-label="Email"><BiLogoGmail /></a>
            <a href="https://github.com/sinnshr" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sajede-shirkhani-4268b125b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar