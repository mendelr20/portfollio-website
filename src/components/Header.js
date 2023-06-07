import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-start bg-black text-white py-3">
      <Link to="/" >
        <h1 className="d-flex justify-content-center align-items-start bg-black text-white py-3">Mendel Rosenblum</h1>
      </Link>
    </Container>
  );
}

export default Header;
