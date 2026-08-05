function ProjectCard({
  image,
  title,
  category,
  description,
  technologies = [],
  github,
  demo,
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#0B1220]
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:border-sky-400/40
        hover:shadow-[0_10px_40px_rgba(56,189,248,.12)]
      "
    >
      {/* Topo */}

      {image ? (
        <div className="h-56 overflow-hidden border-b border-white/10">
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      ) : (
        <div
          className="
            flex
            h-56
            items-center
            justify-center
            border-b
            border-white/10
            bg-gradient-to-br
            from-sky-500/10
            via-slate-900
            to-slate-950
          "
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              {category}
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">{title}</h2>
          </div>
        </div>
      )}

      {/* Conteúdo */}

      <div className="p-7">
        {category && (
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            {category}
          </p>
        )}

        <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>

        <p className="mt-5 leading-7 text-gray-400">{description}</p>

        {/* Tecnologias */}

        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-sm
                text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}

        {(github || demo) && (
          <div className="mt-8 flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                GitHub
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-lg
                  bg-sky-500
                  px-5
                  py-3
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-sky-400
                "
              >
                Ver Projeto
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
