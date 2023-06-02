import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "G-KHFLY2E0DW"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

function App() {
  return (
    <div>
      <NavBar />
      <Routes className="routes">
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default ReactGA.withTracker(App);
