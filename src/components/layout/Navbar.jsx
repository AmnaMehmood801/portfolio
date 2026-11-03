import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "about",
    "skills",
    "projects",
    "journey",
    "services",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-cyan-500">
          Amna.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((link, index) => (
            <li key={index}>

              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-500"
                className="capitalize cursor-pointer text-slate-700 hover:text-cyan-500 transition duration-300 font-medium"
              >
                {link}
              </Link>

            </li>
          ))}

        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-slate-900"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">

          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((link, index) => (
              <li key={index}>

                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="capitalize cursor-pointer text-slate-700 hover:text-cyan-500 transition font-medium"
                >
                  {link}
                </Link>

              </li>
            ))}

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;