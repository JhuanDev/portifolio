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

        <div className="mt-20 flex flex-col gap-10">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </div>

        {/* Encerramento */}

        <div
          className="
            mt-24
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            p-10
          "
        >
          <p className="text-center text-2xl font-semibold text-white">
            Sempre em busca de novos desafios.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-gray-400">
            Cada experiência contribuiu para minha evolução profissional e
            reforçou meu interesse por desenvolver soluções que resolvam
            problemas reais, unindo tecnologia, organização e boas práticas de
            desenvolvimento.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
