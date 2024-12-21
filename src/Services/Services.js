import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from '../Images/surveyor_1.jpg';
import image2 from '../Images/service2.jpg';
import image3 from '../Images/service3.jpg';
import image4 from '../Images/service4.jpg';
import image5 from '../Images/service5.jpg';
import image6 from '../Images/service6.jpg';
import image7 from '../Images/service7.jpg';
import image8 from '../Images/service8.jpg';
import image9 from '../Images/service9.jpg';

const servicesData = [
  {
    title: "Land Surveying",
    description: "Accurate land boundary and topographic surveys.",
    image: image1,
  },
  {
    title: "Total Station Survey",
    description: "Cutting-edge technology for precise measurements.",
    image: image2,
  },
  {
    title: "Contour Surveying",
    description: "Detailed elevation mapping for various projects.",
    image: image3,
  },
  {
    title: "Residential Scheme Approvals",
    description: "Expert guidance on JDA approvals and agriculture-related surveys.",
    image: image4,
  },
  {
    title: "Demarcation Services",
    description: "Precise boundary demarcation for plots and roads.",
    image: image5,
  },
  {
    title: "Solar Project Support",
    description: "Accurate solar piling coordinate calculations.",
    image: image6,
  },
  {
    title: "Architectural Design",
    description: "2D and 3D house plans, elevations, and interior designs.",
    image: image7,
  },
  {
    title: "Landscape Design",
    description: "Creating beautiful outdoor spaces.",
    image: image8,
  },
  {
    title: "Color Consultation",
    description: "Expert advice on color schemes for your projects.",
    image: image9,
  },
];

const ServiceCard = ({ title, description, image }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card
        className="h-100"
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{
            height: "100%",
            objectFit: "fill",
            borderRadius: "8px",
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontWeight: "bold",
              color: "#007BFF", /* Blue */
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{
              fontWeight: "bold",
              color: "#333", /* Darker text */
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Services = () => {
  return (
    <section
      className="py-5"
      id="services"
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        background: "#f9f9f9", /* Light background color */
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#2980b9", 
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Services
        </h2>
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
