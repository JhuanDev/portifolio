import Header from "../sections/Header/Header";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default Home;
