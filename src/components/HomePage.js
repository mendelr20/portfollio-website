import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, ListGroup } from "react-bootstrap";
import Resume from "../resume/resume.pdf";

function HomePage() {
  return (
    <div className="bg-black text-white py-5">
      <Container className="text-center">
        <h1 className="display-4 mb-5 font-weight-bold text-shadow">
          Welcome to My Portfolio Site
        </h1>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">About Me</Card.Title>
              <Card.Text>
                I am a full-stack Software Engineer with a passion for Emergency
                Medicine. I am currently an NYC 911 EMT and a National Registry Paramedic.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">Work Experience</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-white border-0">
                  <a
                    href="https://seniorcareems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    Senior Care EMS
                  </a>
                  , EMT, promoted to the NYC 911 division under FDNY in November
                  2020, January 2020 - Present
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">Volunteer Experience</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-white border-0">
                  <a
                    href="https://www.hatzalahmetrowest.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    Hatzalah MetroWest
                  </a>
                  , EMT & Member of Documentation Committee, Since its inception
                  on September 3, 2021, - Present
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">Education</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-white border-0">
                  <a
                    href="https://www.flatironschool.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    Flatiron School
                  </a>
                  , Full Stack Software Engineer, April 2023
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white border-0">
                  <a
                    href="https://nmetc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    NMETC (National Medical Education & Training Center)
                  </a>
                  , Paramedic, July 2023
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white border-0">
                  <a
                    href="https://www.bhemt.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    B&H EMT (B&H Emergency Medical Training)
                  </a>
                  , NYS EMT, August 2019
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">Awards and Achievements</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="bg-dark text-white border-0">
                  <a
                    href="https://presidentialserviceawards.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: "larger",
                    }}
                  >
                    Presidential Award - Bronze
                  </a>
                  , Livingston Township / Hatzalah MetroWest, June 2023
                </ListGroup.Item>
                <ListGroup.Item className="bg-dark text-white border-0">
                  <span className="font-weight-bold">Valedictorian</span>, B&H
                  EMT, August 2019
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">Resume</Card.Title>
              <Card.Text>
                You can view and download my resume by clicking the links below:
              </Card.Text>
              <Card.Text>
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Mendel Rosenblum Resume.pdf"
                  className="btn btn-secondary btn-sm mr-3"
                >
                  Download Resume
                </a>
              </Card.Text>
              <Card.Text>
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Open in Browser
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title className="h4">Contact Me</Card.Title>
              <Card.Text>
                Feel free to contact me through Email, LinkedIn, or by filling
                out the contact form.
              </Card.Text>
              <Card.Text>
                <a
                  href="mailto:RosenblumMM@gmail.com"
                  className="btn btn-secondary btn-sm mr-3"
                >
                  Email
                </a>
              </Card.Text>
              <Card.Text>
                <a
                  href="https://www.linkedin.com/in/mendel-rosenblum/"
                  className="btn btn-secondary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Card.Text>
              <Card.Text>
                <Link to="/contact" className="btn btn-secondary btn-sm">
                  Contact Form
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default HomePage;
