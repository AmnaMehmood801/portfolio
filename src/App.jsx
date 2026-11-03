import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Journey from "./components/sections/Journey";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import ProjectDetail from "./pages/ProjectDetail";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Journey />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
