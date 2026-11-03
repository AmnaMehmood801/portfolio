import { motion } from "framer-motion";

import SectionTitle from
"../ui/SectionTitle";

function About() {

  return (

    <section
      id="about"
      className="
      py-32
      "
    >

      <div
        className="
        container-custom
        "
      >

        {/* ================= SECTION TITLE ================= */}

        <SectionTitle

          title="About Me"

          subtitle="
          Passionate frontend
          developer focused on
          building clean,
          modern and responsive
          web experiences.
          "

        />

        {/* ================= CONTENT ================= */}

        <div
          className="
          grid
          lg:grid-cols-2
          
          gap-16
          
          items-center
          "
        >

          {/* ================= LEFT SIDE ================= */}

          <motion.div

            initial={{
              opacity:0,
              x:-80,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.8,
              ease:"easeOut",
            }}

            viewport={{
              once:true,
            }}

          >

            <div
              className="
              relative
              
              overflow-hidden
              
              rounded-4xl
              
              border
              border-slate-200
              
              bg-linear-to-br
              
              from-violet-100
              to-cyan-100
              
              p-10
              "
            >

              {/* BLUR */}

              <div
                className="
                absolute
                
                top-0
                right-0
                
                w-52
                h-52
                
                rounded-full
                
                bg-violet-400/30
                
                blur-3xl
                "
              />

              {/* CONTENT */}

              <div
                className="
                relative
                z-10
                "
              >

                <span
                  className="
                  inline-flex
                  
                  px-5 py-2
                  
                  rounded-full
                  
                  bg-white
                  
                  text-violet-700
                  
                  font-semibold
                  "
                >
                  Frontend Developer
                </span>

                <h3
                  className="
                  mt-8
                  
                  text-4xl
                  
                  font-black
                  
                  leading-tight
                  "
                >
                  Creating Elegant
                  Digital Experiences
                </h3>

                <p
                  className="
                  mt-6
                  
                  text-slate-700
                  
                  leading-8
                  "
                >
                  I enjoy creating
                  modern websites with
                  clean interfaces,
                  responsive layouts
                  and smooth user
                  experiences using
                  React and Tailwind CSS.
                </p>

              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div

            initial={{
              opacity:0,
              x:80,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.8,
              ease:"easeOut",
            }}

            viewport={{
              once:true,
            }}

            className="
            grid
            sm:grid-cols-2
            
            gap-6
            "
          >

            {/* CARD 1 */}

            <div
              className="
              rounded-[28px]
              
              border
              border-slate-200
              
              p-8
              
              shadow-sm
              
              transition-all
              duration-300
              
              hover:-translate-y-2
              
              hover:shadow-xl
              "
            >

              <h4
                className="
                text-5xl
                
                font-black
                
                text-violet-600
                "
              >
                1+
              </h4>

              <p
                className="
                mt-4
                
                text-slate-600
                
                leading-7
                "
              >
                Years of frontend
                learning and building
                projects.
              </p>

            </div>

            {/* CARD 2 */}

            <div
              className="
              rounded-[28px]
              
              border
              border-slate-200
              
              p-8
              
              shadow-sm
              
              transition-all
              duration-300
              
              hover:-translate-y-2
              
              hover:shadow-xl
              "
            >

              <h4
                className="
                text-5xl
                
                font-black
                
                text-cyan-600
                "
              >
                10+
              </h4>

              <p
                className="
                mt-4
                
                text-slate-600
                
                leading-7
                "
              >
                Responsive projects
                created using modern
                frontend technologies.
              </p>

            </div>

            {/* CARD 3 */}

            <div
              className="
              rounded-[28px]
              
              border
              border-slate-200
              
              p-8
              
              shadow-sm
              
              transition-all
              duration-300
              
              hover:-translate-y-2
              
              hover:shadow-xl
              "
            >

              <h4
                className="
                text-5xl
                
                font-black
                
                text-violet-600
                "
              >
                UI
              </h4>

              <p
                className="
                mt-4
                
                text-slate-600
                
                leading-7
                "
              >
                Focused on modern,
                minimal and elegant
                interface design.
              </p>

            </div>

            {/* CARD 4 */}

            <div
              className="
              rounded-[28px]
              
              border
              border-slate-200
              
              p-8
              
              shadow-sm
              
              transition-all
              duration-300
              
              hover:-translate-y-2
              
              hover:shadow-xl
              "
            >

              <h4
                className="
                text-5xl
                
                font-black
                
                text-cyan-600
                "
              >
                UX
              </h4>

              <p
                className="
                mt-4
                
                text-slate-600
                
                leading-7
                "
              >
                Creating smooth,
                interactive and user
                friendly web layouts.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;