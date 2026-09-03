import "./App.css";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import CursorGlow from "./components/CursorGlow";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <CursorGlow />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ExperienceSection />
          <ProjectSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
















