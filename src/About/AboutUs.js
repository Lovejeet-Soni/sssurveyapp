import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  const fadeInStyle = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(50px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section
      className="py-5"
      id="about"
      style={{
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        fontFamily: "Times New Roman, serif",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#FF6600",
            ...fadeInStyle(0),
          }}
        >
          About SS SURVEY POINT
        </h2>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={8}>
            <div style={fadeInStyle(0.2)}>
              <p className="text-justify text-muted fs-5">
                <span style={{ fontWeight: "bold", color: "#FF6600" }}>
                  SS SURVEY POINT
                </span>{" "}
                is a leading provider of surveying and design services,
                specializing in delivering accurate and efficient solutions.
                Since our inception, we have been dedicated to providing
                top-notch services to clients across various sectors.
                <br />
                <br />
                Our team of experienced professionals utilizes state-of-the-art
                technology to ensure the highest level of precision and quality
                in every project. Whether it’s land surveying, architectural
                design, or landscape planning, we have the expertise to meet
                your specific needs.
              </p>
            </div>
            <h4
              className="mt-4"
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#FF6600",
                ...fadeInStyle(0.4),
              }}
            >
              Why Choose <span style={{ color: "#FF6600" }}>SS SURVEY POINT</span>?
            </h4>
            <ul
              className="list-unstyled fs-6 mt-3"
              style={{
                ...fadeInStyle(0.6),
              }}
            >
              {[
                {
                  title: "Precision and Accuracy:",
                  description:
                    "Our state-of-the-art equipment and skilled professionals ensure precise results.",
                },
                {
                  title: "Customer Satisfaction:",
                  description: "We prioritize your needs and deliver timely, efficient service.",
                },
                {
                  title: "Comprehensive Solutions:",
                  description:
                    "From land surveying to architectural design, we offer a wide range of services.",
                },
                {
                  title: "Affordable Pricing:",
                  description: "Competitive rates without compromising quality.",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="d-flex align-items-start mb-3"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(50px)",
                    transition: `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#27ae60"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="me-2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2l4-4" />
                  </svg>
                  <span>
                    <strong>{item.title}</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
