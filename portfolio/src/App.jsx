import "./App.css";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import Services from "./components/Services";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import Preloader from "./components/Preloader";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import FluidBackground from "./components/FluidBackground";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <FluidBackground /> 

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <main className={`portfolio-content${isLoading ? "" : " portfolio-content--visible"}`}>
      
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <Services />
          <ExperienceSection />
          <ProjectSection />
          <Achievements />
          <Certificates />
          <ContactSection />
          <Footer />
      </main>
    </>
  );
}

export default App;
















