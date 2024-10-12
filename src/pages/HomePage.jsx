import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <main className="text-gray-200 grid">
      <Hero />
      <Services />
    </main>
  );
};

export default HomePage;
