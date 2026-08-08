import StatusBar from "./components/StatusBar";
import CursorGlow from "./components/CursorGlow";
import FloatingPetals from "./components/FloatingPetals";
import Fireflies from "./components/Fireflies";
import LofiToggle from "./components/LofiToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import ArtCorner from "./components/ArtCorner";
import InspirationShelf from "./components/InspirationShelf";
import ThoughtOfDay from "./components/ThoughtOfDay";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="crt-vignette" />
      <FloatingPetals />
      <Fireflies />
      <CursorGlow />
      <LofiToggle />

      <StatusBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <ArtCorner />
        <InspirationShelf />
        <ThoughtOfDay />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
