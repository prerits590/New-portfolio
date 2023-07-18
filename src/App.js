import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ParticlesJ from "./components/ParticlesJ";
import Projects from "./components/Projects1";
import Skills from "./components/Skills";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Hero />
        <Quote/>
        <About />
        <Skills />
        <Projects />
        <Footer />
        <ParticlesJ />
      </BrowserRouter>
    </div>
  );
}

export default App;
