import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../Images/image4.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/service4.jpg";
import image5 from "../Images/image.jpg";
import image6 from "../Images/image5.jpg";
import image7 from "../Images/service7.jpg";
import image8 from "../Images/service8.jpg";
import image9 from "../Images/image7.jpg";

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
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "300px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Card
          className="h-100"
          style={{
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            borderRadius: "12px",
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
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // Aspect ratio for 16:9 images
              overflow: "hidden",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "Times New Roman, serif",
                fontWeight: "bold",
                color: "#FF6600",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              {title}
            </Card.Title>
            <Card.Text
              style={{
                fontFamily: "Times New Roman, serif",
                fontSize: "1rem",
                color: "#333",
                textAlign: "center",
              }}
            >
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      style={{
        background: "#f9f9f9",
        padding: "40px 0",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#FF6600",
            fontFamily: "Times New Roman, serif",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Our Services
        </h2>
        <Row
          className="g-4"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
