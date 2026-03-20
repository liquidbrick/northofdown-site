import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import About from "./components/About";
import Shows from "./components/Shows";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AudioPreview from "./components/AudioPreview";

export default function Home() {
  return (
    <main>
      <AudioPreview />
      <Navbar />
      <Hero />
      <hr className="section-divider" />
      <Music />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Shows />
      <hr className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
