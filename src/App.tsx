import { Header } from "./sections/Header";

function App() {
  return (
    <div className="bg-background text-primary min-h-screen">
      <Header />

      {/* Other sections will go here */}
      <main className="pt-16">
        {/* Example placeholder */}
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Home Section</h1>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">About Section</h1>
        </section>

        <section id="experience" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Experience Section</h1>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Projects Section</h1>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Contact Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
