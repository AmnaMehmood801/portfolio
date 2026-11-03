import { motion } from "framer-motion";

function SkillCard({

  title,
  description,

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
      relative
      
      overflow-hidden
      
      rounded-[30px]
      
      border
      border-slate-200
      
      bg-white
      
      p-8
      
      shadow-sm
      
      transition-all
      duration-300
      
      hover:shadow-xl
      "
    >

      {/* BLUR */}

      <div
        className="
        absolute
        
        top-0
        right-0
        
        w-32
        h-32
        
        rounded-full
        
        bg-violet-500/10
        
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

        <h3
          className="
          text-2xl
          
          font-black
          
          text-slate-800
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-5
          
          leading-8
          
          text-slate-600
          "
        >
          {description}
        </p>

      </div>

    </motion.div>
  );
}

export default SkillCard;