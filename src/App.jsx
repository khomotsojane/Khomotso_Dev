import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Header from "./components/Header";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/button" element={<Button />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
