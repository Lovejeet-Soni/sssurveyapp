import React from "react";
import { Card, Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const servicesData = [
    { title: "Civil Contractors", description: "Professional civil construction services." },
    { title: "Land Surveyors", description: "Accurate land surveying services." },
    { title: "Total Station Surveyors", description: "Precise total station surveying." },
    { title: "Plot Demarcation Services", description: "Boundary marking services for plots." },
    { title: "Topographic Surveyors", description: "Detailed topographic surveys." },
    { title: "Digital Land Surveyors", description: "Digital mapping and surveying services." },
  ];

  const ServiceCard = ({ title, description }) => {
    return (
      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };
const Services = () => {
    
    return (
      <section className="py-5 bg-light" id="services">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row className="g-4">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </Row>
        </Container>
      </section>
    );
  };

  export default Services;