import About from "./components/About";
import Children from "./components/Children";
import Contact from "./components/Contact";
import FloatingWhats from "./components/FloatingWhats";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Transformation from "./components/Transformation";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased selection:bg-blush-200/60 selection:text-ink">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        Ir para o conteúdo
      </a>

      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Transformation />
        <Children />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
