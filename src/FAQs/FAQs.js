import { Accordion, Container } from "react-bootstrap";

const FAQs = () => {
  return (
    <section
      className="py-5"
      id="faqs"
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            color: "#FF8C00",
            fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Frequently Asked Questions (FAQs)
        </h2>
        <Accordion flush>
          <Accordion.Item
            eventKey="0"
            className="mb-3 shadow-sm"
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
          >
            <Accordion.Header
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
                fontFamily: "Times New Roman, serif",
                color: "#FF8C00",
              }}
            >
              What is the process of a land survey?
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#f4f9fc",
                color: "#333",
                padding: "15px",
                fontSize: "0.9rem",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Our process involves fieldwork, data collection, and detailed
              reporting to ensure accuracy.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="1"
            className="mb-3 shadow-sm"
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
          >
            <Accordion.Header
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
                fontFamily: "Times New Roman, serif",
                color: "#FF8C00",
              }}
            >
              How long does it take?
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#f4f9fc",
                color: "#333",
                padding: "15px",
                fontSize: "0.9rem",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Depending on the project, it can take between 2 days to 2 weeks.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="2"
            className="mb-3 shadow-sm"
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
          >
            <Accordion.Header
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
                fontFamily: "Times New Roman, serif",
                color: "#FF8C00",
              }}
            >
              What documents are required for a survey?
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#f4f9fc",
                color: "#333",
                padding: "15px",
                fontSize: "0.9rem",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Property deeds, previous survey reports, and identification
              documents are typically required.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQs;
