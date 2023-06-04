import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer className="ml-auto" to="/">
            <Navbar.Brand>Mendel Rosenblum</Navbar.Brand>
          </LinkContainer>
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

// function NavBar() {
//   return (
//     <div>
//        <h1 >
//         <Link to="/">Mendel Rosenblum</Link>
//       </h1>

//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/skills">Skills</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/contact">Contact</Link>

//     </div>
//   )
// }
