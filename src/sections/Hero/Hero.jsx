import Container from "../../components/Container/Container";
import profile from "../../assets/images/profile/novoProfile.png";
import TechCarousel from "../../components/TechCarousel/TechCarousel";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Lado esquerdo */}
          <div className="lg:-translate-x-6 xl:-translate-x-15">
            <p className="text-sky-400 font-bold tracking-wide ">
              👋 Olá, eu sou
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-black text-white leading-tight">
              Jhuan
              <br />
              Jesus
            </h1>
            <h2 className="mt-6 text-2xl md:text-3xl text-gray-300 font-semibold">
              Desenvolvedor Full Stack
            </h2>

            <p className="mt-6 max-w-xl text-gray-400 leading-8">
              Transformo ideias em aplicações web funcionais. Fico no meio do
              caminho entre quem cria e quem usa, garantindo que o resultado
              seja simples e eficiente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400">
                Ver Projetos
              </button>
              <button className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                GitHub
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              <div className="mt-12">
                <TechCarousel />
              </div>
            </div>
          </div>

          {/* Lado direito */}
          <div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow azul */}
                <div className="absolute inset-0 scale-110 rounded-full bg-sky-500/20 blur-3xl"></div>

                {/* Moldura */}
                <div
                  className="
      relative
      h-80
      w-80
      overflow-hidden
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur-sm
      shadow-[0_0_40px_rgba(59,130,246,.15)]
    "
                >
                  <img
                    src={profile}
                    alt="Jhuan Jesus"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
