import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImage from "../images/About.jpg"; 

function About() {
  return (
    <div className="bg-black text-white text-center py-5">
      <Container>
        <h1 className="text-center mb-4">About Me</h1>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} lg={4} className="text-center">
            <img
              src={AboutImage}
              alt="Mendel Rosenblum"
              className="img-fluid rounded-circle mb-4"
              style={{ width: "200px" }}
            />
          </Col>
        </Row>
       
<p>
Hello, and welcome to my portfolio website! My name is Mendel Rosenblum, and I am thrilled to share my journey with you.
</p>
<p>
At the age of 17, I embarked on an accelerated EMT course and graduated as the valedictorian, marking the beginning of my career in emergency medical services.
</p>
<p>
I am currently a licensed NREMT (National Registry of Emergency Medical Technicians) professional, certified as an EMT in both New Jersey and New York. Over the past three years, I have had the privilege of serving as an NYC 911 EMT, responding to emergencies and providing critical care to those in need. It has been an incredibly rewarding experience, allowing me to make a positive impact on people's lives during their most vulnerable moments.
</p>
<p>
In addition to my work in New York City, I have dedicated the past two years to volunteering as an EMT in New Jersey. The Township of Livingston recognized my commitment and contribution to the community by awarding me the prestigious Presidential Award. This recognition has further fueled my passion for helping others and solidified my dedication to the field.
</p>
<p>
Continuing my education and professional growth, I am proud to announce that I have achieved National Registry Paramedic (NRP) certification. This milestone represents the culmination of my efforts and dedication to providing advanced pre-hospital care to those in need. With this new qualification, I am better equipped to administer life-saving interventions and critical care, making a difference in the lives of patients and their families.
</p>
<p>
Alongside my paramedic certification, I have taken on the exciting challenge of attending a software engineering bootcamp at Flarion, where I have honed my skills in the tech field. This pivot into technology offers me a unique perspective and enables me to blend my passion for healthcare with my growing interest in software engineering. As a National Registry Paramedic and a tech enthusiast, I am well-prepared to tackle complex challenges and create innovative solutions that have a positive impact on society.
</p>
<p>
Even as I explore the realm of technology, emergency medicine remains a vital part of who I am. I will continue to practice as a paramedic, considering it not just a profession but also a personal hobby. This combination allows me to apply my medical expertise while pursuing my enthusiasm for technology.
</p>
<p>
I am delighted to showcase my experiences, achievements, and projects through this portfolio website. It serves as a testament to my dedication to both emergency medical services and software engineering. I hope you find inspiration in my journey and witness the diverse skill set I bring to the table. Thank you for visiting, and please feel free to reach out if you have any questions or opportunities you'd like to discuss. Let's connect and make a difference together.
</p>
      </Container>
    </div>
  );
}

export default About;
