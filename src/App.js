import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ParticlesJ from "./components/ParticlesJ";
import Projects from "./components/Projects1";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
     
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ParticlesJ />
    </div>
  );
}

export default App;
