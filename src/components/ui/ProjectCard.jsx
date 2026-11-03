import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({

  title,
  description,
  tech,
  live,
  github,

}) {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:50,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.5,
      }}

      viewport={{
        once:true,
      }}

      whileHover={{
        y:-10,
      }}

      className="
      group
      
      overflow-hidden
      
      rounded-4xl
      
      border
      border-slate-200
      
      bg-white
      
      shadow-sm
      
      transition-all
      duration-300
      
      hover:shadow-2xl
      "
    >

      {/* ================= IMAGE PLACEHOLDER ================= */}

      <div
        className="
        relative
        
        h-64
        
        overflow-hidden
        
        bg-linear-to-br
        
        from-violet-500
        to-cyan-500
        "
      >

        {/* OVERLAY */}

        <div
          className="
          absolute
          
          inset-0
          
          flex
          items-center
          justify-center
          
          opacity-0
          
          transition-all
          duration-300
          
          group-hover:opacity-100
          
          bg-black/40
          "
        >

          <div
            className="
            flex
            gap-4
            "
          >

            {/* LIVE BUTTON */}

            <a
              href={live}

              className="
              flex
              items-center
              justify-center
              
              w-14
              h-14
              
              rounded-full
              
              bg-white
              
              text-slate-900
              
              transition-all
              duration-300
              
              hover:scale-110
              "
            >

              <FaExternalLinkAlt />

            </a>

            {/* GITHUB BUTTON */}

            <a
              href={github}

              className="
              flex
              items-center
              justify-center
              
              w-14
              h-14
              
              rounded-full
              
              bg-white
              
              text-slate-900
              
              transition-all
              duration-300
              
              hover:scale-110
              "
            >

              <FaGithub />

            </a>

          </div>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
        p-8
        "
      >

        {/* TITLE */}

        <h3
          className="
          text-3xl
          
          font-black
          
          text-slate-800
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
          mt-5
          
          leading-8
          
          text-slate-600
          "
        >
          {description}
        </p>

        {/* TECH STACK */}

        <div
          className="
          mt-8
          
          flex
          flex-wrap
          
          gap-3
          "
        >

          {tech.map((item,index)=>(

            <span
              key={index}

              className="
              px-4
              py-2
              
              rounded-full
              
              bg-slate-100
              
              text-sm
              
              font-medium
              
              text-slate-700
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;