import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import appImage from "../../assets/images/projects/app.jfif";
import crmImage from "../../assets/images/projects/crm.jfif";
import deliveryImage from "../../assets/images/projects/delivery.PNG";

function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        {/* Cabeçalho */}
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
              category="React Native"
              title="Aplicativo Mobile"
              description="Aplicativo utilizado para registrar a presença de participantes em eventos de maneira rápida e intuitiva."
              technologies={["React Native", "Expo", "SQLite"]}
              github="#"
            />

            <ProjectCard
              category="Backend"
              title="API REST"
              description="Responsável pela autenticação, gerenciamento de eventos, participantes e comunicação entre o aplicativo e o CRM."
              technologies={["Node.js", "Express", "SQLite", "JWT"]}
              github="#"
            />

            <ProjectCard
              image={crmImage}
              category="React"
              title="Painel Administrativo"
              description="Sistema web desenvolvido para gerenciamento de eventos, participantes e visualização dos registros realizados pelo aplicativo."
              technologies={["React", "Tailwind", "Node.js"]}
              github="#"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* Projetos de Estudo */}
        {/* ======================================================== */}

        <div className="mt-36">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
            Projetos de Estudo
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Evolução durante os estudos
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Projetos desenvolvidos durante minha formação para consolidar
            conceitos importantes do desenvolvimento web.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ProjectCard
              image={deliveryImage}
              category="React"
              title="Delivery Web"
              description="Um dos primeiros projetos desenvolvidos utilizando React, focado em componentização, gerenciamento de estado e construção de interfaces."
              technologies={["React", "JavaScript", "CSS"]}
              github="#"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* Ferramentas */}
        {/* ======================================================== */}

        <div className="mt-36">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-sky-400">
            Ferramentas
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Soluções para automação
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Pequenas aplicações desenvolvidas para automatizar tarefas
            repetitivas e facilitar o trabalho do dia a dia.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ProjectCard
              category="Node.js"
              title="Conversor CSV → XLSX"
              description="Ferramenta desenvolvida para automatizar a conversão de arquivos CSV para XLSX, simplificando o tratamento e a organização dos dados."
              technologies={["Node.js", "ExcelJS"]}
              github="#"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
