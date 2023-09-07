import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience/experience";
import Navbar from './components/navbar/navbar'
import Projects from "./components/projects";
import Skills from "./components/skills";
import './main.scss'

export default function App() {
  return (
    <div>
      <div id="default">
        <br/>
        <br/>
        <br/>
      </div>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}