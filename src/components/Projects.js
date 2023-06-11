import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      title: 'Trauma Talks',
      description: 'Trauma Talks is a medical blog primarly focused on emergency medcine. Users can create a account, login, create a post and assign it to a category, and update, edit or delete posts that belongs to them, as well as create, update and edit and delete reviews on any post (React & Rails)',
      image: 'https://via.placeholder.com/300',
      gifUrl: null, 
      githubLink: 'https://github.com/mendelr20/phase-5-project',
      liveSiteLink: 'https://traumatalks.onrender.com/',
      videoUrl: 'https://www.youtube.com/watch?v=fyD7_2qYQuw&list=PL0GgGfAMbvADB7BgCXnYgJKgWiT5i5X2E&ind',
    },
  ];

  return (
    <div className="bg-black text-white py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
              <Card className="h-100 bg-dark text-white d-flex flex-column justify-content-between">
                <div className="text-center pt-4 px-3">
                  {project.gifUrl ? (
                    <img src={project.gifUrl} alt={project.title} className="img-fluid" />
                  ) : (
                    <Card.Img variant="top" src={project.image} alt={project.title} className="mb-4" />
                  )}
                  <Card.Title className="mt-3 mb-2">{project.title}</Card.Title>
                  <Card.Text className="mb-4">{project.description}</Card.Text>
                </div>
                <div className="text-center">
                  {project.githubLink && (
                    <Button variant="dark" href={project.githubLink} className="mb-2 mr-2">GitHub</Button>
                  )}
                  {project.liveSiteLink && (
                    <Button variant="dark" href={project.liveSiteLink} className="mb-2 mr-2">Live Site</Button>
                  )}
                </div>
                <div className="text-center pb-3">
                  {project.videoUrl && (
                    <div className="embed-responsive embed-responsive-16by9 mt-2">
                      <iframe
                        title={project.title}
                        className="embed-responsive-item"
                        src={project.videoUrl}
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style>
        {`
        .bg-black {
          background-color: #000000;
        }

        .text-white {
          color: #ffffff;
        }

        .btn-dark {
          background-color: #000000;
          border-color: #000000;
        }

        .btn-dark:hover {
          background-color: #333333;
          border-color: #333333;
        }
        
        .btn-dark:focus {
          background-color: #333333;
          border-color: #333333;
          box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
        }

        .btn-dark:active {
          background-color: #1a1a1a;
          border-color: #1a1a1a;
        }

        .btn-dark:not(:disabled):not(.disabled).active, 
        .btn-dark:not(:disabled):not(.disabled):active,
        .show > .btn-dark.dropdown-toggle {
          background-color: #1a1a1a;
          border-color: #1a1a1a;
        }

        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        `}
      </style>
    </div>
  );
}

export default Projects;
