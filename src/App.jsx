import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import ExperienceSection from "./sections/ExperienceSection";
import AninmetCouter from "./components/AninmetCouter";

import Testimonials from "./sections/Testimonials";
import Contact from "../src/sections/Contact";
import Footer from "./sections/Footer";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AninmetCouter />
      <ShowcaseSection />
      <LogoSection />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
