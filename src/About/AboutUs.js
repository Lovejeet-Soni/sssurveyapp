import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
    return (
      <section className="py-5" id="about">
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p>At Ss Survey Point, we are dedicated to providing accurate and reliable land surveying services. Our mission is to offer high-quality civil services using advanced GPS technology and experienced professionals.</p>
              <h4 className="mt-4">Why Choose Us</h4>
              <ul>
                <li>Advanced GPS technology for precise results.</li>
                <li>Experienced and skilled surveyors.</li>
                <li>Competitive pricing for all services.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

  export default AboutUs;