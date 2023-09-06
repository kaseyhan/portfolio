import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Navbar from './components/navbar'
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}