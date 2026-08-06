function ProjectCard({
  image,
  title,
  category,
  description,
  technologies = [],
  github,
  demo,
  imageVariant = "cover",
}) {
  const isMobileImage = imageVariant === "mobile";

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
        hover:-translate-y-2
        hover:border-sky-400/40
        hover:shadow-[0_12px_35px_rgba(56,189,248,.12)]
      "
    >
      {/* Topo */}
      {image ? (
        <div
          className={`
            overflow-hidden
            border-b
            border-white/10
            ${isMobileImage ? "h-64 bg-slate-950/80 p-4" : "h-44"}
          `}
        >
          {isMobileImage ? (
            <div className="mx-auto h-full w-fit overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_18px_45px_rgba(0,0,0,.35)]">
              <img
                src={image}
                alt={title}
                className="
                  h-full
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>
          ) : (
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
          )}
        </div>
      ) : (
        <div
          className="
            flex
            h-44
            items-center
            justify-center
            border-b
            border-white/10
            bg-linear-to-br
            from-sky-500/10
            via-slate-900
            to-slate-950
          "
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-400">
              {category}
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="p-5">
        {category && (
          <p className="text-[11px] uppercase tracking-[0.30em] text-sky-400">
            {category}
          </p>
        )}

        <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>

        {/* Tecnologias */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-2.5
                py-1
                text-xs
                text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}
        {(github || demo) && (
          <div className="mt-6 flex gap-3">
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
                  px-4
                  py-2
                  text-sm
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
                  px-4
                  py-2
                  text-sm
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
