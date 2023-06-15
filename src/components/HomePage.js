import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';
import Resume from "../resume/resume.pdf";
function HomePage() {
  return (
    <div className="bg-black text-white py-5">
      <Container className="text-center">
        <h1 className="display-4">Welcome to My Portfolio Site</h1>

        <section className="mt-5 bg-dark">
          <h2>About Me</h2>
          <p className="lead">I am a full-stack Software Engineer with a passion for Emergency Medicine. I am currently an NYC 911 EMT and soon to be a Paramedic.</p>
        </section>

        <section className="mt-5 bg-dark">
          <h2>Education</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="https://www.flatironschool.com/" className="text-white">Flatiron School</a>, Full Stack Software Engineer, April 2023
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://nmetc.com/" className="text-white">NMETC (National Medical Education & Training Center)</a>, Paramedic, Expected Graduation, July 2023
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="https://www.bhemt.org/" className="text-white">B&H EMT (B&H Emergency Medical Training)</a>, NYS EMT, August 2019
            </ListGroup.Item>
          </ListGroup>
        </section>

        <section className="mt-5 bg-dark">
          <h2>Awards and Achievements</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="https://presidentialserviceawards.gov/" className="text-white">Presidential Award - Bronze</a>, Livingston Township / Hatzalah MetroWest, June 2023
            </ListGroup.Item>
            <ListGroup.Item>
              Valedictorian, B&H EMT, August 2019
            </ListGroup.Item>
          </ListGroup>
        </section>

        <section className="mt-5 bg-dark">
          <h2>Work Experience</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="https://seniorcareems.com/" className="text-white">Senior Care EMS</a>, EMT, promoted to the NYC 911 division under FDNY in November 2020, January 2020 - Present
            </ListGroup.Item>
          </ListGroup>
        </section>

        <section className="mt-5 bg-dark">
          <h2>Volunteer Experience</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="https://www.hatzalahmetrowest.org/" className="text-white">Hatzalah MetroWest</a>, EMT & Member of Documentation Committee, Since its inception on September 3, 2021, to Present
            </ListGroup.Item>
          </ListGroup>
        </section>

        <section className="mt-5 bg-dark">
          <h2>Contact Me</h2>
          <p>Feel free to contact me through email or LinkedIn.</p>
          <p>
            Email: RosenblumMM@gmail.com<br />
            LinkedIn: <a href="https://www.linkedin.com/in/mendel-rosenblum/" className="text-white">Mendel Rosenblum</a>
          </p>
          <p>
            <Link to="/contact" className="btn btn-primary">Contact Form</Link>
          </p>
        </section>

        <section className="mt-5 bg-dark">
          <h2>Resume</h2>
          <p>Download my resume:</p>
          <a href={Resume} download className="text-white">Click here to download</a>
        </section>

      </Container>
    </div>
  );
}

export default HomePage;
