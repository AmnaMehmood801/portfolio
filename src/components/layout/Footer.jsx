import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COLUMN 1 - BRAND */}
        <div>
          <h2 className="text-2xl font-black text-slate-900">
           Amna Mehmood
          </h2>

          <p className="text-slate-600 mt-4 leading-7 text-sm">
            Frontend Developer focused on building modern,
            responsive and clean UI using React & Tailwind CSS.
          </p>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-600 text-sm">

            <li><a href="#home" className="hover:text-cyan-500">Home</a></li>
            <li><a href="#skills" className="hover:text-cyan-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-500">Contact</a></li>

          </ul>
        </div>

        {/* COLUMN 3 - SERVICES */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-slate-600 text-sm">

            <li>Frontend Development</li>
            <li>Responsive Websites</li>
            <li>Landing Pages</li>
            <li>UI Design</li>

          </ul>
        </div>

        {/* COLUMN 4 - SOCIAL */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4">
            Stay Connected
          </h3>

          <div className="flex gap-4 text-xl text-slate-600">

            <a href="https://github.com/AmnaMehmood801" className="hover:text-cyan-500 transition">
              <FaGithub />
            </a>

            <a href="https://www.instagram.com/amna____mehmood?igsh=MTd1YmE2dHNuOGVuYw==" className="hover:text-cyan-500 transition">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/amna-mehmood-b8a477422" className="hover:text-cyan-500 transition">
              <FaLinkedin />
            </a>

          </div>

          {/* Scroll Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-6 flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-500 transition"
          >
            <FaArrowUp />
            Back to top
          </button>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-4">

        <p>
          © {new Date().getFullYear()} Amna Mehmood. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan-500">Privacy</a>
          <a href="#" className="hover:text-cyan-500">Terms</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;