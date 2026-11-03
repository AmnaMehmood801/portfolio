import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-600" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-slate-800" },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-medium mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-center"
            >

              <div className={`text-5xl mb-4 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;