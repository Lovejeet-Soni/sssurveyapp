import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import project1 from '../Images/project1.jpg';
const projectData = [
  { title: "Residential Plot Survey", description: "Completed survey for residential plots.", image: project1 },
  { title: "Commercial Land Demarcation", description: "Boundary demarcation for commercial land.", image: "/images/3.jpg" },
  { title: "Topographic Mapping", description: "Detailed topographic mapping for new projects.", image: "/images/4.jpeg" },
];

const Projects = () => {
  return (
    <section className="py-5" id="projects" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            color: "#333",
            fontWeight: "bold",
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Projects
        </h2>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card
                className="h-100 shadow-sm border-light"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease",
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#007bff",
                      marginBottom: "10px",
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Card.Text>
                  {/* <div
                    style={{
                      borderTop: "1px solid #ddd",
                      marginTop: "15px",
                      paddingTop: "10px",
                      color: "#007bff",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "right",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#007bff")}
                  >
                    Learn More →
                  </div> */}
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
