import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import TraumaTalks from "../images/TraumaTalks.png";
import RecipeRanger from "../images/RecipeRanger.png";
import EntertainmentTracker from "../images/EntertainmentTracker.png";
import NursesSalary from "../images/NursesSalary.png";
import EMS from "../images/EMS.png";

function Projects() {
  const projects = [
    {
      title: 'Trauma Talks',
      description: 'Trauma Talks is a medical blog primarily focused on emergency medicine. Users can create an account, login, create a post and assign it to a category, and update, edit, or delete posts that belong to them, as well as create, update, edit, and delete reviews on any post (React & Rails)',
      image: TraumaTalks,
      githubLink: 'https://github.com/mendelr20/phase-5-project',
      liveSiteLink: 'https://traumatalks.onrender.com/',
      videoUrl: 'https://www.youtube.com/embed/fyD7_2qYQuw',
    },
    {
      title: 'Recipe Ranger',
      description: 'Recipe Ranger allows users to browse and filter through a comprehensive list of recipes, create and delete their own recipe reviews, and update their reviews. The application allows users to create an account, log in, and search for recipes based on meal course, sort by name (A-Z or Z-A), and sort by time to complete (up or down). Users can also search for recipes by title and view recipe details, including instructions, notes, meal course, and cooking time. (React & Rails)',
      image: RecipeRanger,
      githubLink: 'https://github.com/mendelr20/phase-4-project',
      liveSiteLink: null,
      videoUrl: 'https://www.youtube.com/embed/_fF8WRY5fok',
    },
    {
      title: 'Entertainment Tracker',
      description: 'Entertainment Tracker where you can create a new book, which includes fields for the title, series name (if applicable), an author selection from a list, or the option to add a new author, notes, and a checkbox that indicates if the book has been read. (React & Ruby)',
      image: EntertainmentTracker,
      githubLink: 'https://github.com/mendelr20/phase-3-project-frontend',
      liveSiteLink: null,
      videoUrl: 'https://www.youtube.com/embed/-cEULKPZzuU',
    },
    {
      title: 'Nurses Salary',
      description: 'Online Database of comonly found nurse and their salarys with the ability to add likes to each nurse. (React & JSONServer)',
      image: NursesSalary,
      githubLink: 'https://github.com/mendelr20/phase-2-project',
      liveSiteLink: null,
      videoUrl: 'https://www.youtube.com/embed/eGHfewB1rvs',
    },
    {
      title: 'EMS Drugs / Medication Application ',
      description: 'Single-page application that allows a user to search and see information about Medications I learned about in Paramedic school and is ocmmonaly used as a Paramedic (Vanilla Javascript & JSONServer)',
      image: EMS,
      githubLink: 'https://github.com/mendelr20/phase-1-project',
      liveSiteLink: null,
      videoUrl: 'https://www.youtube.com/embed/_D_eRV-KZhQ',
    }
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
                  <Card.Img variant="top" src={project.image} alt={project.title} className="mb-4" />
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
