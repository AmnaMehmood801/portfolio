function Button({

  text,
  href,
  primary = false,

}) {

  return (

    <a
      href={href}
      className={`
        
        inline-flex
        items-center
        justify-center
        
        px-8 py-4
        
        rounded-full
        
        font-semibold
        
        transition-all
        duration-300
        
        hover:-translate-y-1
        
        ${
          primary
            ? `
              bg-violet-600
              text-white
              hover:bg-violet-700
            `
            : `
              border
              border-slate-300
              hover:border-violet-600
              hover:text-violet-600
            `
        }
        
      `}
    >

      {text}

    </a>

  );
}

export default Button;