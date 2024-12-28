/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-5"
      style={{
        backgroundColor: "#002366", // Blue background
        color: "#FF7F11", // Hindu orange text
        boxShadow: "0 -3px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <Container>
        <Row>
          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5
              className="text-uppercase"
              style={{
                color: "#FF7F11",
                fontWeight: "bold",
                fontFamily: "'Times New Roman', Times, serif",
                letterSpacing: "1px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {["Home", "About Us", "Services", "Contact Us", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-light text-decoration-none"
                      style={{
                        fontSize: "1rem",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>

          {/* Contact Details */}
          <Col md={4} className="mb-4">
            <h5
              className="text-uppercase"
              style={{
                color: "#FF7F11",
                fontWeight: "bold",
                fontFamily: "'Times New Roman', Times, serif",
                letterSpacing: "1px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Contact Details
            </h5>
            <p style={{ fontSize: "1rem" }}>Ratanada, Jodhpur</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919664397950"
                className="text-light text-decoration-none"
                style={{
                  transition: "color 0.3s ease",
                }}
              >
                +91 9664397950
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sssurveypoint@gmail.com"
                className="text-light text-decoration-none"
                style={{
                  transition: "color 0.3s ease",
                }}
              >
                sssurveypoint@gmail.com
              </a>
            </p>
          </Col>

          {/* Follow Us */}
          <Col md={4} className="mb-4">
            <h5
              className="text-uppercase"
              style={{
                color: "#FF7F11",
                fontWeight: "bold",
                fontFamily: "'Times New Roman', Times, serif",
                letterSpacing: "1px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Follow Us
            </h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61571412863054"
                className="text-light"
                style={{
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={30} color="#4267B2" />
              </a>
              <a
                href="https://www.instagram.com/sssurveypoint"
                className="text-light"
                style={{
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} color="#E1306C" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col className="text-center">
            <p
              style={{
                fontSize: "0.9rem",
                borderTop: "1px solid #FF7F11",
                paddingTop: "10px",
              }}
            >
              &copy; {new Date().getFullYear()} Ss Survey Point. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
