import { Accordion, Container } from "react-bootstrap";

const FAQs = () => {
    return (
      <section className="py-5" id="faqs">
        <Container>
          <h2 className="text-center mb-4">FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the process of a land survey?</Accordion.Header>
              <Accordion.Body>Our process involves fieldwork, data collection, and detailed reporting to ensure accuracy.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How long does it take?</Accordion.Header>
              <Accordion.Body>Depending on the project, it can take between 2 days to 2 weeks.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What documents are required for a survey?</Accordion.Header>
              <Accordion.Body>Property deeds, previous survey reports, and identification documents are typically required.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    );
  };

  export default FAQs