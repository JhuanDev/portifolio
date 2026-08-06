import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import appImage from "../../assets/images/projects/app.jfif";
import crmImage from "../../assets/images/projects/crm.jfif";
import deliveryImage from "../../assets/images/projects/delivery.PNG";

function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        {/* ======================================================== */}
        {/* Cabeçalho */}
        {/* ======================================================== */}

        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-sky-400">
            Projetos
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Alguns dos projetos que marcaram minha evolução.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Desde os primeiros estudos até aplicações completas desenvolvidas
            para resolver necessidades reais.
          </p>
        </div>

        {/* ======================================================== */}
        {/* Aplicação Completa */}
        {/* ======================================================== */}

        <div className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
            Aplicação Completa
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Sistema de Registro de Presença
          </h3>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Plataforma composta por um aplicativo mobile, uma API REST e um
            painel administrativo web, desenvolvidos para registrar presenças,
            gerenciar participantes e centralizar todas as informações em um
            único sistema.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <ProjectCard
              image={appImage}
              imageVariant="mobile"
              category="React Native"
              title="Aplicativo Mobile"
              description="O projeto nasceu com o objetivo de simplificar o registro de ponto. Conforme novas necessidades surgiram, foi expandido para oferecer recursos voltados à gestão de funcionários."
              technologies={["React Native", "Expo", "Supabase"]}
              github="#"
            />

            <ProjectCard
              category="Backend"
              title="API REST"
              description="Desenvolvida como parte da solução, esta API REST centraliza a autenticação, o gerenciamento de eventos e participantes, além de realizar toda a comunicação entre o aplicativo mobile e o painel administrativo."
              technologies={["Node.js", "Express", "Supabase"]}
              github="#"
            />

            <ProjectCard
              image={crmImage}
              category="React"
              title="Painel Administrativo"
              description="Etapa que conclui o fluxo da aplicação. Além do registro de ponto, permite acompanhar localizações, realizar cadastros e gerenciar chamados considerando a proximidade dos funcionários."
              technologies={["React", "Tailwind", "Node.js"]}
              github="#"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* Projetos de Estudo */}
        {/* ======================================================== */}

        <div className="mt-28">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
            Projetos de Estudo
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Evolução durante os estudos
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Projetos desenvolvidos durante minha formação para consolidar
            conceitos fundamentais do desenvolvimento web.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ProjectCard
              image={deliveryImage}
              category="React"
              title="Delivery Web"
              description="Tenho um carinho especial por este projeto, pois marcou o início da minha trajetória no desenvolvimento. Foi desenvolvido durante a trilha Conectar da Rocketseat, onde tive meu primeiro contato com conceitos fundamentais do desenvolvimento web."
              technologies={["HTML", "JavaScript", "Tailwind"]}
              github="#"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* Ferramentas */}
        {/* ======================================================== */}

        <div className="mt-28">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
            Ferramentas
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Soluções para automação
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Algumas ferramentas desenvolvidas para resolver necessidades reais e
            automatizar tarefas do dia a dia.
          </p>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[650px_1fr]">
            <ProjectCard
              category=".NET"
              title="Conversor CSV → XLSX"
              description="Este projeto marcou minha introdução ao desenvolvimento com .NET. Além do aprendizado da tecnologia, foi minha primeira experiência desenvolvendo uma ferramenta voltada para uma necessidade real, automatizando a conversão de arquivos CSV para XLSX e facilitando a organização dos dados."
              technologies={[".NET", "Excel"]}
            />

            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
                Continue explorando
              </span>

              <h4 className="mt-3 text-3xl font-bold leading-tight text-sky-200">
                Estes são apenas alguns dos projetos que desenvolvi.
              </h4>

              <p className="mt-6 leading-8 text-gray-400">
                Ao longo da minha trajetória desenvolvi outras aplicações,
                estudos e experimentos utilizando diferentes tecnologias. Se
                quiser conhecer mais do meu trabalho, vale a pena explorar meu
                GitHub.
              </p>

              <a
                href="https://github.com/SEU_USUARIO"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  mt-8
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  font-medium
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-400/40
                  hover:bg-white/10
                "
              >
                Explorar GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
