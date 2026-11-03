import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaReact } from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Responsive Website Design",
      desc: "Modern and fully responsive websites for all screen sizes.",
    },
    {
      icon: <FaReact />,
      title: "Frontend Development",
      desc: "Building fast and interactive web applications using HTML, CSS, JS and React.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Landing Pages",
      desc: "High converting and visually appealing landing pages.",
    },
    {
      icon: <FaMobileAlt />,
      title: "UI Development",
      desc: "Clean and modern UI components with best UX practices.",
    },
  ];

  return (
    <section id="services" className="py-28 px-6 bg-slate-50">
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
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            What I Can Do
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* Icon */}
              <div className="text-4xl text-cyan-500 mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mt-3 leading-7">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;