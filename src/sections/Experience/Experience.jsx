import Container from "../../components/Container/Container";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

import experienceData from "./ExperienceData";

function Experience() {
  return (
    <section id="experience" className="py-32">
      <Container>
        {/* Cabeçalho */}

        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-sky-400">
            Experiência Profissional
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Vivência que fortaleceu minha visão sobre desenvolvimento de
            software.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Experiências que contribuíram para meu crescimento técnico,
            desenvolvimento profissional e entendimento sobre como soluções são
            construídas dentro do ambiente corporativo.
          </p>
        </div>

        {/* Cards */}

        <div className="mx-auto mt-20 grid max-w-[1180px] gap-8 lg:grid-cols-3">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}

          {/* Próximo passo */}

          <article
            className="
              relative
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

            <div className="relative flex h-full flex-col p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
                Próximo passo
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                Sempre em busca de novos desafios.
              </h3>

              <p className="mt-6 leading-7 text-gray-400">
                Cada experiência contribuiu para minha evolução profissional e
                reforçou meu interesse por desenvolver soluções que resolvam
                problemas reais, unindo tecnologia, organização e boas práticas
                de desenvolvimento.
              </p>

              <div className="mt-auto pt-8">
                <span
                  className="
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
                  Open to Work
                </span>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
