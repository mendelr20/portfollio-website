import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="black" variant="dark">
      <Container className="d-flex justify-content-center">
        <Nav>
          <LinkContainer to="/" exact>
            <Nav.Link
              className={`nav-link-custom ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link
              className={`nav-link-custom ${location.pathname === "/about" ? "active" : ""}`}
            >
              About
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link
              className={`nav-link-custom ${location.pathname === "/skills" ? "active" : ""}`}
            >
              Skills
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link
              className={`nav-link-custom ${location.pathname === "/projects" ? "active" : ""}`}
            >
              Projects
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link
              className={`nav-link-custom ${location.pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
      <style>
        {`
        .nav-link-custom {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          color: white;
          padding: 16px 20px;
          font-size: 18px;
          height: 80px; /* Adjust the height as needed */
          transition: background-color 0.2s, color 0.2s;
          border-radius: 8px; /* Add border-radius for a more modern look */
          border: none; /* Remove the default border */
          outline: none; /* Remove the default outline */
        }
        
        .nav-link-custom:hover {
          background-color: #242424; /* Update to your preferred hover background color */
          color: white; /* Update to your preferred hover text color */
          transform: translateY(-2px); /* Add a slight upward translation on hover */
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a box shadow for the hover effect */
        }
        
        .nav-link-custom.active {
          color: white; /* Update to your preferred active text color */
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a box shadow for the active link */
          border-bottom: 2px solid yellow; /* Add a visual indicator for the active link */
        }
        
        .navbar-dark .navbar-brand {
          color: white; /* Update to your preferred navbar brand color */
        }
        `}
      </style>
    </Navbar>
  );
}

export default NavBar;
