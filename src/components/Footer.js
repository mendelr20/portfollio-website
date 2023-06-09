import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className="bg-black text-white d-flex flex-column justify-content-between align-items-center py-5">
      <div className="mb-4">
        <Row className="justify-content-center">
          <Col xs="auto" className="mr-4">
            <a href="https://www.linkedin.com/in/mendel-rosenblum/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "white" }} />
            </a>
          </Col>
          <Col xs="auto" className="mr-4">
            <a href="https://github.com/mendelr20/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "white" }} />
            </a>
          </Col>
          <Col xs="auto" className="mr-4">
            <a href="https://twitter.com/MendelRosenblu5/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "white" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://instagram.com/mendel_rosenblum/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "white" }} />
            </a>
          </Col>
        </Row>
      </div>
      <p className="mt-auto mb-0">
        &copy; 2023 Mendel Rosenblum. All rights reserved. Trademarks and logos are the property of their respective owners.
      </p>
    </div>
  );
}

export default Footer;
