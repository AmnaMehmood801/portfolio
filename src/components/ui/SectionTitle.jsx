function SectionTitle({

  title,
  subtitle,

}) {

  return (

    <div
      className="
      text-center
      mb-20
      "
    >

      <h2
        className="
        text-4xl
        md:text-5xl
        font-black
        "
      >
        {title}
      </h2>

      <p
        className="
        mt-6
        text-slate-600
        max-w-2xl
        mx-auto
        leading-8
        "
      >
        {subtitle}
      </p>

    </div>

  );
}

export default SectionTitle;