import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from './components/Experience'
import Skills from "./components/Skill";

function App() {

return (
<>
<Navbar />
<Hero />
<About />
<Experience />
<Projects />
<Skills />
<Contact />
</>
);
}

export default App