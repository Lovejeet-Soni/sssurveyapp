import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    <Container fluid className="p-0" id="home">
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5">
        <Container>
          <h1 className="display-4">Ss Survey Point</h1>
          <p className="lead">Expert Land Surveying and Civil Services in Ratanada, Jodhpur</p>
          <Button variant="primary" size="lg">Get a Free Consultation Today!</Button>
        </Container>
      </section>
    </Container>
  );
};
export default Homepage;