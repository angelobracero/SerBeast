import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import FeaturedProfessional from "../components/FeaturedProfessional";

const HomePage = () => {
  return (
    <main className="text-gray-200 grid">
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <FeaturedProfessional />
    </main>
  );
};

export default HomePage;
