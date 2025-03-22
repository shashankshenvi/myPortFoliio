import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
