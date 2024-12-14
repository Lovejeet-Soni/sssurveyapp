import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = () => {
    return (
      <section className="py-5" id="contact">
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <h5>Address</h5>
              <p>Ratanada, Jodhpur</p>
  
              <h5>Phone</h5>
              <p><a href="tel:+911234567890">+91 12345 67890</a></p>
  
              <h5>Email</h5>
              <p><a href="mailto:info@sssurveypoint.com">info@sssurveypoint.com</a></p>
  
              <h5>Location</h5>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2241356998!2d73.01245661531702!3d26.28174638341606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE2JzUyLjMiTiA3M8KwMDEnMDkuMCJF!5e0!3m2!1sen!2sin!4v1617181723000"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </Col>
  
            <Col md={6}>
              <h5 className="mb-4">Send Us a Message</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" required />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formService">
                  <Form.Label>Service Required</Form.Label>
                  <Form.Control type="text" placeholder="Specify the service you need" required />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                </Form.Group>
  
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
  
              <div className="mt-4">
                <h5>Follow Us</h5>
                <p>
                  <a href="#" className="me-3">Facebook</a>
                  <a href="#" className="me-3">Twitter</a>
                  <a href="#">Instagram</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

  export default ContactUs