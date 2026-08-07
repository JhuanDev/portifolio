function ExperienceCard({ company, role, period, description, technologies }) {
  return (
    <article
      className="
        relative
        h-full
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#0B1220]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-400/30
        hover:shadow-[0_10px_35px_rgba(56,189,248,.10)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-20
          right-0
          h-40
          w-40
          rounded-full
          bg-sky-500/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative flex h-full flex-col p-7">
        {/* Cabeçalho */}

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold leading-tight text-white">
              {company}
            </h3>

            <p className="mt-2 text-base text-sky-300">{role}</p>
          </div>

          <span
            className="
              shrink-0
              whitespace-nowrap
              rounded-full
              border
              border-sky-400/20
              bg-sky-400/10
              px-4
              py-2
              text-sm
              text-sky-300
            "
          >
            {period}
          </span>
        </div>

        {/* Descrição */}

        <p className="mt-6 leading-7 text-gray-400">{description}</p>

        {/* Tecnologias */}

        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
