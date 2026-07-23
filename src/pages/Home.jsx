import Header from "../sections/Header/Header";

function Home() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-6xl font-bold">Hero</h1>
        </section>
      </main>
    </>
  );
}

export default Home;
