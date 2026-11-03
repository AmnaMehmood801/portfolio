// src/components/Hero/Hero.jsx

import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white px-6 pt-24 overflow-hidden relative"
    >

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-block bg-cyan-50 border border-cyan-100 text-cyan-600 px-5 py-2 rounded-full text-sm font-medium shadow-sm mb-7">
            Frontend Developer
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900">

            Creating
            <span className="text-cyan-500 block">
              Modern Websites
            </span>
            With Clean UI

          </h1>

          {/* Paragraph */}
          <p className="text-slate-600 text-lg leading-9 mt-8 max-w-xl">

            Beginner frontend developer passionate about
            building responsive, elegant, and user-friendly
            web experiences using HTML, CSS, JS, React, Tailwind CSS,
            and modern UI design principles.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl shadow-xl transition duration-300 hover:-translate-y-1"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-500 px-8 py-4 rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1"
            >
              Contact Me
            </Link>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Main Container */}
          <div className="relative w-full max-w-lg h-[550px]">

            {/* Main Card */}
            <div className="absolute top-10 left-10 w-[340px] bg-white border border-slate-200 rounded-[32px] shadow-2xl p-8 rotate-[-8deg] hover:rotate-0 transition duration-500">

              {/* Header */}
              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="text-slate-500 text-sm">
                    Skills Overview
                  </p>

                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Frontend Skills
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl font-bold">
                  {"</>"}
                </div>

              </div>

              {/* Progress Bars */}
              <div className="space-y-5">

                {/* HTML */}
                <div>

                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-slate-600">
                      HTML
                    </p>

                    <p className="text-sm text-slate-600">
                      95%
                    </p>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">
                    <div className="w-[95%] h-3 bg-orange-500 rounded-full"></div>
                  </div>

                </div>
                {/* CSS */}
                <div>

                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-slate-600">
                      CSS
                    </p>

                    <p className="text-sm text-slate-600">
                      90%
                    </p>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">
                    <div className="w-[90%] h-3 bg-blue-500 rounded-full"></div>
                  </div>

                </div>
                {/* JavaScript */}
                <div>

                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-slate-600">
                      JavaScript
                    </p>

                    <p className="text-sm text-slate-600">
                      80%
                    </p>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">
                    <div className="w-[80%] h-3 bg-yellow-400 rounded-full"></div>
                  </div>

                </div>
                 {/* React */}
                <div>

                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-slate-600">
                      React
                    </p>

                    <p className="text-sm text-slate-600">
                      80%
                    </p>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">
                    <div className="w-[80%] h-3 bg-purple-400 rounded-full"></div>
                  </div>

                </div>
                {/* Tailwind */}
                <div>

                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-slate-600">
                      Tailwind CSS
                    </p>

                    <p className="text-sm text-slate-600">
                      88%
                    </p>
                  </div>

                  <div className="w-full h-3 bg-slate-100 rounded-full">
                    <div className="w-[88%] h-3 bg-cyan-500 rounded-full"></div>
                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute bottom-0 right-0 bg-white border border-slate-200 rounded-[28px] shadow-xl p-6 w-[240px] hover:-translate-y-2 transition duration-500">

              <p className="text-slate-500 text-sm mb-3">
                Current Focus
              </p>

              <h3 className="text-2xl font-black text-slate-900 leading-snug">
                Modern UI &
                Responsive Design
              </h3>

              <div className="flex gap-2 mt-5 flex-wrap">

                <span className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm">
                  React
                </span>

                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                  Tailwind
                </span>

              </div>

            </div>

            {/* Blur Circle */}
            <div className="absolute top-0 right-16 w-24 h-24 rounded-full bg-cyan-100 blur-2xl"></div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;