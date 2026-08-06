import Header from "../sections/Header/Header";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </>
  );
}

export default Home;
