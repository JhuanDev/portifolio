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
            Minha trajetória começou com um simples cursinho na Rocketseat, onde
            desenvolvi minha primeira pagina web e fiquei maravilhado por
            conseguir transformar um simples código em um "site" funcional. Vejo
            a tecnologia como meio, não como fim: no fundo, sou um resolvedor de
            problemas. Ao longo da minha trajetória, encontrei no
            desenvolvimento de software o caminho para transformar lógica em
            soluções digitais completas.
          </p>
        </div>

        <Timeline />
      </Container>
    </section>
  );
}

export default About;
