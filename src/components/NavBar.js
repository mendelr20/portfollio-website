import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="black">
      <Container className="d-flex justify-content-center">
        <Nav>
          <LinkContainer to="/" exact>
            <Nav.Link  className="d-flex justify-content-center align-items-start bg-black text-white py-3" active={location.pathname === "/"}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="d-flex justify-content-center align-items-start bg-black text-white py-3" active={location.pathname === "/about"}>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link className="d-flex justify-content-center align-items-start bg-black text-white py-3" active={location.pathname === "/skills"}>Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link className="d-flex justify-content-center align-items-start bg-black text-white py-3" active={location.pathname === "/projects"}>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="d-flex justify-content-center align-items-start bg-black text-white py-3" active={location.pathname === "/contact"}>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
