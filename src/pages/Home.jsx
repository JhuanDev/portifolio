import Header from "../sections/Header/Header";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default Home;
