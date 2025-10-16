import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Component
function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2.5rem" }}>Chris Dias Portfolio</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Welcome to my portfolio website! Explore my work and know more about me.
      </p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ fontSize: "2rem" }}>About Me</h2>
      <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "20px auto" }}>
        Hi! I am Chris, a passionate web developer with experience in React, Node.js, and
        creating interactive web applications.
      </p>
    </div>
  );
}

// Projects Component
function Projects() {
  return (
    <div style={{ textAlign: "left", marginTop: "50px", paddingLeft: "20px" }}>
      <h2 style={{ fontSize: "2rem" }}>My Projects</h2>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        <li style={{ margin: "10px 0" }}>1. Portfolio Website</li>
        <li style={{ margin: "10px 0" }}>2. To-Do App with React</li>
        <li style={{ margin: "10px 0" }}>3. Node.js REST API</li>
      </ul>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}> {/* reduced from 50px */}
      <h2 style={{ fontSize: "2rem" }}>Contact Me</h2>
      <p style={{ fontSize: "1.1rem" }}>Email: chris@example.com</p>
      <p style={{ fontSize: "1.1rem" }}>Phone: +91 12345 67890</p>
    </div>
  );
}


// App Component with Routing
function App() {
  const navStyle = {
  textAlign: "center",
  padding: "10px",
  background: "#282c34",
  position: "sticky", // keeps nav at the top
  top: 0,
};

  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "#61dafb",
    fontWeight: "bold",
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <div style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
