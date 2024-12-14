import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#about" className="text-light">About Us</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#contact" className="text-light">Contact Us</a></li>
              <li><a href="#blog" className="text-light">Blog</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-uppercase">Contact Details</h5>
            <p>Ratanada, Jodhpur</p>
            <p>Phone: <a href="tel:+911234567890" className="text-light">+91 12345 67890</a></p>
            <p>Email: <a href="mailto:info@sssurveypoint.com" className="text-light">info@sssurveypoint.com</a></p>
          </Col>

          <Col md={4}>
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-light me-3" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4267B2" viewBox="0 0 24 24">
                  <path d="M9 8H7v4h2v12h5V12h3.64L18 8h-4V6.5c0-.84.16-1 1-1h3V0h-4.21C11.7 0 9 2.09 9 6v2z"/>
                </svg>
              </a>
              <a href="#" className="text-light me-3" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1DA1F2" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.62 2a4.48 4.48 0 00-4.39 5.5A12.94 12.94 0 013 4.12a4.48 4.48 0 001.39 5.98A4.5 4.5 0 012 9.47v.05a4.48 4.48 0 003.6 4.4 4.52 4.52 0 01-2 .07 4.48 4.48 0 004.18 3.11A9 9 0 010 19.54a12.94 12.94 0 007 2.05c8.38 0 13-6.94 13-12.94 0-.2 0-.42-.02-.63A9.25 9.25 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-light" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E1306C" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.1 0 3.5.01 4.7.07 1.17.05 1.96.24 2.42.41.61.23 1.06.52 1.53 1 .47.47.77.92 1 1.53.17.46.36 1.25.41 2.42.06 1.2.07 1.6.07 4.7s-.01 3.5-.07 4.7c-.05 1.17-.24 1.96-.41 2.42a4.36 4.36 0 01-1 1.53 4.36 4.36 0 01-1.53 1c-.46.17-1.25.36-2.42.41-1.2.06-1.6.07-4.7.07s-3.5-.01-4.7-.07c-1.17-.05-1.96-.24-2.42-.41a4.36 4.36 0 01-1.53-1 4.36 4.36 0 01-1-1.53c-.17-.46-.36-1.25-.41-2.42C2.21 15.5 2.2 15.1 2.2 12s.01-3.5.07-4.7c.05-1.17.24-1.96.41-2.42a4.36 4.36 0 011-1.53 4.36 4.36 0 011.53-1c.46-.17 1.25-.36 2.42-.41C8.5 2.21 8.9 2.2 12 2.2m0-2.2C8.7 0 8.29 0 7.05.07 5.8.13 4.9.3 4.15.58a6.6 6.6 0 00-2.57 1.7 6.6 6.6 0 00-1.7 2.57C-.3 5.8-.13 6.7-.07 7.95 0 8.29 0 8.7 0 12s0 3.71.07 4.95c.06 1.25.23 2.15.58 2.9a6.6 6.6 0 001.7 2.57 6.6 6.6 0 002.57 1.7c.75.35 1.65.52 2.9.58C8.29 24 8.7 24 12 24s3.71 0 4.95-.07c1.25-.06 2.15-.23 2.9-.58a6.6 6.6 0 002.57-1.7 6.6 6.6 0 001.7-2.57c.35-.75.52-1.65.58-2.9.07-1.24.07-1.65.07-4.95s0-3.71-.07-4.95c-.06-1.25-.23-2.15-.58-2.9a6.6 6.6 0 00-1.7-2.57A6.6 6.6 0 0016.95.58C16.2.23 15.3.06 14.05 0H12z"/>
                </svg>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Ss Survey Point. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
