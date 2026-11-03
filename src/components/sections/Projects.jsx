import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import projects from "../../data/projects";
import { getCoverImage } from "../../utils/projectImages";

function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-slate-50">
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
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            My Recent Work
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Click on any project to see screenshots, details and links.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => {
            const coverImage = getCoverImage(project.slug);
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* Whole card is clickable -> detail page */}
              <Link to={`/project/${project.slug}`} className="block">

                {/* Image / gradient banner */}
                <div
                  className={`relative h-64 ${coverImage ? "" : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center overflow-hidden`}
                >
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-white/90 text-4xl font-black tracking-wide drop-shadow-sm">
                      {project.title}
                    </span>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition duration-300 flex items-center gap-2 text-white font-semibold text-sm bg-black/40 px-4 py-2 rounded-full">
                      View Details <FaArrowRight size={12} />
                    </span>
                  </div>
                </div>

                <div className="p-6 pb-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mt-3 leading-7">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Buttons (kept outside the Link so they still open external sites directly) */}
              <div className="flex gap-4 px-8 pb-8 pt-2">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-xl hover:border-cyan-500 hover:text-cyan-500 transition text-sm"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition text-sm"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

                <Link
                  to={`/project/${project.slug}`}
                  className="ml-auto flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-cyan-500 transition text-sm font-medium"
                >
                  Details <FaArrowRight size={12} />
                </Link>

              </div>

            </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Projects;
