import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DevScene from "./components/DevScene";

function App() {
  return (
    <>
      {/* 🌌 ONLY 3D BACKGROUND */}
      <DevScene />

      {/* UI */}
      <main className="flex w-full flex-col items-center overflow-x-hidden px-3 sm:px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;