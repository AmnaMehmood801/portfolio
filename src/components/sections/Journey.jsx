import { motion } from "framer-motion";

function Journey() {

  const timeline = [
    {
      year: "2024",
      title: "Started Web Development",
      desc: "Began learning HTML, CSS, and basics of web design through academy and practice projects.",
    },
    {
      year: "2026",
      title: "JavaScript & React Learning",
      desc: "Started building interactive websites using JavaScript and React with Tailwind CSS.",
    },
    {
      year: "2026",
      title: "Frontend Projects Practice",
      desc: "Built multiple practice projects like Todo App, Nexora, Streamly and Portfolio Website.",
    },
  ];

  return (
    <section id="journey" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-500 font-medium mb-3">
            Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            My Learning Path
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >

              {/* Dot */}
              <div className="absolute -left-12 top-2 w-5 h-5 bg-cyan-500 rounded-full border-4 border-white shadow"></div>

              {/* Card */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">

                <span className="text-sm text-cyan-600 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-7">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;