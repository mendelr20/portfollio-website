import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Header from "./Header";
import Footer from "./Footer";
import CalendlyWidget from './CalendlyWidget';

function App() {
  return (
    <div className="app-container bg-black d-flex flex-column min-vh-100">
      <Header />
      <NavBar />
      <div className="flex-grow-1">
        <Container fluid className="content-container">
          <Routes className="routes">
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        <CalendlyWidget/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
