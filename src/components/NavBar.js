import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-center">
        <Nav>
          <LinkContainer to="/" exact>
            <Nav.Link active={location.pathname === "/"} className="fs-5">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link active={location.pathname === "/about"} className="fs-5">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/skills">
            <Nav.Link active={location.pathname === "/skills"} className="fs-5">Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link active={location.pathname === "/projects"} className="fs-5">Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link active={location.pathname === "/contact"} className="fs-5">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
