/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    service: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "", phoneNumber: "", service: "" });
      } else {
        setStatusMessage(
          "Failed to send your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      className="py-5"
      id="contact"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            color: "#FF9933", // Hindu orange
            fontWeight: "bold",
            fontFamily: "'Times New Roman', serif",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Contact Us
        </h2>
        <Row className="justify-content-center">
          {/* Contact Details */}
          <Col md={6}>
            <h5 style={{ color: "#FF9933", fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}>Address</h5>
            <p style={{ color: "#555" }}>Ratanada, Jodhpur</p>

            <h5 style={{ color: "#FF9933", fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}>
              <FaPhone className="me-2" />
              Phone
            </h5>
            <p>
              <a
                href="tel:+919664397950"
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  fontWeight: "500",
                }}
              >
                +91 9664397950
              </a>
            </p>

            <h5 style={{ color: "#FF9933", fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}>
              <FaEnvelope className="me-2" />
              Email
            </h5>
            <p>
              <a
                href="mailto:sssurveypoint@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  fontWeight: "500",
                }}
              >
                sssurveypoint@gmail.com
              </a>
            </p>

            <h5 style={{ color: "#FF9933", fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}>Location</h5>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3577.6526068958874!2d73.0226020754176!3d26.272935877034218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE2JzIyLjYiTiA3M8KwMDEnMzAuNiJF!5e0!3m2!1sen!2sin!4v1734783453414!5m2!1sen!2sin"
              width="100%"
              height="300"
              frameBorder="0"
              style={{
                border: 0,
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            ></iframe>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <h5
              className="mb-4"
              style={{ color: "#FF9933", fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}
            >
              Send Us a Message
            </h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  style={{ borderRadius: "5px" }}
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderRadius: "5px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  required
                  style={{ borderRadius: "5px" }}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formService">
                <Form.Label>Service Required</Form.Label>
                <Form.Control
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Specify the service you need"
                  required
                  style={{ borderRadius: "5px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{ borderRadius: "5px" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #007bff, #0056b3)",
                  border: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #0056b3, #007bff)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #007bff, #0056b3)")
                }
              >
                Send Message
              </Button>
            </Form>
            {statusMessage && <p className="mt-3">{statusMessage}</p>}
            <div className="mt-4">
              <h5 style={{ color: "#FF9933", fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}>Follow Us</h5>
              <p>
                <a
                  href="https://www.facebook.com/profile.php?id=61571412863054"
                  className="me-3"
                  style={{
                    color: "#007bff",
                    fontSize: "1.2rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0056b3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#007bff")
                  }
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/sssurveypoint"
                  style={{
                    color: "#007bff",
                    fontSize: "1.2rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0056b3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#007bff")
                  }
                >
                  <FaInstagram />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
