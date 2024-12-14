import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = [
  { title: "Residential Plot Survey", description: "Completed survey for residential plots.", image: "/images/2.jpeg" },
  { title: "Commercial Land Demarcation", description: "Boundary demarcation for commercial land.", image: "/images/3.jpg" },
  { title: "Topographic Mapping", description: "Detailed topographic mapping for new projects.", image: "/images/4.jpeg" },
];

const Projects = () => {
  return (
    <section className="py-5" id="projects" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#333", fontWeight: "bold" }}>Our Projects</h2>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-light" style={{ borderRadius: "8px", transition: "transform 0.3s ease" }}>
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px", objectFit: "fill", height: "350px" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.25rem", fontWeight: "600" }}>{project.title}</Card.Title>
                  <Card.Text style={{ color: "#555", fontSize: "1rem" }}>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
