import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <section
      className="py-5"
      id="about"
      style={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#2c3e50" }}
        >
          <span className="text-primary">About SS SURVEY POINT
          </span>
        </h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            {" "}
            {/* 'xs' for mobile, 'md' for medium screens and above */}
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                fontWeight: "400",
                color: "#34495e",
              }}
            >
              <span style={{ fontWeight: "bold", color: "#2980b9" }}>
              SS SURVEY POINT 
              </span>
             <span>  is a leading provider of surveying and design services, specializing in delivering
accurate and efficient solutions. Since our inception, we have been dedicated to providing top-notch
services to clients across various sectors.</span><br/><br/>
<span>Our team of experienced professionals utilizes state-of-the-art technology to ensure the highest level
of precision and quality in every project. Whether it’s land surveying, architectural design, or
landscape planning, we have the expertise to meet your specific needs.</span>
            </p>
            <h4
              className="mt-4"
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "#34495e",
              }}
            >
              Why Choose{" "}
              <span style={{ color: "#2980b9" }}>SS SURVEY POINT</span>?
            </h4>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                fontSize: "1.1rem",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontWeight: "500",
                  color: "#2c3e50",
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
                  style={{
                    marginRight: "10px",
                    maxWidth: "24px",
                    maxHeight: "24px",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2l4-4" />
                </svg>
                <span>
                  <strong>Precision and Accuracy:</strong> Our state-of-the-art
                  equipment and skilled professionals ensure precise results.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontWeight: "500",
                  color: "#2c3e50",
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
                  style={{
                    marginRight: "10px",
                    maxWidth: "24px",
                    maxHeight: "24px",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2l4-4" />
                </svg>
                <span>
                  <strong>Customer Satisfaction:</strong> We prioritize your
                  needs and deliver timely, efficient service.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontWeight: "500",
                  color: "#2c3e50",
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
                  style={{
                    marginRight: "10px",
                    maxWidth: "24px",
                    maxHeight: "24px",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2l4-4" />
                </svg>
                <span>
                  <strong>Comprehensive Solutions:</strong> From land surveying
                  to architectural design, we offer a wide range of services.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontWeight: "500",
                  color: "#2c3e50",
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
                  style={{
                    marginRight: "10px",
                    maxWidth: "24px",
                    maxHeight: "24px",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2l4-4" />
                </svg>
                <span>
                  <strong>Affordable Pricing:</strong> Competitive rates without
                  compromising quality.
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
