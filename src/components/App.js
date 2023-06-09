import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Header from "./Header"
import Footer from "./Footer";

function App() {
  return (
    <div className="app-container bg-black d-flex flex-column min-vh-100">
      <Header />
      <NavBar />
      <main className="flex-grow-1">
        <Routes className="routes">
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
