import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../Images/logo.png"; // Update the path to your logo file
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../Images/background.jpg";

const Homepage = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink("home");
  }, []);

  return (
    <Container fluid className="p-0" id="home">
      {/* Fixed Navbar */}
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(26, 25, 25, 0.85)",
          zIndex: 10,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          padding: "10px 0",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="navbar-dark"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontFamily: "Times New Roman",
              fontWeight: "bold",
              color: "orange",
            }}
          >
            <img
              src={logo}
              alt="Ss Survey Point"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              backgroundColor: "black",
              borderColor: "rgb(19, 75, 136)",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                onClick={() => handleLinkClick("home")}
                style={{
                  color: activeLink === "home" ? "blue" : "white",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  margin: "0 15px",
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
              >
                Home
                <span
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "orange",
                    bottom: 0,
                    left: 0,
                    transform:
                      activeLink === "home" ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease-out",
                  }}
                />
              </Nav.Link>
              {["about", "services", "contact", "faqs"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => handleLinkClick(item)}
                  style={{
                    color: activeLink === item ? "blue" : "white",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                    margin: "0 15px",
                    position: "relative",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "3px",
                      backgroundColor: "orange",
                      bottom: 0,
                      left: 0,
                      transform:
                        activeLink === item ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-out",
                    }}
                  />
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section
        className="text-light text-left d-flex flex-column align-items-start justify-content-start py-5"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          zIndex: 1,
          paddingTop: "80px", // Adjusted padding to place text below the navbar
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        <Container
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "left",
            marginTop: "100px",
          }}
        >
          <h1
            className="display-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#FFFFFF",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // Darker shadow for better contrast
              marginBottom: "20px",
              animation: "textPulse 1.5s infinite alternate", // Subtle glowing effect
            }}
          >
            Ss Survey Point
          </h1>
          <p
            className="lead"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "#FFFFFF",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Subtle shadow for readability
              animation: "fadeIn 2s ease-in", // Smooth fade-in effect
            }}
          >
            Expert Land Surveying and Civil Services in Ratanada, Jodhpur
          </p>
        </Container>
      </section>
      <style>
        {`
         @keyframes textPulse {
  0% {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 10px rgba(255, 255, 255, 0.5);
  }
  100% {
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.8);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

        `}
      </style>
    </Container>
  );
};

export default Homepage;
