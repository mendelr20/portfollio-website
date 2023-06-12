import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaServer,
  FaHtml5,
  FaPalette,
  FaFolderOpen,
  FaJsSquare,
  FaReact,
  FaCodeBranch,
  FaLeaf,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaCloudUploadAlt,
  FaCss3,
} from "react-icons/fa";
import {
  SiRuby,
  SiPostgresql,
  SiPostman,
  SiSemanticuireact,
  SiRubyonrails,
} from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import { HiDatabase } from "react-icons/hi";

function Skills() {
  const skills = [
    { name: "REST APIs", icon: FaServer },
    { name: "Ruby", icon: SiRuby },
    { name: "HTML", icon: FaHtml5 },
    { name: "Cascading Style Sheets (CSS)", icon: FaCss3Alt },
    { name: "Postman API", icon: SiPostman },
    { name: "Bootstrap", icon: FaFolderOpen },
    { name: "SQLite", icon: FaDatabase },
    { name: "Ruby on Rails", icon: SiRubyonrails },
    { name: "Material-UI", icon: FaPalette },
    { name: "API Testing", icon: FaCodeBranch },
    { name: "JavaScript eXtension (JSX)", icon: FaJsSquare },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "HTML5", icon: FaHtml5 },
    { name: "REST API", icon: GiNetworkBars },
    { name: "Materialize CSS", icon: FaLeaf },
    { name: "React.js", icon: FaReact },
    { name: "SQL", icon: FaDatabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Materialize CSS", icon: FaLeaf },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Git", icon: FaGitAlt },
    { name: "Semantic UI", icon: SiSemanticuireact },
    { name: "Styled Components", icon: FaCss3 },
    { name: "Active Storage", icon: FaCloudUploadAlt },
    { name: "Active Record", icon: HiDatabase },
  ];

  return (
    <div className="bg-black text-white py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3 d-flex align-items-center justify-content-center">
              <div className="skill-item">
                {skill.icon && React.createElement(skill.icon, { size: "3x" })}
                <span className="skill-name">{skill.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <style>
        {`
        .skill-item {
          background-color: #242424;
          color: white;
          padding: 16px;
          font-size: 16px;
          border-radius: 8px;
          transition: background-color 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 120px;
          width: 180px;
        }

        .skill-item:hover {
          background-color: #333333;
          color: white;
        }

        .skill-name {
          margin-top: 8px;
          text-align: center;
        }
        `}
      </style>
    </div>
  );
}

export default Skills;
