import Container from "../../components/Container/Container";
import Timeline from "../../components/Timeline/Timeline";

function About() {
  return (
    <section id="about" className="py-40">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sky-400 font-semibold">Sobre mim</span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Minha trajetória
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Minha trajetória começou na Automação Industrial, onde desenvolvi
            uma visão analítica voltada para processos e resolução de problemas.
            Ao longo do tempo encontrei no desenvolvimento de software uma forma
            de transformar essa lógica em soluções digitais, evoluindo
            continuamente até atuar como Desenvolvedor Full Stack.
          </p>
        </div>

        <Timeline />
      </Container>
    </section>
  );
}

export default About;
