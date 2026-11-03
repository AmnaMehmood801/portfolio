import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import projects from "../data/projects";
import { getScreenshots } from "../utils/projectImages";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const realScreenshots = getScreenshots(project.slug);
  const screenshotLabels = ["Home View", "Feature View", "Responsive View"];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-700 hover:text-cyan-500 transition font-medium"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
          <h1 className="text-xl font-bold text-cyan-500">Amna.</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-500 font-medium mb-2">Project</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            {project.title}
          </h1>
          <p className="text-lg text-slate-500 mt-4">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-xl font-medium hover:bg-cyan-600 transition"
            >
              <FaExternalLinkAlt />
              View Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-xl font-medium hover:border-cyan-500 hover:text-cyan-500 transition"
            >
              <FaGithub />
              View Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Screenshots</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {realScreenshots.length > 0
              ? realScreenshots.map((src, i) => (
   <div
  key={i}
  className={`relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-br ${project.gradient} flex items-center justify-center p-4`}
>
  <img
    src={src}
    alt={`${project.title} screenshot ${i + 1}`}
    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
  />
</div>
                ))
              : screenshotLabels.map((label, i) => (
                  <div
                    key={i}
                    className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-slate-200 shadow-sm`}
                  >
                    <span className="text-white font-semibold text-sm bg-black/25 px-4 py-2 rounded-full">
                      {label}
                    </span>
                  </div>
                ))}
          </div>

          {realScreenshots.length === 0 && (
            <p className="text-sm text-slate-400 mt-4">
              Placeholder previews shown above — drop real screenshots into
              src/assets/projects (see the README.txt there) to replace them.
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-10"
        >
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              About this project
            </h2>
            <p className="text-slate-600 leading-8">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <FaCheckCircle className="text-cyan-500 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-20 pt-10 border-t border-slate-200 flex items-center justify-between">
          <Link
            to={`/project/${prevProject.slug}`}
            className="text-slate-500 hover:text-cyan-500 transition font-medium"
          >
            ← {prevProject.title}
          </Link>

          <Link
            to="/#projects"
            className="text-slate-500 hover:text-cyan-500 transition font-medium"
          >
            All Projects
          </Link>

          <Link
            to={`/project/${nextProject.slug}`}
            className="text-slate-500 hover:text-cyan-500 transition font-medium"
          >
            {nextProject.title} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;